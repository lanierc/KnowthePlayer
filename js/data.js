/**
 * Comprehensive Football Database for 1v1 Football Quiz
 * Contains 246+ Top Global Clubs & 208+ Iconic/Modern Footballers
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
    "id": "espanyol",
    "name": "RCD Espanyol",
    "short": "ESP",
    "color": "#0054A6",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "levante",
    "name": "Levante UD",
    "short": "LEV",
    "color": "#A80038",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "rayo",
    "name": "Rayo Vallecano",
    "short": "RAY",
    "color": "#E51B24",
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
    "id": "parma",
    "name": "Parma Calcio",
    "short": "PAR",
    "color": "#FDB913",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "sampdoria",
    "name": "UC Sampdoria",
    "short": "SAM",
    "color": "#00519E",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "bologna",
    "name": "Bologna FC",
    "short": "BOL",
    "color": "#1A2C56",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "udinese",
    "name": "Udinese Calcio",
    "short": "UDI",
    "color": "#000000",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "brescia",
    "name": "Brescia Calcio",
    "short": "BRE",
    "color": "#005B9A",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "palermo",
    "name": "Palermo FC",
    "short": "PAL",
    "color": "#F5A9B8",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "como",
    "name": "Como 1907",
    "short": "COM",
    "color": "#005DAA",
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
    "id": "bournemouth",
    "name": "AFC Bournemouth",
    "short": "BOU",
    "color": "#DA291C",
    "country": "İngiltere 🇬🇧"
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
    "id": "crystal_palace",
    "name": "Crystal Palace",
    "short": "CRY",
    "color": "#1B458F",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "fulham",
    "name": "Fulham FC",
    "short": "FUL",
    "color": "#CC0000",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "southampton",
    "name": "Southampton FC",
    "short": "SOU",
    "color": "#D1242B",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "wolves",
    "name": "Wolverhampton Wanderers",
    "short": "WOL",
    "color": "#FDB913",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "burnley",
    "name": "Burnley FC",
    "short": "BUR",
    "color": "#6C1D45",
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
    "id": "reading",
    "name": "Reading FC",
    "short": "REA",
    "color": "#002B49",
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
    "id": "werder_bremen",
    "name": "Werder Bremen",
    "short": "SVW",
    "color": "#138A36",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "hoffenheim",
    "name": "TSG Hoffenheim",
    "short": "TSG",
    "color": "#1961B4",
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
    "id": "eintracht",
    "name": "Eintracht Frankfurt",
    "short": "SGE",
    "color": "#E1000F",
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
    "id": "nice",
    "name": "OGC Nice",
    "short": "OGN",
    "color": "#000000",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "bordeaux",
    "name": "Girondins Bordeaux",
    "short": "FCGB",
    "color": "#002654",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "lens",
    "name": "RC Lens",
    "short": "RCL",
    "color": "#E30613",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "metz",
    "name": "FC Metz",
    "short": "FCM",
    "color": "#8B0000",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "nantes",
    "name": "FC Nantes",
    "short": "FCN",
    "color": "#FFF100",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "saint_etienne",
    "name": "AS Saint-Étienne",
    "short": "ASSE",
    "color": "#008037",
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
    "id": "maritimo",
    "name": "CS Marítimo",
    "short": "MAR",
    "color": "#008000",
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
    "id": "twente",
    "name": "FC Twente",
    "short": "TWE",
    "color": "#E30613",
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
    "id": "al_ahli",
    "name": "Al Ahli Saudi FC",
    "short": "AHL",
    "color": "#008000",
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
    "id": "new_york_cosmos",
    "name": "New York Cosmos",
    "short": "NYC",
    "color": "#008000",
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
    "id": "fluminense",
    "name": "Fluminense FC",
    "short": "FLU",
    "color": "#8B0000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "corinthians",
    "name": "SC Corinthians",
    "short": "COR",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "palmeiras",
    "name": "SE Palmeiras",
    "short": "PAL",
    "color": "#006437",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "atletico_mineiro",
    "name": "Atlético Mineiro",
    "short": "CAM",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "athletico_paranaense",
    "name": "Athletico Paranaense",
    "short": "CAP",
    "color": "#CC0000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "genk",
    "name": "KRC Genk",
    "short": "GNK",
    "color": "#0055A5",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "anderlecht",
    "name": "RSC Anderlecht",
    "short": "AND",
    "color": "#5C2D91",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "rb_salzburg",
    "name": "FC Red Bull Salzburg",
    "short": "RBS",
    "color": "#E20613",
    "country": "Avusturya 🇦🇹"
  },
  {
    "id": "shakhtar",
    "name": "Shakhtar Donetsk",
    "short": "SHA",
    "color": "#F26522",
    "country": "Ukrayna 🇺🇦"
  },
  {
    "id": "dynamo_kiev",
    "name": "Dynamo Kyiv",
    "short": "DYN",
    "color": "#0055A5",
    "country": "Ukrayna 🇺🇦"
  },
  {
    "id": "olympiacos",
    "name": "Olympiacos FC",
    "short": "OLY",
    "color": "#D1242B",
    "country": "Yunanistan 🇬🇷"
  },
  {
    "id": "zenit",
    "name": "Zenit Saint Petersburg",
    "short": "ZEN",
    "color": "#00A3E0",
    "country": "Rusya 🇷🇺"
  },
  {
    "id": "al_sadd",
    "name": "Al Sadd SC",
    "short": "SAD",
    "color": "#000000",
    "country": "Katar 🇶🇦"
  },
  {
    "id": "vissel_kobe",
    "name": "Vissel Kobe",
    "short": "KOB",
    "color": "#9E0000",
    "country": "Japonya 🇯🇵"
  },
  {
    "id": "gornik_zabrze",
    "name": "Górnik Zabrze",
    "short": "GOR",
    "color": "#0055A5",
    "country": "Polonya 🇵🇱"
  },
  {
    "id": "basel",
    "name": "FC Basel",
    "short": "BAS",
    "color": "#003399",
    "country": "İsviçre 🇨🇭"
  },
  {
    "id": "molde",
    "name": "Molde FK",
    "short": "MOL",
    "color": "#0055A5",
    "country": "Norveç 🇳🇴"
  },
  {
    "id": "atlanta_united",
    "name": "Atlanta United FC",
    "short": "ATL",
    "color": "#800000",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "new_york_red_bulls",
    "name": "New York Red Bulls",
    "short": "NYR",
    "color": "#ED1E36",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "new_york_city",
    "name": "New York City FC",
    "short": "NYC",
    "color": "#6CADDF",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "dc_united",
    "name": "D.C. United",
    "short": "DCU",
    "color": "#000000",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "orlando_city",
    "name": "Orlando City SC",
    "short": "ORL",
    "color": "#612B82",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "malmo",
    "name": "Malmö FF",
    "short": "MFF",
    "color": "#75B2DD",
    "country": "İsveç 🇸🇪"
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
    "id": "gremio",
    "name": "Grêmio",
    "short": "GRE",
    "color": "#0D80BF",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "internacional",
    "name": "SC Internacional",
    "short": "INT",
    "color": "#E50000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "cruzeiro",
    "name": "Cruzeiro EC",
    "short": "CRU",
    "color": "#00529F",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "vasco_da_gama",
    "name": "Vasco da Gama",
    "short": "VAS",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "flamengo",
    "name": "CR Flamengo",
    "short": "FLA",
    "color": "#C3281E",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "botafogo",
    "name": "Botafogo FR",
    "short": "BOT",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "sao_paulo",
    "name": "São Paulo FC",
    "short": "SAO",
    "color": "#DA291C",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "racing_club",
    "name": "Racing Club",
    "short": "RAC",
    "color": "#18A0FB",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "independiente",
    "name": "CA Independiente",
    "short": "IND",
    "color": "#E30613",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "san_lorenzo",
    "name": "San Lorenzo",
    "short": "SLO",
    "color": "#0A2240",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "rosario_central",
    "name": "Rosario Central",
    "short": "ROS",
    "color": "#003399",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "newells_old_boys",
    "name": "Newell's Old Boys",
    "short": "NOB",
    "color": "#000000",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "estudiantes",
    "name": "Estudiantes LP",
    "short": "EST",
    "color": "#E30613",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "velez_sarsfield",
    "name": "Vélez Sarsfield",
    "short": "VEL",
    "color": "#004B87",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "nacional",
    "name": "Club Nacional",
    "short": "NAC",
    "color": "#0038A8",
    "country": "Uruguay 🇺🇾"
  },
  {
    "id": "penarol",
    "name": "CA Peñarol",
    "short": "PEN",
    "color": "#FDB913",
    "country": "Uruguay 🇺🇾"
  },
  {
    "id": "villarreal",
    "name": "Villarreal CF",
    "short": "VIL",
    "color": "#FFE600",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "betis",
    "name": "Real Betis",
    "short": "BET",
    "color": "#0BB364",
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
    "id": "celta",
    "name": "Celta Vigo",
    "short": "CEL",
    "color": "#87D8F7",
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
    "id": "osasuna",
    "name": "CA Osasuna",
    "short": "OSA",
    "color": "#8A1538",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "getafe",
    "name": "Getafe CF",
    "short": "GET",
    "color": "#00539F",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "valladolid",
    "name": "Real Valladolid",
    "short": "VLL",
    "color": "#582C83",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "alaves",
    "name": "Deportivo Alavés",
    "short": "ALA",
    "color": "#0055A5",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "cadiz",
    "name": "Cádiz CF",
    "short": "CAD",
    "color": "#FEE100",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "granada",
    "name": "Granada CF",
    "short": "GRA",
    "color": "#A6192E",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "torino",
    "name": "Torino FC",
    "short": "TOR",
    "color": "#8A1C27",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "genoa",
    "name": "Genoa CFC",
    "short": "GEN",
    "color": "#A6192E",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "hellas_verona",
    "name": "Hellas Verona",
    "short": "VER",
    "color": "#002F6C",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "cagliari",
    "name": "Cagliari Calcio",
    "short": "CAG",
    "color": "#9E1B32",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "sassuolo",
    "name": "US Sassuolo",
    "short": "SAS",
    "color": "#00A352",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "lecce",
    "name": "US Lecce",
    "short": "LEC",
    "color": "#FFD100",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "monza",
    "name": "AC Monza",
    "short": "MON",
    "color": "#E30613",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "empoli",
    "name": "Empoli FC",
    "short": "EMP",
    "color": "#005BAA",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "salernitana",
    "name": "US Salernitana",
    "short": "SAL",
    "color": "#8B0000",
    "country": "İtalya 🇮🇹"
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
    "id": "mainz",
    "name": "FSV Mainz 05",
    "short": "M05",
    "color": "#C8102E",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "augsburg",
    "name": "FC Augsburg",
    "short": "FCA",
    "color": "#BA1B23",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "freiburg",
    "name": "SC Freiburg",
    "short": "SCF",
    "color": "#000000",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "union_berlin",
    "name": "1. FC Union Berlin",
    "short": "FCU",
    "color": "#EE1C25",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "koln",
    "name": "1. FC Köln",
    "short": "KOE",
    "color": "#ED1C24",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "stade_rennais",
    "name": "Stade Rennais",
    "short": "REN",
    "color": "#E30613",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "toulouse",
    "name": "Toulouse FC",
    "short": "TFC",
    "color": "#582C83",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "strasbourg",
    "name": "RC Strasbourg",
    "short": "RCS",
    "color": "#0072CE",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "reims",
    "name": "Stade de Reims",
    "short": "SDR",
    "color": "#ED1C24",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "montpellier",
    "name": "Montpellier HSC",
    "short": "MHS",
    "color": "#003366",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "braga",
    "name": "SC Braga",
    "short": "BRA",
    "color": "#E30613",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "vitoria_guimaraes",
    "name": "Vitória de Guimarães",
    "short": "VSC",
    "color": "#000000",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "adana_demirspor",
    "name": "Adana Demirspor",
    "short": "ADS",
    "color": "#004B87",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "samsunspor",
    "name": "Samsunspor",
    "short": "SAM",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "antalyaspor",
    "name": "Antalyaspor",
    "short": "ANT",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "konyaspor",
    "name": "Konyaspor",
    "short": "KON",
    "color": "#008037",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "sivasspor",
    "name": "Sivasspor",
    "short": "SIV",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "kasimpasa",
    "name": "Kasımpaşa SK",
    "short": "KAS",
    "color": "#002D62",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "alanyaspor",
    "name": "Alanyaspor",
    "short": "ALA",
    "color": "#F58220",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "rizespor",
    "name": "Çaykur Rizespor",
    "short": "RIZ",
    "color": "#008000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "gaziantep",
    "name": "Gaziantep FK",
    "short": "GFK",
    "color": "#A6192E",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "kayserispor",
    "name": "Kayserispor",
    "short": "KAY",
    "color": "#FFD100",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "eyupspor",
    "name": "Eyüpspor",
    "short": "EYU",
    "color": "#582C83",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "fatih_karagumruk",
    "name": "Fatih Karagümrük",
    "short": "FKM",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "goztepe",
    "name": "Göztepe SK",
    "short": "GOZ",
    "color": "#FFD100",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "bursaspor",
    "name": "Bursaspor",
    "short": "BUR",
    "color": "#008000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "eskisehirspor",
    "name": "Eskişehirspor",
    "short": "ESK",
    "color": "#000000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "al_shabab",
    "name": "Al Shabab FC",
    "short": "SHB",
    "color": "#000000",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "al_ettifaq",
    "name": "Al Ettifaq FC",
    "short": "ETT",
    "color": "#008000",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "al_qadsiah",
    "name": "Al Qadsiah FC",
    "short": "QAD",
    "color": "#A6192E",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "west_brom",
    "name": "West Brom",
    "short": "WES",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "dinamo_zagreb",
    "name": "Dinamo Zagreb",
    "short": "DIN",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "bochum",
    "name": "Bochum",
    "short": "BOC",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "danubio",
    "name": "Danubio",
    "short": "DAN",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "juventude",
    "name": "Juventude",
    "short": "JUV",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "austria_wien",
    "name": "Austria Wien",
    "short": "AUS",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "banfield",
    "name": "Banfield",
    "short": "BAN",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "fortuna_sittard",
    "name": "Fortuna Sittard",
    "short": "FOR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "istanbulspor",
    "name": "Istanbulspor",
    "short": "IST",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "watford",
    "name": "Watford",
    "short": "WAT",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "manisaspor",
    "name": "Manisaspor",
    "short": "MAN",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "cska_moscow",
    "name": "Cska Moscow",
    "short": "CSK",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "genclerbirligi",
    "name": "Genclerbirligi",
    "short": "GEN",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "karlsruher",
    "name": "Karlsruher",
    "short": "KAR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "hamburg",
    "name": "Hamburg",
    "short": "HAM",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "sheffield_utd",
    "name": "Sheffield Utd",
    "short": "SHE",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "blackburn",
    "name": "Blackburn",
    "short": "BLA",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "derby_county",
    "name": "Derby County",
    "short": "DER",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "groningen",
    "name": "Groningen",
    "short": "GRO",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "stromsgodset",
    "name": "Stromsgodset",
    "short": "STR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "heerenveen",
    "name": "Heerenveen",
    "short": "HEE",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "vitesse",
    "name": "Vitesse",
    "short": "VIT",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "caen",
    "name": "Caen",
    "short": "CAE",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "zurich",
    "name": "Zurich",
    "short": "ZUR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "sochaux",
    "name": "Sochaux",
    "short": "SOC",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "roeselare",
    "name": "Roeselare",
    "short": "ROE",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "club_brugge",
    "name": "Club Brugge",
    "short": "CLU",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "hajduk_split",
    "name": "Hajduk Split",
    "short": "HAJ",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "ufa",
    "name": "Ufa",
    "short": "UFA",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "wigan",
    "name": "Wigan",
    "short": "WIG",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "newport",
    "name": "Newport",
    "short": "NEW",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "peterborough",
    "name": "Peterborough",
    "short": "PET",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "leeds",
    "name": "Leeds",
    "short": "LEE",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "america_mineiro",
    "name": "America Mineiro",
    "short": "AME",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "novara",
    "name": "Novara",
    "short": "NOV",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "liefering",
    "name": "Liefering",
    "short": "LIE",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "malaga",
    "name": "Malaga",
    "short": "MAL",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "leganes",
    "name": "Leganes",
    "short": "LEG",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "instituto",
    "name": "Instituto",
    "short": "INS",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "partizan",
    "name": "Partizan",
    "short": "PAR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "copenhagen",
    "name": "Copenhagen",
    "short": "COP",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "sturm_graz",
    "name": "Sturm Graz",
    "short": "STU",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "coventry",
    "name": "Coventry",
    "short": "COV",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "norwich",
    "name": "Norwich",
    "short": "NOR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "aberdeen",
    "name": "Aberdeen",
    "short": "ABE",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "barnsley",
    "name": "Barnsley",
    "short": "BAR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "ipswich",
    "name": "Ipswich",
    "short": "IPS",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "huddersfield",
    "name": "Huddersfield",
    "short": "HUD",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "lorient",
    "name": "Lorient",
    "short": "LOR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "gent",
    "name": "Gent",
    "short": "GEN",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "argentinos_juniors",
    "name": "Argentinos Juniors",
    "short": "ARG",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "ascoli",
    "name": "Ascoli",
    "short": "ASC",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "girona",
    "name": "Girona",
    "short": "GIR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "bolton",
    "name": "Bolton",
    "short": "BOL",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "sunderland",
    "name": "Sunderland",
    "short": "SUN",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "vitoria",
    "name": "Vitoria",
    "short": "VIT",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "delhi_dynamos",
    "name": "Delhi Dynamos",
    "short": "DEL",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "real_zaragoza",
    "name": "Real Zaragoza",
    "short": "REA",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "anzhi",
    "name": "Anzhi",
    "short": "ANZ",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "deportivo",
    "name": "Deportivo",
    "short": "DEP",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "vicenza",
    "name": "Vicenza",
    "short": "VIC",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "coritiba",
    "name": "Coritiba",
    "short": "COR",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
  },
  {
    "id": "sakaryaspor",
    "name": "Sakaryaspor",
    "short": "SAK",
    "color": "#3b82f6",
    "country": "Dünya 🌍"
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
      "inter_miami",
      "newells_old_boys"
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
      "rb_leipzig",
      "molde",
      "rb_salzburg"
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
      "malmo",
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
      "benfica",
      "rosario_central"
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
      "gremio",
      "flamengo",
      "atletico_mineiro",
      "fluminense"
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
      "real_madrid",
      "sao_paulo",
      "orlando_city"
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
      "juventus",
      "brescia",
      "new_york_city"
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
      "barcelona",
      "new_york_red_bulls"
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
      "galatasaray",
      "nice"
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
      "schalke",
      "werder_bremen"
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
      "man_city",
      "west_brom"
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
      "espanyol",
      "liverpool",
      "barcelona",
      "bayern",
      "aston_villa",
      "vasco_da_gama"
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
      "flamengo",
      "athletico_paranaense"
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
      "udinese",
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
      "inter_miami",
      "nantes",
      "nacional",
      "gremio"
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
      "southampton",
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
      "real_madrid",
      "dinamo_zagreb"
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
      "werder_bremen",
      "wolfsburg",
      "genk"
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
      "liverpool",
      "basel"
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
      "monaco",
      "como"
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
      "lille",
      "saint_etienne",
      "al_qadsiah"
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
      "barcelona",
      "bochum"
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
      "river_plate",
      "rayo"
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
      "galatasaray",
      "sampdoria"
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
      "besiktas",
      "maritimo"
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
      "besiktas",
      "al_ahli",
      "kasimpasa",
      "vitoria_guimaraes"
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
      "marseille",
      "nice",
      "brescia",
      "monza",
      "adana_demirspor",
      "genoa"
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
      "anderlecht",
      "everton",
      "west_brom"
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
      "real_madrid",
      "genk"
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
      "al_nassr",
      "metz",
      "rb_salzburg",
      "southampton"
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
      "al_hilal",
      "genk",
      "metz"
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
      "arsenal",
      "palmeiras"
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
      "palermo",
      "boca_juniors",
      "danubio"
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
      "chelsea",
      "fluminense",
      "juventude"
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
      "real_madrid",
      "hoffenheim",
      "austria_wien"
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
      "lyon",
      "corinthians"
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
      "fenerbahce",
      "twente",
      "southampton"
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
      "fenerbahce",
      "internacional",
      "shakhtar"
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
      "crystal_palace",
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
      "besiktas",
      "rizespor"
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
      "galatasaray",
      "crystal_palace"
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
      "besiktas",
      "genoa",
      "torino"
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
      "man_utd",
      "sao_paulo"
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
      "man_city",
      "dinamo_zagreb"
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
      "man_utd",
      "brentford"
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
      "everton",
      "dc_united"
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
      "west_ham",
      "new_york_city"
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
    "id": "f_totti",
    "name": "Francesco Totti",
    "position": "Ofansif Orta Saha",
    "nationality": "İtalya 🇮🇹",
    "avatar": "FT10",
    "avatarBg": "from-red-800 to-amber-500",
    "teamsPlayed": [
      "roma"
    ],
    "details": "AS Roma efsanesi (1992-2017)"
  },
  {
    "id": "p_maldini",
    "name": "Paolo Maldini",
    "position": "Stoper",
    "nationality": "İtalya 🇮🇹",
    "avatar": "PM3",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "ac_milan"
    ],
    "details": "AC Milan efsanesi (1984-2009)"
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
      "real_madrid",
      "parma"
    ],
    "details": "Napoli, Parma, Inter, Juventus, Real Madrid"
  },
  {
    "id": "j_zanetti",
    "name": "Javier Zanetti",
    "position": "Sağ Bek",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "JZ4",
    "avatarBg": "from-blue-700 to-black",
    "teamsPlayed": [
      "inter",
      "banfield"
    ],
    "details": "Inter Milan efsanesi (1995-2014)"
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
      "parma",
      "river_plate",
      "genoa"
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
      "barcelona",
      "independiente"
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
      "west_ham",
      "corinthians"
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
      "psg",
      "parma"
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
      "psg",
      "levante",
      "nottingham",
      "newells_old_boys"
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
      "everton",
      "olympiacos",
      "rayo",
      "banfield",
      "sao_paulo"
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
      "lille",
      "antalyaspor",
      "fortuna_sittard"
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
      "galatasaray",
      "istanbulspor",
      "eskisehirspor"
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
      "bournemouth",
      "man_city",
      "reading",
      "watford"
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
      "manisaspor",
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
      "manisaspor",
      "cska_moscow",
      "fatih_karagumruk",
      "basaksehir",
      "eyupspor"
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
      "besiktas",
      "genclerbirligi",
      "rizespor"
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
      "inter",
      "karlsruher",
      "hamburg"
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
      "frankfurt",
      "gaziantep",
      "crystal_palace"
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
      "besiktas",
      "antalyaspor"
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
      "galatasaray",
      "manisaspor"
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
      "brighton",
      "sheffield_utd",
      "toulouse",
      "olympiacos",
      "blackburn",
      "bursaspor",
      "celtic",
      "corinthians",
      "derby_county",
      "fatih_karagumruk"
    ],
    "details": "Fenerbahçe, Galatasaray, Feyenoord"
  },
  {
    "id": "trent_alexander_arnold",
    "name": "Trent Alexander‑Arnold",
    "position": "Sağ Bek",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "TAA",
    "avatarBg": "from-green-500 to-blue-600",
    "teamsPlayed": [
      "liverpool"
    ],
    "details": "Liverpool"
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
      "internacional",
      "roma"
    ],
    "details": "Liverpool"
  },
  {
    "id": "jan_oblak",
    "name": "Jan Oblak",
    "position": "Kaleci",
    "nationality": "Slovenya 🇸🇮",
    "avatar": "JO1",
    "avatarBg": "from-grey-500 to-blue-800",
    "teamsPlayed": [
      "atletico"
    ],
    "details": "Atletico Madrid"
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
      "groningen",
      "celtic",
      "southampton"
    ],
    "details": "Liverpool"
  },
  {
    "id": "hugo_lloris",
    "name": "Hugo Lloris",
    "position": "Kaleci",
    "nationality": "Fransa 🇫🇷",
    "avatar": "HL1",
    "avatarBg": "from-blue-600 to-white",
    "teamsPlayed": [
      "tottenham"
    ],
    "details": "Tottenham Hotspur"
  },
  {
    "id": "pedri",
    "name": "Pedri",
    "position": "Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "PDR",
    "avatarBg": "from-sky-400 to-green-600",
    "teamsPlayed": [
      "barcelona"
    ],
    "details": "FC Barcelona"
  },
  {
    "id": "joao_felix",
    "name": "João Félix",
    "position": "Forvet",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "JF1",
    "avatarBg": "from-red-600 to-yellow-500",
    "teamsPlayed": [
      "atletico"
    ],
    "details": "Atlético Madrid"
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
    "id": "lukasz_piszczek",
    "name": "Łukasz Piszczek",
    "position": "Sağ Bek",
    "nationality": "Polonya 🇵🇱",
    "avatar": "LP7",
    "avatarBg": "from-blue-500 to-grey-800",
    "teamsPlayed": [
      "dortmund",
      "gornik_zabrze"
    ],
    "details": "Borussia Dortmund, Górnik Zabrze"
  },
  {
    "id": "jordan_henderson",
    "name": "Jordan Henderson",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "JH10",
    "avatarBg": "from-red-600 to-white",
    "teamsPlayed": [
      "liverpool"
    ],
    "details": "Liverpool"
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
    "id": "andre_giroud",
    "name": "André Giroud",
    "position": "Stoper",
    "nationality": "Fransa 🇫🇷",
    "avatar": "AG9",
    "avatarBg": "from-grey-600 to-black",
    "teamsPlayed": [
      "psg"
    ],
    "details": "Paris Saint-Germain"
  },
  {
    "id": "luis_henrique",
    "name": "Luis Henrique",
    "position": "Kaleci",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "LH1",
    "avatarBg": "from-blue-500 to-white",
    "teamsPlayed": [
      "porto"
    ],
    "details": "FC Porto"
  },
  {
    "id": "ronaldo_gomes",
    "name": "Ronaldo Gomes",
    "position": "Santrafor",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "RG1",
    "avatarBg": "from-green-500 to-black",
    "teamsPlayed": [
      "athletico_paranaense"
    ],
    "details": ""
  },
  {
    "id": "houssem_aouar",
    "name": "Houssem Aouar",
    "position": "Orta Saha",
    "nationality": "Fransa 🇫🇷",
    "avatar": "HA1",
    "avatarBg": "from-red-600 to-purple-600",
    "teamsPlayed": [
      "lyon"
    ],
    "details": "Olympique Lyonnais"
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
      "stromsgodset",
      "real_madrid",
      "heerenveen",
      "vitesse",
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
      "burnley",
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
      "man_utd",
      "vitesse",
      "derby_county"
    ],
    "details": "Chelsea, Manchester United"
  },
  {
    "id": "philip_lahm",
    "name": "Philipp Lahm",
    "position": "Sağ Bek",
    "nationality": "Almanya 🇩🇪",
    "avatar": "PL",
    "avatarBg": "from-red-600 to-white",
    "teamsPlayed": [
      "bayern"
    ],
    "details": "Bayern München efsanesi"
  },
  {
    "id": "carlos_pele",
    "name": "Pelé",
    "position": "Forvet",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "PE",
    "avatarBg": "from-yellow-400 to-green-600",
    "teamsPlayed": [
      "santos",
      "new_york_cosmos"
    ],
    "details": "Santos, New York Cosmos efsanesi"
  },
  {
    "id": "karim_zidane",
    "name": "Zinedine Zidane",
    "position": "Orta Saha",
    "nationality": "Fransa 🇫🇷",
    "avatar": "ZD",
    "avatarBg": "from-blue-600 to-purple-600",
    "teamsPlayed": [
      "bordeaux",
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
      "corinthians",
      "cruzeiro",
      "psv"
    ],
    "details": "FC Barcelona, Inter, Real Madrid, AC Milan, Corinthians"
  },
  {
    "id": "e_eusebio",
    "name": "Eusébio",
    "position": "Santrafor",
    "nationality": "Portekiz 🇵🇹",
    "avatar": "EE",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "benfica"
    ],
    "details": "Portuguese legend"
  },
  {
    "id": "a_iniesta",
    "name": "Andrés Iniesta",
    "position": "Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "AI",
    "avatarBg": "from-blue-600 to-pink-500",
    "teamsPlayed": [
      "barcelona",
      "vissel_kobe"
    ],
    "details": "FC Barcelona efsanesi, Vissel Kobe"
  },
  {
    "id": "x_xavi",
    "name": "Xavi Hernández",
    "position": "Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "XH",
    "avatarBg": "from-green-600 to-blue-800",
    "teamsPlayed": [
      "barcelona",
      "al_sadd"
    ],
    "details": "FC Barcelona efsanesi, Al Sadd"
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
      "psg"
    ],
    "details": "FC Barcelona, PSG"
  },
  {
    "id": "m_asensio",
    "name": "Marco Asensio",
    "position": "Forvet / Ofansif Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "MA11",
    "avatarBg": "from-sky-400 to-indigo-600",
    "teamsPlayed": [
      "real_madrid"
    ],
    "details": "Real Madrid"
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
      "barcelona",
      "bordeaux"
    ],
    "details": "Sevilla, FC Barcelona"
  },
  {
    "id": "lamine_yamal",
    "name": "Lamine Yamal",
    "position": "Sağ Kanat",
    "nationality": "İspanya 🇪🇸",
    "avatar": "LY10",
    "avatarBg": "from-yellow-400 to-red-600",
    "teamsPlayed": [
      "barcelona"
    ],
    "details": "FC Barcelona genç yeteneği"
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
      "barcelona"
    ],
    "details": "Valencia, Manchester City, FC Barcelona"
  },
  {
    "id": "phil_foden",
    "name": "Phil Foden",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "PF47",
    "avatarBg": "from-sky-400 to-blue-600",
    "teamsPlayed": [
      "man_city"
    ],
    "details": "Manchester City"
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
    "id": "koke",
    "name": "Koke",
    "position": "Orta Saha",
    "nationality": "İspanya 🇪🇸",
    "avatar": "K8",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "atletico"
    ],
    "details": "Atlético Madrid"
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
      "caen",
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
      "zurich",
      "wolfsburg",
      "psv",
      "torino",
      "betis"
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
      "man_utd",
      "lens",
      "como"
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
      "sochaux",
      "roeselare",
      "club_brugge",
      "dortmund",
      "wolfsburg",
      "bayern",
      "tottenham",
      "hajduk_split",
      "psv"
    ],
    "details": "Inter Milan"
  },
  {
    "id": "raphael_guerrero",
    "name": "Raphinha",
    "position": "Sağ Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "RAPH",
    "avatarBg": "from-yellow-400 to-blue-700",
    "teamsPlayed": [
      "barcelona"
    ],
    "details": "FC Barcelona"
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
      "shakhtar",
      "ufa",
      "psv"
    ],
    "details": "Manchester City, Arsenal"
  },
  {
    "id": "ezequiel_barco",
    "name": "Ezequiel Barco",
    "position": "Kanat",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "EB10",
    "avatarBg": "from-red-600 to-white",
    "teamsPlayed": [
      "river_plate",
      "atlanta_united"
    ],
    "details": "River Plate"
  },
  {
    "id": "anssumane_fati",
    "name": "Ansu Fati",
    "position": "Forvet",
    "nationality": "İspanya 🇪🇸",
    "avatar": "AF10",
    "avatarBg": "from-yellow-400 to-red-600",
    "teamsPlayed": [
      "barcelona"
    ],
    "details": "FC Barcelona"
  },
  {
    "id": "reece_james",
    "name": "Reece James",
    "position": "Sağ Bek",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "RJ24",
    "avatarBg": "from-blue-600 to-white",
    "teamsPlayed": [
      "chelsea",
      "wigan"
    ],
    "details": "Chelsea FC"
  },
  {
    "id": "ben_white",
    "name": "Ben White",
    "position": "Stoper",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "BW4",
    "avatarBg": "from-white to-sky-400",
    "teamsPlayed": [
      "arsenal",
      "brighton",
      "newport",
      "peterborough",
      "leeds"
    ],
    "details": "Arsenal"
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
      "wolves",
      "braga",
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
      "everton",
      "america_mineiro",
      "fluminense",
      "watford"
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
      "novara",
      "udinese",
      "sampdoria",
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
    "id": "sergio_busquets",
    "name": "Sergio Busquets",
    "position": "Ön Libero",
    "nationality": "İspanya 🇪🇸",
    "avatar": "SB5",
    "avatarBg": "from-sky-400 to-slate-700",
    "teamsPlayed": [
      "barcelona"
    ],
    "details": "FC Barcelona"
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
      "rb_salzburg",
      "liefering",
      "rb_leipzig"
    ],
    "details": "RB Salzburg, Liverpool"
  },
  {
    "id": "konrad_laubahn",
    "name": "Konrad Laubahn",
    "position": "Sol Kanat",
    "nationality": "Almanya 🇩🇪",
    "avatar": "KL11",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "wolfsburg"
    ],
    "details": "Wolfsburg"
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
      "malaga",
      "leganes",
      "fenerbahce"
    ],
    "details": "Sevilla FC"
  },
  {
    "id": "houssem_aurier",
    "name": "Serge Aurier",
    "position": "Sağ Bek",
    "nationality": "Fildişi Sahili 🇨🇮",
    "avatar": "SA24",
    "avatarBg": "from-sky-400 to-black",
    "teamsPlayed": [
      "tottenham"
    ],
    "details": "Tottenham Hotspur"
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
    "id": "bukayo_saka",
    "name": "Bukayo Saka",
    "position": "Kanat",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "BS14",
    "avatarBg": "from-green-400 to-blue-600",
    "teamsPlayed": [
      "arsenal"
    ],
    "details": "Arsenal"
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
    "id": "lautaro_martinez",
    "name": "Lautaro Martínez",
    "position": "Santrafor",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "LM10",
    "avatarBg": "from-red-600 to-blue-800",
    "teamsPlayed": [
      "inter",
      "racing_club"
    ],
    "details": "Inter"
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
      "inter_miami",
      "instituto",
      "palermo"
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
      "juventus",
      "partizan"
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
      "man_utd",
      "copenhagen",
      "sturm_graz"
    ],
    "details": "Atalanta, Manchester United"
  },
  {
    "id": "harvey_elliott",
    "name": "Harvey Elliott",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "HE7",
    "avatarBg": "from-sky-400 to-purple-600",
    "teamsPlayed": [
      "fulham",
      "liverpool",
      "blackburn"
    ],
    "details": "Fulham, Liverpool"
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
      "tottenham",
      "coventry",
      "norwich",
      "aberdeen"
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
      "fulham",
      "braga",
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
    "id": "alejandro_garnacho",
    "name": "Alejandro Garnacho",
    "position": "Kanat",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "AG21",
    "avatarBg": "from-red-600 to-amber-500",
    "teamsPlayed": [
      "man_utd"
    ],
    "details": "Manchester United"
  },
  {
    "id": "ivan_toney",
    "name": "Ivan Toney",
    "position": "Santrafor",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "IT17",
    "avatarBg": "from-amber-400 to-red-600",
    "teamsPlayed": [
      "brentford",
      "newcastle",
      "barnsley",
      "wigan",
      "peterborough",
      "al_ahli"
    ],
    "details": "Brentford"
  },
  {
    "id": "trevoh_chalobah",
    "name": "Trevoh Chalobah",
    "position": "Stoper",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "TC6",
    "avatarBg": "from-blue-600 to-amber-400",
    "teamsPlayed": [
      "chelsea",
      "ipswich",
      "huddersfield",
      "lorient",
      "crystal_palace"
    ],
    "details": "Chelsea"
  },
  {
    "id": "callum_wilson",
    "name": "Callum Wilson",
    "position": "Santrafor",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "CW9",
    "avatarBg": "from-red-600 to-white",
    "teamsPlayed": [
      "newcastle",
      "coventry",
      "bournemouth"
    ],
    "details": "Newcastle United"
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
      "gent"
    ],
    "details": "Lille, Benfica"
  },
  {
    "id": "michael_olise",
    "name": "Michael Olise",
    "position": "Kanat",
    "nationality": "Fransa 🇫🇷",
    "avatar": "MO22",
    "avatarBg": "from-sky-400 to-purple-600",
    "teamsPlayed": [
      "reading",
      "crystal_palace",
      "bayern"
    ],
    "details": "Crystal Palace"
  },
  {
    "id": "alexis_mac_allister",
    "name": "Alexis Mac Allister",
    "position": "Orta Saha",
    "nationality": "Arjantin 🇦🇷",
    "avatar": "AMA7",
    "avatarBg": "from-sky-400 to-red-600",
    "teamsPlayed": [
      "brighton",
      "liverpool",
      "argentinos_juniors",
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
      "bologna",
      "juventus",
      "ascoli",
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
      "girona",
      "man_city",
      "valladolid"
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
      "man_city",
      "al_ahli"
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
      "werder_bremen",
      "hoffenheim",
      "bayern",
      "west_brom"
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
      "shakhtar",
      "man_utd",
      "fenerbahce",
      "internacional"
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
      "barcelona",
      "bolton",
      "sunderland",
      "celta"
    ],
    "details": "Real Madrid, Fiorentina, Chelsea, FC Barcelona"
  },
  {
    "id": "hulk",
    "name": "Hulk (Givanildo)",
    "position": "Sağ Kanat",
    "nationality": "Brezilya 🇧🇷",
    "avatar": "H7",
    "avatarBg": "from-blue-600 to-green-600",
    "teamsPlayed": [
      "porto",
      "zenit",
      "atletico_mineiro",
      "vitoria"
    ],
    "details": "FC Porto, Zenit Saint Petersburg"
  },
  {
    "id": "r_giggs",
    "name": "Ryan Giggs",
    "position": "Sol Kanat",
    "nationality": "Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿",
    "avatar": "RG11",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "man_utd"
    ],
    "details": "Manchester United efsanesi (1990-2014)"
  },
  {
    "id": "p_scholes",
    "name": "Paul Scholes",
    "position": "Orta Saha",
    "nationality": "İngiltere 🇬🇧",
    "avatar": "PS18",
    "avatarBg": "from-red-600 to-amber-500",
    "teamsPlayed": [
      "man_utd"
    ],
    "details": "Manchester United efsanesi (1993-2013)"
  },
  {
    "id": "a_del_piero",
    "name": "Alessandro Del Piero",
    "position": "Forvet",
    "nationality": "İtalya 🇮🇹",
    "avatar": "ADP10",
    "avatarBg": "from-black to-slate-800",
    "teamsPlayed": [
      "juventus",
      "delhi_dynamos"
    ],
    "details": "Juventus efsanesi (1993-2012)"
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
      "river_plate",
      "olympiacos"
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
      "eintracht"
    ],
    "details": "Borussia Dortmund, Bayern München, PSV"
  },
  {
    "id": "t_müller",
    "name": "Thomas Müller",
    "position": "İkinci Forvet",
    "nationality": "Almanya 🇩🇪",
    "avatar": "TM25",
    "avatarBg": "from-red-600 to-black",
    "teamsPlayed": [
      "bayern"
    ],
    "details": "Bayern München efsanesi (2008-günümüz)"
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
    "id": "carles_puyol",
    "name": "Carles Puyol",
    "position": "Stoper",
    "nationality": "İspanya 🇪🇸",
    "avatar": "CP5",
    "avatarBg": "from-green-700 to-black",
    "teamsPlayed": [
      "barcelona"
    ],
    "details": "FC Barcelona efsanesi"
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
      "barcelona",
      "real_zaragoza"
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
      "palmeiras",
      "inter",
      "corinthians",
      "anzhi"
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
      "palmeiras",
      "roma",
      "ac_milan",
      "sao_paulo"
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
      "sevilla",
      "newells_old_boys"
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
      "ac_milan",
      "olympiacos",
      "corinthians",
      "palmeiras",
      "deportivo",
      "cruzeiro",
      "sao_paulo"
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
      "inter",
      "bologna",
      "brescia",
      "vicenza"
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
      "dynamo_kiev",
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
      "palmeiras",
      "porto",
      "coritiba",
      "flamengo",
      "cruzeiro",
      "parma"
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
      "inter",
      "parma",
      "sakaryaspor",
      "bursaspor",
      "torino",
      "blackburn"
    ],
    "details": "Galatasaray, Inter Milan, Parma"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FOOTBALL_TEAMS, FOOTBALLERS };
}
