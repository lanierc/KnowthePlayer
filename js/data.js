/**
 * Comprehensive Football Database for 1v1 Football Quiz
 * Contains 35+ Top Global Clubs & 100+ Iconic/Modern Footballers
 */

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

  // Almanya (Bundesliga)
  { id: 'bayern', name: 'Bayern München', short: 'BAY', color: '#DC052D', country: 'Almanya 🇩🇪' },
  { id: 'dortmund', name: 'Borussia Dortmund', short: 'BVB', color: '#FDE100', country: 'Almanya 🇩🇪' },
  { id: 'leverkusen', name: 'Bayer Leverkusen', short: 'LEV', color: '#E32219', country: 'Almanya 🇩🇪' },
  { id: 'rb_leipzig', name: 'RB Leipzig', short: 'RBL', color: '#DD013F', country: 'Almanya 🇩🇪' },

  // Fransa (Ligue 1)
  { id: 'psg', name: 'Paris Saint-Germain', short: 'PSG', color: '#004170', country: 'Fransa 🇫🇷' },
  { id: 'marseille', name: 'Olympique Marseille', short: 'OM', color: '#00A3E0', country: 'Fransa 🇫🇷' },
  { id: 'monaco', name: 'AS Monaco', short: 'MON', color: '#E20613', country: 'Fransa 🇫🇷' },

  // Portekiz & Hollanda
  { id: 'porto', name: 'FC Porto', short: 'POR', color: '#004B87', country: 'Portekiz 🇵🇹' },
  { id: 'benfica', name: 'SL Benfica', short: 'BEN', color: '#E30613', country: 'Portekiz 🇵🇹' },
  { id: 'sporting', name: 'Sporting CP', short: 'SPO', color: '#008057', country: 'Portekiz 🇵🇹' },
  { id: 'ajax', name: 'AFC Ajax', short: 'AJX', color: '#D2122E', country: 'Hollanda 🇳🇱' },

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

