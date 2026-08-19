/**
 * Clean & Elite Football Database for 1v1 Football Quiz
 * 97 Top Global Clubs & 526 Multi-Club Footballers
 * Full 2024/2025 Verified Confirmed Transfers
 */

const FOOTBALL_TEAMS = [
  {
    "id": "ac_milan",
    "name": "AC Milan",
    "short": "MIL",
    "color": "#FB090B",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "fiorentina",
    "name": "ACF Fiorentina",
    "short": "FIO",
    "color": "#4F2365",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "ajax",
    "name": "AFC Ajax",
    "short": "AJX",
    "color": "#D2122E",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "bournemouth",
    "name": "AFC Bournemouth",
    "short": "BOU",
    "color": "#DA291C",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "monaco",
    "name": "AS Monaco",
    "short": "ASM",
    "color": "#E51B24",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "roma",
    "name": "AS Roma",
    "short": "ROM",
    "color": "#8E1F2F",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "al_ahli",
    "name": "Al Ahli Saudi FC",
    "short": "AHL",
    "color": "#008000",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "al_hilal",
    "name": "Al Hilal SFC",
    "short": "HIL",
    "color": "#004B87",
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
    "id": "al_nassr",
    "name": "Al Nassr FC",
    "short": "NAS",
    "color": "#FFD100",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "arsenal",
    "name": "Arsenal",
    "short": "ARS",
    "color": "#EF0107",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "aston_villa",
    "name": "Aston Villa",
    "short": "AVL",
    "color": "#670E36",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "atalanta",
    "name": "Atalanta BC",
    "short": "ATA",
    "color": "#1E71B8",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "athletic_bilbao",
    "name": "Athletic Bilbao",
    "short": "ATH",
    "color": "#EE2524",
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
    "id": "leverkusen",
    "name": "Bayer Leverkusen",
    "short": "B04",
    "color": "#E32221",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "bayern",
    "name": "Bayern München",
    "short": "BAY",
    "color": "#DC052D",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "basaksehir",
    "name": "Başakşehir FK",
    "short": "IBFK",
    "color": "#F58220",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "besiktas",
    "name": "Beşiktaş",
    "short": "BJK",
    "color": "#000000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "boca_juniors",
    "name": "Boca Juniors",
    "short": "BOC",
    "color": "#004B87",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "bologna",
    "name": "Bologna FC",
    "short": "BOL",
    "color": "#A6192E",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "dortmund",
    "name": "Borussia Dortmund",
    "short": "BVB",
    "color": "#FDE100",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "monchengladbach",
    "name": "Borussia M’gladbach",
    "short": "BMG",
    "color": "#000000",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "brentford",
    "name": "Brentford FC",
    "short": "BRE",
    "color": "#E30613",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "brighton",
    "name": "Brighton & Hove Albion",
    "short": "BHA",
    "color": "#0057B8",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "flamengo",
    "name": "CR Flamengo",
    "short": "FLA",
    "color": "#C3281E",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "celta",
    "name": "Celta Vigo",
    "short": "CEL",
    "color": "#87D8F7",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "celtic",
    "name": "Celtic FC",
    "short": "CEL",
    "color": "#018749",
    "country": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
  },
  {
    "id": "chelsea",
    "name": "Chelsea",
    "short": "CHE",
    "color": "#034694",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "club_brugge",
    "name": "Club Brugge",
    "short": "CLU",
    "color": "#003399",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "crystal_palace",
    "name": "Crystal Palace",
    "short": "CRY",
    "color": "#1B458F",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "frankfurt",
    "name": "Eintracht Frankfurt",
    "short": "SGE",
    "color": "#E1000F",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "everton",
    "name": "Everton",
    "short": "EVE",
    "color": "#003399",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "barcelona",
    "name": "FC Barcelona",
    "short": "BAR",
    "color": "#004D98",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "porto",
    "name": "FC Porto",
    "short": "FCP",
    "color": "#0038A8",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "schalke",
    "name": "FC Schalke 04",
    "short": "S04",
    "color": "#004D9D",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "fenerbahce",
    "name": "Fenerbahçe",
    "short": "FB",
    "color": "#002D72",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "feyenoord",
    "name": "Feyenoord",
    "short": "FEY",
    "color": "#ED1C24",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "fulham",
    "name": "Fulham FC",
    "short": "FUL",
    "color": "#000000",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "galatasaray",
    "name": "Galatasaray",
    "short": "GS",
    "color": "#A90432",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "genoa",
    "name": "Genoa CFC",
    "short": "GEN",
    "color": "#A6192E",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "getafe",
    "name": "Getafe CF",
    "short": "GET",
    "color": "#00539F",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "girona",
    "name": "Girona FC",
    "short": "GIR",
    "color": "#CD1318",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "gremio",
    "name": "Grêmio",
    "short": "GRE",
    "color": "#0D80BF",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "inter_miami",
    "name": "Inter Miami CF",
    "short": "MIA",
    "color": "#F7B5CD",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "inter",
    "name": "Inter Milan",
    "short": "INT",
    "color": "#0068A8",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "juventus",
    "name": "Juventus",
    "short": "JUV",
    "color": "#000000",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "la_galaxy",
    "name": "LA Galaxy",
    "short": "LAG",
    "color": "#00245D",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "lille",
    "name": "LOSC Lille",
    "short": "LIL",
    "color": "#E01E2E",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "leeds",
    "name": "Leeds United",
    "short": "LEE",
    "color": "#FFCD00",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "leicester",
    "name": "Leicester City",
    "short": "LEI",
    "color": "#003090",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "liverpool",
    "name": "Liverpool",
    "short": "LIV",
    "color": "#C8102E",
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
    "id": "man_utd",
    "name": "Manchester United",
    "short": "MUN",
    "color": "#DA291C",
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
    "id": "nottingham",
    "name": "Nottingham Forest",
    "short": "NFO",
    "color": "#DD0000",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "nice",
    "name": "OGC Nice",
    "short": "NIC",
    "color": "#000000",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "lyon",
    "name": "Olympique Lyon",
    "short": "OL",
    "color": "#DA0812",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "marseille",
    "name": "Olympique Marseille",
    "short": "OM",
    "color": "#2FAEE0",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "psv",
    "name": "PSV Eindhoven",
    "short": "PSV",
    "color": "#FF0000",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "psg",
    "name": "Paris Saint-Germain",
    "short": "PSG",
    "color": "#004170",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "rb_leipzig",
    "name": "RB Leipzig",
    "short": "RBL",
    "color": "#DD0741",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "rb_salzburg",
    "name": "RB Salzburg",
    "short": "RBS",
    "color": "#E2001A",
    "country": "Avusturya 🇦🇹"
  },
  {
    "id": "lens",
    "name": "RC Lens",
    "short": "RCL",
    "color": "#E30613",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "espanyol",
    "name": "RCD Espanyol",
    "short": "ESP",
    "color": "#007FC8",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "mallorca",
    "name": "RCD Mallorca",
    "short": "MLL",
    "color": "#E30613",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "rangers",
    "name": "Rangers FC",
    "short": "RAN",
    "color": "#0038A8",
    "country": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
  },
  {
    "id": "betis",
    "name": "Real Betis",
    "short": "BET",
    "color": "#0BB364",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "real_madrid",
    "name": "Real Madrid",
    "short": "RMA",
    "color": "#FEBE10",
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
    "id": "river_plate",
    "name": "River Plate",
    "short": "RIV",
    "color": "#EB1C24",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "braga",
    "name": "SC Braga",
    "short": "BRA",
    "color": "#E30613",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "corinthians",
    "name": "SC Corinthians",
    "short": "COR",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "freiburg",
    "name": "SC Freiburg",
    "short": "SCF",
    "color": "#000000",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "palmeiras",
    "name": "SE Palmeiras",
    "short": "PAL",
    "color": "#006437",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "benfica",
    "name": "SL Benfica",
    "short": "SLB",
    "color": "#E30613",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "lazio",
    "name": "SS Lazio",
    "short": "LAZ",
    "color": "#87D8F7",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "napoli",
    "name": "SSC Napoli",
    "short": "NAP",
    "color": "#12A0D7",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "santos",
    "name": "Santos FC",
    "short": "SAN",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "sevilla",
    "name": "Sevilla FC",
    "short": "SEV",
    "color": "#D4001F",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "southampton",
    "name": "Southampton FC",
    "short": "SOU",
    "color": "#D71920",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "sporting",
    "name": "Sporting CP",
    "short": "SCP",
    "color": "#008057",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "rennes",
    "name": "Stade Rennais",
    "short": "REN",
    "color": "#E30613",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "sao_paulo",
    "name": "São Paulo FC",
    "short": "SAO",
    "color": "#DA291C",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "hoffenheim",
    "name": "TSG Hoffenheim",
    "short": "TSG",
    "color": "#1961B4",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "torino",
    "name": "Torino FC",
    "short": "TOR",
    "color": "#8A1C27",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "tottenham",
    "name": "Tottenham Hotspur",
    "short": "TOT",
    "color": "#132257",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "trabzonspor",
    "name": "Trabzonspor",
    "short": "TS",
    "color": "#8B0000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "sampdoria",
    "name": "UC Sampdoria",
    "short": "SAM",
    "color": "#00519E",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "valencia",
    "name": "Valencia CF",
    "short": "VAL",
    "color": "#EE7500",
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
    "id": "wolfsburg",
    "name": "VfL Wolfsburg",
    "short": "WOB",
    "color": "#65B32E",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "villarreal",
    "name": "Villarreal CF",
    "short": "VIL",
    "color": "#FFE600",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "watford",
    "name": "Watford FC",
    "short": "WAT",
    "color": "#FBEE23",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "werder_bremen",
    "name": "Werder Bremen",
    "short": "SVW",
    "color": "#1D9053",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "west_ham",
    "name": "West Ham United",
    "short": "WHU",
    "color": "#7A263A",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "wolves",
    "name": "Wolverhampton Wanderers",
    "short": "WOL",
    "color": "#FDB913",
    "country": "İngiltere 🇬🇧"
  }
];

