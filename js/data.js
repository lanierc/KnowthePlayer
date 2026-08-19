/**
 * Comprehensive Football Database for 1v1 Football Quiz
 * 180 Clubs & 338 Iconic / Active Footballers
 * Optimized Compact Serialization
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
    "id": "adana_demirspor",
    "name": "Adana Demirspor",
    "short": "ADS",
    "color": "#004B87",
    "country": "Türkiye 🇹🇷"
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
    "id": "al_sadd",
    "name": "Al Sadd",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "alanyaspor",
    "name": "Alanyaspor",
    "short": "ALA",
    "color": "#F58220",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "almeria",
    "name": "Almeria",
    "short": "ALM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "antalyaspor",
    "name": "Antalyaspor",
    "short": "ANT",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
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
    "id": "augsburg",
    "name": "Augsburg",
    "short": "AUG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bahia",
    "name": "Bahia",
    "short": "BAH",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "banfield",
    "name": "Banfield",
    "short": "BAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "basel",
    "name": "Basel",
    "short": "BAS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "beijing_guoan",
    "name": "Beijing Guoan",
    "short": "BEI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "besiktas",
    "name": "Beşiktaş",
    "short": "BJK",
    "color": "#000000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "blackburn",
    "name": "Blackburn",
    "short": "BLA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "bolton",
    "name": "Bolton",
    "short": "BOL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bordeaux",
    "name": "Bordeaux",
    "short": "BOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "botafogo",
    "name": "Botafogo",
    "short": "BOT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bournemouth",
    "name": "Bournemouth",
    "short": "BOU",
    "color": "#DA291C",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "brentford",
    "name": "Brentford",
    "short": "BRE",
    "color": "#E30613",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "brighton",
    "name": "Brighton & Hove",
    "short": "BHA",
    "color": "#0057B8",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "burnley",
    "name": "Burnley",
    "short": "BUR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "flamengo",
    "name": "CR Flamengo",
    "short": "FLA",
    "color": "#C3281E",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "cannes",
    "name": "Cannes",
    "short": "CAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cardiff",
    "name": "Cardiff",
    "short": "CAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "coritiba",
    "name": "Coritiba",
    "short": "COR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cruzeiro",
    "name": "Cruzeiro",
    "short": "CRU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "crystal_palace",
    "name": "Crystal Palace",
    "short": "CRY",
    "color": "#1B458F",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "dc_united",
    "name": "Dc United",
    "short": "DC_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "deportivo",
    "name": "Deportivo",
    "short": "DEP",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dinamo_zagreb",
    "name": "Dinamo Zagreb",
    "short": "DIN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dynamo_kiev",
    "name": "Dynamo Kiev",
    "short": "DYN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "eyupspor",
    "name": "Eyüpspor",
    "short": "EYU",
    "color": "#582C83",
    "country": "Türkiye 🇹🇷"
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
    "id": "fatih_karagumruk",
    "name": "Fatih Karagümrük",
    "short": "FKM",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
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
    "id": "fluminense",
    "name": "Fluminense",
    "short": "FLU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "fortuna_sittard",
    "name": "Fortuna Sittard",
    "short": "FOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "fulham",
    "name": "Fulham",
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
    "id": "genclerbirligi",
    "name": "Genclerbirligi",
    "short": "GEN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "name": "Girona",
    "short": "GIR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "gremio",
    "name": "Grêmio",
    "short": "GRE",
    "color": "#0D80BF",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "hamburg",
    "name": "Hamburg",
    "short": "HAM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hannover",
    "name": "Hannover",
    "short": "HAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hellas_verona",
    "name": "Hellas Verona",
    "short": "HEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "independiente",
    "name": "Independiente",
    "short": "IND",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "internacional",
    "name": "Internacional",
    "short": "INT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "juventus",
    "name": "Juventus",
    "short": "JUV",
    "color": "#000000",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "genk",
    "name": "KRC Genk",
    "short": "GNK",
    "color": "#0047AB",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "kasimpasa",
    "name": "Kasimpasa",
    "short": "KAS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kayserispor",
    "name": "Kayserispor",
    "short": "KAY",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "koln",
    "name": "Koln",
    "short": "KOL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "lecce",
    "name": "Lecce",
    "short": "LEC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "leeds",
    "name": "Leeds",
    "short": "LEE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "leganes",
    "name": "Leganes",
    "short": "LEG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "legia_warsaw",
    "name": "Legia Warsaw",
    "short": "LEG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "leicester",
    "name": "Leicester City",
    "short": "LEI",
    "color": "#003090",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "levante",
    "name": "Levante",
    "short": "LEV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "liverpool",
    "name": "Liverpool",
    "short": "LIV",
    "color": "#C8102E",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "lorient",
    "name": "Lorient",
    "short": "LOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "mainz",
    "name": "Mainz",
    "short": "MAI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "malaga",
    "name": "Malaga",
    "short": "MAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "melbourne_city",
    "name": "Melbourne City",
    "short": "MEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "metz",
    "name": "Metz",
    "short": "MET",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "nac_breda",
    "name": "Nac Breda",
    "short": "NAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "nantes",
    "name": "Nantes",
    "short": "NAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "new_york_city",
    "name": "New York City",
    "short": "NEW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "new_york_red_bulls",
    "name": "New York Red Bulls",
    "short": "NEW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "newcastle",
    "name": "Newcastle",
    "short": "NEW",
    "color": "#241F20",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "norwich",
    "name": "Norwich",
    "short": "NOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "olympiacos",
    "name": "Olympiacos",
    "short": "OLY",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "orlando_city",
    "name": "Orlando City",
    "short": "ORL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "psv",
    "name": "PSV Eindhoven",
    "short": "PSV",
    "color": "#FF0000",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "palermo",
    "name": "Palermo",
    "short": "PAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "psg",
    "name": "Paris Saint-Germain",
    "short": "PSG",
    "color": "#004170",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "parma",
    "name": "Parma",
    "short": "PAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "partizan",
    "name": "Partizan",
    "short": "PAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "portsmouth",
    "name": "Portsmouth",
    "short": "POR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "qpr",
    "name": "Qpr",
    "short": "QPR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "racing_santander",
    "name": "Racing Santander",
    "short": "RAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rangers",
    "name": "Rangers FC",
    "short": "RAN",
    "color": "#0038A8",
    "country": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
  },
  {
    "id": "rayo",
    "name": "Rayo",
    "short": "RAY",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "real_zaragoza",
    "name": "Real Zaragoza",
    "short": "REA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rio_ave",
    "name": "Rio Ave",
    "short": "RIO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "river_plate",
    "name": "River Plate",
    "short": "RIV",
    "color": "#EB1C24",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "rizespor",
    "name": "Rizespor",
    "short": "RIZ",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "saint_etienne",
    "name": "Saint Etienne",
    "short": "SAI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "salernitana",
    "name": "Salernitana",
    "short": "SAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "santos",
    "name": "Santos FC",
    "short": "SAN",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "sao_paulo",
    "name": "Sao Paulo",
    "short": "SAO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sassuolo",
    "name": "Sassuolo",
    "short": "SAS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sevilla",
    "name": "Sevilla FC",
    "short": "SEV",
    "color": "#D4001F",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "shakhtar",
    "name": "Shakhtar",
    "short": "SHA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sivasspor",
    "name": "Sivasspor",
    "short": "SIV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sochaux",
    "name": "Sochaux",
    "short": "SOC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "southampton",
    "name": "Southampton",
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
    "id": "standard_liege",
    "name": "Standard Liege",
    "short": "STA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "stoke",
    "name": "Stoke",
    "short": "STO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "strasbourg",
    "name": "Strasbourg",
    "short": "STR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "swansea",
    "name": "Swansea",
    "short": "SWA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "name": "Tottenham",
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
    "id": "twente",
    "name": "Twente",
    "short": "TWE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sampdoria",
    "name": "UC Sampdoria",
    "short": "SAM",
    "color": "#00519E",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "udinese",
    "name": "Udinese",
    "short": "UDI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "union_berlin",
    "name": "Union Berlin",
    "short": "UNI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "utrecht",
    "name": "Utrecht",
    "short": "UTR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "valencia",
    "name": "Valencia CF",
    "short": "VAL",
    "color": "#EE7500",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "valenciennes",
    "name": "Valenciennes",
    "short": "VAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "valladolid",
    "name": "Valladolid",
    "short": "VAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "vissel_kobe",
    "name": "Vissel Kobe",
    "short": "VIS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vitesse",
    "name": "Vitesse",
    "short": "VIT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vitoria_guimaraes",
    "name": "Vitoria Guimaraes",
    "short": "VIT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "watford",
    "name": "Watford",
    "short": "WAT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "werder_bremen",
    "name": "Werder Bremen",
    "short": "SVW",
    "color": "#1D9053",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "west_brom",
    "name": "West Brom",
    "short": "WES",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "west_ham",
    "name": "West Ham",
    "short": "WHU",
    "color": "#7A263A",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "wolves",
    "name": "Wolverhampton",
    "short": "WOL",
    "color": "#FDB913",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "zenit",
    "name": "Zenit",
    "short": "ZEN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  }
];

const _RAW_PLAYERS = [{"n": "Cristiano Ronaldo", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["sporting", "man_utd", "real_madrid", "juventus", "al_nassr"]}, {"n": "Lionel Messi", "p": "Forvet", "c": "Arjantin 🇦🇷", "t": ["barcelona", "psg", "inter_miami"]}, {"n": "Zlatan Ibrahimović", "p": "Santrafor", "c": "İsveç 🇸🇪", "t": ["ajax", "juventus", "inter", "barcelona", "ac_milan", "psg", "man_utd", "la_galaxy"]}, {"n": "Neymar Jr", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "barcelona", "psg", "al_hilal"]}, {"n": "Kylian Mbappé", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["monaco", "psg", "real_madrid"]}, {"n": "Erling Haaland", "p": "Santrafor", "c": "Norveç 🇳🇴", "t": ["rb_salzburg", "dortmund", "man_city"]}, {"n": "Karim Benzema", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["lyon", "real_madrid", "al_ittihad"]}, {"n": "Robert Lewandowski", "p": "Santrafor", "c": "Polonya 🇵🇱", "t": ["dortmund", "bayern", "barcelona"]}, {"n": "Luis Suárez", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["ajax", "liverpool", "barcelona", "atletico", "gremio", "inter_miami"]}, {"n": "Luka Modrić", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["tottenham", "real_madrid"]}, {"n": "Toni Kroos", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["bayern", "leverkusen", "real_madrid"]}, {"n": "Kevin De Bruyne", "p": "Ofansif Orta Saha", "c": "Belçika 🇧🇪", "t": ["genk", "chelsea", "werder_bremen", "wolfsburg", "man_city"]}, {"n": "Mohamed Salah", "p": "Kanat", "c": "Mısır 🇪🇬", "t": ["chelsea", "fiorentina", "roma", "liverpool"]}, {"n": "Harry Kane", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["tottenham", "leicester", "bayern"]}, {"n": "Sadio Mané", "p": "Kanat", "c": "Senegal 🇸🇳", "t": ["rb_salzburg", "southampton", "liverpool", "bayern", "al_nassr"]}, {"n": "Jude Bellingham", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["dortmund", "real_madrid"]}, {"n": "Vinícius Júnior", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["flamengo", "real_madrid"]}, {"n": "Rodrygo", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "real_madrid"]}, {"n": "Jadon Sancho", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["dortmund", "man_utd", "chelsea"]}, {"n": "Jamal Musiala", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["chelsea", "bayern"]}, {"n": "Marcus Rashford", "p": "Forvet", "c": "İngiltere 🇬🇧", "t": ["man_utd", "aston_villa"]}, {"n": "Cole Palmer", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["man_city", "chelsea"]}, {"n": "Mason Mount", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["chelsea", "man_utd"]}, {"n": "Kai Havertz", "p": "Forvet", "c": "Almanya 🇩🇪", "t": ["leverkusen", "chelsea", "arsenal"]}, {"n": "Timo Werner", "p": "Forvet", "c": "Almanya 🇩🇪", "t": ["stuttgart", "rb_leipzig", "chelsea", "tottenham"]}, {"n": "Raheem Sterling", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["liverpool", "man_city", "chelsea", "arsenal"]}, {"n": "Gabriel Jesus", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["palmeiras", "man_city", "arsenal"]}, {"n": "Oleksandr Zinchenko", "p": "Sol Bek", "c": "Ukrayna 🇺🇦", "t": ["man_city", "psv", "arsenal"]}, {"n": "Declan Rice", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["west_ham", "arsenal"]}, {"n": "Jack Grealish", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["aston_villa", "man_city"]}, {"n": "Bernardo Silva", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "monaco", "man_city"]}, {"n": "Bruno Fernandes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["sampdoria", "sporting", "man_utd"]}, {"n": "Ruben Dias", "p": "Stoper", "c": "Portekiz 🇵🇹", "t": ["benfica", "man_city"]}, {"n": "Ederson", "p": "Kaleci", "c": "Brezilya 🇧🇷", "t": ["benfica", "man_city"]}, {"n": "Alisson Becker", "p": "Kaleci", "c": "Brezilya 🇧🇷", "t": ["roma", "liverpool"]}, {"n": "Virgil van Dijk", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["celtic", "southampton", "liverpool"]}, {"n": "Dominik Szoboszlai", "p": "Orta Saha", "c": "Macaristan 🇭🇺", "t": ["rb_salzburg", "rb_leipzig", "liverpool"]}, {"n": "Alexis Mac Allister", "p": "Orta Saha", "c": "Arjantin 🇦🇷", "t": ["boca_juniors", "brighton", "liverpool"]}, {"n": "Darwin Núñez", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["benfica", "liverpool"]}, {"n": "Luis Díaz", "p": "Kanat", "c": "Kolombiya 🇨🇴", "t": ["porto", "liverpool"]}, {"n": "Cody Gakpo", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["psv", "liverpool"]}, {"n": "Diogo Jota", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["atletico", "porto", "wolves", "liverpool"]}, {"n": "Federico Chiesa", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["fiorentina", "juventus", "liverpool"]}, {"n": "Ryan Gravenberch", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "bayern", "liverpool"]}, {"n": "Son Heung-min", "p": "Forvet", "c": "Güney Kore 🇰🇷", "t": ["leverkusen", "tottenham"]}, {"n": "James Maddison", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["leicester", "tottenham"]}, {"n": "Richarlison", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["watford", "everton", "tottenham"]}, {"n": "Dejan Kulusevski", "p": "Kanat", "c": "İsveç 🇸🇪", "t": ["atalanta", "juventus", "tottenham"]}, {"n": "Pedro Porro", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["man_city", "sporting", "tottenham"]}, {"n": "Alexander Isak", "p": "Santrafor", "c": "İsveç 🇸🇪", "t": ["dortmund", "real_sociedad", "newcastle"]}, {"n": "Bruno Guimarães", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["lyon", "newcastle"]}, {"n": "Sandro Tonali", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["ac_milan", "newcastle"]}, {"n": "Kieran Trippier", "p": "Sağ Bek", "c": "İngiltere 🇬🇧", "t": ["tottenham", "atletico", "newcastle"]}, {"n": "Douglas Luiz", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["man_city", "aston_villa", "juventus"]}, {"n": "Emiliano Martínez", "p": "Kaleci", "c": "Arjantin 🇦🇷", "t": ["arsenal", "getafe", "aston_villa"]}, {"n": "Lucas Digne", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["lille", "psg", "roma", "barcelona", "everton", "aston_villa"]}, {"n": "Ollie Watkins", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["brentford", "aston_villa"]}, {"n": "Amadou Onana", "p": "Orta Saha", "c": "Belçika 🇧🇪", "t": ["lille", "everton", "aston_villa"]}, {"n": "Matthijs de Ligt", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["ajax", "juventus", "bayern", "man_utd"]}, {"n": "Noussair Mazraoui", "p": "Bek", "c": "Fas 🇲🇦", "t": ["ajax", "bayern", "man_utd"]}, {"n": "Lisandro Martínez", "p": "Stoper", "c": "Arjantin 🇦🇷", "t": ["ajax", "man_utd"]}, {"n": "Antony", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["ajax", "man_utd"]}, {"n": "André Onana", "p": "Kaleci", "c": "Kamerun 🇨🇲", "t": ["ajax", "inter", "man_utd"]}, {"n": "Casemiro", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["porto", "real_madrid", "man_utd"]}, {"n": "Raphaël Varane", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["real_madrid", "man_utd"]}, {"n": "Christian Eriksen", "p": "Ofansif Orta Saha", "c": "Danimarka 🇩🇰", "t": ["ajax", "tottenham", "inter", "brentford", "man_utd"]}, {"n": "Manuel Ugarte", "p": "Ön Libero", "c": "Uruguay 🇺🇾", "t": ["sporting", "psg", "man_utd"]}, {"n": "Joshua Zirkzee", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["bayern", "bologna", "man_utd"]}, {"n": "Julián Álvarez", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["river_plate", "man_city", "atletico"]}, {"n": "Antoine Griezmann", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["real_sociedad", "atletico", "barcelona"]}, {"n": "Álvaro Morata", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["real_madrid", "juventus", "chelsea", "atletico", "ac_milan"]}, {"n": "João Félix", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["benfica", "atletico", "chelsea", "barcelona"]}, {"n": "Memphis Depay", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["psv", "man_utd", "lyon", "barcelona", "atletico", "corinthians"]}, {"n": "İlkay Gündoğan", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["dortmund", "man_city", "barcelona"]}, {"n": "Dani Olmo", "p": "Ofansif Orta Saha", "c": "İspanya 🇪🇸", "t": ["rb_leipzig", "barcelona"]}, {"n": "Ferran Torres", "p": "Forvet", "c": "İspanya 🇪🇸", "t": ["valencia", "man_city", "barcelona"]}, {"n": "Raphinha", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["sporting", "rennes", "barcelona"]}, {"n": "Frenkie de Jong", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "barcelona"]}, {"n": "Jules Koundé", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["sevilla", "barcelona"]}, {"n": "Andreas Christensen", "p": "Stoper", "c": "Danimarka 🇩🇰", "t": ["chelsea", "monchengladbach", "barcelona"]}, {"n": "Marc-André ter Stegen", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["monchengladbach", "barcelona"]}, {"n": "Wojciech Szczęsny", "p": "Kaleci", "c": "Polonya 🇵🇱", "t": ["arsenal", "brentford", "roma", "juventus", "barcelona"]}, {"n": "Eduardo Camavinga", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["rennes", "real_madrid"]}, {"n": "Aurélien Tchouaméni", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["monaco", "real_madrid"]}, {"n": "Thibaut Courtois", "p": "Kaleci", "c": "Belçika 🇧🇪", "t": ["genk", "atletico", "chelsea", "real_madrid"]}, {"n": "David Alaba", "p": "Stoper", "c": "Avusturya 🇦🇹", "t": ["hoffenheim", "bayern", "real_madrid"]}, {"n": "Antonio Rüdiger", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["stuttgart", "roma", "chelsea", "real_madrid"]}, {"n": "Éder Militão", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["porto", "real_madrid"]}, {"n": "Dani Carvajal", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["leverkusen", "real_madrid"]}, {"n": "Ferland Mendy", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["lyon", "real_madrid"]}, {"n": "Brahim Díaz", "p": "Ofansif Orta Saha", "c": "Fas 🇲🇦", "t": ["man_city", "real_madrid", "ac_milan"]}, {"n": "Kepa Arrizabalaga", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["athletic_bilbao", "chelsea", "real_madrid", "bournemouth"]}, {"n": "Ousmane Dembélé", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["rennes", "dortmund", "barcelona", "psg"]}, {"n": "Achraf Hakimi", "p": "Sağ Bek", "c": "Fas 🇲🇦", "t": ["real_madrid", "dortmund", "inter", "psg"]}, {"n": "Gianluigi Donnarumma", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["ac_milan", "psg"]}, {"n": "Marquinhos", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["corinthians", "roma", "psg"]}, {"n": "Vitinha", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["porto", "wolves", "psg"]}, {"n": "Gonçalo Ramos", "p": "Santrafor", "c": "Portekiz 🇵🇹", "t": ["benfica", "psg"]}, {"n": "Randal Kolo Muani", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["frankfurt", "psg", "juventus"]}, {"n": "Bradley Barcola", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["lyon", "psg"]}, {"n": "Marco Asensio", "p": "Kanat", "c": "İspanya 🇪🇸", "t": ["mallorca", "espanyol", "real_madrid", "psg"]}, {"n": "Fabián Ruiz", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["betis", "napoli", "psg"]}, {"n": "Lucas Hernandez", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["atletico", "bayern", "psg"]}, {"n": "Milan Škriniar", "p": "Stoper", "c": "Slovakya 🇸🇰", "t": ["sampdoria", "inter", "psg"]}, {"n": "João Neves", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "psg"]}, {"n": "Leroy Sané", "p": "Kanat", "c": "Almanya 🇩🇪", "t": ["schalke", "man_city", "bayern"]}, {"n": "Serge Gnabry", "p": "Kanat", "c": "Almanya 🇩🇪", "t": ["arsenal", "west_ham", "werder_bremen", "hoffenheim", "bayern"]}, {"n": "Kingsley Coman", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["psg", "juventus", "bayern"]}, {"n": "Michael Olise", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["crystal_palace", "bayern"]}, {"n": "João Palhinha", "p": "Ön Libero", "c": "Portekiz 🇵🇹", "t": ["sporting", "braga", "fulham", "bayern"]}, {"n": "Alphonso Davies", "p": "Sol Bek", "c": "Kanada 🇨🇦", "t": ["bayern", "real_madrid"]}, {"n": "Dayot Upamecano", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["rb_salzburg", "rb_leipzig", "bayern"]}, {"n": "Min-jae Kim", "p": "Stoper", "c": "Güney Kore 🇰🇷", "t": ["fenerbahce", "napoli", "bayern"]}, {"n": "Marcel Sabitzer", "p": "Orta Saha", "c": "Avusturya 🇦🇹", "t": ["rb_salzburg", "rb_leipzig", "bayern", "man_utd", "dortmund"]}, {"n": "Niklas Süle", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["hoffenheim", "bayern", "dortmund"]}, {"n": "Mats Hummels", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["bayern", "dortmund", "roma"]}, {"n": "Emre Can", "p": "Ön Libero", "c": "Almanya 🇩🇪", "t": ["bayern", "leverkusen", "liverpool", "juventus", "dortmund"]}, {"n": "Karim Adeyemi", "p": "Kanat", "c": "Almanya 🇩🇪", "t": ["rb_salzburg", "dortmund"]}, {"n": "Julian Brandt", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["leverkusen", "dortmund"]}, {"n": "Gregor Kobel", "p": "Kaleci", "c": "İsviçre 🇨🇭", "t": ["hoffenheim", "stuttgart", "dortmund"]}, {"n": "Serhou Guirassy", "p": "Santrafor", "c": "Gine 🇬🇳", "t": ["lille", "rennes", "stuttgart", "dortmund"]}, {"n": "Waldemar Anton", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["stuttgart", "dortmund"]}, {"n": "Pascal Groß", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["brighton", "dortmund"]}, {"n": "Granit Xhaka", "p": "Orta Saha", "c": "İsviçre 🇨🇭", "t": ["monchengladbach", "arsenal", "leverkusen"]}, {"n": "Patrik Schick", "p": "Santrafor", "c": "Çekya 🇨🇿", "t": ["sampdoria", "roma", "rb_leipzig", "leverkusen"]}, {"n": "Alejandro Grimaldo", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["barcelona", "benfica", "leverkusen"]}, {"n": "Jeremie Frimpong", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["man_city", "celtic", "leverkusen"]}, {"n": "Edmond Tapsoba", "p": "Stoper", "c": "Burkina Faso 🇧🇫", "t": ["vitoria_guimaraes", "leverkusen"]}, {"n": "Jonathan Tah", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["leverkusen", "bayern"]}, {"n": "Xavi Simons", "p": "Ofansif Orta Saha", "c": "Hollanda 🇳🇱", "t": ["barcelona", "psg", "psv", "rb_leipzig"]}, {"n": "Christopher Nkunku", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["psg", "rb_leipzig", "chelsea"]}, {"n": "Loïs Openda", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["lille", "rb_leipzig"]}, {"n": "Benjamin Šeško", "p": "Santrafor", "c": "Slovenya 🇸🇮", "t": ["rb_salzburg", "rb_leipzig"]}, {"n": "Castello Lukeba", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lyon", "rb_leipzig"]}, {"n": "Dušan Vlahović", "p": "Santrafor", "c": "Sırbistan 🇷🇸", "t": ["fiorentina", "juventus"]}, {"n": "Teun Koopmeiners", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["atalanta", "juventus"]}, {"n": "Nicolás González", "p": "Kanat", "c": "Arjantin 🇦🇷", "t": ["stuttgart", "fiorentina", "juventus"]}, {"n": "Manuel Locatelli", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["ac_milan", "juventus"]}, {"n": "Weston McKennie", "p": "Orta Saha", "c": "ABD 🇺🇸", "t": ["schalke", "juventus", "leeds"]}, {"n": "Arkadiusz Milik", "p": "Santrafor", "c": "Polonya 🇵🇱", "t": ["leverkusen", "ajax", "napoli", "marseille", "juventus"]}, {"n": "Gleison Bremer", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["torino", "juventus"]}, {"n": "Timothy Weah", "p": "Kanat", "c": "ABD 🇺🇸", "t": ["psg", "celtic", "lille", "juventus"]}, {"n": "Pierre Kalulu", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lyon", "ac_milan", "juventus"]}, {"n": "Rafael Leão", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "lille", "ac_milan"]}, {"n": "Christian Pulisic", "p": "Kanat", "c": "ABD 🇺🇸", "t": ["dortmund", "chelsea", "ac_milan"]}, {"n": "Theo Hernández", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["atletico", "real_madrid", "real_sociedad", "ac_milan"]}, {"n": "Fikayo Tomori", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["chelsea", "brighton", "ac_milan"]}, {"n": "Mike Maignan", "p": "Kaleci", "c": "Fransa 🇫🇷", "t": ["psg", "lille", "ac_milan"]}, {"n": "Ruben Loftus-Cheek", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["chelsea", "crystal_palace", "fulham", "ac_milan"]}, {"n": "Tammy Abraham", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["chelsea", "aston_villa", "roma", "ac_milan"]}, {"n": "Ismaël Bennacer", "p": "Orta Saha", "c": "Cezayir 🇩🇿", "t": ["arsenal", "ac_milan"]}, {"n": "Youssouf Fofana", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["monaco", "ac_milan"]}, {"n": "Emerson Royal", "p": "Sağ Bek", "c": "Brezilya 🇧🇷", "t": ["betis", "barcelona", "tottenham", "ac_milan"]}, {"n": "Marcus Thuram", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["monchengladbach", "inter"]}, {"n": "Hakan Çalhanoğlu", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["hamburg", "leverkusen", "ac_milan", "inter"]}, {"n": "Alessandro Bastoni", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["atalanta", "inter"]}, {"n": "Benjamin Pavard", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lille", "stuttgart", "bayern", "inter"]}, {"n": "Henrikh Mkhitaryan", "p": "Ofansif Orta Saha", "c": "Ermenistan 🇦🇲", "t": ["dortmund", "man_utd", "arsenal", "roma", "inter"]}, {"n": "Yann Sommer", "p": "Kaleci", "c": "İsviçre 🇨🇭", "t": ["monchengladbach", "bayern", "inter"]}, {"n": "Denzel Dumfries", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["psv", "inter"]}, {"n": "Piotr Zieliński", "p": "Orta Saha", "c": "Polonya 🇵🇱", "t": ["udinese", "napoli", "inter"]}, {"n": "Mehdi Taremi", "p": "Santrafor", "c": "İran 🇮🇷", "t": ["porto", "inter"]}, {"n": "Matteo Darmian", "p": "Sağ Bek", "c": "İtalya 🇮🇹", "t": ["ac_milan", "torino", "man_utd", "inter"]}, {"n": "Carlos Augusto", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["corinthians", "inter"]}, {"n": "Romelu Lukaku", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["chelsea", "west_ham", "everton", "man_utd", "inter", "roma", "napoli"]}, {"n": "Victor Osimhen", "p": "Santrafor", "c": "Nijerya 🇳🇬", "t": ["wolfsburg", "lille", "napoli", "galatasaray"]}, {"n": "Scott McTominay", "p": "Orta Saha", "c": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿", "t": ["man_utd", "napoli"]}, {"n": "Billy Gilmour", "p": "Orta Saha", "c": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿", "t": ["chelsea", "brighton", "napoli"]}, {"n": "Leonardo Spinazzola", "p": "Sol Bek", "c": "İtalya 🇮🇹", "t": ["juventus", "atalanta", "roma", "napoli"]}, {"n": "Matteo Politano", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["roma", "inter", "napoli"]}, {"n": "Paulo Dybala", "p": "Forvet", "c": "Arjantin 🇦🇷", "t": ["palermo", "juventus", "roma"]}, {"n": "Artem Dovbyk", "p": "Santrafor", "c": "Ukrayna 🇺🇦", "t": ["girona", "roma"]}, {"n": "Gianluca Mancini", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["atalanta", "roma"]}, {"n": "Bryan Cristante", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["ac_milan", "benfica", "atalanta", "roma"]}, {"n": "Stephan El Shaarawy", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["genoa", "ac_milan", "monaco", "roma"]}, {"n": "Alexis Sánchez", "p": "Kanat", "c": "Şili 🇨🇱", "t": ["river_plate", "barcelona", "arsenal", "man_utd", "inter", "marseille"]}, {"n": "Pierre-Emerick Aubameyang", "p": "Santrafor", "c": "Gabon 🇬🇦", "t": ["ac_milan", "lille", "monaco", "dortmund", "arsenal", "barcelona", "chelsea", "marseille"]}, {"n": "Mason Greenwood", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["man_utd", "getafe", "marseille"]}, {"n": "Adrien Rabiot", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["psg", "juventus", "marseille"]}, {"n": "Gerónimo Rulli", "p": "Kaleci", "c": "Arjantin 🇦🇷", "t": ["real_sociedad", "villarreal", "ajax", "marseille"]}, {"n": "Geoffrey Kondogbia", "p": "Ön Libero", "c": "Orta Afrika 🇨🇫", "t": ["sevilla", "monaco", "inter", "valencia", "atletico", "marseille"]}, {"n": "Amine Harit", "p": "Ofansif Orta Saha", "c": "Fas 🇲🇦", "t": ["schalke", "marseille"]}, {"n": "Alexandre Lacazette", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["lyon", "arsenal"]}, {"n": "Corentin Tolisso", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["lyon", "bayern"]}, {"n": "Wilfried Zaha", "p": "Kanat", "c": "Fildişi Sahili 🇨🇮", "t": ["crystal_palace", "man_utd", "galatasaray", "lyon"]}, {"n": "Georges Mikautadze", "p": "Santrafor", "c": "Gürcistan 🇬🇪", "t": ["ajax", "lyon"]}, {"n": "Said Benrahma", "p": "Kanat", "c": "Cezayir 🇩🇿", "t": ["brentford", "west_ham", "lyon"]}, {"n": "Nemanja Matić", "p": "Ön Libero", "c": "Sırbistan 🇷🇸", "t": ["chelsea", "benfica", "man_utd", "roma", "rennes", "lyon"]}, {"n": "Nicolas Tagliafico", "p": "Sol Bek", "c": "Arjantin 🇦🇷", "t": ["banfield", "independiente", "ajax", "lyon"]}, {"n": "Wissam Ben Yedder", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["sevilla", "monaco"]}, {"n": "Takumi Minamino", "p": "Kanat", "c": "Japonya 🇯🇵", "t": ["rb_salzburg", "liverpool", "southampton", "monaco"]}, {"n": "Folarin Balogun", "p": "Santrafor", "c": "ABD 🇺🇸", "t": ["arsenal", "monaco"]}, {"n": "Denis Zakaria", "p": "Orta Saha", "c": "İsviçre 🇨🇭", "t": ["monchengladbach", "juventus", "chelsea", "monaco"]}, {"n": "Thilo Kehrer", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["schalke", "psg", "west_ham", "monaco"]}, {"n": "Jordan Teze", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["psv", "monaco"]}, {"n": "Enes Ünal", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["man_city", "genk", "nac_breda", "twente", "villarreal", "levante", "valladolid", "getafe", "bournemouth"]}, {"n": "Nihat Kahveci", "p": "Forvet", "c": "Türkiye 🇹🇷", "t": ["besiktas", "real_sociedad", "villarreal"]}, {"n": "Yusuf Yazıcı", "p": "Ofansif Orta Saha", "c": "Türkiye 🇹🇷", "t": ["trabzonspor", "lille", "olympiacos"]}, {"n": "Mesut Özil", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["schalke", "werder_bremen", "real_madrid", "arsenal", "fenerbahce", "basaksehir"]}, {"n": "Arda Turan", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "atletico", "barcelona", "basaksehir"]}, {"n": "Burak Yılmaz", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["antalyaspor", "besiktas", "fenerbahce", "trabzonspor", "galatasaray", "beijing_guoan", "lille", "fortuna_sittard"]}, {"n": "Vincent Aboubakar", "p": "Santrafor", "c": "Kamerun 🇨🇲", "t": ["valenciennes", "lorient", "porto", "besiktas", "al_nassr"]}, {"n": "Cenk Tosun", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["frankfurt", "besiktas", "everton", "crystal_palace", "fenerbahce"]}, {"n": "Emre Belözoğlu", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "inter", "newcastle", "fenerbahce", "atletico", "basaksehir"]}, {"n": "Selçuk İnan", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["trabzonspor", "galatasaray"]}, {"n": "Rüştü Reçber", "p": "Kaleci", "c": "Türkiye 🇹🇷", "t": ["antalyaspor", "fenerbahce", "barcelona", "besiktas"]}, {"n": "Hakan Şükür", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "torino", "inter", "parma", "blackburn"]}, {"n": "Nuri Şahin", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["dortmund", "feyenoord", "real_madrid", "liverpool", "werder_bremen", "antalyaspor"]}, {"n": "Hamit Altıntop", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["schalke", "bayern", "real_madrid", "galatasaray"]}, {"n": "Halil Altıntop", "p": "Forvet", "c": "Türkiye 🇹🇷", "t": ["schalke", "frankfurt", "trabzonspor", "augsburg"]}, {"n": "Çağlar Söyüncü", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["freiburg", "leicester", "atletico", "fenerbahce"]}, {"n": "Merih Demiral", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["sporting", "alanyaspor", "sassuolo", "juventus", "atalanta", "al_ahli"]}, {"n": "Cengiz Ünder", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["basaksehir", "roma", "leicester", "marseille", "fenerbahce"]}, {"n": "Okay Yokuşlu", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["kayserispor", "trabzonspor", "celta", "west_brom", "getafe"]}, {"n": "Zeki Çelik", "p": "Sağ Bek", "c": "Türkiye 🇹🇷", "t": ["lille", "roma"]}, {"n": "Ferdi Kadıoğlu", "p": "Bek", "c": "Türkiye 🇹🇷", "t": ["fenerbahce", "brighton"]}, {"n": "Kerem Aktürkoğlu", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "benfica"]}, {"n": "Orkun Kökçü", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["feyenoord", "benfica"]}, {"n": "Salih Özcan", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["koln", "dortmund", "wolfsburg"]}, {"n": "Ozan Kabak", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "stuttgart", "schalke", "liverpool", "norwich", "hoffenheim"]}, {"n": "Yusuf Demir", "p": "Ofansif Orta Saha", "c": "Avusturya 🇦🇹", "t": ["barcelona", "galatasaray", "basel"]}, {"n": "Caner Erkin", "p": "Sol Bek", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "fenerbahce", "inter", "besiktas", "fatih_karagumruk", "basaksehir", "eyupspor"]}, {"n": "Gökhan Gönül", "p": "Sağ Bek", "c": "Türkiye 🇹🇷", "t": ["genclerbirligi", "fenerbahce", "besiktas"]}, {"n": "Mehmet Topal", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "valencia", "fenerbahce", "basaksehir", "besiktas"]}, {"n": "Oğuzhan Özyakup", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["arsenal", "besiktas", "feyenoord", "fortuna_sittard"]}, {"n": "Tolgay Arslan", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["hamburg", "besiktas", "fenerbahce", "udinese", "melbourne_city"]}, {"n": "İrfan Can Kahveci", "p": "Ofansif Orta Saha", "c": "Türkiye 🇹🇷", "t": ["genclerbirligi", "basaksehir", "fenerbahce"]}, {"n": "Yunus Akgün", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "adana_demirspor", "leicester"]}, {"n": "Mauro Icardi", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["sampdoria", "inter", "psg", "galatasaray"]}, {"n": "Dries Mertens", "p": "Forvet", "c": "Belçika 🇧🇪", "t": ["utrecht", "psv", "napoli", "galatasaray"]}, {"n": "Lucas Torreira", "p": "Ön Libero", "c": "Uruguay 🇺🇾", "t": ["sampdoria", "arsenal", "atletico", "fiorentina", "galatasaray"]}, {"n": "Fernando Muslera", "p": "Kaleci", "c": "Uruguay 🇺🇾", "t": ["lazio", "galatasaray"]}, {"n": "Didier Drogba", "p": "Santrafor", "c": "Fildişi Sahili 🇨🇮", "t": ["marseille", "chelsea", "galatasaray"]}, {"n": "Wesley Sneijder", "p": "Ofansif Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "real_madrid", "inter", "galatasaray", "nice"]}, {"n": "Radamel Falcao", "p": "Santrafor", "c": "Kolombiya 🇨🇴", "t": ["river_plate", "porto", "atletico", "monaco", "man_utd", "chelsea", "galatasaray", "rayo"]}, {"n": "Robin van Persie", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["feyenoord", "arsenal", "man_utd", "fenerbahce"]}, {"n": "Roberto Carlos", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["palmeiras", "inter", "real_madrid", "fenerbahce", "corinthians"]}, {"n": "Alex de Souza", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["coritiba", "palmeiras", "flamengo", "cruzeiro", "fenerbahce"]}, {"n": "Nicolas Anelka", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["psg", "arsenal", "real_madrid", "liverpool", "man_city", "fenerbahce", "chelsea", "juventus"]}, {"n": "Dirk Kuyt", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["utrecht", "feyenoord", "liverpool", "fenerbahce"]}, {"n": "Mario Balotelli", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["inter", "man_city", "ac_milan", "liverpool", "nice", "marseille", "adana_demirspor"]}, {"n": "Loris Karius", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["mainz", "liverpool", "besiktas", "union_berlin", "newcastle"]}, {"n": "Mario Gómez", "p": "Santrafor", "c": "Almanya 🇩🇪", "t": ["stuttgart", "bayern", "fiorentina", "besiktas", "wolfsburg"]}, {"n": "Demba Ba", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["hoffenheim", "west_ham", "newcastle", "chelsea", "besiktas", "basaksehir"]}, {"n": "Shinji Kagawa", "p": "Ofansif Orta Saha", "c": "Japonya 🇯🇵", "t": ["dortmund", "man_utd", "besiktas"]}, {"n": "Álvaro Negredo", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["real_madrid", "sevilla", "man_city", "valencia", "besiktas"]}, {"n": "Ryan Babel", "p": "Kanat", "c": "Hollanda 🇳🇱", "t": ["ajax", "liverpool", "hoffenheim", "besiktas", "fulham", "galatasaray", "eyupspor"]}, {"n": "Alex Oxlade-Chamberlain", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["southampton", "arsenal", "liverpool", "besiktas"]}, {"n": "Wout Weghorst", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["wolfsburg", "burnley", "besiktas", "man_utd", "hoffenheim", "ajax"]}, {"n": "Anderson Talisca", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["bahia", "benfica", "besiktas", "al_nassr"]}, {"n": "Alex Telles", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["gremio", "galatasaray", "inter", "porto", "man_utd", "sevilla", "al_nassr"]}, {"n": "Pepe", "p": "Stoper", "c": "Portekiz 🇵🇹", "t": ["porto", "real_madrid", "besiktas"]}, {"n": "Ricardo Quaresma", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "barcelona", "porto", "inter", "chelsea", "besiktas", "al_ahli"]}, {"n": "Dele Alli", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["tottenham", "everton", "besiktas"]}, {"n": "Edin Džeko", "p": "Santrafor", "c": "Bosna Hersek 🇧🇦", "t": ["wolfsburg", "man_city", "roma", "inter", "fenerbahce"]}, {"n": "Dušan Tadić", "p": "Ofansif Orta Saha", "c": "Sırbistan 🇷🇸", "t": ["twente", "southampton", "ajax", "fenerbahce"]}, {"n": "Fred", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["shakhtar", "man_utd", "fenerbahce"]}, {"n": "Allan Saint-Maximin", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["saint_etienne", "monaco", "nice", "newcastle", "al_ahli", "fenerbahce"]}, {"n": "Youssef En-Nesyri", "p": "Santrafor", "c": "Fas 🇲🇦", "t": ["malaga", "leganes", "sevilla", "fenerbahce"]}, {"n": "Filip Kostić", "p": "Kanat", "c": "Sırbistan 🇷🇸", "t": ["stuttgart", "hamburg", "frankfurt", "juventus", "fenerbahce"]}, {"n": "Sofyan Amrabat", "p": "Ön Libero", "c": "Fas 🇲🇦", "t": ["utrecht", "feyenoord", "club_brugge", "hellas_verona", "fiorentina", "man_utd", "fenerbahce"]}, {"n": "Dominik Livaković", "p": "Kaleci", "c": "Hırvatistan 🇭🇷", "t": ["dinamo_zagreb", "fenerbahce"]}, {"n": "Michy Batshuayi", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["standard_liege", "marseille", "chelsea", "dortmund", "valencia", "crystal_palace", "besiktas", "fenerbahce", "galatasaray"]}, {"n": "Gheorghe Hagi", "p": "Ofansif Orta Saha", "c": "Romanya 🇷🇴", "t": ["real_madrid", "barcelona", "galatasaray"]}, {"n": "Gheorghe Popescu", "p": "Stoper", "c": "Romanya 🇷🇴", "t": ["psv", "tottenham", "barcelona", "galatasaray", "lecce"]}, {"n": "Claudio Taffarel", "p": "Kaleci", "c": "Brezilya 🇧🇷", "t": ["internacional", "parma", "galatasaray"]}, {"n": "Mario Jardel", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["gremio", "porto", "galatasaray", "sporting", "bolton"]}, {"n": "Felipe Melo", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["flamengo", "cruzeiro", "gremio", "racing_santander", "almeria", "fiorentina", "juventus", "galatasaray", "inter", "palmeiras", "fluminense"]}, {"n": "Bafétimbi Gomis", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["saint_etienne", "lyon", "swansea", "marseille", "galatasaray", "al_hilal"]}, {"n": "Franck Ribéry", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["metz", "galatasaray", "marseille", "bayern", "fiorentina", "salernitana"]}, {"n": "Pierre van Hooijdonk", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["celtic", "nottingham", "benfica", "feyenoord", "fenerbahce"]}, {"n": "Jay-Jay Okocha", "p": "Ofansif Orta Saha", "c": "Nijerya 🇳🇬", "t": ["frankfurt", "fenerbahce", "psg", "bolton"]}, {"n": "Stephen Appiah", "p": "Orta Saha", "c": "Gana 🇬🇭", "t": ["udinese", "parma", "juventus", "fenerbahce", "bologna"]}, {"n": "Mateja Kežman", "p": "Santrafor", "c": "Sırbistan 🇷🇸", "t": ["partizan", "psv", "chelsea", "atletico", "fenerbahce", "psg", "zenit"]}, {"n": "Moussa Sow", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["rennes", "lille", "fenerbahce", "al_ahli"]}, {"n": "Mamadou Niang", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["metz", "strasbourg", "marseille", "fenerbahce", "al_sadd", "besiktas"]}, {"n": "Daniel Güiza", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["mallorca", "getafe", "fenerbahce"]}, {"n": "Guti", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["real_madrid", "besiktas"]}, {"n": "Gary Medel", "p": "Ön Libero", "c": "Şili 🇨🇱", "t": ["boca_juniors", "sevilla", "cardiff", "inter", "besiktas", "bologna"]}, {"n": "Domagoj Vida", "p": "Stoper", "c": "Hırvatistan 🇭🇷", "t": ["leverkusen", "dinamo_zagreb", "dynamo_kiev", "besiktas"]}, {"n": "Dusko Tosic", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["sochaux", "werder_bremen", "portsmouth", "qpr", "betis", "besiktas", "kasimpasa"]}, {"n": "Marcelo Guedes", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["santos", "psv", "hannover", "besiktas", "lyon", "bordeaux"]}, {"n": "Adriano Correia", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["sevilla", "barcelona", "besiktas"]}, {"n": "Rafa Silva", "p": "Ofansif Orta Saha", "c": "Portekiz 🇵🇹", "t": ["braga", "benfica", "besiktas"]}, {"n": "Gabriel Paulista", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["villarreal", "arsenal", "valencia", "atletico", "besiktas"]}, {"n": "João Mário", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["sporting", "inter", "west_ham", "benfica", "besiktas"]}, {"n": "Arthur Masuaku", "p": "Sol Bek", "c": "Kongo DC 🇨🇩", "t": ["valenciennes", "olympiacos", "west_ham", "besiktas"]}, {"n": "Ante Rebić", "p": "Kanat", "c": "Hırvatistan 🇭🇷", "t": ["fiorentina", "rb_leipzig", "frankfurt", "ac_milan", "besiktas"]}, {"n": "Eric Bailly", "p": "Stoper", "c": "Fildişi Sahili 🇨🇮", "t": ["espanyol", "villarreal", "man_utd", "marseille", "besiktas"]}, {"n": "Al-Musrati", "p": "Ön Libero", "c": "Libya 🇱🇾", "t": ["vitoria_guimaraes", "rio_ave", "braga", "besiktas"]}, {"n": "Ernest Muçi", "p": "Ofansif Orta Saha", "c": "Arnavutluk 🇦🇱", "t": ["legia_warsaw", "besiktas"]}, {"n": "Milot Rashica", "p": "Kanat", "c": "Kosova 🇽🇰", "t": ["vitesse", "werder_bremen", "norwich", "galatasaray", "besiktas"]}, {"n": "Gedson Fernandes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "tottenham", "galatasaray", "rizespor", "besiktas"]}, {"n": "Ronaldinho", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["gremio", "psg", "barcelona", "ac_milan", "flamengo", "fluminense"]}, {"n": "Kaká", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "ac_milan", "real_madrid", "orlando_city"]}, {"n": "David Beckham", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["man_utd", "real_madrid", "la_galaxy", "ac_milan", "psg"]}, {"n": "Thierry Henry", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["monaco", "juventus", "arsenal", "barcelona", "new_york_red_bulls"]}, {"n": "Andrea Pirlo", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["inter", "ac_milan", "juventus"]}, {"n": "Ronaldo Nazário", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["cruzeiro", "psv", "barcelona", "inter", "real_madrid", "ac_milan", "corinthians"]}, {"n": "Zinedine Zidane", "p": "Ofansif Orta Saha", "c": "Fransa 🇫🇷", "t": ["bordeaux", "juventus", "real_madrid"]}, {"n": "Roberto Baggio", "p": "Forvet", "c": "İtalya 🇮🇹", "t": ["fiorentina", "juventus", "ac_milan", "bologna", "inter"]}, {"n": "Sergio Agüero", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["independiente", "atletico", "man_city", "barcelona"]}, {"n": "Carlos Tevez", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["boca_juniors", "corinthians", "west_ham", "man_utd", "man_city", "juventus"]}, {"n": "Samuel Eto'o", "p": "Santrafor", "c": "Kamerun 🇨🇲", "t": ["real_madrid", "mallorca", "barcelona", "inter", "chelsea", "everton", "sampdoria", "antalyaspor"]}, {"n": "Clarence Seedorf", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "sampdoria", "real_madrid", "inter", "ac_milan", "botafogo"]}, {"n": "Edgar Davids", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan", "juventus", "barcelona", "inter", "tottenham"]}, {"n": "Patrick Vieira", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["cannes", "ac_milan", "arsenal", "juventus", "inter", "man_city"]}, {"n": "Dennis Bergkamp", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["ajax", "inter", "arsenal"]}, {"n": "Hernán Crespo", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["river_plate", "parma", "lazio", "inter", "chelsea", "ac_milan", "genoa"]}, {"n": "Michael Ballack", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["leverkusen", "bayern", "chelsea"]}, {"n": "Fernando Torres", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["atletico", "liverpool", "chelsea", "ac_milan"]}, {"n": "Steven Gerrard", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["liverpool", "la_galaxy"]}, {"n": "Frank Lampard", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["west_ham", "chelsea", "man_city"]}, {"n": "Wayne Rooney", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["everton", "man_utd", "dc_united"]}, {"n": "Michael Owen", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["liverpool", "real_madrid", "newcastle", "man_utd", "stoke"]}, {"n": "Rivaldo", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["palmeiras", "deportivo", "barcelona", "ac_milan", "cruzeiro", "olympiacos"]}, {"n": "Robinho", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "real_madrid", "man_city", "ac_milan", "sivasspor", "basaksehir"]}, {"n": "Patrick Kluivert", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan", "barcelona", "newcastle", "valencia", "psv", "lille"]}, {"n": "Marc Overmars", "p": "Kanat", "c": "Hollanda 🇳🇱", "t": ["ajax", "arsenal", "barcelona"]}, {"n": "Gabriel Batistuta", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["river_plate", "boca_juniors", "fiorentina", "roma", "inter"]}, {"n": "Andriy Shevchenko", "p": "Santrafor", "c": "Ukrayna 🇺🇦", "t": ["dynamo_kiev", "ac_milan", "chelsea"]}, {"n": "Fabio Cannavaro", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["napoli", "parma", "inter", "juventus", "real_madrid"]}, {"n": "Alessandro Nesta", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["lazio", "ac_milan"]}, {"n": "Filippo Inzaghi", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["parma", "atalanta", "juventus", "ac_milan"]}, {"n": "Paul Pogba", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["man_utd", "juventus"]}, {"n": "Eden Hazard", "p": "Kanat", "c": "Belçika 🇧🇪", "t": ["lille", "chelsea", "real_madrid"]}, {"n": "Philippe Coutinho", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["inter", "espanyol", "liverpool", "barcelona", "bayern", "aston_villa"]}, {"n": "Kalidou Koulibaly", "p": "Stoper", "c": "Senegal 🇸🇳", "t": ["genk", "napoli", "chelsea", "al_hilal"]}, {"n": "Marcelo Brozović", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["inter", "al_nassr"]}, {"n": "Luís Figo", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "barcelona", "real_madrid", "inter"]}, {"n": "Xabi Alonso", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["real_sociedad", "liverpool", "real_madrid", "bayern"]}, {"n": "Ruud van Nistelrooy", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["psv", "man_utd", "real_madrid", "hamburg", "malaga"]}, {"n": "Diego Forlán", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["independiente", "man_utd", "villarreal", "atletico", "inter"]}, {"n": "David Villa", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["real_zaragoza", "valencia", "barcelona", "atletico", "new_york_city", "vissel_kobe"]}, {"n": "Cesc Fàbregas", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["arsenal", "barcelona", "chelsea", "monaco"]}, {"n": "Claude Makélélé", "p": "Ön Libero", "c": "Fransa 🇫🇷", "t": ["nantes", "marseille", "celta", "real_madrid", "chelsea", "psg"]}, {"n": "Javier Mascherano", "p": "Ön Libero", "c": "Arjantin 🇦🇷", "t": ["river_plate", "corinthians", "west_ham", "liverpool", "barcelona"]}, {"n": "Pepe Reina", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["barcelona", "villarreal", "liverpool", "napoli", "bayern", "ac_milan", "aston_villa", "lazio"]}];

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
