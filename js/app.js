/**
 * Core Application Controller for 1v1 Football Quiz SPA
 * Dual Game Modes with Per-Round Secret Team Draft & Expanded Database
 */

const socket = typeof io !== 'undefined' ? io() : null;

const AppState = {
  username: 'Oyuncu 1',
  roomCode: '',
  gameMode: 'RANDOM', // 'RANDOM' or 'CUSTOM'
  isHost: true,
  opponentJoined: false,
  opponentName: 'Rakip',
  currentMatchup: null,
  team1Obj: null,
  team2Obj: null,
  timerInterval: null,
  secondsLeft: 30,
  selectedPlayer: null,
  hostScore: 0,
  guestScore: 0,
  roundNumber: 1,
  targetScore: 3,
  hasVotedPass: false,
  allTeams: [],
  mySelectedTeam: 'real_madrid',
  opponentHasSelectedTeam: true,
  dataSource: 'LOCAL', // 'LOCAL' or 'API'
  roundLocked: false
};

// --- Lightweight User Authentication & Profile Manager ---
const Auth = {
  currentUser: null,

  init() {
    try {
      const saved = localStorage.getItem('gtp_user');
      if (saved) {
        this.currentUser = JSON.parse(saved);
        this.updateUI();
        this.refreshProfile();
      }
    } catch (e) {
      console.warn('Error reading saved user:', e);
    }
  },

  updateUI() {
    const btnOpenAuth = document.getElementById('btn-open-auth');
    const btnOpenProfile = document.getElementById('btn-open-profile');
    const userAvatarBadge = document.getElementById('user-avatar-badge');
    const userNameBadge = document.getElementById('user-name-badge');
    const userStatsPill = document.getElementById('user-stats-pill');
    const inputUsername = document.getElementById('input-username');

    const lobbyGuestContainer = document.getElementById('lobby-guest-username-container');
    const lobbyLoggedInContainer = document.getElementById('lobby-logged-in-container');
    const lobbyUserAvatar = document.getElementById('lobby-user-avatar');
    const lobbyUserName = document.getElementById('lobby-user-name');

    if (this.currentUser) {
      if (btnOpenAuth) btnOpenAuth.classList.add('hidden');
      if (btnOpenProfile) {
        btnOpenProfile.classList.remove('hidden');
        btnOpenProfile.classList.add('flex');
      }
      if (userAvatarBadge) userAvatarBadge.textContent = this.currentUser.avatar || '⚽';
      if (userNameBadge) userNameBadge.textContent = this.currentUser.username;
      if (userStatsPill) {
        const wins = (this.currentUser.stats && this.currentUser.stats.wins) || 0;
        userStatsPill.textContent = `${wins}G`;
      }
      if (inputUsername) {
        inputUsername.value = this.currentUser.username;
      }
      AppState.username = this.currentUser.username;

      // Hide guest username field in lobby and show logged in banner
      if (lobbyGuestContainer) lobbyGuestContainer.classList.add('hidden');
      if (lobbyLoggedInContainer) {
        lobbyLoggedInContainer.classList.remove('hidden');
        lobbyLoggedInContainer.classList.add('flex');
      }
      if (lobbyUserAvatar) lobbyUserAvatar.textContent = this.currentUser.avatar || '⚽';
      if (lobbyUserName) lobbyUserName.textContent = this.currentUser.username;
    } else {
      if (btnOpenAuth) btnOpenAuth.classList.remove('hidden');
      if (btnOpenProfile) {
        btnOpenProfile.classList.add('hidden');
        btnOpenProfile.classList.remove('flex');
      }

      // Show guest username field in lobby and hide logged in banner
      if (lobbyGuestContainer) lobbyGuestContainer.classList.remove('hidden');
      if (lobbyLoggedInContainer) {
        lobbyLoggedInContainer.classList.add('hidden');
        lobbyLoggedInContainer.classList.remove('flex');
      }
    }
    if (window.lucide) window.lucide.createIcons();
  },

  async login(username, password) {
    const errEl = document.getElementById('login-error');
    if (errEl) errEl.classList.add('hidden');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (!data.success) {
        if (errEl) {
          errEl.textContent = data.message || 'Giriş başarısız.';
          errEl.classList.remove('hidden');
        }
        return false;
      }

      this.currentUser = data.user;
      localStorage.setItem('gtp_user', JSON.stringify(data.user));
      this.updateUI();
      this.closeModals();
      UI.showNotification(`Hoş geldin, ${data.user.username}! ⚽`, 'success');
      return true;
    } catch (e) {
      if (errEl) {
        errEl.textContent = 'Bağlantı hatası oluştu.';
        errEl.classList.remove('hidden');
      }
      return false;
    }
  },

  async register(username, password, avatar) {
    const errEl = document.getElementById('reg-error');
    if (errEl) errEl.classList.add('hidden');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, avatar })
      });
      const data = await res.json();
      if (!data.success) {
        if (errEl) {
          errEl.textContent = data.message || 'Kayıt başarısız.';
          errEl.classList.remove('hidden');
        }
        return false;
      }

      this.currentUser = data.user;
      localStorage.setItem('gtp_user', JSON.stringify(data.user));
      this.updateUI();
      this.closeModals();
      UI.showNotification(`Hesabın oluşturuldu! Hoş geldin, ${data.user.username} 🏆`, 'success');
      return true;
    } catch (e) {
      if (errEl) {
        errEl.textContent = 'Bağlantı hatası oluştu.';
        errEl.classList.remove('hidden');
      }
      return false;
    }
  },

  async refreshProfile() {
    if (!this.currentUser) return;
    try {
      const res = await fetch(`/api/auth/profile/${encodeURIComponent(this.currentUser.username)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.user) {
          this.currentUser = data.user;
          localStorage.setItem('gtp_user', JSON.stringify(data.user));
          this.updateUI();
        }
      }
    } catch (e) {}
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('gtp_user');
    this.updateUI();
    this.closeModals();
    UI.showNotification('Oturum kapatıldı 👋', 'info');
  },

  openProfile() {
    if (!this.currentUser) return;
    const profAvatar = document.getElementById('prof-avatar');
    const profUsername = document.getElementById('prof-username');
    const profLevelBadge = document.getElementById('prof-level-badge');
    const profLevelTitle = document.getElementById('prof-level-title');
    const profXpText = document.getElementById('prof-xp-text');
    const profXpBar = document.getElementById('prof-xp-bar');
    const profMatches = document.getElementById('prof-matches');
    const profWins = document.getElementById('prof-wins');
    const profLosses = document.getElementById('prof-losses');
    const profWinrate = document.getElementById('prof-winrate');
    const profMaxStreak = document.getElementById('prof-max-streak');

    if (profAvatar) profAvatar.textContent = this.currentUser.avatar || '⚽';
    if (profUsername) profUsername.textContent = this.currentUser.username;
    if (profLevelBadge) profLevelBadge.textContent = `Lvl ${this.currentUser.level || 1}`;
    if (profLevelTitle) profLevelTitle.textContent = this.currentUser.levelTitle || 'Çaylak';
    if (profXpText) profXpText.textContent = `${this.currentUser.xp || 0} / ${this.currentUser.nextLevelXp || 100} XP`;
    if (profXpBar) profXpBar.style.width = `${this.currentUser.levelProgress || 0}%`;

    if (profMatches) profMatches.textContent = (this.currentUser.stats && this.currentUser.stats.matches) || 0;
    if (profWins) profWins.textContent = (this.currentUser.stats && this.currentUser.stats.wins) || 0;
    if (profLosses) profLosses.textContent = (this.currentUser.stats && this.currentUser.stats.losses) || 0;
    if (profWinrate) profWinrate.textContent = `%${(this.currentUser.stats && this.currentUser.stats.winRate) || 0}`;
    if (profMaxStreak) profMaxStreak.textContent = this.currentUser.maxStreak || 0;

    this.loadBadgesGrid();

    const modal = document.getElementById('modal-profile');
    if (modal) {
      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.remove('opacity-0'), 10);
    }
    if (window.lucide) window.lucide.createIcons();
  },

  async loadBadgesGrid() {
    const grid = document.getElementById('prof-badges-grid');
    const countEl = document.getElementById('prof-badge-count');
    if (!grid) return;

    try {
      const res = await fetch('/api/auth/badges');
      const data = await res.json();
      if (data.success && Array.isArray(data.badges)) {
        const userBadges = (this.currentUser && this.currentUser.badges) || [];
        if (countEl) countEl.textContent = `${userBadges.length} / ${data.badges.length}`;

        grid.innerHTML = data.badges.map(b => {
          const unlocked = userBadges.includes(b.id);
          return `
            <div class="badge-card ${unlocked ? 'unlocked' : 'locked'} p-2.5 rounded-xl border flex flex-col items-center text-center relative group shadow-sm" title="${b.name}: ${b.desc}">
              <div class="text-2xl mb-1">${b.icon}</div>
              <div class="text-[11px] font-bold text-white truncate w-full">${b.name}</div>
              <div class="text-[9px] ${unlocked ? 'text-emerald-400 font-bold' : 'text-slate-500'} truncate w-full mt-0.5">${unlocked ? '✓ Açıldı' : '🔒 Kilitli'}</div>
            </div>
          `;
        }).join('');
      }
    } catch (e) {
      console.warn('Error loading badges:', e);
    }
  },

  async openLeaderboard() {
    const modal = document.getElementById('modal-leaderboard');
    const listEl = document.getElementById('leaderboard-list');

    if (modal) {
      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.remove('opacity-0'), 10);
    }

    if (listEl) listEl.innerHTML = '<div class="text-center text-slate-500 py-8 text-xs">Yükleniyor...</div>';

    try {
      const res = await fetch('/api/auth/leaderboard');
      const data = await res.json();

      if (data.success && Array.isArray(data.leaderboard)) {
        if (data.leaderboard.length === 0) {
          listEl.innerHTML = '<div class="text-center text-slate-500 py-8 text-xs">Henüz kayıtlı oyuncu yok.</div>';
          return;
        }

        listEl.innerHTML = data.leaderboard.map((u, i) => {
          let rankBadge = `<span class="w-6 h-6 rounded-full bg-slate-800 text-slate-400 text-xs font-bold font-mono flex items-center justify-center">${i + 1}</span>`;
          if (i === 0) rankBadge = `<span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-black flex items-center justify-center shadow-md shadow-amber-500/30">🥇</span>`;
          if (i === 1) rankBadge = `<span class="w-6 h-6 rounded-full bg-slate-300 text-slate-950 text-xs font-black flex items-center justify-center shadow-md">🥈</span>`;
          if (i === 2) rankBadge = `<span class="w-6 h-6 rounded-full bg-amber-700 text-white text-xs font-black flex items-center justify-center shadow-md">🥉</span>`;

          const isMe = this.currentUser && this.currentUser.username.toLowerCase() === u.username.toLowerCase();

          return `
            <div class="p-3 rounded-2xl ${isMe ? 'bg-emerald-500/10 border border-emerald-500/40' : 'bg-slate-900 border border-slate-800'} flex items-center justify-between">
              <div class="flex items-center gap-3">
                ${rankBadge}
                <div class="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-sm border border-slate-700">
                  ${u.avatar || '⚽'}
                </div>
                <div>
                  <div class="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>${u.username}</span>
                    <span class="px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold font-mono">Lvl ${u.level || 1}</span>
                    ${isMe ? '<span class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/30 text-emerald-300 font-bold">SEN</span>' : ''}
                  </div>
                  <div class="text-[10px] text-slate-400 font-medium">${u.stats.matches} Maç • 🔥 ${u.maxStreak || 0} Seri</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-xs font-bold text-emerald-400 font-mono">${u.stats.wins} Galibiyet</div>
                <div class="text-[10px] text-cyan-400 font-mono font-medium">${u.xp || 0} XP</div>
              </div>
            </div>
          `;
        }).join('');
      }
    } catch (e) {
      if (listEl) listEl.innerHTML = '<div class="text-center text-rose-400 py-8 text-xs">Sıralama yüklenemedi.</div>';
    }

    if (window.lucide) window.lucide.createIcons();
  },

  closeModals() {
    ['modal-auth', 'modal-profile', 'modal-leaderboard'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('opacity-0');
        setTimeout(() => el.classList.add('hidden'), 200);
      }
    });
  }
};

