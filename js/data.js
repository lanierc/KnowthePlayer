/**
 * Comprehensive Football Database for 1v1 Football Quiz
 * Contains 65 Top Global Clubs & 284 Iconic/Modern Footballers
 * Complete Historical Club Careers
 */

const FOOTBALL_TEAMS = [
  {
    "id": "real_madrid",
    "name": "Real Madrid",
    "short": "RMA",
    "color": "#FEBE10",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "barcelona",
    "name": "FC Barcelona",
    "short": "BAR",
    "color": "#004D98",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "atletico",
    "name": "Atlético Madrid",
    "short": "ATM",
    "color": "#CB3524",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "sevilla",
    "name": "Sevilla FC",
    "short": "SEV",
    "color": "#D00027",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "valencia",
    "name": "Valencia CF",
    "short": "VAL",
    "color": "#FF7300",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "real_sociedad",
    "name": "Real Sociedad",
    "short": "RSO",
    "color": "#0067B1",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "juventus",
    "name": "Juventus",
    "short": "JUV",
    "color": "#000000",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "ac_milan",
    "name": "AC Milan",
    "short": "ACM",
    "color": "#FB090B",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "inter",
    "name": "Inter Milan",
    "short": "INT",
    "color": "#0066B2",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "roma",
    "name": "AS Roma",
    "short": "ROM",
    "color": "#8E1F2F",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "napoli",
    "name": "SSC Napoli",
    "short": "NAP",
    "color": "#0080FF",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "lazio",
    "name": "SS Lazio",
    "short": "LAZ",
    "color": "#87D8F7",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "fiorentina",
    "name": "ACF Fiorentina",
    "short": "FIO",
    "color": "#4C2382",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "atalanta",
    "name": "Atalanta BC",
    "short": "ATA",
    "color": "#1E71B8",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "man_utd",
    "name": "Manchester United",
    "short": "MUN",
    "color": "#DA291C",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "man_city",
    "name": "Manchester City",
    "short": "MCI",
    "color": "#6CABDD",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "chelsea",
    "name": "Chelsea FC",
    "short": "CHE",
    "color": "#034694",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "liverpool",
    "name": "Liverpool FC",
    "short": "LIV",
    "color": "#C8102E",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "arsenal",
    "name": "Arsenal FC",
    "short": "ARS",
    "color": "#EF0107",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "tottenham",
    "name": "Tottenham Hotspur",
    "short": "TOT",
    "color": "#132257",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "newcastle",
    "name": "Newcastle United",
    "short": "NEW",
    "color": "#241F20",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "everton",
    "name": "Everton FC",
    "short": "EVE",
    "color": "#003399",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "aston_villa",
    "name": "Aston Villa",
    "short": "AVL",
    "color": "#95BFE5",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "leicester",
    "name": "Leicester City",
    "short": "LEI",
    "color": "#0053A0",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "west_ham",
    "name": "West Ham United",
    "short": "WHU",
    "color": "#7A263A",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "bayern",
    "name": "Bayern München",
    "short": "BAY",
    "color": "#DC052D",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "dortmund",
    "name": "Borussia Dortmund",
    "short": "BVB",
    "color": "#FDE100",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "leverkusen",
    "name": "Bayer Leverkusen",
    "short": "LEV",
    "color": "#E32219",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "rb_leipzig",
    "name": "RB Leipzig",
    "short": "RBL",
    "color": "#DD013F",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "wolfsburg",
    "name": "VfL Wolfsburg",
    "short": "WOB",
    "color": "#65B32E",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "schalke",
    "name": "Schalke 04",
    "short": "S04",
    "color": "#004D9D",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "monchengladbach",
    "name": "Borussia Mönchengladbach",
    "short": "BMG",
    "color": "#000000",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "psg",
    "name": "Paris Saint-Germain",
    "short": "PSG",
    "color": "#004170",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "marseille",
    "name": "Olympique Marseille",
    "short": "OM",
    "color": "#00A3E0",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "monaco",
    "name": "AS Monaco",
    "short": "MON",
    "color": "#E20613",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "lille",
    "name": "LOSC Lille",
    "short": "LIL",
    "color": "#E01E2B",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "lyon",
    "name": "Olympique Lyonnais",
    "short": "OL",
    "color": "#DA0812",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "rennes",
    "name": "Stade Rennais",
    "short": "REN",
    "color": "#E30613",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "porto",
    "name": "FC Porto",
    "short": "POR",
    "color": "#004B87",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "benfica",
    "name": "SL Benfica",
    "short": "BEN",
    "color": "#E30613",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "sporting",
    "name": "Sporting CP",
    "short": "SPO",
    "color": "#008057",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "ajax",
    "name": "AFC Ajax",
    "short": "AJX",
    "color": "#D2122E",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "feyenoord",
    "name": "Feyenoord Rotterdam",
    "short": "FEY",
    "color": "#FF0000",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "psv",
    "name": "PSV Eindhoven",
    "short": "PSV",
    "color": "#FF0000",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "galatasaray",
    "name": "Galatasaray",
    "short": "GAL",
    "color": "#A90429",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "fenerbahce",
    "name": "Fenerbahçe",
    "short": "FEN",
    "color": "#002D62",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "besiktas",
    "name": "Beşiktaş JK",
    "short": "BES",
    "color": "#000000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "trabzonspor",
    "name": "Trabzonspor",
    "short": "TS",
    "color": "#8B0000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "basaksehir",
    "name": "RAMS Başakşehir",
    "short": "IBFK",
    "color": "#002D62",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "al_nassr",
    "name": "Al Nassr FC",
    "short": "NAS",
    "color": "#F7D100",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "al_hilal",
    "name": "Al Hilal SFC",
    "short": "HIL",
    "color": "#0055A5",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "al_ittihad",
    "name": "Al Ittihad Club",
    "short": "ITT",
    "color": "#FEE100",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "inter_miami",
    "name": "Inter Miami CF",
    "short": "MIA",
    "color": "#F7B5CD",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "la_galaxy",
    "name": "LA Galaxy",
    "short": "LAG",
    "color": "#00245D",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "boca_juniors",
    "name": "Boca Juniors",
    "short": "BOC",
    "color": "#004B87",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "river_plate",
    "name": "River Plate",
    "short": "RIV",
    "color": "#EB1C24",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "santos",
    "name": "Santos FC",
    "short": "SAN",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "celtic",
    "name": "Celtic FC",
    "short": "CEL",
    "color": "#018749",
    "country": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
  },
  {
    "id": "rangers",
    "name": "Rangers FC",
    "short": "RAN",
    "color": "#0038A8",
    "country": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
  },
  {
    "id": "flamengo",
    "name": "CR Flamengo",
    "short": "FLA",
    "color": "#C3281E",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "villarreal",
    "name": "Villarreal CF",
    "short": "VIL",
    "color": "#FFE600",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "athletic_bilbao",
    "name": "Athletic Bilbao",
    "short": "ATH",
    "color": "#EE2524",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "stuttgart",
    "name": "VfB Stuttgart",
    "short": "VFB",
    "color": "#E30613",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "frankfurt",
    "name": "Eintracht Frankfurt",
    "short": "SGE",
    "color": "#E1000F",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "stade_rennais",
    "name": "Stade Rennais",
    "short": "REN",
    "color": "#E30613",
    "country": "Fransa 🇫🇷"
  }
];

