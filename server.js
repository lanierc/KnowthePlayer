/**
 * Real-Time 1v1 Football Quiz Server (Node.js + Express + Socket.io)
 * Dual Data Source: Curated Local DB vs PURE Live TheSportsDB API Mode
 * Round-by-Round Secret Team Draft
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const https = require('https');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Load curated Football Teams and Footballers Database
const { FOOTBALL_TEAMS, FOOTBALLERS } = require('./js/data.js');

// --- Simple Lightweight User Authentication & Stats Storage ---
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

function loadUsers() {
  try {
    if (!fs.existsSync(USERS_FILE)) {
      fs.mkdirSync(path.dirname(USERS_FILE), { recursive: true });
      fs.writeFileSync(USERS_FILE, '[]', 'utf8');
      return [];
    }
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error loading users.json:', err);
    return [];
  }
}

function saveUsers(users) {
  try {
    fs.mkdirSync(path.dirname(USERS_FILE), { recursive: true });
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving users.json:', err);
  }
}

function hashPassword(password) {
  return crypto.createHash('sha256').update(String(password)).digest('hex');
}

function sanitizeUser(user) {
  return {
    username: user.username,
    avatar: user.avatar || '⚽',
    stats: user.stats || { matches: 0, wins: 0, losses: 0, winRate: 0, score: 0 },
    createdAt: user.createdAt
  };
}

// User Register
app.post('/api/auth/register', (req, res) => {
  const { username, password, avatar } = req.body || {};
  const cleanUsername = String(username || '').trim();
  const cleanPassword = String(password || '').trim();

  if (!cleanUsername || cleanUsername.length < 3 || cleanUsername.length > 20) {
    return res.status(400).json({ success: false, message: 'Kullanıcı adı 3-20 karakter arasında olmalıdır.' });
  }
  if (!cleanPassword || cleanPassword.length < 4) {
    return res.status(400).json({ success: false, message: 'Şifre en az 4 karakter olmalıdır.' });
  }

  const users = loadUsers();
  const exists = users.some(u => u.username.toLowerCase() === cleanUsername.toLowerCase());
  if (exists) {
    return res.status(400).json({ success: false, message: 'Bu kullanıcı adı zaten alınmış.' });
  }

  const newUser = {
    username: cleanUsername,
    password: hashPassword(cleanPassword),
    avatar: avatar || '⚽',
    stats: {
      matches: 0,
      wins: 0,
      losses: 0,
      winRate: 0,
      score: 0
    },
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  res.json({
    success: true,
    message: 'Kayıt başarılı!',
    user: sanitizeUser(newUser)
  });
});

// User Login
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body || {};
  const cleanUsername = String(username || '').trim();
  const cleanPassword = String(password || '').trim();

  const users = loadUsers();
  const user = users.find(u => u.username.toLowerCase() === cleanUsername.toLowerCase());

  if (!user || user.password !== hashPassword(cleanPassword)) {
    return res.status(401).json({ success: false, message: 'Kullanıcı adı veya şifre hatalı.' });
  }

  res.json({
    success: true,
    message: 'Giriş başarılı!',
    user: sanitizeUser(user)
  });
});

// User Profile
app.get('/api/auth/profile/:username', (req, res) => {
  const username = req.params.username;
  const users = loadUsers();
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());

  if (!user) {
    return res.status(404).json({ success: false, message: 'Kullanıcı bulunamadı.' });
  }

  res.json({ success: true, user: sanitizeUser(user) });
});

// Leaderboard
app.get('/api/auth/leaderboard', (req, res) => {
  const users = loadUsers();
  const sorted = users
    .map(sanitizeUser)
    .sort((a, b) => {
      if (b.stats.wins !== a.stats.wins) return b.stats.wins - a.stats.wins;
      return b.stats.winRate - a.stats.winRate;
    })
    .slice(0, 20);

  res.json({ success: true, leaderboard: sorted });
});

// API endpoint to expose all players
app.get('/api/players', (req, res) => {
  res.json(FOOTBALLERS);
});

// API endpoint to expose curated team list
app.get('/api/teams', (req, res) => {
  res.json(FOOTBALL_TEAMS);
});

app.get('/api/stats', (req, res) => {
  const totalPlayers = FOOTBALLERS.length;
  const uniqueTeamIds = new Set(FOOTBALLERS.flatMap(p => p.teamsPlayed || []));

  res.json({
    totalPlayers,
    curatedTeams: FOOTBALL_TEAMS.length,
    referencedTeamCount: uniqueTeamIds.size,
    referencedTeams: Array.from(uniqueTeamIds)
  });
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const GAME_MATCHUPS = [
  { team1: 'real_madrid', team2: 'juventus', validPlayerIds: ['c_ronaldo', 'a_di_maria', 'g_higuain', 'a_morata', 'n_anelka', 'z_ibrahimovic', 'f_cannavaro'] },
  { team1: 'barcelona', team2: 'psg', validPlayerIds: ['l_messi', 'neymar_jr', 'r_ronaldinho', 'z_ibrahimovic', 'm_depay'] },
  { team1: 'real_madrid', team2: 'barcelona', validPlayerIds: ['l_figo', 'r_ronaldinho', 'k_benzema', 'l_messi', 'c_fabregas', 'p_coutinho', 'l_suarez', 'a_vidal', 'm_alonso', 'arda_turan'] },
  { team1: 'ac_milan', team2: 'real_madrid', validPlayerIds: ['kaka', 'd_beckham', 'a_morata', 'm_alonso'] },
  { team1: 'arsenal', team2: 'fenerbahce', validPlayerIds: ['m_ozil', 'r_van_persie', 'n_anelka'] },
  { team1: 'chelsea', team2: 'galatasaray', validPlayerIds: ['d_drogba', 'r_falcao'] },
  { team1: 'bayern', team2: 'barcelona', validPlayerIds: ['r_lewandowski', 'p_coutinho', 'a_vidal', 'i_gundogan'] },
  { team1: 'juventus', team2: 'ac_milan', validPlayerIds: ['a_pirlo', 'z_ibrahimovic', 'g_higuain', 'a_morata'] },
  { team1: 'liverpool', team2: 'barcelona', validPlayerIds: ['l_suarez', 'p_coutinho'] },
  { team1: 'atletico', team2: 'liverpool', validPlayerIds: ['f_torres', 'l_suarez'] },
  { team1: 'tottenham', team2: 'real_madrid', validPlayerIds: ['g_bale', 'l_modric'] },
  { team1: 'dortmund', team2: 'man_city', validPlayerIds: ['e_haaland', 'i_gundogan'] },
  { team1: 'chelsea', team2: 'man_city', validPlayerIds: ['nathan_ake', 'k_de_bruyne', 'f_lampard', 'r_sterling', 'm_kovacic'] },
  { team1: 'chelsea', team2: 'liverpool', validPlayerIds: ['m_salah', 'f_torres', 'm_balotelli', 'n_anelka'] },
  { team1: 'roma', team2: 'juventus', validPlayerIds: ['m_pjanić', 'r_lukaku'] },
  { team1: 'porto', team2: 'real_madrid', validPlayerIds: ['pepe', 'casemiro', 'james_rodriguez'] },
  { team1: 'real_madrid', team2: 'besiktas', validPlayerIds: ['pepe'] },
  { team1: 'inter', team2: 'psg', validPlayerIds: ['z_ibrahimovic', 'm_icardi'] },
  { team1: 'napoli', team2: 'galatasaray', validPlayerIds: ['v_osimhen'] },
  { team1: 'galatasaray', team2: 'besiktas', validPlayerIds: ['burak_yilmaz', 'sergen_yalcin', 'mehmet_topal', 'caner_erkin', 'rustu_recber'] },
  { team1: 'fenerbahce', team2: 'besiktas', validPlayerIds: ['burak_yilmaz', 'sergen_yalcin', 'caner_erkin', 'gokhan_gonul', 'mehmet_topal', 'cenk_tosun', 'rustu_recber', 'kazim_kazim'] },
  { team1: 'galatasaray', team2: 'fenerbahce', validPlayerIds: ['burak_yilmaz', 'sergen_yalcin', 'emre_belozoglu', 'mehmet_topal', 'caner_erkin', 'kazim_kazim'] }
];

const rooms = {};

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return 'MATCH-' + code;
}

function areSameMatchup(a, b) {
  return (a.team1 === b.team1 && a.team2 === b.team2) || (a.team1 === b.team2 && a.team2 === b.team1);
}

function normalizeMatchup(matchup) {
  if (matchup.team1 < matchup.team2) return { team1: matchup.team1, team2: matchup.team2 };
  return { team1: matchup.team2, team2: matchup.team1 };
}

async function getRandomMatchup(roomCode, teams = null, dataSource = 'LOCAL') {
  const recent = (roomCode && rooms[roomCode] && rooms[roomCode].recentMatchups) || [];
  let candidates;

  if (teams && teams.length >= 2) {
    candidates = [];
    for (let i = 0; i < teams.length - 1; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        candidates.push({ team1: teams[i].id, team2: teams[j].id });
      }
    }
  } else {
    candidates = GAME_MATCHUPS.slice();
  }

  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  let chosen = null;

  // Find a non-recent matchup that has at least one valid player
  for (const m of candidates) {
    if (!recent.some(r => areSameMatchup(r, m))) {
      let validIds = m.validPlayerIds;
      if (!validIds) {
        validIds = await getDynamicValidPlayers(m.team1, m.team2, dataSource);
      }
      if (validIds && validIds.length > 0) {
        m.validPlayerIds = validIds;
        chosen = m;
        break;
      }
    }
  }

  // Fallback: If no non-recent valid matchup found, pick any valid matchup
  if (!chosen) {
    for (const m of candidates) {
      let validIds = m.validPlayerIds;
      if (!validIds) {
        validIds = await getDynamicValidPlayers(m.team1, m.team2, dataSource);
      }
      if (validIds && validIds.length > 0) {
        m.validPlayerIds = validIds;
        chosen = m;
        break;
      }
    }
  }

  // Extreme fallback (should not happen if data is rich)
  if (!chosen) {
    chosen = candidates[0];
    if (!chosen.validPlayerIds) {
      chosen.validPlayerIds = await getDynamicValidPlayers(chosen.team1, chosen.team2, dataSource);
    }
  }

  if (roomCode) {
    rooms[roomCode] = rooms[roomCode] || {};
    rooms[roomCode].recentMatchups = rooms[roomCode].recentMatchups || [];
    rooms[roomCode].recentMatchups.unshift(normalizeMatchup(chosen));
    if (rooms[roomCode].recentMatchups.length > 5) rooms[roomCode].recentMatchups.pop();
  }

  return chosen;
}

async function getDynamicValidPlayers(t1, t2, dataSource = 'LOCAL') {
  if (dataSource === 'API') {
    const [team1Players, team2Players] = await Promise.all([
      fetchPlayersForTeam(t1),
      fetchPlayersForTeam(t2)
    ]);
    const ids1 = new Set(team1Players.map(p => p.id));
    const common = team2Players.filter(p => ids1.has(p.id));
    return common.map(p => p.id);
  }
  // Local fallback
  return FOOTBALLERS.filter(p =>
    p.teamsPlayed.includes(t1) && p.teamsPlayed.includes(t2)
  ).map(p => p.id);
}

function startServerRoundTimer(roomCode) {
  const room = rooms[roomCode];
  if (!room) return;

  if (room.timerInterval) clearInterval(room.timerInterval);
  
  room.secondsLeft = 30;
  room.passVotes = new Set();

  room.timerInterval = setInterval(() => {
    room.secondsLeft--;

    if (room.secondsLeft <= 0) {
      clearInterval(room.timerInterval);
      room.timerInterval = null;

      io.to(roomCode).emit('round_draw', {
        message: '⏰ Zaman Doldu! Tur Berabere.',
        hostScore: room.host.score,
        guestScore: room.guest.score,
        roundNumber: room.roundNumber,
        targetScore: room.targetScore
      });

      setTimeout(() => {
        if (rooms[roomCode] && (rooms[roomCode].status === 'PLAYING' || rooms[roomCode].status === 'SELECTING_ROUND_TEAMS')) {
          startNextRound(roomCode);
        }
      }, 3500);
    }
  }, 1000);
}

async function startNextRound(roomCode) {
  const room = rooms[roomCode];
  if (!room) return;

  if (room.gameMode === 'CUSTOM') {
    room.status = 'SELECTING_ROUND_TEAMS';
    room.host.roundTeamLocked = false;
    if (room.guest) room.guest.roundTeamLocked = false;

    io.to(roomCode).emit('request_round_team_selection', {
      nextRoundNumber: room.roundNumber + 1,
      hostLocked: false,
      guestLocked: false,
      allTeams: room.allTeams || FOOTBALL_TEAMS
    });
  } else {
    room.roundNumber++;
    const matchup = await getRandomMatchup(roomCode, room.allTeams, room.dataSource);
    room.currentMatchup = matchup;

    const team1Obj = (room.allTeams || FOOTBALL_TEAMS).find(t => t.id === matchup.team1) || FOOTBALL_TEAMS.find(t => t.id === matchup.team1);
    const team2Obj = (room.allTeams || FOOTBALL_TEAMS).find(t => t.id === matchup.team2) || FOOTBALL_TEAMS.find(t => t.id === matchup.team2);

    io.to(roomCode).emit('next_round_started', {
      roundNumber: room.roundNumber,
      matchup,
      team1Obj,
      team2Obj,
      hostScore: room.host.score,
      guestScore: room.guest.score,
      targetScore: room.targetScore
    });

    startServerRoundTimer(roomCode);
  }
}

// Pure Live API Fetcher from TheSportsDB
function fetchLiveAPITeamsFromURL(url) {
  return new Promise((resolve) => {
    const req = https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json && json.teams) {
            const parsed = json.teams.map(t => ({
              id: t.strTeam.toLowerCase().replace(/[^a-z0-9]/g, '_'),
              name: `[API 🌐] ${t.strTeam}`,
              short: t.strTeamShort || t.strTeam.substring(0, 3).toUpperCase(),
              color: t.strColour1 || '#00d2ff',
              country: `${t.strCountry} (Live API)`
            }));
            resolve(parsed);
          } else {
            resolve([]);
          }
        } catch (e) {
          resolve([]);
        }
      });
    });
    req.on('error', () => resolve([]));
    req.setTimeout(4000, () => {
      req.destroy();
      resolve([]);
    });
  });
}

async function getPureLiveAPITeams() {
  const premierURL = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League';
  const laLigaURL = 'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Spanish%20La%20Liga';

  const [eplTeams, laLigaTeams] = await Promise.all([
    fetchLiveAPITeamsFromURL(premierURL),
    fetchLiveAPITeamsFromURL(laLigaURL)
  ]);

  const combined = [...eplTeams, ...laLigaTeams];
  if (combined.length > 0) {
    return combined;
  }
  return FOOTBALL_TEAMS;
}

function fetchPlayersForTeam(teamName) {
  return new Promise((resolve) => {
    const query = teamName.replace(/_/g, ' ');
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=${encodeURIComponent(query)}`;
    https.get(url, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json && json.player) {
            resolve(json.player.map(p => ({
              id: p.strPlayer.toLowerCase().replace(/[^a-z0-9]/g, '_'),
              name: p.strPlayer
            })));
          } else {
            resolve([]);
          }
        } catch (e) { resolve([]); }
      });
    }).on('error', () => resolve([]));
  });
}

// API Endpoints for testing
app.get('/api/teams', async (req, res) => {
  const source = req.query.source || 'LOCAL';
  if (source === 'API') {
    const teams = await getPureLiveAPITeams();
    res.json({ source: 'API', teams });
  } else {
    res.json({ source: 'LOCAL', teams: FOOTBALL_TEAMS });
  }
});

app.get('/api/searchplayer', async (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.status(400).json({ error: 'name query param required' });
  }
  try {
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(name)}`;
    https.get(url, (apiRes) => {
      let body = '';
      apiRes.on('data', (chunk) => (body += chunk));
      apiRes.on('end', () => {
        try {
          const data = JSON.parse(body);
          res.json(data);
        } catch (e) {
          res.status(500).json({ error: 'Failed to parse API response' });
        }
      });
    }).on('error', () => {
      res.status(500).json({ error: 'API request failed' });
    });
  } catch (e) {
    res.status(500).json({ error: 'Unexpected error' });
  }
});


io.on('connection', (socket) => {
  socket.on('create_room', async (data) => {
    const username = data.username || 'Oyuncu 1';
    const gameMode = data.gameMode || 'RANDOM';
    const dataSource = data.dataSource || 'LOCAL';
    const roomCode = generateRoomCode();

    let roomTeams = FOOTBALL_TEAMS;
    if (dataSource === 'API') {
      roomTeams = await getPureLiveAPITeams();
    }

    rooms[roomCode] = {
      code: roomCode,
      host: { id: socket.id, username, score: 0, selectedTeam: roomTeams[0].id, roundTeamLocked: false },
      guest: null,
      gameMode,
      dataSource,
      targetScore: 3,
      roundNumber: 1,
      status: 'WAITING',
      currentMatchup: null,
      passVotes: new Set(),
      timerInterval: null,
      allTeams: roomTeams
    };

    socket.join(roomCode);
    socket.roomCode = roomCode;

    socket.emit('room_created', {
      roomCode,
      username,
      gameMode,
      dataSource,
      isHost: true,
      hostTeam: roomTeams[0].id,
      allTeams: roomTeams
    });
  });

  socket.on('join_room', (data) => {
    const { roomCode, username } = data;
    const room = rooms[roomCode?.toUpperCase()];

    if (!room) {
      socket.emit('error_message', { message: 'Oda bulunamadı! Kodu kontrol edin.' });
      return;
    }

    if (room.guest) {
      socket.emit('error_message', { message: 'Oda dolu! Başka bir odaya katılın.' });
      return;
    }

    const defaultGuestTeam = room.allTeams.length > 1 ? room.allTeams[1].id : 'barcelona';
    room.guest = { id: socket.id, username: username || 'Oyuncu 2', score: 0, selectedTeam: defaultGuestTeam, roundTeamLocked: false };
    socket.join(room.code);
    socket.roomCode = room.code;

    socket.emit('room_joined', {
      roomCode: room.code,
      hostName: room.host.username,
      guestName: room.guest.username,
      gameMode: room.gameMode,
      dataSource: room.dataSource,
      isHost: false,
      hostTeam: room.host.selectedTeam,
      guestTeam: room.guest.selectedTeam,
      allTeams: room.allTeams || FOOTBALL_TEAMS
    });

    socket.to(room.code).emit('opponent_joined', {
      guestName: room.guest.username,
      guestTeam: room.guest.selectedTeam
    });
  });

  socket.on('select_team', (data) => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];
    if (!room || room.status !== 'WAITING') return;

    const { teamId } = data;

    if (socket.id === room.host.id) {
      room.host.selectedTeam = teamId;
      room.host.roundTeamLocked = true;
    } else if (room.guest && socket.id === room.guest.id) {
      room.guest.selectedTeam = teamId;
      room.guest.roundTeamLocked = true;
    }

    io.to(roomCode).emit('team_status_updated', {
      hostHasTeam: !!room.host.selectedTeam,
      guestHasTeam: !!(room.guest && room.guest.selectedTeam)
    });
  });

  socket.on('submit_round_team', async (data) => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];

    if (!room || (room.status !== 'SELECTING_ROUND_TEAMS' && room.status !== 'WAITING')) return;

    const { teamId } = data;

    if (socket.id === room.host.id) {
      room.host.selectedTeam = teamId;
      room.host.roundTeamLocked = true;
    } else if (room.guest && socket.id === room.guest.id) {
      room.guest.selectedTeam = teamId;
      room.guest.roundTeamLocked = true;
    }

    const hostLocked = room.host.roundTeamLocked;
    const guestLocked = room.guest ? room.guest.roundTeamLocked : false;

    io.to(roomCode).emit('round_team_status_updated', {
      hostLocked,
      guestLocked
    });

    if (hostLocked && guestLocked) {
      const t1 = room.host.selectedTeam;
      const t2 = room.guest.selectedTeam;

      if (t1 === t2) {
        room.host.roundTeamLocked = false;
        room.guest.roundTeamLocked = false;
        io.to(roomCode).emit('round_team_status_updated', { hostLocked: false, guestLocked: false });
        io.to(roomCode).emit('error_message', { message: 'İki taraf da aynı takımı seçti! Lütfen farklı takımlar seçin.' });
        return;
      }

      const validPlayerIds = await getDynamicValidPlayers(t1, t2, room.dataSource);

      if (validPlayerIds.length === 0) {
        room.host.roundTeamLocked = false;
        room.guest.roundTeamLocked = false;
        io.to(roomCode).emit('round_team_status_updated', { hostLocked: false, guestLocked: false });
        io.to(roomCode).emit('error_message', { message: 'Seçilen iki takım arasında veri tabanımızda ortak futbolcu bulunamadı! Lütfen farklı takımlar seçin.' });
        return;
      }

      if (room.status === 'SELECTING_ROUND_TEAMS') {
        room.roundNumber++;
      }
      room.status = 'PLAYING';

      const matchup = { team1: t1, team2: t2, validPlayerIds };
      room.currentMatchup = matchup;

      const team1Obj = (room.allTeams || FOOTBALL_TEAMS).find(t => t.id === t1) || FOOTBALL_TEAMS.find(t => t.id === t1);
      const team2Obj = (room.allTeams || FOOTBALL_TEAMS).find(t => t.id === t2) || FOOTBALL_TEAMS.find(t => t.id === t2);

      io.to(roomCode).emit('next_round_started', {
        roundNumber: room.roundNumber,
        matchup,
        team1Obj,
        team2Obj,
        hostScore: room.host.score,
        guestScore: room.guest.score,
        targetScore: room.targetScore
      });

      startServerRoundTimer(roomCode);
    }
  });

  socket.on('start_game', async () => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];

    if (!room || room.host.id !== socket.id) {
      socket.emit('error_message', { message: 'Sadece oda sahibi oyunu başlatabilir.' });
      return;
    }

    if (!room.guest) {
      socket.emit('error_message', { message: 'Rakip bekleniyor, oyun başlatılamaz.' });
      return;
    }

    if (room.gameMode === 'CUSTOM') {
      if (!room.host.selectedTeam || !room.guest.selectedTeam) {
        socket.emit('error_message', { message: 'İki taraf da takımlarını seçmelidir!' });
        return;
      }

      if (room.host.selectedTeam === room.guest.selectedTeam) {
        socket.emit('error_message', { message: 'İki oyuncu farklı takımlar seçmelidir!' });
        return;
      }
    }

    room.host.score = 0;
    room.guest.score = 0;
    room.roundNumber = 1;
    room.status = 'PLAYING';

    let matchup;
    if (room.gameMode === 'CUSTOM') {
      const t1 = room.host.selectedTeam;
      const t2 = room.guest.selectedTeam;
      matchup = {
        team1: t1,
        team2: t2,
        validPlayerIds: await getDynamicValidPlayers(t1, t2, room.dataSource)
      };
    } else {
      if (room.dataSource === 'API' && room.allTeams.length >= 2) {
        const rand1 = Math.floor(Math.random() * room.allTeams.length);
        let rand2 = Math.floor(Math.random() * room.allTeams.length);
        while (rand1 === rand2) rand2 = Math.floor(Math.random() * room.allTeams.length);
        matchup = {
          team1: room.allTeams[rand1].id,
          team2: room.allTeams[rand2].id,
          validPlayerIds: await getDynamicValidPlayers(room.allTeams[rand1].id, room.allTeams[rand2].id, room.dataSource)
        };
      } else {
        matchup = await getRandomMatchup(roomCode, room.allTeams, room.dataSource);
      }
    }

    room.currentMatchup = matchup;

    const team1Obj = (room.allTeams || FOOTBALL_TEAMS).find(t => t.id === matchup.team1) || FOOTBALL_TEAMS.find(t => t.id === matchup.team1);
    const team2Obj = (room.allTeams || FOOTBALL_TEAMS).find(t => t.id === matchup.team2) || FOOTBALL_TEAMS.find(t => t.id === matchup.team2);

    io.to(roomCode).emit('game_started', {
      matchup,
      team1Obj,
      team2Obj,
      hostName: room.host.username,
      guestName: room.guest.username,
      hostScore: 0,
      guestScore: 0,
      roundNumber: 1,
      targetScore: room.targetScore,
      gameMode: room.gameMode,
      dataSource: room.dataSource
    });

    startServerRoundTimer(roomCode);
  });

  socket.on('player_typing', (data) => {
    const roomCode = socket.roomCode;
    if (roomCode) {
      socket.to(roomCode).emit('opponent_typing', {
        username: data.username
      });
    }
  });

  socket.on('vote_pass', () => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];

    if (!room || room.status !== 'PLAYING') return;

    room.passVotes.add(socket.id);
    const voteCount = room.passVotes.size;

    if (voteCount >= 2) {
      if (room.timerInterval) clearInterval(room.timerInterval);
      room.passVotes.clear();

      io.to(roomCode).emit('round_skipped', {
        message: '⏩ İki taraf da PAS dedi! Yeni tura geçiliyor...',
        hostScore: room.host.score,
        guestScore: room.guest.score,
        roundNumber: room.roundNumber
      });

      setTimeout(() => {
        if (rooms[roomCode] && (rooms[roomCode].status === 'PLAYING' || rooms[roomCode].status === 'SELECTING_ROUND_TEAMS')) {
          startNextRound(roomCode);
        }
      }, 2500);
    } else {
      const voterName = (socket.id === room.host.id) ? room.host.username : (room.guest ? room.guest.username : 'Rakip');
      
      socket.to(roomCode).emit('opponent_pass_voted', {
        voterName,
        voteCount: 1,
        totalRequired: 2
      });

      socket.emit('pass_vote_acknowledged', {
        voteCount: 1,
        totalRequired: 2
      });
    }
  });

  socket.on('submit_guess', async (data) => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];

    if (!room || room.status !== 'PLAYING') return;

    const { playerId, username } = data;
    const validIds = room.currentMatchup.validPlayerIds;
    
    let isCorrect = validIds.includes(playerId);

    if (!isCorrect && room.currentMatchup) {
      const dynamicValid = await getDynamicValidPlayers(room.currentMatchup.team1, room.currentMatchup.team2, room.dataSource);
      if (dynamicValid.includes(playerId)) {
        isCorrect = true;
      }
    }

    if (isCorrect) {
      if (room.timerInterval) clearInterval(room.timerInterval);

      if (socket.id === room.host.id) {
        room.host.score++;
      } else if (room.guest && socket.id === room.guest.id) {
        room.guest.score++;
      }

      const winningPlayerObj = FOOTBALLERS.find(p => p.id === playerId) || { name: playerId, details: 'Ortak Futbolcu (Live API)' };
      const team1Obj = (room.allTeams || FOOTBALL_TEAMS).find(t => t.id === room.currentMatchup.team1) || FOOTBALL_TEAMS.find(t => t.id === room.currentMatchup.team1);
      const team2Obj = (room.allTeams || FOOTBALL_TEAMS).find(t => t.id === room.currentMatchup.team2) || FOOTBALL_TEAMS.find(t => t.id === room.currentMatchup.team2);

      const isHostWinner = room.host.score >= room.targetScore;
      const isGuestWinner = room.guest && room.guest.score >= room.targetScore;

      if (isHostWinner || isGuestWinner) {
        room.status = 'ENDED';
        const matchWinnerName = isHostWinner ? room.host.username : room.guest.username;
        const matchWinnerId = isHostWinner ? room.host.id : room.guest.id;

        // Auto update registered user stats if any
        try {
          const users = loadUsers();
          let changed = false;

          const hostUser = users.find(u => u.username.toLowerCase() === room.host.username.toLowerCase());
          if (hostUser) {
            hostUser.stats = hostUser.stats || { matches: 0, wins: 0, losses: 0, winRate: 0, score: 0 };
            hostUser.stats.matches++;
            if (isHostWinner) hostUser.stats.wins++;
            else hostUser.stats.losses++;
            hostUser.stats.score += room.host.score;
            hostUser.stats.winRate = Math.round((hostUser.stats.wins / hostUser.stats.matches) * 100);
            changed = true;
          }

          if (room.guest) {
            const guestUser = users.find(u => u.username.toLowerCase() === room.guest.username.toLowerCase());
            if (guestUser) {
              guestUser.stats = guestUser.stats || { matches: 0, wins: 0, losses: 0, winRate: 0, score: 0 };
              guestUser.stats.matches++;
              if (isGuestWinner) guestUser.stats.wins++;
              else guestUser.stats.losses++;
              guestUser.stats.score += room.guest.score;
              guestUser.stats.winRate = Math.round((guestUser.stats.wins / guestUser.stats.matches) * 100);
              changed = true;
            }
          }

          if (changed) {
            saveUsers(users);
          }
        } catch (e) {
          console.error('Error updating match stats:', e);
        }

        io.to(roomCode).emit('match_over', {
          winnerName: matchWinnerName,
          winnerSocketId: matchWinnerId,
          playerObj: winningPlayerObj,
          hostScore: room.host.score,
          guestScore: room.guest.score,
          hostName: room.host.username,
          guestName: room.guest.username,
          team1Name: team1Obj.name,
          team2Name: team2Obj.name
        });
      } else {
        io.to(roomCode).emit('round_won', {
          roundWinnerName: username,
          roundWinnerSocketId: socket.id,
          playerObj: winningPlayerObj,
          hostScore: room.host.score,
          guestScore: room.guest.score,
          roundNumber: room.roundNumber,
          targetScore: room.targetScore
        });

        setTimeout(() => {
          if (rooms[roomCode] && (rooms[roomCode].status === 'PLAYING' || rooms[roomCode].status === 'SELECTING_ROUND_TEAMS')) {
            startNextRound(roomCode);
          }
        }, 3500);
      }
    } else {
      socket.emit('wrong_guess', { message: 'Yanlış futbolcu! İki takımda da oynamadı.' });
      socket.to(roomCode).emit('opponent_wrong_guess', { username });
    }
  });

  socket.on('restart_game', () => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];
    if (room) {
      if (room.timerInterval) clearInterval(room.timerInterval);
      room.status = 'WAITING';
      room.host.score = 0;
      if (room.guest) room.guest.score = 0;
      io.to(roomCode).emit('return_to_waiting');
    }
  });

  socket.on('disconnect', () => {
    const roomCode = socket.roomCode;
    const room = rooms[roomCode];

    if (room) {
      if (room.timerInterval) clearInterval(room.timerInterval);
      socket.to(roomCode).emit('opponent_disconnected', {
        message: 'Rakip oyundan ayrıldı.'
      });
      delete rooms[roomCode];
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(`⚡ Football Matchup 1v1 Server running on port ${PORT}`);
  console.log(`=================================================`);
});