// --- Solo Streak Game Controller ---
const SoloStreak = {
  lives: 3,
  streak: 0,
  currentMatchup: null,
  validPlayerIds: [],
  secondsLeft: 25,
  timerInterval: null,
  usedHint: false,
  xpEarned: 0,

  start() {
    this.lives = 3;
    this.streak = 0;
    this.xpEarned = 0;
    this.closeGameOverModal();
    this.updateLivesUI();
    this.updateStreakUI();
    UI.showScreen('screen-solo-streak');
    this.nextRound();
  },

  closeGameOverModal() {
    const m = document.getElementById('modal-solo-gameover');
    if (m) m.classList.add('hidden');
  },

  updateLivesUI() {
    for (let i = 1; i <= 3; i++) {
      const h = document.getElementById(`solo-heart-${i}`);
      if (h) {
        if (i <= this.lives) {
          h.className = 'heart-alive';
          h.textContent = '❤️';
        } else {
          h.className = 'heart-dead';
          h.textContent = '🖤';
        }
      }
    }
  },

  updateStreakUI() {
    const el = document.getElementById('solo-streak-counter');
    if (el) el.textContent = this.streak;
  },

  pickRandomMatchup() {
    const validPairs = [];
    for (let i = 0; i < FOOTBALL_TEAMS.length; i++) {
      for (let j = i + 1; j < FOOTBALL_TEAMS.length; j++) {
        const t1 = FOOTBALL_TEAMS[i].id;
        const t2 = FOOTBALL_TEAMS[j].id;
        const common = FOOTBALLERS.filter(p => p.teamsPlayed && p.teamsPlayed.includes(t1) && p.teamsPlayed.includes(t2));
        if (common.length > 0) {
          validPairs.push({ t1: FOOTBALL_TEAMS[i], t2: FOOTBALL_TEAMS[j], players: common });
        }
      }
    }

    if (validPairs.length === 0) {
      return { team1: FOOTBALL_TEAMS[0], team2: FOOTBALL_TEAMS[1], players: [] };
    }

    const chosen = validPairs[Math.floor(Math.random() * validPairs.length)];
    const swap = Math.random() > 0.5;
    return {
      team1: swap ? chosen.t2 : chosen.t1,
      team2: swap ? chosen.t1 : chosen.t2,
      players: chosen.players
    };
  },

  nextRound() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    const matchup = this.pickRandomMatchup();
    this.currentMatchup = matchup;
    this.validPlayerIds = matchup.players.map(p => p.id);
    this.usedHint = false;

    const hintBox = document.getElementById('solo-hint-box');
    if (hintBox) {
      hintBox.classList.add('hidden');
      hintBox.classList.remove('flex');
    }

    const input = document.getElementById('solo-search-input');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 100);
    }

    const t1Name = document.getElementById('solo-team1-name');
    const t1Country = document.getElementById('solo-team1-country');
    const t1Badge = document.getElementById('solo-team1-badge');

    const t2Name = document.getElementById('solo-team2-name');
    const t2Country = document.getElementById('solo-team2-country');
    const t2Badge = document.getElementById('solo-team2-badge');

    if (t1Name) t1Name.textContent = matchup.team1.name;
    if (t1Country) t1Country.textContent = matchup.team1.country;
    if (t1Badge) {
      t1Badge.textContent = matchup.team1.shortName || matchup.team1.name.slice(0, 3).toUpperCase();
      t1Badge.style.backgroundColor = matchup.team1.color || '#f59e0b';
    }

    if (t2Name) t2Name.textContent = matchup.team2.name;
    if (t2Country) t2Country.textContent = matchup.team2.country;
    if (t2Badge) {
      t2Badge.textContent = matchup.team2.shortName || matchup.team2.name.slice(0, 3).toUpperCase();
      t2Badge.style.backgroundColor = matchup.team2.color || '#0f172a';
    }

    this.secondsLeft = 25;
    this.updateTimerBar();

    this.timerInterval = setInterval(() => {
      this.secondsLeft--;
      this.updateTimerBar();
      if (this.secondsLeft <= 0) {
        clearInterval(this.timerInterval);
        this.loseLife('Süre bitti! 1 can kaybettin.');
      }
    }, 1000);
  },

  updateTimerBar() {
    const timerText = document.getElementById('solo-timer-text');
    const timerBar = document.getElementById('solo-timer-bar');
    if (timerText) timerText.textContent = `${this.secondsLeft}s`;
    if (timerBar) {
      const pct = (this.secondsLeft / 25) * 100;
      timerBar.style.width = `${pct}%`;
      if (this.secondsLeft <= 5) {
        timerBar.className = 'h-full bg-rose-500 w-full transition-all duration-300';
      } else {
        timerBar.className = 'h-full bg-gradient-to-r from-amber-500 to-orange-500 w-full transition-all duration-300';
      }
    }
  },

  submitGuess() {
    const input = document.getElementById('solo-search-input');
    if (!input) return;
    const query = input.value.trim().toLowerCase();
    if (!query) return;

    const matched = FOOTBALLERS.find(p => p.name.toLowerCase() === query || (p.aliases && p.aliases.some(a => a.toLowerCase() === query)));

    if (matched && this.validPlayerIds.includes(matched.id)) {
      if (this.timerInterval) clearInterval(this.timerInterval);
      this.streak++;
      this.xpEarned += 15;
      this.updateStreakUI();

      SoundFX.playVictory();
      Confetti.launch(1500);
      UI.showNotification(`Harika! ${matched.name} doğru cevap! 🔥 Seri: ${this.streak}`, 'success', 2000);

      setTimeout(() => {
        this.nextRound();
      }, 1200);
    } else {
      this.loseLife('Yanlış futbolcu! 1 can kaybettin.');
    }
  },

  hint() {
    if (this.usedHint) {
      UI.showNotification('Bu tur için ipucunu zaten kullandın.', 'info');
      return;
    }
    this.usedHint = true;
    const hintBox = document.getElementById('solo-hint-box');
    const hintText = document.getElementById('solo-hint-text');

    if (this.currentMatchup && this.currentMatchup.players.length > 0) {
      const sample = this.currentMatchup.players[0];
      if (hintText) hintText.textContent = `İpucu: Mevki: ${sample.position || 'Bilinmiyor'} | Ülke: ${sample.country || 'Dünya'}`;
      if (hintBox) {
        hintBox.classList.remove('hidden');
        hintBox.classList.add('flex');
      }
      SoundFX.playClick();
    }
  },

  loseLife(msg) {
    this.lives--;
    this.updateLivesUI();
    SoundFX.playError();
    UI.showNotification(msg, 'error', 2000);

    if (this.lives <= 0) {
      this.gameOver();
    } else {
      if (this.timerInterval) clearInterval(this.timerInterval);
      setTimeout(() => {
        this.nextRound();
      }, 1000);
    }
  },

  async gameOver() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    SoundFX.playError();

    const finalStreakEl = document.getElementById('solo-final-streak');
    const gainedXpEl = document.getElementById('solo-gained-xp');
    if (finalStreakEl) finalStreakEl.textContent = this.streak;
    if (gainedXpEl) gainedXpEl.textContent = `+${this.xpEarned} XP`;

    if (Auth.currentUser) {
      try {
        const res = await fetch('/api/auth/save-streak', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: Auth.currentUser.username,
            streak: this.streak,
            xpGained: this.xpEarned
          })
        });
        const data = await res.json();
        if (data.success && data.user) {
          Auth.currentUser = data.user;
          localStorage.setItem('gtp_user', JSON.stringify(data.user));
          Auth.updateUI();

          if (Array.isArray(data.newBadges) && data.newBadges.length > 0) {
            data.newBadges.forEach(b => {
              setTimeout(() => {
                UI.showNotification(`🎖️ Yeni Rozet: ${b.name}!`, 'success', 4000);
                Confetti.launch(2000);
              }, 1000);
            });
          }
        }
      } catch (e) {
        console.warn('Error saving streak stats:', e);
      }
    }

    const modal = document.getElementById('modal-solo-gameover');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
    if (window.lucide) window.lucide.createIcons();
  },

  quit() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.closeGameOverModal();
    UI.showScreen('screen-lobby');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  UI.init();
  Auth.init();
  initSocketListeners();
  initEventListeners();
});