let FOOTBALLERS = [
  // Legendary & Active Stars (100+ Footballers)
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
  { id: 'n_canales_sneijder', name: 'Wesley Sneijder', position: 'Ofansif Orta Saha', nationality: 'Hollanda 🇳🇱', avatar: 'WS10', avatarBg: 'from-orange-500 to-red-700', teamsPlayed: ['ajax', 'real_madrid', 'inter', 'galatasaray', 'nice'], details: 'Ajax, Real Madrid, Inter Milan, Galatasaray' },
  { id: 'd_drogba', name: 'Didier Drogba', position: 'Santrafor', nationality: 'Fildişi Sahili 🇨🇮', avatar: 'DD11', avatarBg: 'from-blue-700 to-orange-500', teamsPlayed: ['marseille', 'chelsea', 'galatasaray'], details: 'Marseille, Chelsea, Galatasaray' },
  { id: 'm_ozil', name: 'Mesut Özil', position: 'Ofansif Orta Saha', nationality: 'Almanya 🇩🇪', avatar: 'MÖ10', avatarBg: 'from-amber-400 to-red-600', teamsPlayed: ['real_madrid', 'arsenal', 'fenerbahce', 'basaksehir'], details: 'Real Madrid, Arsenal, Fenerbahçe' },
  { id: 'r_van_persie', name: 'Robin van Persie', position: 'Santrafor', nationality: 'Hollanda 🇳🇱', avatar: 'RVP', avatarBg: 'from-red-600 to-black', teamsPlayed: ['feyenoord', 'arsenal', 'man_utd', 'fenerbahce'], details: 'Arsenal, Manchester United, Fenerbahçe' },
  { id: 'n_anelka', name: 'Nicolas Anelka', position: 'Santrafor', nationality: 'Fransa 🇫🇷', avatar: 'NA39', avatarBg: 'from-blue-600 to-slate-800', teamsPlayed: ['psg', 'arsenal', 'real_madrid', 'fenerbahce', 'chelsea', 'juventus', 'liverpool', 'man_city'], details: 'PSG, Arsenal, Real Madrid, Liverpool, Man City, Fenerbahçe, Chelsea, Juventus' },
  { id: 'p_coutinho', name: 'Philippe Coutinho', position: 'Ofansif Orta Saha', nationality: 'Brezilya 🇧🇷', avatar: 'PC10', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['inter', 'espanyol', 'liverpool', 'barcelona', 'bayern', 'aston_villa'], details: 'Inter, Liverpool, FC Barcelona, Bayern, Aston Villa' },
  { id: 'a_vidal', name: 'Arturo Vidal', position: 'Orta Saha', nationality: 'Şili 🇨🇱', avatar: 'AV22', avatarBg: 'from-red-600 to-slate-900', teamsPlayed: ['leverkusen', 'juventus', 'bayern', 'barcelona', 'inter'], details: 'Bayer Leverkusen, Juventus, Bayern, Barcelona, Inter' },
  { id: 'r_lewandowski', name: 'Robert Lewandowski', position: 'Santrafor', nationality: 'Polonya 🇵🇱', avatar: 'RL9', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['dortmund', 'bayern', 'barcelona'], details: 'Borussia Dortmund, Bayern München, FC Barcelona' },
  { id: 'e_hazard', name: 'Eden Hazard', position: 'Sol Kanat', nationality: 'Belçika 🇧🇪', avatar: 'EH7', avatarBg: 'from-blue-600 to-purple-600', teamsPlayed: ['lille', 'chelsea', 'real_madrid'], details: 'Chelsea FC, Real Madrid' },
  { id: 'a_sanchez', name: 'Alexis Sánchez', position: 'Forvet', nationality: 'Şili 🇨🇱', avatar: 'AS7', avatarBg: 'from-red-600 to-blue-700', teamsPlayed: ['udinese', 'barcelona', 'arsenal', 'man_utd', 'inter', 'marseille'], details: 'FC Barcelona, Arsenal, Man Utd, Inter, Marseille' },
  { id: 'l_suarez', name: 'Luis Suárez', position: 'Santrafor', nationality: 'Uruguay 🇺🇾', avatar: 'LS9', avatarBg: 'from-sky-500 to-blue-800', teamsPlayed: ['ajax', 'liverpool', 'barcelona', 'atletico', 'inter_miami'], details: 'Ajax, Liverpool, Barcelona, Atletico Madrid, Inter Miami' },
  { id: 'f_torres', name: 'Fernando Torres', position: 'Santrafor', nationality: 'İspanya 🇪🇸', avatar: 'FT9', avatarBg: 'from-red-600 to-slate-900', teamsPlayed: ['atletico', 'liverpool', 'chelsea', 'ac_milan'], details: 'Atletico Madrid, Liverpool, Chelsea, AC Milan' },
  { id: 'g_bale', name: 'Gareth Bale', position: 'Sağ Kanat', nationality: 'Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿', avatar: 'GB11', avatarBg: 'from-white to-amber-500', teamsPlayed: ['tottenham', 'real_madrid'], details: 'Tottenham Hotspur, Real Madrid' },
  { id: 'l_modric', name: 'Luka Modrić', position: 'Orta Saha', nationality: 'Hırvatistan 🇭🇷', avatar: 'LM10', avatarBg: 'from-red-600 to-blue-700', teamsPlayed: ['tottenham', 'real_madrid'], details: 'Tottenham Hotspur, Real Madrid (2012-günümüz)' },
  { id: 'k_de_bruyne', name: 'Kevin De Bruyne', position: 'Orta Saha', nationality: 'Belçika 🇧🇪', avatar: 'KDB', avatarBg: 'from-sky-400 to-blue-600', teamsPlayed: ['chelsea', 'werder_bremen', 'wolfsburg', 'man_city'], details: 'Chelsea, Manchester City' },
  { id: 'm_salah', name: 'Mohamed Salah', position: 'Sağ Kanat', nationality: 'Mısır 🇪🇬', avatar: 'MO11', avatarBg: 'from-red-600 to-amber-500', teamsPlayed: ['basel', 'chelsea', 'fiorentina', 'roma', 'liverpool'], details: 'Chelsea, Fiorentina, AS Roma, Liverpool' },
  { id: 'c_fabregas', name: 'Cesc Fàbregas', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'CF4', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['arsenal', 'barcelona', 'chelsea', 'monaco'], details: 'Arsenal, FC Barcelona, Chelsea, Monaco' },
  { id: 'p_aubameyang', name: 'Pierre-Emerick Aubameyang', position: 'Santrafor', nationality: 'Gabon 🇬🇦', avatar: 'PEA', avatarBg: 'from-yellow-500 to-red-600', teamsPlayed: ['ac_milan', 'lille', 'monaco', 'saint_etienne', 'dortmund', 'arsenal', 'barcelona', 'chelsea', 'marseille'], details: 'AC Milan, Dortmund, Arsenal, Barcelona, Chelsea, Marseille' },
  { id: 'i_gundogan', name: 'İlkay Gündoğan', position: 'Orta Saha', nationality: 'Almanya 🇩🇪', avatar: 'IG22', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['dortmund', 'man_city', 'barcelona'], details: 'Borussia Dortmund, Manchester City, FC Barcelona' },
  { id: 'j_cancelo', name: 'João Cancelo', position: 'Sağ Bek / Sol Bek', nationality: 'Portekiz 🇵🇹', avatar: 'JC7', avatarBg: 'from-blue-500 to-teal-600', teamsPlayed: ['benfica', 'valencia', 'inter', 'juventus', 'man_city', 'bayern', 'barcelona'], details: 'Benfica, Valencia, Inter, Juventus, Man City, Bayern, Barcelona' },
  { id: 'r_falcao', name: 'Radamel Falcao', position: 'Santrafor', nationality: 'Kolombiya 🇨🇴', avatar: 'RF9', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['porto', 'atletico', 'monaco', 'man_utd', 'chelsea', 'galatasaray'], details: 'Porto, Atletico Madrid, Monaco, Man Utd, Chelsea, Galatasaray' },
  { id: 'm_icardi', name: 'Mauro Icardi', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'MI9', avatarBg: 'from-amber-400 to-red-600', teamsPlayed: ['sampdoria', 'inter', 'psg', 'galatasaray'], details: 'Inter Milan, PSG, Galatasaray' },
  { id: 'm_pjanić', name: 'Miralem Pjanić', position: 'Orta Saha', nationality: 'Bosna Hersek 🇧🇦', avatar: 'MP15', avatarBg: 'from-blue-700 to-black', teamsPlayed: ['lyon', 'roma', 'juventus', 'barcelona', 'besiktas'], details: 'Lyon, AS Roma, Juventus, Barcelona, Beşiktaş' },
  { id: 'pepe', name: 'Pepe (Képler Laveran)', position: 'Stoper', nationality: 'Portekiz 🇵🇹', avatar: 'P3', avatarBg: 'from-slate-800 to-red-700', teamsPlayed: ['maritimo', 'porto', 'real_madrid', 'besiktas'], details: 'FC Porto, Real Madrid, Beşiktaş' },
  { id: 'r_quaresma', name: 'Ricardo Quaresma', position: 'Sağ Kanat', nationality: 'Portekiz 🇵🇹', avatar: 'RQ7', avatarBg: 'from-purple-700 to-black', teamsPlayed: ['sporting', 'barcelona', 'porto', 'inter', 'chelsea', 'besiktas'], details: 'Sporting CP, Barcelona, Porto, Inter, Chelsea, Beşiktaş' },
  { id: 'm_balotelli', name: 'Mario Balotelli', position: 'Santrafor', nationality: 'İtalya 🇮🇹', avatar: 'MB45', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['inter', 'man_city', 'ac_milan', 'liverpool', 'nice', 'marseille'], details: 'Inter, Man City, AC Milan, Liverpool, Marseille' },
  { id: 'v_osimhen', name: 'Victor Osimhen', position: 'Santrafor', nationality: 'Nijerya 🇳🇬', avatar: 'VO45', avatarBg: 'from-sky-400 to-amber-500', teamsPlayed: ['wolfsburg', 'lille', 'napoli', 'galatasaray'], details: 'Lille, SSC Napoli, Galatasaray' },
  { id: 'h_kane', name: 'Harry Kane', position: 'Santrafor', nationality: 'İngiltere 🇬🇧', avatar: 'HK9', avatarBg: 'from-red-600 to-blue-900', teamsPlayed: ['tottenham', 'bayern'], details: 'Tottenham Hotspur (2009-2023), Bayern München (2023-günümüz)' },
  { id: 'r_lukaku', name: 'Romelu Lukaku', position: 'Santrafor', nationality: 'Belçika 🇧🇪', avatar: 'RL9', avatarBg: 'from-blue-600 to-yellow-500', teamsPlayed: ['anderlecht', 'chelsea', 'everton', 'man_utd', 'inter', 'roma', 'napoli'], details: 'Chelsea, Everton, Man Utd, Inter, AS Roma, Napoli' },
  { id: 'a_griezmann', name: 'Antoine Griezmann', position: 'Forvet', nationality: 'Fransa 🇫🇷', avatar: 'AG7', avatarBg: 'from-red-600 to-blue-700', teamsPlayed: ['real_sociedad', 'atletico', 'barcelona'], details: 'Real Sociedad, Atletico Madrid, FC Barcelona' },
  { id: 't_courtois', name: 'Thibaut Courtois', position: 'Kaleci', nationality: 'Belçika 🇧🇪', avatar: 'TC1', avatarBg: 'from-amber-400 to-slate-900', teamsPlayed: ['genk', 'atletico', 'chelsea', 'real_madrid'], details: 'Atletico Madrid, Chelsea, Real Madrid' },
  { id: 's_mane', name: 'Sadio Mané', position: 'Sol Kanat', nationality: 'Senegal 🇸🇳', avatar: 'SM10', avatarBg: 'from-green-600 to-yellow-400', teamsPlayed: ['metz', 'rb_salzburg', 'southampton', 'liverpool', 'bayern', 'al_nassr'], details: 'Southampton, Liverpool, Bayern München, Al Nassr' },
  { id: 'k_koulibaly', name: 'Kalidou Koulibaly', position: 'Stoper', nationality: 'Senegal 🇸🇳', avatar: 'KK26', avatarBg: 'from-sky-500 to-blue-800', teamsPlayed: ['genk', 'napoli', 'chelsea', 'al_hilal'], details: 'Napoli, Chelsea, Al Hilal' },
  { id: 'r_sterling', name: 'Raheem Sterling', position: 'Kanat', nationality: 'İngiltere 🇬🇧', avatar: 'RS7', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['liverpool', 'man_city', 'chelsea', 'arsenal'], details: 'Liverpool, Manchester City, Chelsea, Arsenal' },
  { id: 'g_jesus', name: 'Gabriel Jesus', position: 'Santrafor', nationality: 'Brezilya 🇧🇷', avatar: 'GJ9', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['palmeiras', 'man_city', 'arsenal'], details: 'Manchester City, Arsenal' },
  { id: 'b_silva', name: 'Bernardo Silva', position: 'Orta Saha', nationality: 'Portekiz 🇵🇹', avatar: 'BS20', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['benfica', 'monaco', 'man_city'], details: 'Benfica, AS Monaco, Manchester City' },
  { id: 'r_mahrez', name: 'Riyad Mahrez', position: 'Sağ Kanat', nationality: 'Cezayir 🇩🇿', avatar: 'RM26', avatarBg: 'from-green-500 to-sky-400', teamsPlayed: ['leicester', 'man_city', 'al_ahli'], details: 'Leicester City, Manchester City, Al Ahli' },
  { id: 'e_cavani', name: 'Edinson Cavani', position: 'Santrafor', nationality: 'Uruguay 🇺🇾', avatar: 'EC9', avatarBg: 'from-sky-400 to-blue-900', teamsPlayed: ['palermo', 'napoli', 'psg', 'man_utd', 'valencia', 'boca_juniors'], details: 'Palermo, Napoli, PSG, Manchester United, Valencia' },
  { id: 't_silva', name: 'Thiago Silva', position: 'Stoper', nationality: 'Brezilya 🇧🇷', avatar: 'TS6', avatarBg: 'from-blue-600 to-yellow-500', teamsPlayed: ['fluminense', 'ac_milan', 'psg', 'chelsea'], details: 'AC Milan, PSG, Chelsea' },
  { id: 'd_alaba', name: 'David Alaba', position: 'Stoper / Sol Bek', nationality: 'Avusturya 🇦🇹', avatar: 'DA4', avatarBg: 'from-red-600 to-amber-400', teamsPlayed: ['hoffenheim', 'bayern', 'real_madrid'], details: 'Bayern München (2010-2021), Real Madrid (2021-günümüz)' },
  { id: 'k_coman', name: 'Kingsley Coman', position: 'Sol Kanat', nationality: 'Fransa 🇫🇷', avatar: 'KC11', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['psg', 'juventus', 'bayern'], details: 'PSG, Juventus, Bayern München' },
  { id: 'l_sane', name: 'Leroy Sané', position: 'Sağ Kanat', nationality: 'Almanya 🇩🇪', avatar: 'LS10', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['schalke', 'man_city', 'bayern'], details: 'Schalke 04, Manchester City, Bayern München' },
  { id: 's_gnabry', name: 'Serge Gnabry', position: 'Sağ Kanat', nationality: 'Almanya 🇩🇪', avatar: 'SG7', avatarBg: 'from-red-600 to-blue-900', teamsPlayed: ['arsenal', 'werder_bremen', 'hoffenheim', 'bayern'], details: 'Arsenal, Werder Bremen, Bayern München' },
  { id: 'm_depay', name: 'Memphis Depay', position: 'Forvet', nationality: 'Hollanda 🇳🇱', avatar: 'MD9', avatarBg: 'from-orange-500 to-red-700', teamsPlayed: ['psv', 'man_utd', 'lyon', 'barcelona', 'atletico', 'corinthians'], details: 'PSV, Man Utd, Lyon, Barcelona, Atletico Madrid' },
  { id: 'd_dzeko', name: 'Edin Džeko', position: 'Santrafor', nationality: 'Bosna Hersek 🇧🇦', avatar: 'ED9', avatarBg: 'from-blue-700 to-yellow-400', teamsPlayed: ['wolfsburg', 'man_city', 'roma', 'inter', 'fenerbahce'], details: 'Wolfsburg, Manchester City, AS Roma, Inter, Fenerbahçe' },
  { id: 'd_tadic', name: 'Dušan Tadić', position: 'Sol Kanat / 10 Numara', nationality: 'Sırbistan 🇸🇷', avatar: 'DT10', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['twente', 'southampton', 'ajax', 'fenerbahce'], details: 'Southampton, Ajax, Fenerbahçe' },
  { id: 'fred', name: 'Fred (Frederico Rodrigues)', position: 'Orta Saha', nationality: 'Brezilya 🇧🇷', avatar: 'F35', avatarBg: 'from-red-600 to-yellow-400', teamsPlayed: ['shakhtar', 'man_utd', 'fenerbahce'], details: 'Shakhtar Donetsk, Manchester United, Fenerbahçe' },
  { id: 'w_zaha', name: 'Wilfred Zaha', position: 'Sol Kanat', nationality: 'Fildişi Sahili 🇨🇮', avatar: 'WZ14', avatarBg: 'from-red-600 to-yellow-500', teamsPlayed: ['crystal_palace', 'man_utd', 'galatasaray', 'lyon'], details: 'Crystal Palace, Manchester United, Galatasaray, Lyon' },
  { id: 'g_fernandes', name: 'Gedson Fernandes', position: 'Orta Saha', nationality: 'Portekiz 🇵🇹', avatar: 'GF83', avatarBg: 'from-red-600 to-black', teamsPlayed: ['benfica', 'tottenham', 'galatasaray', 'besiktas'], details: 'Benfica, Tottenham, Galatasaray, Beşiktaş' },
  { id: 'm_batshuayi', name: 'Michy Batshuayi', position: 'Santrafor', nationality: 'Belçika 🇧🇪', avatar: 'MB23', avatarBg: 'from-blue-600 to-amber-500', teamsPlayed: ['marseille', 'chelsea', 'dortmund', 'valencia', 'besiktas', 'fenerbahce', 'galatasaray'], details: 'Marseille, Chelsea, Dortmund, Valencia, Beşiktaş, Fenerbahçe, Galatasaray' },
  { id: 'c_immobile', name: 'Ciro Immobile', position: 'Santrafor', nationality: 'İtalya 🇮🇹', avatar: 'CI17', avatarBg: 'from-sky-400 to-black', teamsPlayed: ['juventus', 'dortmund', 'sevilla', 'lazio', 'besiktas'], details: 'Juventus, Dortmund, Sevilla, Lazio, Beşiktaş' },
  { id: 'j_kounde', name: 'Jules Koundé', position: 'Stoper / Sağ Bek', nationality: 'Fransa 🇫🇷', avatar: 'JK23', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['bordeaux', 'sevilla', 'barcelona'], details: 'Sevilla, FC Barcelona' },
  { id: 'r_varane', name: 'Raphaël Varane', position: 'Stoper', nationality: 'Fransa 🇫🇷', avatar: 'RV19', avatarBg: 'from-white to-red-600', teamsPlayed: ['lens', 'real_madrid', 'man_utd', 'como'], details: 'Real Madrid (2011-2021), Manchester United (2021-2024)' },
  { id: 'c_casemiro', name: 'Casemiro', position: 'Ön Libero', nationality: 'Brezilya 🇧🇷', avatar: 'CASE', avatarBg: 'from-amber-400 to-red-600', teamsPlayed: ['porto', 'real_madrid', 'man_utd'], details: 'FC Porto, Real Madrid (2013-2022), Manchester United' },
  { id: 'm_kovacic', name: 'Mateo Kovačić', position: 'Orta Saha', nationality: 'Hırvatistan 🇭🇷', avatar: 'MK8', avatarBg: 'from-blue-600 to-sky-400', teamsPlayed: ['inter', 'real_madrid', 'chelsea', 'man_city'], details: 'Inter Milan, Real Madrid, Chelsea, Manchester City' },
  { id: 'n_kante', name: 'N\'Golo Kanté', position: 'Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'NG7', avatarBg: 'from-blue-700 to-yellow-400', teamsPlayed: ['caen', 'leicester', 'chelsea', 'al_ittihad'], details: 'Leicester City, Chelsea, Al Ittihad' },
  { id: 'p_pogba', name: 'Paul Pogba', position: 'Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'PP6', avatarBg: 'from-red-600 to-black', teamsPlayed: ['man_utd', 'juventus'], details: 'Manchester United, Juventus' },
  { id: 'c_eriksen', name: 'Christian Eriksen', position: 'Orta Saha', nationality: 'Danimarka 🇩🇰', avatar: 'CE14', avatarBg: 'from-red-600 to-blue-900', teamsPlayed: ['ajax', 'tottenham', 'inter', 'brentford', 'man_utd'], details: 'Ajax, Tottenham, Inter Milan, Manchester United' },
  { id: 'k_trippier', name: 'Kieran Trippier', position: 'Sağ Bek', nationality: 'İngiltere 🇬🇧', avatar: 'KT2', avatarBg: 'from-white to-red-600', teamsPlayed: ['burnley', 'tottenham', 'atletico', 'newcastle'], details: 'Tottenham, Atletico Madrid, Newcastle United' },
  { id: 'm_alonso', name: 'Marcos Alonso', position: 'Sol Bek', nationality: 'İspanya 🇪🇸', avatar: 'MA3', avatarBg: 'from-blue-700 to-red-600', teamsPlayed: ['real_madrid', 'fiorentina', 'chelsea', 'barcelona'], details: 'Real Madrid, Fiorentina, Chelsea, FC Barcelona' },
  { id: 'hulk', name: 'Hulk (Givanildo)', position: 'Sağ Kanat', nationality: 'Brezilya 🇧🇷', avatar: 'H7', avatarBg: 'from-blue-600 to-green-600', teamsPlayed: ['porto', 'zenit', 'atletico_mineiro'], details: 'FC Porto, Zenit Saint Petersburg' },
  { id: 'a_sir_alex_rooney', name: 'Wayne Rooney', position: 'Santrafor', nationality: 'İngiltere 🇬🇧', avatar: 'WR10', avatarBg: 'from-red-600 to-slate-900', teamsPlayed: ['everton', 'man_utd'], details: 'Everton, Manchester United efsanesi (2004-2017)' },
  { id: 'r_giggs', name: 'Ryan Giggs', position: 'Sol Kanat', nationality: 'Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿', avatar: 'RG11', avatarBg: 'from-red-600 to-black', teamsPlayed: ['man_utd'], details: 'Manchester United efsanesi (1990-2014)' },
  { id: 's_gerrard', name: 'Steven Gerrard', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'SG8', avatarBg: 'from-red-600 to-amber-400', teamsPlayed: ['liverpool'], details: 'Liverpool efsanesi (1998-2015)' },
  { id: 'f_lampard', name: 'Frank Lampard', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'FL8', avatarBg: 'from-blue-700 to-sky-400', teamsPlayed: ['west_ham', 'chelsea', 'man_city'], details: 'Chelsea efsanesi, Manchester City' },
  { id: 'p_scholes', name: 'Paul Scholes', position: 'Orta Saha', nationality: 'İngiltere 🇬🇧', avatar: 'PS18', avatarBg: 'from-red-600 to-amber-500', teamsPlayed: ['man_utd'], details: 'Manchester United efsanesi (1993-2013)' },
  { id: 'a_del_piero', name: 'Alessandro Del Piero', position: 'Forvet', nationality: 'İtalya 🇮🇹', avatar: 'ADP10', avatarBg: 'from-black to-slate-800', teamsPlayed: ['juventus'], details: 'Juventus efsanesi (1993-2012)' },
  { id: 'f_totti', name: 'Francesco Totti', position: 'Ofansif Orta Saha', nationality: 'İtalya 🇮🇹', avatar: 'FT10', avatarBg: 'from-red-800 to-amber-500', teamsPlayed: ['roma'], details: 'AS Roma efsanesi (1992-2017)' },
  { id: 'p_maldini', name: 'Paolo Maldini', position: 'Stoper / Sol Bek', nationality: 'İtalya 🇮🇹', avatar: 'PM3', avatarBg: 'from-red-600 to-black', teamsPlayed: ['ac_milan'], details: 'AC Milan efsanesi (1984-2009)' },
  { id: 'a_nesta', name: 'Alessandro Nesta', position: 'Stoper', nationality: 'İtalya 🇮🇹', avatar: 'AN13', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['lazio', 'ac_milan'], details: 'SS Lazio, AC Milan' },
  { id: 'f_cannavaro', name: 'Fabio Cannavaro', position: 'Stoper', nationality: 'İtalya 🇮🇹', avatar: 'FC5', avatarBg: 'from-blue-600 to-amber-400', teamsPlayed: ['napoli', 'parma', 'inter', 'juventus', 'real_madrid'], details: 'Napoli, Parma, Inter, Juventus, Real Madrid' },
  { id: 'j_zanetti', name: 'Javier Zanetti', position: 'Sağ Bek / Orta Saha', nationality: 'Arjantin 🇦🇷', avatar: 'JZ4', avatarBg: 'from-blue-700 to-black', teamsPlayed: ['inter'], details: 'Inter Milan efsanesi (1995-2014)' },
  { id: 'e_cambiasso', name: 'Esteban Cambiasso', position: 'Ön Libero', nationality: 'Arjantin 🇦🇷', avatar: 'EC19', avatarBg: 'from-blue-700 to-amber-400', teamsPlayed: ['real_madrid', 'inter', 'leicester'], details: 'Real Madrid, Inter Milan, Leicester City' },
  { id: 'h_crespo', name: 'Hernán Crespo', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'HC9', avatarBg: 'from-blue-600 to-red-600', teamsPlayed: ['parma', 'lazio', 'inter', 'chelsea', 'ac_milan'], details: 'Parma, Lazio, Inter, Chelsea, AC Milan' },
  { id: 's_aguero', name: 'Sergio Agüero', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'SA10', avatarBg: 'from-sky-400 to-red-600', teamsPlayed: ['atletico', 'man_city', 'barcelona'], details: 'Atletico Madrid, Manchester City, FC Barcelona' },
  { id: 'c_tevez', name: 'Carlos Tévez', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'CT32', avatarBg: 'from-blue-600 to-black', teamsPlayed: ['west_ham', 'man_utd', 'man_city', 'juventus', 'boca_juniors'], details: 'West Ham, Man Utd, Man City, Juventus' },
  { id: 'g_buffon', name: 'Gianluigi Buffon', position: 'Kaleci', nationality: 'İtalya 🇮🇹', avatar: 'Gigi', avatarBg: 'from-black to-blue-700', teamsPlayed: ['parma', 'juventus', 'psg'], details: 'Parma, Juventus, PSG' },
  { id: 'j_dudek', name: 'Jerzy Dudek', position: 'Kaleci', nationality: 'Polonya 🇵🇱', avatar: 'JD1', avatarBg: 'from-red-600 to-amber-400', teamsPlayed: ['feyenoord', 'liverpool', 'real_madrid'], details: 'Feyenoord, Liverpool, Real Madrid' },
  { id: 'k_navas', name: 'Keylor Navas', position: 'Kaleci', nationality: 'Kosta Rika 🇨🇷', avatar: 'KN1', avatarBg: 'from-white to-blue-700', teamsPlayed: ['levante', 'real_madrid', 'psg', 'nottingham'], details: 'Real Madrid (2014-2019), PSG (2019-2024)' },
  { id: 'james_rodriguez', name: 'James Rodríguez', position: 'Ofansif Orta Saha', nationality: 'Kolombiya 🇨🇴', avatar: 'JR10', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['porto', 'monaco', 'real_madrid', 'bayern', 'everton', 'olympiacos', 'rayo'], details: 'Porto, Monaco, Real Madrid, Bayern München, Everton' },
  { id: 'm_reus', name: 'Marco Reus', position: 'Ofansif Orta Saha', nationality: 'Almanya 🇩🇪', avatar: 'MR11', avatarBg: 'from-yellow-400 to-black', teamsPlayed: ['monchengladbach', 'dortmund', 'la_galaxy'], details: 'Borussia Dortmund efsanesi (2012-2024)' },
  { id: 'm_götze', name: 'Mario Götze', position: 'Ofansif Orta Saha', nationality: 'Almanya 🇩🇪', avatar: 'MG10', avatarBg: 'from-red-600 to-yellow-400', teamsPlayed: ['dortmund', 'bayern', 'psv', 'eintracht'], details: 'Borussia Dortmund, Bayern München, PSV' },
  { id: 't_müller', name: 'Thomas Müller', position: 'İkinci Forvet', nationality: 'Almanya 🇩🇪', avatar: 'TM25', avatarBg: 'from-red-600 to-black', teamsPlayed: ['bayern'], details: 'Bayern München efsanesi (2008-günümüz)' },
  { id: 'm_neuer', name: 'Manuel Neuer', position: 'Kaleci', nationality: 'Almanya 🇩🇪', avatar: 'MN1', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['schalke', 'bayern'], details: 'Schalke 04, Bayern München (2011-günümüz)' },

  // TURKISH & GLOBAL MULTI-CLUB ICONIC PLAYERS
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
  { id: 'kazim_kazim', name: 'Colin Kazım-Richards', position: 'Sağ Kanat', nationality: 'Türkiye 🇹🇷', avatar: 'KK99', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['fenerbahce', 'galatasaray', 'feyenoord'], details: 'Fenerbahçe, Galatasaray, Feyenoord' },
  { id: 'xavi', name: 'Xavi Hernández', position: 'Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'X11', avatarBg: 'from-sky-500 to-blue-700', teamsPlayed: ['barcelona', 'al_sadd'], details: 'FC Barcelona efsanesi, Al Sadd' },
  { id: 'andres_iniesta', name: 'Andrés Iniesta', position: 'Ofansif Orta Saha', nationality: 'İspanya 🇪🇸', avatar: 'AI8', avatarBg: 'from-orange-500 to-red-600', teamsPlayed: ['barcelona', 'vissel_kobe'], details: 'FC Barcelona efsanesi, Vissel Kobe' },
  { id: 'carles_puyol', name: 'Carles Puyol', position: 'Stoper', nationality: 'İspanya 🇪🇸', avatar: 'CP5', avatarBg: 'from-green-700 to-black', teamsPlayed: ['barcelona'], details: 'FC Barcelona efsanesi' },
  { id: 'sergio_ramos', name: 'Sergio Ramos', position: 'Stoper', nationality: 'İspanya 🇪🇸', avatar: 'SR4', avatarBg: 'from-red-600 to-blue-800', teamsPlayed: ['sevilla', 'real_madrid', 'psg'], details: 'Sevilla, Real Madrid, PSG' },
  { id: 'gerard_pique', name: 'Gerard Piqué', position: 'Stoper', nationality: 'İspanya 🇪🇸', avatar: 'GP3', avatarBg: 'from-slate-700 to-red-600', teamsPlayed: ['man_utd', 'barcelona'], details: 'Manchester United, FC Barcelona' },
  { id: 'philipp_lahm', name: 'Philipp Lahm', position: 'Sağ Bek / Sol Bek', nationality: 'Almanya 🇩🇪', avatar: 'PL21', avatarBg: 'from-red-600 to-amber-400', teamsPlayed: ['bayern'], details: 'Bayern München efsanesi' },
  { id: 'roberto_carlos', name: 'Roberto Carlos', position: 'Sol Bek', nationality: 'Brezilya 🇧🇷', avatar: 'RC3', avatarBg: 'from-green-500 to-yellow-500', teamsPlayed: ['real_madrid', 'fenerbahce', 'inter_miami'], details: 'Real Madrid, Fenerbahçe, Inter Miami' },
  { id: 'cafu', name: 'Cafu', position: 'Sağ Bek', nationality: 'Brezilya 🇧🇷', avatar: 'C2', avatarBg: 'from-green-400 to-gold-500', teamsPlayed: ['palmeiras', 'roma', 'ac_milan'], details: 'SE Palmeiras, Roma, AC Milan' },
  { id: 'ronaldo_nazario', name: 'Ronaldo Nazário', position: 'Santrafor', nationality: 'Brezilya 🇧🇷', avatar: 'RN9', avatarBg: 'from-yellow-400 to-red-600', teamsPlayed: ['barcelona', 'inter', 'real_madrid', 'milan', 'corinthians'], details: 'FC Barcelona, Inter, Real Madrid, AC Milan, Corinthians' },
  { id: 'diego_maradona', name: 'Diego Maradona', position: '10 Numara', nationality: 'Arjantin 🇦🇷', avatar: 'DM10', avatarBg: 'from-blue-700 to-white', teamsPlayed: ['boca_juniors', 'barcelona', 'napoli', 'sevilla'], details: 'Boca Juniors, FC Barcelona, Napoli, Sevilla' },
  { id: 'pele', name: 'Pelé', position: 'Forvet', nationality: 'Brezilya 🇧🇷', avatar: 'P10', avatarBg: 'from-amber-500 to-green-600', teamsPlayed: ['santos', 'new_york_cosmos'], details: 'Santos, New York Cosmos efsanesi' },
  { id: 'zinedine_zidane', name: 'Zinedine Zidane', position: 'Ofansif Orta Saha', nationality: 'Fransa 🇫🇷', avatar: 'ZZ10', avatarBg: 'from-white to-indigo-700', teamsPlayed: ['bordeaux', 'juventus', 'real_madrid'], details: 'Bordeaux, Juventus, Real Madrid' },
  { id: 'ronaldinho_rivaldo', name: 'Rivaldo', position: 'Sol Kanat', nationality: 'Brezilya 🇧🇷', avatar: 'R9', avatarBg: 'from-purple-600 to-yellow-500', teamsPlayed: ['barcelona', 'ac_milan', 'olympiakos'], details: 'FC Barcelona, AC Milan, Olympiakos' },
  { id: 'roberto_baggio', name: 'Roberto Baggio', position: '10 Numara', nationality: 'İtalya 🇮🇹', avatar: 'RB10', avatarBg: 'from-amber-400 to-slate-900', teamsPlayed: ['fiorentina', 'juventus', 'milan', 'inter', 'bologna', 'brescia'], details: 'Fiorentina, Juventus, AC Milan, Inter, Bologna, Brescia' },
  { id: 'andriy_shevchenko', name: 'Andriy Shevchenko', position: 'Santrafor', nationality: 'Ukrayna 🇺🇦', avatar: 'AS7', avatarBg: 'from-blue-600 to-yellow-400', teamsPlayed: ['dynamo_kiev', 'ac_milan', 'chelsea'], details: 'Dynamo Kiev, AC Milan, Chelsea' },
  { id: 'dennis_bergkamp', name: 'Dennis Bergkamp', position: 'Ofansif Orta Saha', nationality: 'Hollanda 🇳🇱', avatar: 'DB10', avatarBg: 'from-orange-500 to-slate-800', teamsPlayed: ['ajax', 'internazionale', 'arsenal'], details: 'Ajax, Inter Milan, Arsenal' },
  { id: 'erling_haaland', name: 'Erling Haaland', position: 'Santrafor', nationality: 'Norveç 🇳🇴', avatar: 'EH9', avatarBg: 'from-yellow-400 to-cyan-500', teamsPlayed: ['molde', 'salzburg', 'dortmund', 'man_city'], details: 'Molde, Salzburg, Dortmund, Manchester City' },
  { id: 'austin_rivaldo', name: 'Noah', position: 'Forvet', nationality: 'Hollanda 🇳🇱', avatar: 'NR7', avatarBg: 'from-sky-400 to-orange-600', teamsPlayed: ['ajax', 'barcelona'], details: 'Ajax, Barcelona' },
  { id: 'a_luis_suarez', name: 'Luis Suárez', position: 'Santrafor', nationality: 'Uruguay 🇺🇾', avatar: 'LS9', avatarBg: 'from-sky-500 to-blue-900', teamsPlayed: ['ajax', 'liverpool', 'barcelona', 'atletico', 'inter_miami'], details: 'Ajax, Liverpool, Barcelona, Atletico Madrid, Inter Miami' },
  { id: 'carlos_tejeda', name: 'Carlos Tevez', position: 'Santrafor', nationality: 'Arjantin 🇦🇷', avatar: 'CT32', avatarBg: 'from-blue-600 to-black', teamsPlayed: ['west_ham', 'man_utd', 'man_city', 'juventus', 'boca_juniors'], details: 'West Ham, Man Utd, Man City, Juventus, Boca Juniors' },
  { id: 'andrea_pirlo', name: 'Andrea Pirlo', position: 'Orta Saha', nationality: 'İtalya 🇮🇹', avatar: 'AP21', avatarBg: 'from-blue-900 to-slate-900', teamsPlayed: ['inter', 'ac_milan', 'juventus'], details: 'Inter Milan, AC Milan, Juventus' },
  { id: 'javier_zanetti', name: 'Javier Zanetti', position: 'Sağ Bek / Orta Saha', nationality: 'Arjantin 🇦🇷', avatar: 'JZ4', avatarBg: 'from-blue-700 to-black', teamsPlayed: ['inter'], details: 'Inter Milan efsanesi' },
  { id: 'alex_de_souza', name: 'Alex de Souza', position: '10 Numara', nationality: 'Brezilya 🇧🇷', avatar: 'AD8', avatarBg: 'from-green-500 to-yellow-500', teamsPlayed: ['fenerbahce', 'palmeiras', 'porto'], details: 'Fenerbahçe efsanesi, Palmeiras, Porto' },
  { id: 'hakan_sukur', name: 'Hakan Şükür', position: 'Santrafor', nationality: 'Türkiye 🇹🇷', avatar: 'HS9', avatarBg: 'from-red-600 to-slate-900', teamsPlayed: ['galatasaray', 'inter', 'parma'], details: 'Galatasaray, Inter Milan, Parma' },
  { id: 'selcuk_inan', name: 'Selçuk İnan', position: 'Orta Saha', nationality: 'Türkiye 🇹🇷', avatar: 'Sİ8', avatarBg: 'from-red-600 to-amber-500', teamsPlayed: ['trabzonspor', 'galatasaray'], details: 'Trabzonspor, Galatasaray efsanesi' }
];

// Continued bulk additions for client-side fallback
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

// Fallback Game Matchups Matrix
const GAME_MATCHUPS = [
  { team1: 'real_madrid', team2: 'juventus', validPlayerIds: ['c_ronaldo', 'a_di_maria', 'g_higuain', 'a_morata', 'n_anelka', 'z_ibrahimovic', 'f_cannavaro'] },
  { team1: 'barcelona', team2: 'psg', validPlayerIds: ['l_messi', 'neymar_jr', 'r_ronaldinho', 'z_ibrahimovic', 'm_depay'] },
  { team1: 'real_madrid', team2: 'barcelona', validPlayerIds: ['l_figo', 'r_ronaldinho', 'k_benzema', 'l_messi', 'c_fabregas', 'p_coutinho', 'l_suarez', 'a_vidal', 'm_alonso', 'm_laudrup'] },
  { team1: 'ac_milan', team2: 'real_madrid', validPlayerIds: ['kaka', 'd_beckham', 'a_morata', 'm_alonso', 't_hernandez'] },
  { team1: 'arsenal', team2: 'fenerbahce', validPlayerIds: ['m_ozil', 'r_van_persie', 'n_anelka'] },
  { team1: 'chelsea', team2: 'galatasaray', validPlayerIds: ['d_drogba', 'r_falcao'] },
  { team1: 'bayern', team2: 'barcelona', validPlayerIds: ['r_lewandowski', 'p_coutinho', 'a_vidal', 'i_gundogan', 'm_gotze'] },
  { team1: 'juventus', team2: 'ac_milan', validPlayerIds: ['a_pirlo', 'z_ibrahimovic', 'g_higuain', 'a_morata', 'p_bonucci'] },
  { team1: 'liverpool', team2: 'barcelona', validPlayerIds: ['l_suarez', 'p_coutinho', 'j_mascherano'] },
  { team1: 'atletico', team2: 'liverpool', validPlayerIds: ['f_torres', 'l_suarez'] },
  { team1: 'tottenham', team2: 'real_madrid', validPlayerIds: ['g_bale', 'l_modric'] },
  { team1: 'dortmund', team2: 'man_city', validPlayerIds: ['e_haaland', 'i_gundogan'] },
  { team1: 'chelsea', team2: 'man_city', validPlayerIds: ['k_de_bruyne', 'f_lampard', 'r_sterling', 'm_kovacic'] },
  { team1: 'chelsea', team2: 'liverpool', validPlayerIds: ['m_salah', 'f_torres', 'm_balotelli', 'n_anelka', 'y_benayoun'] },
  { team1: 'roma', team2: 'juventus', validPlayerIds: ['m_pjanić', 'r_lukaku'] },
  { team1: 'porto', team2: 'real_madrid', validPlayerIds: ['pepe', 'casemiro', 'james_rodriguez', 'e_militao'] },
  { team1: 'real_madrid', team2: 'besiktas', validPlayerIds: ['pepe', 'guti'] },
  { team1: 'inter', team2: 'psg', validPlayerIds: ['z_ibrahimovic', 'm_icardi', 'a_hakimi'] },
  { team1: 'napoli', team2: 'galatasaray', validPlayerIds: ['v_osimhen', 'd_mertens'] }
];