let FOOTBALLERS = [
  {
    "id": "c_ronaldo",
    "name": "Cristiano Ronaldo",
    "position": "Forvet",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "CR7",
    "avatarBg": "from-amber-500 to-red-600",
    "teamsPlayed": [
      "real_madrid",
      "juventus",
      "man_utd",
      "sporting",
      "al_nassr"
    ],
    "details": "Sporting CP, Man Utd, Real Madrid, Juventus, Al Nassr"
  },
  {
    "id": "l_messi",
    "name": "Lionel Messi",
    "position": "Forvet",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "LM10",
    "avatarBg": "from-sky-400 to-purple-600",
    "teamsPlayed": [
      "barcelona",
      "psg",
      "inter_miami"
    ],
    "details": "FC Barcelona (2004-2021), PSG (2021-2023), Inter Miami"
  },
  {
    "id": "neymar_jr",
    "name": "Neymar Jr",
    "position": "Sol Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "NJ10",
    "avatarBg": "from-yellow-400 to-green-600",
    "teamsPlayed": [
      "barcelona",
      "psg",
      "al_hilal",
      "santos"
    ],
    "details": "FC Barcelona, PSG, Al Hilal"
  },
  {
    "id": "k_mbappe",
    "name": "Kylian Mbappé",
    "position": "Santrafor / Kanat",
    "nationality": "Fransa 🇫🇷",
    "avatar": "KM9",
    "avatarBg": "from-blue-600 to-amber-500",
    "teamsPlayed": [
      "monaco",
      "psg",
      "real_madrid"
    ],
    "details": "AS Monaco, PSG, Real Madrid (2024-günümüz)"
  },
  {
    "id": "e_haaland",
    "name": "Erling Haaland",
    "position": "Santrafor",
    "nationality": "Norveç 🇳🇴",
    "avatar": "EH9",
    "avatarBg": "from-yellow-400 to-cyan-500",
    "teamsPlayed": [
      "dortmund",
      "man_city",
      "rb_leipzig"
    ],
    "details": "RB Salzburg, Borussia Dortmund, Manchester City"
  },
  {
    "id": "j_bellingham",
    "name": "Jude Bellingham",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "JB5",
    "avatarBg": "from-amber-400 to-slate-900",
    "teamsPlayed": [
      "dortmund",
      "real_madrid"
    ],
    "details": "Borussia Dortmund (2020-2023), Real Madrid (2023-günümüz)"
  },
  {
    "id": "vinicius_jr",
    "name": "Vinícius Júnior",
    "position": "Sol Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "V7",
    "avatarBg": "from-amber-400 to-purple-600",
    "teamsPlayed": [
      "real_madrid",
      "flamengo"
    ],
    "details": "Real Madrid (2018-günümüz)"
  },
  {
    "id": "k_benzema",
    "name": "Karim Benzema",
    "position": "Santrafor",
    "nationality": "Fransa 🇫🇷",
    "avatar": "KB9",
    "avatarBg": "from-slate-700 to-amber-500",
    "teamsPlayed": [
      "real_madrid",
      "al_ittihad",
      "lyon"
    ],
    "details": "Real Madrid efsanesi (2009-2023)"
  },
  {
    "id": "z_ibrahimovic",
    "name": "Zlatan Ibrahimović",
    "position": "Santrafor",
    "nationality": "İsveç 🇸🇪",
    "avatar": "ZI",
    "avatarBg": "from-yellow-400 to-blue-600",
    "teamsPlayed": [
      "juventus",
      "inter",
      "ac_milan",
      "barcelona",
      "psg",
      "man_utd",
      "ajax",
      "la_galaxy"
    ],
    "details": "Ajax, Juventus, Inter, AC Milan, Barcelona, PSG, Man Utd"
  },
  {
    "id": "a_di_maria",
    "name": "Ángel Di María",
    "position": "Sağ Kanat",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "ADM",
    "avatarBg": "from-sky-400 to-blue-700",
    "teamsPlayed": [
      "real_madrid",
      "juventus",
      "psg",
      "man_utd",
      "benfica"
    ],
    "details": "Benfica, Real Madrid, Man Utd, PSG, Juventus"
  },
  {
    "id": "g_higuain",
    "name": "Gonzalo Higuaín",
    "position": "Santrafor",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "GH",
    "avatarBg": "from-blue-600 to-slate-800",
    "teamsPlayed": [
      "real_madrid",
      "juventus",
      "ac_milan",
      "chelsea",
      "napoli",
      "inter_miami",
      "river_plate"
    ],
    "details": "Real Madrid, Napoli, Juventus, AC Milan, Chelsea, Inter Miami"
  },
  {
    "id": "a_morata",
    "name": "Álvaro Morata",
    "position": "Santrafor",
    "nationality": "İspanya 🇪🇸",
    "avatar": "AM",
    "avatarBg": "from-red-600 to-yellow-500",
    "teamsPlayed": [
      "real_madrid",
      "juventus",
      "chelsea",
      "ac_milan",
      "atletico"
    ],
    "details": "Real Madrid, Juventus, Chelsea, Atletico Madrid, AC Milan"
  },
  {
    "id": "l_figo",
    "name": "Luís Figo",
    "position": "Sağ Kanat",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "LF",
    "avatarBg": "from-purple-600 to-red-600",
    "teamsPlayed": [
      "barcelona",
      "real_madrid",
      "inter",
      "sporting"
    ],
    "details": "Sporting CP, FC Barcelona, Real Madrid, Inter Milan"
  },
  {
    "id": "r_ronaldinho",
    "name": "Ronaldinho Gaúcho",
    "position": "Ofansif Orta Saha",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "R10",
    "avatarBg": "from-yellow-400 to-green-600",
    "teamsPlayed": [
      "psg",
      "barcelona",
      "ac_milan",
      "flamengo"
    ],
    "details": "PSG, FC Barcelona, AC Milan"
  },
  {
    "id": "kaka",
    "name": "Kaká",
    "position": "Ofansif Orta Saha",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "K8",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "ac_milan",
      "real_madrid"
    ],
    "details": "AC Milan (2003-2009), Real Madrid (2009-2013)"
  },
  {
    "id": "x_alonso",
    "name": "Xabi Alonso",
    "position": "Ön Libero",
    "nationality": "İspanya 🇪🇸",
    "avatar": "XA",
    "avatarBg": "from-red-700 to-blue-900",
    "teamsPlayed": [
      "real_madrid",
      "bayern",
      "liverpool",
      "real_sociedad"
    ],
    "details": "Liverpool, Real Madrid, Bayern München"
  },
  {
    "id": "a_pirlo",
    "name": "Andrea Pirlo",
    "position": "Orta Saha",
    "nationality": "İtalya 🇮🇹",
    "avatar": "AP",
    "avatarBg": "from-blue-900 to-slate-900",
    "teamsPlayed": [
      "inter",
      "ac_milan",
      "juventus"
    ],
    "details": "Inter Milan, AC Milan, Juventus"
  },
  {
    "id": "d_beckham",
    "name": "David Beckham",
    "position": "Sağ Kanat",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "DB7",
    "avatarBg": "from-red-600 to-amber-400",
    "teamsPlayed": [
      "man_utd",
      "real_madrid",
      "ac_milan",
      "psg",
      "la_galaxy"
    ],
    "details": "Manchester United, Real Madrid, LA Galaxy"
  },
  {
    "id": "t_thierry_henry",
    "name": "Thierry Henry",
    "position": "Santrafor",
    "nationality": "Fransa 🇫🇷",
    "avatar": "TH14",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "monaco",
      "juventus",
      "arsenal",
      "barcelona"
    ],
    "details": "Monaco, Juventus, Arsenal, FC Barcelona"
  },
  {
    "id": "n_canales_sneijder",
    "name": "Wesley Sneijder",
    "position": "Ofansif Orta Saha",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "WS10",
    "avatarBg": "from-orange-500 to-red-700",
    "teamsPlayed": [
      "ajax",
      "real_madrid",
      "inter",
      "galatasaray"
    ],
    "details": "Ajax, Real Madrid, Inter Milan, Galatasaray"
  },
  {
    "id": "d_drogba",
    "name": "Didier Drogba",
    "position": "Santrafor",
    "nationality": "Fildişi Sahili 🇨🇮",
    "avatar": "DD11",
    "avatarBg": "from-blue-700 to-orange-500",
    "teamsPlayed": [
      "marseille",
      "chelsea",
      "galatasaray"
    ],
    "details": "Marseille, Chelsea, Galatasaray"
  },
  {
    "id": "m_ozil",
    "name": "Mesut Özil",
    "position": "Ofansif Orta Saha",
    "nationality": "Almanya 🇩🇪",
    "avatar": "MÖ10",
    "avatarBg": "from-amber-400 to-red-600",
    "teamsPlayed": [
      "real_madrid",
      "arsenal",
      "fenerbahce",
      "basaksehir",
      "schalke"
    ],
    "details": "Real Madrid, Arsenal, Fenerbahçe"
  },
  {
    "id": "r_van_persie",
    "name": "Robin van Persie",
    "position": "Santrafor",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "RVP",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "feyenoord",
      "arsenal",
      "man_utd",
      "fenerbahce"
    ],
    "details": "Arsenal, Manchester United, Fenerbahçe"
  },
  {
    "id": "n_anelka",
    "name": "Nicolas Anelka",
    "position": "Santrafor",
    "nationality": "Fransa 🇫🇷",
    "avatar": "NA39",
    "avatarBg": "from-blue-600 to-slate-800",
    "teamsPlayed": [
      "psg",
      "arsenal",
      "real_madrid",
      "fenerbahce",
      "chelsea",
      "juventus",
      "liverpool",
      "man_city"
    ],
    "details": "PSG, Arsenal, Real Madrid, Liverpool, Man City, Fenerbahçe, Chelsea, Juventus"
  },
  {
    "id": "p_coutinho",
    "name": "Philippe Coutinho",
    "position": "Ofansif Orta Saha",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "PC10",
    "avatarBg": "from-blue-600 to-red-600",
    "teamsPlayed": [
      "inter",
      "liverpool",
      "barcelona",
      "bayern",
      "aston_villa"
    ],
    "details": "Inter, Liverpool, FC Barcelona, Bayern, Aston Villa"
  },
  {
    "id": "a_vidal",
    "name": "Arturo Vidal",
    "position": "Orta Saha",
    "nationality": "Şili 🇨🇱",
    "avatar": "AV22",
    "avatarBg": "from-red-600 to-slate-900",
    "teamsPlayed": [
      "leverkusen",
      "juventus",
      "bayern",
      "barcelona",
      "inter",
      "flamengo"
    ],
    "details": "Bayer Leverkusen, Juventus, Bayern, Barcelona, Inter"
  },
  {
    "id": "r_lewandowski",
    "name": "Robert Lewandowski",
    "position": "Santrafor",
    "nationality": "Polonya 🇵🇱",
    "avatar": "RL9",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "dortmund",
      "bayern",
      "barcelona"
    ],
    "details": "Borussia Dortmund, Bayern München, FC Barcelona"
  },
  {
    "id": "e_hazard",
    "name": "Eden Hazard",
    "position": "Sol Kanat",
    "nationality": "Belçika 🇧🇪",
    "avatar": "EH7",
    "avatarBg": "from-blue-600 to-purple-600",
    "teamsPlayed": [
      "lille",
      "chelsea",
      "real_madrid"
    ],
    "details": "Chelsea FC, Real Madrid"
  },
  {
    "id": "a_sanchez",
    "name": "Alexis Sánchez",
    "position": "Forvet",
    "nationality": "Şili 🇨🇱",
    "avatar": "AS7",
    "avatarBg": "from-red-600 to-blue-700",
    "teamsPlayed": [
      "barcelona",
      "arsenal",
      "man_utd",
      "inter",
      "marseille",
      "river_plate"
    ],
    "details": "FC Barcelona, Arsenal, Man Utd, Inter, Marseille"
  },
  {
    "id": "l_suarez",
    "name": "Luis Suárez",
    "position": "Santrafor",
    "nationality": "Uruguay 🇺🇾",
    "avatar": "LS9",
    "avatarBg": "from-sky-500 to-blue-800",
    "teamsPlayed": [
      "ajax",
      "liverpool",
      "barcelona",
      "atletico",
      "inter_miami"
    ],
    "details": "Ajax, Liverpool, Barcelona, Atletico Madrid, Inter Miami"
  },
  {
    "id": "f_torres",
    "name": "Fernando Torres",
    "position": "Santrafor",
    "nationality": "İspanya 🇪🇸",
    "avatar": "FT9",
    "avatarBg": "from-red-600 to-slate-900",
    "teamsPlayed": [
      "atletico",
      "liverpool",
      "chelsea",
      "ac_milan"
    ],
    "details": "Atletico Madrid, Liverpool, Chelsea, AC Milan"
  },
  {
    "id": "g_bale",
    "name": "Gareth Bale",
    "position": "Sağ Kanat",
    "nationality": "Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "avatar": "GB11",
    "avatarBg": "from-white to-amber-500",
    "teamsPlayed": [
      "tottenham",
      "real_madrid",
      "la_galaxy"
    ],
    "details": "Tottenham Hotspur, Real Madrid"
  },
  {
    "id": "l_modric",
    "name": "Luka Modrić",
    "position": "Orta Saha",
    "nationality": "Hırvatistan 🇭🇷",
    "avatar": "LM10",
    "avatarBg": "from-red-600 to-blue-700",
    "teamsPlayed": [
      "tottenham",
      "real_madrid"
    ],
    "details": "Tottenham Hotspur, Real Madrid (2012-günümüz)"
  },
  {
    "id": "k_de_bruyne",
    "name": "Kevin De Bruyne",
    "position": "Orta Saha",
    "nationality": "Belçika 🇧🇪",
    "avatar": "KDB",
    "avatarBg": "from-sky-400 to-blue-600",
    "teamsPlayed": [
      "chelsea",
      "man_city",
      "wolfsburg"
    ],
    "details": "Chelsea, Manchester City"
  },
  {
    "id": "m_salah",
    "name": "Mohamed Salah",
    "position": "Sağ Kanat",
    "nationality": "Mısır 🇪🇬",
    "avatar": "MO11",
    "avatarBg": "from-red-600 to-amber-500",
    "teamsPlayed": [
      "chelsea",
      "fiorentina",
      "roma",
      "liverpool"
    ],
    "details": "Chelsea, Fiorentina, AS Roma, Liverpool"
  },
  {
    "id": "c_fabregas",
    "name": "Cesc Fàbregas",
    "position": "Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "CF4",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "arsenal",
      "barcelona",
      "chelsea",
      "monaco"
    ],
    "details": "Arsenal, FC Barcelona, Chelsea, Monaco"
  },
  {
    "id": "p_aubameyang",
    "name": "Pierre-Emerick Aubameyang",
    "position": "Santrafor",
    "nationality": "Gabon 🇬🇦",
    "avatar": "PEA",
    "avatarBg": "from-yellow-500 to-red-600",
    "teamsPlayed": [
      "ac_milan",
      "monaco",
      "dortmund",
      "arsenal",
      "barcelona",
      "chelsea",
      "marseille",
      "lille"
    ],
    "details": "AC Milan, Dortmund, Arsenal, Barcelona, Chelsea, Marseille"
  },
  {
    "id": "i_gundogan",
    "name": "İlkay Gündoğan",
    "position": "Orta Saha",
    "nationality": "Almanya 🇩🇪",
    "avatar": "IG22",
    "avatarBg": "from-blue-600 to-red-600",
    "teamsPlayed": [
      "dortmund",
      "man_city",
      "barcelona"
    ],
    "details": "Borussia Dortmund, Manchester City, FC Barcelona"
  },
  {
    "id": "j_cancelo",
    "name": "João Cancelo",
    "position": "Sağ Bek / Sol Bek",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "JC7",
    "avatarBg": "from-blue-500 to-teal-600",
    "teamsPlayed": [
      "benfica",
      "valencia",
      "inter",
      "juventus",
      "man_city",
      "bayern",
      "barcelona",
      "al_hilal"
    ],
    "details": "Benfica, Valencia, Inter, Juventus, Man City, Bayern, Barcelona"
  },
  {
    "id": "r_falcao",
    "name": "Radamel Falcao",
    "position": "Santrafor",
    "nationality": "Kolombiya 🇨🇴",
    "avatar": "RF9",
    "avatarBg": "from-yellow-400 to-red-600",
    "teamsPlayed": [
      "porto",
      "atletico",
      "monaco",
      "man_utd",
      "chelsea",
      "galatasaray",
      "river_plate"
    ],
    "details": "Porto, Atletico Madrid, Monaco, Man Utd, Chelsea, Galatasaray"
  },
  {
    "id": "m_icardi",
    "name": "Mauro Icardi",
    "position": "Santrafor",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "MI9",
    "avatarBg": "from-amber-400 to-red-600",
    "teamsPlayed": [
      "inter",
      "psg",
      "galatasaray"
    ],
    "details": "Inter Milan, PSG, Galatasaray"
  },
  {
    "id": "m_pjanić",
    "name": "Miralem Pjanić",
    "position": "Orta Saha",
    "nationality": "Bosna Hersek 🇧🇦",
    "avatar": "MP15",
    "avatarBg": "from-blue-700 to-black",
    "teamsPlayed": [
      "roma",
      "juventus",
      "barcelona",
      "besiktas",
      "lyon"
    ],
    "details": "Lyon, AS Roma, Juventus, Barcelona, Beşiktaş"
  },
  {
    "id": "pepe",
    "name": "Pepe (Képler Laveran)",
    "position": "Stoper",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "P3",
    "avatarBg": "from-slate-800 to-red-700",
    "teamsPlayed": [
      "porto",
      "real_madrid",
      "besiktas"
    ],
    "details": "FC Porto, Real Madrid, Beşiktaş"
  },
  {
    "id": "r_quaresma",
    "name": "Ricardo Quaresma",
    "position": "Sağ Kanat",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "RQ7",
    "avatarBg": "from-purple-700 to-black",
    "teamsPlayed": [
      "sporting",
      "barcelona",
      "porto",
      "inter",
      "chelsea",
      "besiktas"
    ],
    "details": "Sporting CP, Barcelona, Porto, Inter, Chelsea, Beşiktaş"
  },
  {
    "id": "m_balotelli",
    "name": "Mario Balotelli",
    "position": "Santrafor",
    "nationality": "İtalya 🇮🇹",
    "avatar": "MB45",
    "avatarBg": "from-blue-600 to-red-600",
    "teamsPlayed": [
      "inter",
      "man_city",
      "ac_milan",
      "liverpool",
      "marseille"
    ],
    "details": "Inter, Man City, AC Milan, Liverpool, Marseille"
  },
  {
    "id": "v_osimhen",
    "name": "Victor Osimhen",
    "position": "Santrafor",
    "nationality": "Nijerya 🇳🇬",
    "avatar": "VO45",
    "avatarBg": "from-sky-400 to-amber-500",
    "teamsPlayed": [
      "napoli",
      "galatasaray",
      "wolfsburg",
      "lille"
    ],
    "details": "Lille, SSC Napoli, Galatasaray"
  },
  {
    "id": "h_kane",
    "name": "Harry Kane",
    "position": "Santrafor",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "HK9",
    "avatarBg": "from-red-600 to-blue-900",
    "teamsPlayed": [
      "tottenham",
      "bayern",
      "leicester"
    ],
    "details": "Tottenham Hotspur (2009-2023), Bayern München (2023-günümüz)"
  },
  {
    "id": "r_lukaku",
    "name": "Romelu Lukaku",
    "position": "Santrafor",
    "nationality": "Belçika 🇧🇪",
    "avatar": "RL9",
    "avatarBg": "from-blue-600 to-yellow-500",
    "teamsPlayed": [
      "chelsea",
      "man_utd",
      "inter",
      "roma",
      "napoli",
      "everton"
    ],
    "details": "Chelsea, Everton, Man Utd, Inter, AS Roma, Napoli"
  },
  {
    "id": "a_griezmann",
    "name": "Antoine Griezmann",
    "position": "Forvet",
    "nationality": "Fransa 🇫🇷",
    "avatar": "AG7",
    "avatarBg": "from-red-600 to-blue-700",
    "teamsPlayed": [
      "atletico",
      "barcelona",
      "real_sociedad"
    ],
    "details": "Real Sociedad, Atletico Madrid, FC Barcelona"
  },
  {
    "id": "t_courtois",
    "name": "Thibaut Courtois",
    "position": "Kaleci",
    "nationality": "Belçika 🇧🇪",
    "avatar": "TC1",
    "avatarBg": "from-amber-400 to-slate-900",
    "teamsPlayed": [
      "atletico",
      "chelsea",
      "real_madrid"
    ],
    "details": "Atletico Madrid, Chelsea, Real Madrid"
  },
  {
    "id": "s_mane",
    "name": "Sadio Mané",
    "position": "Sol Kanat",
    "nationality": "Senegal 🇸🇳",
    "avatar": "SM10",
    "avatarBg": "from-green-600 to-yellow-400",
    "teamsPlayed": [
      "liverpool",
      "bayern",
      "al_nassr"
    ],
    "details": "Southampton, Liverpool, Bayern München, Al Nassr"
  },
  {
    "id": "k_koulibaly",
    "name": "Kalidou Koulibaly",
    "position": "Stoper",
    "nationality": "Senegal 🇸🇳",
    "avatar": "KK26",
    "avatarBg": "from-sky-500 to-blue-800",
    "teamsPlayed": [
      "napoli",
      "chelsea",
      "al_hilal"
    ],
    "details": "Napoli, Chelsea, Al Hilal"
  },
  {
    "id": "r_sterling",
    "name": "Raheem Sterling",
    "position": "Kanat",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "RS7",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "liverpool",
      "man_city",
      "chelsea",
      "arsenal"
    ],
    "details": "Liverpool, Manchester City, Chelsea, Arsenal"
  },
  {
    "id": "g_jesus",
    "name": "Gabriel Jesus",
    "position": "Santrafor",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "GJ9",
    "avatarBg": "from-yellow-400 to-red-600",
    "teamsPlayed": [
      "man_city",
      "arsenal"
    ],
    "details": "Manchester City, Arsenal"
  },
  {
    "id": "b_silva",
    "name": "Bernardo Silva",
    "position": "Orta Saha",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "BS20",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "benfica",
      "monaco",
      "man_city"
    ],
    "details": "Benfica, AS Monaco, Manchester City"
  },
  {
    "id": "e_cavani",
    "name": "Edinson Cavani",
    "position": "Santrafor",
    "nationality": "Uruguay 🇺🇾",
    "avatar": "EC9",
    "avatarBg": "from-sky-400 to-blue-900",
    "teamsPlayed": [
      "napoli",
      "psg",
      "man_utd",
      "valencia",
      "boca_juniors"
    ],
    "details": "Palermo, Napoli, PSG, Manchester United, Valencia"
  },
  {
    "id": "t_silva",
    "name": "Thiago Silva",
    "position": "Stoper",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "TS6",
    "avatarBg": "from-blue-600 to-yellow-500",
    "teamsPlayed": [
      "ac_milan",
      "psg",
      "chelsea"
    ],
    "details": "AC Milan, PSG, Chelsea"
  },
  {
    "id": "d_alaba",
    "name": "David Alaba",
    "position": "Stoper / Sol Bek",
    "nationality": "Avusturya 🇦🇹",
    "avatar": "DA4",
    "avatarBg": "from-red-600 to-amber-400",
    "teamsPlayed": [
      "bayern",
      "real_madrid"
    ],
    "details": "Bayern München (2010-2021), Real Madrid (2021-günümüz)"
  },
  {
    "id": "k_coman",
    "name": "Kingsley Coman",
    "position": "Sol Kanat",
    "nationality": "Fransa 🇫🇷",
    "avatar": "KC11",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "psg",
      "juventus",
      "bayern"
    ],
    "details": "PSG, Juventus, Bayern München"
  },
  {
    "id": "l_sane",
    "name": "Leroy Sané",
    "position": "Sağ Kanat",
    "nationality": "Almanya 🇩🇪",
    "avatar": "LS10",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "man_city",
      "bayern",
      "schalke"
    ],
    "details": "Schalke 04, Manchester City, Bayern München"
  },
  {
    "id": "m_depay",
    "name": "Memphis Depay",
    "position": "Forvet",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "MD9",
    "avatarBg": "from-orange-500 to-red-700",
    "teamsPlayed": [
      "psv",
      "man_utd",
      "barcelona",
      "atletico",
      "lyon"
    ],
    "details": "PSV, Man Utd, Lyon, Barcelona, Atletico Madrid"
  },
  {
    "id": "d_dzeko",
    "name": "Edin Džeko",
    "position": "Santrafor",
    "nationality": "Bosna Hersek 🇧🇦",
    "avatar": "ED9",
    "avatarBg": "from-blue-700 to-yellow-400",
    "teamsPlayed": [
      "man_city",
      "roma",
      "inter",
      "fenerbahce",
      "wolfsburg"
    ],
    "details": "Wolfsburg, Manchester City, AS Roma, Inter, Fenerbahçe"
  },
  {
    "id": "d_tadic",
    "name": "Dušan Tadić",
    "position": "Sol Kanat",
    "nationality": "Sırbistan 🇸🇷",
    "avatar": "DT10",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "ajax",
      "fenerbahce"
    ],
    "details": "Southampton, Ajax, Fenerbahçe"
  },
  {
    "id": "fred",
    "name": "Fred",
    "position": "Orta Saha",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "F35",
    "avatarBg": "from-red-600 to-yellow-400",
    "teamsPlayed": [
      "man_utd",
      "fenerbahce"
    ],
    "details": "Manchester United, Fenerbahçe"
  },
  {
    "id": "w_zaha",
    "name": "Wilfred Zaha",
    "position": "Sol Kanat",
    "nationality": "Fildişi Sahili 🇨🇮",
    "avatar": "WZ14",
    "avatarBg": "from-red-600 to-yellow-500",
    "teamsPlayed": [
      "man_utd",
      "galatasaray",
      "lyon"
    ],
    "details": "Crystal Palace, Manchester United, Galatasaray, Lyon"
  },
  {
    "id": "g_fernandes",
    "name": "Gedson Fernandes",
    "position": "Orta Saha",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "GF83",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "benfica",
      "tottenham",
      "galatasaray",
      "besiktas"
    ],
    "details": "Benfica, Tottenham, Galatasaray, Beşiktaş"
  },
  {
    "id": "m_batshuayi",
    "name": "Michy Batshuayi",
    "position": "Santrafor",
    "nationality": "Belçika 🇧🇪",
    "avatar": "MB23",
    "avatarBg": "from-blue-600 to-amber-500",
    "teamsPlayed": [
      "marseille",
      "chelsea",
      "dortmund",
      "valencia",
      "besiktas",
      "fenerbahce",
      "galatasaray"
    ],
    "details": "Marseille, Chelsea, Dortmund, Valencia, Beşiktaş, Fenerbahçe, Galatasaray"
  },
  {
    "id": "c_immobile",
    "name": "Ciro Immobile",
    "position": "Santrafor",
    "nationality": "İtalya 🇮🇹",
    "avatar": "CI17",
    "avatarBg": "from-sky-400 to-black",
    "teamsPlayed": [
      "juventus",
      "dortmund",
      "sevilla",
      "lazio",
      "besiktas"
    ],
    "details": "Juventus, Dortmund, Sevilla, Lazio, Beşiktaş"
  },
  {
    "id": "c_casemiro",
    "name": "Casemiro",
    "position": "Ön Libero",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "CASE",
    "avatarBg": "from-amber-400 to-red-600",
    "teamsPlayed": [
      "porto",
      "real_madrid",
      "man_utd"
    ],
    "details": "FC Porto, Real Madrid (2013-2022), Manchester United"
  },
  {
    "id": "m_kovacic",
    "name": "Mateo Kovačić",
    "position": "Orta Saha",
    "nationality": "Hırvatistan 🇭🇷",
    "avatar": "MK8",
    "avatarBg": "from-blue-600 to-sky-400",
    "teamsPlayed": [
      "inter",
      "real_madrid",
      "chelsea",
      "man_city"
    ],
    "details": "Inter Milan, Real Madrid, Chelsea, Manchester City"
  },
  {
    "id": "p_pogba",
    "name": "Paul Pogba",
    "position": "Orta Saha",
    "nationality": "Fransa 🇫🇷",
    "avatar": "PP6",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "man_utd",
      "juventus"
    ],
    "details": "Manchester United, Juventus"
  },
  {
    "id": "c_eriksen",
    "name": "Christian Eriksen",
    "position": "Orta Saha",
    "nationality": "Danimarka 🇩🇰",
    "avatar": "CE14",
    "avatarBg": "from-red-600 to-blue-900",
    "teamsPlayed": [
      "ajax",
      "tottenham",
      "inter",
      "man_utd"
    ],
    "details": "Ajax, Tottenham, Inter Milan, Manchester United"
  },
  {
    "id": "w_rooney",
    "name": "Wayne Rooney",
    "position": "Santrafor",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "WR10",
    "avatarBg": "from-red-600 to-slate-900",
    "teamsPlayed": [
      "man_utd",
      "everton"
    ],
    "details": "Everton, Manchester United efsanesi (2004-2017)"
  },
  {
    "id": "f_lampard",
    "name": "Frank Lampard",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "FL8",
    "avatarBg": "from-blue-700 to-sky-400",
    "teamsPlayed": [
      "chelsea",
      "man_city",
      "west_ham"
    ],
    "details": "Chelsea efsanesi, Manchester City"
  },
  {
    "id": "s_gerrard",
    "name": "Steven Gerrard",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "SG8",
    "avatarBg": "from-red-600 to-amber-400",
    "teamsPlayed": [
      "liverpool",
      "la_galaxy"
    ],
    "details": "Liverpool efsanesi (1998-2015)"
  },
  {
    "id": "f_cannavaro",
    "name": "Fabio Cannavaro",
    "position": "Stoper",
    "nationality": "İtalya 🇮🇹",
    "avatar": "FC5",
    "avatarBg": "from-blue-600 to-amber-400",
    "teamsPlayed": [
      "napoli",
      "inter",
      "juventus",
      "real_madrid"
    ],
    "details": "Napoli, Parma, Inter, Juventus, Real Madrid"
  },
  {
    "id": "h_crespo",
    "name": "Hernán Crespo",
    "position": "Santrafor",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "HC9",
    "avatarBg": "from-blue-600 to-red-600",
    "teamsPlayed": [
      "lazio",
      "inter",
      "chelsea",
      "ac_milan",
      "river_plate"
    ],
    "details": "Parma, Lazio, Inter, Chelsea, AC Milan"
  },
  {
    "id": "s_aguero",
    "name": "Sergio Agüero",
    "position": "Santrafor",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "SA10",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "atletico",
      "man_city",
      "barcelona"
    ],
    "details": "Atletico Madrid, Manchester City, FC Barcelona"
  },
  {
    "id": "c_tevez",
    "name": "Carlos Tévez",
    "position": "Santrafor",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "CT32",
    "avatarBg": "from-blue-600 to-black",
    "teamsPlayed": [
      "man_utd",
      "man_city",
      "juventus",
      "boca_juniors",
      "west_ham"
    ],
    "details": "West Ham, Man Utd, Man City, Juventus"
  },
  {
    "id": "g_buffon",
    "name": "Gianluigi Buffon",
    "position": "Kaleci",
    "nationality": "İtalya 🇮🇹",
    "avatar": "Gigi",
    "avatarBg": "from-black to-blue-700",
    "teamsPlayed": [
      "juventus",
      "psg"
    ],
    "details": "Parma, Juventus, PSG"
  },
  {
    "id": "k_navas",
    "name": "Keylor Navas",
    "position": "Kaleci",
    "nationality": "Kosta Rika 🇨🇷",
    "avatar": "KN1",
    "avatarBg": "from-white to-blue-700",
    "teamsPlayed": [
      "real_madrid",
      "psg"
    ],
    "details": "Real Madrid (2014-2019), PSG (2019-2024)"
  },
  {
    "id": "james_rodriguez",
    "name": "James Rodríguez",
    "position": "Ofansif Orta Saha",
    "nationality": "Kolombiya 🇨🇴",
    "avatar": "JR10",
    "avatarBg": "from-yellow-400 to-red-600",
    "teamsPlayed": [
      "porto",
      "monaco",
      "real_madrid",
      "bayern",
      "everton"
    ],
    "details": "Porto, Monaco, Real Madrid, Bayern München, Everton"
  },
  {
    "id": "burak_yilmaz",
    "name": "Burak Yılmaz",
    "position": "Santrafor",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "BY17",
    "avatarBg": "from-red-600 to-amber-500",
    "teamsPlayed": [
      "besiktas",
      "fenerbahce",
      "trabzonspor",
      "galatasaray",
      "lille"
    ],
    "details": "Beşiktaş, Fenerbahçe, Trabzonspor, Galatasaray, Lille (Fransa Şampiyonu)"
  },
  {
    "id": "sergen_yalcin",
    "name": "Sergen Yalçın",
    "position": "10 Numara",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "SY10",
    "avatarBg": "from-black to-red-600",
    "teamsPlayed": [
      "besiktas",
      "fenerbahce",
      "trabzonspor",
      "galatasaray"
    ],
    "details": "Beşiktaş, Fenerbahçe, Trabzonspor, Galatasaray efsanesi"
  },
  {
    "id": "nathan_ake",
    "name": "Nathan Aké",
    "position": "Stoper / Sol Bek",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "NA6",
    "avatarBg": "from-sky-400 to-blue-800",
    "teamsPlayed": [
      "chelsea",
      "man_city"
    ],
    "details": "Chelsea, Bournemouth, Manchester City"
  },
  {
    "id": "arda_turan",
    "name": "Arda Turan",
    "position": "Sol Kanat",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "AT10",
    "avatarBg": "from-red-600 to-blue-700",
    "teamsPlayed": [
      "galatasaray",
      "atletico",
      "barcelona",
      "basaksehir"
    ],
    "details": "Galatasaray, Atletico Madrid, FC Barcelona"
  },
  {
    "id": "emre_belozoglu",
    "name": "Emre Belözoğlu",
    "position": "Orta Saha",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "EB5",
    "avatarBg": "from-blue-600 to-yellow-500",
    "teamsPlayed": [
      "galatasaray",
      "inter",
      "newcastle",
      "fenerbahce",
      "atletico",
      "basaksehir"
    ],
    "details": "Galatasaray, Inter Milan, Newcastle, Fenerbahçe, Atletico Madrid"
  },
  {
    "id": "mehmet_topal",
    "name": "Mehmet Topal",
    "position": "Ön Libero",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "MT5",
    "avatarBg": "from-red-600 to-blue-900",
    "teamsPlayed": [
      "galatasaray",
      "valencia",
      "fenerbahce",
      "besiktas",
      "basaksehir"
    ],
    "details": "Galatasaray, Valencia, Fenerbahçe, Beşiktaş"
  },
  {
    "id": "caner_erkin",
    "name": "Caner Erkin",
    "position": "Sol Bek",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "CE88",
    "avatarBg": "from-yellow-400 to-black",
    "teamsPlayed": [
      "galatasaray",
      "fenerbahce",
      "inter",
      "besiktas",
      "basaksehir"
    ],
    "details": "Galatasaray, Fenerbahçe, Inter Milan, Beşiktaş"
  },
  {
    "id": "gokhan_gonul",
    "name": "Gökhan Gönül",
    "position": "Sağ Bek",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "GG77",
    "avatarBg": "from-blue-600 to-yellow-400",
    "teamsPlayed": [
      "fenerbahce",
      "besiktas"
    ],
    "details": "Fenerbahçe, Beşiktaş"
  },
  {
    "id": "hakan_calhanoglu",
    "name": "Hakan Çalhanoğlu",
    "position": "Orta Saha",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "HÇ20",
    "avatarBg": "from-blue-600 to-black",
    "teamsPlayed": [
      "leverkusen",
      "ac_milan",
      "inter"
    ],
    "details": "Bayer Leverkusen, AC Milan, Inter Milan"
  },
  {
    "id": "cenk_tosun",
    "name": "Cenk Tosun",
    "position": "Santrafor",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "CT23",
    "avatarBg": "from-black to-red-600",
    "teamsPlayed": [
      "besiktas",
      "everton",
      "fenerbahce",
      "frankfurt"
    ],
    "details": "Beşiktaş, Everton, Fenerbahçe"
  },
  {
    "id": "rustu_recber",
    "name": "Rüştü Reçber",
    "position": "Kaleci",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "RR1",
    "avatarBg": "from-yellow-400 to-blue-900",
    "teamsPlayed": [
      "fenerbahce",
      "barcelona",
      "besiktas"
    ],
    "details": "Fenerbahçe, FC Barcelona, Beşiktaş"
  },
  {
    "id": "selcuk_inan",
    "name": "Selçuk İnan",
    "position": "Orta Saha",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "Sİ8",
    "avatarBg": "from-red-600 to-amber-500",
    "teamsPlayed": [
      "trabzonspor",
      "galatasaray"
    ],
    "details": "Trabzonspor, Galatasaray efsanesi"
  },
  {
    "id": "kazim_kazim",
    "name": "Colin Kazım-Richards",
    "position": "Sağ Kanat",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "KK99",
    "avatarBg": "from-yellow-400 to-red-600",
    "teamsPlayed": [
      "fenerbahce",
      "galatasaray",
      "feyenoord",
      "celtic"
    ],
    "details": "Fenerbahçe, Galatasaray, Feyenoord"
  },
  {
    "id": "alisson",
    "name": "Alisson Becker",
    "position": "Kaleci",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "AB1",
    "avatarBg": "from-purple-400 to-gold-600",
    "teamsPlayed": [
      "liverpool",
      "roma"
    ],
    "details": "Liverpool"
  },
  {
    "id": "david_de_gea",
    "name": "David de Gea",
    "position": "Kaleci",
    "nationality": "İspanya 🇪🇸",
    "avatar": "DG1",
    "avatarBg": "from-blue-700 to-white",
    "teamsPlayed": [
      "man_utd",
      "atletico",
      "fiorentina"
    ],
    "details": "Manchester United"
  },
  {
    "id": "virgil_van_dijk",
    "name": "Virgil van Dijk",
    "position": "Stoper",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "VD1",
    "avatarBg": "from-yellow-400 to-black",
    "teamsPlayed": [
      "liverpool",
      "celtic"
    ],
    "details": "Liverpool"
  },
  {
    "id": "andre_onana",
    "name": "André Onana",
    "position": "Kaleci",
    "nationality": "Kamerun 🇨🇲",
    "avatar": "AO1",
    "avatarBg": "from-green-500 to-black",
    "teamsPlayed": [
      "inter_miami",
      "man_utd",
      "ajax",
      "inter"
    ],
    "details": "Manchester United, Inter Miami"
  },
  {
    "id": "marcelo",
    "name": "Marcelo",
    "position": "Sol Bek",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "MC1",
    "avatarBg": "from-green-500 to-black",
    "teamsPlayed": [
      "real_madrid",
      "marseille"
    ],
    "details": "Real Madrid, Olympique Marseille"
  },
  {
    "id": "sergio_ramos",
    "name": "Sergio Ramos",
    "position": "Stoper",
    "nationality": "İspanya 🇪🇸",
    "avatar": "SR9",
    "avatarBg": "from-grey-500 to-red-600",
    "teamsPlayed": [
      "real_madrid",
      "psg",
      "sevilla"
    ],
    "details": "Real Madrid, Paris Saint-Germain"
  },
  {
    "id": "marco_reus",
    "name": "Marco Reus",
    "position": "Orta Saha",
    "nationality": "Almanya 🇩🇪",
    "avatar": "MR9",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "dortmund",
      "monchengladbach",
      "la_galaxy"
    ],
    "details": "Borussia Dortmund efsanesi (2012-2024)"
  },
  {
    "id": "fabian_di_maria",
    "name": "Fabian Di María",
    "position": "Sağ Kanat",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "FD9",
    "avatarBg": "from-sky-400 to-blue-700",
    "teamsPlayed": [
      "monaco",
      "real_madrid",
      "psg"
    ],
    "details": "AS Monaco, Real Madrid, PSG"
  },
  {
    "id": "martin_odegaard",
    "name": "Martin Ødegaard",
    "position": "Orta Saha",
    "nationality": "Norveç 🇳🇴",
    "avatar": "MO9",
    "avatarBg": "from-red-600 to-grey-500",
    "teamsPlayed": [
      "arsenal",
      "real_madrid",
      "real_sociedad"
    ],
    "details": "Arsenal"
  },
  {
    "id": "kieran_trippier",
    "name": "Kieran Trippier",
    "position": "Sağ Bek",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "KT1",
    "avatarBg": "from-blue-600 to-white",
    "teamsPlayed": [
      "newcastle",
      "tottenham",
      "atletico"
    ],
    "details": "Tottenham, Atletico Madrid, Newcastle United"
  },
  {
    "id": "timo_werner",
    "name": "Timo Werner",
    "position": "Santrafor",
    "nationality": "Almanya 🇩🇪",
    "avatar": "TW9",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "rb_leipzig",
      "chelsea",
      "stuttgart",
      "tottenham"
    ],
    "details": "RB Leipzig, Chelsea"
  },
  {
    "id": "mason_mount",
    "name": "Mason Mount",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "MM1",
    "avatarBg": "from-sky-400 to-green-600",
    "teamsPlayed": [
      "chelsea",
      "man_utd"
    ],
    "details": "Chelsea, Manchester United"
  },
  {
    "id": "karim_zidane",
    "name": "Zinedine Zidane",
    "position": "Orta Saha",
    "nationality": "Fransa 🇫🇷",
    "avatar": "ZD",
    "avatarBg": "from-blue-600 to-purple-600",
    "teamsPlayed": [
      "juventus",
      "real_madrid"
    ],
    "details": "Bordeaux, Juventus, Real Madrid"
  },
  {
    "id": "g_guti",
    "name": "José María Gutiérrez (Guti)",
    "position": "Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "GG",
    "avatarBg": "from-purple-700 to-red-600",
    "teamsPlayed": [
      "real_madrid",
      "besiktas"
    ],
    "details": "Real Madrid legend, Beşiktaş"
  },
  {
    "id": "r_nazario",
    "name": "Ronaldo Nazário",
    "position": "Forvet",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "RN",
    "avatarBg": "from-yellow-500 to-red-600",
    "teamsPlayed": [
      "real_madrid",
      "inter_miami",
      "ac_milan",
      "barcelona",
      "inter",
      "psv"
    ],
    "details": "FC Barcelona, Inter, Real Madrid, AC Milan, Corinthians"
  },
  {
    "id": "o_dembele",
    "name": "Ousmane Dembélé",
    "position": "Sol Kanat",
    "nationality": "Fransa 🇫🇷",
    "avatar": "OD11",
    "avatarBg": "from-purple-500 to-blue-600",
    "teamsPlayed": [
      "barcelona",
      "psg",
      "rennes",
      "dortmund"
    ],
    "details": "FC Barcelona, PSG"
  },
  {
    "id": "joao_neves",
    "name": "João Neves",
    "position": "Orta Saha",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "JN8",
    "avatarBg": "from-green-400 to-sky-500",
    "teamsPlayed": [
      "benfica",
      "psg"
    ],
    "details": "Benfica genç yeteneği"
  },
  {
    "id": "j_kounde",
    "name": "Jules Koundé",
    "position": "Stoper / Sağ Bek",
    "nationality": "Fransa 🇫🇷",
    "avatar": "JK22",
    "avatarBg": "from-blue-600 to-black",
    "teamsPlayed": [
      "sevilla",
      "barcelona"
    ],
    "details": "Sevilla, FC Barcelona"
  },
  {
    "id": "ferran_torres",
    "name": "Ferran Torres",
    "position": "Forvet",
    "nationality": "İspanya 🇪🇸",
    "avatar": "FT11",
    "avatarBg": "from-red-500 to-sky-500",
    "teamsPlayed": [
      "valencia",
      "man_city",
      "barcelona",
      "atletico",
      "liverpool",
      "chelsea",
      "ac_milan"
    ],
    "details": "Valencia, Manchester City, FC Barcelona"
  },
  {
    "id": "rodri",
    "name": "Rodri",
    "position": "Ön Libero",
    "nationality": "İspanya 🇪🇸",
    "avatar": "RD16",
    "avatarBg": "from-amber-400 to-slate-700",
    "teamsPlayed": [
      "man_city",
      "villarreal",
      "atletico"
    ],
    "details": "Manchester City"
  },
  {
    "id": "julian_alvarez",
    "name": "Julián Álvarez",
    "position": "Forvet",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "JA9",
    "avatarBg": "from-red-600 to-white",
    "teamsPlayed": [
      "man_city",
      "river_plate",
      "atletico"
    ],
    "details": "Manchester City"
  },
  {
    "id": "thomas_lemar",
    "name": "Thomas Lemar",
    "position": "Kanat",
    "nationality": "Fransa 🇫🇷",
    "avatar": "TL11",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "atletico",
      "monaco"
    ],
    "details": "Atlético Madrid"
  },
  {
    "id": "ricardo_rodriguez",
    "name": "Ricardo Rodríguez",
    "position": "Sol Bek",
    "nationality": "İsviçre 🇨🇭",
    "avatar": "RR13",
    "avatarBg": "from-green-500 to-slate-700",
    "teamsPlayed": [
      "psg",
      "ac_milan",
      "wolfsburg",
      "psv"
    ],
    "details": "PSG, AC Milan"
  },
  {
    "id": "raphael_varane",
    "name": "Raphaël Varane",
    "position": "Stoper",
    "nationality": "Fransa 🇫🇷",
    "avatar": "RV19",
    "avatarBg": "from-white to-red-600",
    "teamsPlayed": [
      "real_madrid",
      "man_utd"
    ],
    "details": "Real Madrid (2011-2021), Manchester United (2021-2024)"
  },
  {
    "id": "ivan_perisic",
    "name": "Ivan Perišić",
    "position": "Kanat",
    "nationality": "Hırvatistan 🇭🇷",
    "avatar": "IP44",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "inter",
      "dortmund",
      "wolfsburg",
      "bayern",
      "tottenham",
      "psv"
    ],
    "details": "Inter Milan"
  },
  {
    "id": "oleksandr_zinchenko",
    "name": "Oleksandr Zinchenko",
    "position": "Sol Bek",
    "nationality": "Ukrayna 🇺🇦",
    "avatar": "OZ11",
    "avatarBg": "from-yellow-400 to-sky-500",
    "teamsPlayed": [
      "man_city",
      "arsenal",
      "psv"
    ],
    "details": "Manchester City, Arsenal"
  },
  {
    "id": "gianluigi_donnarumma",
    "name": "Gianluigi Donnarumma",
    "position": "Kaleci",
    "nationality": "İtalya 🇮🇹",
    "avatar": "GD99",
    "avatarBg": "from-black to-red-600",
    "teamsPlayed": [
      "psg",
      "ac_milan"
    ],
    "details": "Paris Saint-Germain"
  },
  {
    "id": "pedro_neto",
    "name": "Pedro Neto",
    "position": "Kanat",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "PN7",
    "avatarBg": "from-red-600 to-sky-500",
    "teamsPlayed": [
      "lazio",
      "chelsea"
    ],
    "details": "Wolverhampton Wanderers"
  },
  {
    "id": "richarlison",
    "name": "Richarlison",
    "position": "Forvet",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "RC9",
    "avatarBg": "from-green-500 to-yellow-400",
    "teamsPlayed": [
      "tottenham",
      "everton"
    ],
    "details": "Tottenham, Everton"
  },
  {
    "id": "bruno_fernandes",
    "name": "Bruno Fernandes",
    "position": "Orta Saha",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "BF18",
    "avatarBg": "from-amber-400 to-red-600",
    "teamsPlayed": [
      "man_utd",
      "sporting"
    ],
    "details": "Manchester United"
  },
  {
    "id": "kai_havertz",
    "name": "Kai Havertz",
    "position": "Forvet",
    "nationality": "Almanya 🇩🇪",
    "avatar": "KH29",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "arsenal",
      "chelsea",
      "leverkusen"
    ],
    "details": "Chelsea, Arsenal"
  },
  {
    "id": "dominik_szoboszlai",
    "name": "Dominik Szoboszlai",
    "position": "Orta Saha",
    "nationality": "Macaristan 🇭🇺",
    "avatar": "DS10",
    "avatarBg": "from-red-600 to-gold-400",
    "teamsPlayed": [
      "liverpool",
      "rb_leipzig"
    ],
    "details": "RB Salzburg, Liverpool"
  },
  {
    "id": "youssef_en_nesyri",
    "name": "Youssef En-Nesyri",
    "position": "Santrafor",
    "nationality": "Fas 🇲🇦",
    "avatar": "YN9",
    "avatarBg": "from-red-600 to-green-700",
    "teamsPlayed": [
      "sevilla",
      "fenerbahce"
    ],
    "details": "Sevilla FC"
  },
  {
    "id": "matthijs_de_ligt",
    "name": "Matthijs de Ligt",
    "position": "Stoper",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "MD4",
    "avatarBg": "from-white to-black",
    "teamsPlayed": [
      "bayern",
      "juventus",
      "ajax",
      "man_utd"
    ],
    "details": "Juventus, Bayern"
  },
  {
    "id": "rodrygo",
    "name": "Rodrygo",
    "position": "Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "RDG11",
    "avatarBg": "from-amber-400 to-purple-600",
    "teamsPlayed": [
      "real_madrid",
      "santos"
    ],
    "details": "Real Madrid"
  },
  {
    "id": "declan_rice",
    "name": "Declan Rice",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "DR41",
    "avatarBg": "from-amber-400 to-slate-800",
    "teamsPlayed": [
      "west_ham",
      "arsenal"
    ],
    "details": "West Ham, Arsenal"
  },
  {
    "id": "christopher_nkunku",
    "name": "Christopher Nkunku",
    "position": "Forvet",
    "nationality": "Fransa 🇫🇷",
    "avatar": "CN18",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "rb_leipzig",
      "chelsea",
      "psg"
    ],
    "details": "RB Leipzig, Chelsea"
  },
  {
    "id": "paulo_dybala",
    "name": "Paulo Dybala",
    "position": "Forvet",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "PD10",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "juventus",
      "roma",
      "inter_miami"
    ],
    "details": "Juventus, Roma, Inter Miami"
  },
  {
    "id": "dusan_vlahovic",
    "name": "Dušan Vlahović",
    "position": "Santrafor",
    "nationality": "Sırbistan 🇷🇸",
    "avatar": "DV9",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "fiorentina",
      "juventus"
    ],
    "details": "Fiorentina, Juventus"
  },
  {
    "id": "rasmus_hojlund",
    "name": "Rasmus Højlund",
    "position": "Santrafor",
    "nationality": "Danimarka 🇩🇰",
    "avatar": "RH9",
    "avatarBg": "from-sky-400 to-amber-500",
    "teamsPlayed": [
      "atalanta",
      "man_utd"
    ],
    "details": "Atalanta, Manchester United"
  },
  {
    "id": "james_maddison",
    "name": "James Maddison",
    "position": "Ofansif Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "JM10",
    "avatarBg": "from-amber-400 to-slate-900",
    "teamsPlayed": [
      "leicester",
      "tottenham"
    ],
    "details": "Leicester City, Tottenham Hotspur"
  },
  {
    "id": "joao_palhinha",
    "name": "João Palhinha",
    "position": "Ön Libero",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "JP14",
    "avatarBg": "from-green-500 to-black",
    "teamsPlayed": [
      "sporting",
      "bayern"
    ],
    "details": "Sporting CP, Fulham"
  },
  {
    "id": "eduardo_camavinga",
    "name": "Eduardo Camavinga",
    "position": "Orta Saha",
    "nationality": "Fransa 🇫🇷",
    "avatar": "EC7",
    "avatarBg": "from-sky-400 to-green-600",
    "teamsPlayed": [
      "rennes",
      "real_madrid"
    ],
    "details": "Stade Rennais, Real Madrid"
  },
  {
    "id": "jonathan_david",
    "name": "Jonathan David",
    "position": "Forvet",
    "nationality": "Kanada 🇨🇦",
    "avatar": "JD21",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "lille",
      "benfica",
      "barcelona"
    ],
    "details": "Lille, Benfica"
  },
  {
    "id": "alexis_mac_allister",
    "name": "Alexis Mac Allister",
    "position": "Orta Saha",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "AMA7",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "liverpool",
      "boca_juniors"
    ],
    "details": "Brighton, Liverpool"
  },
  {
    "id": "riccardo_orsolini",
    "name": "Riccardo Orsolini",
    "position": "Kanat",
    "nationality": "İtalya 🇮🇹",
    "avatar": "RO7",
    "avatarBg": "from-red-600 to-white",
    "teamsPlayed": [
      "juventus",
      "atalanta"
    ],
    "details": "Bologna, Juventus"
  },
  {
    "id": "pedro_porro",
    "name": "Pedro Porro",
    "position": "Sağ Bek",
    "nationality": "İspanya 🇪🇸",
    "avatar": "PP2",
    "avatarBg": "from-blue-600 to-white",
    "teamsPlayed": [
      "sporting",
      "tottenham",
      "man_city"
    ],
    "details": "Sporting CP, Tottenham Hotspur"
  },
  {
    "id": "r_mahrez",
    "name": "Riyad Mahrez",
    "position": "Sağ Kanat",
    "nationality": "Cezayir 🇩🇿",
    "avatar": "RM26",
    "avatarBg": "from-green-500 to-sky-400",
    "teamsPlayed": [
      "leicester",
      "man_city"
    ],
    "details": "Leicester City, Manchester City, Al Ahli"
  },
  {
    "id": "s_gnabry",
    "name": "Serge Gnabry",
    "position": "Sağ Kanat",
    "nationality": "Almanya 🇩🇪",
    "avatar": "SG7",
    "avatarBg": "from-red-600 to-blue-900",
    "teamsPlayed": [
      "arsenal",
      "bayern"
    ],
    "details": "Arsenal, Werder Bremen, Bayern München"
  },
  {
    "id": "fred",
    "name": "Fred (Frederico Rodrigues)",
    "position": "Orta Saha",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "F35",
    "avatarBg": "from-red-600 to-yellow-400",
    "teamsPlayed": [
      "man_utd",
      "fenerbahce"
    ],
    "details": "Shakhtar Donetsk, Manchester United, Fenerbahçe"
  },
  {
    "id": "m_alonso",
    "name": "Marcos Alonso",
    "position": "Sol Bek",
    "nationality": "İspanya 🇪🇸",
    "avatar": "MA3",
    "avatarBg": "from-blue-700 to-red-600",
    "teamsPlayed": [
      "real_madrid",
      "fiorentina",
      "chelsea",
      "barcelona"
    ],
    "details": "Real Madrid, Fiorentina, Chelsea, FC Barcelona"
  },
  {
    "id": "a_nesta",
    "name": "Alessandro Nesta",
    "position": "Stoper",
    "nationality": "İtalya 🇮🇹",
    "avatar": "AN13",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "lazio",
      "ac_milan"
    ],
    "details": "SS Lazio, AC Milan"
  },
  {
    "id": "e_cambiasso",
    "name": "Esteban Cambiasso",
    "position": "Ön Libero",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "EC19",
    "avatarBg": "from-blue-700 to-amber-400",
    "teamsPlayed": [
      "real_madrid",
      "inter",
      "leicester",
      "river_plate"
    ],
    "details": "Real Madrid, Inter Milan, Leicester City"
  },
  {
    "id": "j_dudek",
    "name": "Jerzy Dudek",
    "position": "Kaleci",
    "nationality": "Polonya 🇵🇱",
    "avatar": "JD1",
    "avatarBg": "from-red-600 to-amber-400",
    "teamsPlayed": [
      "feyenoord",
      "liverpool",
      "real_madrid"
    ],
    "details": "Feyenoord, Liverpool, Real Madrid"
  },
  {
    "id": "m_götze",
    "name": "Mario Götze",
    "position": "Ofansif Orta Saha",
    "nationality": "Almanya 🇩🇪",
    "avatar": "MG10",
    "avatarBg": "from-red-600 to-yellow-400",
    "teamsPlayed": [
      "dortmund",
      "bayern",
      "psv",
      "frankfurt"
    ],
    "details": "Borussia Dortmund, Bayern München, PSV"
  },
  {
    "id": "m_neuer",
    "name": "Manuel Neuer",
    "position": "Kaleci",
    "nationality": "Almanya 🇩🇪",
    "avatar": "MN1",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "schalke",
      "bayern"
    ],
    "details": "Schalke 04, Bayern München (2011-günümüz)"
  },
  {
    "id": "gerard_pique",
    "name": "Gerard Piqué",
    "position": "Stoper",
    "nationality": "İspanya 🇪🇸",
    "avatar": "GP3",
    "avatarBg": "from-slate-700 to-red-600",
    "teamsPlayed": [
      "man_utd",
      "barcelona"
    ],
    "details": "Manchester United, FC Barcelona"
  },
  {
    "id": "roberto_carlos",
    "name": "Roberto Carlos",
    "position": "Sol Bek",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "RC3",
    "avatarBg": "from-green-500 to-yellow-500",
    "teamsPlayed": [
      "real_madrid",
      "fenerbahce",
      "inter_miami",
      "inter"
    ],
    "details": "Real Madrid, Fenerbahçe, Inter Miami"
  },
  {
    "id": "cafu",
    "name": "Cafu",
    "position": "Sağ Bek",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "C2",
    "avatarBg": "from-green-400 to-gold-500",
    "teamsPlayed": [
      "roma",
      "ac_milan"
    ],
    "details": "SE Palmeiras, Roma, AC Milan"
  },
  {
    "id": "diego_maradona",
    "name": "Diego Maradona",
    "position": "10 Numara",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "DM10",
    "avatarBg": "from-blue-700 to-white",
    "teamsPlayed": [
      "boca_juniors",
      "barcelona",
      "napoli",
      "sevilla"
    ],
    "details": "Boca Juniors, FC Barcelona, Napoli, Sevilla"
  },
  {
    "id": "ronaldinho_rivaldo",
    "name": "Rivaldo",
    "position": "Sol Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "R9",
    "avatarBg": "from-purple-600 to-yellow-500",
    "teamsPlayed": [
      "barcelona",
      "ac_milan"
    ],
    "details": "FC Barcelona, AC Milan, Olympiakos"
  },
  {
    "id": "roberto_baggio",
    "name": "Roberto Baggio",
    "position": "10 Numara",
    "nationality": "İtalya 🇮🇹",
    "avatar": "RB10",
    "avatarBg": "from-amber-400 to-slate-900",
    "teamsPlayed": [
      "fiorentina",
      "juventus",
      "ac_milan",
      "inter"
    ],
    "details": "Fiorentina, Juventus, AC Milan, Inter, Bologna, Brescia"
  },
  {
    "id": "andriy_shevchenko",
    "name": "Andriy Shevchenko",
    "position": "Santrafor",
    "nationality": "Ukrayna 🇺🇦",
    "avatar": "AS7",
    "avatarBg": "from-blue-600 to-yellow-400",
    "teamsPlayed": [
      "ac_milan",
      "chelsea"
    ],
    "details": "Dynamo Kiev, AC Milan, Chelsea"
  },
  {
    "id": "dennis_bergkamp",
    "name": "Dennis Bergkamp",
    "position": "Ofansif Orta Saha",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "DB10",
    "avatarBg": "from-orange-500 to-slate-800",
    "teamsPlayed": [
      "ajax",
      "inter",
      "arsenal"
    ],
    "details": "Ajax, Inter Milan, Arsenal"
  },
  {
    "id": "austin_rivaldo",
    "name": "Noah",
    "position": "Forvet",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "NR7",
    "avatarBg": "from-sky-400 to-orange-600",
    "teamsPlayed": [
      "ajax",
      "barcelona"
    ],
    "details": "Ajax, Barcelona"
  },
  {
    "id": "carlos_tejeda",
    "name": "Carlos Tevez",
    "position": "Santrafor",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "CT32",
    "avatarBg": "from-blue-600 to-black",
    "teamsPlayed": [
      "west_ham",
      "man_utd",
      "man_city",
      "juventus",
      "boca_juniors"
    ],
    "details": "West Ham, Man Utd, Man City, Juventus, Boca Juniors"
  },
  {
    "id": "alex_de_souza",
    "name": "Alex de Souza",
    "position": "10 Numara",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "AD8",
    "avatarBg": "from-green-500 to-yellow-500",
    "teamsPlayed": [
      "fenerbahce",
      "porto",
      "flamengo"
    ],
    "details": "Fenerbahçe efsanesi, Palmeiras, Porto"
  },
  {
    "id": "hakan_sukur",
    "name": "Hakan Şükür",
    "position": "Santrafor",
    "nationality": "Türkiye 🇹🇷",
    "avatar": "HS9",
    "avatarBg": "from-red-600 to-slate-900",
    "teamsPlayed": [
      "galatasaray",
      "inter"
    ],
    "details": "Galatasaray, Inter Milan, Parma"
  },
  {
    "id": "j_sancho",
    "name": "Jadon Sancho",
    "position": "Kanat",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "JS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "dortmund",
      "man_utd",
      "chelsea"
    ],
    "details": "Dortmund, Man Utd, Chelsea"
  },
  {
    "id": "c_palmer",
    "name": "Cole Palmer",
    "position": "Ofansif Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "CP",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "man_city",
      "chelsea"
    ],
    "details": "Man City, Chelsea"
  },
  {
    "id": "c_pulisic",
    "name": "Christian Pulisic",
    "position": "Kanat",
    "nationality": "ABD 🇺🇸",
    "avatar": "CP",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "dortmund",
      "chelsea",
      "ac_milan"
    ],
    "details": "Dortmund, Chelsea, Ac Milan"
  },
  {
    "id": "o_giroud",
    "name": "Olivier Giroud",
    "position": "Santrafor",
    "nationality": "Fransa 🇫🇷",
    "avatar": "OG",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "arsenal",
      "chelsea",
      "ac_milan"
    ],
    "details": "Arsenal, Chelsea, Ac Milan"
  },
  {
    "id": "h_mkhitaryan",
    "name": "Henrikh Mkhitaryan",
    "position": "Ofansif Orta Saha",
    "nationality": "Ermenistan 🇦🇲",
    "avatar": "HM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "dortmund",
      "man_utd",
      "arsenal",
      "roma",
      "inter"
    ],
    "details": "Dortmund, Man Utd, Arsenal, Roma, Inter"
  },
  {
    "id": "d_luiz",
    "name": "David Luiz",
    "position": "Stoper",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "DL",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "benfica",
      "chelsea",
      "psg",
      "arsenal",
      "flamengo",
      "man_city",
      "aston_villa",
      "juventus"
    ],
    "details": "Benfica, Chelsea, Psg, Arsenal, Flamengo"
  },
  {
    "id": "willian",
    "name": "Willian",
    "position": "Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "W",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "chelsea",
      "arsenal"
    ],
    "details": "Chelsea, Arsenal"
  },
  {
    "id": "n_kante",
    "name": "N'Golo Kanté",
    "position": "Orta Saha",
    "nationality": "Fransa 🇫🇷",
    "avatar": "K",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "leicester",
      "chelsea",
      "al_ittihad"
    ],
    "details": "Leicester, Chelsea, Al Ittihad"
  },
  {
    "id": "ederson",
    "name": "Ederson",
    "position": "Kaleci",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "E",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "benfica",
      "man_city"
    ],
    "details": "Benfica, Man City"
  },
  {
    "id": "r_dias",
    "name": "Ruben Dias",
    "position": "Stoper",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "RD",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "benfica",
      "man_city"
    ],
    "details": "Benfica, Man City"
  },
  {
    "id": "d_jota",
    "name": "Diogo Jota",
    "position": "Forvet",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "DJ",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "atletico",
      "porto",
      "liverpool"
    ],
    "details": "Atletico, Porto, Liverpool"
  },
  {
    "id": "l_diaz",
    "name": "Luis Díaz",
    "position": "Kanat",
    "nationality": "Kolombiya 🇨🇴",
    "avatar": "LD",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "porto",
      "liverpool"
    ],
    "details": "Porto, Liverpool"
  },
  {
    "id": "d_nunez",
    "name": "Darwin Núñez",
    "position": "Santrafor",
    "nationality": "Uruguay 🇺🇾",
    "avatar": "DN",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "benfica",
      "liverpool"
    ],
    "details": "Benfica, Liverpool"
  },
  {
    "id": "c_gakpo",
    "name": "Cody Gakpo",
    "position": "Forvet",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "CG",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "psv",
      "liverpool"
    ],
    "details": "Psv, Liverpool"
  },
  {
    "id": "antony",
    "name": "Antony",
    "position": "Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "A",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "man_utd"
    ],
    "details": "Ajax, Man Utd"
  },
  {
    "id": "l_martinez",
    "name": "Lisandro Martínez",
    "position": "Stoper",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "LM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "man_utd"
    ],
    "details": "Ajax, Man Utd"
  },
  {
    "id": "f_jong",
    "name": "Frenkie de Jong",
    "position": "Orta Saha",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "FD",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "barcelona"
    ],
    "details": "Ajax, Barcelona"
  },
  {
    "id": "h_ziyech",
    "name": "Hakim Ziyech",
    "position": "Kanat",
    "nationality": "Fas 🇲🇦",
    "avatar": "HZ",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "chelsea",
      "galatasaray"
    ],
    "details": "Ajax, Chelsea, Galatasaray"
  },
  {
    "id": "n_mazraoui",
    "name": "Noussair Mazraoui",
    "position": "Bek",
    "nationality": "Fas 🇲🇦",
    "avatar": "NM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "bayern",
      "man_utd"
    ],
    "details": "Ajax, Bayern, Man Utd"
  },
  {
    "id": "r_gravenberch",
    "name": "Ryan Gravenberch",
    "position": "Orta Saha",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "RG",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "bayern",
      "liverpool"
    ],
    "details": "Ajax, Bayern, Liverpool"
  },
  {
    "id": "x_simons",
    "name": "Xavi Simons",
    "position": "Ofansif Orta Saha",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "XS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "psg",
      "psv",
      "rb_leipzig"
    ],
    "details": "Psg, Psv, Rb Leipzig"
  },
  {
    "id": "d_olmo",
    "name": "Dani Olmo",
    "position": "Ofansif Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "DO",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "rb_leipzig",
      "barcelona"
    ],
    "details": "Rb Leipzig, Barcelona"
  },
  {
    "id": "m_hummels",
    "name": "Mats Hummels",
    "position": "Stoper",
    "nationality": "Almanya 🇩🇪",
    "avatar": "MH",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "bayern",
      "dortmund",
      "roma"
    ],
    "details": "Bayern, Dortmund, Roma"
  },
  {
    "id": "t_kroos",
    "name": "Toni Kroos",
    "position": "Orta Saha",
    "nationality": "Almanya 🇩🇪",
    "avatar": "TK",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "bayern",
      "leverkusen",
      "real_madrid"
    ],
    "details": "Bayern, Leverkusen, Real Madrid"
  },
  {
    "id": "isco",
    "name": "Isco",
    "position": "Ofansif Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "I",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_madrid",
      "sevilla"
    ],
    "details": "Real Madrid, Sevilla"
  },
  {
    "id": "m_asensio",
    "name": "Marco Asensio",
    "position": "Kanat",
    "nationality": "İspanya 🇪🇸",
    "avatar": "MA",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_madrid",
      "psg"
    ],
    "details": "Real Madrid, Psg"
  },
  {
    "id": "s_khedira",
    "name": "Sami Khedira",
    "position": "Orta Saha",
    "nationality": "Almanya 🇩🇪",
    "avatar": "SK",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "stuttgart",
      "real_madrid",
      "juventus"
    ],
    "details": "Stuttgart, Real Madrid, Juventus"
  },
  {
    "id": "a_robben",
    "name": "Arjen Robben",
    "position": "Kanat",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "AR",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "psv",
      "chelsea",
      "real_madrid",
      "bayern"
    ],
    "details": "Psv, Chelsea, Real Madrid, Bayern"
  },
  {
    "id": "f_ribery",
    "name": "Franck Ribéry",
    "position": "Kanat",
    "nationality": "Fransa 🇫🇷",
    "avatar": "FR",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "galatasaray",
      "marseille",
      "bayern",
      "fiorentina"
    ],
    "details": "Galatasaray, Marseille, Bayern, Fiorentina"
  },
  {
    "id": "r_nainggolan",
    "name": "Radja Nainggolan",
    "position": "Orta Saha",
    "nationality": "Belçika 🇧🇪",
    "avatar": "RN",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "roma",
      "inter"
    ],
    "details": "Roma, Inter"
  },
  {
    "id": "d_mertens",
    "name": "Dries Mertens",
    "position": "Forvet",
    "nationality": "Belçika 🇧🇪",
    "avatar": "DM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "psv",
      "napoli",
      "galatasaray"
    ],
    "details": "Psv, Napoli, Galatasaray"
  },
  {
    "id": "r_leo",
    "name": "Rafael Leão",
    "position": "Kanat",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "RL",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "sporting",
      "lille",
      "ac_milan"
    ],
    "details": "Sporting, Lille, Ac Milan"
  },
  {
    "id": "t_hernandez",
    "name": "Theo Hernández",
    "position": "Sol Bek",
    "nationality": "Fransa 🇫🇷",
    "avatar": "TH",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "atletico",
      "real_madrid",
      "real_sociedad",
      "ac_milan"
    ],
    "details": "Atletico, Real Madrid, Real Sociedad, Ac Milan"
  },
  {
    "id": "b_diaz",
    "name": "Brahim Díaz",
    "position": "Ofansif Orta Saha",
    "nationality": "Fas 🇲🇦",
    "avatar": "BD",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "man_city",
      "real_madrid",
      "ac_milan"
    ],
    "details": "Man City, Real Madrid, Ac Milan"
  },
  {
    "id": "m_brozovi",
    "name": "Marcelo Brozović",
    "position": "Orta Saha",
    "nationality": "Hırvatistan 🇭🇷",
    "avatar": "MB",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "inter",
      "al_nassr"
    ],
    "details": "Inter, Al Nassr"
  },
  {
    "id": "m_kriniar",
    "name": "Milan Škriniar",
    "position": "Stoper",
    "nationality": "Slovakya 🇸🇰",
    "avatar": "MŠ",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "inter",
      "psg"
    ],
    "details": "Inter, Psg"
  },
  {
    "id": "a_hakimi",
    "name": "Achraf Hakimi",
    "position": "Sağ Bek",
    "nationality": "Fas 🇲🇦",
    "avatar": "AH",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_madrid",
      "dortmund",
      "inter",
      "psg"
    ],
    "details": "Real Madrid, Dortmund, Inter, Psg"
  },
  {
    "id": "marquinhos",
    "name": "Marquinhos",
    "position": "Stoper",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "M",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "roma",
      "psg"
    ],
    "details": "Roma, Psg"
  },
  {
    "id": "e_milito",
    "name": "Éder Militão",
    "position": "Stoper",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "ÉM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "porto",
      "real_madrid"
    ],
    "details": "Porto, Real Madrid"
  },
  {
    "id": "j_oblak",
    "name": "Jan Oblak",
    "position": "Kaleci",
    "nationality": "Slovenya 🇸🇮",
    "avatar": "JO",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "benfica",
      "atletico"
    ],
    "details": "Benfica, Atletico"
  },
  {
    "id": "i_rakiti",
    "name": "Ivan Rakitić",
    "position": "Orta Saha",
    "nationality": "Hırvatistan 🇭🇷",
    "avatar": "IR",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "schalke",
      "sevilla",
      "barcelona"
    ],
    "details": "Schalke, Sevilla, Barcelona"
  },
  {
    "id": "pedro",
    "name": "Pedro",
    "position": "Kanat",
    "nationality": "İspanya 🇪🇸",
    "avatar": "P",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "barcelona",
      "chelsea",
      "roma",
      "lazio"
    ],
    "details": "Barcelona, Chelsea, Roma, Lazio"
  },
  {
    "id": "raphinha",
    "name": "Raphinha",
    "position": "Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "R",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "rennes",
      "sporting",
      "barcelona"
    ],
    "details": "Rennes, Sporting, Barcelona"
  },
  {
    "id": "j_felix",
    "name": "João Félix",
    "position": "Forvet",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "JF",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "benfica",
      "atletico",
      "chelsea",
      "barcelona"
    ],
    "details": "Benfica, Atletico, Chelsea, Barcelona"
  },
  {
    "id": "j_musiala",
    "name": "Jamal Musiala",
    "position": "Ofansif Orta Saha",
    "nationality": "Almanya 🇩🇪",
    "avatar": "JM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "chelsea",
      "bayern"
    ],
    "details": "Chelsea, Bayern"
  },
  {
    "id": "m_rashford",
    "name": "Marcus Rashford",
    "position": "Forvet",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "MR",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "man_utd",
      "aston_villa"
    ],
    "details": "Man Utd, Aston Villa"
  },
  {
    "id": "j_grealish",
    "name": "Jack Grealish",
    "position": "Kanat",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "JG",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "aston_villa",
      "man_city"
    ],
    "details": "Aston Villa, Man City"
  },
  {
    "id": "e_martinez",
    "name": "Emiliano Martínez",
    "position": "Kaleci",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "EM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "arsenal",
      "aston_villa"
    ],
    "details": "Arsenal, Aston Villa"
  },
  {
    "id": "s_heungmin",
    "name": "Son Heung-min",
    "position": "Forvet",
    "nationality": "Güney Kore 🇰🇷",
    "avatar": "SH",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "leverkusen",
      "tottenham"
    ],
    "details": "Leverkusen, Tottenham"
  },
  {
    "id": "d_kulusevski",
    "name": "Dejan Kulusevski",
    "position": "Kanat",
    "nationality": "İsveç 🇸🇪",
    "avatar": "DK",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "juventus",
      "tottenham"
    ],
    "details": "Juventus, Tottenham"
  },
  {
    "id": "a_isak",
    "name": "Alexander Isak",
    "position": "Santrafor",
    "nationality": "İsveç 🇸🇪",
    "avatar": "AI",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "dortmund",
      "real_sociedad",
      "newcastle"
    ],
    "details": "Dortmund, Real Sociedad, Newcastle"
  },
  {
    "id": "s_tonali",
    "name": "Sandro Tonali",
    "position": "Orta Saha",
    "nationality": "İtalya 🇮🇹",
    "avatar": "ST",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ac_milan",
      "newcastle"
    ],
    "details": "Ac Milan, Newcastle"
  },
  {
    "id": "b_guimaraes",
    "name": "Bruno Guimarães",
    "position": "Orta Saha",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "BG",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "lyon",
      "newcastle"
    ],
    "details": "Lyon, Newcastle"
  },
  {
    "id": "k_walker",
    "name": "Kyle Walker",
    "position": "Sağ Bek",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "KW",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "tottenham",
      "man_city",
      "ac_milan"
    ],
    "details": "Tottenham, Man City, Ac Milan"
  },
  {
    "id": "l_digne",
    "name": "Lucas Digne",
    "position": "Sol Bek",
    "nationality": "Fransa 🇫🇷",
    "avatar": "LD",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "psg",
      "roma",
      "barcelona",
      "everton",
      "aston_villa"
    ],
    "details": "Psg, Roma, Barcelona, Everton, Aston Villa"
  },
  {
    "id": "m_stegen",
    "name": "Marc-André ter Stegen",
    "position": "Kaleci",
    "nationality": "Almanya 🇩🇪",
    "avatar": "MTS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "monchengladbach",
      "barcelona"
    ],
    "details": "Monchengladbach, Barcelona"
  },
  {
    "id": "a_tchouameni",
    "name": "Aurélien Tchouaméni",
    "position": "Orta Saha",
    "nationality": "Fransa 🇫🇷",
    "avatar": "AT",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "monaco",
      "real_madrid"
    ],
    "details": "Monaco, Real Madrid"
  },
  {
    "id": "d_carvajal",
    "name": "Dani Carvajal",
    "position": "Sağ Bek",
    "nationality": "İspanya 🇪🇸",
    "avatar": "DC",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "leverkusen",
      "real_madrid"
    ],
    "details": "Leverkusen, Real Madrid"
  },
  {
    "id": "n_fernandez",
    "name": "Nacho Fernández",
    "position": "Stoper",
    "nationality": "İspanya 🇪🇸",
    "avatar": "NF",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_madrid",
      "al_ittihad"
    ],
    "details": "Real Madrid, Al Ittihad"
  },
  {
    "id": "m_hermoso",
    "name": "Mario Hermoso",
    "position": "Stoper",
    "nationality": "İspanya 🇪🇸",
    "avatar": "MH",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_madrid",
      "atletico",
      "roma"
    ],
    "details": "Real Madrid, Atletico, Roma"
  },
  {
    "id": "y_carrasco",
    "name": "Yannick Carrasco",
    "position": "Kanat",
    "nationality": "Belçika 🇧🇪",
    "avatar": "YC",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "monaco",
      "atletico",
      "al_ittihad"
    ],
    "details": "Monaco, Atletico, Al Ittihad"
  },
  {
    "id": "s_umtiti",
    "name": "Samuel Umtiti",
    "position": "Stoper",
    "nationality": "Fransa 🇫🇷",
    "avatar": "SU",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "lyon",
      "barcelona"
    ],
    "details": "Lyon, Barcelona"
  },
  {
    "id": "c_lenglet",
    "name": "Clément Lenglet",
    "position": "Stoper",
    "nationality": "Fransa 🇫🇷",
    "avatar": "CL",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "sevilla",
      "barcelona",
      "tottenham",
      "aston_villa"
    ],
    "details": "Sevilla, Barcelona, Tottenham, Aston Villa"
  },
  {
    "id": "f_chiesa",
    "name": "Federico Chiesa",
    "position": "Kanat",
    "nationality": "İtalya 🇮🇹",
    "avatar": "FC",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "fiorentina",
      "juventus",
      "liverpool"
    ],
    "details": "Fiorentina, Juventus, Liverpool"
  },
  {
    "id": "m_locatelli",
    "name": "Manuel Locatelli",
    "position": "Orta Saha",
    "nationality": "İtalya 🇮🇹",
    "avatar": "ML",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ac_milan",
      "juventus"
    ],
    "details": "Ac Milan, Juventus"
  },
  {
    "id": "w_mckennie",
    "name": "Weston McKennie",
    "position": "Orta Saha",
    "nationality": "ABD 🇺🇸",
    "avatar": "WM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "schalke",
      "juventus"
    ],
    "details": "Schalke, Juventus"
  },
  {
    "id": "t_abraham",
    "name": "Tammy Abraham",
    "position": "Santrafor",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "TA",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "chelsea",
      "roma",
      "ac_milan"
    ],
    "details": "Chelsea, Roma, Ac Milan"
  },
  {
    "id": "c_smalling",
    "name": "Chris Smalling",
    "position": "Stoper",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "CS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "man_utd",
      "roma"
    ],
    "details": "Man Utd, Roma"
  },
  {
    "id": "w_szczesny",
    "name": "Wojciech Szczęsny",
    "position": "Kaleci",
    "nationality": "Polonya 🇵🇱",
    "avatar": "WS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "arsenal",
      "roma",
      "juventus",
      "barcelona"
    ],
    "details": "Arsenal, Roma, Juventus, Barcelona"
  },
  {
    "id": "g_chiellini",
    "name": "Giorgio Chiellini",
    "position": "Stoper",
    "nationality": "İtalya 🇮🇹",
    "avatar": "GC",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "juventus",
      "la_galaxy"
    ],
    "details": "Juventus, La Galaxy"
  },
  {
    "id": "l_bonucci",
    "name": "Leonardo Bonucci",
    "position": "Stoper",
    "nationality": "İtalya 🇮🇹",
    "avatar": "LB",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "inter",
      "juventus",
      "ac_milan"
    ],
    "details": "Inter, Juventus, Ac Milan"
  },
  {
    "id": "m_mandzukic",
    "name": "Mario Mandžukić",
    "position": "Santrafor",
    "nationality": "Hırvatistan 🇭🇷",
    "avatar": "MM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "wolfsburg",
      "bayern",
      "atletico",
      "juventus",
      "ac_milan"
    ],
    "details": "Wolfsburg, Bayern, Atletico, Juventus, Ac Milan"
  },
  {
    "id": "j_cuadrado",
    "name": "Juan Cuadrado",
    "position": "Kanat",
    "nationality": "Kolombiya 🇨🇴",
    "avatar": "JC",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "fiorentina",
      "chelsea",
      "juventus",
      "inter"
    ],
    "details": "Fiorentina, Chelsea, Juventus, Inter"
  },
  {
    "id": "f_kostic",
    "name": "Filip Kostić",
    "position": "Kanat",
    "nationality": "Sırbistan 🇷🇸",
    "avatar": "FK",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "stuttgart",
      "frankfurt",
      "juventus"
    ],
    "details": "Stuttgart, Frankfurt, Juventus"
  },
  {
    "id": "f_tomori",
    "name": "Fikayo Tomori",
    "position": "Stoper",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "FT",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "chelsea",
      "ac_milan"
    ],
    "details": "Chelsea, Ac Milan"
  },
  {
    "id": "m_maignan",
    "name": "Mike Maignan",
    "position": "Kaleci",
    "nationality": "Fransa 🇫🇷",
    "avatar": "MM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "lille",
      "ac_milan"
    ],
    "details": "Lille, Ac Milan"
  },
  {
    "id": "g_xhaka",
    "name": "Granit Xhaka",
    "position": "Orta Saha",
    "nationality": "İsviçre 🇨🇭",
    "avatar": "GX",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "monchengladbach",
      "arsenal",
      "leverkusen"
    ],
    "details": "Monchengladbach, Arsenal, Leverkusen"
  },
  {
    "id": "p_schick",
    "name": "Patrik Schick",
    "position": "Forvet",
    "nationality": "Çekya 🇨🇿",
    "avatar": "PS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "roma",
      "rb_leipzig",
      "leverkusen"
    ],
    "details": "Roma, Rb Leipzig, Leverkusen"
  },
  {
    "id": "d_upamecano",
    "name": "Dayot Upamecano",
    "position": "Stoper",
    "nationality": "Fransa 🇫🇷",
    "avatar": "DU",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "rb_leipzig",
      "bayern"
    ],
    "details": "Rb Leipzig, Bayern"
  },
  {
    "id": "a_davies",
    "name": "Alphonso Davies",
    "position": "Sol Bek",
    "nationality": "Kanada 🇨🇦",
    "avatar": "AD",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "bayern",
      "real_madrid"
    ],
    "details": "Bayern, Real Madrid"
  },
  {
    "id": "m_sabitzer",
    "name": "Marcel Sabitzer",
    "position": "Orta Saha",
    "nationality": "Avusturya 🇦🇹",
    "avatar": "MS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "rb_leipzig",
      "bayern",
      "dortmund"
    ],
    "details": "Rb Leipzig, Bayern, Dortmund"
  },
  {
    "id": "n_sule",
    "name": "Niklas Süle",
    "position": "Stoper",
    "nationality": "Almanya 🇩🇪",
    "avatar": "NS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "bayern",
      "dortmund"
    ],
    "details": "Bayern, Dortmund"
  },
  {
    "id": "r_muani",
    "name": "Randal Kolo Muani",
    "position": "Forvet",
    "nationality": "Fransa 🇫🇷",
    "avatar": "RKM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "frankfurt",
      "psg",
      "juventus"
    ],
    "details": "Frankfurt, Psg, Juventus"
  },
  {
    "id": "b_barcola",
    "name": "Bradley Barcola",
    "position": "Kanat",
    "nationality": "Fransa 🇫🇷",
    "avatar": "BB",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "lyon",
      "psg"
    ],
    "details": "Lyon, Psg"
  },
  {
    "id": "m_verratti",
    "name": "Marco Verratti",
    "position": "Orta Saha",
    "nationality": "İtalya 🇮🇹",
    "avatar": "MV",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "psg",
      "al_hilal"
    ],
    "details": "Psg, Al Hilal"
  },
  {
    "id": "a_herrera",
    "name": "Ander Herrera",
    "position": "Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "AH",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_sociedad",
      "man_utd",
      "psg",
      "athletic_bilbao"
    ],
    "details": "Real Sociedad, Man Utd, Psg, Athletic Bilbao"
  },
  {
    "id": "n_pepe",
    "name": "Nicolas Pépé",
    "position": "Kanat",
    "nationality": "Fildişi Sahili 🇨🇮",
    "avatar": "NP",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "lille",
      "arsenal"
    ],
    "details": "Lille, Arsenal"
  },
  {
    "id": "fabinho",
    "name": "Fabinho",
    "position": "Ön Libero",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "F",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "monaco",
      "liverpool",
      "al_ittihad"
    ],
    "details": "Monaco, Liverpool, Al Ittihad"
  },
  {
    "id": "w_yedder",
    "name": "Wissam Ben Yedder",
    "position": "Forvet",
    "nationality": "Fransa 🇫🇷",
    "avatar": "WBY",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "sevilla",
      "monaco"
    ],
    "details": "Sevilla, Monaco"
  },
  {
    "id": "g_ramos",
    "name": "Gonçalo Ramos",
    "position": "Santrafor",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "GR",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "benfica",
      "psg"
    ],
    "details": "Benfica, Psg"
  },
  {
    "id": "j_mario",
    "name": "João Mário",
    "position": "Orta Saha",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "JM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "sporting",
      "inter",
      "west_ham",
      "benfica"
    ],
    "details": "Sporting, Inter, West Ham, Benfica"
  },
  {
    "id": "vitinha",
    "name": "Vitinha",
    "position": "Orta Saha",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "V",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "porto",
      "psg"
    ],
    "details": "Porto, Psg"
  },
  {
    "id": "r_neves",
    "name": "Rúben Neves",
    "position": "Orta Saha",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "RN",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "porto",
      "al_hilal"
    ],
    "details": "Porto, Al Hilal"
  },
  {
    "id": "l_torreira",
    "name": "Lucas Torreira",
    "position": "Ön Libero",
    "nationality": "Uruguay 🇺🇾",
    "avatar": "LT",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "arsenal",
      "atletico",
      "fiorentina",
      "galatasaray"
    ],
    "details": "Arsenal, Atletico, Fiorentina, Galatasaray"
  },
  {
    "id": "f_muslera",
    "name": "Fernando Muslera",
    "position": "Kaleci",
    "nationality": "Uruguay 🇺🇾",
    "avatar": "FM",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "lazio",
      "galatasaray"
    ],
    "details": "Lazio, Galatasaray"
  },
  {
    "id": "d_kuyt",
    "name": "Dirk Kuyt",
    "position": "Forvet",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "DK",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "feyenoord",
      "liverpool",
      "fenerbahce"
    ],
    "details": "Feyenoord, Liverpool, Fenerbahce"
  },
  {
    "id": "l_karius",
    "name": "Loris Karius",
    "position": "Kaleci",
    "nationality": "Almanya 🇩🇪",
    "avatar": "LK",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "liverpool",
      "besiktas",
      "newcastle"
    ],
    "details": "Liverpool, Besiktas, Newcastle"
  },
  {
    "id": "m_gomez",
    "name": "Mario Gómez",
    "position": "Santrafor",
    "nationality": "Almanya 🇩🇪",
    "avatar": "MG",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "stuttgart",
      "bayern",
      "fiorentina",
      "besiktas",
      "wolfsburg"
    ],
    "details": "Stuttgart, Bayern, Fiorentina, Besiktas, Wolfsburg"
  },
  {
    "id": "d_ba",
    "name": "Demba Ba",
    "position": "Santrafor",
    "nationality": "Senegal 🇸🇳",
    "avatar": "DB",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "west_ham",
      "newcastle",
      "chelsea",
      "besiktas"
    ],
    "details": "West Ham, Newcastle, Chelsea, Besiktas"
  },
  {
    "id": "a_telles",
    "name": "Alex Telles",
    "position": "Sol Bek",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "AT",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "galatasaray",
      "inter",
      "porto",
      "man_utd",
      "sevilla",
      "al_nassr"
    ],
    "details": "Galatasaray, Inter, Porto, Man Utd, Sevilla, Al Nassr"
  },
  {
    "id": "a_talisca",
    "name": "Anderson Talisca",
    "position": "Ofansif Orta Saha",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "AT",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "benfica",
      "besiktas",
      "al_nassr"
    ],
    "details": "Benfica, Besiktas, Al Nassr"
  },
  {
    "id": "ronaldinho",
    "name": "Ronaldinho",
    "position": "Ofansif Orta Saha",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "R",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "psg",
      "barcelona",
      "ac_milan",
      "flamengo"
    ],
    "details": "Psg, Barcelona, Ac Milan, Flamengo"
  },
  {
    "id": "s_etoo",
    "name": "Samuel Eto'o",
    "position": "Santrafor",
    "nationality": "Kamerun 🇨🇲",
    "avatar": "SE",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_madrid",
      "barcelona",
      "inter",
      "chelsea",
      "everton"
    ],
    "details": "Real Madrid, Barcelona, Inter, Chelsea, Everton"
  },
  {
    "id": "c_seedorf",
    "name": "Clarence Seedorf",
    "position": "Orta Saha",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "CS",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "real_madrid",
      "inter",
      "ac_milan"
    ],
    "details": "Ajax, Real Madrid, Inter, Ac Milan"
  },
  {
    "id": "e_davids",
    "name": "Edgar Davids",
    "position": "Orta Saha",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "ED",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "ac_milan",
      "juventus",
      "barcelona",
      "inter",
      "tottenham"
    ],
    "details": "Ajax, Ac Milan, Juventus, Barcelona, Inter, Tottenham"
  },
  {
    "id": "p_vieira",
    "name": "Patrick Vieira",
    "position": "Orta Saha",
    "nationality": "Fransa 🇫🇷",
    "avatar": "PV",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ac_milan",
      "arsenal",
      "juventus",
      "inter",
      "man_city"
    ],
    "details": "Ac Milan, Arsenal, Juventus, Inter, Man City"
  },
  {
    "id": "m_ballack",
    "name": "Michael Ballack",
    "position": "Orta Saha",
    "nationality": "Almanya 🇩🇪",
    "avatar": "MB",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "leverkusen",
      "bayern",
      "chelsea"
    ],
    "details": "Leverkusen, Bayern, Chelsea"
  },
  {
    "id": "c_vieri",
    "name": "Christian Vieri",
    "position": "Santrafor",
    "nationality": "İtalya 🇮🇹",
    "avatar": "CV",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "juventus",
      "atletico",
      "lazio",
      "inter",
      "ac_milan",
      "fiorentina",
      "monaco"
    ],
    "details": "Juventus, Atletico, Lazio, Inter, Ac Milan, Fiorentina, Monaco"
  },
  {
    "id": "r_babel",
    "name": "Ryan Babel",
    "position": "Kanat",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "RB",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "liverpool",
      "besiktas",
      "galatasaray"
    ],
    "details": "Ajax, Liverpool, Besiktas, Galatasaray"
  },
  {
    "id": "s_kagawa",
    "name": "Shinji Kagawa",
    "position": "Ofansif Orta Saha",
    "nationality": "Japonya 🇯🇵",
    "avatar": "SK",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "dortmund",
      "man_utd",
      "besiktas"
    ],
    "details": "Dortmund, Man Utd, Besiktas"
  },
  {
    "id": "a_oxladechamberlain",
    "name": "Alex Oxlade-Chamberlain",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "AO",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "arsenal",
      "liverpool",
      "besiktas"
    ],
    "details": "Arsenal, Liverpool, Besiktas"
  },
  {
    "id": "w_weghorst",
    "name": "Wout Weghorst",
    "position": "Santrafor",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "WW",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "wolfsburg",
      "besiktas",
      "man_utd",
      "ajax"
    ],
    "details": "Wolfsburg, Besiktas, Man Utd, Ajax"
  },
  {
    "id": "a_negredo",
    "name": "Álvaro Negredo",
    "position": "Santrafor",
    "nationality": "İspanya 🇪🇸",
    "avatar": "ÁN",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_madrid",
      "sevilla",
      "man_city",
      "valencia",
      "besiktas"
    ],
    "details": "Real Madrid, Sevilla, Man City, Valencia, Besiktas"
  },
  {
    "id": "e_adebayor",
    "name": "Emmanuel Adebayor",
    "position": "Santrafor",
    "nationality": "Togo 🇹🇬",
    "avatar": "EA",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "monaco",
      "arsenal",
      "man_city",
      "real_madrid",
      "tottenham"
    ],
    "details": "Monaco, Arsenal, Man City, Real Madrid, Tottenham"
  },
  {
    "id": "m_owen",
    "name": "Michael Owen",
    "position": "Santrafor",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "MO",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "liverpool",
      "real_madrid",
      "newcastle",
      "man_utd"
    ],
    "details": "Liverpool, Real Madrid, Newcastle, Man Utd"
  },
  {
    "id": "robinho",
    "name": "Robinho",
    "position": "Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "R",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "santos",
      "real_madrid",
      "man_city",
      "ac_milan"
    ],
    "details": "Santos, Real Madrid, Man City, Ac Milan"
  },
  {
    "id": "p_kluivert",
    "name": "Patrick Kluivert",
    "position": "Santrafor",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "PK",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "ac_milan",
      "barcelona",
      "newcastle",
      "valencia",
      "psv"
    ],
    "details": "Ajax, Ac Milan, Barcelona, Newcastle, Valencia, Psv"
  },
  {
    "id": "m_overmars",
    "name": "Marc Overmars",
    "position": "Kanat",
    "nationality": "Hollanda 🇳🇱",
    "avatar": "MO",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "ajax",
      "arsenal",
      "barcelona"
    ],
    "details": "Ajax, Arsenal, Barcelona"
  },
  {
    "id": "g_batistuta",
    "name": "Gabriel Batistuta",
    "position": "Santrafor",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "GB",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "river_plate",
      "fiorentina",
      "roma",
      "inter"
    ],
    "details": "River Plate, Fiorentina, Roma, Inter"
  },
  {
    "id": "g_hagi",
    "name": "Gheorghe Hagi",
    "position": "Ofansif Orta Saha",
    "nationality": "Romanya 🇷🇴",
    "avatar": "GH",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "real_madrid",
      "barcelona",
      "galatasaray"
    ],
    "details": "Real Madrid, Barcelona, Galatasaray"
  },
  {
    "id": "f_inzaghi",
    "name": "Filippo Inzaghi",
    "position": "Santrafor",
    "nationality": "İtalya 🇮🇹",
    "avatar": "FI",
    "avatarBg": "from-blue-500 to-indigo-600",
    "teamsPlayed": [
      "juventus",
      "ac_milan"
    ],
    "details": "Juventus, Ac Milan"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FOOTBALL_TEAMS, FOOTBALLERS };
}