function resetPassButton() {
  AppState.hasVotedPass = false;
  const passBtn = document.getElementById('btn-pass-round');
  const passText = document.getElementById('pass-btn-text');

  if (passBtn && passText) {
    passBtn.disabled = false;
    passBtn.className = 'px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs uppercase font-extrabold flex items-center gap-1.5 shrink-0 transition-colors border border-amber-500/30';
    passText.textContent = 'PAS (0/2)';
  }
}

function enableSearchInput() {
  AppState.roundLocked = false;
  const searchInput = document.getElementById('player-search-input');
  const btnSubmit = document.getElementById('btn-submit-guess');
  if (searchInput) {
    searchInput.disabled = false;
    searchInput.value = '';
    setTimeout(() => searchInput.focus(), 100);
  }
  if (btnSubmit) {
    btnSubmit.disabled = false;
    btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
  }
}

function disableSearchInput() {
  AppState.roundLocked = true;
  const searchInput = document.getElementById('player-search-input');
  const btnSubmit = document.getElementById('btn-submit-guess');
  if (searchInput) {
    searchInput.disabled = true;
  }
  if (btnSubmit) {
    btnSubmit.disabled = true;
    btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
  }
  UI.hideAutocomplete();
}

function leaveRoomAndGoToLobby() {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  if (SoloStreak.timerInterval) clearInterval(SoloStreak.timerInterval);
  SoloStreak.closeGameOverModal();
  UI.hideRoundTeamModal();

  if (socket && AppState.roomCode) {
    socket.emit('leave_room');
  }

  AppState.roomCode = '';
  AppState.currentMatchup = null;
  AppState.roundLocked = false;
  AppState.hostScore = 0;
  AppState.guestScore = 0;
  AppState.opponentJoined = false;

  UI.showScreen('screen-lobby');
}