const _RAW_PLAYERS = [{"n": "Cristiano Ronaldo", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["sporting", "man_utd", "real_madrid", "juventus", "al_nassr"]}, {"n": "Lionel Messi", "p": "Forvet", "c": "Arjantin 🇦🇷", "t": ["barcelona", "psg", "inter_miami"]}, {"n": "Zlatan Ibrahimović", "p": "Santrafor", "c": "İsveç 🇸🇪", "t": ["ajax", "juventus", "inter", "barcelona", "ac_milan", "psg", "man_utd", "la_galaxy"]}, {"n": "Neymar Jr", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "barcelona", "psg", "al_hilal"]}, {"n": "Kylian Mbappé", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["monaco", "psg", "real_madrid"]}, {"n": "Erling Haaland", "p": "Santrafor", "c": "Norveç 🇳🇴", "t": ["dortmund", "man_city"]}, {"n": "Karim Benzema", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["lyon", "real_madrid", "al_ittihad"]}, {"n": "Robert Lewandowski", "p": "Santrafor", "c": "Polonya 🇵🇱", "t": ["dortmund", "bayern", "barcelona"]}, {"n": "Luis Suárez", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["ajax", "liverpool", "barcelona", "atletico", "inter_miami"]}, {"n": "Luka Modrić", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["tottenham", "real_madrid"]}, {"n": "Toni Kroos", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["bayern", "leverkusen", "real_madrid"]}, {"n": "Kevin De Bruyne", "p": "Ofansif Orta Saha", "c": "Belçika 🇧🇪", "t": ["chelsea", "werder_bremen", "wolfsburg", "man_city"]}, {"n": "Mohamed Salah", "p": "Kanat", "c": "Mısır 🇪🇬", "t": ["chelsea", "fiorentina", "roma", "liverpool"]}, {"n": "Harry Kane", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["tottenham", "leicester", "bayern"]}, {"n": "Sadio Mané", "p": "Kanat", "c": "Senegal 🇸🇳", "t": ["liverpool", "bayern", "al_nassr"]}, {"n": "Jude Bellingham", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["dortmund", "real_madrid"]}, {"n": "Vinícius Júnior", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["flamengo", "real_madrid"]}, {"n": "Rodrygo", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "real_madrid"]}, {"n": "Jadon Sancho", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["dortmund", "man_utd", "chelsea"]}, {"n": "Jamal Musiala", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["chelsea", "bayern"]}, {"n": "Marcus Rashford", "p": "Forvet", "c": "İngiltere 🇬🇧", "t": ["man_utd", "aston_villa"]}, {"n": "Cole Palmer", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["man_city", "chelsea"]}, {"n": "Mason Mount", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["chelsea", "man_utd"]}, {"n": "Kai Havertz", "p": "Forvet", "c": "Almanya 🇩🇪", "t": ["leverkusen", "chelsea", "arsenal"]}, {"n": "Timo Werner", "p": "Forvet", "c": "Almanya 🇩🇪", "t": ["stuttgart", "rb_leipzig", "chelsea", "tottenham"]}, {"n": "Raheem Sterling", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["liverpool", "man_city", "chelsea", "arsenal"]}, {"n": "Gabriel Jesus", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["man_city", "arsenal"]}, {"n": "Oleksandr Zinchenko", "p": "Sol Bek", "c": "Ukrayna 🇺🇦", "t": ["man_city", "psv", "arsenal"]}, {"n": "Declan Rice", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["chelsea", "west_ham", "arsenal"]}, {"n": "Jack Grealish", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["aston_villa", "man_city"]}, {"n": "Bernardo Silva", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "monaco", "man_city"]}, {"n": "Bruno Fernandes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["sporting", "man_utd"]}, {"n": "Ruben Dias", "p": "Stoper", "c": "Portekiz 🇵🇹", "t": ["benfica", "man_city"]}, {"n": "Ederson", "p": "Kaleci", "c": "Brezilya 🇧🇷", "t": ["benfica", "man_city"]}, {"n": "Alisson Becker", "p": "Kaleci", "c": "Brezilya 🇧🇷", "t": ["roma", "liverpool"]}, {"n": "Dominik Szoboszlai", "p": "Orta Saha", "c": "Macaristan 🇭🇺", "t": ["rb_leipzig", "liverpool"]}, {"n": "Alexis Mac Allister", "p": "Orta Saha", "c": "Arjantin 🇦🇷", "t": ["boca_juniors", "liverpool"]}, {"n": "Darwin Núñez", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["benfica", "liverpool"]}, {"n": "Luis Díaz", "p": "Kanat", "c": "Kolombiya 🇨🇴", "t": ["porto", "liverpool"]}, {"n": "Cody Gakpo", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["psv", "liverpool"]}, {"n": "Diogo Jota", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["atletico", "porto", "liverpool"]}, {"n": "Federico Chiesa", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["fiorentina", "juventus", "liverpool"]}, {"n": "Ryan Gravenberch", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "bayern", "liverpool"]}, {"n": "Son Heung-min", "p": "Forvet", "c": "Güney Kore 🇰🇷", "t": ["leverkusen", "tottenham"]}, {"n": "James Maddison", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["leicester", "tottenham"]}, {"n": "Richarlison", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["everton", "tottenham"]}, {"n": "Dejan Kulusevski", "p": "Kanat", "c": "İsveç 🇸🇪", "t": ["atalanta", "juventus", "tottenham"]}, {"n": "Pedro Porro", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["man_city", "sporting", "tottenham"]}, {"n": "Alexander Isak", "p": "Santrafor", "c": "İsveç 🇸🇪", "t": ["dortmund", "real_sociedad", "newcastle"]}, {"n": "Bruno Guimarães", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["lyon", "newcastle"]}, {"n": "Sandro Tonali", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["ac_milan", "newcastle"]}, {"n": "Kieran Trippier", "p": "Sağ Bek", "c": "İngiltere 🇬🇧", "t": ["tottenham", "atletico", "newcastle"]}, {"n": "Douglas Luiz", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["man_city", "aston_villa", "juventus", "girona"]}, {"n": "Emiliano Martínez", "p": "Kaleci", "c": "Arjantin 🇦🇷", "t": ["arsenal", "aston_villa"]}, {"n": "Lucas Digne", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["lille", "psg", "roma", "barcelona", "everton", "aston_villa"]}, {"n": "Amadou Onana", "p": "Orta Saha", "c": "Belçika 🇧🇪", "t": ["lille", "everton", "aston_villa"]}, {"n": "Matthijs de Ligt", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["ajax", "juventus", "bayern", "man_utd"]}, {"n": "Noussair Mazraoui", "p": "Bek", "c": "Fas 🇲🇦", "t": ["ajax", "bayern", "man_utd"]}, {"n": "Lisandro Martínez", "p": "Stoper", "c": "Arjantin 🇦🇷", "t": ["ajax", "man_utd"]}, {"n": "Antony", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["ajax", "man_utd"]}, {"n": "André Onana", "p": "Kaleci", "c": "Kamerun 🇨🇲", "t": ["barcelona", "ajax", "inter", "man_utd"]}, {"n": "Casemiro", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["porto", "real_madrid", "man_utd"]}, {"n": "Raphaël Varane", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["real_madrid", "man_utd"]}, {"n": "Christian Eriksen", "p": "Ofansif Orta Saha", "c": "Danimarka 🇩🇰", "t": ["ajax", "tottenham", "inter", "man_utd"]}, {"n": "Manuel Ugarte", "p": "Ön Libero", "c": "Uruguay 🇺🇾", "t": ["sporting", "psg", "man_utd"]}, {"n": "Joshua Zirkzee", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["bayern", "man_utd", "bologna"]}, {"n": "Julián Álvarez", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["river_plate", "man_city", "atletico"]}, {"n": "Antoine Griezmann", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["real_sociedad", "atletico", "barcelona"]}, {"n": "Álvaro Morata", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["real_madrid", "juventus", "chelsea", "atletico", "ac_milan"]}, {"n": "João Félix", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["benfica", "atletico", "chelsea", "barcelona"]}, {"n": "Memphis Depay", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["psv", "man_utd", "lyon", "barcelona", "atletico"]}, {"n": "İlkay Gündoğan", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["dortmund", "man_city", "barcelona"]}, {"n": "Dani Olmo", "p": "Ofansif Orta Saha", "c": "İspanya 🇪🇸", "t": ["barcelona", "rb_leipzig"]}, {"n": "Ferran Torres", "p": "Forvet", "c": "İspanya 🇪🇸", "t": ["valencia", "man_city", "barcelona"]}, {"n": "Raphinha", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["sporting", "rennes", "barcelona"]}, {"n": "Frenkie de Jong", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "barcelona"]}, {"n": "Jules Koundé", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["sevilla", "barcelona"]}, {"n": "Andreas Christensen", "p": "Stoper", "c": "Danimarka 🇩🇰", "t": ["chelsea", "monchengladbach", "barcelona"]}, {"n": "Marc-André ter Stegen", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["monchengladbach", "barcelona"]}, {"n": "Wojciech Szczęsny", "p": "Kaleci", "c": "Polonya 🇵🇱", "t": ["arsenal", "roma", "juventus", "barcelona"]}, {"n": "Eduardo Camavinga", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["rennes", "real_madrid"]}, {"n": "Aurélien Tchouaméni", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["monaco", "real_madrid"]}, {"n": "Thibaut Courtois", "p": "Kaleci", "c": "Belçika 🇧🇪", "t": ["atletico", "chelsea", "real_madrid"]}, {"n": "David Alaba", "p": "Stoper", "c": "Avusturya 🇦🇹", "t": ["bayern", "real_madrid"]}, {"n": "Antonio Rüdiger", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["stuttgart", "roma", "chelsea", "real_madrid"]}, {"n": "Éder Militão", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["porto", "real_madrid"]}, {"n": "Dani Carvajal", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["leverkusen", "real_madrid"]}, {"n": "Ferland Mendy", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["lyon", "real_madrid"]}, {"n": "Brahim Díaz", "p": "Ofansif Orta Saha", "c": "Fas 🇲🇦", "t": ["man_city", "real_madrid", "ac_milan"]}, {"n": "Kepa Arrizabalaga", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["athletic_bilbao", "chelsea", "real_madrid"]}, {"n": "Ousmane Dembélé", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["rennes", "dortmund", "barcelona", "psg"]}, {"n": "Achraf Hakimi", "p": "Sağ Bek", "c": "Fas 🇲🇦", "t": ["real_madrid", "dortmund", "inter", "psg"]}, {"n": "Gianluigi Donnarumma", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["ac_milan", "psg"]}, {"n": "Marquinhos", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["roma", "psg"]}, {"n": "Vitinha", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["porto", "psg"]}, {"n": "Gonçalo Ramos", "p": "Santrafor", "c": "Portekiz 🇵🇹", "t": ["benfica", "psg"]}, {"n": "Randal Kolo Muani", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["frankfurt", "psg", "juventus"]}, {"n": "Bradley Barcola", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["lyon", "psg"]}, {"n": "Marco Asensio", "p": "Kanat", "c": "İspanya 🇪🇸", "t": ["real_madrid", "psg"]}, {"n": "Fabián Ruiz", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["betis", "napoli", "psg"]}, {"n": "Lucas Hernandez", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["atletico", "bayern", "psg"]}, {"n": "Milan Škriniar", "p": "Stoper", "c": "Slovakya 🇸🇰", "t": ["inter", "psg"]}, {"n": "João Neves", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "psg"]}, {"n": "Leroy Sané", "p": "Kanat", "c": "Almanya 🇩🇪", "t": ["schalke", "man_city", "bayern"]}, {"n": "Serge Gnabry", "p": "Kanat", "c": "Almanya 🇩🇪", "t": ["arsenal", "werder_bremen", "bayern", "stuttgart"]}, {"n": "Kingsley Coman", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["psg", "juventus", "bayern"]}, {"n": "João Palhinha", "p": "Ön Libero", "c": "Portekiz 🇵🇹", "t": ["sporting", "bayern", "braga", "fulham"]}, {"n": "Alphonso Davies", "p": "Sol Bek", "c": "Kanada 🇨🇦", "t": ["bayern", "real_madrid"]}, {"n": "Dayot Upamecano", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["rb_leipzig", "bayern"]}, {"n": "Min-jae Kim", "p": "Stoper", "c": "Güney Kore 🇰🇷", "t": ["fenerbahce", "napoli", "bayern"]}, {"n": "Marcel Sabitzer", "p": "Orta Saha", "c": "Avusturya 🇦🇹", "t": ["rb_leipzig", "bayern", "man_utd", "dortmund"]}, {"n": "Niklas Süle", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["bayern", "dortmund"]}, {"n": "Mats Hummels", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["bayern", "dortmund", "roma"]}, {"n": "Emre Can", "p": "Ön Libero", "c": "Almanya 🇩🇪", "t": ["bayern", "leverkusen", "liverpool", "juventus", "dortmund"]}, {"n": "Julian Brandt", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["wolfsburg", "leverkusen", "dortmund"]}, {"n": "Gregor Kobel", "p": "Kaleci", "c": "İsviçre 🇨🇭", "t": ["stuttgart", "dortmund"]}, {"n": "Serhou Guirassy", "p": "Santrafor", "c": "Gine 🇬🇳", "t": ["lille", "rennes", "stuttgart", "dortmund"]}, {"n": "Waldemar Anton", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["stuttgart", "dortmund"]}, {"n": "Granit Xhaka", "p": "Orta Saha", "c": "İsviçre 🇨🇭", "t": ["monchengladbach", "arsenal", "leverkusen"]}, {"n": "Patrik Schick", "p": "Santrafor", "c": "Çekya 🇨🇿", "t": ["roma", "rb_leipzig", "leverkusen"]}, {"n": "Alejandro Grimaldo", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["barcelona", "benfica", "leverkusen"]}, {"n": "Jeremie Frimpong", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["man_city", "leverkusen"]}, {"n": "Jonathan Tah", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["leverkusen", "bayern"]}, {"n": "Xavi Simons", "p": "Ofansif Orta Saha", "c": "Hollanda 🇳🇱", "t": ["barcelona", "psg", "psv", "rb_leipzig"]}, {"n": "Christopher Nkunku", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["psg", "rb_leipzig", "chelsea"]}, {"n": "Castello Lukeba", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lyon", "rb_leipzig"]}, {"n": "Dušan Vlahović", "p": "Santrafor", "c": "Sırbistan 🇷🇸", "t": ["fiorentina", "juventus"]}, {"n": "Teun Koopmeiners", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["atalanta", "juventus"]}, {"n": "Nicolás González", "p": "Kanat", "c": "Arjantin 🇦🇷", "t": ["stuttgart", "fiorentina", "juventus"]}, {"n": "Manuel Locatelli", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["atalanta", "ac_milan", "juventus"]}, {"n": "Weston McKennie", "p": "Orta Saha", "c": "ABD 🇺🇸", "t": ["schalke", "juventus"]}, {"n": "Arkadiusz Milik", "p": "Santrafor", "c": "Polonya 🇵🇱", "t": ["leverkusen", "ajax", "napoli", "marseille", "juventus"]}, {"n": "Timothy Weah", "p": "Kanat", "c": "ABD 🇺🇸", "t": ["psg", "lille", "juventus"]}, {"n": "Pierre Kalulu", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lyon", "ac_milan", "juventus"]}, {"n": "Rafael Leão", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "lille", "ac_milan"]}, {"n": "Christian Pulisic", "p": "Kanat", "c": "ABD 🇺🇸", "t": ["dortmund", "chelsea", "ac_milan"]}, {"n": "Theo Hernández", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["atletico", "real_madrid", "real_sociedad", "ac_milan"]}, {"n": "Fikayo Tomori", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["chelsea", "ac_milan"]}, {"n": "Mike Maignan", "p": "Kaleci", "c": "Fransa 🇫🇷", "t": ["psg", "lille", "ac_milan"]}, {"n": "Ruben Loftus-Cheek", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["chelsea", "ac_milan"]}, {"n": "Tammy Abraham", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["chelsea", "aston_villa", "roma", "ac_milan"]}, {"n": "Ismaël Bennacer", "p": "Orta Saha", "c": "Cezayir 🇩🇿", "t": ["arsenal", "ac_milan"]}, {"n": "Youssouf Fofana", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["monaco", "ac_milan"]}, {"n": "Emerson Royal", "p": "Sağ Bek", "c": "Brezilya 🇧🇷", "t": ["betis", "barcelona", "tottenham", "ac_milan"]}, {"n": "Marcus Thuram", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["monchengladbach", "inter"]}, {"n": "Hakan Çalhanoğlu", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["leverkusen", "ac_milan", "inter"]}, {"n": "Alessandro Bastoni", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["atalanta", "inter"]}, {"n": "Benjamin Pavard", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lille", "stuttgart", "bayern", "inter"]}, {"n": "Henrikh Mkhitaryan", "p": "Ofansif Orta Saha", "c": "Ermenistan 🇦🇲", "t": ["dortmund", "man_utd", "arsenal", "roma", "inter"]}, {"n": "Yann Sommer", "p": "Kaleci", "c": "İsviçre 🇨🇭", "t": ["monchengladbach", "bayern", "inter"]}, {"n": "Denzel Dumfries", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["psv", "inter"]}, {"n": "Piotr Zieliński", "p": "Orta Saha", "c": "Polonya 🇵🇱", "t": ["napoli", "inter"]}, {"n": "Mehdi Taremi", "p": "Santrafor", "c": "İran 🇮🇷", "t": ["porto", "inter"]}, {"n": "Matteo Darmian", "p": "Sağ Bek", "c": "İtalya 🇮🇹", "t": ["ac_milan", "man_utd", "inter"]}, {"n": "Romelu Lukaku", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["chelsea", "everton", "man_utd", "inter", "roma", "napoli"]}, {"n": "Victor Osimhen", "p": "Santrafor", "c": "Nijerya 🇳🇬", "t": ["wolfsburg", "lille", "napoli", "galatasaray"]}, {"n": "Scott McTominay", "p": "Orta Saha", "c": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿", "t": ["man_utd", "napoli"]}, {"n": "Billy Gilmour", "p": "Orta Saha", "c": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿", "t": ["chelsea", "napoli", "brighton"]}, {"n": "Leonardo Spinazzola", "p": "Sol Bek", "c": "İtalya 🇮🇹", "t": ["juventus", "atalanta", "roma", "napoli"]}, {"n": "Matteo Politano", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["roma", "inter", "napoli"]}, {"n": "Paulo Dybala", "p": "Forvet", "c": "Arjantin 🇦🇷", "t": ["juventus", "roma"]}, {"n": "Gianluca Mancini", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["fiorentina", "atalanta", "roma"]}, {"n": "Bryan Cristante", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["ac_milan", "benfica", "atalanta", "roma"]}, {"n": "Stephan El Shaarawy", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["ac_milan", "monaco", "roma"]}, {"n": "Alexis Sánchez", "p": "Kanat", "c": "Şili 🇨🇱", "t": ["river_plate", "barcelona", "arsenal", "man_utd", "inter", "marseille"]}, {"n": "Pierre-Emerick Aubameyang", "p": "Santrafor", "c": "Gabon 🇬🇦", "t": ["ac_milan", "lille", "monaco", "dortmund", "arsenal", "barcelona", "chelsea", "marseille"]}, {"n": "Mason Greenwood", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["man_utd", "marseille"]}, {"n": "Adrien Rabiot", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["psg", "juventus", "marseille"]}, {"n": "Gerónimo Rulli", "p": "Kaleci", "c": "Arjantin 🇦🇷", "t": ["real_sociedad", "villarreal", "ajax", "marseille"]}, {"n": "Geoffrey Kondogbia", "p": "Ön Libero", "c": "Orta Afrika 🇨🇫", "t": ["sevilla", "monaco", "inter", "valencia", "atletico", "marseille"]}, {"n": "Amine Harit", "p": "Ofansif Orta Saha", "c": "Fas 🇲🇦", "t": ["schalke", "marseille"]}, {"n": "Alexandre Lacazette", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["lyon", "arsenal"]}, {"n": "Corentin Tolisso", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["lyon", "bayern"]}, {"n": "Wilfried Zaha", "p": "Kanat", "c": "Fildişi Sahili 🇨🇮", "t": ["man_utd", "galatasaray", "lyon"]}, {"n": "Georges Mikautadze", "p": "Santrafor", "c": "Gürcistan 🇬🇪", "t": ["ajax", "lyon"]}, {"n": "Said Benrahma", "p": "Kanat", "c": "Cezayir 🇩🇿", "t": ["nice", "west_ham", "lyon"]}, {"n": "Nemanja Matić", "p": "Ön Libero", "c": "Sırbistan 🇷🇸", "t": ["chelsea", "benfica", "man_utd", "roma", "rennes", "lyon"]}, {"n": "Nicolas Tagliafico", "p": "Sol Bek", "c": "Arjantin 🇦🇷", "t": ["ajax", "lyon"]}, {"n": "Wissam Ben Yedder", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["sevilla", "monaco"]}, {"n": "Takumi Minamino", "p": "Kanat", "c": "Japonya 🇯🇵", "t": ["liverpool", "monaco"]}, {"n": "Folarin Balogun", "p": "Santrafor", "c": "ABD 🇺🇸", "t": ["arsenal", "monaco"]}, {"n": "Denis Zakaria", "p": "Orta Saha", "c": "İsviçre 🇨🇭", "t": ["monchengladbach", "juventus", "chelsea", "monaco"]}, {"n": "Thilo Kehrer", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["schalke", "psg", "west_ham", "monaco"]}, {"n": "Jordan Teze", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["psv", "monaco"]}, {"n": "Enes Ünal", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["man_city", "villarreal", "getafe", "bournemouth"]}, {"n": "Nihat Kahveci", "p": "Forvet", "c": "Türkiye 🇹🇷", "t": ["besiktas", "real_sociedad", "villarreal"]}, {"n": "Yusuf Yazıcı", "p": "Ofansif Orta Saha", "c": "Türkiye 🇹🇷", "t": ["trabzonspor", "lille"]}, {"n": "Mesut Özil", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["schalke", "werder_bremen", "real_madrid", "arsenal", "fenerbahce", "basaksehir"]}, {"n": "Arda Turan", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "atletico", "barcelona", "basaksehir"]}, {"n": "Burak Yılmaz", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["besiktas", "fenerbahce", "trabzonspor", "galatasaray", "lille"]}, {"n": "Vincent Aboubakar", "p": "Santrafor", "c": "Kamerun 🇨🇲", "t": ["porto", "besiktas", "al_nassr"]}, {"n": "Cenk Tosun", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["frankfurt", "besiktas", "everton", "fenerbahce", "crystal_palace"]}, {"n": "Emre Belözoğlu", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "inter", "newcastle", "fenerbahce", "atletico", "basaksehir"]}, {"n": "Selçuk İnan", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["trabzonspor", "galatasaray"]}, {"n": "Rüştü Reçber", "p": "Kaleci", "c": "Türkiye 🇹🇷", "t": ["fenerbahce", "barcelona", "besiktas"]}, {"n": "Hakan Şükür", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "inter"]}, {"n": "Nuri Şahin", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["dortmund", "feyenoord", "real_madrid", "liverpool", "werder_bremen"]}, {"n": "Hamit Altıntop", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["schalke", "bayern", "real_madrid", "galatasaray"]}, {"n": "Halil Altıntop", "p": "Forvet", "c": "Türkiye 🇹🇷", "t": ["schalke", "frankfurt", "trabzonspor"]}, {"n": "Çağlar Söyüncü", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["leicester", "atletico", "fenerbahce", "freiburg"]}, {"n": "Merih Demiral", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["fenerbahce", "sporting", "juventus", "atalanta", "al_ahli"]}, {"n": "Cengiz Ünder", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["basaksehir", "roma", "leicester", "marseille", "fenerbahce"]}, {"n": "Zeki Çelik", "p": "Sağ Bek", "c": "Türkiye 🇹🇷", "t": ["lille", "roma"]}, {"n": "Kerem Aktürkoğlu", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["basaksehir", "galatasaray", "benfica"]}, {"n": "Orkun Kökçü", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["feyenoord", "benfica"]}, {"n": "Salih Özcan", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["dortmund", "wolfsburg"]}, {"n": "Ozan Kabak", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "stuttgart", "schalke", "liverpool"]}, {"n": "Yusuf Demir", "p": "Ofansif Orta Saha", "c": "Avusturya 🇦🇹", "t": ["barcelona", "galatasaray"]}, {"n": "Caner Erkin", "p": "Sol Bek", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "fenerbahce", "inter", "besiktas", "basaksehir"]}, {"n": "Gökhan Gönül", "p": "Sağ Bek", "c": "Türkiye 🇹🇷", "t": ["fenerbahce", "besiktas"]}, {"n": "Mehmet Topal", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "valencia", "fenerbahce", "basaksehir", "besiktas"]}, {"n": "Oğuzhan Özyakup", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["arsenal", "besiktas", "feyenoord"]}, {"n": "Tolgay Arslan", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["dortmund", "besiktas", "fenerbahce"]}, {"n": "İrfan Can Kahveci", "p": "Ofansif Orta Saha", "c": "Türkiye 🇹🇷", "t": ["basaksehir", "fenerbahce"]}, {"n": "Yunus Akgün", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "leicester"]}, {"n": "Mauro Icardi", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["barcelona", "inter", "psg", "galatasaray", "sampdoria"]}, {"n": "Dries Mertens", "p": "Forvet", "c": "Belçika 🇧🇪", "t": ["psv", "napoli", "galatasaray"]}, {"n": "Lucas Torreira", "p": "Ön Libero", "c": "Uruguay 🇺🇾", "t": ["arsenal", "atletico", "fiorentina", "galatasaray", "sampdoria"]}, {"n": "Fernando Muslera", "p": "Kaleci", "c": "Uruguay 🇺🇾", "t": ["lazio", "galatasaray"]}, {"n": "Didier Drogba", "p": "Santrafor", "c": "Fildişi Sahili 🇨🇮", "t": ["marseille", "chelsea", "galatasaray"]}, {"n": "Wesley Sneijder", "p": "Ofansif Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "real_madrid", "inter", "galatasaray", "nice"]}, {"n": "Radamel Falcao", "p": "Santrafor", "c": "Kolombiya 🇨🇴", "t": ["river_plate", "porto", "atletico", "monaco", "man_utd", "chelsea", "galatasaray"]}, {"n": "Robin van Persie", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["feyenoord", "arsenal", "man_utd", "fenerbahce"]}, {"n": "Roberto Carlos", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["inter", "real_madrid", "fenerbahce"]}, {"n": "Alex de Souza", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["flamengo", "fenerbahce"]}, {"n": "Nicolas Anelka", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["psg", "arsenal", "real_madrid", "liverpool", "man_city", "fenerbahce", "chelsea", "juventus"]}, {"n": "Dirk Kuyt", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["feyenoord", "liverpool", "fenerbahce"]}, {"n": "Mario Balotelli", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["inter", "man_city", "ac_milan", "liverpool", "nice", "marseille"]}, {"n": "Loris Karius", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["stuttgart", "man_city", "liverpool", "besiktas", "newcastle"]}, {"n": "Mario Gómez", "p": "Santrafor", "c": "Almanya 🇩🇪", "t": ["stuttgart", "bayern", "fiorentina", "besiktas", "wolfsburg"]}, {"n": "Demba Ba", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["west_ham", "newcastle", "chelsea", "besiktas", "basaksehir"]}, {"n": "Shinji Kagawa", "p": "Ofansif Orta Saha", "c": "Japonya 🇯🇵", "t": ["dortmund", "man_utd", "besiktas"]}, {"n": "Álvaro Negredo", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["real_madrid", "sevilla", "man_city", "valencia", "besiktas"]}, {"n": "Ryan Babel", "p": "Kanat", "c": "Hollanda 🇳🇱", "t": ["ajax", "liverpool", "besiktas", "galatasaray"]}, {"n": "Alex Oxlade-Chamberlain", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["arsenal", "liverpool", "besiktas", "southampton"]}, {"n": "Wout Weghorst", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["wolfsburg", "besiktas", "man_utd", "ajax"]}, {"n": "Anderson Talisca", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["benfica", "besiktas", "al_nassr"]}, {"n": "Alex Telles", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["galatasaray", "inter", "porto", "man_utd", "sevilla", "al_nassr"]}, {"n": "Pepe", "p": "Stoper", "c": "Portekiz 🇵🇹", "t": ["porto", "real_madrid", "besiktas"]}, {"n": "Ricardo Quaresma", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "barcelona", "porto", "inter", "chelsea", "besiktas", "al_ahli"]}, {"n": "Dele Alli", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["tottenham", "everton", "besiktas"]}, {"n": "Edin Džeko", "p": "Santrafor", "c": "Bosna Hersek 🇧🇦", "t": ["wolfsburg", "man_city", "roma", "inter", "fenerbahce"]}, {"n": "Dušan Tadić", "p": "Ofansif Orta Saha", "c": "Sırbistan 🇷🇸", "t": ["ajax", "fenerbahce", "southampton"]}, {"n": "Fred", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["man_utd", "fenerbahce"]}, {"n": "Allan Saint-Maximin", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["monaco", "nice", "newcastle", "al_ahli", "fenerbahce"]}, {"n": "Youssef En-Nesyri", "p": "Santrafor", "c": "Fas 🇲🇦", "t": ["sevilla", "fenerbahce"]}, {"n": "Filip Kostić", "p": "Kanat", "c": "Sırbistan 🇷🇸", "t": ["stuttgart", "frankfurt", "juventus", "fenerbahce"]}, {"n": "Sofyan Amrabat", "p": "Ön Libero", "c": "Fas 🇲🇦", "t": ["feyenoord", "fiorentina", "man_utd", "fenerbahce", "club_brugge"]}, {"n": "Michy Batshuayi", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["marseille", "chelsea", "dortmund", "valencia", "besiktas", "fenerbahce", "galatasaray", "crystal_palace"]}, {"n": "Gheorghe Hagi", "p": "Ofansif Orta Saha", "c": "Romanya 🇷🇴", "t": ["real_madrid", "barcelona", "galatasaray"]}, {"n": "Gheorghe Popescu", "p": "Stoper", "c": "Romanya 🇷🇴", "t": ["psv", "tottenham", "barcelona", "galatasaray"]}, {"n": "Mario Jardel", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["porto", "galatasaray", "sporting"]}, {"n": "Felipe Melo", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["flamengo", "fiorentina", "juventus", "galatasaray", "inter"]}, {"n": "Bafétimbi Gomis", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["lyon", "marseille", "galatasaray", "al_hilal"]}, {"n": "Franck Ribéry", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["galatasaray", "marseille", "bayern", "fiorentina"]}, {"n": "Pierre van Hooijdonk", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["benfica", "feyenoord", "fenerbahce"]}, {"n": "Jay-Jay Okocha", "p": "Ofansif Orta Saha", "c": "Nijerya 🇳🇬", "t": ["frankfurt", "fenerbahce", "psg"]}, {"n": "Stephen Appiah", "p": "Orta Saha", "c": "Gana 🇬🇭", "t": ["juventus", "fenerbahce"]}, {"n": "Mateja Kežman", "p": "Santrafor", "c": "Sırbistan 🇷🇸", "t": ["psv", "chelsea", "atletico", "fenerbahce", "psg"]}, {"n": "Moussa Sow", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["rennes", "lille", "fenerbahce", "al_ahli"]}, {"n": "Mamadou Niang", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["marseille", "fenerbahce", "besiktas"]}, {"n": "Guti", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["real_madrid", "besiktas"]}, {"n": "Gary Medel", "p": "Ön Libero", "c": "Şili 🇨🇱", "t": ["boca_juniors", "sevilla", "inter", "besiktas"]}, {"n": "Domagoj Vida", "p": "Stoper", "c": "Hırvatistan 🇭🇷", "t": ["leverkusen", "besiktas"]}, {"n": "Dusko Tosic", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["werder_bremen", "betis", "besiktas"]}, {"n": "Marcelo Guedes", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["santos", "psv", "besiktas", "lyon"]}, {"n": "Adriano Correia", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["sevilla", "barcelona", "besiktas"]}, {"n": "Rafa Silva", "p": "Ofansif Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "besiktas", "braga"]}, {"n": "Gabriel Paulista", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["villarreal", "arsenal", "valencia", "atletico", "besiktas"]}, {"n": "João Mário", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["sporting", "inter", "west_ham", "benfica", "besiktas"]}, {"n": "Arthur Masuaku", "p": "Sol Bek", "c": "Kongo DC 🇨🇩", "t": ["west_ham", "besiktas"]}, {"n": "Ante Rebić", "p": "Kanat", "c": "Hırvatistan 🇭🇷", "t": ["fiorentina", "rb_leipzig", "frankfurt", "ac_milan", "besiktas"]}, {"n": "Eric Bailly", "p": "Stoper", "c": "Fildişi Sahili 🇨🇮", "t": ["villarreal", "man_utd", "marseille", "besiktas"]}, {"n": "Milot Rashica", "p": "Kanat", "c": "Kosova 🇽🇰", "t": ["werder_bremen", "galatasaray", "besiktas"]}, {"n": "Gedson Fernandes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "tottenham", "galatasaray", "besiktas"]}, {"n": "Ronaldinho", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["psg", "barcelona", "ac_milan", "flamengo"]}, {"n": "Kaká", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["ac_milan", "real_madrid"]}, {"n": "David Beckham", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["man_utd", "real_madrid", "la_galaxy", "ac_milan", "psg"]}, {"n": "Thierry Henry", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["monaco", "juventus", "arsenal", "barcelona"]}, {"n": "Andrea Pirlo", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["inter", "ac_milan", "juventus"]}, {"n": "Ronaldo Nazário", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["psv", "barcelona", "inter", "real_madrid", "ac_milan"]}, {"n": "Zinedine Zidane", "p": "Ofansif Orta Saha", "c": "Fransa 🇫🇷", "t": ["juventus", "real_madrid"]}, {"n": "Roberto Baggio", "p": "Forvet", "c": "İtalya 🇮🇹", "t": ["fiorentina", "juventus", "ac_milan", "inter"]}, {"n": "Sergio Agüero", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["atletico", "man_city", "barcelona"]}, {"n": "Carlos Tevez", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["boca_juniors", "west_ham", "man_utd", "man_city", "juventus"]}, {"n": "Samuel Eto'o", "p": "Santrafor", "c": "Kamerun 🇨🇲", "t": ["real_madrid", "barcelona", "inter", "chelsea", "everton"]}, {"n": "Clarence Seedorf", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "real_madrid", "inter", "ac_milan"]}, {"n": "Edgar Davids", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan", "juventus", "barcelona", "inter", "tottenham"]}, {"n": "Patrick Vieira", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["ac_milan", "arsenal", "juventus", "inter", "man_city"]}, {"n": "Dennis Bergkamp", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["ajax", "inter", "arsenal"]}, {"n": "Hernán Crespo", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["river_plate", "lazio", "inter", "chelsea", "ac_milan"]}, {"n": "Michael Ballack", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["leverkusen", "bayern", "chelsea"]}, {"n": "Fernando Torres", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["atletico", "liverpool", "chelsea", "ac_milan"]}, {"n": "Steven Gerrard", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["liverpool", "la_galaxy"]}, {"n": "Frank Lampard", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["west_ham", "chelsea", "man_city"]}, {"n": "Wayne Rooney", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["everton", "man_utd"]}, {"n": "Michael Owen", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["liverpool", "real_madrid", "newcastle", "man_utd"]}, {"n": "Rivaldo", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["barcelona", "ac_milan"]}, {"n": "Robinho", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "real_madrid", "man_city", "ac_milan", "basaksehir"]}, {"n": "Patrick Kluivert", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan", "barcelona", "newcastle", "valencia", "psv", "lille"]}, {"n": "Marc Overmars", "p": "Kanat", "c": "Hollanda 🇳🇱", "t": ["ajax", "arsenal", "barcelona"]}, {"n": "Gabriel Batistuta", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["river_plate", "boca_juniors", "fiorentina", "roma", "inter"]}, {"n": "Andriy Shevchenko", "p": "Santrafor", "c": "Ukrayna 🇺🇦", "t": ["ac_milan", "chelsea"]}, {"n": "Fabio Cannavaro", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["napoli", "inter", "juventus", "real_madrid"]}, {"n": "Alessandro Nesta", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["lazio", "ac_milan"]}, {"n": "Filippo Inzaghi", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["atalanta", "juventus", "ac_milan"]}, {"n": "Paul Pogba", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["man_utd", "juventus"]}, {"n": "Eden Hazard", "p": "Kanat", "c": "Belçika 🇧🇪", "t": ["lille", "chelsea", "real_madrid"]}, {"n": "Philippe Coutinho", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["inter", "liverpool", "barcelona", "bayern", "aston_villa"]}, {"n": "Kalidou Koulibaly", "p": "Stoper", "c": "Senegal 🇸🇳", "t": ["napoli", "chelsea", "al_hilal"]}, {"n": "Marcelo Brozović", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["inter", "al_nassr"]}, {"n": "Luís Figo", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "barcelona", "real_madrid", "inter"]}, {"n": "Xabi Alonso", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["real_sociedad", "liverpool", "real_madrid", "bayern"]}, {"n": "Ruud van Nistelrooy", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["psv", "man_utd", "real_madrid"]}, {"n": "Diego Forlán", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["man_utd", "villarreal", "atletico", "inter"]}, {"n": "David Villa", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["valencia", "barcelona", "atletico"]}, {"n": "Cesc Fàbregas", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["arsenal", "barcelona", "chelsea", "monaco"]}, {"n": "Claude Makélélé", "p": "Ön Libero", "c": "Fransa 🇫🇷", "t": ["marseille", "real_madrid", "chelsea", "psg"]}, {"n": "Javier Mascherano", "p": "Ön Libero", "c": "Arjantin 🇦🇷", "t": ["river_plate", "west_ham", "liverpool", "barcelona"]}, {"n": "Pepe Reina", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["barcelona", "villarreal", "liverpool", "napoli", "bayern", "ac_milan", "aston_villa", "lazio"]}, {"n": "Jens Lehmann", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["schalke", "ac_milan", "dortmund", "arsenal", "stuttgart"]}, {"n": "Petr Čech", "p": "Kaleci", "c": "Çekya 🇨🇿", "t": ["rennes", "chelsea", "arsenal"]}, {"n": "Edwin van der Sar", "p": "Kaleci", "c": "Hollanda 🇳🇱", "t": ["ajax", "juventus", "man_utd"]}, {"n": "Peter Schmeichel", "p": "Kaleci", "c": "Danimarka 🇩🇰", "t": ["man_utd", "sporting", "aston_villa", "man_city"]}, {"n": "Kasper Schmeichel", "p": "Kaleci", "c": "Danimarka 🇩🇰", "t": ["man_city", "leicester", "nice"]}, {"n": "John Terry", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["chelsea", "aston_villa"]}, {"n": "Rio Ferdinand", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["west_ham", "man_utd"]}, {"n": "Nemanja Vidić", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["man_utd", "inter"]}, {"n": "Patrice Evra", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["nice", "monaco", "man_utd", "juventus", "marseille", "west_ham"]}, {"n": "Sol Campbell", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["tottenham", "arsenal", "newcastle"]}, {"n": "Ashley Cole", "p": "Sol Bek", "c": "İngiltere 🇬🇧", "t": ["arsenal", "chelsea", "roma", "la_galaxy"]}, {"n": "Jaap Stam", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["psv", "man_utd", "lazio", "ac_milan", "ajax"]}, {"n": "Ruud Gullit", "p": "Ofansif Orta Saha", "c": "Hollanda 🇳🇱", "t": ["feyenoord", "psv", "ac_milan", "chelsea"]}, {"n": "Marco van Basten", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan"]}, {"n": "Frank Rijkaard", "p": "Ön Libero", "c": "Hollanda 🇳🇱", "t": ["ajax", "sporting", "ac_milan"]}, {"n": "Ronald Koeman", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["ajax", "psv", "barcelona", "feyenoord"]}, {"n": "Romário", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["psv", "barcelona", "flamengo", "valencia"]}, {"n": "Bebeto", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["flamengo", "sevilla", "al_ittihad"]}, {"n": "Dunga", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["santos", "fiorentina", "stuttgart"]}, {"n": "Cafu", "p": "Sağ Bek", "c": "Brezilya 🇧🇷", "t": ["roma", "ac_milan"]}, {"n": "Roberto Mancini", "p": "Forvet", "c": "İtalya 🇮🇹", "t": ["lazio", "leicester"]}, {"n": "Gianfranco Zola", "p": "Forvet", "c": "İtalya 🇮🇹", "t": ["napoli", "chelsea"]}, {"n": "Gianluca Vialli", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["juventus", "chelsea"]}, {"n": "Fabrizio Ravanelli", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["juventus", "marseille", "lazio"]}, {"n": "Christian Panucci", "p": "Sağ Bek", "c": "İtalya 🇮🇹", "t": ["ac_milan", "real_madrid", "inter", "chelsea", "monaco", "roma"]}, {"n": "Attilio Lombardo", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["juventus", "lazio"]}, {"n": "Robert Prosinečki", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["real_madrid", "barcelona", "sevilla"]}, {"n": "Davor Šuker", "p": "Santrafor", "c": "Hırvatistan 🇭🇷", "t": ["sevilla", "real_madrid", "arsenal", "west_ham"]}, {"n": "Predrag Mijatović", "p": "Santrafor", "c": "Karadağ 🇲🇪", "t": ["valencia", "real_madrid", "fiorentina"]}, {"n": "Siniša Mihajlović", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["roma", "lazio", "inter"]}, {"n": "Vladimir Jugović", "p": "Orta Saha", "c": "Sırbistan 🇷🇸", "t": ["juventus", "lazio", "atletico", "inter", "monaco"]}, {"n": "Hristo Stoichkov", "p": "Forvet", "c": "Bulgaristan 🇧🇬", "t": ["barcelona", "al_nassr"]}, {"n": "Yordan Letchkov", "p": "Orta Saha", "c": "Bulgaristan 🇧🇬", "t": ["marseille", "besiktas"]}, {"n": "Krassimir Balakov", "p": "Ofansif Orta Saha", "c": "Bulgaristan 🇧🇬", "t": ["sporting", "stuttgart"]}, {"n": "Dimitar Berbatov", "p": "Santrafor", "c": "Bulgaristan 🇧🇬", "t": ["leverkusen", "tottenham", "man_utd", "monaco"]}, {"n": "Martin Petrov", "p": "Kanat", "c": "Bulgaristan 🇧🇬", "t": ["wolfsburg", "atletico", "man_city"]}, {"n": "Adrian Mutu", "p": "Forvet", "c": "Romanya 🇷🇴", "t": ["inter", "chelsea", "juventus", "fiorentina"]}, {"n": "Cristian Chivu", "p": "Stoper", "c": "Romanya 🇷🇴", "t": ["ajax", "roma", "inter"]}, {"n": "Ilie Dumitrescu", "p": "Kanat", "c": "Romanya 🇷🇴", "t": ["tottenham", "sevilla", "west_ham"]}, {"n": "Gheorghe Craioveanu", "p": "Forvet", "c": "Romanya 🇷🇴", "t": ["real_sociedad", "villarreal"]}, {"n": "Cosmin Contra", "p": "Sağ Bek", "c": "Romanya 🇷🇴", "t": ["ac_milan", "atletico", "west_ham"]}, {"n": "John Stones", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["everton", "man_city"]}, {"n": "Kalvin Phillips", "p": "Ön Libero", "c": "İngiltere 🇬🇧", "t": ["man_city", "west_ham"]}, {"n": "Matheus Nunes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["sporting", "man_city"]}, {"n": "Josko Gvardiol", "p": "Stoper", "c": "Hırvatistan 🇭🇷", "t": ["rb_leipzig", "man_city"]}, {"n": "Sergio Gómez", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["barcelona", "dortmund", "man_city", "real_sociedad"]}, {"n": "James Milner", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["newcastle", "aston_villa", "man_city", "liverpool"]}, {"n": "Wataru Endo", "p": "Ön Libero", "c": "Japonya 🇯🇵", "t": ["stuttgart", "liverpool"]}, {"n": "Arthur Melo", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["barcelona", "juventus", "liverpool", "fiorentina"]}, {"n": "Naby Keïta", "p": "Orta Saha", "c": "Gine 🇬🇳", "t": ["rb_leipzig", "liverpool", "werder_bremen"]}, {"n": "Xherdan Shaqiri", "p": "Kanat", "c": "İsviçre 🇨🇭", "t": ["bayern", "inter", "liverpool", "lyon"]}, {"n": "Daniel Sturridge", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["man_city", "chelsea", "liverpool", "trabzonspor"]}, {"n": "Christian Benteke", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["aston_villa", "liverpool"]}, {"n": "Andy Carroll", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["newcastle", "liverpool", "west_ham"]}, {"n": "Stewart Downing", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["aston_villa", "liverpool", "west_ham"]}, {"n": "Martin Škrtel", "p": "Stoper", "c": "Slovakya 🇸🇰", "t": ["liverpool", "fenerbahce", "atalanta", "basaksehir"]}, {"n": "Lucas Leiva", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["liverpool", "lazio"]}, {"n": "Alberto Moreno", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["sevilla", "liverpool", "villarreal"]}, {"n": "Dejan Lovren", "p": "Stoper", "c": "Hırvatistan 🇭🇷", "t": ["lyon", "liverpool"]}, {"n": "Mamadou Sakho", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["psg", "liverpool"]}, {"n": "Raul Meireles", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["porto", "liverpool", "chelsea", "fenerbahce"]}, {"n": "Yossi Benayoun", "p": "Ofansif Orta Saha", "c": "İsrail 🇮🇱", "t": ["west_ham", "liverpool", "chelsea", "arsenal"]}, {"n": "Álvaro Arbeloa", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["real_madrid", "liverpool", "west_ham"]}, {"n": "Fábio Aurélio", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["valencia", "liverpool"]}, {"n": "Harry Kewell", "p": "Kanat", "c": "Avustralya 🇦🇺", "t": ["liverpool", "galatasaray"]}, {"n": "Milan Baroš", "p": "Santrafor", "c": "Çekya 🇨🇿", "t": ["liverpool", "aston_villa", "lyon", "galatasaray"]}, {"n": "Jerzy Dudek", "p": "Kaleci", "c": "Polonya 🇵🇱", "t": ["feyenoord", "liverpool", "real_madrid"]}, {"n": "Dietmar Hamann", "p": "Ön Libero", "c": "Almanya 🇩🇪", "t": ["bayern", "newcastle", "liverpool", "man_city"]}, {"n": "Sami Hyypiä", "p": "Stoper", "c": "Finlandiya 🇫🇮", "t": ["liverpool", "leverkusen"]}, {"n": "Robbie Keane", "p": "Santrafor", "c": "İrlanda 🇮🇪", "t": ["inter", "tottenham", "liverpool", "west_ham", "la_galaxy", "aston_villa"]}, {"n": "Craig Bellamy", "p": "Forvet", "c": "Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿", "t": ["newcastle", "liverpool", "west_ham", "man_city"]}, {"n": "Jermaine Pennant", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["arsenal", "liverpool"]}, {"n": "Peter Crouch", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["tottenham", "aston_villa", "liverpool"]}, {"n": "Glen Johnson", "p": "Sağ Bek", "c": "İngiltere 🇬🇧", "t": ["west_ham", "chelsea", "liverpool"]}, {"n": "Joe Cole", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["west_ham", "chelsea", "liverpool", "lille", "aston_villa"]}, {"n": "Alberto Aquilani", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["roma", "liverpool", "juventus", "ac_milan", "fiorentina", "sporting"]}, {"n": "Christian Poulsen", "p": "Ön Libero", "c": "Danimarka 🇩🇰", "t": ["schalke", "sevilla", "juventus", "liverpool", "ajax"]}, {"n": "Paul Konchesky", "p": "Sol Bek", "c": "İngiltere 🇬🇧", "t": ["tottenham", "west_ham", "liverpool", "leicester"]}, {"n": "Sebastián Coates", "p": "Stoper", "c": "Uruguay 🇺🇾", "t": ["liverpool", "sporting"]}, {"n": "Luis Alberto", "p": "Ofansif Orta Saha", "c": "İspanya 🇪🇸", "t": ["sevilla", "barcelona", "liverpool", "lazio"]}, {"n": "Iago Aspas", "p": "Forvet", "c": "İspanya 🇪🇸", "t": ["liverpool", "sevilla"]}, {"n": "Lazar Marković", "p": "Kanat", "c": "Sırbistan 🇷🇸", "t": ["benfica", "liverpool", "fenerbahce", "sporting", "trabzonspor"]}, {"n": "Brad Jones", "p": "Kaleci", "c": "Avustralya 🇦🇺", "t": ["liverpool", "feyenoord", "al_nassr"]}, {"n": "Danny Ward", "p": "Kaleci", "c": "Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿", "t": ["liverpool", "leicester"]}, {"n": "Tim Howard", "p": "Kaleci", "c": "ABD 🇺🇸", "t": ["man_utd", "everton"]}, {"n": "Fabian Delph", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["aston_villa", "man_city", "everton"]}, {"n": "Gareth Barry", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["aston_villa", "man_city", "everton"]}, {"n": "Joleon Lescott", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["everton", "man_city", "aston_villa"]}, {"n": "Micah Richards", "p": "Sağ Bek", "c": "İngiltere 🇬🇧", "t": ["man_city", "fiorentina", "aston_villa"]}, {"n": "Wayne Bridge", "p": "Sol Bek", "c": "İngiltere 🇬🇧", "t": ["chelsea", "man_city", "west_ham"]}, {"n": "Shaun Wright-Phillips", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["man_city", "chelsea"]}, {"n": "Scott Sinclair", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["chelsea", "man_city", "aston_villa"]}, {"n": "Jack Rodwell", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["everton", "man_city"]}, {"n": "Wilfried Bony", "p": "Santrafor", "c": "Fildişi Sahili 🇨🇮", "t": ["man_city", "al_ittihad"]}, {"n": "Eliaquim Mangala", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["porto", "man_city", "valencia", "everton"]}, {"n": "Stevan Jovetić", "p": "Forvet", "c": "Karadağ 🇲🇪", "t": ["fiorentina", "man_city", "inter", "sevilla", "monaco"]}, {"n": "Jesús Navas", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["sevilla", "man_city"]}, {"n": "Nolito", "p": "Kanat", "c": "İspanya 🇪🇸", "t": ["barcelona", "benfica", "man_city", "sevilla"]}, {"n": "Claudio Bravo", "p": "Kaleci", "c": "Şili 🇨🇱", "t": ["real_sociedad", "barcelona", "man_city", "betis"]}, {"n": "Willy Caballero", "p": "Kaleci", "c": "Arjantin 🇦🇷", "t": ["boca_juniors", "man_city", "chelsea"]}, {"n": "Pablo Zabaleta", "p": "Sağ Bek", "c": "Arjantin 🇦🇷", "t": ["man_city", "west_ham"]}, {"n": "Aleksandar Kolarov", "p": "Sol Bek", "c": "Sırbistan 🇷🇸", "t": ["lazio", "man_city", "roma", "inter"]}, {"n": "Matija Nastasić", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["fiorentina", "man_city", "schalke"]}, {"n": "Stefan Savić", "p": "Stoper", "c": "Karadağ 🇲🇪", "t": ["man_city", "fiorentina", "atletico", "trabzonspor"]}, {"n": "Bacary Sagna", "p": "Sağ Bek", "c": "Fransa 🇫🇷", "t": ["arsenal", "man_city"]}, {"n": "Samir Nasri", "p": "Ofansif Orta Saha", "c": "Fransa 🇫🇷", "t": ["marseille", "arsenal", "man_city", "sevilla", "west_ham"]}, {"n": "Gaël Clichy", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["arsenal", "man_city", "basaksehir"]}, {"n": "Alex Iwobi", "p": "Kanat", "c": "Nijerya 🇳🇬", "t": ["arsenal", "everton"]}, {"n": "Donyell Malen", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["ajax", "arsenal", "psv", "dortmund"]}, {"n": "Jeff Reine-Adélaïde", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["arsenal", "lyon", "nice"]}, {"n": "Matteo Guendouzi", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["psg", "arsenal", "marseille", "lazio"]}, {"n": "Bernd Leno", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["stuttgart", "leverkusen", "arsenal"]}, {"n": "Sokratis Papastathopoulos", "p": "Stoper", "c": "Yunanistan 🇬🇷", "t": ["ac_milan", "werder_bremen", "dortmund", "arsenal", "betis"]}, {"n": "Stephan Lichtsteiner", "p": "Sağ Bek", "c": "İsviçre 🇨🇭", "t": ["lille", "lazio", "juventus", "arsenal"]}, {"n": "Shkodran Mustafi", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["everton", "valencia", "arsenal", "schalke"]}, {"n": "Calum Chambers", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["arsenal", "aston_villa"]}, {"n": "David Ospina", "p": "Kaleci", "c": "Kolombiya 🇨🇴", "t": ["nice", "arsenal", "napoli", "al_nassr"]}, {"n": "Mathieu Debuchy", "p": "Sağ Bek", "c": "Fransa 🇫🇷", "t": ["lille", "newcastle", "arsenal"]}, {"n": "Joel Campbell", "p": "Kanat", "c": "Kosta Rika 🇨🇷", "t": ["arsenal", "betis", "villarreal", "sporting"]}, {"n": "Yaya Sanogo", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["arsenal", "ajax"]}, {"n": "Emiliano Viviano", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["fiorentina", "inter", "arsenal", "sporting"]}, {"n": "Kim Källström", "p": "Orta Saha", "c": "İsveç 🇸🇪", "t": ["rennes", "lyon", "arsenal"]}, {"n": "Ignasi Miquel", "p": "Stoper", "c": "İspanya 🇪🇸", "t": ["barcelona", "arsenal", "leicester", "real_sociedad"]}, {"n": "Park Chu-young", "p": "Santrafor", "c": "Güney Kore 🇰🇷", "t": ["monaco", "arsenal"]}, {"n": "Ryo Miyaichi", "p": "Kanat", "c": "Japonya 🇯🇵", "t": ["arsenal", "feyenoord"]}, {"n": "Marouane Chamakh", "p": "Santrafor", "c": "Fas 🇲🇦", "t": ["arsenal", "west_ham"]}, {"n": "Sébastien Squillaci", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["monaco", "lyon", "sevilla", "arsenal"]}, {"n": "Mikaël Silvestre", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["rennes", "inter", "man_utd", "arsenal", "werder_bremen"]}, {"n": "Amaury Bischoff", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["werder_bremen", "arsenal"]}, {"n": "Lassana Diarra", "p": "Ön Libero", "c": "Fransa 🇫🇷", "t": ["chelsea", "arsenal", "real_madrid", "marseille", "psg"]}, {"n": "Eduardo da Silva", "p": "Santrafor", "c": "Hırvatistan 🇭🇷", "t": ["arsenal", "flamengo"]}, {"n": "Julio Baptista", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["sevilla", "real_madrid", "arsenal", "roma"]}, {"n": "Alexandre Song", "p": "Ön Libero", "c": "Kamerun 🇨🇲", "t": ["arsenal", "barcelona", "west_ham"]}, {"n": "Alexander Hleb", "p": "Ofansif Orta Saha", "c": "Belarus 🇧🇾", "t": ["stuttgart", "arsenal", "barcelona", "wolfsburg"]}, {"n": "Mathieu Flamini", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["marseille", "arsenal", "ac_milan"]}, {"n": "Philippe Senderos", "p": "Stoper", "c": "İsviçre 🇨🇭", "t": ["arsenal", "ac_milan", "everton", "valencia", "aston_villa"]}, {"n": "Manuel Almunia", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["arsenal", "west_ham"]}, {"n": "José Antonio Reyes", "p": "Kanat", "c": "İspanya 🇪🇸", "t": ["sevilla", "arsenal", "real_madrid", "atletico", "benfica"]}, {"n": "Kolo Touré", "p": "Stoper", "c": "Fildişi Sahili 🇨🇮", "t": ["arsenal", "man_city", "liverpool"]}, {"n": "Sylvain Wiltord", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["rennes", "arsenal", "lyon", "marseille"]}, {"n": "Lauren", "p": "Sağ Bek", "c": "Kamerun 🇨🇲", "t": ["sevilla", "arsenal"]}, {"n": "Nwankwo Kanu", "p": "Santrafor", "c": "Nijerya 🇳🇬", "t": ["ajax", "inter", "arsenal"]}, {"n": "Emmanuel Petit", "p": "Ön Libero", "c": "Fransa 🇫🇷", "t": ["monaco", "arsenal", "barcelona", "chelsea"]}, {"n": "Santi Cazorla", "p": "Ofansif Orta Saha", "c": "İspanya 🇪🇸", "t": ["villarreal", "arsenal"]}, {"n": "Lukas Podolski", "p": "Forvet", "c": "Almanya 🇩🇪", "t": ["bayern", "arsenal", "inter", "galatasaray"]}, {"n": "Olivier Giroud", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["arsenal", "chelsea", "ac_milan"]}, {"n": "Nacho Monreal", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["arsenal", "real_sociedad"]}, {"n": "Tomas Rosicky", "p": "Ofansif Orta Saha", "c": "Çekya 🇨🇿", "t": ["dortmund", "arsenal"]}, {"n": "Emmanuel Adebayor", "p": "Santrafor", "c": "Togo 🇹🇬", "t": ["monaco", "arsenal", "man_city", "real_madrid", "tottenham", "basaksehir"]}, {"n": "William Gallas", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["marseille", "chelsea", "arsenal", "tottenham"]}, {"n": "Gael Givet", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["monaco", "marseille"]}, {"n": "Djibril Cisse", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["liverpool", "marseille", "lazio"]}, {"n": "Demetrio Albertini", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["ac_milan", "atletico", "lazio", "atalanta", "barcelona"]}, {"n": "Edgaras Jankauskas", "p": "Santrafor", "c": "Litvanya 🇱🇹", "t": ["real_sociedad", "benfica", "porto", "nice"]}, {"n": "Maniche", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "porto", "chelsea", "atletico", "inter", "sporting"]}, {"n": "Costinha", "p": "Ön Libero", "c": "Portekiz 🇵🇹", "t": ["monaco", "porto", "atletico", "atalanta"]}, {"n": "Derlei", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["porto", "benfica", "sporting"]}, {"n": "Carlos Alberto", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["porto", "werder_bremen"]}, {"n": "Helder Postiga", "p": "Santrafor", "c": "Portekiz 🇵🇹", "t": ["porto", "tottenham", "sporting", "valencia", "lazio"]}, {"n": "Hugo Almeida", "p": "Santrafor", "c": "Portekiz 🇵🇹", "t": ["porto", "werder_bremen", "besiktas"]}, {"n": "Bosingwa", "p": "Sağ Bek", "c": "Portekiz 🇵🇹", "t": ["porto", "chelsea", "trabzonspor"]}, {"n": "Paulo Ferreira", "p": "Sağ Bek", "c": "Portekiz 🇵🇹", "t": ["porto", "chelsea"]}, {"n": "Tiago Mendes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "chelsea", "lyon", "juventus", "atletico"]}, {"n": "Ricardo Carvalho", "p": "Stoper", "c": "Portekiz 🇵🇹", "t": ["porto", "chelsea", "real_madrid", "monaco"]}, {"n": "Geremi", "p": "Sağ Bek", "c": "Kamerun 🇨🇲", "t": ["real_madrid", "chelsea", "newcastle"]}, {"n": "Celestine Babayaro", "p": "Sol Bek", "c": "Nijerya 🇳🇬", "t": ["chelsea", "newcastle", "la_galaxy"]}, {"n": "Gus Poyet", "p": "Orta Saha", "c": "Uruguay 🇺🇾", "t": ["chelsea", "tottenham"]}, {"n": "Albert Ferrer", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["barcelona", "chelsea"]}, {"n": "Winston Bogarde", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan", "barcelona", "chelsea"]}, {"n": "Boudewijn Zenden", "p": "Kanat", "c": "Hollanda 🇳🇱", "t": ["psv", "barcelona", "chelsea", "liverpool", "marseille"]}, {"n": "Jesper Gronkjaer", "p": "Kanat", "c": "Danimarka 🇩🇰", "t": ["ajax", "chelsea", "atletico", "stuttgart"]}, {"n": "Eidur Gudjohnsen", "p": "Santrafor", "c": "İzlanda 🇮🇸", "t": ["psv", "chelsea", "barcelona", "monaco", "tottenham"]}, {"n": "Jimmy Floyd Hasselbaink", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["atletico", "chelsea"]}, {"n": "Mark Bosnich", "p": "Kaleci", "c": "Avustralya 🇦🇺", "t": ["man_utd", "aston_villa", "chelsea"]}, {"n": "Ed de Goey", "p": "Kaleci", "c": "Hollanda 🇳🇱", "t": ["feyenoord", "chelsea"]}, {"n": "Carlo Cudicini", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["ac_milan", "lazio", "chelsea", "tottenham", "la_galaxy"]}, {"n": "Asmir Begovic", "p": "Kaleci", "c": "Bosna Hersek 🇧🇦", "t": ["chelsea", "ac_milan", "everton"]}, {"n": "Mark Schwarzer", "p": "Kaleci", "c": "Avustralya 🇦🇺", "t": ["chelsea", "leicester"]}, {"n": "Robert Green", "p": "Kaleci", "c": "İngiltere 🇬🇧", "t": ["west_ham", "chelsea"]}, {"n": "Eduardo", "p": "Kaleci", "c": "Portekiz 🇵🇹", "t": ["benfica", "chelsea"]}, {"n": "Marco Amelia", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["roma", "ac_milan", "chelsea"]}, {"n": "Henrique Hilario", "p": "Kaleci", "c": "Portekiz 🇵🇹", "t": ["porto", "chelsea"]}, {"n": "Roland Sallai", "p": "Kanat", "c": "Macaristan 🇭🇺", "t": ["freiburg", "galatasaray"]}, {"n": "Ismail Jakobs", "p": "Sol Bek", "c": "Senegal 🇸🇳", "t": ["monaco", "galatasaray"]}, {"n": "Davinson Sánchez", "p": "Stoper", "c": "Kolombiya 🇨🇴", "t": ["ajax", "tottenham", "galatasaray"]}, {"n": "Hakim Ziyech", "p": "Kanat", "c": "Fas 🇲🇦", "t": ["ajax", "chelsea", "galatasaray"]}, {"n": "Ferdi Kadıoğlu", "p": "Bek", "c": "Türkiye 🇹🇷", "t": ["fenerbahce", "brighton"]}, {"n": "Ciro Immobile", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["juventus", "genoa", "torino", "dortmund", "sevilla", "lazio", "besiktas"]}, {"n": "Cher Ndour", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["atalanta", "benfica", "psg", "braga", "besiktas"]}, {"n": "Felix Uduokhai", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["wolfsburg", "besiktas"]}, {"n": "Al-Musrati", "p": "Ön Libero", "c": "Libya 🇱🇾", "t": ["braga", "besiktas"]}, {"n": "Okay Yokuşlu", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["celta", "getafe", "trabzonspor"]}, {"n": "Simon Banza", "p": "Santrafor", "c": "Kongo DC 🇨🇩", "t": ["lens", "braga", "trabzonspor"]}, {"n": "Nicolas Pépé", "p": "Kanat", "c": "Fildişi Sahili 🇨🇮", "t": ["lille", "arsenal", "nice", "trabzonspor", "villarreal"]}, {"n": "Thomas Meunier", "p": "Sağ Bek", "c": "Belçika 🇧🇪", "t": ["club_brugge", "psg", "dortmund", "trabzonspor", "lille"]}, {"n": "Marc Bartra", "p": "Stoper", "c": "İspanya 🇪🇸", "t": ["barcelona", "dortmund", "betis", "trabzonspor"]}, {"n": "Mikel Merino", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["dortmund", "newcastle", "real_sociedad", "arsenal"]}, {"n": "Pedro Neto", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["lazio", "wolves", "chelsea"]}, {"n": "Michael Olise", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["crystal_palace", "bayern"]}, {"n": "Pascal Groß", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["hoffenheim", "brighton", "dortmund"]}, {"n": "Michele Di Gregorio", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["inter", "juventus"]}, {"n": "David Neres", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "ajax", "benfica", "napoli"]}, {"n": "Artem Dovbyk", "p": "Santrafor", "c": "Ukrayna 🇺🇦", "t": ["girona", "roma"]}, {"n": "Mario Hermoso", "p": "Stoper", "c": "İspanya 🇪🇸", "t": ["real_madrid", "espanyol", "atletico", "roma"]}, {"n": "David de Gea", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["atletico", "man_utd", "fiorentina"]}, {"n": "Moise Kean", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["juventus", "everton", "psg", "fiorentina"]}];

// Normalize Turkish & accented letters for uniform matching
function _slugify(str) {
  return str
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim();
}

// Expand and enrich player entities at runtime
const FOOTBALLERS = _RAW_PLAYERS.map(function(p) {
  var slug = _slugify(p.n);
  var parts = slug.split(/\s+/);
  var id = parts.length >= 2 ? parts[0] + '_' + parts[parts.length - 1] : parts[0];
  
  var initials = p.n
    .split(/\s+/)
    .filter(function(w) { return w.length > 0; })
    .map(function(w) { return w[0].toUpperCase(); })
    .slice(0, 3)
    .join('');
    
  var bgs = [
    'from-emerald-500 to-teal-700',
    'from-amber-500 to-red-600',
    'from-sky-400 to-blue-600',
    'from-red-600 to-black',
    'from-yellow-400 to-blue-600',
    'from-blue-500 to-indigo-600',
    'from-green-500 to-slate-700',
    'from-purple-500 to-pink-600',
    'from-cyan-500 to-blue-800',
    'from-rose-500 to-orange-500'
  ];
  var bgHash = 0;
  for (var i = 0; i < id.length; i++) {
    bgHash += id.charCodeAt(i);
  }
  var avatarBg = bgs[bgHash % bgs.length];

  var teamNames = p.t.map(function(tid) {
    var tObj = FOOTBALL_TEAMS.find(function(t) { return t.id === tid; });
    return tObj ? tObj.name : tid.replace(/_/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
  }).join(', ');

  return {
    id: id,
    name: p.n,
    position: p.p,
    nationality: p.c,
    avatar: initials || 'FC',
    avatarBg: avatarBg,
    teamsPlayed: p.t,
    details: teamNames
  };
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FOOTBALL_TEAMS, FOOTBALLERS };
}
