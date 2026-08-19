/**
 * players.js - Interactive Local Database Explorer (Players & Teams)
 * Support for Turkish Search Normalization, Grouped League Views, and Team Modal
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const tabPlayersBtn = document.getElementById('tab-players-btn');
  const tabTeamsBtn = document.getElementById('tab-teams-btn');
  const tabPlayerBadge = document.getElementById('tab-player-badge');
  const tabTeamBadge = document.getElementById('tab-team-badge');

  const sectionPlayers = document.getElementById('section-players');
  const sectionTeams = document.getElementById('section-teams');
  const playersGrid = document.getElementById('players-grid');
  const teamsContainer = document.getElementById('teams-container');
  const emptyState = document.getElementById('empty-state');

  const searchInput = document.getElementById('global-search');
  const clearSearchBtn = document.getElementById('clear-search');
  const countryFilter = document.getElementById('country-filter');
  const resultsCount = document.getElementById('results-count');
  const activeTagFilter = document.getElementById('active-tag-filter');
  const activeTagText = document.getElementById('active-tag-text');

  // Modal Elements
  const teamModal = document.getElementById('team-modal');
  const modalTeamBadge = document.getElementById('modal-team-badge');
  const modalTeamName = document.getElementById('modal-team-name');
  const modalTeamCountry = document.getElementById('modal-team-country');
  const modalPlayerCount = document.getElementById('modal-player-count');
  const modalPlayersList = document.getElementById('modal-players-list');
  const closeModalBtn = document.getElementById('close-modal');

  let currentTab = 'players'; // 'players' | 'teams'
  let allPlayers = [];
  let allTeams = [];
  let activeTeamFilter = null;

  // Initialize data
  loadData();

  async function loadData() {
    try {
      const [playersRes, teamsRes] = await Promise.all([
        fetch('/api/players').catch(() => null),
        fetch('/api/teams').catch(() => null)
      ]);

      if (playersRes && playersRes.ok) {
        allPlayers = await playersRes.json();
      }
      if (teamsRes && teamsRes.ok) {
        allTeams = await teamsRes.json();
      }
    } catch (e) {
      console.warn('API error, falling back to window.FOOTBALLERS', e);
    }

    // Fallback if API is offline
    if (!allPlayers || allPlayers.length === 0) {
      allPlayers = typeof FOOTBALLERS !== 'undefined' ? FOOTBALLERS : [];
    }
    if (!allTeams || allTeams.length === 0) {
      allTeams = typeof FOOTBALL_TEAMS !== 'undefined' ? FOOTBALL_TEAMS : [];
    }

    // Update Tab Badges
    if (tabPlayerBadge) tabPlayerBadge.textContent = allPlayers.length;
    if (tabTeamBadge) tabTeamBadge.textContent = allTeams.length;

    renderCurrentView();
  }

  // Tab Switch Handlers
  tabPlayersBtn.addEventListener('click', () => {
    switchTab('players');
  });

  tabTeamsBtn.addEventListener('click', () => {
    switchTab('teams');
  });

  function switchTab(tab) {
    currentTab = tab;
    if (tab === 'players') {
      tabPlayersBtn.className = 'flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all bg-emerald-500 text-slate-950 shadow-md';
      tabPlayersBtn.querySelector('span:last-child').className = 'px-2 py-0.5 rounded-full text-[11px] bg-slate-950/30 text-slate-950 font-mono font-bold';
      
      tabTeamsBtn.className = 'flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all text-slate-400 hover:text-white';
      tabTeamsBtn.querySelector('span:last-child').className = 'px-2 py-0.5 rounded-full text-[11px] bg-slate-800 text-slate-300 font-mono font-bold';
      
      sectionPlayers.classList.remove('hidden');
      sectionTeams.classList.add('hidden');
    } else {
      tabTeamsBtn.className = 'flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all bg-emerald-500 text-slate-950 shadow-md';
      tabTeamsBtn.querySelector('span:last-child').className = 'px-2 py-0.5 rounded-full text-[11px] bg-slate-950/30 text-slate-950 font-mono font-bold';
      
      tabPlayersBtn.className = 'flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all text-slate-400 hover:text-white';
      tabPlayersBtn.querySelector('span:last-child').className = 'px-2 py-0.5 rounded-full text-[11px] bg-slate-800 text-slate-300 font-mono font-bold';
      
      sectionTeams.classList.remove('hidden');
      sectionPlayers.classList.add('hidden');
    }
    renderCurrentView();
  }

  // String normalizer for Turkish and diacritics
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
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }

  // Filter and render
  function renderCurrentView() {
    const query = normalizeStr(searchInput.value);
    const country = countryFilter.value;

    if (searchInput.value.trim().length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }

    if (activeTeamFilter) {
      activeTagFilter.classList.remove('hidden');
      activeTagFilter.classList.add('flex');
      const teamObj = allTeams.find(t => t.id === activeTeamFilter);
      activeTagText.textContent = `Kulüp: ${teamObj ? teamObj.name : activeTeamFilter}`;
    } else {
      activeTagFilter.classList.add('hidden');
      activeTagFilter.classList.remove('flex');
    }

    if (currentTab === 'players') {
      renderPlayers(query, country);
    } else {
      renderTeams(query, country);
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Render Players
  function renderPlayers(query, country) {
    let filtered = allPlayers.filter(p => {
      // Team filter
      if (activeTeamFilter && !(p.teamsPlayed || []).includes(activeTeamFilter)) {
        return false;
      }

      // Country filter
      if (country && !p.nationality.toLowerCase().includes(country.toLowerCase())) {
        return false;
      }

      // Search query
      if (query) {
        const nameNorm = normalizeStr(p.name);
        const posNorm = normalizeStr(p.position);
        const natNorm = normalizeStr(p.nationality);
        const teamsNorm = (p.teamsPlayed || []).map(t => {
          const tObj = allTeams.find(item => item.id === t);
          return normalizeStr(tObj ? tObj.name : t);
        });

        const matches = 
          nameNorm.includes(query) ||
          posNorm.includes(query) ||
          natNorm.includes(query) ||
          teamsNorm.some(t => t.includes(query));

        if (!matches) return false;
      }

      return true;
    });

    resultsCount.textContent = `Toplam ${filtered.length} Oyuncu listeleniyor`;

    if (filtered.length === 0) {
      playersGrid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');
    playersGrid.innerHTML = filtered.map(p => {
      const teamPills = (p.teamsPlayed || []).map(tid => {
        const tObj = allTeams.find(t => t.id === tid);
        const tName = tObj ? tObj.name : tid.replace(/_/g, ' ');
        const tColor = tObj ? tObj.color : '#3b82f6';
        return `
          <button 
            onclick="window.filterByTeam('${tid}')"
            class="px-2 py-0.5 rounded-md text-[11px] bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            title="${tName} takımına göre filtrele"
          >
            <span class="w-1.5 h-1.5 rounded-full" style="background-color: ${tColor};"></span>
            <span>${tName}</span>
          </button>
        `;
      }).join('');

      return `
        <div class="glass-panel glass-panel-glow p-4 rounded-2xl flex flex-col justify-between bg-darkCard border border-slate-800/80 hover:border-emerald-500/40 transition-all group">
          <div>
            <div class="flex items-center gap-3 mb-3">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-tr ${p.avatarBg || 'from-emerald-500 to-teal-700'} flex items-center justify-center text-sm font-black text-white shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                ${p.avatar || 'FC'}
              </div>
              <div class="overflow-hidden">
                <h3 class="text-white font-bold text-sm sm:text-base leading-snug group-hover:text-neon transition-colors truncate" title="${p.name}">
                  ${p.name}
                </h3>
                <p class="text-xs text-slate-400 font-medium">${p.position} • ${p.nationality}</p>
              </div>
            </div>
            
            <div class="border-t border-slate-800/60 pt-2.5">
              <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1.5">Oynadığı Kulüpler:</span>
              <div class="flex flex-wrap gap-1.5">
                ${teamPills}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Teams Grouped by Country / League
  function renderTeams(query, country) {
    let filteredTeams = allTeams.filter(t => {
      if (country && !t.country.toLowerCase().includes(country.toLowerCase())) {
        return false;
      }
      if (query) {
        const nameNorm = normalizeStr(t.name);
        const shortNorm = normalizeStr(t.short);
        const countryNorm = normalizeStr(t.country);
        if (!nameNorm.includes(query) && !shortNorm.includes(query) && !countryNorm.includes(query)) {
          return false;
        }
      }
      return true;
    });

    resultsCount.textContent = `Toplam ${filteredTeams.length} Kulüp listeleniyor`;

    if (filteredTeams.length === 0) {
      teamsContainer.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');

    // Group teams by country
    const groups = {};
    filteredTeams.forEach(t => {
      const c = t.country || 'Diğer Kulüpler 🌍';
      groups[c] = groups[c] || [];
      groups[c].push(t);
    });

    teamsContainer.innerHTML = Object.entries(groups).map(([groupCountry, teams]) => {
      const teamCards = teams.map(t => {
        // Count how many DB players played for this team
        const count = allPlayers.filter(p => (p.teamsPlayed || []).includes(t.id)).length;

        return `
          <div 
            onclick="window.openTeamModal('${t.id}')"
            class="glass-panel glass-panel-glow p-4 rounded-2xl flex flex-col justify-between bg-darkCard border border-slate-800/80 hover:border-emerald-500/60 hover:bg-slate-900 transition-all cursor-pointer group shadow-lg"
          >
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm text-white shadow-md flex-shrink-0 border border-white/10 group-hover:scale-105 transition-transform" style="background-color: ${t.color || '#00ff87'};">
                ${t.short}
              </div>
              <div class="overflow-hidden">
                <h4 class="text-white font-bold text-sm group-hover:text-neon transition-colors truncate">${t.name}</h4>
                <p class="text-[11px] text-slate-400">${t.country}</p>
              </div>
            </div>
            
            <div class="mt-4 pt-2.5 border-t border-slate-800/60 flex justify-between items-center text-xs">
              <span class="text-slate-400 font-medium">DB Oyuncusu:</span>
              <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold font-mono text-[11px] border border-emerald-500/20">
                ${count} Oyuncu
              </span>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2 border-b border-slate-800/80 pb-2">
            <h3 class="text-lg font-bold text-white tracking-wide">${groupCountry}</h3>
            <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold font-mono">${teams.length} Takım</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            ${teamCards}
          </div>
        </div>
      `;
    }).join('');
  }

  // Global helper to filter by team
  window.filterByTeam = function(teamId) {
    activeTeamFilter = teamId;
    switchTab('players');
  };

  // Global helper to open team modal
  window.openTeamModal = function(teamId) {
    const team = allTeams.find(t => t.id === teamId);
    if (!team) return;

    modalTeamBadge.textContent = team.short;
    modalTeamBadge.style.backgroundColor = team.color || '#00ff87';
    modalTeamBadge.style.color = '#ffffff';
    modalTeamName.textContent = team.name;
    modalTeamCountry.textContent = team.country;

    const teamPlayers = allPlayers.filter(p => (p.teamsPlayed || []).includes(teamId));
    modalPlayerCount.textContent = `${teamPlayers.length} Oyuncu`;

    if (teamPlayers.length === 0) {
      modalPlayersList.innerHTML = `<div class="col-span-2 text-center text-slate-500 py-6">Bu takım için veritabanında henüz kayıtlı oyuncu yok.</div>`;
    } else {
      modalPlayersList.innerHTML = teamPlayers.map(p => `
        <div class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-tr ${p.avatarBg || 'from-emerald-500 to-teal-700'} flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
            ${p.avatar || 'FC'}
          </div>
          <div class="overflow-hidden">
            <div class="text-xs font-bold text-white truncate">${p.name}</div>
            <div class="text-[10px] text-slate-400">${p.position} • ${p.nationality}</div>
          </div>
        </div>
      `).join('');
    }

    teamModal.classList.remove('hidden');
    setTimeout(() => {
      teamModal.classList.remove('opacity-0');
    }, 10);
  };

  // Close Modal
  function closeModal() {
    teamModal.classList.add('opacity-0');
    setTimeout(() => {
      teamModal.classList.add('hidden');
    }, 200);
  }

  closeModalBtn.addEventListener('click', closeModal);
  teamModal.addEventListener('click', (e) => {
    if (e.target === teamModal) closeModal();
  });

  // Clear Active Tag Filter
  activeTagFilter.addEventListener('click', () => {
    activeTeamFilter = null;
    renderCurrentView();
  });

  // Search input and country filters
  searchInput.addEventListener('input', () => {
    renderCurrentView();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    renderCurrentView();
  });

  countryFilter.addEventListener('change', () => {
    renderCurrentView();
  });
});