function initSocketListeners() {
  if (!socket) return;

  const statusDot = document.getElementById('socket-status-dot');
  const statusText = document.getElementById('socket-status-text');

  socket.on('connect', () => {
    if (statusDot) statusDot.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse';
    if (statusText) statusText.textContent = 'Sunucuya Bağlandı';
  });

  socket.on('disconnect', () => {
    if (statusDot) statusDot.className = 'w-2 h-2 rounded-full bg-rose-500';
    if (statusText) statusText.textContent = 'Bağlantı Kesildi';
  });

  socket.on('room_created', (data) => {
    AppState.roomCode = data.roomCode;
    AppState.gameMode = data.gameMode;
    AppState.dataSource = data.dataSource || 'LOCAL';
    AppState.isHost = true;
    AppState.opponentJoined = false;
    AppState.allTeams = data.allTeams || FOOTBALL_TEAMS;
    AppState.mySelectedTeam = 'real_madrid';
    AppState.opponentHasSelectedTeam = false;
    
    updateWaitingRoomUI();
    UI.showScreen('screen-waiting');
    UI.showNotification(`Oda ${data.roomCode} (${data.gameMode === 'CUSTOM' ? 'Takım Seçmeli' : 'Rastgele'} | ${data.dataSource === 'API' ? 'Canlı API' : 'Yerel DB'}) oluşturuldu!`, 'info', 4000);
  });

  socket.on('room_joined', (data) => {
    AppState.roomCode = data.roomCode;
    AppState.gameMode = data.gameMode;
    AppState.dataSource = data.dataSource || 'LOCAL';
    AppState.isHost = false;
    AppState.opponentJoined = true;
    AppState.opponentName = data.hostName;
    AppState.allTeams = data.allTeams || FOOTBALL_TEAMS;
    AppState.mySelectedTeam = 'barcelona';
    AppState.opponentHasSelectedTeam = true; // Host already has default team

    updateWaitingRoomUI();
    UI.showScreen('screen-waiting');
    UI.showNotification(`${data.hostName} odasına katıldınız! (${data.gameMode === 'CUSTOM' ? 'Takım Seçmeli' : 'Rastgele'} | ${data.dataSource === 'API' ? 'Canlı API' : 'Yerel DB'})`, 'success', 3000);
  });

  socket.on('opponent_joined', (data) => {
    AppState.opponentJoined = true;
    AppState.opponentName = data.guestName;
    AppState.opponentHasSelectedTeam = true; // Guest has default team
    
    updateWaitingRoomUI();
    UI.showNotification(`🔥 Rakip "${data.guestName}" odaya katıldı!`, 'success', 4000);
  });

  // Secret Custom Team Selection Status Update (Waiting Room)
  socket.on('team_status_updated', (data) => {
    if (AppState.isHost) {
      AppState.opponentHasSelectedTeam = data.guestHasTeam;
    } else {
      AppState.opponentHasSelectedTeam = data.hostHasTeam;
    }
    UI.updateOpponentTeamStatus(AppState.opponentHasSelectedTeam);
  });

  // Request Per-Round Secret Team Selection (Custom Mode between rounds)
  socket.on('request_round_team_selection', (data) => {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);
    
    const teams = data.allTeams || AppState.allTeams;
    AppState.allTeams = teams;
    UI.showRoundTeamModal(data.nextRoundNumber, teams, AppState.mySelectedTeam);
  });

  // Status update during Per-Round Secret Selection Modal
  socket.on('round_team_status_updated', (data) => {
    const isOpponentLocked = AppState.isHost ? data.guestLocked : data.hostLocked;
    UI.updateRoundOpponentStatus(isOpponentLocked);
  });

  socket.on('game_started', (data) => {
    UI.hideRoundTeamModal();

    AppState.currentMatchup = data.matchup;
    AppState.team1Obj = data.team1Obj;
    AppState.team2Obj = data.team2Obj;
    AppState.hostScore = data.hostScore;
    AppState.guestScore = data.guestScore;
    AppState.roundNumber = data.roundNumber;
    AppState.targetScore = data.targetScore || 3;

    if (!AppState.isHost && data.hostName) AppState.opponentName = data.hostName;

    UI.renderGameTeams(data.team1Obj, data.team2Obj);
    UI.updateScoreboard(
      AppState.isHost ? AppState.username : AppState.opponentName,
      AppState.isHost ? AppState.opponentName : AppState.username,
      AppState.hostScore,
      AppState.guestScore,
      AppState.roundNumber,
      AppState.targetScore
    );

    resetPassButton();

    const input = document.getElementById('player-search-input');
    if (input) input.value = '';
    AppState.selectedPlayer = null;

    UI.showScreen('screen-game');

    UI.runCountdown(() => {
      enableSearchInput();
      startRoundTimer();
      UI.showNotification(`⚽ Maç Başladı! ${data.team1Obj.name} ✖ ${data.team2Obj.name} ortak oyuncusunu bulun!`, 'info', 4000);
    });
  });

  socket.on('round_won', (data) => {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);
    disableSearchInput();

    AppState.hostScore = data.hostScore;
    AppState.guestScore = data.guestScore;

    UI.updateScoreboard(
      AppState.isHost ? AppState.username : AppState.opponentName,
      AppState.isHost ? AppState.opponentName : AppState.username,
      AppState.hostScore,
      AppState.guestScore,
      data.roundNumber,
      data.targetScore
    );

    SoundFX.playSuccess();
    UI.showNotification(`🎉 ${data.roundWinnerName} turu kazandı! (${data.playerObj.name}) - Yeni Tur Hazırlanıyor...`, 'success', 3500);
  });

  socket.on('round_draw', (data) => {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);
    disableSearchInput();

    SoundFX.playError();
    UI.showNotification(`⏰ ${data.message} Yeni tura geçiliyor...`, 'error', 3500);
  });

  socket.on('pass_vote_acknowledged', () => {
    AppState.hasVotedPass = true;
    const passBtn = document.getElementById('btn-pass-round');
    const passText = document.getElementById('pass-btn-text');

    if (passBtn && passText) {
      passBtn.disabled = true;
      passBtn.className = 'px-4 py-3 rounded-xl bg-amber-950/80 text-amber-300 text-xs uppercase font-extrabold flex items-center gap-1.5 shrink-0 opacity-80 cursor-not-allowed border border-amber-500/50';
      passText.textContent = 'PAS (1/2) Bekleniyor...';
    }

    UI.showNotification('📌 PAS oyunuzu verdiniz (1/2). Rakibin de basması bekleniyor...', 'typing', 3000);
  });

  socket.on('opponent_pass_voted', (data) => {
    const passBtn = document.getElementById('btn-pass-round');
    const passText = document.getElementById('pass-btn-text');

    if (passText && !AppState.hasVotedPass) {
      passText.textContent = 'PAS (1/2)';
      if (passBtn) passBtn.classList.add('animate-pulse');
    }

    UI.showNotification(`⚠️ ${data.voterName} turu PAS geçmek istiyor! (1/2). Siz de basarsanız tur atlanacak.`, 'typing', 4000);
  });

  socket.on('round_skipped', (data) => {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);
    disableSearchInput();

    SoundFX.playWhistle();
    resetPassButton();
    UI.showNotification(`⏩ ${data.message}`, 'info', 3000);
  });

  socket.on('next_round_started', (data) => {
    UI.hideRoundTeamModal();

    AppState.currentMatchup = data.matchup;
    AppState.team1Obj = data.team1Obj;
    AppState.team2Obj = data.team2Obj;
    AppState.hostScore = data.hostScore;
    AppState.guestScore = data.guestScore;
    AppState.roundNumber = data.roundNumber;

    UI.renderGameTeams(data.team1Obj, data.team2Obj);
    UI.updateScoreboard(
      AppState.isHost ? AppState.username : AppState.opponentName,
      AppState.isHost ? AppState.opponentName : AppState.username,
      AppState.hostScore,
      AppState.guestScore,
      AppState.roundNumber,
      AppState.targetScore
    );

    resetPassButton();

    const input = document.getElementById('player-search-input');
    if (input) input.value = '';
    AppState.selectedPlayer = null;

    UI.showScreen('screen-game');

    UI.runCountdown(() => {
      enableSearchInput();
      startRoundTimer();
      UI.showNotification(`⚽ Tur ${data.roundNumber}! ${data.team1Obj.name} ✖ ${data.team2Obj.name}`, 'info', 3000);
    });
  });

  socket.on('opponent_typing', (data) => {
    UI.showNotification(`⚡ ${data.username} bir futbolcu ismi yazıyor...`, 'typing', 2000);
  });

  socket.on('wrong_guess', (data) => {
    SoundFX.playError();
    UI.showNotification(`❌ ${data.message}`, 'error', 3000);
  });

  socket.on('opponent_wrong_guess', (data) => {
    UI.showNotification(`❌ ${data.username} yanlış bir futbolcu tahmini yaptı!`, 'error', 3000);
  });

  socket.on('match_over', (data) => {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);
    disableSearchInput();
    UI.hideRoundTeamModal();

    const isWinner = data.winnerSocketId === socket.id;

    if (isWinner) {
      SoundFX.playVictory();
      Confetti.launch(5000);
    } else {
      SoundFX.playError();
    }

    finishMatch(data.winnerName, data.playerObj, isWinner, data.hostScore, data.guestScore);
    setTimeout(() => {
      Auth.refreshProfile();
    }, 1000);
  });

  socket.on('return_to_waiting', () => {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);
    UI.hideRoundTeamModal();
    updateWaitingRoomUI();
    UI.showScreen('screen-waiting');
  });

  socket.on('opponent_disconnected', (data) => {
    AppState.opponentJoined = false;
    UI.hideRoundTeamModal();
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);

    if (UI.activeScreen === 'screen-game' || UI.activeScreen === 'screen-result') {
      UI.showNotification(`⚠️ ${data.message}`, 'error', 4000);
      if (AppState.isHost) {
        updateWaitingRoomUI();
        UI.showScreen('screen-waiting');
      } else {
        leaveRoomAndGoToLobby();
      }
    } else {
      updateWaitingRoomUI();
      UI.showNotification(`⚠️ ${data.message}`, 'error', 4000);
    }
  });

  socket.on('opponent_reaction', (data) => {
    if (data.type === 'emote') {
      UI.spawnFloatingReaction('game-reaction-container', data.content);
      SoundFX.playClick();
    } else if (data.type === 'chat') {
      UI.showNotification(`${data.username}: "${data.content}"`, 'typing', 3500);
      SoundFX.playClick();
    }
  });

  socket.on('error_message', (data) => {
    UI.showNotification(`⚠️ ${data.message}`, 'error', 4000);

    // Re-enable modal button if error occurs during team lock
    const confirmBtn = document.getElementById('btn-confirm-round-team');
    if (confirmBtn) {
      confirmBtn.disabled = false;
      confirmBtn.className = 'w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20';
      confirmBtn.textContent = 'Takımı Onayla & Kilitle 🔒';
    }
  });
}

