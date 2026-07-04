const PLANNER_PASSWORD_SALT = "blastoise-burn-operator-tool-v1";
const PLANNER_PASSWORD_HASH = "0cf47d2b85728ee989a360df85058bdd5826316fe7e65315ec695f01877f4fff";
const CLAN_ROSTER_PASSWORD_SALT = "blastoise-clan-roster-v1";
const CLAN_ROSTER_PASSWORD_HASH = "7d5cd7891d4c00335d48e7b1936d498d0c2a8b4c8aa80decf359a1d3c9734797";

const TEXT_SIREN = "\u{1F6A8}";
const TEXT_CLOCK = "\u{1F559}";
const TEXT_WARNING = "\u26A0\uFE0F";
const TEXT_HOURGLASS = "\u23F3";
const TEXT_CHECK = "\u2705";
const TEXT_COPY_TITLE = `${TEXT_SIREN} MISS\u00D5ES DISPON\u00CDVEIS${TEXT_SIREN}`;
const TEXT_COPY_FOOTER = `${TEXT_WARNING}${TEXT_SIREN} COLOCAR OS OPERADORES NAS MISS\u00D5ES E ASSISTIR OS V\u00CDDEOS DA LOJA! ${TEXT_WARNING}${TEXT_SIREN}`;
const TEXT_RELOCATION_TITLE = `${TEXT_SIREN}${TEXT_SIREN}${TEXT_SIREN}${TEXT_SIREN}${TEXT_WARNING} ATEN\u00C7\u00C3O ${TEXT_WARNING}${TEXT_SIREN}${TEXT_SIREN}${TEXT_SIREN}${TEXT_SIREN}`;
const TEXT_RELOCATION_MOVEMENT = "MOVIMENTA\u00C7\u00C3O ESTRAT\u00C9GICA IMEDIATA!";
const TEXT_RELOCATION_INSTRUCTIONS = "ALOQUEM OS OPERADORES CONFORME AS INSTRU\u00C7\u00D5ES ABAIXO:";
const TEXT_REMOVE_MISSIONS = "REMOVAM OS OPERADORES DAS MISS\u00D5ES";
const TEXT_REMOVE_MISSION = "REMOVAM OS OPERADORES DA MISS\u00C3O";
const TEXT_ALLOCATE_NOW = "ALOQUEM DE IMEDIATO NAS MISS\u00D5ES:";
const TEXT_NO_PENDING_MISSION = "> Nenhuma miss\u00E3o pendente dispon\u00EDvel para realocar.";

const PLANNER_OPERATORS = [
    "APOLLO",
    "BATYA",
    "BORIS",
    "CAPISCE",
    "CHARON",
    "CHEN LI",
    "CRAIG",
    "DAVID",
    "DIANA",
    "DMITRY",
    "DUTCH",
    "FENIX",
    "FERRY",
    "HAWK",
    "JASON",
    "JB",
    "JOE",
    "KIRIN",
    "KLAUS",
    "LENS",
    "MCMEAN",
    "MECHARI",
    "MIA",
    "MIRO",
    "MISHKA",
    "MOSES",
    "OWEN",
    "RAY",
    "RICK",
    "ROOKIE",
    "SHI",
    "SNEK",
    "SPENCER",
    "SUSSURRO",
    "SYNDROME",
    "THOR",
    "TRAVIS",
    "VALERA",
    "VARG",
    "VICTOR",
    "WOLF",
    "ZLOY"
];

const PLANNER_BASE_OPERATOR_COUNT = 19;
const EXTRA_OPERATOR_SCORES = {
    SNEK: { limpeza: 210, incomum: 110, hildr: 90 },
    DIANA: { limpeza: 205, incomum: 110, hildr: 90 },
    MIRO: { limpeza: 200, incomum: 110, hildr: 90 },
    MIA: { limpeza: 195, incomum: 110, hildr: 90 },
    MCMEAN: { limpeza: 190, incomum: 110, hildr: 90 },
    LENS: { limpeza: 185, incomum: 110, hildr: 90 },
    JB: { incomum: 175, hildr: 100 },
    DUTCH: { incomum: 170, hildr: 100 },
    RAY: { incomum: 165, hildr: 100 },
    APOLLO: { incomum: 160, hildr: 100 },
    SUSSURRO: { incomum: 155, hildr: 100 },
    "CHEN LI": { hildr: 180 },
    CHARON: { hildr: 175 },
    MOSES: { hildr: 170 },
    FENIX: { hildr: 165 },
    OWEN: { hildr: 160 },
    KIRIN: { hildr: 155 },
    DMITRY: { hildr: 150 },
    CRAIG: { hildr: 140 },
    WOLF: { hildr: 135 }
};

const MISSION_SEVEN_RESERVED_OPERATORS = new Set(["MECHARI"]);
const MISSION_SEVEN_RESERVED_SCORE = 200;

const UPDATED_MISSION_SCORES = {
    "baioneta": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 496,
        "CRAIG": 370,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 355,
        "JB": 234,
        "JOE": 192,
        "KIRIN": 174,
        "KLAUS": 200,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 341,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 355,
        "TRAVIS": 352,
        "VALERA": 355,
        "VARG": 189,
        "VICTOR": 203,
        "WOLF": 280,
        "ZLOY": 231
    },
    "brecha": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 192,
        "DAVID": 341,
        "DIANA": 253,
        "DMITRY": 358,
        "DUTCH": 496,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 199,
        "JB": 234,
        "JOE": 192,
        "KIRIN": 199,
        "KLAUS": 200,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 496,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 346,
        "THOR": 199,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 352,
        "WOLF": 280,
        "ZLOY": 410
    },
    "bss": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 341,
        "DIANA": 449,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 355,
        "JB": 234,
        "JOE": 192,
        "KIRIN": 199,
        "KLAUS": 200,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 496,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 341,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 199,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 203,
        "WOLF": 280,
        "ZLOY": 231
    },
    "cobertura": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 496,
        "FENIX": 347,
        "FERRY": 0,
        "HAWK": 310,
        "JASON": 199,
        "JB": 416,
        "JOE": 341,
        "KIRIN": 199,
        "KLAUS": 200,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 410,
        "RICK": 270,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 199,
        "TRAVIS": 352,
        "VALERA": 355,
        "VARG": 189,
        "VICTOR": 203,
        "WOLF": 496,
        "ZLOY": 231
    },
    "demonstracao": {
        "APOLLO": 218,
        "BATYA": 341,
        "BORIS": 229,
        "CAPISCE": 323,
        "CHARON": 410,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 199,
        "JB": 234,
        "JOE": 192,
        "KIRIN": 316,
        "KLAUS": 200,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 324,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 199,
        "TRAVIS": 203,
        "VALERA": 355,
        "VARG": 189,
        "VICTOR": 203,
        "WOLF": 280,
        "ZLOY": 410
    },
    "faca": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 397,
        "CAPISCE": 181,
        "CHARON": 410,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 341,
        "DIANA": 253,
        "DMITRY": 358,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 199,
        "JB": 234,
        "JOE": 202,
        "KIRIN": 199,
        "KLAUS": 347,
        "LENS": 55,
        "MCMEAN": 309,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 341,
        "RAY": 231,
        "RICK": 270,
        "ROOKIE": 178,
        "SHI": 320,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 199,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 337,
        "VICTOR": 203,
        "WOLF": 55,
        "ZLOY": 231
    },
    "habitantes": {
        "APOLLO": 218,
        "BATYA": 341,
        "BORIS": 229,
        "CAPISCE": 323,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 310,
        "JASON": 199,
        "JB": 234,
        "JOE": 341,
        "KIRIN": 353,
        "KLAUS": 200,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 496,
        "MISHKA": 324,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 346,
        "THOR": 199,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 203,
        "WOLF": 496,
        "ZLOY": 231
    },
    "hildr": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 355,
        "JB": 234,
        "JOE": 192,
        "KIRIN": 199,
        "KLAUS": 200,
        "LENS": 100,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 192,
        "SYNDROME": 194,
        "THOR": 355,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 337,
        "VICTOR": 203,
        "WOLF": 280,
        "ZLOY": 231
    },
    "limpeza": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 449,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 199,
        "JB": 416,
        "JOE": 341,
        "KIRIN": 199,
        "KLAUS": 200,
        "LENS": 100,
        "MCMEAN": 309,
        "MIA": 157,
        "MIRO": 496,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 443,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 355,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 203,
        "WOLF": 280,
        "ZLOY": 231
    },
    "logistica": {
        "APOLLO": 388,
        "BATYA": 197,
        "BORIS": 397,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 496,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 347,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 355,
        "JB": 234,
        "JOE": 202,
        "KIRIN": 199,
        "KLAUS": 200,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 496,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 320,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 199,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 352,
        "WOLF": 280,
        "ZLOY": 231
    },
    "martelo": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 397,
        "CAPISCE": 323,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 199,
        "JB": 234,
        "JOE": 192,
        "KIRIN": 199,
        "KLAUS": 347,
        "LENS": 55,
        "MCMEAN": 309,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 270,
        "ROOKIE": 178,
        "SHI": 320,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 346,
        "THOR": 199,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 352,
        "WOLF": 280,
        "ZLOY": 231
    },
    "basica": {
        "APOLLO": 338,
        "BATYA": 302,
        "BORIS": 351,
        "CAPISCE": 282,
        "CHARON": 358,
        "CHEN LI": 433,
        "CRAIG": 167,
        "DAVID": 298,
        "DIANA": 391,
        "DMITRY": 312,
        "DUTCH": 433,
        "FENIX": 302,
        "FERRY": 0,
        "HAWK": 274,
        "JASON": 310,
        "JB": 363,
        "JOE": 314,
        "KIRIN": 307,
        "KLAUS": 307,
        "LENS": 85,
        "MCMEAN": 270,
        "MIA": 137,
        "MIRO": 433,
        "MISHKA": 275,
        "MOSES": 433,
        "OWEN": 298,
        "RAY": 358,
        "RICK": 230,
        "ROOKIE": 275,
        "SHI": 283,
        "SNEK": 386,
        "SPENCER": 298,
        "SUSSURRO": 167,
        "SYNDROME": 302,
        "THOR": 310,
        "TRAVIS": 311,
        "VALERA": 310,
        "VARG": 294,
        "VICTOR": 311,
        "WOLF": 433,
        "ZLOY": 358
    },
    "reconhecimento": {
        "APOLLO": 388,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 181,
        "CHARON": 410,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 310,
        "JASON": 199,
        "JB": 234,
        "JOE": 202,
        "KIRIN": 199,
        "KLAUS": 347,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 157,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 410,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 443,
        "SPENCER": 341,
        "SUSSURRO": 192,
        "SYNDROME": 194,
        "THOR": 199,
        "TRAVIS": 352,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 203,
        "WOLF": 55,
        "ZLOY": 231
    },
    "comum": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 199,
        "JB": 234,
        "JOE": 202,
        "KIRIN": 199,
        "KLAUS": 200,
        "LENS": 100,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 324,
        "MOSES": 280,
        "OWEN": 341,
        "RAY": 231,
        "RICK": 270,
        "ROOKIE": 324,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 199,
        "TRAVIS": 203,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 203,
        "WOLF": 55,
        "ZLOY": 231
    },
    "incomum": {
        "APOLLO": 218,
        "BATYA": 341,
        "BORIS": 397,
        "CAPISCE": 181,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 192,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 178,
        "JASON": 199,
        "JB": 234,
        "JOE": 202,
        "KIRIN": 199,
        "KLAUS": 347,
        "LENS": 55,
        "MCMEAN": 173,
        "MIA": 88,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 192,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 320,
        "SNEK": 250,
        "SPENCER": 192,
        "SUSSURRO": 108,
        "SYNDROME": 194,
        "THOR": 199,
        "TRAVIS": 352,
        "VALERA": 199,
        "VARG": 189,
        "VICTOR": 352,
        "WOLF": 280,
        "ZLOY": 231
    },
    "raro": {
        "APOLLO": 218,
        "BATYA": 197,
        "BORIS": 229,
        "CAPISCE": 323,
        "CHARON": 231,
        "CHEN LI": 280,
        "CRAIG": 108,
        "DAVID": 341,
        "DIANA": 253,
        "DMITRY": 202,
        "DUTCH": 280,
        "FENIX": 195,
        "FERRY": 0,
        "HAWK": 310,
        "JASON": 355,
        "JB": 234,
        "JOE": 359,
        "KIRIN": 199,
        "KLAUS": 200,
        "LENS": 55,
        "MCMEAN": 309,
        "MIA": 157,
        "MIRO": 280,
        "MISHKA": 178,
        "MOSES": 280,
        "OWEN": 341,
        "RAY": 231,
        "RICK": 149,
        "ROOKIE": 178,
        "SHI": 184,
        "SNEK": 250,
        "SPENCER": 341,
        "SUSSURRO": 108,
        "SYNDROME": 346,
        "THOR": 355,
        "TRAVIS": 203,
        "VALERA": 355,
        "VARG": 337,
        "VICTOR": 203,
        "WOLF": 280,
        "ZLOY": 231
    }
};

