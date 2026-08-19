/**
 * Comprehensive Football Database for 1v1 Football Quiz
 * 662 Global Clubs & 549 Multi-Club Footballers
 * Optimized Compact Serialization
 */

const FOOTBALL_TEAMS = [
  {
    "id": "koln",
    "name": "1. FC Köln",
    "short": "KOE",
    "color": "#ED1C24",
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
    "id": "1860_munich",
    "name": "1860 Munich",
    "short": "186",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "24erzincanspor",
    "name": "24Erzincanspor",
    "short": "24E",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ac_milan",
    "name": "AC Milan",
    "short": "MIL",
    "color": "#FB090B",
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
    "id": "fiorentina",
    "name": "ACF Fiorentina",
    "short": "FIO",
    "color": "#4F2365",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "aek_athens",
    "name": "AEK Athens",
    "short": "AEK",
    "color": "#FFE600",
    "country": "Yunanistan 🇬🇷"
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
    "id": "saint_etienne",
    "name": "AS Saint-Étienne",
    "short": "ASSE",
    "color": "#00783D",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "az_alkmaar",
    "name": "AZ Alkmaar",
    "short": "AZ",
    "color": "#C8102E",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "aalborg",
    "name": "Aalborg",
    "short": "AAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "aberdeen",
    "name": "Aberdeen",
    "short": "ABE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "academica",
    "name": "Academica",
    "short": "ACA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "adana_demirspor",
    "name": "Adana Demirspor",
    "short": "ADS",
    "color": "#004B87",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "adanaspor",
    "name": "Adanaspor",
    "short": "ADA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "adelaide_united",
    "name": "Adelaide United",
    "short": "ADE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "admira_wacker",
    "name": "Admira Wacker",
    "short": "ADM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "aek_larnaca",
    "name": "Aek Larnaca",
    "short": "AEK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "afc_eskilstuna",
    "name": "Afc Eskilstuna",
    "short": "AFC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "afc_fylde",
    "name": "Afc Fylde",
    "short": "AFC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "agovv",
    "name": "Agovv",
    "short": "AGO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ajaccio",
    "name": "Ajaccio",
    "short": "AJA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "al_ahli",
    "name": "Al Ahli Saudi FC",
    "short": "AHL",
    "color": "#008000",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "al_ahli_uae",
    "name": "Al Ahli Uae",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "al_ain",
    "name": "Al Ain",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "al_arabi",
    "name": "Al Arabi",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "al_duhail",
    "name": "Al Duhail",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "al_ettifaq",
    "name": "Al Ettifaq FC",
    "short": "ETT",
    "color": "#008000",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "al_gharafa",
    "name": "Al Gharafa",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "al_jazira",
    "name": "Al Jazira",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "al_nasr_dubai",
    "name": "Al Nasr Dubai",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "al_nassr",
    "name": "Al Nassr FC",
    "short": "NAS",
    "color": "#FFD100",
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
    "id": "al_sadd",
    "name": "Al Sadd",
    "short": "AL_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "al_shabab",
    "name": "Al Shabab FC",
    "short": "SHB",
    "color": "#000000",
    "country": "Suudi Arabistan 🇸🇦"
  },
  {
    "id": "alajuelense",
    "name": "Alajuelense",
    "short": "ALA",
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
    "id": "albacete",
    "name": "Albacete",
    "short": "ALB",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "alemannia_aachen",
    "name": "Alemannia Aachen",
    "short": "ALE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ales",
    "name": "Ales",
    "short": "ALE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "algaida",
    "name": "Algaida",
    "short": "ALG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "altay",
    "name": "Altay",
    "short": "ALT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "altinordu",
    "name": "Altinordu",
    "short": "ALT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "alverca",
    "name": "Alverca",
    "short": "ALV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "always_ready",
    "name": "Always Ready",
    "short": "ALW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "america",
    "name": "America",
    "short": "AME",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "america_rj",
    "name": "America Rj",
    "short": "AME",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "america_rn",
    "name": "America Rn",
    "short": "AME",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "amiens",
    "name": "Amiens",
    "short": "AMI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "angers",
    "name": "Angers",
    "short": "ANG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "anorthosis",
    "name": "Anorthosis",
    "short": "ANO",
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
    "id": "anzhi_makhachkala",
    "name": "Anzhi Makhachkala",
    "short": "ANZ",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "argentinos_juniors",
    "name": "Argentinos Juniors",
    "short": "ARG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "arges_pitesti",
    "name": "Arges Pitesti",
    "short": "ARG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "arles_avignon",
    "name": "Arles Avignon",
    "short": "ARL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "arsenal",
    "name": "Arsenal",
    "short": "ARS",
    "color": "#EF0107",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "arsenal_sarandi",
    "name": "Arsenal Sarandi",
    "short": "ARS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "arsenal_tula",
    "name": "Arsenal Tula",
    "short": "ARS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "arta_solar",
    "name": "Arta Solar",
    "short": "ART",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "asa_targu_mures",
    "name": "Asa Targu Mures",
    "short": "ASA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ascoli",
    "name": "Ascoli",
    "short": "ASC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "asec_mimosas",
    "name": "Asec Mimosas",
    "short": "ASE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "name": "Athletic Club Bilbao",
    "short": "ATH",
    "color": "#EE2524",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "athletico_paranaense",
    "name": "Athletico Paranaense",
    "short": "ATH",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "atk",
    "name": "Atk",
    "short": "ATK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "atlante",
    "name": "Atlante",
    "short": "ATL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "atletico_goianiense",
    "name": "Atletico Goianiense",
    "short": "ATL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "atletico_kolkata",
    "name": "Atletico Kolkata",
    "short": "ATL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "atletico_nacional",
    "name": "Atletico Nacional",
    "short": "ATL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "atletico_paranaense",
    "name": "Atletico Paranaense",
    "short": "ATL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "atletico",
    "name": "Atlético Madrid",
    "short": "ATM",
    "color": "#CB3524",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "atletico_mineiro",
    "name": "Atlético Mineiro",
    "short": "CAM",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "auxerre",
    "name": "Auxerre",
    "short": "AUX",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "avellino",
    "name": "Avellino",
    "short": "AVE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "aves",
    "name": "Aves",
    "short": "AVE",
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
    "id": "bahlinger",
    "name": "Bahlinger",
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
    "id": "banik_ostrava",
    "name": "Banik Ostrava",
    "short": "BAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "baniyas",
    "name": "Baniyas",
    "short": "BAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "barcelona_b",
    "name": "Barcelona B",
    "short": "BAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bari",
    "name": "Bari",
    "short": "BAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "barnet",
    "name": "Barnet",
    "short": "BAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "barnsley",
    "name": "Barnsley",
    "short": "BAR",
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
    "id": "bastia",
    "name": "Bastia",
    "short": "BAS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bate_borisov",
    "name": "Bate Borisov",
    "short": "BAT",
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
    "id": "beira_mar",
    "name": "Beira Mar",
    "short": "BEI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "belenenses",
    "name": "Belenenses",
    "short": "BEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "benevento",
    "name": "Benevento",
    "short": "BEN",
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
    "id": "birmingham",
    "name": "Birmingham",
    "short": "BIR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bk_hacken",
    "name": "Bk Hacken",
    "short": "BK_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "blackburn",
    "name": "Blackburn Rovers",
    "short": "BLA",
    "color": "#009EE0",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "blackpool",
    "name": "Blackpool",
    "short": "BLA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "boavista",
    "name": "Boavista",
    "short": "BOA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "boavista_rj",
    "name": "Boavista Rj",
    "short": "BOA",
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
    "id": "borovo",
    "name": "Borovo",
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
    "name": "Borussia Mönchengladbach",
    "short": "BMG",
    "color": "#000000",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "borussia_neunkirchen",
    "name": "Borussia Neunkirchen",
    "short": "BOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "botafogo",
    "name": "Botafogo FR",
    "short": "BOT",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "botev_vratsa",
    "name": "Botev Vratsa",
    "short": "BOT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "boulogne",
    "name": "Boulogne",
    "short": "BOU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bowers_pitsea",
    "name": "Bowers Pitsea",
    "short": "BOW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bradford_city",
    "name": "Bradford City",
    "short": "BRA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "brann",
    "name": "Brann",
    "short": "BRA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "brentford",
    "name": "Brentford FC",
    "short": "BRE",
    "color": "#E30613",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "brescia",
    "name": "Brescia Calcio",
    "short": "BRE",
    "color": "#003399",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "brest",
    "name": "Brest",
    "short": "BRE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "brighton",
    "name": "Brighton & Hove Albion",
    "short": "BHA",
    "color": "#0057B8",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "bristol_city",
    "name": "Bristol City",
    "short": "BRI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bristol_rovers",
    "name": "Bristol Rovers",
    "short": "BRI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "brondby",
    "name": "Brondby",
    "short": "BRO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bsk_borca",
    "name": "Bsk Borca",
    "short": "BSK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "buducnost_podgorica",
    "name": "Buducnost Podgorica",
    "short": "BUD",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bunyodkor",
    "name": "Bunyodkor",
    "short": "BUN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "burnley",
    "name": "Burnley FC",
    "short": "BUR",
    "color": "#6C1D45",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "bursaspor",
    "name": "Bursaspor",
    "short": "BUR",
    "color": "#008000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "burton_albion",
    "name": "Burton Albion",
    "short": "BUR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "bury",
    "name": "Bury",
    "short": "BUR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "independiente",
    "name": "CA Independiente",
    "short": "IND",
    "color": "#E30613",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "osasuna",
    "name": "CA Osasuna",
    "short": "OSA",
    "color": "#8A1538",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "flamengo",
    "name": "CR Flamengo",
    "short": "FLA",
    "color": "#C3281E",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "caen",
    "name": "Caen",
    "short": "CAE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cagliari",
    "name": "Cagliari Calcio",
    "short": "CAG",
    "color": "#9E1B32",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "cambuur",
    "name": "Cambuur",
    "short": "CAM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "campomaiorense",
    "name": "Campomaiorense",
    "short": "CAM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "canakkale_dardanel",
    "name": "Canakkale Dardanel",
    "short": "CAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "cartagonova",
    "name": "Cartagonova",
    "short": "CAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "casertana",
    "name": "Casertana",
    "short": "CAS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "castel_di_sangro",
    "name": "Castel Di Sangro",
    "short": "CAS",
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
    "id": "central_coast_mariners",
    "name": "Central Coast Mariners",
    "short": "CEN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cercle_brugge",
    "name": "Cercle Brugge",
    "short": "CER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cerezo_osaka",
    "name": "Cerezo Osaka",
    "short": "CER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cerro_porteno",
    "name": "Cerro Porteno",
    "short": "CER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cesena",
    "name": "Cesena",
    "short": "CES",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cfr_cluj",
    "name": "Cfr Cluj",
    "short": "CFR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "charleroi",
    "name": "Charleroi",
    "short": "CHA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "charlton",
    "name": "Charlton",
    "short": "CHA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "chateauroux",
    "name": "Chateauroux",
    "short": "CHA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "chelsea",
    "name": "Chelsea",
    "short": "CHE",
    "color": "#034694",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "chemnitzer",
    "name": "Chemnitzer",
    "short": "CHE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "chennaiyin",
    "name": "Chennaiyin",
    "short": "CHE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "chesham_united",
    "name": "Chesham United",
    "short": "CHE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "chiasso",
    "name": "Chiasso",
    "short": "CHI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "chicago_fire",
    "name": "Chicago Fire",
    "short": "CHI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "chmel_blsany",
    "name": "Chmel Blsany",
    "short": "CHM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ciudad_murcia",
    "name": "Ciudad Murcia",
    "short": "CIU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "club_brugge",
    "name": "Club Brugge",
    "short": "CLU",
    "color": "#003399",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "cobh_ramblers",
    "name": "Cobh Ramblers",
    "short": "COB",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cobreloa",
    "name": "Cobreloa",
    "short": "COB",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "colo_colo",
    "name": "Colo Colo",
    "short": "COL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "colorado_rapids",
    "name": "Colorado Rapids",
    "short": "COL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "como",
    "name": "Como 1907",
    "short": "COM",
    "color": "#0038A8",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "copenhagen",
    "name": "Copenhagen",
    "short": "COP",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cordoba",
    "name": "Cordoba",
    "short": "COR",
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
    "id": "cornella",
    "name": "Cornella",
    "short": "COR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "coventry",
    "name": "Coventry",
    "short": "COV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "crawley_town",
    "name": "Crawley Town",
    "short": "CRA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cremonese",
    "name": "Cremonese",
    "short": "CRE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "crewe_alexandra",
    "name": "Crewe Alexandra",
    "short": "CRE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cruzeiro",
    "name": "Cruzeiro EC",
    "short": "CRU",
    "color": "#00529F",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "red_star",
    "name": "Crvena Zvezda",
    "short": "CZV",
    "color": "#E30613",
    "country": "Sırbistan 🇷🇸"
  },
  {
    "id": "crystal_palace",
    "name": "Crystal Palace",
    "short": "CRY",
    "color": "#1B458F",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "cska_moscow",
    "name": "Cska Moscow",
    "short": "CSK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cska_sofia",
    "name": "Cska Sofia",
    "short": "CSK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cukaricki",
    "name": "Cukaricki",
    "short": "CUK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "cadiz",
    "name": "Cádiz CF",
    "short": "CAD",
    "color": "#FEE100",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "darlington",
    "name": "Darlington",
    "short": "DAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "darmstadt",
    "name": "Darmstadt",
    "short": "DAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dc_united",
    "name": "Dc United",
    "short": "DC_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "delhi_dynamos",
    "name": "Delhi Dynamos",
    "short": "DEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "den_bosch",
    "name": "Den Bosch",
    "short": "DEN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "alaves",
    "name": "Deportivo Alavés",
    "short": "ALA",
    "color": "#0055A5",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "deportivo",
    "name": "Deportivo La Coruña",
    "short": "DEP",
    "color": "#00529F",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "derby_county",
    "name": "Derby County",
    "short": "DER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dijon",
    "name": "Dijon",
    "short": "DIJ",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dinamo_bucuresti",
    "name": "Dinamo Bucuresti",
    "short": "DIN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dinamo_tbilisi",
    "name": "Dinamo Tbilisi",
    "short": "DIN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dinamo_zagreb",
    "name": "Dinamo Zagreb",
    "short": "DZG",
    "color": "#005CA9",
    "country": "Hırvatistan 🇭🇷"
  },
  {
    "id": "djurgarden",
    "name": "Djurgarden",
    "short": "DJU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dnipro",
    "name": "Dnipro",
    "short": "DNI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "doncaster_rovers",
    "name": "Doncaster Rovers",
    "short": "DON",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dos_hermanas",
    "name": "Dos Hermanas",
    "short": "DOS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "drobeta_turnu_severin",
    "name": "Drobeta Turnu Severin",
    "short": "DRO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dundee",
    "name": "Dundee",
    "short": "DUN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dynamo_ceske_budejovice",
    "name": "Dynamo Ceske Budejovice",
    "short": "DYN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dynamo_dresden",
    "name": "Dynamo Dresden",
    "short": "DYN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "dynamo_kiev",
    "name": "Dynamo Kyiv",
    "short": "DYK",
    "color": "#005CA9",
    "country": "Ukrayna 🇺🇦"
  },
  {
    "id": "dynamo_moscow",
    "name": "Dynamo Moscow",
    "short": "DYN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "eendracht_aalst",
    "name": "Eendracht Aalst",
    "short": "EEN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "eibar",
    "name": "Eibar",
    "short": "EIB",
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
    "id": "elche",
    "name": "Elche",
    "short": "ELC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "emmen",
    "name": "Emmen",
    "short": "EMM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "empoli",
    "name": "Empoli FC",
    "short": "EMP",
    "color": "#005BAA",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "ermiss_aradippou",
    "name": "Ermiss Aradippou",
    "short": "ERM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "eskisehirspor",
    "name": "Eskisehirspor",
    "short": "ESK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "estoril",
    "name": "Estoril",
    "short": "EST",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "estudiantes",
    "name": "Estudiantes",
    "short": "EST",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "etir_veliko_tarnovo",
    "name": "Etir Veliko Tarnovo",
    "short": "ETI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "eupen",
    "name": "Eupen",
    "short": "EUP",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "everton",
    "name": "Everton",
    "short": "EVE",
    "color": "#003399",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "evian",
    "name": "Evian",
    "short": "EVI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "excelsior",
    "name": "Excelsior",
    "short": "EXC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "exeter_city",
    "name": "Exeter City",
    "short": "EXE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "extremadura",
    "name": "Extremadura",
    "short": "EXT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "eyupspor",
    "name": "Eyüpspor",
    "short": "EYU",
    "color": "#582C83",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "augsburg",
    "name": "FC Augsburg",
    "short": "FCA",
    "color": "#BA1B23",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "barcelona",
    "name": "FC Barcelona",
    "short": "BAR",
    "color": "#004D98",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "groningen",
    "name": "FC Groningen",
    "short": "GRO",
    "color": "#008037",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "lorient",
    "name": "FC Lorient",
    "short": "FCL",
    "color": "#F37021",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "metz",
    "name": "FC Metz",
    "short": "MET",
    "color": "#800020",
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
    "id": "twente",
    "name": "FC Twente",
    "short": "TWE",
    "color": "#E30613",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "utrecht",
    "name": "FC Utrecht",
    "short": "UTR",
    "color": "#E30613",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "partizan",
    "name": "FK Partizan",
    "short": "PAR",
    "color": "#000000",
    "country": "Sırbistan 🇷🇸"
  },
  {
    "id": "mainz",
    "name": "FSV Mainz 05",
    "short": "M05",
    "color": "#C8102E",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "fakel_voronezh",
    "name": "Fakel Voronezh",
    "short": "FAK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "falkirk",
    "name": "Falkirk",
    "short": "FAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "farul_constanta",
    "name": "Farul Constanta",
    "short": "FAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "fatih_karagumruk",
    "name": "Fatih Karagümrük",
    "short": "FKM",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "fc_seoul",
    "name": "Fc Seoul",
    "short": "FC_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "feirense",
    "name": "Feirense",
    "short": "FEI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "figueirense",
    "name": "Figueirense",
    "short": "FIG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "fluminense",
    "name": "Fluminense FC",
    "short": "FLU",
    "color": "#8B0000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "foggia",
    "name": "Foggia",
    "short": "FOG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "fortuna_dusseldorf",
    "name": "Fortuna Dusseldorf",
    "short": "FOR",
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
    "id": "freamunde",
    "name": "Freamunde",
    "short": "FRE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "frosinone",
    "name": "Frosinone",
    "short": "FRO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "gaziantep",
    "name": "Gaziantep FK",
    "short": "GFK",
    "color": "#A6192E",
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
    "id": "genclerbirligi",
    "name": "Gençlerbirliği",
    "short": "GEN",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
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
    "id": "bordeaux",
    "name": "Girondins de Bordeaux",
    "short": "BOR",
    "color": "#0A1C2A",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "gladsaxe_hero",
    "name": "Gladsaxe Hero",
    "short": "GLA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "go_ahead_eagles",
    "name": "Go Ahead Eagles",
    "short": "GO_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "goias",
    "name": "Goias",
    "short": "GOI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "gornik_zabrze",
    "name": "Gornik Zabrze",
    "short": "GOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "granada",
    "name": "Granada CF",
    "short": "GRA",
    "color": "#A6192E",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "grasshoppers",
    "name": "Grasshoppers",
    "short": "GRA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "grenoble",
    "name": "Grenoble",
    "short": "GRE",
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
    "id": "guangzhou_evergrande",
    "name": "Guangzhou Evergrande",
    "short": "GUA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "guarani",
    "name": "Guarani",
    "short": "GUA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "guingamp",
    "name": "Guingamp",
    "short": "GUI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "goztepe",
    "name": "Göztepe SK",
    "short": "GOZ",
    "color": "#FFD100",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "haarlem",
    "name": "Haarlem",
    "short": "HAA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hacettepe",
    "name": "Hacettepe",
    "short": "HAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hajduk_split",
    "name": "Hajduk Split",
    "short": "HAJ",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hamburg",
    "name": "Hamburger SV",
    "short": "HSV",
    "color": "#005CA9",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "hannover",
    "name": "Hannover",
    "short": "HAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hansa_rostock",
    "name": "Hansa Rostock",
    "short": "HAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hartlepool",
    "name": "Hartlepool",
    "short": "HAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hearts",
    "name": "Hearts",
    "short": "HEA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hearts_of_oak",
    "name": "Hearts Of Oak",
    "short": "HEA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hebei_china_fortune",
    "name": "Hebei China Fortune",
    "short": "HEB",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hebros_harmanli",
    "name": "Hebros Harmanli",
    "short": "HEB",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hellas_verona",
    "name": "Hellas Verona",
    "short": "VER",
    "color": "#002F6C",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "heracles",
    "name": "Heracles",
    "short": "HER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hertha",
    "name": "Hertha BSC",
    "short": "BSC",
    "color": "#005CA9",
    "country": "Almanya 🇩🇪"
  },
  {
    "id": "holstein_kiel",
    "name": "Holstein Kiel",
    "short": "HOL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "horoya",
    "name": "Horoya",
    "short": "HOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "horsens",
    "name": "Horsens",
    "short": "HOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "horsham",
    "name": "Horsham",
    "short": "HOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "houston_dynamo",
    "name": "Houston Dynamo",
    "short": "HOU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hrvatski_dragovoljac",
    "name": "Hrvatski Dragovoljac",
    "short": "HRV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "huddersfield",
    "name": "Huddersfield",
    "short": "HUD",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "huesca",
    "name": "Huesca",
    "short": "HUE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "hull_city",
    "name": "Hull City",
    "short": "HUL",
    "color": "#F5A623",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "hvidovre",
    "name": "Hvidovre",
    "short": "HVI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ibiza",
    "name": "Ibiza",
    "short": "IBI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ingolstadt",
    "name": "Ingolstadt",
    "short": "ING",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "instituto",
    "name": "Instituto",
    "short": "INS",
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
    "id": "inter_zapresic",
    "name": "Inter Zapresic",
    "short": "INT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ipswich",
    "name": "Ipswich Town",
    "short": "IPS",
    "color": "#00448A",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "isloch",
    "name": "Isloch",
    "short": "ISL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "issia_wazi",
    "name": "Issia Wazi",
    "short": "ISS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "istanbul_bb",
    "name": "Istanbul Bb",
    "short": "IST",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "istanbulspor",
    "name": "Istanbulspor",
    "short": "IST",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "istres",
    "name": "Istres",
    "short": "IST",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "i荷wuanyanwu_nationale",
    "name": "I荷Wuanyanwu Nationale",
    "short": "I荷W",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "johor_darul_tazim",
    "name": "Johor Darul Tazim",
    "short": "JOH",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "jubilo_iwata",
    "name": "Jubilo Iwata",
    "short": "JUB",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "juventude",
    "name": "Juventude",
    "short": "JUV",
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
    "id": "gent",
    "name": "KAA Gent",
    "short": "GNT",
    "color": "#004B87",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "genk",
    "name": "KRC Genk",
    "short": "GNK",
    "color": "#0047AB",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "kabuscorp",
    "name": "Kabuscorp",
    "short": "KAB",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kairat",
    "name": "Kairat",
    "short": "KAI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kaiserslautern",
    "name": "Kaiserslautern",
    "short": "KAI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "karlsruher",
    "name": "Karlsruher",
    "short": "KAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kashima_antlers",
    "name": "Kashima Antlers",
    "short": "KAS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kashiwa_reysol",
    "name": "Kashiwa Reysol",
    "short": "KAS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kasimpasa",
    "name": "Kasımpaşa",
    "short": "KAS",
    "color": "#002D62",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "kawasaki_frontale",
    "name": "Kawasaki Frontale",
    "short": "KAW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kayserispor",
    "name": "Kayserispor",
    "short": "KAY",
    "color": "#FFD100",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "kerala_blasters",
    "name": "Kerala Blasters",
    "short": "KER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kitchee",
    "name": "Kitchee",
    "short": "KIT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "konyaspor",
    "name": "Konyaspor",
    "short": "KON",
    "color": "#008037",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "kortrijk",
    "name": "Kortrijk",
    "short": "KOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kosice",
    "name": "Kosice",
    "short": "KOS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kr_reykjavik",
    "name": "Kr Reykjavik",
    "short": "KR_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "krylia_sovetov",
    "name": "Krylia Sovetov",
    "short": "KRY",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "kuban_krasnodar",
    "name": "Kuban Krasnodar",
    "short": "KUB",
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
    "id": "la_louviere",
    "name": "La Louviere",
    "short": "LA_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "lanceros_boyaca",
    "name": "Lanceros Boyaca",
    "short": "LAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "lanciano",
    "name": "Lanciano",
    "short": "LAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "larissa",
    "name": "Larissa",
    "short": "LAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "las_palmas",
    "name": "Las Palmas",
    "short": "LAS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "le_havre",
    "name": "Le Havre",
    "short": "LE_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "le_mans",
    "name": "Le Mans",
    "short": "LE_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "leca",
    "name": "Leca",
    "short": "LEC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "leeds",
    "name": "Leeds United",
    "short": "LEE",
    "color": "#FFCD00",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "leffe",
    "name": "Leffe",
    "short": "LEF",
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
    "id": "leipzig",
    "name": "Leipzig",
    "short": "LEI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "leixoes",
    "name": "Leixoes",
    "short": "LEI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "leon",
    "name": "Leon",
    "short": "LEO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "levante",
    "name": "Levante UD",
    "short": "LEV",
    "color": "#9E1B32",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "liverpool",
    "name": "Liverpool",
    "short": "LIV",
    "color": "#C8102E",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "livorno",
    "name": "Livorno",
    "short": "LIV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "lokomotiv_moscow",
    "name": "Lokomotiv Moscow",
    "short": "LOK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "lokomotiva",
    "name": "Lokomotiva",
    "short": "LOK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "lafc",
    "name": "Los Angeles FC",
    "short": "LAFC",
    "color": "#000000",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "los_angeles_fc",
    "name": "Los Angeles Fc",
    "short": "LOS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "lugano",
    "name": "Lugano",
    "short": "LUG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "lugo",
    "name": "Lugo",
    "short": "LUG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "lumezzane",
    "name": "Lumezzane",
    "short": "LUM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ankaragucu",
    "name": "MKE Ankaragücü",
    "short": "ANK",
    "color": "#FFE600",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "macclesfield",
    "name": "Macclesfield",
    "short": "MAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "machico",
    "name": "Machico",
    "short": "MAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "madureira",
    "name": "Madureira",
    "short": "MAD",
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
    "id": "manisaspor",
    "name": "Manisaspor",
    "short": "MAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "marconi_stallions",
    "name": "Marconi Stallions",
    "short": "MAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "maritimo",
    "name": "Maritimo",
    "short": "MAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "marsala",
    "name": "Marsala",
    "short": "MAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "mechelen",
    "name": "Mechelen",
    "short": "MEC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "melbourne_city",
    "name": "Melbourne City",
    "short": "MEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "melbourne_victory",
    "name": "Melbourne Victory",
    "short": "MEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "memphis_901",
    "name": "Memphis 901",
    "short": "MEM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "metalurh_donetsk",
    "name": "Metalurh Donetsk",
    "short": "MET",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "metro_stars",
    "name": "Metro Stars",
    "short": "MET",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "miami_fc",
    "name": "Miami Fc",
    "short": "MIA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "middlesbrough",
    "name": "Middlesbrough",
    "short": "MID",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "midtjylland",
    "name": "Midtjylland",
    "short": "MID",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "millonarios",
    "name": "Millonarios",
    "short": "MIL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "millwall",
    "name": "Millwall",
    "short": "MIL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "mk_dons",
    "name": "Mk Dons",
    "short": "MK_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "mlada_boleslav",
    "name": "Mlada Boleslav",
    "short": "MLA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "mogi_mirim",
    "name": "Mogi Mirim",
    "short": "MOG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "molde",
    "name": "Molde",
    "short": "MOL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "molenbeek",
    "name": "Molenbeek",
    "short": "MOL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "montana",
    "name": "Montana",
    "short": "MON",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "monterrey",
    "name": "Monterrey",
    "short": "MON",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "montevideo_wanderers",
    "name": "Montevideo Wanderers",
    "short": "MON",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "montpellier",
    "name": "Montpellier HSC",
    "short": "MHS",
    "color": "#003366",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "montreal_impact",
    "name": "Montreal Impact",
    "short": "MON",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "morecambe",
    "name": "Morecambe",
    "short": "MOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "mouscron",
    "name": "Mouscron",
    "short": "MOU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "mumbai_city",
    "name": "Mumbai City",
    "short": "MUM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "murcia",
    "name": "Murcia",
    "short": "MUR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "mypa",
    "name": "Mypa",
    "short": "MYP",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "malaga",
    "name": "Málaga CF",
    "short": "MAL",
    "color": "#007FC8",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "nac_breda",
    "name": "Nac Breda",
    "short": "NAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "nacional",
    "name": "Nacional",
    "short": "NAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "nagoya_grampus",
    "name": "Nagoya Grampus",
    "short": "NAG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "national",
    "name": "National",
    "short": "NAT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "national_bucuresti",
    "name": "National Bucuresti",
    "short": "NAT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "naval",
    "name": "Naval",
    "short": "NAV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "nec_nijmegen",
    "name": "Nec Nijmegen",
    "short": "NEC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "new_england_revolution",
    "name": "New England Revolution",
    "short": "NEW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "new_york_city",
    "name": "New York City FC",
    "short": "NYC",
    "color": "#6CADDF",
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
    "id": "newcastle_jets",
    "name": "Newcastle Jets",
    "short": "NEW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "newcastle",
    "name": "Newcastle United",
    "short": "NEW",
    "color": "#241F20",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "newells_old_boys",
    "name": "Newells Old Boys",
    "short": "NEW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "newport_county",
    "name": "Newport County",
    "short": "NEW",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "niki_volos",
    "name": "Niki Volos",
    "short": "NIK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "norwich",
    "name": "Norwich City",
    "short": "NOR",
    "color": "#FFF200",
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
    "id": "notts_county",
    "name": "Notts County",
    "short": "NOT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "nuorese",
    "name": "Nuorese",
    "short": "NUO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "nice",
    "name": "OGC Nice",
    "short": "NIC",
    "color": "#000000",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "ofk_beograd",
    "name": "Ofk Beograd",
    "short": "OFK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "olimpia",
    "name": "Olimpia",
    "short": "OLI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "olimpija_ljubljana",
    "name": "Olimpija Ljubljana",
    "short": "OLI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "olt_scornicesti",
    "name": "Olt Scornicesti",
    "short": "OLT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "olympiacos",
    "name": "Olympiacos FC",
    "short": "OLY",
    "color": "#D2122E",
    "country": "Yunanistan 🇬🇷"
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
    "id": "omonia",
    "name": "Omonia",
    "short": "OMO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "oriental",
    "name": "Oriental",
    "short": "ORI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "orlando_city",
    "name": "Orlando City SC",
    "short": "ORL",
    "color": "#612B82",
    "country": "ABD 🇺🇸"
  },
  {
    "id": "osijek",
    "name": "Osijek",
    "short": "OSI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ostersund",
    "name": "Ostersund",
    "short": "OST",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "paok",
    "name": "PAOK FC",
    "short": "PAOK",
    "color": "#000000",
    "country": "Yunanistan 🇬🇷"
  },
  {
    "id": "psv",
    "name": "PSV Eindhoven",
    "short": "PSV",
    "color": "#FF0000",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "padova",
    "name": "Padova",
    "short": "PAD",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "palermo",
    "name": "Palermo FC",
    "short": "PAL",
    "color": "#FFA7B6",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "panathinaikos",
    "name": "Panathinaikos FC",
    "short": "PAO",
    "color": "#00783D",
    "country": "Yunanistan 🇬🇷"
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
    "name": "Parma Calcio",
    "short": "PAR",
    "color": "#FFE600",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "penarol",
    "name": "Penarol",
    "short": "PEN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "pergocrema",
    "name": "Pergocrema",
    "short": "PER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "persepolis",
    "name": "Persepolis",
    "short": "PER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "perth_glory",
    "name": "Perth Glory",
    "short": "PER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "perugia",
    "name": "Perugia",
    "short": "PER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "pescara",
    "name": "Pescara",
    "short": "PES",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "petrolul_ploiesti",
    "name": "Petrolul Ploiesti",
    "short": "PET",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "phoenix_rising",
    "name": "Phoenix Rising",
    "short": "PHO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "piacenza",
    "name": "Piacenza",
    "short": "PIA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "pirin_blagoevgrad",
    "name": "Pirin Blagoevgrad",
    "short": "PIR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "pisa",
    "name": "Pisa",
    "short": "PIS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "plymouth",
    "name": "Plymouth",
    "short": "PLY",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "politehnica_timisoara",
    "name": "Politehnica Timisoara",
    "short": "POL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ponferradina",
    "name": "Ponferradina",
    "short": "PON",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "portland_timbers",
    "name": "Portland Timbers",
    "short": "POR",
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
    "id": "prato",
    "name": "Prato",
    "short": "PRA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "preston_north_end",
    "name": "Preston North End",
    "short": "PRE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "preussen_munster",
    "name": "Preussen Munster",
    "short": "PRE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "pune_city",
    "name": "Pune City",
    "short": "PUN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "puntarenas",
    "name": "Puntarenas",
    "short": "PUN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "pyunik",
    "name": "Pyunik",
    "short": "PYU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "qarabag",
    "name": "Qarabag",
    "short": "QAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "qatar_sc",
    "name": "Qatar Sc",
    "short": "QAT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "qingdao_red_lions",
    "name": "Qingdao Red Lions",
    "short": "QIN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "qpr",
    "name": "Queens Park Rangers",
    "short": "QPR",
    "color": "#1D5BA4",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "queretaro",
    "name": "Queretaro",
    "short": "QUE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "quick_boys",
    "name": "Quick Boys",
    "short": "QUI",
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
    "id": "lens",
    "name": "RC Lens",
    "short": "RCL",
    "color": "#E30613",
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
    "id": "anderlecht",
    "name": "RSC Anderlecht",
    "short": "AND",
    "color": "#4F2365",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "racing_bafoussam",
    "name": "Racing Bafoussam",
    "short": "RAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "racing_club",
    "name": "Racing Club",
    "short": "RAC",
    "color": "#18A0FB",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "racing_santander",
    "name": "Racing Santander",
    "short": "RAC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rad",
    "name": "Rad",
    "short": "RAD",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "radnicki_kragujevac",
    "name": "Radnicki Kragujevac",
    "short": "RAD",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "radnicki_nis",
    "name": "Radnicki Nis",
    "short": "RAD",
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
    "id": "rangers_international",
    "name": "Rangers International",
    "short": "RAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rapid_wien",
    "name": "Rapid Wien",
    "short": "RAP",
    "color": "#008037",
    "country": "Avusturya 🇦🇹"
  },
  {
    "id": "rayo",
    "name": "Rayo Vallecano",
    "short": "RAY",
    "color": "#E51B24",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "rbc_roosendaal",
    "name": "Rbc Roosendaal",
    "short": "RBC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "reading",
    "name": "Reading",
    "short": "REA",
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
    "id": "real_oviedo",
    "name": "Real Oviedo",
    "short": "REA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "real_sociedad",
    "name": "Real Sociedad",
    "short": "RSO",
    "color": "#0067B1",
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
    "id": "real_zaragoza",
    "name": "Real Zaragoza",
    "short": "ZAR",
    "color": "#0055A5",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "recreativo",
    "name": "Recreativo",
    "short": "REC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "reggiana",
    "name": "Reggiana",
    "short": "REG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "reggina",
    "name": "Reggina",
    "short": "REG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "resita",
    "name": "Resita",
    "short": "RES",
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
    "id": "river_plate_montevideo",
    "name": "River Plate Montevideo",
    "short": "RIV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rnk_split",
    "name": "Rnk Split",
    "short": "RNK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rot_weiss_ahlen",
    "name": "Rot Weiss Ahlen",
    "short": "ROT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rota",
    "name": "Rota",
    "short": "ROT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rotherham",
    "name": "Rotherham",
    "short": "ROT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rouen",
    "name": "Rouen",
    "short": "ROU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "antwerp",
    "name": "Royal Antwerp FC",
    "short": "ANT",
    "color": "#E30613",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "rubin_kazan",
    "name": "Rubin Kazan",
    "short": "RUB",
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
    "id": "heerenveen",
    "name": "SC Heerenveen",
    "short": "HEE",
    "color": "#005CA9",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "internacional",
    "name": "SC Internacional",
    "short": "INT",
    "color": "#E50000",
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
    "id": "sabadell",
    "name": "Sabadell",
    "short": "SAB",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sagan_tosu",
    "name": "Sagan Tosu",
    "short": "SAG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sakaryaspor",
    "name": "Sakaryaspor",
    "short": "SAK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "samsunspor",
    "name": "Samsunspor",
    "short": "SAM",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "san_lorenzo",
    "name": "San Lorenzo",
    "short": "SLO",
    "color": "#0A2240",
    "country": "Arjantin 🇦🇷"
  },
  {
    "id": "sanfrecce_hiroshima",
    "name": "Sanfrecce Hiroshima",
    "short": "SAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sanluqueno",
    "name": "Sanluqueno",
    "short": "SAN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "santa_cruz",
    "name": "Santa Cruz",
    "short": "SAN",
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
    "id": "sao_caetano",
    "name": "Sao Caetano",
    "short": "SAO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "saprissa",
    "name": "Saprissa",
    "short": "SAP",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sarajevo",
    "name": "Sarajevo",
    "short": "SAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sbv_excelsior",
    "name": "Sbv Excelsior",
    "short": "SBV",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "schiedam",
    "name": "Schiedam",
    "short": "SCH",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sedan",
    "name": "Sedan",
    "short": "SED",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "semassi",
    "name": "Semassi",
    "short": "SEM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "seraing",
    "name": "Seraing",
    "short": "SER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "servette",
    "name": "Servette",
    "short": "SER",
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
    "name": "Shakhtar Donetsk",
    "short": "SHK",
    "color": "#F58220",
    "country": "Ukrayna 🇺🇦"
  },
  {
    "id": "shanghai_shenhua",
    "name": "Shanghai Shenhua",
    "short": "SHA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "shanghai_sipg",
    "name": "Shanghai Sipg",
    "short": "SHA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sheffield_utd",
    "name": "Sheffield United",
    "short": "SHU",
    "color": "#EE2737",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "sheffield_wednesday",
    "name": "Sheffield Wednesday",
    "short": "SHE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "shijiazhuang_ever_bright",
    "name": "Shijiazhuang Ever Bright",
    "short": "SHI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "shonan_bellmare",
    "name": "Shonan Bellmare",
    "short": "SHO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "siena",
    "name": "Siena",
    "short": "SIE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sint_truiden",
    "name": "Sint Truiden",
    "short": "SIN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sion",
    "name": "Sion",
    "short": "SIO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sivasspor",
    "name": "Sivasspor",
    "short": "SIV",
    "color": "#E30613",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "slavia_prague",
    "name": "Slavia Prague",
    "short": "SLA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sligo_rovers",
    "name": "Sligo Rovers",
    "short": "SLI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sliven",
    "name": "Sliven",
    "short": "SLI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "slovan_liberec",
    "name": "Slovan Liberec",
    "short": "SLO",
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
    "id": "sogndal",
    "name": "Sogndal",
    "short": "SOG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sokol_tych",
    "name": "Sokol Tych",
    "short": "SOK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "south_china",
    "name": "South China",
    "short": "SOU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "southampton",
    "name": "Southampton FC",
    "short": "SOU",
    "color": "#D71920",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "spal",
    "name": "Spal",
    "short": "SPA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sparta_prague",
    "name": "Sparta Prague",
    "short": "SPA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sparta_rotterdam",
    "name": "Sparta Rotterdam",
    "short": "SPA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "spartak_moscow",
    "name": "Spartak Moscow",
    "short": "SPA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "spartak_subotica",
    "name": "Spartak Subotica",
    "short": "SPA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "spartak_trnava",
    "name": "Spartak Trnava",
    "short": "SPA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sporting",
    "name": "Sporting CP",
    "short": "SCP",
    "color": "#008057",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "sporting_gijon",
    "name": "Sporting Gijon",
    "short": "SPO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sportul_studentesc",
    "name": "Sportul Studentesc",
    "short": "SPO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "st_pauli",
    "name": "St Pauli",
    "short": "ST_",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rennes",
    "name": "Stade Rennais",
    "short": "REN",
    "color": "#E30613",
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
    "id": "standard_liege",
    "name": "Standard Liège",
    "short": "STA",
    "color": "#ED1C24",
    "country": "Belçika 🇧🇪"
  },
  {
    "id": "steaua_bucuresti",
    "name": "Steaua Bucuresti",
    "short": "STE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "stockport",
    "name": "Stockport",
    "short": "STO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "stoke",
    "name": "Stoke City",
    "short": "STK",
    "color": "#E03A3E",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "sunderland",
    "name": "Sunderland AFC",
    "short": "SUN",
    "color": "#EB172B",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "swansea",
    "name": "Swansea City",
    "short": "SWA",
    "color": "#000000",
    "country": "Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿"
  },
  {
    "id": "swindon",
    "name": "Swindon",
    "short": "SWI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sydney_croatia",
    "name": "Sydney Croatia",
    "short": "SYD",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sydney_fc",
    "name": "Sydney Fc",
    "short": "SYD",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "sydney_olympic",
    "name": "Sydney Olympic",
    "short": "SYD",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "id": "teleoptik",
    "name": "Teleoptik",
    "short": "TEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "telstar",
    "name": "Telstar",
    "short": "TEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "tenerife",
    "name": "Tenerife",
    "short": "TEN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "teplice",
    "name": "Teplice",
    "short": "TEP",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "thisted",
    "name": "Thisted",
    "short": "THI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "tirana",
    "name": "Tirana",
    "short": "TIR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "torino",
    "name": "Torino FC",
    "short": "TOR",
    "color": "#8A1C27",
    "country": "İtalya 🇮🇹"
  },
  {
    "id": "toros_neza",
    "name": "Toros Neza",
    "short": "TOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "torpedo_moscow",
    "name": "Torpedo Moscow",
    "short": "TOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "torres",
    "name": "Torres",
    "short": "TOR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "tottenham",
    "name": "Tottenham Hotspur",
    "short": "TOT",
    "color": "#132257",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "toulon",
    "name": "Toulon",
    "short": "TOU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "toulouse",
    "name": "Toulouse FC",
    "short": "TFC",
    "color": "#582C83",
    "country": "Fransa 🇫🇷"
  },
  {
    "id": "tours",
    "name": "Tours",
    "short": "TOU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "trabzonspor",
    "name": "Trabzonspor",
    "short": "TS",
    "color": "#8B0000",
    "country": "Türkiye 🇹🇷"
  },
  {
    "id": "trencin",
    "name": "Trencin",
    "short": "TRE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "triestina",
    "name": "Triestina",
    "short": "TRI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "tromso",
    "name": "Tromso",
    "short": "TRO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "troyes",
    "name": "Troyes",
    "short": "TRO",
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
    "id": "almeria",
    "name": "UD Almería",
    "short": "ALM",
    "color": "#ED1C24",
    "country": "İspanya 🇪🇸"
  },
  {
    "id": "lecce",
    "name": "US Lecce",
    "short": "LEC",
    "color": "#FFD100",
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
    "id": "sassuolo",
    "name": "US Sassuolo",
    "short": "SAS",
    "color": "#00A352",
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
    "id": "ufa",
    "name": "Ufa",
    "short": "UFA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "ulsan_hyundai",
    "name": "Ulsan Hyundai",
    "short": "ULS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "umraniyespor",
    "name": "Umraniyespor",
    "short": "UMR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "uniao_leiria",
    "name": "Uniao Leiria",
    "short": "UNI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "uniao_sao_joao",
    "name": "Uniao Sao Joao",
    "short": "UNI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "universidad_catolica",
    "name": "Universidad Catolica",
    "short": "UNI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "universitatea_craiova",
    "name": "Universitatea Craiova",
    "short": "UNI",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "urartu",
    "name": "Urartu",
    "short": "URA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "urawa_red_diamonds",
    "name": "Urawa Red Diamonds",
    "short": "URA",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "urtrillas",
    "name": "Urtrillas",
    "short": "URT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vaduz",
    "name": "Vaduz",
    "short": "VAD",
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
    "id": "valerenga",
    "name": "Valerenga",
    "short": "VAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "valur",
    "name": "Valur",
    "short": "VAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vardar",
    "name": "Vardar",
    "short": "VAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "varzim",
    "name": "Varzim",
    "short": "VAR",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vasco_da_gama",
    "name": "Vasco da Gama",
    "short": "VAS",
    "color": "#000000",
    "country": "Brezilya 🇧🇷"
  },
  {
    "id": "vecindario",
    "name": "Vecindario",
    "short": "VEC",
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
    "id": "bochum",
    "name": "VfL Bochum",
    "short": "BOC",
    "color": "#005CA9",
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
    "id": "vicenza",
    "name": "Vicenza",
    "short": "VIC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
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
    "name": "Vitesse Arnhem",
    "short": "VIT",
    "color": "#FFE600",
    "country": "Hollanda 🇳🇱"
  },
  {
    "id": "vitoria",
    "name": "Vitoria",
    "short": "VIT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vitoria_ba",
    "name": "Vitoria Ba",
    "short": "VIT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vitoria_setubal",
    "name": "Vitoria Setubal",
    "short": "VIT",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vitoria_guimaraes",
    "name": "Vitória Guimarães",
    "short": "VSC",
    "color": "#000000",
    "country": "Portekiz 🇵🇹"
  },
  {
    "id": "vojvodina",
    "name": "Vojvodina",
    "short": "VOJ",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "vushtrria",
    "name": "Vushtrria",
    "short": "VUS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "watford",
    "name": "Watford FC",
    "short": "WAT",
    "color": "#FBEE23",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "wattenscheid",
    "name": "Wattenscheid",
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
    "name": "West Bromwich Albion",
    "short": "WBA",
    "color": "#122F67",
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
    "id": "western_sydney_wanderers",
    "name": "Western Sydney Wanderers",
    "short": "WES",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "wigan",
    "name": "Wigan",
    "short": "WIG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "willem_ii",
    "name": "Willem Ii",
    "short": "WIL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "wisla_krakow",
    "name": "Wisla Krakow",
    "short": "WIS",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "wolves",
    "name": "Wolverhampton Wanderers",
    "short": "WOL",
    "color": "#FDB913",
    "country": "İngiltere 🇬🇧"
  },
  {
    "id": "wrexham",
    "name": "Wrexham",
    "short": "WRE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "wycombe",
    "name": "Wycombe",
    "short": "WYC",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "xerez",
    "name": "Xerez",
    "short": "XER",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "xinjiang_tianshan_leopard",
    "name": "Xinjiang Tianshan Leopard",
    "short": "XIN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "yeovil",
    "name": "Yeovil",
    "short": "YEO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "yokohama_f_marinos",
    "name": "Yokohama F Marinos",
    "short": "YOK",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "young_boys",
    "name": "Young Boys",
    "short": "YOU",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "yverdon",
    "name": "Yverdon",
    "short": "YVE",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "zagreb",
    "name": "Zagreb",
    "short": "ZAG",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "zalgiris",
    "name": "Zalgiris",
    "short": "ZAL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "zeljeznicar",
    "name": "Zeljeznicar",
    "short": "ZEL",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "zemun",
    "name": "Zemun",
    "short": "ZEM",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "zenit",
    "name": "Zenit",
    "short": "ZEN",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "zwolle",
    "name": "Zwolle",
    "short": "ZWO",
    "color": "#00ff87",
    "country": "Dünya 🌍"
  },
  {
    "id": "rizespor",
    "name": "Çaykur Rizespor",
    "short": "RIZ",
    "color": "#008000",
    "country": "Türkiye 🇹🇷"
  }
];