function initEventListeners() {
  const btnToggleSound = document.getElementById('btn-toggle-sound');
  const soundIcon = document.getElementById('sound-icon');

  if (btnToggleSound) {
    btnToggleSound.addEventListener('click', () => {
      const isMuted = SoundFX.toggleMute();
      if (soundIcon) {
        soundIcon.setAttribute('data-lucide', isMuted ? 'volume-x' : 'volume-2');
        if (window.lucide) window.lucide.createIcons();
      }
      UI.showNotification(isMuted ? 'Sesler Kapatıldı 🔇' : 'Sesler Açıldı 🔊', 'info', 2000);
    });
  }

  // GAME MODE SELECTOR BUTTONS (Lobby)
  const modeRandomBtn = document.getElementById('mode-random');
  const modeCustomBtn = document.getElementById('mode-custom');

  if (modeRandomBtn && modeCustomBtn) {
    modeRandomBtn.addEventListener('click', () => {
      AppState.gameMode = 'RANDOM';
      modeRandomBtn.className = 'py-2.5 px-3 rounded-lg text-xs font-extrabold transition-all bg-emerald-500 text-slate-950 shadow-md';
      modeCustomBtn.className = 'py-2.5 px-3 rounded-lg text-xs font-extrabold transition-all bg-transparent text-slate-400 hover:text-white';
    });

    modeCustomBtn.addEventListener('click', () => {
      AppState.gameMode = 'CUSTOM';
      modeCustomBtn.className = 'py-2.5 px-3 rounded-lg text-xs font-extrabold transition-all bg-cyan-500 text-slate-950 shadow-md';
      modeRandomBtn.className = 'py-2.5 px-3 rounded-lg text-xs font-extrabold transition-all bg-transparent text-slate-400 hover:text-white';
    });
  }

  // DATA SOURCE SELECTOR BUTTONS (Lobby)
  const sourceLocalBtn = document.getElementById('source-local');
  const sourceApiBtn = document.getElementById('source-api');

  if (sourceLocalBtn && sourceApiBtn) {
    sourceLocalBtn.addEventListener('click', () => {
      AppState.dataSource = 'LOCAL';
      sourceLocalBtn.className = 'py-2 px-2.5 rounded-lg text-xs font-extrabold transition-all bg-emerald-500 text-slate-950 shadow-md';
      sourceApiBtn.className = 'py-2 px-2.5 rounded-lg text-xs font-extrabold transition-all bg-transparent text-slate-400 hover:text-white';
    });

    sourceApiBtn.addEventListener('click', () => {
      AppState.dataSource = 'API';
      sourceApiBtn.className = 'py-2 px-2.5 rounded-lg text-xs font-extrabold transition-all bg-cyan-500 text-slate-950 shadow-md';
      sourceLocalBtn.className = 'py-2 px-2.5 rounded-lg text-xs font-extrabold transition-all bg-transparent text-slate-400 hover:text-white';
    });
  }

  // TEAM SELECT DROPDOWN (Waiting Room - Secret Selection)
  const selectMyTeam = document.getElementById('select-my-team');

  if (selectMyTeam) {
    selectMyTeam.addEventListener('change', (e) => {
      AppState.mySelectedTeam = e.target.value;
      if (socket) socket.emit('select_team', { teamId: e.target.value });
    });
  }

  // PER-ROUND SECRET TEAM CONFIRM BUTTON (Modal)
  const btnConfirmRoundTeam = document.getElementById('btn-confirm-round-team');
  const selectRoundTeam = document.getElementById('select-round-team');

  if (btnConfirmRoundTeam && selectRoundTeam) {
    btnConfirmRoundTeam.addEventListener('click', () => {
      const chosenTeamId = selectRoundTeam.value;
      AppState.mySelectedTeam = chosenTeamId;

      btnConfirmRoundTeam.disabled = true;
      btnConfirmRoundTeam.className = 'w-full py-3.5 mt-2 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-400 text-sm font-extrabold uppercase tracking-wider cursor-not-allowed opacity-90';
      btnConfirmRoundTeam.textContent = '✓ Takım Kilitlendi (Rakip Bekleniyor...)';

      if (socket) {
        socket.emit('submit_round_team', { teamId: chosenTeamId });
      }
    });
  }

  const btnPassRound = document.getElementById('btn-pass-round');
  if (btnPassRound) {
    btnPassRound.addEventListener('click', () => {
      if (AppState.hasVotedPass) return;
      if (socket) {
        socket.emit('vote_pass');
      }
    });
  }

  const btnCreateRoom = document.getElementById('btn-create-room');
  const btnJoinRoom = document.getElementById('btn-join-room');
  const btnSubmitJoin = document.getElementById('btn-submit-join');
  const joinInputContainer = document.getElementById('join-input-container');
  const inputUsername = document.getElementById('input-username');
  const inputRoomCode = document.getElementById('input-room-code');

  if (btnCreateRoom) {
    btnCreateRoom.addEventListener('click', () => {
      AppState.username = Auth.currentUser ? Auth.currentUser.username : (inputUsername.value.trim() || 'Oyuncu 1');
      if (socket) {
        socket.emit('create_room', {
          username: AppState.username,
          gameMode: AppState.gameMode,
          dataSource: AppState.dataSource
        });
      }
    });
  }

  if (btnJoinRoom) {
    btnJoinRoom.addEventListener('click', () => {
      joinInputContainer.classList.toggle('hidden');
      if (!joinInputContainer.classList.contains('hidden')) {
        inputRoomCode.focus();
      }
    });
  }

  if (btnSubmitJoin) {
    btnSubmitJoin.addEventListener('click', () => {
      const code = inputRoomCode.value.trim();
      if (!code) {
        UI.showNotification('Lütfen geçerli bir Oda Kodu girin!', 'error');
        return;
      }
      AppState.username = Auth.currentUser ? Auth.currentUser.username : (inputUsername.value.trim() || 'Oyuncu 2');
      if (socket) {
        socket.emit('join_room', { roomCode: code, username: AppState.username });
      }
    });
  }

  const btnCopyCode = document.getElementById('btn-copy-code');
  const btnStartGame = document.getElementById('btn-start-game');
  const btnLeaveRoom = document.getElementById('btn-leave-room');

  if (btnCopyCode) {
    btnCopyCode.addEventListener('click', () => {
      const codeText = document.getElementById('waiting-room-code')?.textContent;
      if (codeText) {
        navigator.clipboard.writeText(codeText);
        UI.showNotification('Oda kodu panoya kopyalandı! 📋', 'success');
      }
    });
  }

  if (btnStartGame) {
    btnStartGame.addEventListener('click', () => {
      if (!AppState.opponentJoined || !AppState.isHost) return;
      if (socket) socket.emit('start_game');
    });
  }

  if (btnLeaveRoom) {
    btnLeaveRoom.addEventListener('click', () => {
      UI.showScreen('screen-lobby');
    });
  }

  const searchInput = document.getElementById('player-search-input');
  const btnSubmitGuess = document.getElementById('btn-submit-guess');

  if (searchInput) {
    let typingTimer;

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      AppState.selectedPlayer = null;

      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        if (query.length > 1 && socket) {
          socket.emit('player_typing', { username: AppState.username });
        }
      }, 300);

      if (query.length < 2) {
        UI.hideAutocomplete();
        return;
      }

      function normalizeStr(str) {
        return (str || '')
          .toLowerCase()
          .replace(/ğ/g, 'g')
          .replace(/ü/g, 'u')
          .replace(/ş/g, 's')
          .replace(/ı/g, 'i')
          .replace(/ö/g, 'o')
          .replace(/ç/g, 'c')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
      }

      const qNorm = normalizeStr(query);

      const filtered = FOOTBALLERS.filter(p => {
        const nameNorm = normalizeStr(p.name);
        const natNorm = normalizeStr(p.nationality);
        const idNorm = normalizeStr(p.id);
        return nameNorm.includes(qNorm) || natNorm.includes(qNorm) || idNorm.includes(qNorm);
      });

      UI.renderAutocompleteList(filtered, (selected) => {
        AppState.selectedPlayer = selected;
        searchInput.value = selected.name;
        UI.hideAutocomplete();
      });
    });

    searchInput.addEventListener('keydown', (e) => {
      const dropdown = document.getElementById('autocomplete-dropdown');
      const items = Array.from(dropdown.querySelectorAll('.autocomplete-item')).map(el => {
        const id = el.getAttribute('data-player-id');
        return FOOTBALLERS.find(p => p.id === id);
      }).filter(Boolean);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        UI.navigateAutocomplete('down', items, (sel) => {
          AppState.selectedPlayer = sel;
          searchInput.value = sel.name;
          UI.hideAutocomplete();
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        UI.navigateAutocomplete('up', items, (sel) => {
          AppState.selectedPlayer = sel;
          searchInput.value = sel.name;
          UI.hideAutocomplete();
        });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (!dropdown.classList.contains('hidden') && UI.autocompleteIndex >= 0) {
          UI.navigateAutocomplete('enter', items, (sel) => {
            AppState.selectedPlayer = sel;
            searchInput.value = sel.name;
            UI.hideAutocomplete();
          });
        } else {
          submitGuess();
        }
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !document.getElementById('autocomplete-dropdown').contains(e.target)) {
        UI.hideAutocomplete();
      }
    });
  }

  if (btnSubmitGuess) {
    btnSubmitGuess.addEventListener('click', () => {
      submitGuess();
    });
  }

  const btnPlayAgain = document.getElementById('btn-play-again');
  const btnBackToLobby = document.getElementById('btn-back-lobby');
  const btnHeaderLogo = document.getElementById('btn-header-logo');

  if (btnPlayAgain) {
    btnPlayAgain.addEventListener('click', () => {
      if (socket) socket.emit('restart_game');
    });
  }

  if (btnBackToLobby) {
    btnBackToLobby.addEventListener('click', () => {
      leaveRoomAndGoToLobby();
    });
  }

  if (btnHeaderLogo) {
    btnHeaderLogo.addEventListener('click', () => {
      leaveRoomAndGoToLobby();
    });
  }

  // --- Auth & Profile & Leaderboard Event Listeners ---
  const btnOpenAuth = document.getElementById('btn-open-auth');
  const btnOpenProfile = document.getElementById('btn-open-profile');
  const btnOpenLeaderboard = document.getElementById('btn-open-leaderboard');

  const btnCloseAuthModal = document.getElementById('btn-close-auth-modal');
  const btnCloseProfileModal = document.getElementById('btn-close-profile-modal');
  const btnCloseLeaderboardModal = document.getElementById('btn-close-leaderboard-modal');

  const authTabLogin = document.getElementById('auth-tab-login');
  const authTabRegister = document.getElementById('auth-tab-register');
  const formLogin = document.getElementById('form-login');
  const formRegister = document.getElementById('form-register');
  const btnLogout = document.getElementById('btn-logout');

  if (btnOpenAuth) {
    btnOpenAuth.addEventListener('click', () => {
      const modal = document.getElementById('modal-auth');
      if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.remove('opacity-0'), 10);
      }
    });
  }

  const btnLobbyProfile = document.getElementById('btn-lobby-profile');

  if (btnOpenProfile) {
    btnOpenProfile.addEventListener('click', () => {
      Auth.openProfile();
    });
  }

  if (btnLobbyProfile) {
    btnLobbyProfile.addEventListener('click', () => {
      Auth.openProfile();
    });
  }

  if (btnOpenLeaderboard) {
    btnOpenLeaderboard.addEventListener('click', () => {
      Auth.openLeaderboard();
    });
  }

  if (btnCloseAuthModal) btnCloseAuthModal.addEventListener('click', () => Auth.closeModals());
  if (btnCloseProfileModal) btnCloseProfileModal.addEventListener('click', () => Auth.closeModals());
  if (btnCloseLeaderboardModal) btnCloseLeaderboardModal.addEventListener('click', () => Auth.closeModals());

  ['modal-auth', 'modal-profile', 'modal-leaderboard'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) Auth.closeModals();
      });
    }
  });

  // Auth Tabs Toggle
  const linkSwitchRegister = document.getElementById('link-switch-register');
  const linkSwitchLogin = document.getElementById('link-switch-login');

  function switchToLogin() {
    if (authTabLogin && authTabRegister && formLogin && formRegister) {
      authTabLogin.className = 'flex-1 py-2 rounded-lg font-bold text-xs transition-all bg-emerald-500 text-slate-950 shadow-md';
      authTabRegister.className = 'flex-1 py-2 rounded-lg font-bold text-xs transition-all text-slate-400 hover:text-white';
      formLogin.classList.remove('hidden');
      formRegister.classList.add('hidden');
    }
  }

  function switchToRegister() {
    if (authTabLogin && authTabRegister && formLogin && formRegister) {
      authTabRegister.className = 'flex-1 py-2 rounded-lg font-bold text-xs transition-all bg-emerald-500 text-slate-950 shadow-md';
      authTabLogin.className = 'flex-1 py-2 rounded-lg font-bold text-xs transition-all text-slate-400 hover:text-white';
      formRegister.classList.remove('hidden');
      formLogin.classList.add('hidden');
    }
  }

  if (authTabLogin) authTabLogin.addEventListener('click', switchToLogin);
  if (authTabRegister) authTabRegister.addEventListener('click', switchToRegister);
  if (linkSwitchRegister) linkSwitchRegister.addEventListener('click', switchToRegister);
  if (linkSwitchLogin) linkSwitchLogin.addEventListener('click', switchToLogin);

  // Avatar Picker for Registration
  const avatarOpts = document.querySelectorAll('.avatar-opt');
  const avatarInputVal = document.getElementById('reg-avatar-val');
  avatarOpts.forEach(btn => {
    btn.addEventListener('click', () => {
      avatarOpts.forEach(b => {
        b.className = 'w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 text-sm flex items-center justify-center avatar-opt hover:border-slate-600';
      });
      btn.className = 'w-9 h-9 rounded-lg bg-emerald-500/20 border-2 border-emerald-500 text-sm flex items-center justify-center avatar-opt';
      if (avatarInputVal) avatarInputVal.value = btn.getAttribute('data-avatar') || '⚽';
    });
  });

  // Login Form Submit
  if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      const u = document.getElementById('login-username').value;
      const p = document.getElementById('login-password').value;
      await Auth.login(u, p);
    });
  }

  // Register Form Submit
  if (formRegister) {
    formRegister.addEventListener('submit', async (e) => {
      e.preventDefault();
      const u = document.getElementById('reg-username').value;
      const p = document.getElementById('reg-password').value;
      const a = avatarInputVal ? avatarInputVal.value : '⚽';
      await Auth.register(u, p, a);
    });
  }

  // Logout Button
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      Auth.logout();
    });
  }

  // --- Solo Streak Mode Event Listeners ---
  const btnStartSoloStreak = document.getElementById('btn-start-solo-streak');
  const btnExitSolo = document.getElementById('btn-exit-solo');
  const btnSoloHint = document.getElementById('btn-solo-hint');
  const btnSubmitSoloGuess = document.getElementById('btn-submit-solo-guess');
  const btnSoloRestart = document.getElementById('btn-solo-restart');
  const btnSoloBackLobby = document.getElementById('btn-solo-back-lobby');
  const soloSearchInput = document.getElementById('solo-search-input');
  const soloDropdown = document.getElementById('solo-autocomplete-dropdown');

  if (btnStartSoloStreak) {
    btnStartSoloStreak.addEventListener('click', () => {
      SoloStreak.start();
    });
  }

  if (btnExitSolo) {
    btnExitSolo.addEventListener('click', () => {
      SoloStreak.quit();
    });
  }

  if (btnSoloHint) {
    btnSoloHint.addEventListener('click', () => {
      SoloStreak.hint();
    });
  }

  if (btnSubmitSoloGuess) {
    btnSubmitSoloGuess.addEventListener('click', () => {
      SoloStreak.submitGuess();
    });
  }

  if (btnSoloRestart) {
    btnSoloRestart.addEventListener('click', () => {
      SoloStreak.start();
    });
  }

  if (btnSoloBackLobby) {
    btnSoloBackLobby.addEventListener('click', () => {
      SoloStreak.quit();
    });
  }

  if (soloSearchInput && soloDropdown) {
    soloSearchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q || q.length < 2) {
        soloDropdown.classList.add('hidden');
        return;
      }

      const matches = FOOTBALLERS.filter(p => {
        const nameMatch = p.name.toLowerCase().includes(q);
        const aliasMatch = p.aliases && p.aliases.some(a => a.toLowerCase().includes(q));
        return nameMatch || aliasMatch;
      }).slice(0, 7);

      if (matches.length === 0) {
        soloDropdown.classList.add('hidden');
        return;
      }

      soloDropdown.innerHTML = matches.map(p => `
        <div class="solo-auto-item px-4 py-2.5 hover:bg-amber-500/20 text-slate-200 hover:text-white cursor-pointer flex items-center justify-between text-xs transition-colors" data-player="${p.name}">
          <span class="font-bold">${p.name}</span>
          <span class="text-[10px] text-slate-400">${p.details || p.position || ''}</span>
        </div>
      `).join('');

      soloDropdown.classList.remove('hidden');

      soloDropdown.querySelectorAll('.solo-auto-item').forEach(item => {
        item.addEventListener('click', () => {
          soloSearchInput.value = item.getAttribute('data-player');
          soloDropdown.classList.add('hidden');
          SoloStreak.submitGuess();
        });
      });
    });

    soloSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        soloDropdown.classList.add('hidden');
        SoloStreak.submitGuess();
      }
    });

    document.addEventListener('click', (e) => {
      if (!soloSearchInput.contains(e.target) && !soloDropdown.contains(e.target)) {
        soloDropdown.classList.add('hidden');
      }
    });
  }

  // --- In-Game Reactions & Quick Chat ---
  const btnSendEmotes = document.querySelectorAll('.btn-send-emote');
  btnSendEmotes.forEach(btn => {
    btn.addEventListener('click', () => {
      const emote = btn.getAttribute('data-emote');
      if (emote) {
        if (socket) {
          socket.emit('send_reaction', {
            type: 'emote',
            content: emote,
            username: AppState.username
          });
        }
        UI.spawnFloatingReaction('game-reaction-container', emote);
        SoundFX.playClick();
      }
    });
  });

  const btnToggleQuickChat = document.getElementById('btn-toggle-quick-chat');
  const quickChatMenu = document.getElementById('quick-chat-menu');
  if (btnToggleQuickChat && quickChatMenu) {
    btnToggleQuickChat.addEventListener('click', () => {
      quickChatMenu.classList.toggle('hidden');
    });

    const quickChatOpts = document.querySelectorAll('.quick-chat-opt');
    quickChatOpts.forEach(opt => {
      opt.addEventListener('click', () => {
        const msg = opt.getAttribute('data-msg');
        if (msg) {
          if (socket) {
            socket.emit('send_reaction', {
              type: 'chat',
              content: msg,
              username: AppState.username
            });
          }
          UI.showNotification(`Sen: "${msg}"`, 'typing', 2000);
          SoundFX.playClick();
        }
        quickChatMenu.classList.add('hidden');
      });
    });

    document.addEventListener('click', (e) => {
      if (!btnToggleQuickChat.contains(e.target) && !quickChatMenu.contains(e.target)) {
        quickChatMenu.classList.add('hidden');
      }
    });
  }
}

