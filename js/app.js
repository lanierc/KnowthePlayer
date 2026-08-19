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
  dataSource: 'LOCAL' // 'LOCAL' or 'API'
};

document.addEventListener('DOMContentLoaded', () => {
  UI.init();
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
      startRoundTimer();
      UI.showNotification(`⚽ Maç Başladı! ${data.team1Obj.name} ✖ ${data.team2Obj.name} ortak oyuncusunu bulun!`, 'info', 4000);
    });
  });

  socket.on('round_won', (data) => {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);

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
    UI.hideRoundTeamModal();

    const isWinner = data.winnerSocketId === socket.id;

    if (isWinner) {
      SoundFX.playVictory();
      Confetti.launch(5000);
    } else {
      SoundFX.playError();
    }

    finishMatch(data.winnerName, data.playerObj, isWinner, data.hostScore, data.guestScore);
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
    updateWaitingRoomUI();
    UI.showNotification(`⚠️ ${data.message}`, 'error', 4000);
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
      AppState.username = inputUsername.value.trim() || 'Oyuncu 1';
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
      AppState.username = inputUsername.value.trim() || 'Oyuncu 2';
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

      const filtered = FOOTBALLERS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.nationality.toLowerCase().includes(query.toLowerCase())
      );

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

  if (btnPlayAgain) {
    btnPlayAgain.addEventListener('click', () => {
      if (socket) socket.emit('restart_game');
    });
  }

  if (btnBackToLobby) {
    btnBackToLobby.addEventListener('click', () => {
      UI.showScreen('screen-lobby');
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