const PLANNER_MISSIONS = [
    { key: "baioneta", name: "Baioneta", scores: [65, 210, 65, 65, 65, 65, 155, 155, 155, 155, 155, 50, 40, 150, 150, 150, 150, 40, 35, 200] },
    { key: "brecha", name: "Brecha", scores: [115, 115, 240, 115, 115, 115, 85, 85, 180, 85, 85, 85, 70, 70, 150, 70, 70, 70, 55, 200] },
    { key: "bss", name: "B.S.S.", scores: [95, 255, 95, 95, 95, 95, 70, 70, 70, 190, 70, 70, 60, 160, 60, 60, 60, 60, 50, 200] },
    { key: "cobertura", name: "Cobertura", scores: [115, 115, 115, 115, 240, 115, 85, 85, 85, 85, 180, 85, 70, 70, 70, 70, 150, 70, 55, 200] },
    { key: "demonstracao", name: "Demonstra\u00E7\u00E3o", scores: [115, 115, 115, 115, 115, 240, 85, 85, 85, 85, 85, 180, 70, 70, 70, 70, 70, 150, 55, 200] },
    { key: "faca", name: "Faca", scores: [90, 90, 90, 90, 320, 90, 65, 240, 240, 65, 240, 60, 55, 55, 55, 55, 55, 55, 45, 200] },
    { key: "habitantes", name: "Habitantes", scores: [95, 95, 225, 225, 95, 225, 70, 70, 70, 70, 70, 170, 140, 60, 60, 60, 60, 140, 40, 200] },
    { key: "hildr", name: "HILDR", scores: [480, 100, 100, 100, 100, 100, 70, 70, 70, 70, 70, 70, 60, 60, 60, 300, 60, 60, 50, 200] },
    { key: "limpeza", name: "Limpeza", scores: [115, 115, 115, 240, 115, 115, 85, 85, 85, 180, 85, 85, 70, 70, 70, 150, 70, 70, 55, 200] },
    { key: "logistica", name: "Log\u00EDstica", scores: [115, 240, 115, 115, 115, 115, 85, 180, 85, 85, 85, 85, 70, 150, 70, 70, 70, 70, 55, 200] },
    { key: "martelo", name: "Martelo", scores: [95, 95, 95, 95, 95, 95, 240, 70, 70, 70, 70, 240, 60, 60, 190, 60, 190, 190, 50, 200] },
    { key: "basica", name: "M. B\u00E1sica", scores: [160, 160, 160, 160, 160, 160, 120, 120, 120, 120, 120, 120, 100, 100, 100, 100, 100, 100, 80, 200] },
    { key: "reconhecimento", name: "Reconhecimento", scores: [240, 115, 115, 115, 115, 115, 180, 85, 85, 85, 85, 85, 150, 70, 70, 70, 70, 70, 55, 200] },
    { key: "comum", name: "S. Comum", scores: [65, 65, 65, 65, 65, 65, 50, 50, 50, 50, 50, 50, 150, 150, 150, 150, 150, 150, 120, 200] },
    { key: "incomum", name: "S. Incomum", scores: [65, 65, 65, 65, 65, 65, 180, 180, 180, 180, 180, 180, 40, 40, 40, 40, 40, 40, 30, 200] },
    { key: "raro", name: "S. Raro", scores: [240, 240, 240, 240, 240, 240, 50, 50, 50, 50, 50, 50, 40, 40, 40, 40, 40, 40, 30, 200] }
];

const PLANNER_SLOTS = [
    { slot: 1, points: "50.000", reward: "10k Prata", send: 0 },
    { slot: 2, points: "100.000", reward: "125 Ouro", send: 0 },
    { slot: 3, points: "200.000", reward: "20k Prata", send: 3 },
    { slot: 4, points: "400.000", reward: "250 Ouro", send: 4 },
    { slot: 5, points: "700.000", reward: "38k Prata", send: 7 },
    { slot: 6, points: "1.300.000", reward: "450 Ouro", send: 11 },
    { slot: 7, points: "2.000.000", reward: "65k Prata", send: "remaining" }
];

const LIMITED_ACCESS_OPERATORS = new Set(["WOLF", "FERRY", "SUSSURRO", "CRAIG", "KIRIN", "RAY", "LENS", "MECHARI"]);
const LIMITED_ACCESS_RESERVED_UNTIL_SLOT = 5;
const RELOCATION_TARGET_SLOTS = new Set([1, 2, 3, 4, 5, 6, 7]);
const OPERATOR_DATA_STORAGE_KEY = "blastoise.operatorData.v3";
const CLAN_ROSTER_STORAGE_KEY = "blastoise.clanRoster.v1";
const DEFAULT_CLAN_ROSTER_NICKS = [];
const CLAN_ROSTER_NICK_ALIASES = {};
const DEFAULT_CLAN_ROSTER_NAMES = {};
const DEFAULT_CLAN_ROSTER_WHATSAPP = {};
const CLAN_ROSTER_FEATURED = {};
const DEFAULT_OPERATOR_DETAILS = {
    APOLLO: { rank: "4-1" },
    BATYA: { rank: "4-5" },
    BORIS: { rank: "5-6" },
    CAPISCE: { rank: "4-2" },
    CHARON: { rank: "4-5" },
    "CHEN LI": { rank: "6-10" },
    CRAIG: { rank: "1-1" },
    DAVID: { rank: "4-6" },
    DIANA: { rank: "5-2" },
    DMITRY: { rank: "3-6" },
    DUTCH: { rank: "6-10" },
    FENIX: { rank: "3-4" },
    FERRY: { rank: "" },
    HAWK: { rank: "5-5" },
    JASON: { rank: "4-9" },
    JB: { rank: "4-6" },
    JOE: { rank: "4-6" },
    KIRIN: { rank: "3-5" },
    KLAUS: { rank: "4-6" },
    LENS: { rank: "1-1" },
    MCMEAN: { rank: "3-9" },
    MIA: { rank: "1-1" },
    MIRO: { rank: "6-10" },
    MISHKA: { rank: "6-10" },
    MOSES: { rank: "6-10" },
    OWEN: { rank: "4-6" },
    RAY: { rank: "4-5" },
    RICK: { rank: "4-7" },
    ROOKIE: { rank: "6-10" },
    SHI: { rank: "4-1" },
    SNEK: { rank: "5-1" },
    SPENCER: { rank: "4-6" },
    SUSSURRO: { rank: "1-1" },
    SYNDROME: { rank: "4-7" },
    THOR: { rank: "4-9" },
    TRAVIS: { rank: "4-7" },
    VALERA: { rank: "4-9" },
    VARG: { rank: "4-5" },
    VICTOR: { rank: "4-7" },
    WOLF: { rank: "" },
    ZLOY: { rank: "4-5" }
};
const RANK_LEVELS = Array.from({ length: 60 }, (_, index) => {
    const star = Math.floor(index / 10) + 1;
    const level = (index % 10) + 1;
    return {
        value: `${star}-${level}`,
        label: `${star}\u2605 ${level}/10`
    };
});

const MISSION_TIMES = ["09:00", "12:00", "15:00", "18:00", "21:00", "00:00", "03:00", "06:00"];

const plannerEls = {};
let plannerUnlocked = false;
const manualMissionSelections = {};
const recentRemovedOperatorsBySlot = {};
let latestMissionAssignment = [];
let latestMissionExpected = new Map();
let operatorData = null;
let operatorEditorSort = { key: "", direction: "desc" };
let clanRosterUnlocked = false;
let clanRoster = [];

function missionByKey(key) {
    return PLANNER_MISSIONS.find((mission) => mission.key === key);
}

function formatScore(score) {
    return Number(score || 0).toLocaleString("pt-BR");
}

function normalizeLookupText(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "");
}

function missionTextName(mission) {
    if (mission.key === "incomum") {
        return "SOMENTE INCOMUM";
    }

    return mission.name.toUpperCase();
}

function missionByTextName(name) {
    const lookup = normalizeLookupText(name);
    const aliases = {
        BASICA: "basica",
        MBASICA: "basica",
        MISSAOBASICA: "basica",
        SOMENTEINCOMUM: "incomum",
        SINCOMUM: "incomum",
        HILDR: "hildr"
    };
    const aliasKey = aliases[lookup];

    if (aliasKey) {
        return missionByKey(aliasKey);
    }

    return PLANNER_MISSIONS.find((mission) => normalizeLookupText(mission.name) === lookup);
}

function operatorByTextName(name) {
    const lookup = normalizeLookupText(name);
    return PLANNER_OPERATORS.find((operator) => normalizeLookupText(operator) === lookup) || String(name || "").trim().toUpperCase();
}

async function hashPlannerPassword(password) {
    const data = new TextEncoder().encode(`${PLANNER_PASSWORD_SALT}${password}`);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(digest)]
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

async function hashClanRosterPassword(password) {
    const data = new TextEncoder().encode(`${CLAN_ROSTER_PASSWORD_SALT}${password}`);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(digest)]
        .map((byte) => byte.toString(16).padStart(2, "0"))
        .join("");
}

function unlockPlanner() {
    plannerUnlocked = true;
    plannerEls.lock.hidden = true;
    plannerEls.workbench.hidden = false;
    setPlannerControlsEnabled(true);
    updateMissionPlanner();
}

function showPlannerLockedNotice() {
    if (plannerUnlocked) {
        return;
    }

    plannerEls.message.textContent = "Insira a senha para selecionar as miss\u00F5es.";
    plannerEls.lock.classList.add("is-warning");
    clearTimeout(plannerEls.warningTimer);
    plannerEls.warningTimer = setTimeout(() => {
        plannerEls.lock.classList.remove("is-warning");
    }, 1400);
}

function setPlannerControlsEnabled(enabled) {
    if (!plannerEls.rows) {
        return;
    }

    plannerEls.rows.querySelectorAll(".mission-select").forEach((select) => {
        select.disabled = !enabled;
    });

    plannerEls.rows.querySelectorAll(".mission-operator-count").forEach((select) => {
        select.disabled = !enabled;
    });

    if (plannerEls.timeSelect) {
        plannerEls.timeSelect.disabled = !enabled;
    }

    [plannerEls.clearButton, plannerEls.copyButton, plannerEls.shareButton].forEach((button) => {
        if (button) {
            button.disabled = !enabled;
        }
    });

    if (plannerEls.operatorDataTransfer) {
        plannerEls.operatorDataTransfer.disabled = !enabled;
    }

    if (plannerEls.operatorEditorBody) {
        plannerEls.operatorEditorBody.querySelectorAll("input, select").forEach((control) => {
            control.disabled = !enabled;
        });
    }

    [plannerEls.operatorSearchFilter, plannerEls.operatorViewFilter, plannerEls.operatorMissionFilter].forEach((control) => {
        if (control) {
            control.disabled = !enabled;
        }
    });

    if (plannerEls.operatorPanel) {
        plannerEls.operatorPanel.classList.toggle("is-locked", !enabled);
    }
    syncMissionChoiceWidgets();
}

function createMissionTimes() {
    if (!plannerEls.timeSelect) {
        return;
    }

    const formatMissionTimeOption = (time) => {
        const [hourText, minuteText] = time.split(":");
        const hour = Number(hourText);
        const period = hour >= 12 ? "PM" : "AM";
        const displayHour = hour % 12 || 12;

        return `${String(displayHour).padStart(2, "0")}:${minuteText} ${period}`;
    };

    plannerEls.timeSelect.innerHTML = MISSION_TIMES.map((time) => (
        `<option value="${time}">${formatMissionTimeOption(time)}</option>`
    )).join("");
    plannerEls.timeSelect.value = "09:00";
}