function updateWaitingRoomUI() {
  const codeEl = document.getElementById('waiting-room-code');
  const modeBadge = document.getElementById('waiting-mode-badge');
  const sourceBadge = document.getElementById('waiting-source-badge');
  const hostNameEl = document.getElementById('host-username');
  const guestNameEl = document.getElementById('guest-username');
  const guestStatusEl = document.getElementById('guest-status');
  const btnStartGame = document.getElementById('btn-start-game');
  const customTeamContainer = document.getElementById('custom-team-picker-container');

  if (codeEl) codeEl.textContent = AppState.roomCode || 'MATCH-XXXX';
  if (modeBadge) {
    modeBadge.textContent = AppState.gameMode === 'CUSTOM' ? 'Takım Seçmeli Mod' : 'Rastgele Mod';
    modeBadge.className = AppState.gameMode === 'CUSTOM' 
      ? 'px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[10px] font-extrabold uppercase'
      : 'px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase';
  }

  if (sourceBadge) {
    sourceBadge.textContent = AppState.dataSource === 'API' ? '🌐 Canlı Futbol API' : '📦 Yerel DB';
    sourceBadge.className = AppState.dataSource === 'API'
      ? 'px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[10px] font-extrabold uppercase'
      : 'px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase';
  }

  // Toggle Custom Team Pickers in Waiting Room (Secret Team Pick)
  if (customTeamContainer) {
    if (AppState.gameMode === 'CUSTOM') {
      customTeamContainer.classList.remove('hidden');
      customTeamContainer.classList.add('flex');
      UI.populateMyTeamSelector(AppState.allTeams, AppState.mySelectedTeam);
      UI.updateOpponentTeamStatus(AppState.opponentHasSelectedTeam);
    } else {
      customTeamContainer.classList.add('hidden');
      customTeamContainer.classList.remove('flex');
    }
  }
  
  if (AppState.isHost) {
    if (hostNameEl) hostNameEl.textContent = AppState.username || 'Sen (Oda Sahibi)';
    if (guestNameEl) {
      if (AppState.opponentJoined) {
        guestNameEl.textContent = AppState.opponentName;
        guestNameEl.className = 'font-bold text-emerald-400 text-lg';
        guestStatusEl.innerHTML = '<span class="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Hazır</span>';
      } else {
        guestNameEl.textContent = 'Rakip Bekleniyor...';
        guestNameEl.className = 'font-semibold text-slate-400 text-base italic';
        guestStatusEl.innerHTML = '<div class="flex items-center gap-2 text-xs text-amber-400/80"><div class="w-3.5 h-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div> Bağlanılıyor...</div>';
      }
    }
  } else {
    if (hostNameEl) hostNameEl.textContent = AppState.opponentName || 'Oda Sahibi';
    if (guestNameEl) {
      guestNameEl.textContent = AppState.username || 'Sen (Katılımcı)';
      guestNameEl.className = 'font-bold text-emerald-400 text-lg';
      guestStatusEl.innerHTML = '<span class="inline-flex items-center gap-1 text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Hazır</span>';
    }
  }

  if (btnStartGame) {
    if (AppState.isHost) {
      btnStartGame.disabled = !AppState.opponentJoined;
      btnStartGame.textContent = 'Oyunu Başlat (Start Game)';
      if (AppState.opponentJoined) {
        btnStartGame.classList.remove('opacity-50', 'cursor-not-allowed');
        btnStartGame.classList.add('animate-neon-pulse');
      } else {
        btnStartGame.classList.add('opacity-50', 'cursor-not-allowed');
        btnStartGame.classList.remove('animate-neon-pulse');
      }
    } else {
      btnStartGame.disabled = true;
      btnStartGame.textContent = 'Oda Sahibinin Başlatması Bekleniyor...';
      btnStartGame.classList.add('opacity-50', 'cursor-not-allowed');
      btnStartGame.classList.remove('animate-neon-pulse');
    }
  }
}

