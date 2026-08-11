// players.js - Fetch and display player list with search filter

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('players-grid');
  const teamsGrid = document.getElementById('teams-grid');
  const searchInput = document.getElementById('player-search');
  const playerCountEl = document.getElementById('player-count');
  const teamCountEl = document.getElementById('team-count');

  const API_BASE_URL = window.API_SERVER_URL || '';

  // If running on GitHub Pages or another static host,
  // set window.API_SERVER_URL = 'https://your-backend.example.com' in players.html
  // so the players page can retrieve live backend data.

  const renderLocalData = () => {
    const players = typeof FOOTBALLERS !== 'undefined' ? FOOTBALLERS : [];
    const teams = typeof FOOTBALL_TEAMS !== 'undefined' ? FOOTBALL_TEAMS : [];
    window.__allPlayers = players;
    window.__allTeams = teams;
    const effectiveTeams = deriveTeams(players, teams);
    renderStats(players, effectiveTeams);
    renderTeams(effectiveTeams);
    renderGrid(players);
  };

  // Fetch players and teams from server API when available; otherwise fall back to local data
  const playersEndpoint = API_BASE_URL ? `${API_BASE_URL.replace(/\/$/, '')}/api/players` : '/api/players';
  const teamsEndpoint = API_BASE_URL ? `${API_BASE_URL.replace(/\/$/, '')}/api/teams` : '/api/teams';

  Promise.all([fetch(playersEndpoint), fetch(teamsEndpoint)])
      .then(([playersRes, teamsRes]) => {
        if (!playersRes.ok) throw new Error('Players API failed');
        if (!teamsRes.ok) throw new Error('Teams API failed');
        return Promise.all([playersRes.json(), teamsRes.json()]);
      })
      .then(([players, teams]) => {
        if (!Array.isArray(players)) players = [];
        if (!Array.isArray(teams)) teams = [];
        window.__allPlayers = players;
        window.__allTeams = teams;
        const effectiveTeams = deriveTeams(players, teams);
        renderStats(players, effectiveTeams);
        renderTeams(effectiveTeams);
        renderGrid(players);
      })
      .catch(err => {
        console.error('Failed to load players or teams:', err);
        renderLocalData();
      });
  }

  function deriveTeams(players, teams) {
    if (Array.isArray(teams) && teams.length > 0) return teams;
    const teamIds = [...new Set(players.flatMap(p => p.teamsPlayed || []))];
    return teamIds.map(id => ({
      id,
      name: id.replace(/_/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase()),
      short: id.slice(0, 3).toUpperCase(),
      country: 'Bilinmiyor'
    }));
  }

  function renderStats(players, teams) {
    if (playerCountEl) playerCountEl.textContent = `Oyuncu: ${players.length}`;
    if (teamCountEl) teamCountEl.textContent = `Kulüp: ${teams.length}`;
  }

  function renderTeams(teams) {
    if (!teamsGrid) return;
    teamsGrid.innerHTML = '';
    teams.forEach(team => {
      const card = document.createElement('div');
      card.className = 'glass-panel glass-panel-glow p-4 rounded-xl flex flex-col items-center text-center bg-darkCard';
      card.innerHTML = `
        <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white shadow-sm mb-3">
          ${team.short}
        </div>
        <h3 class="text-sm font-semibold text-white">${team.name}</h3>
        <p class="text-[11px] text-slate-400 mt-1">${team.country}</p>
      `;
      teamsGrid.appendChild(card);
    });
  }

  // Render player cards
  function renderGrid(players) {
    grid.innerHTML = '';
    players.forEach(p => {
      const card = document.createElement('div');
      card.className = 'glass-panel glass-panel-glow p-4 rounded-xl flex flex-col items-center text-center bg-darkCard';
      card.innerHTML = `
        <div class="w-16 h-16 rounded-xl bg-gradient-to-tr ${p.avatarBg} flex items-center justify-center text-xl font-bold text-white shadow-md mb-2">
          ${p.avatar}
        </div>
        <h3 class="text-neon font-semibold mb-1">${p.name}</h3>
        <p class="text-xs text-slate-300">${p.position} • ${p.nationality}</p>
        <p class="text-xs text-slate-400 mt-1">${p.teamsPlayed.map(t => t.replace('_', ' ')).join(', ')}</p>
      `;
      grid.appendChild(card);
    });
  }

  // Simple search filter (name / position / nationality / team)
  searchInput.addEventListener('input', e => {
    const term = e.target.value.trim().toLowerCase();
    if (!term) {
      renderGrid(window.__allPlayers);
      return;
    }
    const filtered = window.__allPlayers.filter(p => {
      return (
        p.name.toLowerCase().includes(term) ||
        p.position.toLowerCase().includes(term) ||
        p.nationality.toLowerCase().includes(term) ||
        p.teamsPlayed.some(team => team.toLowerCase().includes(term))
      );
    });
    renderGrid(filtered);
  });
});