function createOperatorMissionFilter() {
    if (!plannerEls.operatorMissionFilter) {
        return;
    }

    plannerEls.operatorMissionFilter.innerHTML = [
        '<option value="">Todas</option>',
        ...PLANNER_MISSIONS.map((mission) => `<option value="${escapeHtml(mission.key)}">${escapeHtml(mission.name)}</option>`)
    ].join("");
}

function createMissionOptions(currentValue = "", selectedValues = new Set()) {
    return [
        '<option value="">MISSÃO</option>',
        ...PLANNER_MISSIONS
            .filter((mission) => mission.key === currentValue || !selectedValues.has(mission.key))
            .map((mission) => `<option value="${mission.key}">${mission.name}</option>`)
    ].join("");
}

function createMissionRows() {
    const options = createMissionOptions();
    const countOptions = createMissionCountOptions(PLANNER_OPERATORS.length, 0);

    plannerEls.rows.innerHTML = PLANNER_SLOTS.map((item) => `
        <div class="mission-row">
            <span class="mission-slot">#${item.slot}</span>
            <span class="mission-meta">
                <strong>${item.points}</strong>
                <small>${item.reward}</small>
                <em>${missionSendLabel({ ...item, send: 0 })}</em>
            </span>
            <span class="mission-count-wrap">
                <span class="mission-count-label">QTD<br>OPERADOR</span>
                <select class="mission-operator-count" data-slot="${item.slot}" aria-label="Quantidade de operadores da miss\u00E3o ${item.slot}" disabled>
                    ${countOptions}
                </select>
            </span>
            <span class="mission-select-wrap">
                <select class="mission-select" data-slot="${item.slot}" disabled>
                    ${options}
                </select>
            </span>
        </div>
    `).join("");
    updateMissionCountOptions();
    syncMissionChoiceWidgets();
}

function updateMissionSelectOptions() {
    const selects = [...plannerEls.rows.querySelectorAll(".mission-select")];
    const selectedValues = new Set(selects.map((select) => select.value).filter(Boolean));

    selects.forEach((select) => {
        const currentValue = select.value;
        select.innerHTML = createMissionOptions(currentValue, selectedValues);
        select.value = currentValue;
    });
    syncMissionChoiceWidgets();
}

function createMissionCountOptions(maxValue, currentValue) {
    return Array.from({ length: maxValue + 1 }, (_, count) => (
        `<option value="${count}"${count === currentValue ? " selected" : ""}>${count}</option>`
    )).join("");
}

function updateMissionCountOptions() {
    const selects = [...plannerEls.rows.querySelectorAll(".mission-operator-count")];
    const totalOperators = PLANNER_OPERATORS.length;
    const selectedTotal = selects.reduce((sum, select) => sum + Math.max(0, Number(select.value) || 0), 0);

    selects.forEach((select) => {
        const currentValue = Math.max(0, Number(select.value) || 0);
        const maxValue = Math.max(0, totalOperators - selectedTotal + currentValue);
        const nextValue = Math.min(currentValue, maxValue);
        select.innerHTML = createMissionCountOptions(maxValue, nextValue);
        select.value = String(nextValue);
    });
    syncMissionChoiceWidgets();
}

function syncMissionChoiceWidgets() {
    if (!plannerEls.rows) {
        return;
    }

    plannerEls.rows.querySelectorAll(".mission-operator-count, .mission-select").forEach((select) => {
        const isCount = select.classList.contains("mission-operator-count");
        const wrapper = select.closest(isCount ? ".mission-count-wrap" : ".mission-select-wrap");
        if (!wrapper) {
            return;
        }

        let widget = wrapper.querySelector(".mission-choice-widget");
        if (!widget) {
            widget = document.createElement("span");
            widget.className = `mission-choice-widget ${isCount ? "is-count" : "is-mission"}`;
            widget.innerHTML = `
                <button type="button" class="mission-choice-button" aria-haspopup="listbox" aria-expanded="false"></button>
                <span class="mission-choice-list" role="listbox"></span>
            `;
            wrapper.appendChild(widget);
        }

        const button = widget.querySelector(".mission-choice-button");
        const list = widget.querySelector(".mission-choice-list");
        const selectedOption = select.options[select.selectedIndex] || select.options[0];
        const label = isCount ? "QTD OPERADOR" : "MISS\u00C3O";
        const valueText = selectedOption ? selectedOption.textContent : (isCount ? "0" : "MISS\u00C3O");

        button.disabled = select.disabled;
        button.dataset.slot = select.dataset.slot || "";
        button.innerHTML = `<small>${label}</small><strong>${escapeHtml(valueText)}</strong><i aria-hidden="true"></i>`;

        list.innerHTML = [...select.options].map((option) => `
            <button type="button"
                class="mission-choice-option${option.value === select.value ? " is-selected" : ""}"
                role="option"
                aria-selected="${option.value === select.value ? "true" : "false"}"
                data-value="${escapeHtml(option.value)}">
                ${escapeHtml(option.textContent)}
            </button>
        `).join("");
    });
}

function closeMissionChoiceWidgets(exceptWidget = null) {
    plannerEls.rows?.querySelectorAll(".mission-choice-widget.is-open").forEach((widget) => {
        if (widget === exceptWidget) {
            return;
        }

        widget.classList.remove("is-open");
        widget.closest(".mission-row")?.classList.remove("has-open-choice");
        widget.style.removeProperty("--choice-left");
        widget.style.removeProperty("--choice-top");
        widget.style.removeProperty("--choice-width");
        widget.querySelector(".mission-choice-button")?.setAttribute("aria-expanded", "false");
    });
}

function positionMissionChoiceList(widget, button) {
    const rect = button.getBoundingClientRect();
    const margin = 8;
    const width = Math.min(Math.max(rect.width, 160), window.innerWidth - (margin * 2));
    const left = Math.min(Math.max(rect.left, margin), window.innerWidth - width - margin);
    const top = Math.min(rect.bottom + 4, window.innerHeight - 60);

    widget.style.setProperty("--choice-left", `${left}px`);
    widget.style.setProperty("--choice-top", `${top}px`);
    widget.style.setProperty("--choice-width", `${width}px`);
}

function repositionOpenMissionChoiceWidget() {
    const widget = plannerEls.rows?.querySelector(".mission-choice-widget.is-open");
    const button = widget?.querySelector(".mission-choice-button");
    if (widget && button) {
        positionMissionChoiceList(widget, button);
    }
}

function handleMissionChoiceClick(event) {
    const button = event.target.closest(".mission-choice-button");
    const option = event.target.closest(".mission-choice-option");

    if (!button && !option) {
        return;
    }

    const widget = event.target.closest(".mission-choice-widget");
    const wrapper = event.target.closest(".mission-count-wrap, .mission-select-wrap");
    const select = wrapper?.querySelector("select");

    if (!widget || !select || select.disabled) {
        return;
    }

    event.preventDefault();
    event.stopPropagation();

    if (button) {
        const willOpen = !widget.classList.contains("is-open");
        closeMissionChoiceWidgets(widget);
        widget.classList.toggle("is-open", willOpen);
        widget.closest(".mission-row")?.classList.toggle("has-open-choice", willOpen);
        button.setAttribute("aria-expanded", willOpen ? "true" : "false");
        if (willOpen) {
            positionMissionChoiceList(widget, button);
        }
        return;
    }

    if (option) {
        select.value = option.dataset.value || "";
        closeMissionChoiceWidgets();
        select.dispatchEvent(new Event("change", { bubbles: true }));
    }
}

function missionSendLabel(item) {
    const send = item.send;

    if (send === 0) {
        return "Sem operador";
    }

    if (send === "remaining") {
        return "Sobras";
    }

    return `${send} operadores`;
}

function selectedMissions() {
    return [...plannerEls.rows.querySelectorAll(".mission-select")]
        .map((select) => {
            const row = select.closest(".mission-row");
            const mission = missionByKey(select.value);
            const slotInfo = PLANNER_SLOTS.find((item) => item.slot === Number(select.dataset.slot));
            const count = Math.max(0, Number(row?.querySelector(".mission-operator-count")?.value) || 0);
            return mission ? { ...slotInfo, send: count, mission } : null;
        })
        .filter(Boolean);
}

function completedMissionSlots() {
    return new Set();
}

function setMissionStatus(button, state) {
    if (!button) {
        return;
    }
}

function normalizeOperatorName(operator) {
    return operator.toUpperCase().replace("CHE LI", "CHEN LI");
}

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function normalizeClanPhone(value) {
    return String(value || "").replace(/\D/g, "");
}

function whatsappDigits(value) {
    const digits = normalizeClanPhone(value);
    if (digits.length === 10 || digits.length === 11) {
        return `55${digits}`;
    }

    return digits;
}

function formatClanPhone(value) {
    const digits = normalizeClanPhone(value);
    if (digits.length === 11) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }

    if (digits.length === 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }

    if (digits.length === 13 && digits.startsWith("55")) {
        return `+55 (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`;
    }

    if (digits.length === 12 && digits.startsWith("55")) {
        return `+55 (${digits.slice(2, 4)}) ${digits.slice(4, 8)}-${digits.slice(8)}`;
    }

    return value || "-";
}