function startRoundTimer() {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);
  
  AppState.secondsLeft = 30;
  UI.updateTimerUI(AppState.secondsLeft, 30);

  AppState.timerInterval = setInterval(() => {
    AppState.secondsLeft--;
    UI.updateTimerUI(AppState.secondsLeft, 30);

    if (AppState.secondsLeft <= 0) {
      clearInterval(AppState.timerInterval);
    }
  }, 1000);
}

function submitGuess() {
  if (AppState.roundLocked) return;

  const searchInput = document.getElementById('player-search-input');
  const typedName = searchInput ? searchInput.value.trim().toLowerCase() : '';

  if (!typedName && !AppState.selectedPlayer) {
    UI.showNotification('Lütfen bir futbolcu ismi yazın veya listeden seçin!', 'error');
    return;
  }

  let guessedPlayer = AppState.selectedPlayer;

  if (!guessedPlayer) {
    guessedPlayer = FOOTBALLERS.find(p => p.name.toLowerCase() === typedName);
  }

  if (!guessedPlayer) {
    UI.showNotification('❌ Bilinmeyen futbolcu! Lütfen listeden geçerli bir isim seçin.', 'error');
    return;
  }

  if (socket) {
    socket.emit('submit_guess', {
      playerId: guessedPlayer.id,
      username: AppState.username
    });
  }
}