const _RAW_PLAYERS = [{"n": "Cristiano Ronaldo", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["sporting", "man_utd", "real_madrid", "juventus", "al_nassr"]}, {"n": "Lionel Messi", "p": "Forvet", "c": "Arjantin 🇦🇷", "t": ["barcelona", "psg", "inter_miami"]}, {"n": "Zlatan Ibrahimović", "p": "Santrafor", "c": "İsveç 🇸🇪", "t": ["ajax", "juventus", "inter", "barcelona", "ac_milan", "psg", "man_utd", "la_galaxy"]}, {"n": "Neymar Jr", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "barcelona", "psg", "al_hilal"]}, {"n": "Kylian Mbappé", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["monaco", "psg", "real_madrid"]}, {"n": "Erling Haaland", "p": "Santrafor", "c": "Norveç 🇳🇴", "t": ["rb_salzburg", "dortmund", "man_city"]}, {"n": "Karim Benzema", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["lyon", "real_madrid", "al_ittihad"]}, {"n": "Robert Lewandowski", "p": "Santrafor", "c": "Polonya 🇵🇱", "t": ["dortmund", "bayern", "barcelona"]}, {"n": "Luis Suárez", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["ajax", "liverpool", "barcelona", "atletico", "gremio", "inter_miami"]}, {"n": "Luka Modrić", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["dinamo_zagreb", "tottenham", "real_madrid"]}, {"n": "Toni Kroos", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["bayern", "leverkusen", "real_madrid"]}, {"n": "Kevin De Bruyne", "p": "Ofansif Orta Saha", "c": "Belçika 🇧🇪", "t": ["genk", "chelsea", "werder_bremen", "wolfsburg", "man_city"]}, {"n": "Mohamed Salah", "p": "Kanat", "c": "Mısır 🇪🇬", "t": ["chelsea", "fiorentina", "roma", "liverpool"]}, {"n": "Harry Kane", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["tottenham", "leicester", "bayern"]}, {"n": "Sadio Mané", "p": "Kanat", "c": "Senegal 🇸🇳", "t": ["metz", "rb_salzburg", "southampton", "liverpool", "bayern", "al_nassr"]}, {"n": "Jude Bellingham", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["dortmund", "real_madrid"]}, {"n": "Vinícius Júnior", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["flamengo", "real_madrid"]}, {"n": "Rodrygo", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "real_madrid"]}, {"n": "Jadon Sancho", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["dortmund", "man_utd", "chelsea"]}, {"n": "Jamal Musiala", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["chelsea", "bayern"]}, {"n": "Marcus Rashford", "p": "Forvet", "c": "İngiltere 🇬🇧", "t": ["man_utd", "aston_villa"]}, {"n": "Cole Palmer", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["man_city", "chelsea"]}, {"n": "Mason Mount", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["chelsea", "man_utd"]}, {"n": "Kai Havertz", "p": "Forvet", "c": "Almanya 🇩🇪", "t": ["leverkusen", "chelsea", "arsenal"]}, {"n": "Timo Werner", "p": "Forvet", "c": "Almanya 🇩🇪", "t": ["stuttgart", "rb_leipzig", "chelsea", "tottenham"]}, {"n": "Raheem Sterling", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["liverpool", "man_city", "chelsea", "arsenal"]}, {"n": "Gabriel Jesus", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["palmeiras", "man_city", "arsenal"]}, {"n": "Oleksandr Zinchenko", "p": "Sol Bek", "c": "Ukrayna 🇺🇦", "t": ["shakhtar", "man_city", "psv", "arsenal"]}, {"n": "Declan Rice", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["chelsea", "west_ham", "arsenal"]}, {"n": "Jack Grealish", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["aston_villa", "man_city"]}, {"n": "Bernardo Silva", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "monaco", "man_city"]}, {"n": "Bruno Fernandes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["sampdoria", "sporting", "man_utd"]}, {"n": "Ruben Dias", "p": "Stoper", "c": "Portekiz 🇵🇹", "t": ["benfica", "man_city"]}, {"n": "Ederson", "p": "Kaleci", "c": "Brezilya 🇧🇷", "t": ["benfica", "man_city"]}, {"n": "Alisson Becker", "p": "Kaleci", "c": "Brezilya 🇧🇷", "t": ["internacional", "roma", "liverpool"]}, {"n": "Virgil van Dijk", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["groningen", "celtic", "southampton", "liverpool"]}, {"n": "Dominik Szoboszlai", "p": "Orta Saha", "c": "Macaristan 🇭🇺", "t": ["rb_salzburg", "rb_leipzig", "liverpool"]}, {"n": "Alexis Mac Allister", "p": "Orta Saha", "c": "Arjantin 🇦🇷", "t": ["boca_juniors", "brighton", "liverpool"]}, {"n": "Darwin Núñez", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["almeria", "benfica", "liverpool"]}, {"n": "Luis Díaz", "p": "Kanat", "c": "Kolombiya 🇨🇴", "t": ["porto", "liverpool"]}, {"n": "Cody Gakpo", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["psv", "liverpool"]}, {"n": "Diogo Jota", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["atletico", "porto", "wolves", "liverpool"]}, {"n": "Federico Chiesa", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["fiorentina", "juventus", "liverpool"]}, {"n": "Ryan Gravenberch", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "bayern", "liverpool"]}, {"n": "Son Heung-min", "p": "Forvet", "c": "Güney Kore 🇰🇷", "t": ["hamburg", "leverkusen", "tottenham"]}, {"n": "James Maddison", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["leicester", "tottenham"]}, {"n": "Richarlison", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["fluminense", "watford", "everton", "tottenham"]}, {"n": "Dejan Kulusevski", "p": "Kanat", "c": "İsveç 🇸🇪", "t": ["atalanta", "juventus", "tottenham"]}, {"n": "Pedro Porro", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["girona", "man_city", "valladolid", "sporting", "tottenham"]}, {"n": "Alexander Isak", "p": "Santrafor", "c": "İsveç 🇸🇪", "t": ["dortmund", "real_sociedad", "newcastle"]}, {"n": "Bruno Guimarães", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["lyon", "newcastle"]}, {"n": "Sandro Tonali", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["brescia", "ac_milan", "newcastle"]}, {"n": "Kieran Trippier", "p": "Sağ Bek", "c": "İngiltere 🇬🇧", "t": ["burnley", "tottenham", "atletico", "newcastle"]}, {"n": "Douglas Luiz", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["vasco_da_gama", "man_city", "girona", "aston_villa", "juventus"]}, {"n": "Emiliano Martínez", "p": "Kaleci", "c": "Arjantin 🇦🇷", "t": ["arsenal", "getafe", "reading", "aston_villa"]}, {"n": "Lucas Digne", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["lille", "psg", "roma", "barcelona", "everton", "aston_villa"]}, {"n": "Ollie Watkins", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["brentford", "aston_villa"]}, {"n": "Amadou Onana", "p": "Orta Saha", "c": "Belçika 🇧🇪", "t": ["hoffenheim", "hamburg", "lille", "everton", "aston_villa"]}, {"n": "Matthijs de Ligt", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["ajax", "juventus", "bayern", "man_utd"]}, {"n": "Noussair Mazraoui", "p": "Bek", "c": "Fas 🇲🇦", "t": ["ajax", "bayern", "man_utd"]}, {"n": "Lisandro Martínez", "p": "Stoper", "c": "Arjantin 🇦🇷", "t": ["ajax", "man_utd"]}, {"n": "Antony", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "ajax", "man_utd"]}, {"n": "André Onana", "p": "Kaleci", "c": "Kamerun 🇨🇲", "t": ["barcelona", "ajax", "inter", "man_utd"]}, {"n": "Casemiro", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "porto", "real_madrid", "man_utd"]}, {"n": "Raphaël Varane", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lens", "real_madrid", "man_utd", "como"]}, {"n": "Christian Eriksen", "p": "Ofansif Orta Saha", "c": "Danimarka 🇩🇰", "t": ["ajax", "tottenham", "inter", "brentford", "man_utd"]}, {"n": "Manuel Ugarte", "p": "Ön Libero", "c": "Uruguay 🇺🇾", "t": ["sporting", "psg", "man_utd"]}, {"n": "Joshua Zirkzee", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["bayern", "parma", "anderlecht", "bologna", "man_utd"]}, {"n": "Julián Álvarez", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["river_plate", "man_city", "atletico"]}, {"n": "Antoine Griezmann", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["real_sociedad", "atletico", "barcelona"]}, {"n": "Álvaro Morata", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["real_madrid", "juventus", "chelsea", "atletico", "ac_milan"]}, {"n": "João Félix", "p": "Forvet", "c": "Portekiz 🇵🇹", "t": ["benfica", "atletico", "chelsea", "barcelona"]}, {"n": "Memphis Depay", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["psv", "man_utd", "lyon", "barcelona", "atletico", "corinthians"]}, {"n": "İlkay Gündoğan", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["bochum", "dortmund", "man_city", "barcelona"]}, {"n": "Dani Olmo", "p": "Ofansif Orta Saha", "c": "İspanya 🇪🇸", "t": ["barcelona", "dinamo_zagreb", "rb_leipzig"]}, {"n": "Ferran Torres", "p": "Forvet", "c": "İspanya 🇪🇸", "t": ["valencia", "man_city", "barcelona"]}, {"n": "Raphinha", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["vitoria_guimaraes", "sporting", "rennes", "leeds", "barcelona"]}, {"n": "Frenkie de Jong", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "barcelona"]}, {"n": "Jules Koundé", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["bordeaux", "sevilla", "barcelona"]}, {"n": "Andreas Christensen", "p": "Stoper", "c": "Danimarka 🇩🇰", "t": ["chelsea", "monchengladbach", "barcelona"]}, {"n": "Marc-André ter Stegen", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["monchengladbach", "barcelona"]}, {"n": "Wojciech Szczęsny", "p": "Kaleci", "c": "Polonya 🇵🇱", "t": ["arsenal", "brentford", "roma", "juventus", "barcelona"]}, {"n": "Eduardo Camavinga", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["rennes", "real_madrid"]}, {"n": "Aurélien Tchouaméni", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["bordeaux", "monaco", "real_madrid"]}, {"n": "Thibaut Courtois", "p": "Kaleci", "c": "Belçika 🇧🇪", "t": ["genk", "atletico", "chelsea", "real_madrid"]}, {"n": "David Alaba", "p": "Stoper", "c": "Avusturya 🇦🇹", "t": ["hoffenheim", "bayern", "real_madrid"]}, {"n": "Antonio Rüdiger", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["stuttgart", "roma", "chelsea", "real_madrid"]}, {"n": "Éder Militão", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "porto", "real_madrid"]}, {"n": "Dani Carvajal", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["leverkusen", "real_madrid"]}, {"n": "Ferland Mendy", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["le_havre", "lyon", "real_madrid"]}, {"n": "Brahim Díaz", "p": "Ofansif Orta Saha", "c": "Fas 🇲🇦", "t": ["man_city", "real_madrid", "ac_milan"]}, {"n": "Kepa Arrizabalaga", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["athletic_bilbao", "valladolid", "chelsea", "real_madrid", "bournemouth"]}, {"n": "Ousmane Dembélé", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["rennes", "dortmund", "barcelona", "psg"]}, {"n": "Achraf Hakimi", "p": "Sağ Bek", "c": "Fas 🇲🇦", "t": ["real_madrid", "dortmund", "inter", "psg"]}, {"n": "Gianluigi Donnarumma", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["ac_milan", "psg"]}, {"n": "Marquinhos", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["corinthians", "roma", "psg"]}, {"n": "Vitinha", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["porto", "wolves", "psg"]}, {"n": "Gonçalo Ramos", "p": "Santrafor", "c": "Portekiz 🇵🇹", "t": ["benfica", "psg"]}, {"n": "Randal Kolo Muani", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["nantes", "frankfurt", "psg", "juventus"]}, {"n": "Bradley Barcola", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["lyon", "psg"]}, {"n": "Marco Asensio", "p": "Kanat", "c": "İspanya 🇪🇸", "t": ["mallorca", "espanyol", "real_madrid", "psg"]}, {"n": "Fabián Ruiz", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["betis", "napoli", "psg"]}, {"n": "Lucas Hernandez", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["atletico", "bayern", "psg"]}, {"n": "Milan Škriniar", "p": "Stoper", "c": "Slovakya 🇸🇰", "t": ["sampdoria", "inter", "psg"]}, {"n": "João Neves", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "psg"]}, {"n": "Leroy Sané", "p": "Kanat", "c": "Almanya 🇩🇪", "t": ["schalke", "man_city", "bayern"]}, {"n": "Serge Gnabry", "p": "Kanat", "c": "Almanya 🇩🇪", "t": ["arsenal", "west_brom", "werder_bremen", "hoffenheim", "bayern", "stuttgart"]}, {"n": "Kingsley Coman", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["psg", "juventus", "bayern"]}, {"n": "Michael Olise", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["reading", "crystal_palace", "bayern"]}, {"n": "João Palhinha", "p": "Ön Libero", "c": "Portekiz 🇵🇹", "t": ["sporting", "braga", "fulham", "bayern"]}, {"n": "Alphonso Davies", "p": "Sol Bek", "c": "Kanada 🇨🇦", "t": ["bayern", "real_madrid"]}, {"n": "Dayot Upamecano", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["rb_salzburg", "rb_leipzig", "bayern"]}, {"n": "Min-jae Kim", "p": "Stoper", "c": "Güney Kore 🇰🇷", "t": ["fenerbahce", "napoli", "bayern"]}, {"n": "Marcel Sabitzer", "p": "Orta Saha", "c": "Avusturya 🇦🇹", "t": ["rapid_wien", "rb_salzburg", "rb_leipzig", "bayern", "man_utd", "dortmund"]}, {"n": "Niklas Süle", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["hoffenheim", "bayern", "dortmund"]}, {"n": "Mats Hummels", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["bayern", "dortmund", "roma"]}, {"n": "Emre Can", "p": "Ön Libero", "c": "Almanya 🇩🇪", "t": ["bayern", "leverkusen", "liverpool", "juventus", "dortmund"]}, {"n": "Karim Adeyemi", "p": "Kanat", "c": "Almanya 🇩🇪", "t": ["rb_salzburg", "dortmund"]}, {"n": "Julian Brandt", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["wolfsburg", "leverkusen", "dortmund"]}, {"n": "Gregor Kobel", "p": "Kaleci", "c": "İsviçre 🇨🇭", "t": ["hoffenheim", "augsburg", "stuttgart", "dortmund"]}, {"n": "Serhou Guirassy", "p": "Santrafor", "c": "Gine 🇬🇳", "t": ["lille", "koln", "amiens", "rennes", "stuttgart", "dortmund"]}, {"n": "Waldemar Anton", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["hannover", "stuttgart", "dortmund"]}, {"n": "Pascal Groß", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["hoffenheim", "karlsruher", "ingolstadt", "brighton", "dortmund"]}, {"n": "Granit Xhaka", "p": "Orta Saha", "c": "İsviçre 🇨🇭", "t": ["basel", "monchengladbach", "arsenal", "leverkusen"]}, {"n": "Patrik Schick", "p": "Santrafor", "c": "Çekya 🇨🇿", "t": ["sparta_prague", "sampdoria", "roma", "rb_leipzig", "leverkusen"]}, {"n": "Alejandro Grimaldo", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["barcelona", "benfica", "leverkusen"]}, {"n": "Jeremie Frimpong", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["man_city", "celtic", "leverkusen"]}, {"n": "Edmond Tapsoba", "p": "Stoper", "c": "Burkina Faso 🇧🇫", "t": ["leixoes", "vitoria_guimaraes", "leverkusen"]}, {"n": "Jonathan Tah", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["hamburg", "fortuna_dusseldorf", "leverkusen", "bayern"]}, {"n": "Xavi Simons", "p": "Ofansif Orta Saha", "c": "Hollanda 🇳🇱", "t": ["barcelona", "psg", "psv", "rb_leipzig"]}, {"n": "Christopher Nkunku", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["psg", "rb_leipzig", "chelsea"]}, {"n": "Loïs Openda", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["club_brugge", "vitesse", "lens", "rb_leipzig"]}, {"n": "Benjamin Šeško", "p": "Santrafor", "c": "Slovenya 🇸🇮", "t": ["rb_salzburg", "rb_leipzig"]}, {"n": "Castello Lukeba", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lyon", "rb_leipzig"]}, {"n": "Dušan Vlahović", "p": "Santrafor", "c": "Sırbistan 🇷🇸", "t": ["partizan", "fiorentina", "juventus"]}, {"n": "Teun Koopmeiners", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["az_alkmaar", "atalanta", "juventus"]}, {"n": "Nicolás González", "p": "Kanat", "c": "Arjantin 🇦🇷", "t": ["argentinos_juniors", "stuttgart", "fiorentina", "juventus"]}, {"n": "Manuel Locatelli", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["atalanta", "ac_milan", "sassuolo", "juventus"]}, {"n": "Weston McKennie", "p": "Orta Saha", "c": "ABD 🇺🇸", "t": ["schalke", "juventus", "leeds"]}, {"n": "Arkadiusz Milik", "p": "Santrafor", "c": "Polonya 🇵🇱", "t": ["leverkusen", "augsburg", "ajax", "napoli", "marseille", "juventus"]}, {"n": "Gleison Bremer", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["atletico_mineiro", "torino", "juventus"]}, {"n": "Timothy Weah", "p": "Kanat", "c": "ABD 🇺🇸", "t": ["psg", "celtic", "lille", "juventus"]}, {"n": "Pierre Kalulu", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lyon", "ac_milan", "juventus"]}, {"n": "Rafael Leão", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "lille", "ac_milan"]}, {"n": "Christian Pulisic", "p": "Kanat", "c": "ABD 🇺🇸", "t": ["dortmund", "chelsea", "ac_milan"]}, {"n": "Theo Hernández", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["atletico", "alaves", "real_madrid", "real_sociedad", "ac_milan"]}, {"n": "Fikayo Tomori", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["chelsea", "brighton", "hull_city", "derby_county", "ac_milan"]}, {"n": "Mike Maignan", "p": "Kaleci", "c": "Fransa 🇫🇷", "t": ["psg", "lille", "ac_milan"]}, {"n": "Ruben Loftus-Cheek", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["chelsea", "crystal_palace", "fulham", "ac_milan"]}, {"n": "Tammy Abraham", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["chelsea", "bristol_city", "swansea", "aston_villa", "roma", "ac_milan"]}, {"n": "Ismaël Bennacer", "p": "Orta Saha", "c": "Cezayir 🇩🇿", "t": ["arsenal", "empoli", "ac_milan", "arles_avignon", "tours"]}, {"n": "Youssouf Fofana", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["strasbourg", "monaco", "ac_milan"]}, {"n": "Emerson Royal", "p": "Sağ Bek", "c": "Brezilya 🇧🇷", "t": ["atletico_mineiro", "betis", "barcelona", "tottenham", "ac_milan"]}, {"n": "Lautaro Martínez", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["racing_club", "inter"]}, {"n": "Marcus Thuram", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["sochaux", "guingamp", "monchengladbach", "inter"]}, {"n": "Hakan Çalhanoğlu", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["karlsruher", "hamburg", "leverkusen", "ac_milan", "inter"]}, {"n": "Nicolò Barella", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["cagliari", "como", "inter"]}, {"n": "Alessandro Bastoni", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["atalanta", "parma", "inter"]}, {"n": "Benjamin Pavard", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["lille", "stuttgart", "bayern", "inter"]}, {"n": "Henrikh Mkhitaryan", "p": "Ofansif Orta Saha", "c": "Ermenistan 🇦🇲", "t": ["shakhtar", "dortmund", "man_utd", "arsenal", "roma", "inter", "pyunik", "metalurh_donetsk"]}, {"n": "Yann Sommer", "p": "Kaleci", "c": "İsviçre 🇨🇭", "t": ["basel", "grasshoppers", "vaduz", "monchengladbach", "bayern", "inter"]}, {"n": "Denzel Dumfries", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["sparta_rotterdam", "heerenveen", "psv", "inter"]}, {"n": "Piotr Zieliński", "p": "Orta Saha", "c": "Polonya 🇵🇱", "t": ["udinese", "empoli", "napoli", "inter"]}, {"n": "Mehdi Taremi", "p": "Santrafor", "c": "İran 🇮🇷", "t": ["persepolis", "al_gharafa", "rio_ave", "porto", "inter"]}, {"n": "Matteo Darmian", "p": "Sağ Bek", "c": "İtalya 🇮🇹", "t": ["ac_milan", "padova", "palermo", "torino", "man_utd", "parma", "inter"]}, {"n": "Romelu Lukaku", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["anderlecht", "chelsea", "west_brom", "everton", "man_utd", "inter", "roma", "napoli"]}, {"n": "Khvicha Kvaratskhelia", "p": "Kanat", "c": "Gürcistan 🇬🇪", "t": ["dinamo_tbilisi", "rubin_kazan", "napoli"]}, {"n": "Victor Osimhen", "p": "Santrafor", "c": "Nijerya 🇳🇬", "t": ["wolfsburg", "charleroi", "lille", "napoli", "galatasaray"]}, {"n": "Scott McTominay", "p": "Orta Saha", "c": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿", "t": ["man_utd", "napoli"]}, {"n": "Billy Gilmour", "p": "Orta Saha", "c": "İskoçya 🏴󠁧󠁢󠁳󠁣󠁴󠁿", "t": ["rangers", "chelsea", "norwich", "brighton", "napoli"]}, {"n": "Leonardo Spinazzola", "p": "Sol Bek", "c": "İtalya 🇮🇹", "t": ["juventus", "empoli", "lanciano", "siena", "atalanta", "perugia", "roma", "napoli"]}, {"n": "Giacomo Raspadori", "p": "Forvet", "c": "İtalya 🇮🇹", "t": ["sassuolo", "napoli"]}, {"n": "Matteo Politano", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["roma", "perugia", "pescara", "sassuolo", "inter", "napoli"]}, {"n": "Paulo Dybala", "p": "Forvet", "c": "Arjantin 🇦🇷", "t": ["instituto", "palermo", "juventus", "roma"]}, {"n": "Artem Dovbyk", "p": "Santrafor", "c": "Ukrayna 🇺🇦", "t": ["dnipro", "midtjylland", "girona", "roma"]}, {"n": "Lorenzo Pellegrini", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["roma", "sassuolo"]}, {"n": "Gianluca Mancini", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["fiorentina", "perugia", "atalanta", "roma"]}, {"n": "Bryan Cristante", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["ac_milan", "benfica", "palermo", "pescara", "atalanta", "roma"]}, {"n": "Stephan El Shaarawy", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["genoa", "padova", "ac_milan", "monaco", "shanghai_shenhua", "roma"]}, {"n": "Alexis Sánchez", "p": "Kanat", "c": "Şili 🇨🇱", "t": ["cobreloa", "river_plate", "udinese", "barcelona", "arsenal", "man_utd", "inter", "marseille"]}, {"n": "Pierre-Emerick Aubameyang", "p": "Santrafor", "c": "Gabon 🇬🇦", "t": ["ac_milan", "dijon", "lille", "monaco", "saint_etienne", "dortmund", "arsenal", "barcelona", "chelsea", "marseille", "al_qadsiah"]}, {"n": "Mason Greenwood", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["man_utd", "getafe", "marseille"]}, {"n": "Adrien Rabiot", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["psg", "toulouse", "juventus", "marseille"]}, {"n": "Gerónimo Rulli", "p": "Kaleci", "c": "Arjantin 🇦🇷", "t": ["estudiantes", "real_sociedad", "montpellier", "villarreal", "ajax", "marseille"]}, {"n": "Geoffrey Kondogbia", "p": "Ön Libero", "c": "Orta Afrika 🇨🇫", "t": ["lens", "sevilla", "monaco", "inter", "valencia", "atletico", "marseille"]}, {"n": "Amine Harit", "p": "Ofansif Orta Saha", "c": "Fas 🇲🇦", "t": ["nantes", "schalke", "marseille"]}, {"n": "Alexandre Lacazette", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["lyon", "arsenal"]}, {"n": "Corentin Tolisso", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["lyon", "bayern"]}, {"n": "Wilfried Zaha", "p": "Kanat", "c": "Fildişi Sahili 🇨🇮", "t": ["crystal_palace", "man_utd", "cardiff", "galatasaray", "lyon"]}, {"n": "Georges Mikautadze", "p": "Santrafor", "c": "Gürcistan 🇬🇪", "t": ["metz", "seraing", "ajax", "lyon"]}, {"n": "Said Benrahma", "p": "Kanat", "c": "Cezayir 🇩🇿", "t": ["nice", "angers", "chateauroux", "brentford", "west_ham", "lyon"]}, {"n": "Nemanja Matić", "p": "Ön Libero", "c": "Sırbistan 🇷🇸", "t": ["kosice", "chelsea", "vitesse", "benfica", "man_utd", "roma", "rennes", "lyon"]}, {"n": "Nicolas Tagliafico", "p": "Sol Bek", "c": "Arjantin 🇦🇷", "t": ["banfield", "murcia", "independiente", "ajax", "lyon"]}, {"n": "Wissam Ben Yedder", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["toulouse", "sevilla", "monaco"]}, {"n": "Aleksandr Golovin", "p": "Ofansif Orta Saha", "c": "Rusya 🇷🇺", "t": ["cska_moscow", "monaco"]}, {"n": "Takumi Minamino", "p": "Kanat", "c": "Japonya 🇯🇵", "t": ["cerezo_osaka", "rb_salzburg", "liverpool", "southampton", "monaco"]}, {"n": "Folarin Balogun", "p": "Santrafor", "c": "ABD 🇺🇸", "t": ["arsenal", "middlesbrough", "reims", "monaco"]}, {"n": "Denis Zakaria", "p": "Orta Saha", "c": "İsviçre 🇨🇭", "t": ["servette", "young_boys", "monchengladbach", "juventus", "chelsea", "monaco"]}, {"n": "Thilo Kehrer", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["schalke", "psg", "west_ham", "monaco"]}, {"n": "Jordan Teze", "p": "Sağ Bek", "c": "Hollanda 🇳🇱", "t": ["psv", "monaco"]}, {"n": "Enes Ünal", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["bursaspor", "man_city", "genk", "nac_breda", "twente", "villarreal", "levante", "valladolid", "getafe", "bournemouth"]}, {"n": "Nihat Kahveci", "p": "Forvet", "c": "Türkiye 🇹🇷", "t": ["besiktas", "real_sociedad", "villarreal"]}, {"n": "Yusuf Yazıcı", "p": "Ofansif Orta Saha", "c": "Türkiye 🇹🇷", "t": ["trabzonspor", "lille", "cska_moscow", "olympiacos"]}, {"n": "Mesut Özil", "p": "Ofansif Orta Saha", "c": "Almanya 🇩🇪", "t": ["schalke", "werder_bremen", "real_madrid", "arsenal", "fenerbahce", "basaksehir"]}, {"n": "Arda Turan", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "manisaspor", "atletico", "barcelona", "basaksehir"]}, {"n": "Burak Yılmaz", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["antalyaspor", "besiktas", "manisaspor", "fenerbahce", "eskisehirspor", "trabzonspor", "galatasaray", "beijing_guoan", "lille", "fortuna_sittard"]}, {"n": "Vincent Aboubakar", "p": "Santrafor", "c": "Kamerun 🇨🇲", "t": ["valenciennes", "lorient", "porto", "besiktas", "al_nassr"]}, {"n": "Cenk Tosun", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["frankfurt", "gaziantep", "besiktas", "everton", "crystal_palace", "fenerbahce"]}, {"n": "Emre Belözoğlu", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "inter", "newcastle", "fenerbahce", "atletico", "basaksehir"]}, {"n": "Selçuk İnan", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["manisaspor", "trabzonspor", "galatasaray"]}, {"n": "Rüştü Reçber", "p": "Kaleci", "c": "Türkiye 🇹🇷", "t": ["antalyaspor", "fenerbahce", "barcelona", "besiktas"]}, {"n": "Hakan Şükür", "p": "Santrafor", "c": "Türkiye 🇹🇷", "t": ["sakaryaspor", "bursaspor", "galatasaray", "torino", "inter", "parma", "blackburn"]}, {"n": "Nuri Şahin", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["dortmund", "feyenoord", "real_madrid", "liverpool", "werder_bremen", "antalyaspor"]}, {"n": "Hamit Altıntop", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["wattenscheid", "schalke", "bayern", "real_madrid", "galatasaray", "darmstadt"]}, {"n": "Halil Altıntop", "p": "Forvet", "c": "Türkiye 🇹🇷", "t": ["wattenscheid", "kaiserslautern", "schalke", "frankfurt", "trabzonspor", "augsburg", "slavia_prague"]}, {"n": "Çağlar Söyüncü", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["altinordu", "freiburg", "leicester", "atletico", "fenerbahce"]}, {"n": "Merih Demiral", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["fenerbahce", "sporting", "alanyaspor", "sassuolo", "juventus", "atalanta", "al_ahli"]}, {"n": "Cengiz Ünder", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["altinordu", "basaksehir", "roma", "leicester", "marseille", "fenerbahce"]}, {"n": "Okay Yokuşlu", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["altay", "kayserispor", "trabzonspor", "celta", "west_brom", "getafe"]}, {"n": "Zeki Çelik", "p": "Sağ Bek", "c": "Türkiye 🇹🇷", "t": ["bursaspor", "istanbulspor", "lille", "roma"]}, {"n": "Ferdi Kadıoğlu", "p": "Bek", "c": "Türkiye 🇹🇷", "t": ["nec_nijmegen", "fenerbahce", "brighton"]}, {"n": "Kerem Aktürkoğlu", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["basaksehir", "24erzincanspor", "galatasaray", "benfica"]}, {"n": "Orkun Kökçü", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["groningen", "feyenoord", "benfica"]}, {"n": "Salih Özcan", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["koln", "holstein_kiel", "dortmund", "wolfsburg"]}, {"n": "Ozan Kabak", "p": "Stoper", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "stuttgart", "schalke", "liverpool", "norwich", "hoffenheim"]}, {"n": "Yusuf Demir", "p": "Ofansif Orta Saha", "c": "Avusturya 🇦🇹", "t": ["rapid_wien", "barcelona", "galatasaray", "basel"]}, {"n": "Caner Erkin", "p": "Sol Bek", "c": "Türkiye 🇹🇷", "t": ["manisaspor", "cska_moscow", "galatasaray", "fenerbahce", "inter", "besiktas", "fatih_karagumruk", "basaksehir", "eyupspor"]}, {"n": "Gökhan Gönül", "p": "Sağ Bek", "c": "Türkiye 🇹🇷", "t": ["genclerbirligi", "hacettepe", "fenerbahce", "besiktas", "rizespor"]}, {"n": "Mehmet Topal", "p": "Ön Libero", "c": "Türkiye 🇹🇷", "t": ["canakkale_dardanel", "galatasaray", "valencia", "fenerbahce", "basaksehir", "besiktas"]}, {"n": "Oğuzhan Özyakup", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["az_alkmaar", "arsenal", "besiktas", "feyenoord", "fortuna_sittard"]}, {"n": "Tolgay Arslan", "p": "Orta Saha", "c": "Türkiye 🇹🇷", "t": ["dortmund", "hamburg", "alemannia_aachen", "besiktas", "fenerbahce", "udinese", "melbourne_city", "sanfrecce_hiroshima"]}, {"n": "İrfan Can Kahveci", "p": "Ofansif Orta Saha", "c": "Türkiye 🇹🇷", "t": ["genclerbirligi", "hacettepe", "basaksehir", "fenerbahce"]}, {"n": "Yunus Akgün", "p": "Kanat", "c": "Türkiye 🇹🇷", "t": ["galatasaray", "adana_demirspor", "leicester"]}, {"n": "Mauro Icardi", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["vecindario", "barcelona", "sampdoria", "inter", "psg", "galatasaray"]}, {"n": "Dries Mertens", "p": "Forvet", "c": "Belçika 🇧🇪", "t": ["gent", "eendracht_aalst", "agovv", "utrecht", "psv", "napoli", "galatasaray"]}, {"n": "Lucas Torreira", "p": "Ön Libero", "c": "Uruguay 🇺🇾", "t": ["montevideo_wanderers", "pescara", "sampdoria", "arsenal", "atletico", "fiorentina", "galatasaray"]}, {"n": "Fernando Muslera", "p": "Kaleci", "c": "Uruguay 🇺🇾", "t": ["montevideo_wanderers", "nacional", "lazio", "galatasaray"]}, {"n": "Didier Drogba", "p": "Santrafor", "c": "Fildişi Sahili 🇨🇮", "t": ["le_mans", "guingamp", "marseille", "chelsea", "shanghai_shenhua", "galatasaray", "montreal_impact", "phoenix_rising"]}, {"n": "Wesley Sneijder", "p": "Ofansif Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "real_madrid", "inter", "galatasaray", "nice", "al_gharafa"]}, {"n": "Radamel Falcao", "p": "Santrafor", "c": "Kolombiya 🇨🇴", "t": ["lanceros_boyaca", "river_plate", "porto", "atletico", "monaco", "man_utd", "chelsea", "galatasaray", "rayo", "millonarios"]}, {"n": "Robin van Persie", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["sbv_excelsior", "feyenoord", "arsenal", "man_utd", "fenerbahce"]}, {"n": "Roberto Carlos", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["uniao_sao_joao", "palmeiras", "inter", "real_madrid", "fenerbahce", "corinthians", "anzhi_makhachkala", "delhi_dynamos"]}, {"n": "Alex de Souza", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["coritiba", "palmeiras", "flamengo", "cruzeiro", "parma", "fenerbahce"]}, {"n": "Nicolas Anelka", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["psg", "arsenal", "real_madrid", "liverpool", "man_city", "fenerbahce", "bolton", "chelsea", "shanghai_shenhua", "juventus", "west_brom", "mumbai_city"]}, {"n": "Dirk Kuyt", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["quick_boys", "utrecht", "feyenoord", "liverpool", "fenerbahce"]}, {"n": "Mario Balotelli", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["lumezzane", "inter", "man_city", "ac_milan", "liverpool", "nice", "marseille", "brescia", "monza", "adana_demirspor", "sion", "genoa"]}, {"n": "Loris Karius", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["stuttgart", "man_city", "mainz", "liverpool", "besiktas", "union_berlin", "newcastle"]}, {"n": "Mario Gómez", "p": "Santrafor", "c": "Almanya 🇩🇪", "t": ["stuttgart", "bayern", "fiorentina", "besiktas", "wolfsburg"]}, {"n": "Demba Ba", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["rouen", "mouscron", "hoffenheim", "west_ham", "newcastle", "chelsea", "besiktas", "shanghai_shenhua", "goztepe", "basaksehir", "lugano"]}, {"n": "Shinji Kagawa", "p": "Ofansif Orta Saha", "c": "Japonya 🇯🇵", "t": ["cerezo_osaka", "dortmund", "man_utd", "besiktas", "real_zaragoza", "paok", "sint_truiden"]}, {"n": "Álvaro Negredo", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["rayo", "real_madrid", "almeria", "sevilla", "man_city", "valencia", "middlesbrough", "besiktas", "al_nasr_dubai", "cadiz", "valladolid"]}, {"n": "Ryan Babel", "p": "Kanat", "c": "Hollanda 🇳🇱", "t": ["ajax", "liverpool", "hoffenheim", "kasimpasa", "al_ain", "deportivo", "besiktas", "fulham", "galatasaray", "eyupspor"]}, {"n": "Alex Oxlade-Chamberlain", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["southampton", "arsenal", "liverpool", "besiktas"]}, {"n": "Wout Weghorst", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["emmen", "heracles", "az_alkmaar", "wolfsburg", "burnley", "besiktas", "man_utd", "hoffenheim", "ajax"]}, {"n": "Anderson Talisca", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["bahia", "benfica", "besiktas", "guangzhou_evergrande", "al_nassr"]}, {"n": "Alex Telles", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["juventude", "gremio", "galatasaray", "inter", "porto", "man_utd", "sevilla", "al_nassr", "botafogo"]}, {"n": "Pepe", "p": "Stoper", "c": "Portekiz 🇵🇹", "t": ["maritimo", "porto", "real_madrid", "besiktas"]}, {"n": "Ricardo Quaresma", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "barcelona", "porto", "inter", "chelsea", "besiktas", "al_ahli", "kasimpasa", "vitoria_guimaraes"]}, {"n": "Dele Alli", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["mk_dons", "tottenham", "everton", "besiktas"]}, {"n": "Edin Džeko", "p": "Santrafor", "c": "Bosna Hersek 🇧🇦", "t": ["zeljeznicar", "teplice", "wolfsburg", "man_city", "roma", "inter", "fenerbahce"]}, {"n": "Dušan Tadić", "p": "Ofansif Orta Saha", "c": "Sırbistan 🇷🇸", "t": ["vojvodina", "groningen", "twente", "southampton", "ajax", "fenerbahce"]}, {"n": "Fred", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["internacional", "shakhtar", "man_utd", "fenerbahce"]}, {"n": "Allan Saint-Maximin", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["saint_etienne", "monaco", "hannover", "bastia", "nice", "newcastle", "al_ahli", "fenerbahce"]}, {"n": "Youssef En-Nesyri", "p": "Santrafor", "c": "Fas 🇲🇦", "t": ["malaga", "leganes", "sevilla", "fenerbahce"]}, {"n": "Filip Kostić", "p": "Kanat", "c": "Sırbistan 🇷🇸", "t": ["radnicki_kragujevac", "groningen", "stuttgart", "hamburg", "frankfurt", "juventus", "fenerbahce"]}, {"n": "Sofyan Amrabat", "p": "Ön Libero", "c": "Fas 🇲🇦", "t": ["utrecht", "feyenoord", "club_brugge", "hellas_verona", "fiorentina", "man_utd", "fenerbahce"]}, {"n": "Dominik Livaković", "p": "Kaleci", "c": "Hırvatistan 🇭🇷", "t": ["zagreb", "dinamo_zagreb", "fenerbahce"]}, {"n": "Michy Batshuayi", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["standard_liege", "marseille", "chelsea", "dortmund", "valencia", "crystal_palace", "besiktas", "fenerbahce", "galatasaray"]}, {"n": "Gheorghe Hagi", "p": "Ofansif Orta Saha", "c": "Romanya 🇷🇴", "t": ["farul_constanta", "sportul_studentesc", "steaua_bucuresti", "real_madrid", "brescia", "barcelona", "galatasaray"]}, {"n": "Gheorghe Popescu", "p": "Stoper", "c": "Romanya 🇷🇴", "t": ["universitatea_craiova", "steaua_bucuresti", "psv", "tottenham", "barcelona", "galatasaray", "lecce", "dinamo_bucuresti", "hannover"]}, {"n": "Claudio Taffarel", "p": "Kaleci", "c": "Brezilya 🇧🇷", "t": ["internacional", "parma", "reggiana", "atletico_mineiro", "galatasaray"]}, {"n": "Mario Jardel", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["vasco_da_gama", "gremio", "porto", "galatasaray", "sporting", "bolton", "newells_old_boys", "alaves", "goias", "beira_mar", "anorthosis", "newcastle_jets"]}, {"n": "Felipe Melo", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["flamengo", "cruzeiro", "gremio", "mallorca", "racing_santander", "almeria", "fiorentina", "juventus", "galatasaray", "inter", "palmeiras", "fluminense"]}, {"n": "Bafétimbi Gomis", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["saint_etienne", "troyes", "lyon", "swansea", "marseille", "galatasaray", "al_hilal", "kawasaki_frontale"]}, {"n": "Franck Ribéry", "p": "Kanat", "c": "Fransa 🇫🇷", "t": ["boulogne", "ales", "brest", "metz", "galatasaray", "marseille", "bayern", "fiorentina", "salernitana"]}, {"n": "Pierre van Hooijdonk", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["rbc_roosendaal", "nac_breda", "celtic", "nottingham", "vitesse", "benfica", "feyenoord", "fenerbahce"]}, {"n": "Jay-Jay Okocha", "p": "Ofansif Orta Saha", "c": "Nijerya 🇳🇬", "t": ["borussia_neunkirchen", "frankfurt", "fenerbahce", "psg", "bolton", "qatar_sc", "hull_city"]}, {"n": "Stephen Appiah", "p": "Orta Saha", "c": "Gana 🇬🇭", "t": ["hearts_of_oak", "udinese", "parma", "brescia", "juventus", "fenerbahce", "bologna", "cesena", "vojvodina"]}, {"n": "Mateja Kežman", "p": "Santrafor", "c": "Sırbistan 🇷🇸", "t": ["zemun", "partizan", "psv", "chelsea", "atletico", "fenerbahce", "psg", "zenit", "south_china", "bate_borisov"]}, {"n": "Moussa Sow", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["rennes", "sedan", "lille", "fenerbahce", "al_ahli", "bursaspor", "gaziantep", "umraniyespor"]}, {"n": "Mamadou Niang", "p": "Santrafor", "c": "Senegal 🇸🇳", "t": ["le_havre", "troyes", "metz", "strasbourg", "marseille", "fenerbahce", "al_sadd", "besiktas", "arles_avignon"]}, {"n": "Daniel Güiza", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["xerez", "mallorca", "dos_hermanas", "recreativo", "barcelona_b", "ciudad_murcia", "getafe", "fenerbahce", "johor_darul_tazim", "cerro_porteno", "cadiz", "sanluqueno", "rota", "algaida"]}, {"n": "Guti", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["real_madrid", "besiktas"]}, {"n": "Gary Medel", "p": "Ön Libero", "c": "Şili 🇨🇱", "t": ["universidad_catolica", "boca_juniors", "sevilla", "cardiff", "inter", "besiktas", "bologna", "vasco_da_gama"]}, {"n": "Domagoj Vida", "p": "Stoper", "c": "Hırvatistan 🇭🇷", "t": ["osijek", "leverkusen", "dinamo_zagreb", "dynamo_kiev", "besiktas", "aek_athens"]}, {"n": "Dusko Tosic", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["ofk_beograd", "sochaux", "werder_bremen", "portsmouth", "qpr", "red_star", "betis", "genclerbirligi", "besiktas", "kasimpasa"]}, {"n": "Marcelo Guedes", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["santos", "wisla_krakow", "psv", "hannover", "besiktas", "lyon", "bordeaux", "western_sydney_wanderers"]}, {"n": "Adriano Correia", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["coritiba", "sevilla", "barcelona", "besiktas", "athletico_paranaense", "eupen"]}, {"n": "Rafa Silva", "p": "Ofansif Orta Saha", "c": "Portekiz 🇵🇹", "t": ["feirense", "braga", "benfica", "besiktas"]}, {"n": "Gabriel Paulista", "p": "Stoper", "c": "Brezilya 🇧🇷", "t": ["vitoria", "villarreal", "arsenal", "valencia", "atletico", "besiktas"]}, {"n": "João Mário", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["sporting", "vitoria_setubal", "inter", "west_ham", "lokomotiv_moscow", "benfica", "besiktas"]}, {"n": "Arthur Masuaku", "p": "Sol Bek", "c": "Kongo DC 🇨🇩", "t": ["valenciennes", "olympiacos", "west_ham", "besiktas"]}, {"n": "Ante Rebić", "p": "Kanat", "c": "Hırvatistan 🇭🇷", "t": ["rnk_split", "fiorentina", "rb_leipzig", "hellas_verona", "frankfurt", "ac_milan", "besiktas", "lecce"]}, {"n": "Eric Bailly", "p": "Stoper", "c": "Fildişi Sahili 🇨🇮", "t": ["espanyol", "villarreal", "man_utd", "marseille", "besiktas"]}, {"n": "Al-Musrati", "p": "Ön Libero", "c": "Libya 🇱🇾", "t": ["vitoria_guimaraes", "rio_ave", "braga", "besiktas"]}, {"n": "Ernest Muçi", "p": "Ofansif Orta Saha", "c": "Arnavutluk 🇦🇱", "t": ["tirana", "legia_warsaw", "besiktas"]}, {"n": "Milot Rashica", "p": "Kanat", "c": "Kosova 🇽🇰", "t": ["vushtrria", "vitesse", "werder_bremen", "norwich", "galatasaray", "besiktas"]}, {"n": "Gedson Fernandes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "tottenham", "galatasaray", "rizespor", "besiktas"]}, {"n": "Ronaldinho", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["gremio", "psg", "barcelona", "ac_milan", "flamengo", "atletico_mineiro", "queretaro", "fluminense"]}, {"n": "Kaká", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "ac_milan", "real_madrid", "orlando_city"]}, {"n": "David Beckham", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["man_utd", "preston_north_end", "real_madrid", "la_galaxy", "ac_milan", "psg"]}, {"n": "Thierry Henry", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["monaco", "juventus", "arsenal", "barcelona", "new_york_red_bulls"]}, {"n": "Andrea Pirlo", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["brescia", "inter", "reggina", "ac_milan", "juventus", "new_york_city"]}, {"n": "Ronaldo Nazário", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["cruzeiro", "psv", "barcelona", "inter", "real_madrid", "ac_milan", "corinthians"]}, {"n": "Zinedine Zidane", "p": "Ofansif Orta Saha", "c": "Fransa 🇫🇷", "t": ["cannes", "bordeaux", "juventus", "real_madrid"]}, {"n": "Roberto Baggio", "p": "Forvet", "c": "İtalya 🇮🇹", "t": ["vicenza", "fiorentina", "juventus", "ac_milan", "bologna", "inter", "brescia"]}, {"n": "Sergio Agüero", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["independiente", "atletico", "man_city", "barcelona"]}, {"n": "Carlos Tevez", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["boca_juniors", "corinthians", "west_ham", "man_utd", "man_city", "juventus", "shanghai_shenhua"]}, {"n": "Samuel Eto'o", "p": "Santrafor", "c": "Kamerun 🇨🇲", "t": ["real_madrid", "leganes", "espanyol", "mallorca", "barcelona", "inter", "anzhi_makhachkala", "chelsea", "everton", "sampdoria", "antalyaspor", "konyaspor", "qatar_sc"]}, {"n": "Clarence Seedorf", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "sampdoria", "real_madrid", "inter", "ac_milan", "botafogo"]}, {"n": "Edgar Davids", "p": "Orta Saha", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan", "juventus", "barcelona", "inter", "tottenham", "crystal_palace", "barnet"]}, {"n": "Patrick Vieira", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["cannes", "ac_milan", "arsenal", "juventus", "inter", "man_city"]}, {"n": "Dennis Bergkamp", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["ajax", "inter", "arsenal"]}, {"n": "Hernán Crespo", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["river_plate", "parma", "lazio", "inter", "chelsea", "ac_milan", "genoa"]}, {"n": "Michael Ballack", "p": "Orta Saha", "c": "Almanya 🇩🇪", "t": ["chemnitzer", "kaiserslautern", "leverkusen", "bayern", "chelsea"]}, {"n": "Fernando Torres", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["atletico", "liverpool", "chelsea", "ac_milan", "sagan_tosu"]}, {"n": "Steven Gerrard", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["liverpool", "la_galaxy"]}, {"n": "Frank Lampard", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["west_ham", "swansea", "chelsea", "man_city", "new_york_city"]}, {"n": "Wayne Rooney", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["everton", "man_utd", "dc_united", "derby_county"]}, {"n": "Michael Owen", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["liverpool", "real_madrid", "newcastle", "man_utd", "stoke"]}, {"n": "Rivaldo", "p": "Forvet", "c": "Brezilya 🇧🇷", "t": ["santa_cruz", "mogi_mirim", "corinthians", "palmeiras", "deportivo", "barcelona", "ac_milan", "cruzeiro", "olympiacos", "aek_athens", "bunyodkor", "sao_paulo", "kabuscorp", "sao_caetano"]}, {"n": "Robinho", "p": "Kanat", "c": "Brezilya 🇧🇷", "t": ["santos", "real_madrid", "man_city", "ac_milan", "guangzhou_evergrande", "atletico_mineiro", "sivasspor", "basaksehir"]}, {"n": "Patrick Kluivert", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan", "barcelona", "newcastle", "valencia", "psv", "lille"]}, {"n": "Marc Overmars", "p": "Kanat", "c": "Hollanda 🇳🇱", "t": ["go_ahead_eagles", "willem_ii", "ajax", "arsenal", "barcelona"]}, {"n": "Gabriel Batistuta", "p": "Santrafor", "c": "Arjantin 🇦🇷", "t": ["newells_old_boys", "river_plate", "boca_juniors", "fiorentina", "roma", "inter", "al_arabi"]}, {"n": "Andriy Shevchenko", "p": "Santrafor", "c": "Ukrayna 🇺🇦", "t": ["dynamo_kiev", "ac_milan", "chelsea"]}, {"n": "Fabio Cannavaro", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["napoli", "parma", "inter", "juventus", "real_madrid", "al_ahli_uae"]}, {"n": "Alessandro Nesta", "p": "Stoper", "c": "İtalya 🇮🇹", "t": ["lazio", "ac_milan", "montreal_impact", "chennaiyin"]}, {"n": "Filippo Inzaghi", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["piacenza", "leffe", "hellas_verona", "parma", "atalanta", "juventus", "ac_milan"]}, {"n": "Paul Pogba", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["le_havre", "man_utd", "juventus"]}, {"n": "Eden Hazard", "p": "Kanat", "c": "Belçika 🇧🇪", "t": ["lille", "chelsea", "real_madrid"]}, {"n": "Philippe Coutinho", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["vasco_da_gama", "inter", "espanyol", "liverpool", "barcelona", "bayern", "aston_villa", "al_duhail"]}, {"n": "Kalidou Koulibaly", "p": "Stoper", "c": "Senegal 🇸🇳", "t": ["metz", "genk", "napoli", "chelsea", "al_hilal"]}, {"n": "Marcelo Brozović", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["hrvatski_dragovoljac", "lokomotiva", "dinamo_zagreb", "inter", "al_nassr"]}, {"n": "Luís Figo", "p": "Kanat", "c": "Portekiz 🇵🇹", "t": ["sporting", "barcelona", "real_madrid", "inter"]}, {"n": "Xabi Alonso", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["real_sociedad", "eibar", "liverpool", "real_madrid", "bayern"]}, {"n": "Ruud van Nistelrooy", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["den_bosch", "heerenveen", "psv", "man_utd", "real_madrid", "hamburg", "malaga"]}, {"n": "Diego Forlán", "p": "Santrafor", "c": "Uruguay 🇺🇾", "t": ["independiente", "man_utd", "villarreal", "atletico", "inter", "internacional", "cerezo_osaka", "penarol", "mumbai_city", "kitchee"]}, {"n": "David Villa", "p": "Santrafor", "c": "İspanya 🇪🇸", "t": ["sporting_gijon", "real_zaragoza", "valencia", "barcelona", "atletico", "new_york_city", "melbourne_city", "vissel_kobe"]}, {"n": "Cesc Fàbregas", "p": "Orta Saha", "c": "İspanya 🇪🇸", "t": ["arsenal", "barcelona", "chelsea", "monaco", "como"]}, {"n": "Claude Makélélé", "p": "Ön Libero", "c": "Fransa 🇫🇷", "t": ["brest", "nantes", "marseille", "celta", "real_madrid", "chelsea", "psg"]}, {"n": "Javier Mascherano", "p": "Ön Libero", "c": "Arjantin 🇦🇷", "t": ["river_plate", "corinthians", "west_ham", "liverpool", "barcelona", "hebei_china_fortune", "estudiantes"]}, {"n": "Pepe Reina", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["barcelona", "villarreal", "liverpool", "napoli", "bayern", "ac_milan", "aston_villa", "lazio", "como"]}, {"n": "Jens Lehmann", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["schalke", "ac_milan", "dortmund", "arsenal", "stuttgart"]}, {"n": "Petr Čech", "p": "Kaleci", "c": "Çekya 🇨🇿", "t": ["chmel_blsany", "sparta_prague", "rennes", "chelsea", "arsenal"]}, {"n": "Edwin van der Sar", "p": "Kaleci", "c": "Hollanda 🇳🇱", "t": ["ajax", "juventus", "fulham", "man_utd"]}, {"n": "Oliver Kahn", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["karlsruher", "bayern"]}, {"n": "Peter Schmeichel", "p": "Kaleci", "c": "Danimarka 🇩🇰", "t": ["gladsaxe_hero", "hvidovre", "brondby", "man_utd", "sporting", "aston_villa", "man_city"]}, {"n": "Kasper Schmeichel", "p": "Kaleci", "c": "Danimarka 🇩🇰", "t": ["man_city", "darlington", "bury", "falkirk", "cardiff", "coventry", "notts_county", "leeds", "leicester", "nice", "anderlecht", "celtic"]}, {"n": "Roy Keane", "p": "Orta Saha", "c": "İrlanda 🇮🇪", "t": ["cobh_ramblers", "nottingham", "man_utd", "celtic"]}, {"n": "John Terry", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["chelsea", "nottingham", "aston_villa"]}, {"n": "Rio Ferdinand", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["west_ham", "bournemouth", "leeds", "man_utd", "qpr"]}, {"n": "Nemanja Vidić", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["red_star", "spartak_subotica", "spartak_moscow", "man_utd", "inter"]}, {"n": "Patrice Evra", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["marsala", "monza", "nice", "monaco", "man_utd", "juventus", "marseille", "west_ham"]}, {"n": "Sol Campbell", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["tottenham", "arsenal", "portsmouth", "notts_county", "newcastle"]}, {"n": "Ashley Cole", "p": "Sol Bek", "c": "İngiltere 🇬🇧", "t": ["arsenal", "crystal_palace", "chelsea", "roma", "la_galaxy", "derby_county"]}, {"n": "Jaap Stam", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["zwolle", "cambuur", "willem_ii", "psv", "man_utd", "lazio", "ac_milan", "ajax"]}, {"n": "Ruud Gullit", "p": "Ofansif Orta Saha", "c": "Hollanda 🇳🇱", "t": ["haarlem", "feyenoord", "psv", "ac_milan", "sampdoria", "chelsea"]}, {"n": "Marco van Basten", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["ajax", "ac_milan"]}, {"n": "Frank Rijkaard", "p": "Ön Libero", "c": "Hollanda 🇳🇱", "t": ["ajax", "sporting", "real_zaragoza", "ac_milan"]}, {"n": "Ronald Koeman", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["groningen", "ajax", "psv", "barcelona", "feyenoord"]}, {"n": "Romário", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["vasco_da_gama", "psv", "barcelona", "flamengo", "valencia", "fluminense", "al_sadd", "miami_fc", "adelaide_united", "america_rj"]}, {"n": "Bebeto", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["vitoria", "flamengo", "vasco_da_gama", "deportivo", "sevilla", "cruzeiro", "botafogo", "toros_neza", "kashima_antlers", "vitoria_ba", "al_ittihad"]}, {"n": "Dunga", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["internacional", "corinthians", "santos", "vasco_da_gama", "pisa", "fiorentina", "pescara", "stuttgart", "jubilo_iwata"]}, {"n": "Cafu", "p": "Sağ Bek", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "real_zaragoza", "juventude", "palmeiras", "roma", "ac_milan"]}, {"n": "Roberto Mancini", "p": "Forvet", "c": "İtalya 🇮🇹", "t": ["bologna", "sampdoria", "lazio", "leicester"]}, {"n": "Gianfranco Zola", "p": "Forvet", "c": "İtalya 🇮🇹", "t": ["nuorese", "torres", "napoli", "parma", "chelsea", "cagliari"]}, {"n": "Gianluca Vialli", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["cremonese", "sampdoria", "juventus", "chelsea"]}, {"n": "Fabrizio Ravanelli", "p": "Santrafor", "c": "İtalya 🇮🇹", "t": ["perugia", "avellino", "casertana", "reggiana", "juventus", "middlesbrough", "marseille", "lazio", "derby_county", "dundee"]}, {"n": "Christian Panucci", "p": "Sağ Bek", "c": "İtalya 🇮🇹", "t": ["genoa", "ac_milan", "real_madrid", "inter", "chelsea", "monaco", "roma", "parma"]}, {"n": "Attilio Lombardo", "p": "Kanat", "c": "İtalya 🇮🇹", "t": ["pergocrema", "cremonese", "sampdoria", "juventus", "crystal_palace", "lazio"]}, {"n": "Dejan Savićević", "p": "Ofansif Orta Saha", "c": "Karadağ 🇲🇪", "t": ["buducnost_podgorica", "red_star", "ac_milan", "rapid_wien"]}, {"n": "Zvonimir Boban", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["dinamo_zagreb", "bari", "ac_milan", "celta"]}, {"n": "Robert Prosinečki", "p": "Orta Saha", "c": "Hırvatistan 🇭🇷", "t": ["dinamo_zagreb", "red_star", "real_madrid", "real_oviedo", "barcelona", "sevilla", "hrvatski_dragovoljac", "standard_liege", "portsmouth", "olimpija_ljubljana", "zagreb"]}, {"n": "Davor Šuker", "p": "Santrafor", "c": "Hırvatistan 🇭🇷", "t": ["osijek", "dinamo_zagreb", "sevilla", "real_madrid", "arsenal", "west_ham", "1860_munich"]}, {"n": "Predrag Mijatović", "p": "Santrafor", "c": "Karadağ 🇲🇪", "t": ["buducnost_podgorica", "partizan", "valencia", "real_madrid", "fiorentina", "levante"]}, {"n": "Darko Pančev", "p": "Santrafor", "c": "Kuzey Makedonya 🇲🇰", "t": ["vardar", "red_star", "inter", "leipzig", "fortuna_dusseldorf", "sion"]}, {"n": "Siniša Mihajlović", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["borovo", "vojvodina", "red_star", "roma", "sampdoria", "lazio", "inter"]}, {"n": "Vladimir Jugović", "p": "Orta Saha", "c": "Sırbistan 🇷🇸", "t": ["red_star", "rad", "sampdoria", "juventus", "lazio", "atletico", "inter", "monaco", "admira_wacker", "rot_weiss_ahlen"]}, {"n": "Dragan Stojković", "p": "Ofansif Orta Saha", "c": "Sırbistan 🇷🇸", "t": ["radnicki_nis", "red_star", "marseille", "hellas_verona", "nagoya_grampus"]}, {"n": "Hristo Stoichkov", "p": "Forvet", "c": "Bulgaristan 🇧🇬", "t": ["hebros_harmanli", "cska_sofia", "barcelona", "parma", "al_nassr", "kashiwa_reysol", "chicago_fire", "dc_united"]}, {"n": "Yordan Letchkov", "p": "Orta Saha", "c": "Bulgaristan 🇧🇬", "t": ["sliven", "cska_sofia", "hamburg", "marseille", "besiktas"]}, {"n": "Krassimir Balakov", "p": "Ofansif Orta Saha", "c": "Bulgaristan 🇧🇬", "t": ["etir_veliko_tarnovo", "sporting", "stuttgart"]}, {"n": "Dimitar Berbatov", "p": "Santrafor", "c": "Bulgaristan 🇧🇬", "t": ["pirin_blagoevgrad", "cska_sofia", "leverkusen", "tottenham", "man_utd", "fulham", "monaco", "paok", "kerala_blasters"]}, {"n": "Stiliyan Petrov", "p": "Orta Saha", "c": "Bulgaristan 🇧🇬", "t": ["montana", "cska_sofia", "celtic", "aston_villa"]}, {"n": "Martin Petrov", "p": "Kanat", "c": "Bulgaristan 🇧🇬", "t": ["botev_vratsa", "cska_sofia", "servette", "wolfsburg", "atletico", "man_city", "bolton", "espanyol"]}, {"n": "Adrian Mutu", "p": "Forvet", "c": "Romanya 🇷🇴", "t": ["arges_pitesti", "dinamo_bucuresti", "inter", "hellas_verona", "parma", "chelsea", "juventus", "fiorentina", "cesena", "ajaccio", "petrolul_ploiesti", "pune_city", "asa_targu_mures"]}, {"n": "Cristian Chivu", "p": "Stoper", "c": "Romanya 🇷🇴", "t": ["resita", "universitatea_craiova", "ajax", "roma", "inter"]}, {"n": "Dan Petrescu", "p": "Sağ Bek", "c": "Romanya 🇷🇴", "t": ["steaua_bucuresti", "olt_scornicesti", "foggia", "genoa", "sheffield_wednesday", "chelsea", "bradford_city", "southampton", "national_bucuresti"]}, {"n": "Ilie Dumitrescu", "p": "Kanat", "c": "Romanya 🇷🇴", "t": ["steaua_bucuresti", "olt_scornicesti", "tottenham", "sevilla", "west_ham", "america", "atlante"]}, {"n": "Gheorghe Craioveanu", "p": "Forvet", "c": "Romanya 🇷🇴", "t": ["drobeta_turnu_severin", "universitatea_craiova", "real_sociedad", "villarreal", "getafe"]}, {"n": "Cosmin Contra", "p": "Sağ Bek", "c": "Romanya 🇷🇴", "t": ["politehnica_timisoara", "dinamo_bucuresti", "alaves", "ac_milan", "atletico", "west_ham", "getafe"]}, {"n": "John Stones", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["barnsley", "everton", "man_city"]}, {"n": "Kalvin Phillips", "p": "Ön Libero", "c": "İngiltere 🇬🇧", "t": ["leeds", "man_city", "west_ham", "ipswich"]}, {"n": "Matheus Nunes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["estoril", "sporting", "wolves", "man_city"]}, {"n": "Josko Gvardiol", "p": "Stoper", "c": "Hırvatistan 🇭🇷", "t": ["dinamo_zagreb", "rb_leipzig", "man_city"]}, {"n": "Sergio Gómez", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["barcelona", "dortmund", "huesca", "anderlecht", "man_city", "real_sociedad"]}, {"n": "James Milner", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["leeds", "swindon", "newcastle", "aston_villa", "man_city", "liverpool", "brighton"]}, {"n": "Harvey Elliott", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["fulham", "blackburn", "liverpool"]}, {"n": "Wataru Endo", "p": "Ön Libero", "c": "Japonya 🇯🇵", "t": ["shonan_bellmare", "urawa_red_diamonds", "sint_truiden", "stuttgart", "liverpool"]}, {"n": "Arthur Melo", "p": "Orta Saha", "c": "Brezilya 🇧🇷", "t": ["gremio", "barcelona", "juventus", "liverpool", "fiorentina"]}, {"n": "Naby Keïta", "p": "Orta Saha", "c": "Gine 🇬🇳", "t": ["horoya", "istres", "rb_salzburg", "rb_leipzig", "liverpool", "werder_bremen"]}, {"n": "Xherdan Shaqiri", "p": "Kanat", "c": "İsviçre 🇨🇭", "t": ["basel", "bayern", "inter", "stoke", "liverpool", "lyon", "chicago_fire"]}, {"n": "Daniel Sturridge", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["man_city", "chelsea", "bolton", "liverpool", "west_brom", "trabzonspor", "perth_glory"]}, {"n": "Christian Benteke", "p": "Santrafor", "c": "Belçika 🇧🇪", "t": ["genk", "standard_liege", "kortrijk", "mechelen", "aston_villa", "liverpool", "crystal_palace", "dc_united"]}, {"n": "Andy Carroll", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["newcastle", "preston_north_end", "liverpool", "west_ham", "reading", "west_brom", "amiens", "bordeaux"]}, {"n": "Stewart Downing", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["middlesbrough", "sunderland", "aston_villa", "liverpool", "west_ham", "blackburn"]}, {"n": "Martin Škrtel", "p": "Stoper", "c": "Slovakya 🇸🇰", "t": ["trencin", "zenit", "liverpool", "fenerbahce", "atalanta", "basaksehir", "spartak_trnava"]}, {"n": "Lucas Leiva", "p": "Ön Libero", "c": "Brezilya 🇧🇷", "t": ["gremio", "liverpool", "lazio"]}, {"n": "Alberto Moreno", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["sevilla", "liverpool", "villarreal", "como"]}, {"n": "Simon Mignolet", "p": "Kaleci", "c": "Belçika 🇧🇪", "t": ["sint_truiden", "sunderland", "liverpool", "club_brugge"]}, {"n": "Dejan Lovren", "p": "Stoper", "c": "Hırvatistan 🇭🇷", "t": ["dinamo_zagreb", "inter_zapresic", "lyon", "southampton", "liverpool", "zenit", "paok"]}, {"n": "Mamadou Sakho", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["psg", "liverpool", "crystal_palace", "montpellier"]}, {"n": "Raul Meireles", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["boavista", "aves", "porto", "liverpool", "chelsea", "fenerbahce"]}, {"n": "Yossi Benayoun", "p": "Ofansif Orta Saha", "c": "İsrail 🇮🇱", "t": ["racing_santander", "west_ham", "liverpool", "chelsea", "arsenal", "qpr"]}, {"n": "Álvaro Arbeloa", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["real_madrid", "deportivo", "liverpool", "west_ham"]}, {"n": "Fábio Aurélio", "p": "Sol Bek", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "valencia", "liverpool", "gremio"]}, {"n": "Harry Kewell", "p": "Kanat", "c": "Avustralya 🇦🇺", "t": ["leeds", "liverpool", "galatasaray", "melbourne_victory", "al_gharafa"]}, {"n": "Milan Baroš", "p": "Santrafor", "c": "Çekya 🇨🇿", "t": ["banik_ostrava", "liverpool", "aston_villa", "lyon", "portsmouth", "galatasaray", "antalyaspor", "slovan_liberec", "mlada_boleslav"]}, {"n": "Jerzy Dudek", "p": "Kaleci", "c": "Polonya 🇵🇱", "t": ["sokol_tych", "feyenoord", "liverpool", "real_madrid"]}, {"n": "Vladimír Šmicer", "p": "Orta Saha", "c": "Çekya 🇨🇿", "t": ["slavia_prague", "lens", "liverpool", "bordeaux"]}, {"n": "Dietmar Hamann", "p": "Ön Libero", "c": "Almanya 🇩🇪", "t": ["bayern", "newcastle", "liverpool", "man_city", "mk_dons"]}, {"n": "Sami Hyypiä", "p": "Stoper", "c": "Finlandiya 🇫🇮", "t": ["mypa", "willem_ii", "liverpool", "leverkusen"]}, {"n": "Robbie Keane", "p": "Santrafor", "c": "İrlanda 🇮🇪", "t": ["wolves", "coventry", "inter", "leeds", "tottenham", "liverpool", "celtic", "west_ham", "la_galaxy", "aston_villa", "atk"]}, {"n": "Craig Bellamy", "p": "Forvet", "c": "Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿", "t": ["norwich", "coventry", "newcastle", "celtic", "blackburn", "liverpool", "west_ham", "man_city", "cardiff"]}, {"n": "Jermaine Pennant", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["notts_county", "arsenal", "watford", "leeds", "birmingham", "liverpool", "portsmouth", "real_zaragoza", "stoke", "wolves", "wigan", "bury"]}, {"n": "Peter Crouch", "p": "Santrafor", "c": "İngiltere 🇬🇧", "t": ["tottenham", "qpr", "portsmouth", "aston_villa", "norwich", "southampton", "liverpool", "stoke", "burnley"]}, {"n": "Glen Johnson", "p": "Sağ Bek", "c": "İngiltere 🇬🇧", "t": ["west_ham", "millwall", "chelsea", "portsmouth", "liverpool", "stoke"]}, {"n": "Joe Cole", "p": "Ofansif Orta Saha", "c": "İngiltere 🇬🇧", "t": ["west_ham", "chelsea", "liverpool", "lille", "aston_villa", "coventry"]}, {"n": "Alberto Aquilani", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["roma", "triestina", "liverpool", "juventus", "ac_milan", "fiorentina", "sporting", "pescara", "sassuolo", "las_palmas"]}, {"n": "Christian Poulsen", "p": "Ön Libero", "c": "Danimarka 🇩🇰", "t": ["copenhagen", "schalke", "sevilla", "juventus", "liverpool", "evian", "ajax"]}, {"n": "Paul Konchesky", "p": "Sol Bek", "c": "İngiltere 🇬🇧", "t": ["charlton", "tottenham", "west_ham", "fulham", "liverpool", "nottingham", "leicester", "qpr"]}, {"n": "Sebastián Coates", "p": "Stoper", "c": "Uruguay 🇺🇾", "t": ["nacional", "liverpool", "sunderland", "sporting"]}, {"n": "Luis Alberto", "p": "Ofansif Orta Saha", "c": "İspanya 🇪🇸", "t": ["sevilla", "barcelona", "liverpool", "malaga", "deportivo", "lazio", "al_duhail"]}, {"n": "Iago Aspas", "p": "Forvet", "c": "İspanya 🇪🇸", "t": ["celta", "liverpool", "sevilla"]}, {"n": "Lazar Marković", "p": "Kanat", "c": "Sırbistan 🇷🇸", "t": ["partizan", "benfica", "liverpool", "fenerbahce", "sporting", "hull_city", "anderlecht", "fulham", "gaziantep", "trabzonspor", "baniyas"]}, {"n": "Jordon Ibe", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["wycombe", "liverpool", "birmingham", "derby_county", "bournemouth", "adanaspor"]}, {"n": "Brad Jones", "p": "Kaleci", "c": "Avustralya 🇦🇺", "t": ["middlesbrough", "stockport", "rotherham", "blackpool", "liverpool", "bradford_city", "nec_nijmegen", "feyenoord", "al_nassr", "perth_glory"]}, {"n": "Danny Ward", "p": "Kaleci", "c": "Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿", "t": ["wrexham", "liverpool", "morecambe", "aberdeen", "huddersfield", "leicester"]}, {"n": "Ben Davies", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["preston_north_end", "liverpool", "sheffield_utd", "rangers"]}, {"n": "Ben Foster", "p": "Kaleci", "c": "İngiltere 🇬🇧", "t": ["stoke", "bristol_city", "man_utd", "watford", "birmingham", "west_brom", "wrexham"]}, {"n": "Tim Howard", "p": "Kaleci", "c": "ABD 🇺🇸", "t": ["metro_stars", "man_utd", "everton", "colorado_rapids", "memphis_901"]}, {"n": "Fabian Delph", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["leeds", "aston_villa", "man_city", "everton"]}, {"n": "Gareth Barry", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["aston_villa", "man_city", "everton", "west_brom"]}, {"n": "Joleon Lescott", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["wolves", "everton", "man_city", "west_brom", "aston_villa", "aek_athens", "sunderland"]}, {"n": "Micah Richards", "p": "Sağ Bek", "c": "İngiltere 🇬🇧", "t": ["man_city", "fiorentina", "aston_villa"]}, {"n": "Wayne Bridge", "p": "Sol Bek", "c": "İngiltere 🇬🇧", "t": ["southampton", "chelsea", "fulham", "man_city", "west_ham", "sunderland", "brighton", "reading"]}, {"n": "Shaun Wright-Phillips", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["man_city", "chelsea", "qpr", "new_york_red_bulls", "phoenix_rising"]}, {"n": "Scott Sinclair", "p": "Kanat", "c": "İngiltere 🇬🇧", "t": ["bristol_rovers", "chelsea", "plymouth", "qpr", "charlton", "crystal_palace", "birmingham", "swansea", "man_city", "west_brom", "aston_villa", "celtic", "preston_north_end"]}, {"n": "Jack Rodwell", "p": "Orta Saha", "c": "İngiltere 🇬🇧", "t": ["everton", "man_city", "sunderland", "blackburn", "sheffield_utd", "western_sydney_wanderers", "sydney_fc"]}, {"n": "Wilfried Bony", "p": "Santrafor", "c": "Fildişi Sahili 🇨🇮", "t": ["issia_wazi", "sparta_prague", "vitesse", "swansea", "man_city", "stoke", "al_arabi", "al_ittihad", "nec_nijmegen", "always_ready"]}, {"n": "Eliaquim Mangala", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["standard_liege", "porto", "man_city", "valencia", "everton", "saint_etienne", "estoril"]}, {"n": "Stevan Jovetić", "p": "Forvet", "c": "Karadağ 🇲🇪", "t": ["partizan", "fiorentina", "man_city", "inter", "sevilla", "monaco", "hertha", "olympiacos", "omonia"]}, {"n": "Jesús Navas", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["sevilla", "man_city"]}, {"n": "Nolito", "p": "Kanat", "c": "İspanya 🇪🇸", "t": ["sanluqueno", "barcelona", "benfica", "granada", "celta", "man_city", "sevilla", "ibiza"]}, {"n": "Claudio Bravo", "p": "Kaleci", "c": "Şili 🇨🇱", "t": ["colo_colo", "real_sociedad", "barcelona", "man_city", "betis"]}, {"n": "Willy Caballero", "p": "Kaleci", "c": "Arjantin 🇦🇷", "t": ["boca_juniors", "elche", "arsenal_sarandi", "malaga", "man_city", "chelsea", "southampton"]}, {"n": "Pablo Zabaleta", "p": "Sağ Bek", "c": "Arjantin 🇦🇷", "t": ["san_lorenzo", "espanyol", "man_city", "west_ham"]}, {"n": "Aleksandar Kolarov", "p": "Sol Bek", "c": "Sırbistan 🇷🇸", "t": ["cukaricki", "ofk_beograd", "lazio", "man_city", "roma", "inter"]}, {"n": "Matija Nastasić", "p": "Stoper", "c": "Sırbistan 🇷🇸", "t": ["teleoptik", "fiorentina", "man_city", "schalke", "mallorca", "leganes"]}, {"n": "Stefan Savić", "p": "Stoper", "c": "Karadağ 🇲🇪", "t": ["bsk_borca", "partizan", "man_city", "fiorentina", "atletico", "trabzonspor"]}, {"n": "Bacary Sagna", "p": "Sağ Bek", "c": "Fransa 🇫🇷", "t": ["auxerre", "arsenal", "man_city", "benevento", "montreal_impact"]}, {"n": "Samir Nasri", "p": "Ofansif Orta Saha", "c": "Fransa 🇫🇷", "t": ["marseille", "arsenal", "man_city", "sevilla", "antalyaspor", "west_ham", "anderlecht"]}, {"n": "Gaël Clichy", "p": "Sol Bek", "c": "Fransa 🇫🇷", "t": ["cannes", "arsenal", "man_city", "basaksehir", "servette"]}, {"n": "Emmanuel Frimpong", "p": "Ön Libero", "c": "Gana 🇬🇭", "t": ["arsenal", "wolves", "charlton", "fulham", "barnsley", "ufa", "arsenal_tula", "afc_eskilstuna", "ermiss_aradippou"]}, {"n": "Alex Iwobi", "p": "Kanat", "c": "Nijerya 🇳🇬", "t": ["arsenal", "everton", "fulham"]}, {"n": "Donyell Malen", "p": "Forvet", "c": "Hollanda 🇳🇱", "t": ["ajax", "arsenal", "psv", "dortmund"]}, {"n": "Jeff Reine-Adélaïde", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["lens", "arsenal", "angers", "lyon", "nice", "troyes", "molenbeek", "salernitana"]}, {"n": "Matteo Guendouzi", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["psg", "lorient", "arsenal", "hertha", "marseille", "lazio"]}, {"n": "Bernd Leno", "p": "Kaleci", "c": "Almanya 🇩🇪", "t": ["stuttgart", "leverkusen", "arsenal", "fulham"]}, {"n": "Sokratis Papastathopoulos", "p": "Stoper", "c": "Yunanistan 🇬🇷", "t": ["aek_athens", "niki_volos", "genoa", "ac_milan", "werder_bremen", "dortmund", "arsenal", "olympiacos", "betis"]}, {"n": "Stephan Lichtsteiner", "p": "Sağ Bek", "c": "İsviçre 🇨🇭", "t": ["grasshoppers", "lille", "lazio", "juventus", "arsenal", "augsburg"]}, {"n": "Shkodran Mustafi", "p": "Stoper", "c": "Almanya 🇩🇪", "t": ["hamburg", "everton", "sampdoria", "valencia", "arsenal", "schalke", "levante"]}, {"n": "Calum Chambers", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["southampton", "arsenal", "middlesbrough", "fulham", "aston_villa", "cardiff"]}, {"n": "Rob Holding", "p": "Stoper", "c": "İngiltere 🇬🇧", "t": ["bolton", "bury", "arsenal", "crystal_palace"]}, {"n": "David Ospina", "p": "Kaleci", "c": "Kolombiya 🇨🇴", "t": ["atletico_nacional", "nice", "arsenal", "napoli", "al_nassr"]}, {"n": "Mathieu Debuchy", "p": "Sağ Bek", "c": "Fransa 🇫🇷", "t": ["lille", "newcastle", "arsenal", "bordeaux", "saint_etienne", "valenciennes"]}, {"n": "Joel Campbell", "p": "Kanat", "c": "Kosta Rika 🇨🇷", "t": ["saprissa", "puntarenas", "arsenal", "lorient", "betis", "olympiacos", "villarreal", "sporting", "frosinone", "leon", "monterrey", "alajuelense", "atletico_goianiense"]}, {"n": "Yaya Sanogo", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["auxerre", "arsenal", "crystal_palace", "ajax", "charlton", "toulouse", "huddersfield", "urartu", "qingdao_red_lions"]}, {"n": "Emiliano Viviano", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["fiorentina", "brescia", "cesena", "bologna", "inter", "palermo", "arsenal", "sampdoria", "sporting", "spal", "fatih_karagumruk", "ascoli"]}, {"n": "Kim Källström", "p": "Orta Saha", "c": "İsveç 🇸🇪", "t": ["bk_hacken", "djurgarden", "rennes", "lyon", "spartak_moscow", "arsenal", "grasshoppers"]}, {"n": "Ignasi Miquel", "p": "Stoper", "c": "İspanya 🇪🇸", "t": ["barcelona", "cornella", "arsenal", "leicester", "norwich", "ponferradina", "lugo", "malaga", "getafe", "real_sociedad", "girona", "leganes", "granada"]}, {"n": "Park Chu-young", "p": "Santrafor", "c": "Güney Kore 🇰🇷", "t": ["fc_seoul", "monaco", "arsenal", "celta", "watford", "al_shabab", "ulsan_hyundai"]}, {"n": "Ryo Miyaichi", "p": "Kanat", "c": "Japonya 🇯🇵", "t": ["arsenal", "feyenoord", "bolton", "wigan", "twente", "st_pauli", "yokohama_f_marinos"]}, {"n": "Marouane Chamakh", "p": "Santrafor", "c": "Fas 🇲🇦", "t": ["bordeaux", "arsenal", "west_ham", "crystal_palace", "cardiff"]}, {"n": "Sébastien Squillaci", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["toulon", "monaco", "ajaccio", "lyon", "sevilla", "arsenal", "bastia"]}, {"n": "Mikaël Silvestre", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["rennes", "inter", "man_utd", "arsenal", "werder_bremen", "portland_timbers", "chennaiyin"]}, {"n": "Amaury Bischoff", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["strasbourg", "werder_bremen", "arsenal", "academica", "aves", "preussen_munster", "hansa_rostock", "bahlinger"]}, {"n": "Lassana Diarra", "p": "Ön Libero", "c": "Fransa 🇫🇷", "t": ["le_havre", "chelsea", "arsenal", "portsmouth", "real_madrid", "anzhi_makhachkala", "lokomotiv_moscow", "marseille", "al_jazira", "psg"]}, {"n": "Eduardo da Silva", "p": "Santrafor", "c": "Hırvatistan 🇭🇷", "t": ["dinamo_zagreb", "inter_zapresic", "arsenal", "shakhtar", "flamengo", "atletico_paranaense", "legia_warsaw"]}, {"n": "Julio Baptista", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["sao_paulo", "sevilla", "real_madrid", "arsenal", "roma", "malaga", "cruzeiro", "orlando_city", "cfr_cluj"]}, {"n": "Alexandre Song", "p": "Ön Libero", "c": "Kamerun 🇨🇲", "t": ["bastia", "arsenal", "charlton", "barcelona", "west_ham", "rubin_kazan", "sion", "arta_solar"]}, {"n": "Alexander Hleb", "p": "Ofansif Orta Saha", "c": "Belarus 🇧🇾", "t": ["bate_borisov", "stuttgart", "arsenal", "barcelona", "birmingham", "wolfsburg", "krylia_sovetov", "konyaspor", "genclerbirligi", "isloch"]}, {"n": "Mathieu Flamini", "p": "Orta Saha", "c": "Fransa 🇫🇷", "t": ["marseille", "arsenal", "ac_milan", "crystal_palace", "getafe"]}, {"n": "Philippe Senderos", "p": "Stoper", "c": "İsviçre 🇨🇭", "t": ["servette", "arsenal", "ac_milan", "everton", "fulham", "valencia", "aston_villa", "grasshoppers", "rangers", "houston_dynamo", "chiasso"]}, {"n": "Manuel Almunia", "p": "Kaleci", "c": "İspanya 🇪🇸", "t": ["osasuna", "cartagonova", "sabadell", "celta", "eibar", "recreativo", "albacete", "arsenal", "west_ham", "watford"]}, {"n": "José Antonio Reyes", "p": "Kanat", "c": "İspanya 🇪🇸", "t": ["sevilla", "arsenal", "real_madrid", "atletico", "benfica", "espanyol", "cordoba", "xinjiang_tianshan_leopard", "extremadura"]}, {"n": "Kolo Touré", "p": "Stoper", "c": "Fildişi Sahili 🇨🇮", "t": ["asec_mimosas", "arsenal", "man_city", "liverpool", "celtic"]}, {"n": "Sylvain Wiltord", "p": "Forvet", "c": "Fransa 🇫🇷", "t": ["rennes", "deportivo", "bordeaux", "arsenal", "lyon", "marseille", "metz", "nantes"]}, {"n": "Lauren", "p": "Sağ Bek", "c": "Kamerun 🇨🇲", "t": ["urtrillas", "sevilla", "levante", "mallorca", "arsenal", "portsmouth", "cordoba"]}, {"n": "Nwankwo Kanu", "p": "Santrafor", "c": "Nijerya 🇳🇬", "t": ["i荷wuanyanwu_nationale", "ajax", "inter", "arsenal", "west_brom", "portsmouth"]}, {"n": "Emmanuel Petit", "p": "Ön Libero", "c": "Fransa 🇫🇷", "t": ["monaco", "arsenal", "barcelona", "chelsea"]}, {"n": "Santi Cazorla", "p": "Ofansif Orta Saha", "c": "İspanya 🇪🇸", "t": ["villarreal", "recreativo", "malaga", "arsenal", "al_sadd", "real_oviedo"]}, {"n": "Lukas Podolski", "p": "Forvet", "c": "Almanya 🇩🇪", "t": ["koln", "bayern", "arsenal", "inter", "galatasaray", "vissel_kobe", "antalyaspor", "gornik_zabrze"]}, {"n": "Olivier Giroud", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["grenoble", "istres", "tours", "montpellier", "arsenal", "chelsea", "ac_milan", "lafc"]}, {"n": "Nacho Monreal", "p": "Sol Bek", "c": "İspanya 🇪🇸", "t": ["osasuna", "malaga", "arsenal", "real_sociedad"]}, {"n": "Tomas Rosicky", "p": "Ofansif Orta Saha", "c": "Çekya 🇨🇿", "t": ["sparta_prague", "dortmund", "arsenal"]}, {"n": "Andrey Arshavin", "p": "Kanat", "c": "Rusya 🇷🇺", "t": ["zenit", "arsenal", "kuban_krasnodar", "kairat"]}, {"n": "Emmanuel Adebayor", "p": "Santrafor", "c": "Togo 🇹🇬", "t": ["metz", "monaco", "arsenal", "man_city", "real_madrid", "tottenham", "crystal_palace", "basaksehir", "kayserispor", "olimpia", "semassi"]}, {"n": "William Gallas", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["caen", "marseille", "chelsea", "arsenal", "tottenham", "perth_glory"]}, {"n": "Gael Givet", "p": "Stoper", "c": "Fransa 🇫🇷", "t": ["monaco", "marseille", "blackburn", "arles_avignon", "evian"]}, {"n": "Djibril Cisse", "p": "Santrafor", "c": "Fransa 🇫🇷", "t": ["auxerre", "liverpool", "marseille", "sunderland", "panathinaikos", "lazio", "qpr", "al_gharafa", "kuban_krasnodar", "bastia", "yverdon", "vicenza"]}, {"n": "Demetrio Albertini", "p": "Orta Saha", "c": "İtalya 🇮🇹", "t": ["ac_milan", "padova", "atletico", "lazio", "atalanta", "barcelona"]}, {"n": "Edgaras Jankauskas", "p": "Santrafor", "c": "Litvanya 🇱🇹", "t": ["zalgiris", "cska_moscow", "torpedo_moscow", "club_brugge", "real_sociedad", "benfica", "porto", "nice", "hearts", "aek_larnaca", "belenenses", "new_england_revolution", "fakel_voronezh"]}, {"n": "Maniche", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["benfica", "alverca", "porto", "dynamo_moscow", "chelsea", "atletico", "inter", "koln", "sporting"]}, {"n": "Costinha", "p": "Ön Libero", "c": "Portekiz 🇵🇹", "t": ["oriental", "machico", "nacional", "monaco", "porto", "dynamo_moscow", "atletico", "atalanta"]}, {"n": "Derlei", "p": "Santrafor", "c": "Brezilya 🇧🇷", "t": ["america_rn", "guarani", "madureira", "uniao_leiria", "porto", "dynamo_moscow", "benfica", "sporting", "vitoria"]}, {"n": "Carlos Alberto", "p": "Ofansif Orta Saha", "c": "Brezilya 🇧🇷", "t": ["fluminense", "porto", "corinthians", "werder_bremen", "sao_paulo", "botafogo", "vasco_da_gama", "gremio", "bahia", "goias", "figueirense", "atletico_paranaense", "boavista_rj"]}, {"n": "Helder Postiga", "p": "Santrafor", "c": "Portekiz 🇵🇹", "t": ["porto", "tottenham", "saint_etienne", "panathinaikos", "sporting", "real_zaragoza", "valencia", "lazio", "deportivo", "atletico_kolkata", "rio_ave"]}, {"n": "Hugo Almeida", "p": "Santrafor", "c": "Portekiz 🇵🇹", "t": ["porto", "uniao_leiria", "boavista", "werder_bremen", "besiktas", "cesena", "kuban_krasnodar", "anzhi_makhachkala", "hannover", "aek_athens", "hajduk_split", "academica"]}, {"n": "Bosingwa", "p": "Sağ Bek", "c": "Portekiz 🇵🇹", "t": ["boavista", "freamunde", "porto", "chelsea", "qpr", "trabzonspor"]}, {"n": "Paulo Ferreira", "p": "Sağ Bek", "c": "Portekiz 🇵🇹", "t": ["estoril", "vitoria_setubal", "porto", "chelsea"]}, {"n": "Tiago Mendes", "p": "Orta Saha", "c": "Portekiz 🇵🇹", "t": ["braga", "benfica", "chelsea", "lyon", "juventus", "atletico"]}, {"n": "Ricardo Carvalho", "p": "Stoper", "c": "Portekiz 🇵🇹", "t": ["porto", "leca", "vitoria_setubal", "alverca", "chelsea", "real_madrid", "monaco", "shanghai_sipg"]}, {"n": "Geremi", "p": "Sağ Bek", "c": "Kamerun 🇨🇲", "t": ["racing_bafoussam", "cerro_porteno", "genclerbirligi", "real_madrid", "middlesbrough", "chelsea", "newcastle", "ankaragucu", "larissa"]}, {"n": "Celestine Babayaro", "p": "Sol Bek", "c": "Nijerya 🇳🇬", "t": ["rangers_international", "anderlecht", "chelsea", "newcastle", "la_galaxy"]}, {"n": "Graeme Le Saux", "p": "Sol Bek", "c": "İngiltere 🇬🇧", "t": ["chelsea", "blackburn", "southampton"]}, {"n": "Tore Andre Flo", "p": "Santrafor", "c": "Norveç 🇳🇴", "t": ["sogndal", "tromso", "brann", "chelsea", "rangers", "sunderland", "siena", "valerenga", "leeds", "mk_dons"]}, {"n": "Gus Poyet", "p": "Orta Saha", "c": "Uruguay 🇺🇾", "t": ["grenoble", "river_plate_montevideo", "real_zaragoza", "chelsea", "tottenham", "swindon"]}, {"n": "Albert Ferrer", "p": "Sağ Bek", "c": "İspanya 🇪🇸", "t": ["barcelona", "tenerife", "chelsea"]}, {"n": "Winston Bogarde", "p": "Stoper", "c": "Hollanda 🇳🇱", "t": ["schiedam", "excelsior", "sparta_rotterdam", "ajax", "ac_milan", "barcelona", "chelsea"]}, {"n": "Boudewijn Zenden", "p": "Kanat", "c": "Hollanda 🇳🇱", "t": ["psv", "barcelona", "chelsea", "middlesbrough", "liverpool", "marseille", "sunderland"]}, {"n": "Jesper Gronkjaer", "p": "Kanat", "c": "Danimarka 🇩🇰", "t": ["thisted", "aalborg", "ajax", "chelsea", "birmingham", "atletico", "stuttgart", "copenhagen"]}, {"n": "Eidur Gudjohnsen", "p": "Santrafor", "c": "İzlanda 🇮🇸", "t": ["valur", "psv", "kr_reykjavik", "bolton", "chelsea", "barcelona", "monaco", "tottenham", "stoke", "fulham", "aek_athens", "cercle_brugge", "club_brugge", "shijiazhuang_ever_bright", "molde", "pune_city"]}, {"n": "Jimmy Floyd Hasselbaink", "p": "Santrafor", "c": "Hollanda 🇳🇱", "t": ["telstar", "az_alkmaar", "campomaiorense", "boavista", "leeds", "atletico", "chelsea", "middlesbrough", "charlton", "cardiff"]}, {"n": "Mark Bosnich", "p": "Kaleci", "c": "Avustralya 🇦🇺", "t": ["man_utd", "sydney_croatia", "aston_villa", "chelsea", "central_coast_mariners", "sydney_olympic"]}, {"n": "Ed de Goey", "p": "Kaleci", "c": "Hollanda 🇳🇱", "t": ["sparta_rotterdam", "feyenoord", "chelsea", "stoke"]}, {"n": "Carlo Cudicini", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["ac_milan", "como", "prato", "lazio", "castel_di_sangro", "chelsea", "tottenham", "la_galaxy"]}, {"n": "Asmir Begovic", "p": "Kaleci", "c": "Bosna Hersek 🇧🇦", "t": ["portsmouth", "la_louviere", "macclesfield", "bournemouth", "yeovil", "ipswich", "stoke", "chelsea", "qarabag", "ac_milan", "everton", "qpr"]}, {"n": "Mark Schwarzer", "p": "Kaleci", "c": "Avustralya 🇦🇺", "t": ["marconi_stallions", "dynamo_dresden", "kaiserslautern", "bradford_city", "middlesbrough", "fulham", "chelsea", "leicester"]}, {"n": "Robert Green", "p": "Kaleci", "c": "İngiltere 🇬🇧", "t": ["norwich", "west_ham", "qpr", "leeds", "huddersfield", "chelsea"]}, {"n": "Eduardo", "p": "Kaleci", "c": "Portekiz 🇵🇹", "t": ["braga", "beira_mar", "vitoria_setubal", "genoa", "benfica", "istanbul_bb", "dinamo_zagreb", "chelsea", "vitesse"]}, {"n": "Marco Amelia", "p": "Kaleci", "c": "İtalya 🇮🇹", "t": ["roma", "livorno", "lecce", "palermo", "genoa", "ac_milan", "chelsea", "vicenza"]}, {"n": "Henrique Hilario", "p": "Kaleci", "c": "Portekiz 🇵🇹", "t": ["porto", "naval", "academica", "varzim", "national", "chelsea"]}, {"n": "Rhys Taylor", "p": "Kaleci", "c": "Galler 🏴󠁧󠁢󠁷󠁬󠁳󠁿", "t": ["chelsea", "qpr", "crewe_alexandra", "rotherham", "preston_north_end", "macclesfield", "wrexham", "newport_county", "afc_fylde"]}, {"n": "Ross Turnbull", "p": "Kaleci", "c": "İngiltere 🇬🇧", "t": ["middlesbrough", "darlington", "barnsley", "bradford_city", "crewe_alexandra", "cardiff", "chelsea", "doncaster_rovers", "leeds"]}, {"n": "Jamal Blackman", "p": "Kaleci", "c": "İngiltere 🇬🇧", "t": ["chelsea", "middlesbrough", "ostersund", "wycombe", "sheffield_utd", "leeds", "bristol_rovers", "rotherham", "los_angeles_fc", "huddersfield", "exeter_city", "burton_albion"]}, {"n": "Mitchell Beeney", "p": "Kaleci", "c": "İngiltere 🇬🇧", "t": ["chelsea", "newport_county", "crawley_town", "sligo_rovers", "hartlepool", "chesham_united", "bowers_pitsea", "horsham"]}, {"n": "Matej Delac", "p": "Kaleci", "c": "Hırvatistan 🇭🇷", "t": ["inter_zapresic", "chelsea", "vitesse", "dynamo_ceske_budejovice", "vitoria_guimaraes", "vojvodina", "sarajevo", "arles_avignon", "mouscron", "horsens"]}];

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
    .replace(/[̀-ͯ]/g, '')
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
    return tObj ? tObj.name : tid.replace(/_/g, ' ').replace(/\w/g, function(c) { return c.toUpperCase(); });
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
