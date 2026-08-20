/**
 * UI Renderer & Screen Router for 1v1 Football Quiz SPA
 * Integrated with Web Audio Synth, Scoreboard, Team Selectors, and Per-Round Secret Team Modal
 */

const UI = {
  activeScreen: 'screen-lobby',
  autocompleteIndex: -1,
  
  init() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  showScreen(screenId) {
    const screens = ['screen-lobby', 'screen-waiting', 'screen-game', 'screen-result', 'screen-solo-streak'];
    screens.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        if (id === screenId) {
          el.classList.remove('hidden');
          el.classList.add('flex');
        } else {
          el.classList.add('hidden');
          el.classList.remove('flex');
        }
      }
    });
    this.activeScreen = screenId;
    window.scrollTo(0, 0);

    setTimeout(() => {
      if (window.lucide) window.lucide.createIcons();
    }, 50);
  },

  spawnFloatingReaction(containerId, emote) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const el = document.createElement('div');
    el.className = 'floating-reaction';
    el.textContent = emote;

    // Random horizontal position within 20% - 80%
    const randomLeft = 20 + Math.random() * 60;
    el.style.left = `${randomLeft}%`;
    el.style.bottom = '20px';

    container.appendChild(el);
    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 1900);
  },

  showNotification(message, type = 'info', duration = 3000) {
    const banner = document.getElementById('match-notification');
    if (!banner) return;

    const textEl = banner.querySelector('.notify-text');
    if (textEl) textEl.textContent = message;

    banner.className = 'glass-panel px-4 py-2 rounded-full border flex items-center gap-2.5 transition-all duration-300 shadow-lg transform translate-y-0 opacity-100';
    
    if (type === 'success') {
      banner.classList.add('border-emerald-500/50', 'bg-emerald-950/60', 'text-emerald-300');
    } else if (type === 'error') {
      banner.classList.add('border-rose-500/50', 'bg-rose-950/60', 'text-rose-300');
    } else if (type === 'typing') {
      banner.classList.add('border-cyan-500/50', 'bg-cyan-950/60', 'text-cyan-300');
    } else {
      banner.classList.add('border-slate-700', 'bg-slate-900/80', 'text-slate-200');
    }

    if (this._notifyTimeout) clearTimeout(this._notifyTimeout);
    this._notifyTimeout = setTimeout(() => {
      banner.classList.add('opacity-0', '-translate-y-2');
    }, duration);
  },

  runCountdown(onComplete) {
    const overlay = document.getElementById('countdown-overlay');
    const countText = document.getElementById('countdown-text');
    if (!overlay || !countText) {
      if (onComplete) onComplete();
      return;
    }

    overlay.classList.remove('hidden');
    overlay.classList.add('flex');

    const steps = ['3', '2', '1', 'BAŞLA!'];
    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        const val = steps[stepIndex];
        countText.textContent = val;

        if (val === 'BAŞLA!') {
          SoundFX.playWhistle();
        } else {
          SoundFX.playBeep(stepIndex === 2);
        }

        countText.classList.remove('animate-pop');
        void countText.offsetWidth;
        countText.classList.add('animate-pop');
        stepIndex++;
      } else {
        clearInterval(interval);
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
        if (onComplete) onComplete();
      }
    }, 800);
  },

  renderAutocompleteList(items, onSelectCallback) {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (!dropdown) return;

    this.autocompleteIndex = -1;

    if (!items || items.length === 0) {
      dropdown.classList.add('hidden');
      dropdown.innerHTML = '';
      return;
    }

    dropdown.innerHTML = items.map((player, idx) => `
      <div 
        data-index="${idx}" 
        data-player-id="${player.id}"
        class="autocomplete-item p-3 cursor-pointer border-b border-slate-800/60 last:border-0 flex items-center justify-between group"
      >
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br ${player.avatarBg || 'from-emerald-500 to-teal-700'} flex items-center justify-center font-extrabold text-white text-xs shadow-md">
            ${player.avatar || 'FC'}
          </div>
          <div>
            <div class="font-semibold text-slate-100 group-hover:text-emerald-400 text-sm md:text-base transition-colors flex items-center gap-2">
              ${player.name}
              <span class="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-normal border border-slate-700/50">${player.position}</span>
            </div>
            <div class="text-xs text-slate-400">${player.nationality}</div>
          </div>
        </div>
        <div class="text-xs font-mono text-emerald-400/80 group-hover:text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/20">
          Seç ↵
        </div>
      </div>
    `).join('');

    dropdown.classList.remove('hidden');

    dropdown.querySelectorAll('.autocomplete-item').forEach(el => {
      el.addEventListener('click', () => {
        const pId = el.getAttribute('data-player-id');
        const selectedPlayer = items.find(p => p.id === pId);
        if (selectedPlayer && onSelectCallback) {
          onSelectCallback(selectedPlayer);
        }
      });
    });
  },

  hideAutocomplete() {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (dropdown) {
      dropdown.classList.add('hidden');
      dropdown.innerHTML = '';
    }
    this.autocompleteIndex = -1;
  },

  navigateAutocomplete(direction, items, onSelectCallback) {
    const dropdown = document.getElementById('autocomplete-dropdown');
    if (!dropdown || dropdown.classList.contains('hidden')) return;

    const elements = dropdown.querySelectorAll('.autocomplete-item');
    if (elements.length === 0) return;

    if (direction === 'down') {
      this.autocompleteIndex = (this.autocompleteIndex + 1) % elements.length;
    } else if (direction === 'up') {
      this.autocompleteIndex = (this.autocompleteIndex - 1 + elements.length) % elements.length;
    }

    elements.forEach((el, idx) => {
      if (idx === this.autocompleteIndex) {
        el.classList.add('active');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('active');
      }
    });

    if (direction === 'enter' && this.autocompleteIndex >= 0 && this.autocompleteIndex < items.length) {
      onSelectCallback(items[this.autocompleteIndex]);
    }
  },

  renderGameTeams(team1Obj, team2Obj) {
    const t1Name = document.getElementById('team1-name');
    const t1Badge = document.getElementById('team1-badge');
    const t1Country = document.getElementById('team1-country');

    const t2Name = document.getElementById('team2-name');
    const t2Badge = document.getElementById('team2-badge');
    const t2Country = document.getElementById('team2-country');

    if (t1Name) t1Name.textContent = team1Obj.name;
    if (t1Country) t1Country.textContent = team1Obj.country;
    if (t1Badge) {
      t1Badge.textContent = team1Obj.short;
      t1Badge.style.backgroundColor = team1Obj.color || '#00ff87';
    }

    if (t2Name) t2Name.textContent = team2Obj.name;
    if (t2Country) t2Country.textContent = team2Obj.country;
    if (t2Badge) {
      t2Badge.textContent = team2Obj.short;
      t2Badge.style.backgroundColor = team2Obj.color || '#00d2ff';
    }
  },

  populateMyTeamSelector(allTeams, selectedTeamId) {
    const selectMyTeam = document.getElementById('select-my-team');
    if (selectMyTeam) {
      selectMyTeam.innerHTML = allTeams.map(t => 
        `<option value="${t.id}" ${t.id === selectedTeamId ? 'selected' : ''}>${t.name}</option>`
      ).join('');
    }
  },

  updateOpponentTeamStatus(hasSelected) {
    const statusEl = document.getElementById('opponent-team-status');
    if (!statusEl) return;
    if (hasSelected) {
      statusEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="text-emerald-400 font-extrabold">🔒 Takım Seçildi</span>';
      statusEl.className = 'px-3 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-400 flex items-center gap-1.5';
    } else {
      statusEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span><span>⏳ Seçim Yapıyor...</span>';
      statusEl.className = 'px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-400 flex items-center gap-1.5';
    }
  },

  showRoundTeamModal(roundNumber, allTeams, currentTeamId) {
    const modal = document.getElementById('modal-round-team-picker');
    const titleEl = document.getElementById('modal-round-title');
    const selectEl = document.getElementById('select-round-team');
    const confirmBtn = document.getElementById('btn-confirm-round-team');

    if (!modal) return;

    if (titleEl) titleEl.textContent = `TUR ${roundNumber} GİZLİ TAKIM SEÇİMİ`;
    if (selectEl) {
      selectEl.innerHTML = allTeams.map(t => 
        `<option value="${t.id}" ${t.id === currentTeamId ? 'selected' : ''}>${t.name}</option>`
      ).join('');
    }

    if (confirmBtn) {
      confirmBtn.disabled = false;
      confirmBtn.className = 'w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20';
      confirmBtn.textContent = 'Takımı Onayla & Kilitle 🔒';
    }

    this.updateRoundOpponentStatus(false);

    modal.classList.remove('hidden');
    modal.classList.add('flex');
  },

  hideRoundTeamModal() {
    const modal = document.getElementById('modal-round-team-picker');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },

  updateRoundOpponentStatus(isLocked) {
    const statusEl = document.getElementById('round-opponent-status');
    if (!statusEl) return;
    if (isLocked) {
      statusEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span class="text-emerald-400 font-extrabold">🔒 Rakip Takımını Seçti!</span>';
      statusEl.className = 'px-4 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-400 flex items-center gap-2';
    } else {
      statusEl.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span><span>⏳ Rakip Takımını Seçiyor...</span>';
      statusEl.className = 'px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-400 flex items-center gap-2';
    }
  },

  updateScoreboard(hostName, guestName, hostScore, guestScore, roundNumber, targetScore = 3) {
    const hNameEl = document.getElementById('score-host-name');
    const gNameEl = document.getElementById('score-guest-name');
    const hValEl = document.getElementById('score-host-val');
    const gValEl = document.getElementById('score-guest-val');
    const roundIndEl = document.getElementById('round-indicator');

    if (hNameEl) hNameEl.textContent = hostName || 'Oyuncu 1';
    if (gNameEl) gNameEl.textContent = guestName || 'Rakip';
    if (hValEl) hValEl.textContent = hostScore ?? 0;
    if (gValEl) gValEl.textContent = guestScore ?? 0;
    if (roundIndEl) roundIndEl.textContent = `TUR ${roundNumber || 1} (Hedef: ${targetScore})`;
  },

  updateTimerUI(secondsLeft, totalSeconds = 30) {
    const timerText = document.getElementById('round-timer-text');
    const timerBar = document.getElementById('round-timer-bar');

    if (timerText) timerText.textContent = secondsLeft + 's';
    if (timerBar) {
      const pct = Math.max(0, (secondsLeft / totalSeconds) * 100);
      timerBar.style.width = pct + '%';
      
      if (pct <= 25) {
        timerBar.className = 'h-full bg-gradient-to-r from-red-600 to-rose-500 transition-all duration-300 shadow-lg shadow-rose-500/50';
      } else if (pct <= 50) {
        timerBar.className = 'h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300 shadow-lg shadow-amber-500/50';
      } else {
        timerBar.className = 'h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 shadow-lg shadow-emerald-500/50';
      }
    }
  }
};
