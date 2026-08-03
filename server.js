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
const https = require('https');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname)));
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

// Curated Local Football Teams Database
const FOOTBALL_TEAMS = [
  // İspanya (La Liga)
  { id: 'real_madrid', name: 'Real Madrid', short: 'RMA', color: '#FEBE10', country: 'İspanya 🇪🇸' },
  { id: 'barcelona', name: 'FC Barcelona', short: 'BAR', color: '#004D98', country: 'İspanya 🇪🇸' },
  { id: 'atletico', name: 'Atlético Madrid', short: 'ATM', color: '#CB3524', country: 'İspanya 🇪🇸' },
  { id: 'sevilla', name: 'Sevilla FC', short: 'SEV', color: '#D00027', country: 'İspanya 🇪🇸' },
  { id: 'valencia', name: 'Valencia CF', short: 'VAL', color: '#FF7300', country: 'İspanya 🇪🇸' },

  // İtalya (Serie A)
  { id: 'juventus', name: 'Juventus', short: 'JUV', color: '#000000', country: 'İtalya 🇮🇹' },
  { id: 'ac_milan', name: 'AC Milan', short: 'ACM', color: '#FB090B', country: 'İtalya 🇮🇹' },
  { id: 'inter', name: 'Inter Milan', short: 'INT', color: '#0066B2', country: 'İtalya 🇮🇹' },
  { id: 'roma', name: 'AS Roma', short: 'ROM', color: '#8E1F2F', country: 'İtalya 🇮🇹' },
  { id: 'napoli', name: 'SSC Napoli', short: 'NAP', color: '#0080FF', country: 'İtalya 🇮🇹' },
  { id: 'lazio', name: 'SS Lazio', short: 'LAZ', color: '#87D8F7', country: 'İtalya 🇮🇹' },

  // İngiltere (Premier League)
  { id: 'man_utd', name: 'Manchester United', short: 'MUN', color: '#DA291C', country: 'İngiltere 🇬🇧' },
  { id: 'man_city', name: 'Manchester City', short: 'MCI', color: '#6CABDD', country: 'İngiltere 🇬🇧' },
  { id: 'chelsea', name: 'Chelsea FC', short: 'CHE', color: '#034694', country: 'İngiltere 🇬🇧' },
  { id: 'liverpool', name: 'Liverpool FC', short: 'LIV', color: '#C8102E', country: 'İngiltere 🇬🇧' },
  { id: 'arsenal', name: 'Arsenal FC', short: 'ARS', color: '#EF0107', country: 'İngiltere 🇬🇧' },
  { id: 'tottenham', name: 'Tottenham Hotspur', short: 'TOT', color: '#132257', country: 'İngiltere 🇬🇧' },
  { id: 'newcastle', name: 'Newcastle United', short: 'NEW', color: '#241F20', country: 'İngiltere 🇬🇧' },
  { id: 'bournemouth', name: 'Bournemouth', short: 'BOU', color: '#DA291C', country: 'İngiltere 🇬🇧' },
  { id: 'everton', name: 'Everton FC', short: 'EVE', color: '#003399', country: 'İngiltere 🇬🇧' },

  // Almanya (Bundesliga)
  { id: 'bayern', name: 'Bayern München', short: 'BAY', color: '#DC052D', country: 'Almanya 🇩🇪' },
  { id: 'dortmund', name: 'Borussia Dortmund', short: 'BVB', color: '#FDE100', country: 'Almanya 🇩🇪' },
  { id: 'leverkusen', name: 'Bayer Leverkusen', short: 'LEV', color: '#E32219', country: 'Almanya 🇩🇪' },
  { id: 'rb_leipzig', name: 'RB Leipzig', short: 'RBL', color: '#DD013F', country: 'Almanya 🇩🇪' },

  // Fransa (Ligue 1)
  { id: 'psg', name: 'Paris Saint-Germain', short: 'PSG', color: '#004170', country: 'Fransa 🇫🇷' },
  { id: 'marseille', name: 'Olympique Marseille', short: 'OM', color: '#00A3E0', country: 'Fransa 🇫🇷' },
  { id: 'monaco', name: 'AS Monaco', short: 'MON', color: '#E20613', country: 'Fransa 🇫🇷' },
  { id: 'lille', name: 'LOSC Lille', short: 'LIL', color: '#E01E2B', country: 'Fransa 🇫🇷' },

  // Portekiz & Hollanda
  { id: 'porto', name: 'FC Porto', short: 'POR', color: '#004B87', country: 'Portekiz 🇵🇹' },
  { id: 'benfica', name: 'SL Benfica', short: 'BEN', color: '#E30613', country: 'Portekiz 🇵🇹' },
  { id: 'sporting', name: 'Sporting CP', short: 'SPO', color: '#008057', country: 'Portekiz 🇵🇹' },
  { id: 'ajax', name: 'AFC Ajax', short: 'AJX', color: '#D2122E', country: 'Hollanda 🇳🇱' },
  { id: 'feyenoord', name: 'Feyenoord', short: 'FEY', color: '#FF0000', country: 'Hollanda 🇳🇱' },

  // Türkiye (Süper Lig)
  { id: 'galatasaray', name: 'Galatasaray', short: 'GAL', color: '#A90429', country: 'Türkiye 🇹🇷' },
  { id: 'fenerbahce', name: 'Fenerbahçe', short: 'FEN', color: '#002D62', country: 'Türkiye 🇹🇷' },
  { id: 'besiktas', name: 'Beşiktaş JK', short: 'BES', color: '#000000', country: 'Türkiye 🇹🇷' },
  { id: 'trabzonspor', name: 'Trabzonspor', short: 'TS', color: '#8B0000', country: 'Türkiye 🇹🇷' },

  // Arabistan & ABD
  { id: 'al_nassr', name: 'Al Nassr', short: 'NAS', color: '#F7D100', country: 'Suudi Arabistan 🇸🇦' },
  { id: 'al_hilal', name: 'Al Hilal', short: 'HIL', color: '#0055A5', country: 'Suudi Arabistan 🇸🇦' },
  { id: 'inter_miami', name: 'Inter Miami CF', short: 'MIA', color: '#F7B5CD', country: 'ABD 🇺🇸' }
];