function createClanPlayerId() {
    if (window.crypto?.randomUUID) {
        return window.crypto.randomUUID();
    }

    return `player-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createDefaultClanRoster() {
    return DEFAULT_CLAN_ROSTER_NICKS.map((nick, index) => ({
        id: `seed-${index + 1}`,
        name: DEFAULT_CLAN_ROSTER_NAMES[nick] || "",
        nick,
        whatsapp: DEFAULT_CLAN_ROSTER_WHATSAPP[nick] || ""
    }));
}

function canonicalClanNick(nick) {
    const cleanNick = String(nick || "").trim();
    return CLAN_ROSTER_NICK_ALIASES[cleanNick] || cleanNick;
}

function dedupeClanRoster(players) {
    const byNick = new Map();

    players.forEach((player) => {
        const nick = canonicalClanNick(player.nick);
        if (!nick) {
            return;
        }

        const previous = byNick.get(nick) || {};
        byNick.set(nick, {
            id: previous.id || player.id || createClanPlayerId(),
            name: String(previous.name || player.name || DEFAULT_CLAN_ROSTER_NAMES[nick] || "").trim(),
            nick,
            whatsapp: normalizeClanPhone(previous.whatsapp || player.whatsapp || DEFAULT_CLAN_ROSTER_WHATSAPP[nick])
        });
    });

    return [...byNick.values()];
}

function mergeDefaultClanRoster(players) {
    const merged = dedupeClanRoster(players);
    const savedNicks = new Set(merged.map((player) => player.nick));

    createDefaultClanRoster().forEach((defaultPlayer) => {
        if (!savedNicks.has(defaultPlayer.nick)) {
            merged.push(defaultPlayer);
        }
    });

    return merged;
}

function loadClanRoster() {
    try {
        const saved = localStorage.getItem(CLAN_ROSTER_STORAGE_KEY);
        const parsed = saved ? JSON.parse(saved) : null;
        const savedPlayers = Array.isArray(parsed?.players) ? parsed.players.map((player) => ({
            id: String(player.id || createClanPlayerId()),
            name: String(player.name || DEFAULT_CLAN_ROSTER_NAMES[canonicalClanNick(player.nick)] || "").trim(),
            nick: canonicalClanNick(player.nick),
            whatsapp: normalizeClanPhone(player.whatsapp || DEFAULT_CLAN_ROSTER_WHATSAPP[canonicalClanNick(player.nick)])
        })).filter((player) => player.nick) : [];
        clanRoster = mergeDefaultClanRoster(savedPlayers);
        saveClanRoster();
    } catch (error) {
        clanRoster = createDefaultClanRoster();
        saveClanRoster();
    }
}

function saveClanRoster() {
    localStorage.setItem(CLAN_ROSTER_STORAGE_KEY, JSON.stringify({
        version: 1,
        players: clanRoster
    }));
}

function setClanRosterStatus(message) {
    if (!plannerEls.clanRosterStatus) {
        return;
    }

    plannerEls.clanRosterStatus.textContent = message;
    if (message) {
        setTimeout(() => {
            if (plannerEls.clanRosterStatus.textContent === message) {
                plannerEls.clanRosterStatus.textContent = "";
            }
        }, 3200);
    }
}

function clearClanRosterForm() {
    if (!plannerEls.clanRosterForm) {
        return;
    }

    plannerEls.clanPlayerId.value = "";
    plannerEls.clanPlayerName.value = "";
    plannerEls.clanPlayerNick.value = "";
    plannerEls.clanPlayerWhatsapp.value = "";
    plannerEls.saveClanPlayerButton.textContent = "Salvar jogador";
}

function filteredClanRoster() {
    const query = normalizeLookupText(plannerEls.clanRosterSearch?.value || "");
    if (!query) {
        return [...clanRoster];
    }

    return clanRoster.filter((player) => {
        const haystack = normalizeLookupText(`${player.name} ${player.nick} ${player.whatsapp}`);
        return haystack.includes(query);
    });
}

function getClanFeaturedInfo(player) {
    return CLAN_ROSTER_FEATURED[player.nick] || null;
}

function sortClanPlayers(first, second) {
    const firstFeatured = getClanFeaturedInfo(first);
    const secondFeatured = getClanFeaturedInfo(second);

    if (firstFeatured || secondFeatured) {
        return (firstFeatured?.order || 999) - (secondFeatured?.order || 999);
    }

    return first.nick.localeCompare(second.nick, "pt-BR");
}

function renderClanRoster() {
    if (!plannerEls.clanRosterBody) {
        return;
    }

    const players = filteredClanRoster().sort(sortClanPlayers);
    if (!players.length) {
        plannerEls.clanRosterBody.innerHTML = '<tr><td colspan="5" class="clan-roster-empty">Nenhum jogador cadastrado.</td></tr>';
        return;
    }

    plannerEls.clanRosterBody.innerHTML = players.map((player, index) => {
        const digits = whatsappDigits(player.whatsapp);
        const whatsappLink = digits ? `https://wa.me/${digits}` : "";
        const requestOperatorsMessage = "⚠️ Fala irmão, consegue enviar os operadores das missões quando puder? Estamos finalizando a organização da missão. 👍";
        const relocationMessage = "🔄 Realocação de operadores feita. Dá uma conferida no grupo de missão e envie os operadores atualizados, por favor. 👍";
        const requestOperatorsLink = digits ? `https://wa.me/${digits}?text=${encodeURIComponent(requestOperatorsMessage)}` : "";
        const relocationLink = digits ? `https://wa.me/${digits}?text=${encodeURIComponent(relocationMessage)}` : "";
        const whatsappButton = whatsappLink
            ? `<a class="clan-roster-action" href="${escapeHtml(whatsappLink)}" target="_blank" rel="noopener noreferrer">Zap</a>`
            : '<span class="clan-roster-action is-disabled">Pendente</span>';
        const requestOperatorsButton = requestOperatorsLink
            ? `<a class="clan-roster-action clan-roster-message-action" href="${escapeHtml(requestOperatorsLink)}" target="_blank" rel="noopener noreferrer">Pedir operadores</a>`
            : '<span class="clan-roster-action is-disabled">Sem WhatsApp</span>';
        const relocationButton = relocationLink
            ? `<a class="clan-roster-action clan-roster-message-action" href="${escapeHtml(relocationLink)}" target="_blank" rel="noopener noreferrer">Realocação</a>`
            : '<span class="clan-roster-action is-disabled">Sem WhatsApp</span>';
        const featured = getClanFeaturedInfo(player);
        const rowClass = featured ? " class=\"is-featured\"" : "";
        const roleBadge = featured ? `<span class="clan-role-badge clan-role-${featured.role.toLowerCase()}">${featured.role}</span>` : "";
        return `
            <tr${rowClass}>
                <td class="clan-roster-index" data-label="Nº">${index + 1}</td>
                <td data-label="Nome">${escapeHtml(player.name || "-")}</td>
                <th data-label="Nick">${roleBadge}${escapeHtml(player.nick)}</th>
                <td data-label="WhatsApp">${escapeHtml(formatClanPhone(player.whatsapp))}</td>
                <td data-label="Ações">
                    <div class="clan-roster-row-actions">
                        ${whatsappButton}
                        ${requestOperatorsButton}
                        ${relocationButton}
                        <button type="button" class="clan-roster-action" data-action="copy" data-player-id="${escapeHtml(player.id)}">Copiar</button>
                        <button type="button" class="clan-roster-action" data-action="edit" data-player-id="${escapeHtml(player.id)}">Editar</button>
                        <button type="button" class="clan-roster-action" data-action="delete" data-player-id="${escapeHtml(player.id)}">X</button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

async function unlockClanRoster(event) {
    event.preventDefault();

    const password = plannerEls.clanRosterPassword.value.trim();
    if (!password) {
        plannerEls.clanRosterLockMessage.textContent = "Digite a senha extra.";
        return;
    }

    if (!/^\d+$/.test(password)) {
        plannerEls.clanRosterLockMessage.textContent = "A senha extra deve conter apenas n\u00FAmeros.";
        return;
    }

    const hash = await hashClanRosterPassword(password);
    if (hash === CLAN_ROSTER_PASSWORD_HASH) {
        clanRosterUnlocked = true;
        plannerEls.clanRosterGate.hidden = true;
        plannerEls.clanRosterContent.hidden = false;
        plannerEls.clanRosterPassword.value = "";
        plannerEls.clanRosterLockMessage.textContent = "";
        renderClanRoster();
        return;
    }

    plannerEls.clanRosterLockMessage.textContent = "Senha extra incorreta.";
    plannerEls.clanRosterPassword.value = "";
}

function saveClanPlayer(event) {
    event.preventDefault();

    if (!clanRosterUnlocked) {
        return;
    }

    const id = plannerEls.clanPlayerId.value;
    const nick = plannerEls.clanPlayerNick.value.trim();
    const name = plannerEls.clanPlayerName.value.trim();
    const whatsapp = normalizeClanPhone(plannerEls.clanPlayerWhatsapp.value);

    if (!nick) {
        setClanRosterStatus("Nick \u00E9 obrigat\u00F3rio.");
        return;
    }

    const existingIndex = clanRoster.findIndex((player) => player.id === id);
    const player = {
        id: id || createClanPlayerId(),
        name,
        nick,
        whatsapp
    };

    if (existingIndex >= 0) {
        clanRoster[existingIndex] = player;
        setClanRosterStatus("Jogador atualizado.");
    } else {
        clanRoster.push(player);
        setClanRosterStatus("Jogador cadastrado.");
    }

    saveClanRoster();
    clearClanRosterForm();
    renderClanRoster();
}

async function copyClanText(text, message = "Copiado.") {
    try {
        await navigator.clipboard.writeText(text);
        setClanRosterStatus(message);
    } catch (error) {
        if (plannerEls.clanRosterTransfer) {
            plannerEls.clanRosterTransfer.value = text;
            plannerEls.clanRosterTransfer.focus();
            plannerEls.clanRosterTransfer.select();
        }
        setClanRosterStatus("Texto pronto para copiar.");
    }
}

function handleClanRosterAction(event) {
    const actionButton = event.target.closest("[data-action][data-player-id]");
    if (!actionButton || !clanRosterUnlocked) {
        return;
    }

    const player = clanRoster.find((item) => item.id === actionButton.dataset.playerId);
    if (!player) {
        return;
    }

    if (actionButton.dataset.action === "edit") {
        plannerEls.clanPlayerId.value = player.id;
        plannerEls.clanPlayerName.value = player.name;
        plannerEls.clanPlayerNick.value = player.nick;
        plannerEls.clanPlayerWhatsapp.value = player.whatsapp;
        plannerEls.saveClanPlayerButton.textContent = "Atualizar jogador";
        plannerEls.clanPlayerNick.focus();
        return;
    }

    if (actionButton.dataset.action === "delete") {
        clanRoster = clanRoster.filter((item) => item.id !== player.id);
        saveClanRoster();
        clearClanRosterForm();
        renderClanRoster();
        setClanRosterStatus("Jogador removido.");
        return;
    }

    if (actionButton.dataset.action === "copy") {
        copyClanText(`${player.nick} - ${formatClanPhone(player.whatsapp)}`, "Contato copiado.");
    }
}

function exportClanRoster() {
    if (!clanRosterUnlocked) {
        return;
    }

    const text = JSON.stringify({ version: 1, players: clanRoster }, null, 2);
    plannerEls.clanRosterTransfer.value = text;
    copyClanText(text, "Backup copiado.");
}

function importClanRoster() {
    if (!clanRosterUnlocked) {
        return;
    }

    try {
        const parsed = JSON.parse(plannerEls.clanRosterTransfer.value || "{}");
        if (!Array.isArray(parsed.players)) {
            throw new Error("Formato inv\u00E1lido");
        }

        clanRoster = parsed.players.map((player) => ({
            id: String(player.id || createClanPlayerId()),
            name: String(player.name || "").trim(),
            nick: String(player.nick || "").trim(),
            whatsapp: normalizeClanPhone(player.whatsapp)
        })).filter((player) => player.nick);
        saveClanRoster();
        clearClanRosterForm();
        renderClanRoster();
        setClanRosterStatus("Backup importado.");
    } catch (error) {
        setClanRosterStatus("Backup inv\u00E1lido.");
    }
}

function copyClanRosterList() {
    if (!clanRosterUnlocked) {
        return;
    }

    const players = [...clanRoster].sort(sortClanPlayers);
    const text = players.length
        ? players.map((player) => `${player.nick}${player.name ? ` (${player.name})` : ""}: ${formatClanPhone(player.whatsapp)}`).join("\n")
        : "Nenhum jogador cadastrado.";
    copyClanText(text, "Lista copiada.");
}

function getBaseMissionScore(mission, operator, index) {
    if (MISSION_SEVEN_RESERVED_OPERATORS.has(operator)) {
        return 0;
    }

    const updatedScore = UPDATED_MISSION_SCORES[mission.key]?.[normalizeOperatorName(operator)];
    if (Number.isFinite(updatedScore)) {
        return updatedScore;
    }

    if (index < PLANNER_BASE_OPERATOR_COUNT) {
        return mission.scores[index] || 0;
    }

    return EXTRA_OPERATOR_SCORES[operator]?.[mission.key] || 55;
}

function createDefaultOperatorData() {
    return {
        version: 1,
        operators: Object.fromEntries(PLANNER_OPERATORS.map((operator, index) => [
            operator,
            {
                rank: DEFAULT_OPERATOR_DETAILS[operator]?.rank || "",
                scores: Object.fromEntries(PLANNER_MISSIONS.map((mission) => [
                    mission.key,
                    getBaseMissionScore(mission, operator, index)
                ]))
            }
        ]))
    };
}

function mergeOperatorData(savedData) {
    const defaults = createDefaultOperatorData();
    const savedOperators = savedData?.operators || {};

    PLANNER_OPERATORS.forEach((operator) => {
        const savedOperator = savedOperators[operator] || {};
        const savedRank = String(savedOperator.rank ?? "");

        defaults.operators[operator].rank = RANK_LEVELS.some((rank) => rank.value === savedRank) ? savedRank : "";

        PLANNER_MISSIONS.forEach((mission) => {
            const score = Number(savedOperator.scores?.[mission.key]);
            if (Number.isFinite(score)) {
                defaults.operators[operator].scores[mission.key] = Math.max(0, Math.floor(score));
            }
        });
    });

    return defaults;
}

function loadOperatorData() {
    try {
        const saved = localStorage.getItem(OPERATOR_DATA_STORAGE_KEY);
        operatorData = mergeOperatorData(saved ? JSON.parse(saved) : null);
    } catch (error) {
        operatorData = createDefaultOperatorData();
    }
}

function persistOperatorData() {
    localStorage.setItem(OPERATOR_DATA_STORAGE_KEY, JSON.stringify(operatorData));
}

function serializeOperatorData(data = operatorData) {
    return JSON.stringify(data, null, 2);
}

function replaceOperatorData(nextData) {
    operatorData = mergeOperatorData(nextData);
    persistOperatorData();
    renderOperatorEditor();
    setPlannerControlsEnabled(plannerUnlocked);
    clearManualMissionSelections();
    updateMissionPlanner();
}


function createRankOptions(value) {
    return [
        `<option value=""${value ? "" : " selected"}>-</option>`,
        ...RANK_LEVELS.map((rank) => (
            `<option value="${rank.value}"${String(value) === rank.value ? " selected" : ""}>${rank.label}</option>`
        ))
    ].join("");
}

function scoreMission(mission, slot) {
    return PLANNER_OPERATORS
        .map((operator, index) => ({
            operator,
            score: getMissionScore(mission, operator, index, slot)
        }))
        .sort((a, b) => b.score - a.score || a.operator.localeCompare(b.operator));
}

function getMissionScore(mission, operator, index, slot) {
    if (MISSION_SEVEN_RESERVED_OPERATORS.has(normalizeOperatorName(operator))) {
        return Number(slot) === 7 ? MISSION_SEVEN_RESERVED_SCORE : 0;
    }

    const editedScore = Number(operatorData?.operators?.[operator]?.scores?.[mission.key]);
    if (Number.isFinite(editedScore)) {
        return editedScore;
    }

    return getBaseMissionScore(mission, operator, index);
}

function isLimitedAccessOperator(operator) {
    return LIMITED_ACCESS_OPERATORS.has(normalizeOperatorName(operator));
}

function operatorAvailabilityPriority(operator, slot) {
    if (MISSION_SEVEN_RESERVED_OPERATORS.has(normalizeOperatorName(operator)) && Number(slot) <= 6) {
        return 1;
    }

    return isLimitedAccessOperator(operator) && Number(slot) <= LIMITED_ACCESS_RESERVED_UNTIL_SLOT ? 1 : 0;
}

function compareAssignmentCandidates(a, b) {
    const availability = operatorAvailabilityPriority(a.operator, a.item.slot) - operatorAvailabilityPriority(b.operator, b.item.slot);
    if (availability) {
        return availability;
    }

    return b.score - a.score || a.item.slot - b.item.slot || a.operator.localeCompare(b.operator);
}

function compareRelocationTargets(operator, a, b) {
    const availability = operatorAvailabilityPriority(operator, a.item.slot) - operatorAvailabilityPriority(operator, b.item.slot);
    if (availability) {
        return availability;
    }

    const targetPriority = (slot) => (Number(slot) >= 6 ? 0 : 1);
    const priority = targetPriority(a.item.slot) - targetPriority(b.item.slot);
    if (priority) {
        return priority;
    }

    return b.score - a.score || a.item.slot - b.item.slot;
}

function clearManualMissionSelections(slot) {
    if (Number.isFinite(Number(slot))) {
        delete manualMissionSelections[slot];
        delete recentRemovedOperatorsBySlot[slot];
        return;
    }

    Object.keys(manualMissionSelections).forEach((key) => {
        delete manualMissionSelections[key];
    });
    Object.keys(recentRemovedOperatorsBySlot).forEach((key) => {
        delete recentRemovedOperatorsBySlot[key];
    });
}

function selectedOperatorsForSlot(slot) {
    return manualMissionSelections[slot] || null;
}

function missionSelectionLimit(item) {
    const completedSlots = completedMissionSlots();
    if (completedSlots.size && RELOCATION_TARGET_SLOTS.has(Number(item.slot)) && !completedSlots.has(Number(item.slot))) {
        return Number.POSITIVE_INFINITY;
    }

    if (item.isRelocationTarget) {
        return Number.POSITIVE_INFINITY;
    }

    if (item.send === "remaining") {
        return Number.POSITIVE_INFINITY;
    }

    return Math.max(0, Number(item.send) || 0);
}

function applyManualSelectionsToAssignment(assignment) {
    return assignment.map((item) => {
        const selectedOperators = selectedOperatorsForSlot(item.slot);
        if (!selectedOperators) {
            return item;
        }

        const limit = missionSelectionLimit(item);

        return {
            ...item,
            chosen: selectedOperators
                .filter((operator) => PLANNER_OPERATORS.includes(operator))
                .slice(0, Number.isFinite(limit) ? limit : undefined)
                .map((operator) => {
                    const operatorIndex = PLANNER_OPERATORS.indexOf(operator);
                    return {
                        operator,
                        score: getMissionScore(item.mission, operator, operatorIndex >= 0 ? operatorIndex : 0, item.slot)
                    };
                })
        };
    });
}

function getMissionCandidateClass(candidates, score) {
    const positiveScores = candidates
        .map((entry) => Number(entry.score) || 0)
        .filter((value) => value > 0);

    if (!positiveScores.length || score <= 0) {
        return "is-low-score";
    }

    const bestScore = positiveScores[0];
    const uniqueScores = [...new Set(positiveScores)];
    const scoreRank = uniqueScores.indexOf(score);
    const percentile = scoreRank / Math.max(1, uniqueScores.length - 1);

    if (score === bestScore) {
        return "is-best-score";
    }

    if (percentile <= 0.28) {
        return "is-good-score";
    }

    if (percentile <= 0.68) {
        return "is-neutral-score";
    }

    return "is-low-score";
}

function selectedOperatorSlotMap(assignment) {
    const map = new Map();

    assignment.forEach((item) => {
        item.chosen.forEach((entry) => {
            if (!map.has(entry.operator)) {
                map.set(entry.operator, item.slot);
            }
        });
    });

    return map;
}

function rememberRemovedOperator(slot, operator) {
    const key = String(slot);
    const removed = recentRemovedOperatorsBySlot[key] || [];

    if (!removed.includes(operator)) {
        removed.push(operator);
    }

    recentRemovedOperatorsBySlot[key] = removed;
}

function forgetRemovedOperator(slot, operator) {
    const key = String(slot);
    const removed = recentRemovedOperatorsBySlot[key] || [];
    recentRemovedOperatorsBySlot[key] = removed.filter((item) => item !== operator);
}

function renderMissionOperatorPicker(item, operatorSlotMap) {
    const candidates = scoreMission(item.mission, item.slot);
    const selectedOperators = new Set(item.chosen.map((entry) => entry.operator));
    const relocationAllowedOperators = item.relocationAllowedOperators instanceof Set ? item.relocationAllowedOperators : null;
    const completedSourceOperators = item.completedSourceOperators instanceof Set ? item.completedSourceOperators : null;
    const limit = missionSelectionLimit(item);
    const selectedCount = selectedOperators.size;
    const limitReached = Number.isFinite(limit) && selectedCount >= limit;
    const limitLabel = Number.isFinite(limit) ? `${selectedCount}/${limit}` : `${selectedCount} selecionados`;
    const pickerLocked = limit === 0;

    return `
        <div class="mission-operator-picker">
            <div class="mission-operator-picker-head">
                <div>
                    <span>Escolher operadores</span>
                    <small>Maior pontua\u00E7\u00E3o primeiro</small>
                </div>
                <em>${pickerLocked ? "Sem operador" : limitLabel}</em>
            </div>
            <div class="mission-operator-options" data-slot="${item.slot}">
                ${candidates.map((entry) => {
                    const checked = selectedOperators.has(entry.operator) ? " checked" : "";
                    const className = getMissionCandidateClass(candidates, entry.score);
                    const usedSlot = operatorSlotMap.get(entry.operator);
                    const usedElsewhere = usedSlot && usedSlot !== item.slot;
                    const sourceCompleted = item.isCompletedRelocationSource && completedSourceOperators?.has(entry.operator);
                    const lockedByRelocation = relocationAllowedOperators && !relocationAllowedOperators.has(entry.operator);
                    const sourceLocked = item.isCompletedRelocationSource;
                    const disabled = sourceLocked || pickerLocked || usedElsewhere || lockedByRelocation || (limitReached && !selectedOperators.has(entry.operator));
                    const usageLabel = sourceCompleted
                        ? "conclu\u00EDdo"
                        : usedElsewhere
                            ? `miss\u00E3o ${usedSlot}`
                            : lockedByRelocation
                                ? "fixo"
                                : "";
                    const title = sourceCompleted
                        ? "Operador desta miss\u00E3o conclu\u00EDda"
                        : usedElsewhere
                            ? `Usado na miss\u00E3o ${usedSlot}`
                            : pickerLocked
                                ? "Esta miss\u00E3o n\u00E3o recebe operadores"
                                : lockedByRelocation
                                    ? "Operador fixo da programa\u00E7\u00E3o inicial"
                                    : "";
                    return `
                        <label class="mission-operator-option ${className}${usedElsewhere || lockedByRelocation || sourceLocked ? " is-unavailable" : ""}${disabled && !usedElsewhere && !lockedByRelocation && !sourceLocked && !checked ? " is-limit-blocked" : ""}" title="${escapeHtml(title)}">
                            <input type="checkbox" data-slot="${item.slot}" data-operator="${escapeHtml(entry.operator)}"${checked}${disabled ? " disabled" : ""}>
                            <span>${escapeHtml(entry.operator)}${usageLabel ? `<small>${escapeHtml(usageLabel)}</small>` : ""}</span>
                            <strong>${formatScore(entry.score)}</strong>
                        </label>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

function buildRanking(selected) {
    return PLANNER_OPERATORS
        .map((operator, index) => {
            const picks = selected
                .map((item) => ({
                    mission: item.mission.name,
                    slot: item.slot,
                    score: getMissionScore(item.mission, operator, index, item.slot)
                }))
                .sort((a, b) => b.score - a.score);

            return {
                operator,
                total: picks.reduce((sum, pick) => sum + pick.score, 0),
                picks
            };
        })
        .sort((a, b) => b.total - a.total || a.operator.localeCompare(b.operator));
}

function buildAssignment(selected) {
    const used = new Set();
    const assignment = selected.map((item) => ({
        ...item,
        chosen: [],
        alternatives: []
    }));

    const fixedSlots = assignment.filter((item) => Number(item.send) > 0);
    const remainingSlot = assignment.find((item) => item.send === "remaining");
    const candidates = fixedSlots.flatMap((item) => (
        PLANNER_OPERATORS.map((operator, index) => ({
            item,
            operator,
            score: getMissionScore(item.mission, operator, index, item.slot)
        }))
    ));

    candidates
        .sort(compareAssignmentCandidates)
        .forEach((entry) => {
            if (used.has(entry.operator) || entry.item.chosen.length >= Number(entry.item.send)) {
                return;
            }

            entry.item.chosen.push({
                operator: entry.operator,
                score: entry.score
            });
            used.add(entry.operator);
        });

    if (remainingSlot) {
        remainingSlot.chosen = scoreMission(remainingSlot.mission, remainingSlot.slot)
            .filter((entry) => !used.has(entry.operator));
        remainingSlot.chosen.forEach((entry) => used.add(entry.operator));
    }

    assignment.forEach((item) => {
        item.alternatives = scoreMission(item.mission, item.slot)
            .filter((entry) => !used.has(entry.operator) && !item.chosen.some((chosen) => chosen.operator === entry.operator))
            .slice(0, 3);
    });

    return assignment;
}

function buildRelocationAssignment(baseAssignment, completedSlots, originalAssignment = baseAssignment) {
    const movingOperators = [];
    const sourceItems = originalAssignment.filter((item) => completedSlots.has(item.slot) && item.chosen.length);
    const targetItems = selectedMissions().filter((item) => (
        RELOCATION_TARGET_SLOTS.has(item.slot)
        && !completedSlots.has(item.slot)
        && item.send !== 0
    ));

    sourceItems.forEach((item) => {
        item.chosen.forEach((entry) => {
            if (!movingOperators.some((operator) => operator === entry.operator)) {
                movingOperators.push(entry.operator);
            }
        });
    });

    const targets = targetItems.map((item) => ({
        ...item,
        chosen: []
    }));

    movingOperators.forEach((operator) => {
        const operatorIndex = PLANNER_OPERATORS.indexOf(operator);
        const bestTarget = targets
            .map((item) => ({
                item,
                score: getMissionScore(item.mission, operator, operatorIndex >= 0 ? operatorIndex : 0, item.slot)
            }))
            .sort((a, b) => compareRelocationTargets(operator, a, b))[0];

        if (bestTarget) {
            bestTarget.item.chosen.push({
                operator,
                score: bestTarget.score
            });
        }
    });

    return {
        movingOperators,
        sourceItems,
        targetItems: targets
    };
}

function buildRelocationDisplayAssignment(assignment, relocation, completedSlots) {
    if (!relocation?.sourceItems.length) {
        return assignment;
    }

    const movingOperatorSet = new Set(relocation.movingOperators || []);
    const sourceBySlot = new Map(relocation.sourceItems.map((item) => [item.slot, item]));
    const sourceOperatorSetBySlot = new Map(relocation.sourceItems.map((item) => [
        item.slot,
        new Set(item.chosen.map((entry) => entry.operator))
    ]));
    const targetsBySlot = new Map(relocation.targetItems.map((item) => [item.slot, item]));

    return assignment.map((item) => {
        if (completedSlots.has(item.slot)) {
            const sourceItem = sourceBySlot.get(item.slot);
            const sourceOperators = sourceOperatorSetBySlot.get(item.slot) || new Set();
            return {
                ...item,
                chosen: sourceItem?.chosen || item.chosen,
                isCompletedRelocationSource: true,
                completedSourceOperators: sourceOperators,
                relocationAllowedOperators: sourceOperators
            };
        }

        const target = targetsBySlot.get(item.slot);
        if (target) {
            const manualTargetOperators = selectedOperatorsForSlot(item.slot);
            const chosen = manualTargetOperators
                ? manualTargetOperators
                    .filter((operator) => movingOperatorSet.has(operator))
                    .map((operator) => {
                        const operatorIndex = PLANNER_OPERATORS.indexOf(operator);
                        return {
                            operator,
                            score: getMissionScore(item.mission, operator, operatorIndex >= 0 ? operatorIndex : 0, item.slot)
                        };
                    })
                : target.chosen;

            return {
                ...item,
                chosen,
                alternatives: target.alternatives || [],
                isRelocationTarget: true,
                relocationAllowedOperators: movingOperatorSet
            };
        }

        return {
            ...item,
            relocationAllowedOperators: movingOperatorSet
        };
    });
}

function renderEmptyState() {
    latestMissionAssignment = [];
    latestMissionExpected = new Map();
    plannerEls.assignment.innerHTML = '<p class="mission-empty">Escolha pelo menos uma miss\u00E3o para gerar a loca\u00E7\u00E3o.</p>';
    plannerEls.ranking.innerHTML = '<li class="mission-empty">Aguardando miss\u00F5es.</li>';
    plannerEls.copyText.value = "";
}

function renderMissionPlanner(selected) {
    if (!selected.length) {
        renderEmptyState();
        return;
    }

    const ranking = buildRanking(selected);
    const generatedAssignment = buildAssignment(selected);
    const completedSlots = completedMissionSlots();
    const baseAssignment = generatedAssignment;
    latestMissionExpected = new Map(baseAssignment.map((item) => [
        item.slot,
        {
            count: item.chosen.length,
            operators: item.chosen.map((entry) => entry.operator)
        }
    ]));
    const assignment = applyManualSelectionsToAssignment(baseAssignment.map((item) => ({
        ...item,
        alternatives: item.alternatives || []
    })));
    const relocation = completedSlots.size ? buildRelocationAssignment(assignment, completedSlots, baseAssignment) : null;
    const displayAssignment = buildRelocationDisplayAssignment(assignment, relocation, completedSlots);
    const relocationForText = relocation?.sourceItems.length
        ? {
            ...relocation,
            targetItems: displayAssignment.filter((item) => (
                !item.isCompletedRelocationSource
                && RELOCATION_TARGET_SLOTS.has(item.slot)
                && item.chosen.length
            ))
        }
        : null;
    latestMissionAssignment = displayAssignment;
    const operatorSlotMap = selectedOperatorSlotMap(displayAssignment.filter((item) => !item.isCompletedRelocationSource));

    plannerEls.assignment.innerHTML = displayAssignment.map((item) => `
        <article class="assignment-card${item.isCompletedRelocationSource ? " is-completed-relocation" : ""}${item.isRelocationTarget ? " is-relocation-target" : ""}">
            <div>
                <span>Miss\u00E3o ${item.slot}</span>
                <strong>${item.mission.name}</strong>
                <small>${item.points} pontos | ${item.reward}</small>
            </div>
            <div>
                <span>${missionSendLabel(item)}</span>
                <strong>${item.chosen.length ? `${item.chosen.length} enviados` : "N\u00E3o envia"}</strong>
                <small>${item.chosen.length ? `${formatScore(item.chosen.reduce((sum, entry) => sum + entry.score, 0))} pontos somados` : "Sem loca\u00E7\u00E3o nesta miss\u00E3o"}</small>
            </div>
            ${item.isCompletedRelocationSource ? '<p class="assignment-completed-note">Miss\u00E3o conclu\u00EDda. Operadores realocados automaticamente para o melhor destino.</p>' : ""}
            ${renderMissionOperatorPicker(item, item.isCompletedRelocationSource ? new Map() : operatorSlotMap)}
        </article>
    `).join("");

    plannerEls.ranking.innerHTML = ranking.slice(0, 8).map((entry) => `
        <li>
            <strong>${entry.operator}</strong>
            <span>${formatScore(entry.total)} pts</span>
            <small>Melhor em: ${entry.picks.slice(0, 2).map((pick) => `${pick.mission} (${formatScore(pick.score)})`).join(" / ")}</small>
        </li>
    `).join("");

    plannerEls.copyText.value = buildFullMissionText(assignment);

}

function buildCopyText(assignment) {
    const missionTime = plannerEls.timeSelect?.value || "09:00";
    const lines = [
        TEXT_COPY_TITLE,
        "",
        `${TEXT_CLOCK} In\u00EDcio: ${missionTime}`,
        ""
    ];

    assignment.forEach((item) => {
        lines.push(`*[ ${item.slot} ] ${item.mission.name.toUpperCase()}*`);
        if (item.chosen.length) {
            lines[lines.length - 1] += `: ${item.chosen.map((entry) => entry.operator).join(", ")}.`;
        } else {
            lines.push("SEM OPERADORES");
        }
        lines.push("");
    });

    lines.push(TEXT_COPY_FOOTER);

    return lines.join("\n");
}

function buildRelocationText(relocation) {
    const latestSourceItem = [...relocation.sourceItems]
        .sort((a, b) => b.slot - a.slot)[0];
    const lines = [
        TEXT_RELOCATION_TITLE,
        "",
        TEXT_RELOCATION_MOVEMENT,
        "",
        TEXT_RELOCATION_INSTRUCTIONS,
        "",
        TEXT_REMOVE_MISSION,
        ""
    ];

    if (latestSourceItem) {
        lines.push(`> ${TEXT_HOURGLASS}${TEXT_CHECK} [ ${latestSourceItem.slot} ]: *${missionTextName(latestSourceItem.mission)}.*`);
    }

    lines.push("", TEXT_ALLOCATE_NOW, "");

    if (relocation.targetItems.length) {
        relocation.targetItems.forEach((item) => {
            lines.push(`> [ ${item.slot} ] ${missionTextName(item.mission)}: ${item.chosen.map((entry) => entry.operator).join(", ")}.`);
        });
    } else {
        lines.push(TEXT_NO_PENDING_MISSION);
    }

    lines.push("", TEXT_COPY_FOOTER);

    return lines.join("\n");
}

function nextRelocationTargets(stateAssignment, sourceSlot) {
    return stateAssignment
        .filter((item) => (
            RELOCATION_TARGET_SLOTS.has(Number(item.slot))
            && Number(item.slot) > Number(sourceSlot)
            && item.send !== 0
        ))
        .map((item) => ({
            ...item,
            chosen: []
        }));
}

function buildRelocationStep(stateAssignment, sourceItem) {
    const targets = nextRelocationTargets(stateAssignment, sourceItem.slot);

    if (!sourceItem?.chosen?.length || !targets.length) {
        return null;
    }

    sourceItem.chosen.forEach((entry) => {
        const operatorIndex = PLANNER_OPERATORS.indexOf(entry.operator);
        const bestTarget = targets
            .map((item) => ({
                item,
                score: getMissionScore(item.mission, entry.operator, operatorIndex >= 0 ? operatorIndex : 0, item.slot)
            }))
            .sort((a, b) => compareRelocationTargets(entry.operator, a, b))[0];

        if (bestTarget) {
            bestTarget.item.chosen.push({
                operator: entry.operator,
                score: bestTarget.score
            });
        }
    });

    return {
        movingOperators: sourceItem.chosen.map((entry) => entry.operator),
        sourceItems: [sourceItem],
        targetItems: targets.filter((item) => item.chosen.length)
    };
}

function applyRelocationStepToState(stateAssignment, relocation) {
    if (!relocation?.sourceItems?.length) {
        return stateAssignment;
    }

    const sourceSlots = new Set(relocation.sourceItems.map((item) => Number(item.slot)));
    const targetBySlot = new Map(relocation.targetItems.map((item) => [Number(item.slot), item.chosen]));

    return stateAssignment.map((item) => {
        if (sourceSlots.has(Number(item.slot))) {
            return {
                ...item,
                chosen: []
            };
        }

        const added = targetBySlot.get(Number(item.slot));
        if (added?.length) {
            const currentOperators = new Set(item.chosen.map((entry) => entry.operator));
            return {
                ...item,
                chosen: [
                    ...item.chosen,
                    ...added.filter((entry) => !currentOperators.has(entry.operator))
                ]
            };
        }

        return item;
    });
}

function buildFullMissionText(initialAssignment) {
    const texts = [buildCopyText(initialAssignment)];
    let stateAssignment = initialAssignment.map((item) => ({
        ...item,
        chosen: item.chosen.map((entry) => ({ ...entry })),
        alternatives: item.alternatives || []
    }));

    stateAssignment
        .filter((item) => Number(item.slot) >= 1 && Number(item.slot) < 7 && item.chosen.length)
        .sort((a, b) => Number(a.slot) - Number(b.slot))
        .forEach((sourceRef) => {
            const sourceItem = stateAssignment.find((item) => Number(item.slot) === Number(sourceRef.slot));
            const relocation = buildRelocationStep(stateAssignment, sourceItem);

            if (!relocation?.targetItems?.length) {
                return;
            }

            texts.push(buildRelocationText(relocation));
            stateAssignment = applyRelocationStepToState(stateAssignment, relocation);
        });

    return texts.join("\n\n\n\n");
}

function updateMissionPlanner() {
    renderMissionPlanner(selectedMissions());
}

function handleMissionSelectChange(event) {
    const target = event?.target;
    const changedSlot = Number(target?.dataset?.slot);
    if (Number.isFinite(changedSlot)) {
        clearManualMissionSelections(changedSlot);
    }
    if (target?.classList?.contains("mission-operator-count")) {
        updateMissionCountOptions();
        const row = target.closest(".mission-row");
        const slotInfo = PLANNER_SLOTS.find((item) => item.slot === changedSlot);
        const count = Math.max(0, Number(target.value) || 0);
        const meta = row?.querySelector(".mission-meta em");
        if (meta && slotInfo) {
            meta.textContent = missionSendLabel({ ...slotInfo, send: count });
        }
    }
    updateMissionSelectOptions();
    updateMissionPlanner();
}

function handleMissionOperatorChoice(event) {
    const input = event.target.closest(".mission-operator-option input[type='checkbox']");
    if (!input || input.disabled) {
        return;
    }

    const slot = Number(input.dataset.slot);
    if (!Number.isFinite(slot)) {
        return;
    }

    if (input.checked) {
        forgetRemovedOperator(slot, input.dataset.operator);
    } else {
        rememberRemovedOperator(slot, input.dataset.operator);
    }

    const selectedOperators = [...plannerEls.assignment.querySelectorAll(`.mission-operator-option input[data-slot="${slot}"]:checked`)]
        .map((checkbox) => checkbox.dataset.operator)
        .filter((operator) => PLANNER_OPERATORS.includes(operator));

    manualMissionSelections[slot] = [...new Set(selectedOperators)];
    updateMissionPlanner();
}

async function handlePlannerUnlock(event) {
    event.preventDefault();

    const password = plannerEls.password.value.trim();
    if (!password) {
        plannerEls.message.textContent = "Digite a senha para continuar.";
        return;
    }

    if (!/^\d+$/.test(password)) {
        plannerEls.message.textContent = "A senha deve conter apenas n\u00FAmeros.";
        return;
    }

    const hash = await hashPlannerPassword(password);
    if (hash === PLANNER_PASSWORD_HASH) {
        plannerEls.message.textContent = "";
        unlockPlanner();
        return;
    }

    plannerEls.message.textContent = "Senha incorreta.";
}

function missionShareBlocks() {
    if (completedMissionSlots().size) {
        const selectedTargets = new Set(latestMissionAssignment
            .filter((item) => !item.isCompletedRelocationSource)
            .flatMap((item) => item.chosen.map((entry) => entry.operator)));
        const movingOperators = new Set(latestMissionAssignment
            .filter((item) => !item.isCompletedRelocationSource && item.relocationAllowedOperators instanceof Set)
            .flatMap((item) => [...item.relocationAllowedOperators]));
        const sourceItems = latestMissionAssignment.filter((item) => item.isCompletedRelocationSource && item.completedSourceOperators instanceof Set);

        return sourceItems
            .map((item) => {
                const missingOperators = [...item.completedSourceOperators]
                    .filter((operator) => movingOperators.has(operator) && !selectedTargets.has(operator));

                if (!missingOperators.length) {
                    return null;
                }

                return {
                    slot: item.slot,
                    missionName: item.mission.name,
                    missingCount: missingOperators.length,
                    missingOperators,
                    suggestions: missingOperators.map((operator) => suggestRelocationMission(operator)).filter(Boolean)
                };
            })
            .filter(Boolean);
    }

    const selectedAnywhere = new Set(latestMissionAssignment.flatMap((item) => (
        item.chosen.map((entry) => entry.operator)
    )));

    return latestMissionAssignment
        .filter((item) => item.send !== 0)
        .map((item) => {
            const expected = latestMissionExpected.get(item.slot) || { count: 0, operators: [] };
            const expectedCount = Math.max(0, Number(expected.count) || 0);
            const selectedOperators = item.chosen.map((entry) => entry.operator);
            const missingCount = Math.max(0, expectedCount - selectedOperators.length);
            const recentlyRemoved = recentRemovedOperatorsBySlot[String(item.slot)] || [];
            const missingOperators = recentlyRemoved
                .filter((operator) => !selectedAnywhere.has(operator))
                .slice(0, missingCount);

            if (selectedOperators.length >= expectedCount) {
                return null;
            }

            return {
                slot: item.slot,
                missionName: item.mission.name,
                missingCount,
                missingOperators
            };
        })
        .filter(Boolean);
}

function suggestRelocationMission(operator) {
    const completedSlots = completedMissionSlots();
    const targets = latestMissionAssignment.filter((item) => (
        !item.isCompletedRelocationSource
        && RELOCATION_TARGET_SLOTS.has(Number(item.slot))
        && !completedSlots.has(Number(item.slot))
        && item.send !== 0
    ));
    const operatorIndex = PLANNER_OPERATORS.indexOf(operator);

    return targets
        .map((item) => ({
            item,
            operator,
            slot: item.slot,
            missionName: item.mission.name,
            score: getMissionScore(item.mission, operator, operatorIndex >= 0 ? operatorIndex : 0, item.slot)
        }))
        .sort((a, b) => compareRelocationTargets(operator, a, b))[0] || null;
}

function missionShareBlockMessage(blocks) {
    return blocks.map((block) => {
        const missingLabel = block.missingOperators.length
            ? block.missingOperators.join(", ")
            : `${block.missingCount} operador${block.missingCount === 1 ? "" : "es"}`;
        const suggestions = block.suggestions?.length
            ? ` Sugest\u00E3o: ${block.suggestions.map((suggestion) => (
                `${suggestion.operator} > Miss\u00E3o ${suggestion.slot} (${suggestion.missionName}, ${formatScore(suggestion.score)} pts)`
            )).join("; ")}`
            : "";

        return `Miss\u00E3o ${block.slot} (${block.missionName}): ${missingLabel}.${suggestions}`;
    });
}

function missionShareBlockHtml(blocks) {
    return blocks.map((block) => {
        const missingLabel = block.missingOperators.length
            ? block.missingOperators.join(", ")
            : `${block.missingCount} operador${block.missingCount === 1 ? "" : "es"}`;
        const suggestions = block.suggestions || [];

        return `
            <li>
                <strong>Miss\u00E3o ${block.slot} (${escapeHtml(block.missionName)}): ${escapeHtml(missingLabel)}</strong>
                ${suggestions.length ? `
                    <span>Sugest\u00E3o de loca\u00E7\u00E3o</span>
                    ${suggestions.map((suggestion) => `
                        <small>${escapeHtml(suggestion.operator)} &gt; Miss\u00E3o ${suggestion.slot} (${escapeHtml(suggestion.missionName)}, ${formatScore(suggestion.score)} pts)</small>
                    `).join("")}
                ` : ""}
            </li>
        `;
    }).join("");
}

function closeMissionShareModal() {
    if (!plannerEls.shareModal) {
        return;
    }

    plannerEls.shareModal.hidden = true;
}

function showMissionShareModal(blocks) {
    const details = missionShareBlockMessage(blocks);
    const isRelocation = completedMissionSlots().size > 0;
    const intro = isRelocation
        ? "Falta realocar operador de missão concluída."
        : "Falta operador marcado para liberar o envio ao clã.";
    const instruction = isRelocation
        ? "Marque os operadores nas missões destino para liberar Copiar ou Compartilhar."
        : "Selecione nas respectivas missões para liberar Copiar ou Compartilhar.";

    if (!plannerEls.shareModal || !plannerEls.shareModalBody) {
        window.alert([
            intro,
            "",
            ...details,
            "",
            instruction
        ].join("\n"));
        return;
    }

    plannerEls.shareModalBody.innerHTML = `
        <p>${escapeHtml(intro)}</p>
        <ul>
            ${missionShareBlockHtml(blocks)}
        </ul>
        <p>${escapeHtml(instruction)}</p>
    `;
    plannerEls.shareModal.hidden = false;
    plannerEls.shareModalOk?.focus();
}

function validateMissionShareReady() {
    const blocks = missionShareBlocks();
    if (!blocks.length) {
        return true;
    }

    showMissionShareModal(blocks);
    return false;
}

async function copyMissionText() {
    if (!plannerEls.copyText.value.trim()) {
        return;
    }

    if (!validateMissionShareReady()) {
        return;
    }

    try {
        await navigator.clipboard.writeText(plannerEls.copyText.value);
    } catch (error) {
        plannerEls.copyText.focus();
        plannerEls.copyText.select();
        document.execCommand("copy");
        plannerEls.copyText.setSelectionRange(0, 0);
    }

    plannerEls.copyButton.textContent = "Copiado";
    setTimeout(() => {
        plannerEls.copyButton.textContent = "Copiar texto";
    }, 1300);
}

function shareMissionText() {
    const text = plannerEls.copyText.value.trim();
    if (!text) {
        return;
    }

    if (!validateMissionShareReady()) {
        return;
    }

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

function switchMissionTab(tabName) {
    plannerEls.tabs.forEach((tab) => {
        const active = tab.dataset.missionTab === tabName;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
    });

    plannerEls.tabPanels.forEach((panel) => {
        const active = panel.dataset.missionPanel === tabName;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
    });
}

function getOperatorEditorFilters() {
    return {
        query: normalizeLookupText(plannerEls.operatorSearchFilter?.value || ""),
        view: plannerEls.operatorViewFilter?.value || "all",
        mission: plannerEls.operatorMissionFilter?.value || ""
    };
}

function getOperatorScoreStats(scores) {
    const normalizedScores = scores.map((value) => Math.max(0, Number(value) || 0));
    const uniquePositiveScores = [...new Set(normalizedScores.filter((value) => value > 0))]
        .sort((a, b) => b - a);
    const bestScore = uniquePositiveScores[0] || 0;
    const goodScores = new Set(uniquePositiveScores.slice(1, 3));
    const worstPositiveScore = uniquePositiveScores.length > 1 ? uniquePositiveScores[uniquePositiveScores.length - 1] : 0;

    return {
        normalizedScores,
        bestScore,
        goodScores,
        worstPositiveScore,
        hasWeakScore: bestScore > worstPositiveScore && normalizedScores.some((score) => score === 0 || score === worstPositiveScore)
    };
}

function getOperatorScoreHighlightClass(stats, score) {
    const normalizedScore = Math.max(0, Number(score) || 0);

    if (normalizedScore > 0 && normalizedScore === stats.bestScore) {
        return "is-best-score";
    }

    if (normalizedScore > 0 && stats.goodScores.has(normalizedScore)) {
        return "is-good-score";
    }

    if (stats.bestScore > stats.worstPositiveScore && (normalizedScore === 0 || normalizedScore === stats.worstPositiveScore)) {
        return "is-low-score";
    }

    return "is-neutral-score";
}

function getOperatorMissionSummary(operator, data) {
    const scores = PLANNER_MISSIONS.map((mission) => Number(data.scores[mission.key]) || 0);
    const stats = getOperatorScoreStats(scores);
    const bestMissions = PLANNER_MISSIONS
        .filter((mission) => Number(data.scores[mission.key]) === stats.bestScore && stats.bestScore > 0)
        .map((mission) => mission.name);
    const weakMissions = PLANNER_MISSIONS
        .filter((mission) => getOperatorScoreHighlightClass(stats, data.scores[mission.key]) === "is-low-score")
        .map((mission) => mission.name);

    return {
        operator,
        stats,
        bestMissions,
        weakMissions,
        text: `${operator}: melhor em ${bestMissions.slice(0, 3).join(", ") || "sem destaque"} | fraco em ${weakMissions.slice(0, 4).join(", ") || "sem ponto fraco"}`
    };
}

function operatorMatchesEditorFilters(operator, data, summary, filters) {
    if (filters.query && !normalizeLookupText(operator).includes(filters.query)) {
        return false;
    }

    if (filters.mission) {
        const mission = missionByKey(filters.mission);
        const missionScore = Number(data.scores[filters.mission]) || 0;
        const missionClass = getOperatorScoreHighlightClass(summary.stats, missionScore);

        if (!mission || missionScore <= 0 || (missionClass !== "is-best-score" && missionClass !== "is-good-score")) {
            return false;
        }
    }

    if (filters.view === "missing-rank") {
        return !data.rank;
    }

    if (filters.view === "new") {
        return isLimitedAccessOperator(operator);
    }

    if (filters.view === "strong") {
        return summary.stats.bestScore >= 300;
    }

    if (filters.view === "weak") {
        return summary.weakMissions.length > 0;
    }

    return true;
}

function getSortedOperatorNames(filters) {
    const operators = [...PLANNER_OPERATORS];
    const sortKey = operatorEditorSort.key || filters.mission;

    if (!sortKey || !missionByKey(sortKey)) {
        return operators;
    }

    return operators.sort((first, second) => {
        const firstScore = Number(operatorData.operators[first]?.scores?.[sortKey]) || 0;
        const secondScore = Number(operatorData.operators[second]?.scores?.[sortKey]) || 0;
        const direction = operatorEditorSort.direction === "asc" ? 1 : -1;
        const scoreCompare = (firstScore - secondScore) * direction;

        return scoreCompare || first.localeCompare(second);
    });
}

function createMissionSortHeader(mission) {
    const active = operatorEditorSort.key === mission.key;
    const directionLabel = operatorEditorSort.direction === "asc" ? "crescente" : "decrescente";
    const indicator = active ? (operatorEditorSort.direction === "asc" ? " ↑" : " ↓") : "";

    return `<th><button type="button" class="operator-sort-button${active ? " is-active" : ""}" data-sort-mission="${escapeHtml(mission.key)}" aria-label="Ordenar ${escapeHtml(mission.name)} em ordem ${directionLabel}">${escapeHtml(mission.name)}${indicator}</button></th>`;
}

function renderOperatorEditor() {
    if (!plannerEls.operatorEditorHead || !plannerEls.operatorEditorBody) {
        return;
    }

    plannerEls.operatorEditorHead.innerHTML = `
        <tr>
            <th>Operador</th>
            <th>Patente</th>
            ${PLANNER_MISSIONS.map(createMissionSortHeader).join("")}
        </tr>
    `;

    const filters = getOperatorEditorFilters();
    const visibleOperators = [];

    plannerEls.operatorEditorBody.innerHTML = getSortedOperatorNames(filters).map((operator) => {
        const data = operatorData.operators[operator];
        const scores = PLANNER_MISSIONS.map((mission) => Number(data.scores[mission.key]) || 0);
        const stats = getOperatorScoreStats(scores);
        const summary = getOperatorMissionSummary(operator, data);
        const visible = operatorMatchesEditorFilters(operator, data, summary, filters);

        if (visible) {
            visibleOperators.push(operator);
        }

        return `
            <tr${visible ? "" : ' class="is-filtered-out"'}>
                <th>${escapeHtml(operator)}</th>
                <td><span class="operator-readonly-value">${escapeHtml(data.rank || "-")}</span></td>
                ${PLANNER_MISSIONS.map((mission) => {
                    const score = Number(data.scores[mission.key]) || 0;
                    const highlightClass = getOperatorScoreHighlightClass(stats, score);
                    const classAttribute = highlightClass ? ` class="${highlightClass}"` : "";
                    return `
                    <td${classAttribute}><span class="operator-readonly-score">${formatScore(score)}</span></td>
                `;
                }).join("")}
            </tr>
        `;
    }).join("");

}

function updateOperatorBestScoreHighlights(row) {
    const scoreInputs = [...row.querySelectorAll("input[data-mission]")];
    const scores = scoreInputs.map((input) => Math.max(0, Number.parseInt(input.value, 10) || 0));
    const stats = getOperatorScoreStats(scores);

    scoreInputs.forEach((input, index) => {
        const cell = input.closest("td");
        const highlightClass = getOperatorScoreHighlightClass(stats, scores[index]);

        cell?.classList.toggle("is-best-score", highlightClass === "is-best-score");
        cell?.classList.toggle("is-good-score", highlightClass === "is-good-score");
        cell?.classList.toggle("is-neutral-score", highlightClass === "is-neutral-score");
        cell?.classList.toggle("is-low-score", highlightClass === "is-low-score");
    });
}

function handleOperatorEditorInput(event) {
    const input = event.target.closest("input[data-mission]");

    if (!input) {
        return;
    }

    const row = input.closest("tr");
    if (row) {
        updateOperatorBestScoreHighlights(row);
    }
}

function handleOperatorEditorFilterChange() {
    operatorData = readOperatorEditorData();
    if (plannerEls.operatorMissionFilter?.value && !operatorEditorSort.key) {
        operatorEditorSort = { key: plannerEls.operatorMissionFilter.value, direction: "desc" };
    }
    renderOperatorEditor();
    setPlannerControlsEnabled(plannerUnlocked);
}

function handleOperatorEditorSortClick(event) {
    const button = event.target.closest("[data-sort-mission]");

    if (!button) {
        return;
    }

    const missionKey = button.dataset.sortMission;
    operatorData = readOperatorEditorData();
    operatorEditorSort = {
        key: missionKey,
        direction: operatorEditorSort.key === missionKey && operatorEditorSort.direction === "desc" ? "asc" : "desc"
    };
    renderOperatorEditor();
    setPlannerControlsEnabled(plannerUnlocked);
}

function readOperatorEditorData() {
    const nextData = mergeOperatorData(operatorData);

    plannerEls.operatorEditorBody.querySelectorAll("input[data-operator], select[data-operator]").forEach((control) => {
        const operator = control.dataset.operator;
        if (!nextData.operators[operator]) {
            return;
        }

        if (control.dataset.field === "rank") {
            nextData.operators[operator].rank = RANK_LEVELS.some((rank) => rank.value === control.value) ? control.value : "";
            return;
        }

        const missionKey = control.dataset.mission;
        if (missionKey) {
            const score = Number.parseInt(control.value, 10);
            nextData.operators[operator].scores[missionKey] = Number.isFinite(score) ? Math.max(0, score) : 0;
        }
    });

    return nextData;
}

function saveOperatorEditor() {
    operatorData = readOperatorEditorData();
    persistOperatorData();
    renderOperatorEditor();
    setPlannerControlsEnabled(plannerUnlocked);
    updateMissionPlanner();
    plannerEls.operatorEditorStatus.textContent = "Base salva. A locação já está usando as novas pontuações.";
}

function exportOperatorEditor() {
    operatorData = readOperatorEditorData();
    persistOperatorData();
    plannerEls.operatorDataTransfer.value = serializeOperatorData(operatorData);
    plannerEls.operatorDataTransfer.focus();
    plannerEls.operatorDataTransfer.select();
    plannerEls.operatorEditorStatus.textContent = "Base exportada. Copie o texto para atualizar a base raiz.";
}

function importOperatorEditor() {
    const rawData = plannerEls.operatorDataTransfer.value.trim();
    if (!rawData) {
        plannerEls.operatorEditorStatus.textContent = "Cole uma base exportada antes de importar.";
        return;
    }

    try {
        replaceOperatorData(JSON.parse(rawData));
        plannerEls.operatorEditorStatus.textContent = "Base importada e salva. A locação já foi recalculada.";
    } catch (error) {
        plannerEls.operatorEditorStatus.textContent = "Não consegui importar. Confira se o texto exportado está completo.";
    }
}

function resetOperatorEditor() {
    replaceOperatorData(createDefaultOperatorData());
    plannerEls.operatorEditorStatus.textContent = "Base restaurada para as pontuações originais.";
}

function clearMissionPlanner() {
    clearManualMissionSelections();
    plannerEls.rows.querySelectorAll(".mission-select").forEach((select) => {
        select.value = "";
    });
    plannerEls.rows.querySelectorAll(".mission-operator-count").forEach((select) => {
        select.value = "0";
        const slotInfo = PLANNER_SLOTS.find((item) => item.slot === Number(select.dataset.slot));
        const meta = select.closest(".mission-row")?.querySelector(".mission-meta em");
        if (meta && slotInfo) {
            meta.textContent = missionSendLabel({ ...slotInfo, send: 0 });
        }
    });
    updateMissionCountOptions();
    updateMissionSelectOptions();
    updateMissionPlanner();
}

function initOperatorPlanner() {
    const tool = document.getElementById("missionTool");
    if (!tool) {
        return;
    }

    plannerEls.lock = document.getElementById("missionLock");
    plannerEls.form = document.getElementById("missionUnlockForm");
    plannerEls.password = document.getElementById("missionPassword");
    plannerEls.message = document.getElementById("missionLockMessage");
    plannerEls.workbench = document.getElementById("missionWorkbench");
    plannerEls.timeSelect = document.getElementById("missionTimeSelect");
    plannerEls.rows = document.getElementById("missionRows");
    plannerEls.assignment = document.getElementById("missionAssignment");
    plannerEls.ranking = document.getElementById("missionRanking");
    plannerEls.copyText = document.getElementById("missionCopyText");
    plannerEls.copyButton = document.getElementById("copyMissionButton");
    plannerEls.shareButton = document.getElementById("shareMissionButton");
    plannerEls.shareModal = document.getElementById("missionShareModal");
    plannerEls.shareModalBody = document.getElementById("missionShareModalBody");
    plannerEls.shareModalClose = document.getElementById("missionShareModalClose");
    plannerEls.shareModalOk = document.getElementById("missionShareModalOk");
    plannerEls.clearButton = document.getElementById("clearMissionButton");
    plannerEls.tabs = [...tool.querySelectorAll(".mission-tab")];
    plannerEls.tabPanels = [...tool.querySelectorAll(".mission-tab-panel")];
    plannerEls.operatorPanel = tool.querySelector('[data-mission-panel="operators"]');
    plannerEls.operatorEditorHead = document.getElementById("operatorEditorHead");
    plannerEls.operatorEditorBody = document.getElementById("operatorEditorBody");
    plannerEls.operatorEditorStatus = document.getElementById("operatorEditorStatus");
    plannerEls.operatorDataTransfer = document.getElementById("operatorDataTransfer");
    plannerEls.operatorSearchFilter = document.getElementById("operatorSearchFilter");
    plannerEls.operatorViewFilter = document.getElementById("operatorViewFilter");
    plannerEls.operatorMissionFilter = document.getElementById("operatorMissionFilter");
    plannerEls.saveOperatorDataButton = document.getElementById("saveOperatorDataButton");
    plannerEls.exportOperatorDataButton = document.getElementById("exportOperatorDataButton");
    plannerEls.importOperatorDataButton = document.getElementById("importOperatorDataButton");
    plannerEls.resetOperatorDataButton = document.getElementById("resetOperatorDataButton");
    plannerEls.clanRosterGate = document.getElementById("clanRosterGate");
    plannerEls.clanRosterContent = document.getElementById("clanRosterContent");
    plannerEls.clanRosterUnlockForm = document.getElementById("clanRosterUnlockForm");
    plannerEls.clanRosterPassword = document.getElementById("clanRosterPassword");
    plannerEls.clanRosterLockMessage = document.getElementById("clanRosterLockMessage");
    plannerEls.clanRosterForm = document.getElementById("clanRosterForm");
    plannerEls.clanPlayerId = document.getElementById("clanPlayerId");
    plannerEls.clanPlayerName = document.getElementById("clanPlayerName");
    plannerEls.clanPlayerNick = document.getElementById("clanPlayerNick");
    plannerEls.clanPlayerWhatsapp = document.getElementById("clanPlayerWhatsapp");
    plannerEls.saveClanPlayerButton = document.getElementById("saveClanPlayerButton");
    plannerEls.clearClanPlayerFormButton = document.getElementById("clearClanPlayerFormButton");
    plannerEls.exportClanRosterButton = document.getElementById("exportClanRosterButton");
    plannerEls.importClanRosterButton = document.getElementById("importClanRosterButton");
    plannerEls.copyClanRosterButton = document.getElementById("copyClanRosterButton");
    plannerEls.clanRosterSearch = document.getElementById("clanRosterSearch");
    plannerEls.clanRosterStatus = document.getElementById("clanRosterStatus");
    plannerEls.clanRosterTransfer = document.getElementById("clanRosterTransfer");
    plannerEls.clanRosterBody = document.getElementById("clanRosterBody");

    loadOperatorData();
    createMissionTimes();
    createOperatorMissionFilter();
    createMissionRows();
    renderOperatorEditor();
    setPlannerControlsEnabled(false);
    plannerEls.form.addEventListener("submit", handlePlannerUnlock);
    plannerEls.workbench.addEventListener("click", (event) => {
        if (!plannerUnlocked && event.target.closest("select, button, .mission-row")) {
            showPlannerLockedNotice();
        }
    }, true);
    plannerEls.timeSelect?.addEventListener("change", updateMissionPlanner);
    plannerEls.rows?.addEventListener("change", handleMissionSelectChange);
    plannerEls.rows?.addEventListener("click", handleMissionChoiceClick);
    plannerEls.assignment?.addEventListener("change", handleMissionOperatorChoice);
    plannerEls.clearButton?.addEventListener("click", clearMissionPlanner);
    plannerEls.copyButton?.addEventListener("click", copyMissionText);
    plannerEls.shareButton?.addEventListener("click", shareMissionText);
    plannerEls.shareModalClose?.addEventListener("click", closeMissionShareModal);
    plannerEls.shareModalOk?.addEventListener("click", closeMissionShareModal);
    plannerEls.shareModal?.addEventListener("click", (event) => {
        if (event.target === plannerEls.shareModal) {
            closeMissionShareModal();
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMissionChoiceWidgets();
        }
        if (event.key === "Escape" && plannerEls.shareModal && !plannerEls.shareModal.hidden) {
            closeMissionShareModal();
        }
    });
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".mission-choice-widget")) {
            closeMissionChoiceWidgets();
        }
    });
    window.addEventListener("resize", repositionOpenMissionChoiceWidget);
    window.addEventListener("scroll", repositionOpenMissionChoiceWidget, true);
    plannerEls.tabs.forEach((tab) => {
        tab.addEventListener("click", () => switchMissionTab(tab.dataset.missionTab));
    });
    plannerEls.saveOperatorDataButton?.addEventListener("click", saveOperatorEditor);
    plannerEls.exportOperatorDataButton?.addEventListener("click", exportOperatorEditor);
    plannerEls.importOperatorDataButton?.addEventListener("click", importOperatorEditor);
    plannerEls.resetOperatorDataButton?.addEventListener("click", resetOperatorEditor);
    plannerEls.operatorEditorBody?.addEventListener("input", handleOperatorEditorInput);
    plannerEls.operatorEditorHead?.addEventListener("click", handleOperatorEditorSortClick);
    plannerEls.operatorSearchFilter?.addEventListener("input", handleOperatorEditorFilterChange);
    plannerEls.operatorViewFilter?.addEventListener("change", handleOperatorEditorFilterChange);
    plannerEls.operatorMissionFilter?.addEventListener("change", handleOperatorEditorFilterChange);
    plannerEls.clanRosterUnlockForm?.addEventListener("submit", unlockClanRoster);
    plannerEls.clanRosterForm?.addEventListener("submit", saveClanPlayer);
    plannerEls.clearClanPlayerFormButton?.addEventListener("click", clearClanRosterForm);
    plannerEls.exportClanRosterButton?.addEventListener("click", exportClanRoster);
    plannerEls.importClanRosterButton?.addEventListener("click", importClanRoster);
    plannerEls.copyClanRosterButton?.addEventListener("click", copyClanRosterList);
    plannerEls.clanRosterSearch?.addEventListener("input", renderClanRoster);
    plannerEls.clanRosterBody?.addEventListener("click", handleClanRosterAction);

    renderEmptyState();
}

document.addEventListener("DOMContentLoaded", initOperatorPlanner);



