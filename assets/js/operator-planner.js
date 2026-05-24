const PLANNER_PASSWORD_SALT = "blastoise-burn-operator-tool-v1";
const PLANNER_PASSWORD_HASH = "d8b5f6f84b2839d58d614e239fa1715620ad23d3ed733e46178db2c0ae37fb22";
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

const LIMITED_ACCESS_OPERATORS = new Set(["WOLF", "FERRY", "SUSSURRO", "CRAIG", "KIRIN", "RAY", "LENS"]);
const LIMITED_ACCESS_RESERVED_UNTIL_SLOT = 5;
const OPERATOR_DATA_STORAGE_KEY = "blastoise.operatorData.v3";
const CLAN_ROSTER_STORAGE_KEY = "blastoise.clanRoster.v1";
const DEFAULT_CLAN_ROSTER_NICKS = [
    "[△665]¹¹ChapoTRUE♛",
    "[△665]23core",
    "[△665]2ezEloy",
    "[△665]AbsolutCinema",
    "[△665]Alonso",
    "[△665]AngelTRUE",
    "[△665]Assassin†.",
    "[△665]BẮTTōu_ŚẤ†burn",
    "[△665]BAGACERA",
    "[△665]BLΛƧTOIZΣburn",
    "[△665]BOB MAICON",
    "[△665]Burn",
    "[△665]CACTO&POEIRA",
    "[△665]Caneco",
    "[△665]Capiroto◇core",
    "[△665]cbpjHO",
    "[△665]CeeJooTaa",
    "[△665]CHALA-YOUTOBA",
    "[△665]CMDTRUE",
    "[△665]danyBlood",
    "[△665]Delta Mata",
    "[△665]Delta Sioux",
    "[△665]D♛NZO⁴²⁰",
    "[△665]EFEITOESTUFA",
    "[△665]evertonTaguai",
    "[△665]Єxþloƶivᵉburn",
    "[△665]FLPWAR",
    "[△665]Fumaça",
    "[△665]Garou-D.",
    "[△665]HERO10",
    "[△665]ICE",
    "[△665]Idiotpay2win",
    "[△665]JOETRUE",
    "[△665]KANGTRUE",
    "[△665]KBçaDBiLola",
    "[△665]Kogdoi-D",
    "[△665]MATAboots",
    "[△665]Matrixcore",
    "[△665]NoobMaster",
    "[△665]N°ôhdaLund",
    "[△665]Oooops△force",
    "[△665]Peaél⊙?e",
    "[△665]Pirata",
    "[△665]RAMAcore",
    "[△665]Redfield★core",
    "[△665]Rickø",
    "[△665]Seukuzincore",
    "[△665]t.a.n.j.i.rō",
    "[△665]THRAGGburn",
    "[△665]TIO",
    "[△665]TNTfresa",
    "[△665]VaiTomarSuaCu",
    "[△665]VI₦Ç₳ÐØRcore",
    "[△665]Weis",
    "[△665]Ximenão",
    "[△665]ZEЯØMEIA⁶⁶⁵",
    "[△665]ZOE",
    "[△665]ⓚⓘⓡⓚ—デ——",
    "[△665]ΣNIGMΛVRGs",
    "[△665]△⁶⁶⁵Ç₳ĪØ$V",
    "[△665]░⌂➒⊂oldįgR†",
    "[△665]《《ROCK》》",
    "[△665]万日爪乃尺卆burn",
    "[△665]山モモ刀boots",
    "[△665]—デ══ИΞΦburn"
];
const DEFAULT_CLAN_ROSTER_NAMES = {
    "[△665]BLΛƧTOIZΣburn": "RAFAEL",
    "[△665]BOB MAICON": "MAICON",
    "[△665]Delta Sioux": "ADRIANO",
    "[△665]RAMAcore": "RAMA",
    "[△665]VI₦Ç₳ÐØRcore": "LEO"
};
const DEFAULT_CLAN_ROSTER_WHATSAPP = {
    "[△665]BLΛƧTOIZΣburn": "32998418361",
    "[△665]BOB MAICON": "555194676225",
    "[△665]Delta Sioux": "5511993745723",
    "[△665]RAMAcore": "558588785152",
    "[△665]VI₦Ç₳ÐØRcore": "554891592539"
};
const CLAN_ROSTER_FEATURED = {
    "[△665]Delta Sioux": { role: "ADM", order: 1 },
    "[△665]Matrixcore": { role: "VP", order: 2 },
    "[△665]BLΛƧTOIZΣburn": { role: "VP", order: 3 },
    "[△665]RAMAcore": { role: "VP", order: 4 },
    "[△665]MATAboots": { role: "VP", order: 5 },
    "[△665]Delta Mata": { role: "VP", order: 6 },
    "[△665]23core": { role: "VP", order: 7 },
    "[△665]TIO": { role: "VP", order: 8 },
    "[△665]Redfield★core": { role: "VP", order: 9 },
    "[△665]Capiroto◇core": { role: "VP", order: 10 }
};
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
let importedAssignment = null;
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

    plannerEls.rows.querySelectorAll(".mission-status-button").forEach((button) => {
        button.disabled = !enabled;
    });

    if (plannerEls.timeSelect) {
        plannerEls.timeSelect.disabled = !enabled;
    }

    if (plannerEls.lastMissionText) {
        plannerEls.lastMissionText.disabled = !enabled;
    }

    [plannerEls.clearButton, plannerEls.copyButton, plannerEls.shareButton, plannerEls.importButton, plannerEls.saveOperatorDataButton, plannerEls.exportOperatorDataButton, plannerEls.importOperatorDataButton, plannerEls.resetOperatorDataButton].forEach((button) => {
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
}

function createMissionTimes() {
    if (!plannerEls.timeSelect) {
        return;
    }

    plannerEls.timeSelect.innerHTML = MISSION_TIMES.map((time) => (
        `<option value="${time}">${time}</option>`
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
        '<option value="">Selecione</option>',
        ...PLANNER_MISSIONS
            .filter((mission) => mission.key === currentValue || !selectedValues.has(mission.key))
            .map((mission) => `<option value="${mission.key}">${mission.name}</option>`)
    ].join("");
}

function createMissionRows() {
    const options = createMissionOptions();

    plannerEls.rows.innerHTML = PLANNER_SLOTS.map((item) => `
        <div class="mission-row">
            <span class="mission-slot">#${item.slot}</span>
            <span class="mission-meta">
                <strong>${item.points}</strong>
                <small>${item.reward}</small>
                <em>${missionSendLabel(item)}</em>
            </span>
            <select class="mission-select" data-slot="${item.slot}" disabled>
                ${options}
            </select>
            <button type="button" class="mission-status-button" data-state="pending" disabled>Pendente</button>
        </div>
    `).join("");
}

function updateMissionSelectOptions() {
    const selects = [...plannerEls.rows.querySelectorAll(".mission-select")];
    const selectedValues = new Set(selects.map((select) => select.value).filter(Boolean));

    selects.forEach((select) => {
        const currentValue = select.value;
        select.innerHTML = createMissionOptions(currentValue, selectedValues);
        select.value = currentValue;
    });
}

function missionSendLabel(item) {
    if (item.send === 0) {
        return "Sem operador";
    }

    if (item.send === "remaining") {
        return "Sobras";
    }

    return `${item.send} operadores`;
}

function selectedMissions() {
    return [...plannerEls.rows.querySelectorAll(".mission-select")]
        .map((select) => {
            const mission = missionByKey(select.value);
            const slotInfo = PLANNER_SLOTS.find((item) => item.slot === Number(select.dataset.slot));
            return mission ? { ...slotInfo, mission } : null;
        })
        .filter(Boolean);
}

function completedMissionSlots() {
    return new Set([...plannerEls.rows.querySelectorAll(".mission-status-button[data-state='done']")]
        .map((button) => Number(button.closest(".mission-row")?.querySelector(".mission-select")?.dataset.slot))
        .filter(Boolean));
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

function mergeDefaultClanRoster(players) {
    const merged = [...players];
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
            name: String(player.name || DEFAULT_CLAN_ROSTER_NAMES[player.nick] || "").trim(),
            nick: String(player.nick || "").trim(),
            whatsapp: normalizeClanPhone(player.whatsapp || DEFAULT_CLAN_ROSTER_WHATSAPP[player.nick])
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
        plannerEls.clanRosterBody.innerHTML = '<tr><td colspan="4" class="clan-roster-empty">Nenhum jogador cadastrado.</td></tr>';
        return;
    }

    plannerEls.clanRosterBody.innerHTML = players.map((player) => {
        const digits = whatsappDigits(player.whatsapp);
        const whatsappLink = digits ? `https://wa.me/${digits}` : "";
        const whatsappButton = whatsappLink
            ? `<a class="clan-roster-action" href="${escapeHtml(whatsappLink)}" target="_blank" rel="noopener noreferrer">Zap</a>`
            : '<span class="clan-roster-action is-disabled">Pendente</span>';
        const featured = getClanFeaturedInfo(player);
        const rowClass = featured ? " class=\"is-featured\"" : "";
        const roleBadge = featured ? `<span class="clan-role-badge clan-role-${featured.role.toLowerCase()}">${featured.role}</span>` : "";
        return `
            <tr${rowClass}>
                <td>${escapeHtml(player.name || "-")}</td>
                <th>${roleBadge}${escapeHtml(player.nick)}</th>
                <td>${escapeHtml(formatClanPhone(player.whatsapp))}</td>
                <td>
                    <div class="clan-roster-row-actions">
                        ${whatsappButton}
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
    importedAssignment = null;
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

function scoreMission(mission) {
    return PLANNER_OPERATORS
        .map((operator, index) => ({
            operator,
            score: getMissionScore(mission, operator, index)
        }))
        .sort((a, b) => b.score - a.score || a.operator.localeCompare(b.operator));
}

function getMissionScore(mission, operator, index) {
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

    return b.score - a.score || a.item.slot - b.item.slot;
}

function buildRanking(selected) {
    return PLANNER_OPERATORS
        .map((operator, index) => {
            const picks = selected
                .map((item) => ({
                    mission: item.mission.name,
                    slot: item.slot,
                    score: getMissionScore(item.mission, operator, index)
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
            score: getMissionScore(item.mission, operator, index)
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
        remainingSlot.chosen = scoreMission(remainingSlot.mission)
            .filter((entry) => !used.has(entry.operator));
        remainingSlot.chosen.forEach((entry) => used.add(entry.operator));
    }

    assignment.forEach((item) => {
        item.alternatives = scoreMission(item.mission)
            .filter((entry) => !used.has(entry.operator) && !item.chosen.some((chosen) => chosen.operator === entry.operator))
            .slice(0, 3);
    });

    return assignment;
}

function parseMissionText(text) {
    const lines = String(text || "")
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);
    const parsed = [];

    lines.forEach((line) => {
        const cleanLine = line.replace(/^>\s*/, "");
        const match = cleanLine.match(/^\*?\[\s*(\d+)\s*\]\s*([^:*]+?)\*?\s*(?::\s*(.*))?$/i);

        if (!match) {
            return;
        }

        const slot = Number(match[1]);
        const mission = missionByTextName(match[2]);

        if (!mission) {
            return;
        }

        const operatorsText = (match[3] || "").replace(/\*/g, "").replace(/\.$/, "");
        const chosen = operatorsText && !/SEM OPERADORES/i.test(operatorsText)
            ? operatorsText.split(",")
                .map((operator) => operatorByTextName(operator.replace(/\.$/, "")))
                .filter(Boolean)
                .map((operator, index) => ({
                    operator,
                    score: getMissionScore(mission, operator, PLANNER_OPERATORS.indexOf(operator) >= 0 ? PLANNER_OPERATORS.indexOf(operator) : index)
                }))
            : [];
        const slotInfo = PLANNER_SLOTS.find((item) => item.slot === slot);

        if (slotInfo) {
            parsed.push({
                ...slotInfo,
                mission,
                chosen,
                alternatives: []
            });
        }
    });

    return parsed;
}

function importMissionText() {
    const parsed = parseMissionText(plannerEls.lastMissionText.value);

    if (!parsed.length) {
        plannerEls.importMessage.textContent = "N\u00E3o encontrei miss\u00F5es v\u00E1lidas no texto colado.";
        return;
    }

    importedAssignment = parsed;
    plannerEls.rows.querySelectorAll(".mission-select").forEach((select) => {
        const item = parsed.find((entry) => entry.slot === Number(select.dataset.slot));
        select.value = item?.mission.key || "";
    });
    plannerEls.rows.querySelectorAll(".mission-status-button").forEach((button) => {
        button.dataset.state = "pending";
        button.textContent = "Pendente";
    });
    updateMissionSelectOptions();
    updateMissionPlanner();
    plannerEls.importMessage.textContent = `${parsed.length} miss\u00F5es importadas. Marque como conclu\u00EDdas as miss\u00F5es finalizadas.`;
}

function buildRelocationAssignment(baseAssignment, completedSlots) {
    const movingOperators = [];
    const sourceItems = baseAssignment.filter((item) => completedSlots.has(item.slot) && item.chosen.length);
    const targetItems = selectedMissions().filter((item) => !completedSlots.has(item.slot) && item.send !== 0);

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
                score: getMissionScore(item.mission, operator, operatorIndex >= 0 ? operatorIndex : 0)
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
        sourceItems,
        targetItems: targets.filter((item) => item.chosen.length)
    };
}

function renderEmptyState() {
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
    const baseAssignment = importedAssignment?.length ? importedAssignment : generatedAssignment;
    const assignment = baseAssignment.map((item) => ({
        ...item,
        alternatives: item.alternatives || []
    }));
    const relocation = completedSlots.size ? buildRelocationAssignment(assignment, completedSlots) : null;

    plannerEls.assignment.innerHTML = assignment.map((item) => `
        <article class="assignment-card">
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
            <p>${item.chosen.length ? item.chosen.map((entry) => `${entry.operator} (${formatScore(entry.score)})`).join(", ") : "Miss\u00E3o ignorada no envio de operadores."}</p>
            <p>Alternativas: ${item.alternatives.length ? item.alternatives.map((alt) => `${alt.operator} (${formatScore(alt.score)})`).join(", ") : "sem operadores dispon\u00EDveis"}</p>
        </article>
    `).join("");

    plannerEls.ranking.innerHTML = ranking.slice(0, 8).map((entry) => `
        <li>
            <strong>${entry.operator}</strong>
            <span>${formatScore(entry.total)} pts</span>
            <small>Melhor em: ${entry.picks.slice(0, 2).map((pick) => `${pick.mission} (${formatScore(pick.score)})`).join(" / ")}</small>
        </li>
    `).join("");

    plannerEls.copyText.value = relocation?.sourceItems.length
        ? buildRelocationText(relocation)
        : buildCopyText(assignment, ranking);
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
    const lines = [
        TEXT_RELOCATION_TITLE,
        "",
        TEXT_RELOCATION_MOVEMENT,
        "",
        TEXT_RELOCATION_INSTRUCTIONS,
        "",
        relocation.sourceItems.length > 1 ? TEXT_REMOVE_MISSIONS : TEXT_REMOVE_MISSION,
        ""
    ];

    relocation.sourceItems.forEach((item) => {
        lines.push(`> ${TEXT_HOURGLASS}${TEXT_CHECK} [ ${item.slot} ]: *${missionTextName(item.mission)}.*`);
    });

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

function updateMissionPlanner() {
    renderMissionPlanner(selectedMissions());
}

function handleMissionSelectChange() {
    importedAssignment = null;
    if (plannerEls.importMessage) {
        plannerEls.importMessage.textContent = "";
    }
    updateMissionSelectOptions();
    updateMissionPlanner();
}

function handleMissionStatusClick(event) {
    const button = event.target.closest(".mission-status-button");
    if (!button || button.disabled) {
        return;
    }

    const isDone = button.dataset.state === "done";
    button.dataset.state = isDone ? "pending" : "done";
    button.textContent = isDone ? "Pendente" : "Conclu\u00EDdo";
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

async function copyMissionText() {
    if (!plannerEls.copyText.value.trim()) {
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
                <td><select data-operator="${escapeHtml(operator)}" data-field="rank" disabled>${createRankOptions(data.rank)}</select></td>
                ${PLANNER_MISSIONS.map((mission) => {
                    const score = Number(data.scores[mission.key]) || 0;
                    const highlightClass = getOperatorScoreHighlightClass(stats, score);
                    const classAttribute = highlightClass ? ` class="${highlightClass}"` : "";
                    return `
                    <td${classAttribute}><input type="number" min="0" step="1" data-operator="${escapeHtml(operator)}" data-mission="${escapeHtml(mission.key)}" value="${score}" disabled></td>
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
    importedAssignment = null;
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
    importedAssignment = null;
    plannerEls.rows.querySelectorAll(".mission-select").forEach((select) => {
        select.value = "";
    });
    plannerEls.rows.querySelectorAll(".mission-status-button").forEach((button) => {
        button.dataset.state = "pending";
        button.textContent = "Pendente";
    });
    if (plannerEls.lastMissionText) {
        plannerEls.lastMissionText.value = "";
    }
    if (plannerEls.importMessage) {
        plannerEls.importMessage.textContent = "";
    }
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
    plannerEls.clearButton = document.getElementById("clearMissionButton");
    plannerEls.lastMissionText = document.getElementById("lastMissionText");
    plannerEls.importButton = document.getElementById("importMissionButton");
    plannerEls.importMessage = document.getElementById("missionImportMessage");
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
    loadClanRoster();
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
    plannerEls.timeSelect.addEventListener("change", updateMissionPlanner);
    plannerEls.rows.addEventListener("change", handleMissionSelectChange);
    plannerEls.rows.addEventListener("click", handleMissionStatusClick);
    plannerEls.importButton.addEventListener("click", importMissionText);
    plannerEls.clearButton.addEventListener("click", clearMissionPlanner);
    plannerEls.copyButton.addEventListener("click", copyMissionText);
    plannerEls.shareButton.addEventListener("click", shareMissionText);
    plannerEls.tabs.forEach((tab) => {
        tab.addEventListener("click", () => switchMissionTab(tab.dataset.missionTab));
    });
    plannerEls.saveOperatorDataButton.addEventListener("click", saveOperatorEditor);
    plannerEls.exportOperatorDataButton.addEventListener("click", exportOperatorEditor);
    plannerEls.importOperatorDataButton.addEventListener("click", importOperatorEditor);
    plannerEls.resetOperatorDataButton.addEventListener("click", resetOperatorEditor);
    plannerEls.operatorEditorBody.addEventListener("input", handleOperatorEditorInput);
    plannerEls.operatorEditorHead.addEventListener("click", handleOperatorEditorSortClick);
    plannerEls.operatorSearchFilter.addEventListener("input", handleOperatorEditorFilterChange);
    plannerEls.operatorViewFilter.addEventListener("change", handleOperatorEditorFilterChange);
    plannerEls.operatorMissionFilter.addEventListener("change", handleOperatorEditorFilterChange);
    plannerEls.clanRosterUnlockForm.addEventListener("submit", unlockClanRoster);
    plannerEls.clanRosterForm.addEventListener("submit", saveClanPlayer);
    plannerEls.clearClanPlayerFormButton.addEventListener("click", clearClanRosterForm);
    plannerEls.exportClanRosterButton.addEventListener("click", exportClanRoster);
    plannerEls.importClanRosterButton.addEventListener("click", importClanRoster);
    plannerEls.copyClanRosterButton.addEventListener("click", copyClanRosterList);
    plannerEls.clanRosterSearch.addEventListener("input", renderClanRoster);
    plannerEls.clanRosterBody.addEventListener("click", handleClanRosterAction);

    renderEmptyState();
}

document.addEventListener("DOMContentLoaded", initOperatorPlanner);