// Comprehensive Footballers Database
let FOOTBALLERS = [
  { id: 'c_ronaldo', name: 'Cristiano Ronaldo', position: 'Forvet', nationality: 'Portekiz 🇵🇹', avatar: 'CR7', avatarBg: 'from-amber-500 to-red-600', teamsPlayed: ['real_madrid', 'juventus', 'man_utd', 'sporting', 'al_nassr'], details: 'Sporting CP, Man Utd, Real Madrid, Juventus, Al Nassr' },
  { id: 'l_messi', name: 'Lionel Messi', position: 'Forvet', nationality: 'Arjantin 🇦🇷', avatar: 'LM10', avatarBg: 'from-sky-400 to-purple-600', teamsPlayed: ['barcelona', 'psg', 'inter_miami'], details: 'FC Barcelona (2004-2021), PSG (2021-2023), Inter Miami' },
  { id: 'neymar_jr', name: 'Neymar Jr', position: 'Sol Kanat', nationality: 'Brezilya 🇧🇷', avatar: 'NJ10', avatarBg: 'from-yellow-400 to-green-600', teamsPlayed: ['barcelona', 'psg', 'al_hilal'], details: 'FC Barcelona, PSG, Al Hilal' },
  { id: 'k_mbappe', name: 'Kylian Mbappé', position: 'Santrafor / Kanat', nationality: 'Fransa 🇫🇷', avatar: 'KM9', avatarBg: 'from-blue-600 to-amber-500', teamsPlayed: ['monaco', 'psg', 'real_madrid'], details: 'AS Monaco, PSG, Real Madrid (2024-günümüz)' },
  { id: 'e_haaland', name: 'Erling Haaland', position: 'Santrafor', nationality: 'Norveç 🇳🇴', avatar: 'EH9', avatarBg: 'from-yellow-400 to-cyan-500', teamsPlayed: ['dortmund', 'man_city', 'rb_leipzig'], details: 'RB Salzburg, Borussia Dortmund, Manchester City' },
  { id: 'j_bellingham', name: 'Jude Bellingham', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'JB5', avatarBg: 'from-amber-400 to-slate-900', teamsPlayed: ['dortmund', 'real_madrid'], details: 'Borussia Dortmund (2020-2023), Real Madrid (2023-günümüz)' },
  { id: 'vinicius_jr', name: 'Vinícius Júnior', position: 'Sol Kanat', nationality: 'Brezilya 🇧🇷', avatar: 'V7', avatarBg: 'from-amber-400 to-purple-600', teamsPlayed: ['real_madrid'], details: 'Real Madrid (2018-günümüz)' },
  { id: 'k_benzema', name: 'Karim Benzema', position: 'Santrafor', nationality: 'Fransa 🇫🇷', avatar: 'KB9', avatarBg: 'from-slate-700 to-amber-500', teamsPlayed: ['real_madrid', 'al_ittihad'], details: 'Real Madrid efsanesi (2009-2023)' },
  { id: 'z_ibrahimovic', name: 'Zlatan Ibrahimović', position: 'Santrafor', nationality: 'İsveç 🇸🇪', avatar: 'ZI', avatarBg: 'from-yellow-400 to-blue-600', teamsPlayed: ['juventus', 'inter', 'ac_milan', 'barcelona', 'psg', 'man_utd', 'ajax'], details: 'Ajax, Juventus, Inter, AC Milan, Barcelona, PSG, Man Utd' },
  { id: 'a_di_maria', name: 'Ángel Di María', position: 'Sağ Kanat', nationality: 'Arjantin 🇦🇷', avatar: 'ADM', avatarBg: 'from-sky-400 to-blue-700', teamsPlayed: ['real_madrid', 'juventus', 'psg', 'man_utd', 'benfica'], details: 'Benfica, Real Madrid, Man Utd, PSG, Juventus' },
  { id: 'g_higuain', name: 'Gonzalo Higuaín', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'GH', avatarBg: 'from-blue-600 to-slate-800', teamsPlayed: ['real_madrid', 'juventus', 'ac_milan', 'chelsea', 'napoli', 'inter_miami'], details: 'Real Madrid, Napoli, Juventus, AC Milan, Chelsea, Inter Miami' },
  { id: 'a_morata', name: 'Álvaro Morata', position: 'Santrafor', nationality: 'İspanya 🇪🇸', avatar: 'AM', avatarBg: 'from-red-600 to-yellow-500', teamsPlayed: ['real_madrid', 'juventus', 'chelsea', 'ac_milan', 'atletico'], details: 'Real Madrid, Juventus, Chelsea, Atletico Madrid, AC Milan' },
  { id: 'l_figo', name: 'Luís Figo', position: 'Sağ Kanat', nationality: 'Portekiz 🇵🇹', avatar: 'LF', avatarBg: 'from-purple-600 to-red-600', teamsPlayed: ['barcelona', 'real_madrid', 'inter', 'sporting'], details: 'Sporting CP, FC Barcelona, Real Madrid, Inter Milan' },
  { id: 'r_ronaldinho', name: 'Ronaldinho Gaúcho', position: 'Ofansif Orta Saha', nationality: 'Brezilya 🇧🇷', avatar: 'R10', avatarBg: 'from-yellow-400 to-green-600', teamsPlayed: ['psg', 'barcelona', 'ac_milan'], details: 'PSG, FC Barcelona, AC Milan' },
  { id: 'kaka', name: 'Kaká', position: 'Ofansif Orta Saha', nationality: 'Brezilya 🇧🇷', avatar: 'K8', avatarBg: 'from-red-600 to-black', teamsPlayed: ['ac_milan', 'real_madrid'], details: 'AC Milan (2003-2009), Real Madrid (2009-2013)' },
  { id: 'x_alonso', name: 'Xabi Alonso', position: 'Ön Libero', nationality: 'İspanya 🇪🇸', avatar: 'XA', avatarBg: 'from-red-700 to-blue-900', teamsPlayed: ['real_madrid', 'bayern', 'liverpool'], details: 'Liverpool, Real Madrid, Bayern München' },
  { id: 'a_pirlo', name: 'Andrea Pirlo', position: 'Orta Saha', nationality: 'İtalya 🇮🇹', avatar: 'AP', avatarBg: 'from-blue-900 to-slate-900', teamsPlayed: ['inter', 'ac_milan', 'juventus'], details: 'Inter Milan, AC Milan, Juventus' },
  { id: 'd_beckham', name: 'David Beckham', position: 'Sağ Kanat', nationality: 'İngiltere 🇬🇧', avatar: 'DB7', avatarBg: 'from-red-600 to-amber-400', teamsPlayed: ['man_utd', 'real_madrid', 'ac_milan', 'psg'], details: 'Man Utd, Real Madrid, AC Milan, PSG' },
  { id: 't_thierry_henry', name: 'Thierry Henry', position: 'Santrafor', nationality: 'Fransa 🇫🇷', avatar: 'TH14', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['monaco', 'juventus', 'arsenal', 'barcelona'], details: 'Monaco, Juventus, Arsenal, FC Barcelona' },
  { id: 'n_canales_sneijder', name: 'Wesley Sneijder', position: 'Ofansif Orta Saha', nationality: 'Hollanda 🇳🇱', avatar: 'WS10', avatarBg: 'from-orange-500 to-red-700', teamsPlayed: ['ajax', 'real_madrid', 'inter', 'galatasaray'], details: 'Ajax, Real Madrid, Inter Milan, Galatasaray' },
  { id: 'd_drogba', name: 'Didier Drogba', position: 'Santrafor', nationality: 'Fildişi Sahili 🇨🇮', avatar: 'DD11', avatarBg: 'from-blue-700 to-orange-500', teamsPlayed: ['marseille', 'chelsea', 'galatasaray'], details: 'Marseille, Chelsea, Galatasaray' },
  { id: 'm_ozil', name: 'Mesut Özil', position: 'Ofansif Orta Saha', nationality: 'Almanya 🇩🇪', avatar: 'MÖ10', avatarBg: 'from-amber-400 to-red-600', teamsPlayed: ['real_madrid', 'arsenal', 'fenerbahce'], details: 'Real Madrid, Arsenal, Fenerbahçe' },
  { id: 'r_van_persie', name: 'Robin van Persie', position: 'Santrafor', nationality: 'Hollanda 🇳🇱', avatar: 'RVP', avatarBg: 'from-red-600 to-black', teamsPlayed: ['feyenoord', 'arsenal', 'man_utd', 'fenerbahce'], details: 'Arsenal, Manchester United, Fenerbahçe' },
  { id: 'n_anelka', name: 'Nicolas Anelka', position: 'Santrafor', nationality: 'Fransa 🇫🇷', avatar: 'NA39', avatarBg: 'from-blue-600 to-slate-800', teamsPlayed: ['psg', 'arsenal', 'real_madrid', 'fenerbahce', 'chelsea', 'juventus', 'liverpool', 'man_city'], details: 'PSG, Arsenal, Real Madrid, Liverpool, Man City, Fenerbahçe, Chelsea, Juventus' },
  { id: 'p_coutinho', name: 'Philippe Coutinho', position: 'Ofansif Orta Saha', nationality: 'Brezilya 🇧🇷', avatar: 'PC10', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['inter', 'espanyol', 'liverpool', 'barcelona', 'bayern', 'aston_villa'], details: 'Inter, Liverpool, FC Barcelona, Bayern, Aston Villa' },
  { id: 'a_vidal', name: 'Arturo Vidal', position: 'Orta Saha', nationality: 'Şili 🇨🇱', avatar: 'AV22', avatarBg: 'from-red-600 to-slate-900', teamsPlayed: ['leverkusen', 'juventus', 'bayern', 'barcelona', 'inter'], details: 'Bayer Leverkusen, Juventus, Bayern, Barcelona, Inter' },
  { id: 'r_lewandowski', name: 'Robert Lewandowski', position: 'Santrafor', nationality: 'Polonya 🇵🇱', avatar: 'RL9', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['dortmund', 'bayern', 'barcelona'], details: 'Borussia Dortmund, Bayern München, FC Barcelona' },
  { id: 'e_hazard', name: 'Eden Hazard', position: 'Sol Kanat', nationality: 'Belçika 🇧🇪', avatar: 'EH7', avatarBg: 'from-blue-600 to-purple-600', teamsPlayed: ['lille', 'chelsea', 'real_madrid'], details: 'Chelsea FC, Real Madrid' },
  { id: 'a_sanchez', name: 'Alexis Sánchez', position: 'Forvet', nationality: 'Şili 🇨🇱', avatar: 'AS7', avatarBg: 'from-red-600 to-blue-700', teamsPlayed: ['barcelona', 'arsenal', 'man_utd', 'inter', 'marseille'], details: 'FC Barcelona, Arsenal, Man Utd, Inter, Marseille' },
  { id: 'l_suarez', name: 'Luis Suárez', position: 'Santrafor', nationality: 'Uruguay 🇺🇾', avatar: 'LS9', avatarBg: 'from-sky-500 to-blue-800', teamsPlayed: ['ajax', 'liverpool', 'barcelona', 'atletico', 'inter_miami'], details: 'Ajax, Liverpool, Barcelona, Atletico Madrid, Inter Miami' },
  { id: 'f_torres', name: 'Fernando Torres', position: 'Santrafor', nationality: 'İspanya 🇪🇸', avatar: 'FT9', avatarBg: 'from-red-600 to-slate-900', teamsPlayed: ['atletico', 'liverpool', 'chelsea', 'ac_milan'], details: 'Atletico Madrid, Liverpool, Chelsea, AC Milan' },
  { id: 'g_bale', name: 'Gareth Bale', position: 'Sağ Kanat', nationality: 'Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿', avatar: 'GB11', avatarBg: 'from-white to-amber-500', teamsPlayed: ['tottenham', 'real_madrid'], details: 'Tottenham Hotspur, Real Madrid' },
  { id: 'l_modric', name: 'Luka Modrić', position: 'Orta Saha', nationality: 'Hırvatistan 🇭🇷', avatar: 'LM10', avatarBg: 'from-red-600 to-blue-700', teamsPlayed: ['tottenham', 'real_madrid'], details: 'Tottenham Hotspur, Real Madrid (2012-günümüz)' },
  { id: 'k_de_bruyne', name: 'Kevin De Bruyne', position: 'Orta Saha', nationality: 'Belçika 🇧🇪', avatar: 'KDB', avatarBg: 'from-sky-400 to-blue-600', teamsPlayed: ['chelsea', 'man_city'], details: 'Chelsea, Manchester City' },
  { id: 'm_salah', name: 'Mohamed Salah', position: 'Sağ Kanat', nationality: 'Mısır 🇪🇬', avatar: 'MO11', avatarBg: 'from-red-600 to-amber-500', teamsPlayed: ['chelsea', 'fiorentina', 'roma', 'liverpool'], details: 'Chelsea, Fiorentina, AS Roma, Liverpool' },
  { id: 'c_fabregas', name: 'Cesc Fàbregas', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'CF4', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['arsenal', 'barcelona', 'chelsea', 'monaco'], details: 'Arsenal, FC Barcelona, Chelsea, Monaco' },
  { id: 'p_aubameyang', name: 'Pierre-Emerick Aubameyang', position: 'Santrafor', nationality: 'Gabon 🇬🇦', avatar: 'PEA', avatarBg: 'from-yellow-500 to-red-600', teamsPlayed: ['ac_milan', 'monaco', 'dortmund', 'arsenal', 'barcelona', 'chelsea', 'marseille'], details: 'AC Milan, Dortmund, Arsenal, Barcelona, Chelsea, Marseille' },
  { id: 'i_gundogan', name: 'İlkay Gündoğan', position: 'Orta Saha', nationality: 'Almanya 🇩🇪', avatar: 'IG22', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['dortmund', 'man_city', 'barcelona'], details: 'Borussia Dortmund, Manchester City, FC Barcelona' },
  { id: 'j_cancelo', name: 'João Cancelo', position: 'Sağ Bek / Sol Bek', nationality: 'Portekiz 🇵🇹', avatar: 'JC7', avatarBg: 'from-blue-500 to-teal-600', teamsPlayed: ['benfica', 'valencia', 'inter', 'juventus', 'man_city', 'bayern', 'barcelona'], details: 'Benfica, Valencia, Inter, Juventus, Man City, Bayern, Barcelona' },
  { id: 'r_falcao', name: 'Radamel Falcao', position: 'Santrafor', nationality: 'Kolombiya 🇨🇴', avatar: 'RF9', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['porto', 'atletico', 'monaco', 'man_utd', 'chelsea', 'galatasaray'], details: 'Porto, Atletico Madrid, Monaco, Man Utd, Chelsea, Galatasaray' },
  { id: 'm_icardi', name: 'Mauro Icardi', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'MI9', avatarBg: 'from-amber-400 to-red-600', teamsPlayed: ['inter', 'psg', 'galatasaray'], details: 'Inter Milan, PSG, Galatasaray' },
  { id: 'm_pjanić', name: 'Miralem Pjanić', position: 'Orta Saha', nationality: 'Bosna Hersek 🇧🇦', avatar: 'MP15', avatarBg: 'from-blue-700 to-black', teamsPlayed: ['roma', 'juventus', 'barcelona', 'besiktas'], details: 'AS Roma, Juventus, FC Barcelona, Beşiktaş' },
  { id: 'pepe', name: 'Pepe (Képler Laveran)', position: 'Stoper', nationality: 'Portekiz 🇵🇹', avatar: 'P3', avatarBg: 'from-slate-800 to-red-700', teamsPlayed: ['porto', 'real_madrid', 'besiktas'], details: 'FC Porto, Real Madrid, Beşiktaş' },
  { id: 'r_quaresma', name: 'Ricardo Quaresma', position: 'Sağ Kanat', nationality: 'Portekiz 🇵🇹', avatar: 'RQ7', avatarBg: 'from-purple-700 to-black', teamsPlayed: ['sporting', 'barcelona', 'porto', 'inter', 'chelsea', 'besiktas'], details: 'Sporting CP, Barcelona, Porto, Inter, Chelsea, Beşiktaş' },
  { id: 'm_balotelli', name: 'Mario Balotelli', position: 'Santrafor', nationality: 'İtalya 🇮🇹', avatar: 'MB45', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['inter', 'man_city', 'ac_milan', 'liverpool', 'marseille'], details: 'Inter, Man City, AC Milan, Liverpool, Marseille' },
  { id: 'v_osimhen', name: 'Victor Osimhen', position: 'Santrafor', nationality: 'Nijerya 🇳🇬', avatar: 'VO45', avatarBg: 'from-sky-400 to-amber-500', teamsPlayed: ['napoli', 'galatasaray'], details: 'SSC Napoli, Galatasaray' },
  { id: 'h_kane', name: 'Harry Kane', position: 'Santrafor', nationality: 'İngiltere 🇬🇧', avatar: 'HK9', avatarBg: 'from-red-600 to-blue-900', teamsPlayed: ['tottenham', 'bayern'], details: 'Tottenham Hotspur, Bayern München' },
  { id: 'r_lukaku', name: 'Romelu Lukaku', position: 'Santrafor', nationality: 'Belçika 🇧🇪', avatar: 'RL9', avatarBg: 'from-blue-600 to-yellow-500', teamsPlayed: ['chelsea', 'man_utd', 'inter', 'roma', 'napoli'], details: 'Chelsea, Man Utd, Inter, AS Roma, Napoli' },
  { id: 'a_griezmann', name: 'Antoine Griezmann', position: 'Forvet', nationality: 'Fransa 🇫🇷', avatar: 'AG7', avatarBg: 'from-red-600 to-blue-700', teamsPlayed: ['atletico', 'barcelona'], details: 'Atletico Madrid, FC Barcelona' },
  { id: 't_courtois', name: 'Thibaut Courtois', position: 'Kaleci', nationality: 'Belçika 🇧🇪', avatar: 'TC1', avatarBg: 'from-amber-400 to-slate-900', teamsPlayed: ['atletico', 'chelsea', 'real_madrid'], details: 'Atletico Madrid, Chelsea, Real Madrid' },
  { id: 's_mane', name: 'Sadio Mané', position: 'Sol Kanat', nationality: 'Senegal 🇸🇳', avatar: 'SM10', avatarBg: 'from-green-600 to-yellow-400', teamsPlayed: ['liverpool', 'bayern', 'al_nassr'], details: 'Liverpool, Bayern München, Al Nassr' },
  { id: 'k_koulibaly', name: 'Kalidou Koulibaly', position: 'Stoper', nationality: 'Senegal 🇸🇳', avatar: 'KK26', avatarBg: 'from-sky-500 to-blue-800', teamsPlayed: ['napoli', 'chelsea', 'al_hilal'], details: 'Napoli, Chelsea, Al Hilal' },
  { id: 'r_sterling', name: 'Raheem Sterling', position: 'Kanat', nationality: 'İngiltere 🇬🇧', avatar: 'RS7', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['liverpool', 'man_city', 'chelsea', 'arsenal'], details: 'Liverpool, Manchester City, Chelsea, Arsenal' },
  { id: 'g_jesus', name: 'Gabriel Jesus', position: 'Santrafor', nationality: 'Brezilya 🇧🇷', avatar: 'GJ9', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['man_city', 'arsenal'], details: 'Manchester City, Arsenal' },
  { id: 'b_silva', name: 'Bernardo Silva', position: 'Orta Saha', nationality: 'Portekiz 🇵🇹', avatar: 'BS20', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['benfica', 'monaco', 'man_city'], details: 'Benfica, AS Monaco, Manchester City' },
  { id: 'e_cavani', name: 'Edinson Cavani', position: 'Santrafor', nationality: 'Uruguay 🇺🇾', avatar: 'EC9', avatarBg: 'from-sky-400 to-blue-900', teamsPlayed: ['napoli', 'psg', 'man_utd', 'valencia'], details: 'Napoli, PSG, Manchester United, Valencia' },
  { id: 't_silva', name: 'Thiago Silva', position: 'Stoper', nationality: 'Brezilya 🇧🇷', avatar: 'TS6', avatarBg: 'from-blue-600 to-yellow-500', teamsPlayed: ['ac_milan', 'psg', 'chelsea'], details: 'AC Milan, PSG, Chelsea' },
  { id: 'd_alaba', name: 'David Alaba', position: 'Stoper / Sol Bek', nationality: 'Avusturya 🇦🇹', avatar: 'DA4', avatarBg: 'from-red-600 to-amber-400', teamsPlayed: ['bayern', 'real_madrid'], details: 'Bayern München, Real Madrid' },
  { id: 'k_coman', name: 'Kingsley Coman', position: 'Sol Kanat', nationality: 'Fransa 🇫🇷', avatar: 'KC11', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['psg', 'juventus', 'bayern'], details: 'PSG, Juventus, Bayern München' },
  { id: 'l_sane', name: 'Leroy Sané', position: 'Sağ Kanat', nationality: 'Almanya 🇩🇪', avatar: 'LS10', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['man_city', 'bayern'], details: 'Manchester City, Bayern München' },
  { id: 'm_depay', name: 'Memphis Depay', position: 'Forvet', nationality: 'Hollanda 🇳🇱', avatar: 'MD9', avatarBg: 'from-orange-500 to-red-700', teamsPlayed: ['psv', 'man_utd', 'barcelona', 'atletico'], details: 'PSV, Man Utd, FC Barcelona, Atletico Madrid' },
  { id: 'd_dzeko', name: 'Edin Džeko', position: 'Santrafor', nationality: 'Bosna Hersek 🇧🇦', avatar: 'ED9', avatarBg: 'from-blue-700 to-yellow-400', teamsPlayed: ['man_city', 'roma', 'inter', 'fenerbahce'], details: 'Manchester City, AS Roma, Inter, Fenerbahçe' },
  { id: 'd_tadic', name: 'Dušan Tadić', position: 'Sol Kanat', nationality: 'Sırbistan 🇸🇷', avatar: 'DT10', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['ajax', 'fenerbahce'], details: 'Southampton, Ajax, Fenerbahçe' },
  { id: 'fred', name: 'Fred', position: 'Orta Saha', nationality: 'Brezilya 🇧🇷', avatar: 'F35', avatarBg: 'from-red-600 to-yellow-400', teamsPlayed: ['man_utd', 'fenerbahce'], details: 'Manchester United, Fenerbahçe' },
  { id: 'w_zaha', name: 'Wilfred Zaha', position: 'Sol Kanat', nationality: 'Fildişi Sahili 🇨🇮', avatar: 'WZ14', avatarBg: 'from-red-600 to-yellow-500', teamsPlayed: ['man_utd', 'galatasaray'], details: 'Manchester United, Galatasaray' },
  { id: 'g_fernandes', name: 'Gedson Fernandes', position: 'Orta Saha', nationality: 'Portekiz 🇵🇹', avatar: 'GF83', avatarBg: 'from-red-600 to-black', teamsPlayed: ['benfica', 'tottenham', 'galatasaray', 'besiktas'], details: 'Benfica, Tottenham, Galatasaray, Beşiktaş' },
  { id: 'm_batshuayi', name: 'Michy Batshuayi', position: 'Santrafor', nationality: 'Belçika 🇧🇪', avatar: 'MB23', avatarBg: 'from-blue-600 to-amber-500', teamsPlayed: ['marseille', 'chelsea', 'dortmund', 'valencia', 'besiktas', 'fenerbahce', 'galatasaray'], details: 'Marseille, Chelsea, Dortmund, Valencia, Beşiktaş, Fenerbahçe, Galatasaray' },
  { id: 'c_immobile', name: 'Ciro Immobile', position: 'Santrafor', nationality: 'İtalya 🇮🇹', avatar: 'CI17', avatarBg: 'from-sky-400 to-black', teamsPlayed: ['juventus', 'dortmund', 'sevilla', 'lazio', 'besiktas'], details: 'Juventus, Dortmund, Sevilla, Lazio, Beşiktaş' },
  { id: 'c_casemiro', name: 'Casemiro', position: 'Ön Libero', nationality: 'Brezilya 🇧🇷', avatar: 'CASE', avatarBg: 'from-amber-400 to-red-600', teamsPlayed: ['porto', 'real_madrid', 'man_utd'], details: 'FC Porto, Real Madrid, Manchester United' },
  { id: 'm_kovacic', name: 'Mateo Kovačić', position: 'Orta Saha', nationality: 'Hırvatistan 🇭🇷', avatar: 'MK8', avatarBg: 'from-blue-600 to-sky-400', teamsPlayed: ['inter', 'real_madrid', 'chelsea', 'man_city'], details: 'Inter Milan, Real Madrid, Chelsea, Manchester City' },
  { id: 'n_kante', name: 'N\'Golo Kanté', position: 'Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'NG7', avatarBg: 'from-blue-700 to-yellow-400', teamsPlayed: ['chelsea'], details: 'Chelsea efsanesi' },
  { id: 'p_pogba', name: 'Paul Pogba', position: 'Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'PP6', avatarBg: 'from-red-600 to-black', teamsPlayed: ['man_utd', 'juventus'], details: 'Manchester United, Juventus' },
  { id: 'c_eriksen', name: 'Christian Eriksen', position: 'Orta Saha', nationality: 'Danimarka 🇩🇰', avatar: 'CE14', avatarBg: 'from-red-600 to-blue-900', teamsPlayed: ['ajax', 'tottenham', 'inter', 'man_utd'], details: 'Ajax, Tottenham, Inter Milan, Manchester United' },
  { id: 'w_rooney', name: 'Wayne Rooney', position: 'Santrafor', nationality: 'İngiltere 🇬🇧', avatar: 'WR10', avatarBg: 'from-red-600 to-slate-900', teamsPlayed: ['man_utd'], details: 'Manchester United efsanesi' },
  { id: 'f_lampard', name: 'Frank Lampard', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'FL8', avatarBg: 'from-blue-700 to-sky-400', teamsPlayed: ['chelsea', 'man_city'], details: 'Chelsea efsanesi, Manchester City' },
  { id: 's_gerrard', name: 'Steven Gerrard', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'SG8', avatarBg: 'from-red-600 to-amber-400', teamsPlayed: ['liverpool'], details: 'Liverpool efsanesi' },
  { id: 'f_totti', name: 'Francesco Totti', position: 'Ofansif Orta Saha', nationality: 'İtalya 🇮🇹', avatar: 'FT10', avatarBg: 'from-red-800 to-amber-500', teamsPlayed: ['roma'], details: 'AS Roma efsanesi' },
  { id: 'p_maldini', name: 'Paolo Maldini', position: 'Stoper', nationality: 'İtalya 🇮🇹', avatar: 'PM3', avatarBg: 'from-red-600 to-black', teamsPlayed: ['ac_milan'], details: 'AC Milan efsanesi' },
  { id: 'f_cannavaro', name: 'Fabio Cannavaro', position: 'Stoper', nationality: 'İtalya 🇮🇹', avatar: 'FC5', avatarBg: 'from-blue-600 to-amber-400', teamsPlayed: ['napoli', 'inter', 'juventus', 'real_madrid'], details: 'Napoli, Inter, Juventus, Real Madrid' },
  { id: 'j_zanetti', name: 'Javier Zanetti', position: 'Sağ Bek', nationality: 'Arjantin 🇦🇷', avatar: 'JZ4', avatarBg: 'from-blue-700 to-black', teamsPlayed: ['inter'], details: 'Inter Milan efsanesi' },
  { id: 'h_crespo', name: 'Hernán Crespo', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'HC9', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['lazio', 'inter', 'chelsea', 'ac_milan'], details: 'Lazio, Inter, Chelsea, AC Milan' },
  { id: 's_aguero', name: 'Sergio Agüero', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'SA10', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['atletico', 'man_city', 'barcelona'], details: 'Atletico Madrid, Manchester City, FC Barcelona' },
  { id: 'c_tevez', name: 'Carlos Tévez', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'CT32', avatarBg: 'from-blue-600 to-black', teamsPlayed: ['man_utd', 'man_city', 'juventus', 'boca_juniors'], details: 'Man Utd, Man City, Juventus' },
  { id: 'g_buffon', name: 'Gianluigi Buffon', position: 'Kaleci', nationality: 'İtalya 🇮🇹', avatar: 'Gigi', avatarBg: 'from-black to-blue-700', teamsPlayed: ['juventus', 'psg'], details: 'Juventus, PSG' },
  { id: 'k_navas', name: 'Keylor Navas', position: 'Kaleci', nationality: 'Kosta Rika 🇨🇷', avatar: 'KN1', avatarBg: 'from-white to-blue-700', teamsPlayed: ['real_madrid', 'psg'], details: 'Real Madrid, PSG' },
  { id: 'james_rodriguez', name: 'James Rodríguez', position: 'Ofansif Orta Saha', nationality: 'Kolombiya 🇨🇴', avatar: 'JR10', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['porto', 'monaco', 'real_madrid', 'bayern'], details: 'Porto, Monaco, Real Madrid, Bayern München' },
  { id: 'burak_yilmaz', name: 'Burak Yılmaz', position: 'Santrafor', nationality: 'Türkiye 🇹🇷', avatar: 'BY17', avatarBg: 'from-red-600 to-amber-500', teamsPlayed: ['besiktas', 'fenerbahce', 'trabzonspor', 'galatasaray', 'lille'], details: 'Beşiktaş, Fenerbahçe, Trabzonspor, Galatasaray, Lille (Fransa Şampiyonu)' },
  { id: 'sergen_yalcin', name: 'Sergen Yalçın', position: '10 Numara', nationality: 'Türkiye 🇹🇷', avatar: 'SY10', avatarBg: 'from-black to-red-600', teamsPlayed: ['besiktas', 'fenerbahce', 'trabzonspor', 'galatasaray'], details: 'Beşiktaş, Fenerbahçe, Trabzonspor, Galatasaray efsanesi' },
  { id: 'nathan_ake', name: 'Nathan Aké', position: 'Stoper / Sol Bek', nationality: 'Hollanda 🇳🇱', avatar: 'NA6', avatarBg: 'from-sky-400 to-blue-800', teamsPlayed: ['chelsea', 'bournemouth', 'man_city'], details: 'Chelsea, Bournemouth, Manchester City' },
  { id: 'arda_turan', name: 'Arda Turan', position: 'Sol Kanat', nationality: 'Türkiye 🇹🇷', avatar: 'AT10', avatarBg: 'from-red-600 to-blue-700', teamsPlayed: ['galatasaray', 'atletico', 'barcelona'], details: 'Galatasaray, Atletico Madrid, FC Barcelona' },
  { id: 'emre_belozoglu', name: 'Emre Belözoğlu', position: 'Orta Saha', nationality: 'Türkiye 🇹🇷', avatar: 'EB5', avatarBg: 'from-blue-600 to-yellow-500', teamsPlayed: ['galatasaray', 'inter', 'newcastle', 'fenerbahce', 'atletico'], details: 'Galatasaray, Inter Milan, Newcastle, Fenerbahçe, Atletico Madrid' },
  { id: 'mehmet_topal', name: 'Mehmet Topal', position: 'Ön Libero', nationality: 'Türkiye 🇹🇷', avatar: 'MT5', avatarBg: 'from-red-600 to-blue-900', teamsPlayed: ['galatasaray', 'valencia', 'fenerbahce', 'besiktas'], details: 'Galatasaray, Valencia, Fenerbahçe, Beşiktaş' },
  { id: 'caner_erkin', name: 'Caner Erkin', position: 'Sol Bek', nationality: 'Türkiye 🇹🇷', avatar: 'CE88', avatarBg: 'from-yellow-400 to-black', teamsPlayed: ['galatasaray', 'fenerbahce', 'inter', 'besiktas'], details: 'Galatasaray, Fenerbahçe, Inter Milan, Beşiktaş' },
  { id: 'gokhan_gonul', name: 'Gökhan Gönül', position: 'Sağ Bek', nationality: 'Türkiye 🇹🇷', avatar: 'GG77', avatarBg: 'from-blue-600 to-yellow-400', teamsPlayed: ['fenerbahce', 'besiktas'], details: 'Fenerbahçe, Beşiktaş' },
  { id: 'hakan_calhanoglu', name: 'Hakan Çalhanoğlu', position: 'Orta Saha', nationality: 'Türkiye 🇹🇷', avatar: 'HÇ20', avatarBg: 'from-blue-600 to-black', teamsPlayed: ['leverkusen', 'ac_milan', 'inter'], details: 'Bayer Leverkusen, AC Milan, Inter Milan' },
  { id: 'cenk_tosun', name: 'Cenk Tosun', position: 'Santrafor', nationality: 'Türkiye 🇹🇷', avatar: 'CT23', avatarBg: 'from-black to-red-600', teamsPlayed: ['besiktas', 'everton', 'fenerbahce'], details: 'Beşiktaş, Everton, Fenerbahçe' },
  { id: 'rustu_recber', name: 'Rüştü Reçber', position: 'Kaleci', nationality: 'Türkiye 🇹🇷', avatar: 'RR1', avatarBg: 'from-yellow-400 to-blue-900', teamsPlayed: ['fenerbahce', 'barcelona', 'besiktas'], details: 'Fenerbahçe, FC Barcelona, Beşiktaş' },
  { id: 'selcuk_inan', name: 'Selçuk İnan', position: 'Orta Saha', nationality: 'Türkiye 🇹🇷', avatar: 'Sİ8', avatarBg: 'from-red-600 to-amber-500', teamsPlayed: ['trabzonspor', 'galatasaray'], details: 'Trabzonspor, Galatasaray efsanesi' },
  { id: 'kazim_kazim', name: 'Colin Kazım-Richards', position: 'Sağ Kanat', nationality: 'Türkiye 🇹🇷', avatar: 'KK99', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['fenerbahce', 'galatasaray', 'feyenoord'], details: 'Fenerbahçe, Galatasaray, Feyenoord' },
    { id: 'trent_alexander_arnold', name: 'Trent Alexander‑Arnold', position: 'Sağ Bek', nationality: 'İngiltere 🇬🇧', avatar: 'TAA', avatarBg: 'from-green-500 to-blue-600', teamsPlayed: ['liverpool'], details: 'Liverpool' },
    { id: 'alisson', name: 'Alisson Becker', position: 'Kaleci', nationality: 'Brezilya 🇧🇷', avatar: 'AB1', avatarBg: 'from-purple-400 to-gold-600', teamsPlayed: ['liverpool'], details: 'Liverpool' },
    { id: 'jan_oblak', name: 'Jan Oblak', position: 'Kaleci', nationality: 'Slovenya 🇸🇮', avatar: 'JO1', avatarBg: 'from-grey-500 to-blue-800', teamsPlayed: ['atletico'], details: 'Atletico Madrid' },
    { id: 'david_de_gea', name: 'David de Gea', position: 'Kaleci', nationality: 'İspanya 🇪🇸', avatar: 'DG1', avatarBg: 'from-blue-700 to-white', teamsPlayed: ['man_utd'], details: 'Manchester United' },
    { id: 'virgil_van_dijk', name: 'Virgil van Dijk', position: 'Stoper', nationality: 'Hollanda 🇳🇱', avatar: 'VD1', avatarBg: 'from-yellow-400 to-black', teamsPlayed: ['liverpool'], details: 'Liverpool' },
    { id: 'hugo_lloris', name: 'Hugo Lloris', position: 'Kaleci', nationality: 'Fransa 🇫🇷', avatar: 'HL1', avatarBg: 'from-blue-600 to-white', teamsPlayed: ['tottenham'], details: 'Tottenham Hotspur' },
    { id: 'pedri', name: 'Pedri', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'PDR', avatarBg: 'from-sky-400 to-green-600', teamsPlayed: ['barcelona'], details: 'FC Barcelona' },
    { id: 'joao_felix', name: 'João Félix', position: 'Forvet', nationality: 'Portekiz 🇵🇹', avatar: 'JF1', avatarBg: 'from-red-600 to-yellow-500', teamsPlayed: ['atletico'], details: 'Atlético Madrid' },
    { id: 'andre_onana', name: 'André Onana', position: 'Kaleci', nationality: 'Kamerun 🇨🇲', avatar: 'AO1', avatarBg: 'from-green-500 to-black', teamsPlayed: ['inter_miami'], details: 'Inter Miami CF' },
    { id: 'marcelo', name: 'Marcelo', position: 'Sol Bek', nationality: 'Brezilya 🇧🇷', avatar: 'MC1', avatarBg: 'from-green-500 to-black', teamsPlayed: ['real_madrid', 'olympique_marseille'], details: 'Real Madrid, Olympique Marseille' },
    { id: 'sergio_ramos', name: 'Sergio Ramos', position: 'Stoper', nationality: 'İspanya 🇪🇸', avatar: 'SR9', avatarBg: 'from-grey-500 to-red-600', teamsPlayed: ['real_madrid', 'paris_saint_germain'], details: 'Real Madrid, PSG' },
    { id: 'lukasz_piszczek', name: 'Łukasz Piszczek', position: 'Sağ Bek', nationality: 'Polonya 🇵🇱', avatar: 'LP7', avatarBg: 'from-blue-500 to-grey-800', teamsPlayed: ['borussia_dortmund', 'gornik_zabrze'], details: 'Borussia Dortmund, Górnik Zabrze' },
    { id: 'jordan_henderson', name: 'Jordan Henderson', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'JH10', avatarBg: 'from-red-600 to-white', teamsPlayed: ['liverpool'], details: 'Liverpool' },
    { id: 'paul_pogba', name: 'Paul Pogba', position: 'Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'PP6', avatarBg: 'from-red-600 to-black', teamsPlayed: ['man_utd', 'juventus'], details: 'Manchester United, Juventus' },
    { id: 'zlatan_ibrahimovic', name: 'Zlatan Ibrahimović', position: 'Santrafor', nationality: 'İsveç 🇸🇪', avatar: 'ZI', avatarBg: 'from-yellow-400 to-blue-600', teamsPlayed: ['ajax', 'juventus', 'inter', 'ac_milan', 'barcelona', 'psg', 'man_utd'], details: 'Ajax, Juventus, Inter, AC Milan, Barcelona, PSG, Man Utd' },
    { id: 'kylian_mbappe', name: 'Kylian Mbappé', position: 'Santrafor / Kanat', nationality: 'Fransa 🇫🇷', avatar: 'KM9', avatarBg: 'from-blue-600 to-amber-500', teamsPlayed: ['monaco', 'psg', 'real_madrid'], details: 'AS Monaco, PSG, Real Madrid' },
    { id: 'marco_reus', name: 'Marco Reus', position: 'Orta Saha', nationality: 'Almanya 🇩🇪', avatar: 'MR9', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['borussia_dortmund'], details: 'Borussia Dortmund' },
    { id: 'fabian_di_maria', name: 'Fabian Di María', position: 'Sağ Kanat', nationality: 'Arjantin 🇦🇷', avatar: 'FD9', avatarBg: 'from-sky-400 to-blue-700', teamsPlayed: ['monaco', 'real_madrid', 'psg'], details: 'AS Monaco, Real Madrid, PSG' },
    { id: 'andre_giroud', name: 'André Giroud', position: 'Stoper', nationality: 'Fransa 🇫🇷', avatar: 'AG9', avatarBg: 'from-grey-600 to-black', teamsPlayed: ['paris_saint_germain'], details: 'Paris Saint-Germain' },
    { id: 'lionel_messi2', name: 'Lionel Messi', position: 'Forvet', nationality: 'Arjantin 🇦🇷', avatar: 'LM10', avatarBg: 'from-sky-400 to-purple-600', teamsPlayed: ['barcelona', 'psg', 'inter_miami'], details: 'FC Barcelona, PSG, Inter Miami' },
    { id: 'neymar_jr2', name: 'Neymar Jr', position: 'Sol Kanat', nationality: 'Brezilya 🇧🇷', avatar: 'NJ10', avatarBg: 'from-yellow-400 to-green-600', teamsPlayed: ['barcelona', 'psg', 'al_hilal'], details: 'FC Barcelona, PSG, Al Hilal' },
    { id: 'luis_henrique', name: 'Luis Henrique', position: 'Kaleci', nationality: 'Portekiz 🇵🇹', avatar: 'LH1', avatarBg: 'from-blue-500 to-white', teamsPlayed: ['porto'], details: 'FC Porto' },
    { id: 'ronaldo_gomes', name: 'Ronaldo Gomes', position: 'Santrafor', nationality: 'Brezilya 🇧🇷', avatar: 'RG1', avatarBg: 'from-green-500 to-black', teamsPlayed: ['athletico_paranaense'], details: '' },
    { id: 'houssem_aouar', name: 'Houssem Aouar', position: 'Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'HA1', avatarBg: 'from-red-600 to-purple-600', teamsPlayed: ['lyon'], details: 'Olympique Lyonnais' },
    { id: 'martin_odegaard', name: 'Martin Ødegaard', position: 'Orta Saha', nationality: 'Norveç 🇳🇴', avatar: 'MO9', avatarBg: 'from-red-600 to-grey-500', teamsPlayed: ['arsenal'], details: 'Arsenal' },
    { id: 'kieran_trippier', name: 'Kieran Trippier', position: 'Sağ Bek', nationality: 'İngiltere 🇬🇧', avatar: 'KT1', avatarBg: 'from-blue-600 to-white', teamsPlayed: ['newcastle', 'tottenham'], details: 'Newcastle United, Tottenham Hotspur' },
    { id: 'sadio_mane2', name: 'Sadio Mané', position: 'Sol Kanat', nationality: 'Senegal 🇸🇳', avatar: 'SM10', avatarBg: 'from-green-600 to-yellow-400', teamsPlayed: ['liverpool', 'bayern', 'al_nassr'], details: 'Liverpool, Bayern München, Al Nassr' },
    { id: 'timo_werner', name: 'Timo Werner', position: 'Santrafor', nationality: 'Almanya 🇩🇪', avatar: 'TW9', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['leipzig', 'chelsea'], details: 'RB Leipzig, Chelsea' },
    { id: 'romelu_lukaku2', name: 'Romelu Lukaku', position: 'Santrafor', nationality: 'Belçika 🇧🇪', avatar: 'RL9', avatarBg: 'from-blue-600 to-yellow-500', teamsPlayed: ['chelsea', 'man_utd', 'inter', 'roma', 'napoli'], details: 'Chelsea, Man Utd, Inter, Roma, Napoli' },
    { id: 'mason_mount', name: 'Mason Mount', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'MM1', avatarBg: 'from-sky-400 to-green-600', teamsPlayed: ['chelsea'], details: 'Chelsea' },
    { id: 'erling_haland', name: 'Erling Haaland', position: 'Forvet', nationality: 'Norveç 🇳🇴', avatar: 'EH', avatarBg: 'from-yellow-400 to-cyan-500', teamsPlayed: ['dortmund', 'man_city'], details: 'RB Salzburg, Borussia Dortmund, Manchester City' },
    { id: 'pedri', name: 'Pedri', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'P1', avatarBg: 'from-sky-400 to-green-600', teamsPlayed: ['barcelona'], details: 'FC Barcelona' },
    { id: 'jude_bellingham', name: 'Jude Bellingham', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'JB', avatarBg: 'from-amber-400 to-slate-900', teamsPlayed: ['borussia_dortmund', 'real_madrid'], details: 'Borussia Dortmund, Real Madrid' },
    { id: 'kylian_mbappe', name: 'Kylian Mbappé', position: 'Forvet', nationality: 'Fransa 🇫🇷', avatar: 'KM', avatarBg: 'from-blue-600 to-amber-500', teamsPlayed: ['psg', 'real_madrid'], details: 'Paris Saint-Germain, Real Madrid' },
    { id: 'vinicius_junior', name: 'Vinícius Júnior', position: 'Sol Kanat', nationality: 'Brezilya 🇧🇷', avatar: 'VJ', avatarBg: 'from-amber-400 to-purple-600', teamsPlayed: ['real_madrid'], details: 'Real Madrid' },
    { id: 'r_build', name: 'Robert Lewandowski', position: 'Forvet', nationality: 'Polonya 🇵🇱', avatar: 'RL', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['bayern', 'barcelona'], details: 'Bayern München, FC Barcelona' },
    { id: 'philip_lahm', name: 'Philipp Lahm', position: 'Sağ Bek', nationality: 'Almanya 🇩🇪', avatar: 'PL', avatarBg: 'from-red-600 to-white', teamsPlayed: ['bayern'], details: 'Bayern München' },
    { id: 'carlos_pele', name: 'Pelé', position: 'Forvet', nationality: 'Brezilya 🇧🇷', avatar: 'PE', avatarBg: 'from-yellow-400 to-green-600', teamsPlayed: ['santos', 'new_york_cosmos'], details: 'Santos, New York Cosmos' },
    { id: 'david_beckham', name: 'David Beckham', position: 'Sağ Kanat', nationality: 'İngiltere 🇬🇧', avatar: 'DB', avatarBg: 'from-blue-600 to-amber-500', teamsPlayed: ['man_utd', 'real_madrid', 'la_galaxy'], details: 'Manchester United, Real Madrid, LA Galaxy' },
    { id: 'mohamed_salah', name: 'Mohamed Salah', position: 'Sağ Kanat', nationality: 'Mısır 🇪🇬', avatar: 'MS', avatarBg: 'from-red-600 to-gold-500', teamsPlayed: ['roma', 'liverpool'], details: 'AS Roma, Liverpool FC' },
    { id: 'sergio_ramos', name: 'Sergio Ramos', position: 'Stoper', nationality: 'İspanya 🇪🇸', avatar: 'SR', avatarBg: 'from-grey-600 to-black', teamsPlayed: ['real_madrid', 'psg'], details: 'Real Madrid, Paris Saint-Germain' },
    { id: 'luiz_suarez', name: 'Luis Suárez', position: 'Santrafor', nationality: 'Uruguay 🇺🇾', avatar: 'LS', avatarBg: 'from-sky-500 to-blue-800', teamsPlayed: ['nantes', 'liverpool', 'atletico_madrid'], details: 'Nantes, Liverpool, Atlético Madrid' },
    { id: 'karim_zidane', name: 'Zinedine Zidane', position: 'Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'ZD', avatarBg: 'from-blue-600 to-purple-600', teamsPlayed: ['bordeaux', 'juventus', 'real_madrid'], details: 'Bordeaux, Juventus, Real Madrid' },
  // Added historic legends
  { id: 'g_guti', name: 'José María Gutiérrez (Guti)', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'GG', avatarBg: 'from-purple-700 to-red-600', teamsPlayed: ['real_madrid', 'beşiktaş'], details: 'Real Madrid legend, Beşiktaş' },
  { id: 'r_nazario', name: 'Ronaldo Nazário', position: 'Forvet', nationality: 'Brezilya 🇧🇷', avatar: 'RN', avatarBg: 'from-yellow-500 to-red-600', teamsPlayed: ['real_madrid', 'inter_miami', 'milan', 'barcelona'], details: 'Phenomenal striker, multiple clubs' },
  { id: 'e_eusebio', name: 'Eusébio', position: 'Santrafor', nationality: 'Portekiz 🇵🇹', avatar: 'EE', avatarBg: 'from-red-600 to-black', teamsPlayed: ['benfica'], details: 'Portuguese legend' },
  { id: 'a_iniesta', name: 'Andrés Iniesta', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'AI', avatarBg: 'from-blue-600 to-pink-500', teamsPlayed: ['barcelona', 'vissel_kob'], details: 'Barcelona maestro' },
  { id: 'x_xavi', name: 'Xavi Hernández', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'XH', avatarBg: 'from-green-600 to-blue-800', teamsPlayed: ['barcelona', 'al_sadd'], details: 'Barcelona legend, Al Sadd' },
  // Newer generation additions
  { id: 'o_dembele', name: 'Ousmane Dembélé', position: 'Sol Kanat', nationality: 'Fransa 🇫🇷', avatar: 'OD11', avatarBg: 'from-purple-500 to-blue-600', teamsPlayed: ['barcelona', 'psg'], details: 'FC Barcelona, PSG' },
  { id: 'm_asensio', name: 'Marco Asensio', position: 'Forvet / Ofansif Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'MA11', avatarBg: 'from-sky-400 to-indigo-600', teamsPlayed: ['real_madrid'], details: 'Real Madrid' },
  { id: 'joao_neves', name: 'João Neves', position: 'Orta Saha', nationality: 'Portekiz 🇵🇹', avatar: 'JN8', avatarBg: 'from-green-400 to-sky-500', teamsPlayed: ['benfica'], details: 'Benfica genç yeteneği' },
  { id: 'j_kounde', name: 'Jules Koundé', position: 'Stoper / Sağ Bek', nationality: 'Fransa 🇫🇷', avatar: 'JK22', avatarBg: 'from-blue-600 to-black', teamsPlayed: ['sevilla', 'barcelona'], details: 'Sevilla, FC Barcelona' },
  { id: 'lamine_yamal', name: 'Lamine Yamal', position: 'Sağ Kanat', nationality: 'İspanya 🇪🇸', avatar: 'LY10', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['barcelona'], details: 'FC Barcelona genç yeteneği' },
  { id: 'ferran_torres', name: 'Ferran Torres', position: 'Forvet', nationality: 'İspanya 🇪🇸', avatar: 'FT11', avatarBg: 'from-red-500 to-sky-500', teamsPlayed: ['valencia', 'man_city', 'barcelona'], details: 'Valencia, Manchester City, FC Barcelona' },

  // Bulk additions: high-profile and rising players across leagues
  { id: 'phil_foden', name: 'Phil Foden', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'PF47', avatarBg: 'from-sky-400 to-blue-600', teamsPlayed: ['man_city'], details: 'Manchester City' },
  { id: 'rodri', name: 'Rodri', position: 'Ön Libero', nationality: 'İspanya 🇪🇸', avatar: 'RD16', avatarBg: 'from-amber-400 to-slate-700', teamsPlayed: ['man_city'], details: 'Manchester City' },
  { id: 'bernardo_silva', name: 'Bernardo Silva', position: 'Orta Saha', nationality: 'Portekiz 🇵🇹', avatar: 'BS20', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['man_city'], details: 'Manchester City' },
  { id: 'julian_alvarez', name: 'Julián Álvarez', position: 'Forvet', nationality: 'Arjantin 🇦🇷', avatar: 'JA9', avatarBg: 'from-red-600 to-white', teamsPlayed: ['man_city'], details: 'Manchester City' },
  { id: 'koke', name: 'Koke', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'K8', avatarBg: 'from-red-600 to-black', teamsPlayed: ['atletico'], details: 'Atlético Madrid' },
  { id: 'thomas_lemar', name: 'Thomas Lemar', position: 'Kanat', nationality: 'Fransa 🇫🇷', avatar: 'TL11', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['atletico'], details: 'Atlético Madrid' },
  { id: 'ricardo_rodriguez', name: 'Ricardo Rodríguez', position: 'Sol Bek', nationality: 'İsviçre 🇨🇭', avatar: 'RR13', avatarBg: 'from-green-500 to-slate-700', teamsPlayed: ['psg', 'ac_milan'], details: 'PSG, AC Milan' },
  { id: 'raphael_varane', name: 'Raphaël Varane', position: 'Stoper', nationality: 'Fransa 🇫🇷', avatar: 'RV19', avatarBg: 'from-white to-red-600', teamsPlayed: ['real_madrid', 'man_utd'], details: 'Real Madrid, Manchester United' },
  { id: 'andre_onana', name: 'André Onana', position: 'Kaleci', nationality: 'Kamerun 🇨🇲', avatar: 'AO1', avatarBg: 'from-green-500 to-black', teamsPlayed: ['man_utd', 'inter_miami'], details: 'Manchester United, Inter Miami' },
  { id: 'ivan_perisic', name: 'Ivan Perišić', position: 'Kanat', nationality: 'Hırvatistan 🇭🇷', avatar: 'IP44', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['inter'], details: 'Inter Milan' },
  { id: 'raphael_guerrero', name: 'Raphinha', position: 'Sağ Kanat', nationality: 'Brezilya 🇧🇷', avatar: 'RAPH', avatarBg: 'from-yellow-400 to-blue-700', teamsPlayed: ['barcelona'], details: 'FC Barcelona' },
  { id: 'oleksandr_zinchenko', name: 'Oleksandr Zinchenko', position: 'Sol Bek', nationality: 'Ukrayna 🇺🇦', avatar: 'OZ11', avatarBg: 'from-yellow-400 to-sky-500', teamsPlayed: ['man_city', 'arsenal'], details: 'Manchester City, Arsenal' },
  { id: 'ezequiel_barco', name: 'Ezequiel Barco', position: 'Kanat', nationality: 'Arjantin 🇦🇷', avatar: 'EB10', avatarBg: 'from-red-600 to-white', teamsPlayed: ['river_plate', 'atluc'], details: 'River Plate' },
  { id: 'pedri_gonzalez', name: 'Pedri', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'PDR', avatarBg: 'from-sky-400 to-green-600', teamsPlayed: ['barcelona'], details: 'FC Barcelona' },
  { id: 'anssumane_fati', name: 'Ansu Fati', position: 'Forvet', nationality: 'İspanya 🇪🇸', avatar: 'AF10', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['barcelona'], details: 'FC Barcelona' },
  { id: 'mason_mount', name: 'Mason Mount', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'MM19', avatarBg: 'from-sky-400 to-green-600', teamsPlayed: ['man_utd', 'chelsea'], details: 'Chelsea, Manchester United' },
  { id: 'reece_james', name: 'Reece James', position: 'Sağ Bek', nationality: 'İngiltere 🇬🇧', avatar: 'RJ24', avatarBg: 'from-blue-600 to-white', teamsPlayed: ['chelsea'], details: 'Chelsea FC' },
  { id: 'ben_white', name: 'Ben White', position: 'Stoper', nationality: 'İngiltere 🇬🇧', avatar: 'BW4', avatarBg: 'from-white to-sky-400', teamsPlayed: ['arsenal'], details: 'Arsenal' },
  { id: 'gianluigi_donnarumma', name: 'Gianluigi Donnarumma', position: 'Kaleci', nationality: 'İtalya 🇮🇹', avatar: 'GD99', avatarBg: 'from-black to-red-600', teamsPlayed: ['psg'], details: 'Paris Saint-Germain' },
  { id: 'jude_bellingham', name: 'Jude Bellingham', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'JB5', avatarBg: 'from-amber-400 to-slate-900', teamsPlayed: ['real_madrid'], details: 'Real Madrid' },
  { id: 'pedro_neto', name: 'Pedro Neto', position: 'Kanat', nationality: 'Portekiz 🇵🇹', avatar: 'PN7', avatarBg: 'from-red-600 to-sky-500', teamsPlayed: ['wolves'], details: 'Wolverhampton Wanderers' },
  { id: 'joao_cancelo', name: 'João Cancelo', position: 'Bek', nationality: 'Portekiz 🇵🇹', avatar: 'JC7', avatarBg: 'from-blue-500 to-teal-600', teamsPlayed: ['barcelona', 'man_city'], details: 'Benfica, Valencia, Man City, Barcelona' },
  { id: 'gabriel_jesus', name: 'Gabriel Jesus', position: 'Forvet', nationality: 'Brezilya 🇧🇷', avatar: 'GJ9', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['arsenal', 'man_city'], details: 'Manchester City, Arsenal' },
  { id: 'richarlison', name: 'Richarlison', position: 'Forvet', nationality: 'Brezilya 🇧🇷', avatar: 'RC9', avatarBg: 'from-green-500 to-yellow-400', teamsPlayed: ['tottenham', 'everton'], details: 'Tottenham, Everton' },
  { id: 'bruno_fernandes', name: 'Bruno Fernandes', position: 'Orta Saha', nationality: 'Portekiz 🇵🇹', avatar: 'BF18', avatarBg: 'from-amber-400 to-red-600', teamsPlayed: ['man_utd'], details: 'Manchester United' },
  { id: 'erling_haaland', name: 'Erling Haaland', position: 'Santrafor', nationality: 'Norveç 🇳🇴', avatar: 'EH9', avatarBg: 'from-yellow-400 to-cyan-500', teamsPlayed: ['man_city'], details: 'Manchester City' },
  { id: 'kai_havertz', name: 'Kai Havertz', position: 'Forvet', nationality: 'Almanya 🇩🇪', avatar: 'KH29', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['arsenal', 'chelsea'], details: 'Chelsea, Arsenal' },
  { id: 'sergio_busquets', name: 'Sergio Busquets', position: 'Ön Libero', nationality: 'İspanya 🇪🇸', avatar: 'SB5', avatarBg: 'from-sky-400 to-slate-700', teamsPlayed: ['barcelona'], details: 'FC Barcelona' },
  { id: 'dominik_szoboszlai', name: 'Dominik Szoboszlai', position: 'Orta Saha', nationality: 'Macaristan 🇭🇺', avatar: 'DS10', avatarBg: 'from-red-600 to-gold-400', teamsPlayed: ['liverpool', 'salzburg'], details: 'RB Salzburg, Liverpool' },
  { id: 'konrad_laubahn', name: 'Konrad Laubahn', position: 'Sol Kanat', nationality: 'Almanya 🇩🇪', avatar: 'KL11', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['wolfsburg'], details: 'Wolfsburg' },
  { id: 'youssef_en_nesyri', name: 'Youssef En-Nesyri', position: 'Santrafor', nationality: 'Fas 🇲🇦', avatar: 'YN9', avatarBg: 'from-red-600 to-green-700', teamsPlayed: ['sevilla'], details: 'Sevilla FC' },
  { id: 'houssem_aurier', name: 'Serge Aurier', position: 'Sağ Bek', nationality: 'Fildişi Sahili 🇨🇮', avatar: 'SA24', avatarBg: 'from-sky-400 to-black', teamsPlayed: ['tottenham'], details: 'Tottenham Hotspur' },
  { id: 'matthijs_de_ligt', name: 'Matthijs de Ligt', position: 'Stoper', nationality: 'Hollanda 🇳🇱', avatar: 'MD4', avatarBg: 'from-white to-black', teamsPlayed: ['bayern', 'juventus'], details: 'Juventus, Bayern' },
  { id: 'jan_oblak', name: 'Jan Oblak', position: 'Kaleci', nationality: 'Slovenya 🇸🇮', avatar: 'JO1', avatarBg: 'from-grey-500 to-blue-800', teamsPlayed: ['atletico'], details: 'Atletico Madrid' },
  { id: 'rodrygo', name: 'Rodrygo', position: 'Kanat', nationality: 'Brezilya 🇧🇷', avatar: 'RDG11', avatarBg: 'from-amber-400 to-purple-600', teamsPlayed: ['real_madrid'], details: 'Real Madrid' }
];

// Additional bulk additions (continued)
FOOTBALLERS.push(
  { id: 'bukayo_saka', name: 'Bukayo Saka', position: 'Kanat', nationality: 'İngiltere 🇬🇧', avatar: 'BS14', avatarBg: 'from-green-400 to-blue-600', teamsPlayed: ['arsenal'], details: 'Arsenal' },
  { id: 'declan_rice', name: 'Declan Rice', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'DR41', avatarBg: 'from-amber-400 to-slate-800', teamsPlayed: ['west_ham','arsenal'], details: 'West Ham, Arsenal' },
  { id: 'christopher_nkunku', name: 'Christopher Nkunku', position: 'Forvet', nationality: 'Fransa 🇫🇷', avatar: 'CN18', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['rb_leipzig','chelsea'], details: 'RB Leipzig, Chelsea' },
  { id: 'lautaro_martinez', name: 'Lautaro Martínez', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'LM10', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['inter'], details: 'Inter' },
  { id: 'paulo_dybala', name: 'Paulo Dybala', position: 'Forvet', nationality: 'Arjantin 🇦🇷', avatar: 'PD10', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['juventus','roma','inter_miami'], details: 'Juventus, Roma, Inter Miami' },
  { id: 'dusan_vlahovic', name: 'Dušan Vlahović', position: 'Santrafor', nationality: 'Sırbistan 🇷🇸', avatar: 'DV9', avatarBg: 'from-red-600 to-black', teamsPlayed: ['fiorentina','juventus'], details: 'Fiorentina, Juventus' },
  { id: 'rasmus_hojlund', name: 'Rasmus Højlund', position: 'Santrafor', nationality: 'Danimarka 🇩🇰', avatar: 'RH9', avatarBg: 'from-sky-400 to-amber-500', teamsPlayed: ['atalanta','man_utd'], details: 'Atalanta, Manchester United' },
  { id: 'harvey_elliott', name: 'Harvey Elliott', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'HE7', avatarBg: 'from-sky-400 to-purple-600', teamsPlayed: ['fulham','liverpool'], details: 'Fulham, Liverpool' },
  { id: 'james_maddison', name: 'James Maddison', position: 'Ofansif Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'JM10', avatarBg: 'from-amber-400 to-slate-900', teamsPlayed: ['leicester','tottenham'], details: 'Leicester City, Tottenham Hotspur' },
  { id: 'joao_palhinha', name: 'João Palhinha', position: 'Ön Libero', nationality: 'Portekiz 🇵🇹', avatar: 'JP14', avatarBg: 'from-green-500 to-black', teamsPlayed: ['sporting','fulham'], details: 'Sporting CP, Fulham' },
  { id: 'eduardo_camavinga', name: 'Eduardo Camavinga', position: 'Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'EC7', avatarBg: 'from-sky-400 to-green-600', teamsPlayed: ['rennes','real_madrid'], details: 'Stade Rennais, Real Madrid' },
  { id: 'alejandro_garnacho', name: 'Alejandro Garnacho', position: 'Kanat', nationality: 'Arjantin 🇦🇷', avatar: 'AG21', avatarBg: 'from-red-600 to-amber-500', teamsPlayed: ['man_utd'], details: 'Manchester United' },
  { id: 'ivan_toney', name: 'Ivan Toney', position: 'Santrafor', nationality: 'İngiltere 🇬🇧', avatar: 'IT17', avatarBg: 'from-amber-400 to-red-600', teamsPlayed: ['brentford'], details: 'Brentford' },
  { id: 'trevoh_chalobah', name: 'Trevoh Chalobah', position: 'Stoper', nationality: 'İngiltere 🇬🇧', avatar: 'TC6', avatarBg: 'from-blue-600 to-amber-400', teamsPlayed: ['chelsea'], details: 'Chelsea' },
  { id: 'callum_wilson', name: 'Callum Wilson', position: 'Santrafor', nationality: 'İngiltere 🇬🇧', avatar: 'CW9', avatarBg: 'from-red-600 to-white', teamsPlayed: ['newcastle'], details: 'Newcastle United' },
  { id: 'jonathan_david', name: 'Jonathan David', position: 'Forvet', nationality: 'Kanada 🇨🇦', avatar: 'JD21', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['lille','benfica'], details: 'Lille, Benfica' },
  { id: 'michael_olise', name: 'Michael Olise', position: 'Kanat', nationality: 'Fransa 🇫🇷', avatar: 'MO22', avatarBg: 'from-sky-400 to-purple-600', teamsPlayed: ['reading','crystal_palace'], details: 'Crystal Palace' },
  { id: 'alexis_mac_allister', name: 'Alexis Mac Allister', position: 'Orta Saha', nationality: 'Arjantin 🇦🇷', avatar: 'AMA7', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['brighton','liverpool'], details: 'Brighton, Liverpool' },
  { id: 'riccardo_orsolini', name: 'Riccardo Orsolini', position: 'Kanat', nationality: 'İtalya 🇮🇹', avatar: 'RO7', avatarBg: 'from-red-600 to-white', teamsPlayed: ['bologna','juventus'], details: 'Bologna, Juventus' },
  { id: 'pedro_porro', name: 'Pedro Porro', position: 'Sağ Bek', nationality: 'İspanya 🇪🇸', avatar: 'PP2', avatarBg: 'from-blue-600 to-white', teamsPlayed: ['sporting','tottenham'], details: 'Sporting CP, Tottenham Hotspur' }
);

function normalizePlayerName(name) {
  return name.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function dedupePlayers(players) {
  const seenIds = new Set();
  const seenNames = new Set();
  const uniquePlayers = [];

  for (const player of players) {
    if (seenIds.has(player.id)) continue;
    const normalizedName = normalizePlayerName(player.name);
    if (seenNames.has(normalizedName)) continue;
    seenIds.add(player.id);
    seenNames.add(normalizedName);
    uniquePlayers.push(player);
  }

  return uniquePlayers;
}

FOOTBALLERS = dedupePlayers(FOOTBALLERS);

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

  let chosen = candidates.find(m => !recent.some(r => areSameMatchup(r, m)));
  if (!chosen) {
    chosen = candidates[Math.floor(Math.random() * candidates.length)];
  }

  if (roomCode) {
    rooms[roomCode] = rooms[roomCode] || {};
    rooms[roomCode].recentMatchups = rooms[roomCode].recentMatchups || [];
    rooms[roomCode].recentMatchups.unshift(normalizeMatchup(chosen));
    if (rooms[roomCode].recentMatchups.length > 5) rooms[roomCode].recentMatchups.pop();
  }

  if (!chosen.validPlayerIds) {
    chosen.validPlayerIds = await getDynamicValidPlayers(chosen.team1, chosen.team2, dataSource);
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