function finishMatch(winnerName, playerObj, isUserWinner = false, hostScore = 0, guestScore = 0) {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);

  const resultTitle = document.getElementById('result-title');
  const winnerBadge = document.getElementById('result-winner-badge');
  const playerNameEl = document.getElementById('result-player-name');
  const playerDetailsEl = document.getElementById('result-player-details');
  const playerAvatarEl = document.getElementById('result-player-avatar');
  const matchupSummaryEl = document.getElementById('result-matchup-summary');
  const finalScoreEl = document.getElementById('result-final-score');

  if (isUserWinner) {
    if (resultTitle) resultTitle.textContent = 'TEBRİKLER, KAZANDIN!';
    if (winnerBadge) {
      winnerBadge.textContent = `🏆 Şampiyon: ${winnerName}`;
      winnerBadge.className = 'px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 font-extrabold text-sm mb-3 inline-block shadow-lg shadow-emerald-500/20';
    }
  } else {
    if (resultTitle) resultTitle.textContent = 'RAKİP ŞAMPİYON OLDU!';
    if (winnerBadge) {
      winnerBadge.textContent = `⚡ Şampiyon: ${winnerName}`;
      winnerBadge.className = 'px-4 py-1.5 rounded-full bg-rose-950 border border-rose-500/50 text-rose-400 font-extrabold text-sm mb-3 inline-block';
    }
  }

  if (finalScoreEl) {
    finalScoreEl.textContent = `SKOR: ${hostScore} - ${guestScore}`;
  }

  if (playerNameEl && playerObj) playerNameEl.textContent = playerObj.name;
  if (playerDetailsEl && playerObj) playerDetailsEl.textContent = playerObj.details || 'Ortak Futbolcu';
  
  if (playerAvatarEl && playerObj) {
    playerAvatarEl.textContent = playerObj.avatar || 'FC';
    playerAvatarEl.className = `w-20 h-20 rounded-2xl bg-gradient-to-br ${playerObj.avatarBg || 'from-emerald-500 to-teal-700'} flex items-center justify-center font-black text-2xl text-white shadow-xl shadow-emerald-500/20 border-2 border-white/20`;
  }

  if (matchupSummaryEl && AppState.team1Obj && AppState.team2Obj) {
    matchupSummaryEl.textContent = `${AppState.team1Obj.name} ✖ ${AppState.team2Obj.name}`;
  }

  UI.showScreen('screen-result');
}
