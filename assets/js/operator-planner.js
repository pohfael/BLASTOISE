const PLANNER_PASSWORD_SALT = "blastoise-burn-operator-tool-v1";
const PLANNER_PASSWORD_HASH = "d8b5f6f84b2839d58d614e239fa1715620ad23d3ed733e46178db2c0ae37fb22";

const PLANNER_OPERATORS = [
    "VARG",
    "DAVID",
    "SYNDROME",
    "JOE",
    "VALERA",
    "CAPISCE",
    "KLAUS",
    "SHI",
    "VICTOR",
    "SPENCER",
    "TRAVIS",
    "BATYA",
    "HAWK",
    "JASON",
    "BORIS",
    "THOR",
    "RICK",
    "MISHKA",
    "ROOKIE",
    "SNEK",
    "DIANA",
    "MIRO",
    "MIA",
    "MCMEAN",
    "LENS",
    "JB",
    "DUTCH",
    "RAY",
    "ZLOY",
    "CHARON",
    "APOLLON",
    "SUSSURRO",
    "CHEN LI",
    "CHATON",
    "MOSES",
    "F?NIX",
    "OWEN",
    "KIRIN",
    "DMITRY",
    "FERRY",
    "CRAIG",
    "WOLF"
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
    APOLLON: { incomum: 160, hildr: 100 },
    SUSSURRO: { incomum: 155, hildr: 100 },
    "CHEN LI": { hildr: 180 },
    CHATON: { hildr: 175 },
    MOSES: { hildr: 170 },
    "FÊNIX": { hildr: 165 },
    OWEN: { hildr: 160 },
    KIRIN: { hildr: 155 },
    DMITRY: { hildr: 150 },
    FERRY: { hildr: 145 },
    CRAIG: { hildr: 140 },
    WOLF: { hildr: 135 }
};

const UPDATED_MISSION_SCORES = {
    "baioneta": {
        "CHEN LI": 496,
        "THOR": 355,
        "VALERA": 355,
        "JASON": 355,
        "CRAIG": 370,
        "TRAVIS": 352,
        "SPENCER": 341,
        "MIRO": 280,
        "DUTCH": 280,
        "MOSES": 280,
        "WOLF": 280,
        "DIANA": 253,
        "SNEK": 250,
        "JB": 234,
        "ZLOY": 231,
        "RAY": 231,
        "CHARON": 231,
        "BORIS": 229,
        "APOLLON": 218,
        "VICTOR": 203,
        "DMITRY": 202,
        "F?NIX": 195,
        "OWEN": 192,
        "JOE": 192,
        "DAVID": 192,
        "VARG": 189,
        "FERRY": 185,
        "SHI": 184,
        "CAPISCE": 181,
        "MISHKA": 178,
        "ROOKIE": 178,
        "HAWK": 178,
        "MCMEAN": 173,
        "RICK": 149,
        "SUSSURRO": 108,
        "KIRIN": 108,
        "MIA": 88,
        "LENS": 55
    },
    "basica": {
        "TRAVIS": 511,
        "MIRO": 433,
        "MOSES": 433,
        "CHEN LI": 433,
        "DUTCH": 433,
        "WOLF": 433,
        "DIANA": 391,
        "SNEK": 386,
        "JB": 363,
        "CHARON": 358,
        "RAY": 358,
        "ZLOY": 358,
        "BORIS": 351,
        "APOLLON": 338,
        "VICTOR": 311,
        "THOR": 310,
        "VALERA": 310,
        "JASON": 310,
        "DMITRY": 312,
        "KLAUS": 307,
        "CRAIG": 323,
        "BATYA": 302,
        "SYNDROME": 302,
        "F?NIX": 302,
        "OWEN": 298,
        "SPENCER": 298,
        "JOE": 298,
        "DAVID": 298,
        "VARG": 294,
        "FERRY": 286,
        "SHI": 283,
        "CAPISCE": 282,
        "MISHKA": 275,
        "ROOKIE": 275,
        "HAWK": 274,
        "MCMEAN": 270,
        "RICK": 230,
        "SUSSURRO": 167,
        "KIRIN": 167,
        "MIA": 137,
        "LENS": 85
    },
    "brecha": {
        "DUTCH": 496,
        "MOSES": 496,
        "SYNDROME": 346,
        "VICTOR": 352,
        "DMITRY": 358,
        "ZLOY": 410,
        "CRAIG": 370,
        "DAVID": 341,
        "FERRY": 328,
        "MIRO": 280,
        "CHEN LI": 280,
        "WOLF": 280,
        "DIANA": 253,
        "SNEK": 250,
        "JB": 234,
        "CHARON": 231,
        "RAY": 231,
        "APOLLON": 218,
        "TRAVIS": 203,
        "BORIS": 229,
        "KLAUS": 200,
        "BATYA": 197,
        "VALERA": 199,
        "JASON": 199,
        "F?NIX": 195,
        "THOR": 199,
        "SPENCER": 192,
        "JOE": 192,
        "OWEN": 192,
        "VARG": 189,
        "SHI": 184,
        "CAPISCE": 181,
        "MISHKA": 178,
        "ROOKIE": 178,
        "HAWK": 178,
        "MCMEAN": 173,
        "RICK": 149,
        "SUSSURRO": 108,
        "KIRIN": 108,
        "MIA": 88,
        "LENS": 55
    },
    "habitantes": {
        "MIRO": 496,
        "WOLF": 496,
        "JOE": 341,
        "BATYA": 341,
        "HAWK": 310,
        "MISHKA": 324,
        "CAPISCE": 323,
        "SYNDROME": 346,
        "CHEN LI": 280,
        "DUTCH": 280,
        "MOSES": 280,
        "DIANA": 253,
        "SNEK": 250,
        "JB": 234,
        "ZLOY": 231,
        "CHARON": 231,
        "RAY": 231,
        "BORIS": 229,
        "APOLLON": 218,
        "CRAIG": 209,
        "TRAVIS": 203,
        "VICTOR": 203,
        "DMITRY": 202,
        "KLAUS": 200,
        "THOR": 199,
        "VALERA": 199,
        "JASON": 199,
        "F?NIX": 195,
        "SPENCER": 192,
        "OWEN": 192,
        "DAVID": 192,
        "VARG": 189,
        "FERRY": 185,
        "SHI": 184,
        "ROOKIE": 178,
        "MCMEAN": 173,
        "RICK": 149,
        "SUSSURRO": 108,
        "KIRIN": 108,
        "MIA": 88,
        "LENS": 55
    },
    "limpeza": {
        "MIRO": 496,
        "DIANA": 449,
        "SNEK": 443,
        "JB": 416,
        "MCMEAN": 309,
        "THOR": 355,
        "JOE": 341,
        "MOSES": 280,
        "CHEN LI": 280,
        "DUTCH": 280,
        "WOLF": 280,
        "CHARON": 231,
        "RAY": 231,
        "ZLOY": 231,
        "BORIS": 229,
        "APOLLON": 218,
        "CRAIG": 209,
        "TRAVIS": 203,
        "VICTOR": 203,
        "KLAUS": 200,
        "VALERA": 199,
        "JASON": 199,
        "F?NIX": 195,
        "SYNDROME": 194,
        "SPENCER": 192,
        "OWEN": 192,
        "DAVID": 192,
        "VARG": 189,
        "FERRY": 185,
        "HAWK": 178,
        "MISHKA": 178,
        "ROOKIE": 178,
        "CAPISCE": 181,
        "RICK": 149,
        "SUSSURRO": 108,
        "KIRIN": 108,
        "MIA": 88,
        "LENS": 55
    },
    "incomum": {
        "BORIS": 397,
        "TRAVIS": 352,
        "VICTOR": 352,
        "BATYA": 341,
        "KLAUS": 347,
        "SHI": 320,
        "MIRO": 280,
        "MOSES": 280,
        "CHEN LI": 280,
        "DUTCH": 280,
        "WOLF": 280,
        "DIANA": 253,
        "SNEK": 250,
        "JB": 234,
        "CHARON": 231,
        "ZLOY": 231,
        "RAY": 231,
        "APOLLON": 218,
        "CRAIG": 209,
        "DMITRY": 202,
        "VALERA": 199,
        "JASON": 199,
        "THOR": 199,
        "F?NIX": 195,
        "SYNDROME": 194,
        "JOE": 192,
        "SPENCER": 192,
        "OWEN": 192,
        "DAVID": 192,
        "VARG": 189,
        "FERRY": 185,
        "CAPISCE": 181,
        "HAWK": 178,
        "MISHKA": 178,
        "ROOKIE": 178,
        "RICK": 149,
        "SUSSURRO": 108,
        "KIRIN": 108,
        "MIA": 88,
        "LENS": 55
    },
    "hildr": {
        "JASON": 355,
        "THOR": 355,
        "VARG": 337,
        "MIRO": 280,
        "MOSES": 280,
        "CHEN LI": 280,
        "DUTCH": 280,
        "WOLF": 280,
        "DIANA": 253,
        "SNEK": 250,
        "JB": 234,
        "ZLOY": 231,
        "CHARON": 231,
        "RAY": 231,
        "BORIS": 229,
        "APOLLON": 218,
        "CRAIG": 209,
        "TRAVIS": 203,
        "VICTOR": 203,
        "DMITRY": 202,
        "KLAUS": 200,
        "VALERA": 199,
        "BATYA": 197,
        "F?NIX": 195,
        "SYNDROME": 194,
        "JOE": 192,
        "OWEN": 192,
        "SPENCER": 192,
        "DAVID": 192,
        "SUSSURRO": 192,
        "FERRY": 185,
        "SHI": 184,
        "CAPISCE": 181,
        "ROOKIE": 178,
        "MISHKA": 178,
        "HAWK": 178,
        "MCMEAN": 173,
        "RICK": 149,
        "KIRIN": 108,
        "MIA": 88,
        "LENS": 55
    }
};

const PLANNER_MISSIONS = [
    { key: "baioneta", name: "Baioneta", scores: [65, 210, 65, 65, 65, 65, 155, 155, 155, 155, 155, 50, 40, 150, 150, 150, 150, 40, 35, 200] },
    { key: "brecha", name: "Brecha", scores: [115, 115, 240, 115, 115, 115, 85, 85, 180, 85, 85, 85, 70, 70, 150, 70, 70, 70, 55, 200] },
    { key: "bss", name: "B.S.S.", scores: [95, 255, 95, 95, 95, 95, 70, 70, 70, 190, 70, 70, 60, 160, 60, 60, 60, 60, 50, 200] },
    { key: "cobertura", name: "Cobertura", scores: [115, 115, 115, 115, 240, 115, 85, 85, 85, 85, 180, 85, 70, 70, 70, 70, 150, 70, 55, 200] },
    { key: "demonstracao", name: "Demonstração", scores: [115, 115, 115, 115, 115, 240, 85, 85, 85, 85, 85, 180, 70, 70, 70, 70, 70, 150, 55, 200] },
    { key: "faca", name: "Faca", scores: [90, 90, 90, 90, 320, 90, 65, 240, 240, 65, 240, 60, 55, 55, 55, 55, 55, 55, 45, 200] },
    { key: "habitantes", name: "Habitantes", scores: [95, 95, 225, 225, 95, 225, 70, 70, 70, 70, 70, 170, 140, 60, 60, 60, 60, 140, 40, 200] },
    { key: "hildr", name: "HILDR", scores: [480, 100, 100, 100, 100, 100, 70, 70, 70, 70, 70, 70, 60, 60, 60, 300, 60, 60, 50, 200] },
    { key: "limpeza", name: "Limpeza", scores: [115, 115, 115, 240, 115, 115, 85, 85, 85, 180, 85, 85, 70, 70, 70, 150, 70, 70, 55, 200] },
    { key: "logistica", name: "Logística", scores: [115, 240, 115, 115, 115, 115, 85, 180, 85, 85, 85, 85, 70, 150, 70, 70, 70, 70, 55, 200] },
    { key: "martelo", name: "Martelo", scores: [95, 95, 95, 95, 95, 95, 240, 70, 70, 70, 70, 240, 60, 60, 190, 60, 190, 190, 50, 200] },
    { key: "basica", name: "M. Básica", scores: [160, 160, 160, 160, 160, 160, 120, 120, 120, 120, 120, 120, 100, 100, 100, 100, 100, 100, 80, 200] },
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

const MISSION_TIMES = ["09:00", "12:00", "15:00", "18:00", "21:00", "00:00", "03:00", "06:00"];

const plannerEls = {};
let plannerUnlocked = false;
let importedAssignment = null;

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

    plannerEls.message.textContent = "Insira a senha para selecionar as missões.";
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

    [plannerEls.clearButton, plannerEls.copyButton, plannerEls.shareButton, plannerEls.importButton].forEach((button) => {
        if (button) {
            button.disabled = !enabled;
        }
    });
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

function scoreMission(mission) {
    return PLANNER_OPERATORS
        .map((operator, index) => ({
            operator,
            score: getMissionScore(mission, operator, index)
        }))
        .sort((a, b) => b.score - a.score || a.operator.localeCompare(b.operator));
}

function getMissionScore(mission, operator, index) {
    const updatedScore = UPDATED_MISSION_SCORES[mission.key]?.[normalizeOperatorName(operator)];
    if (Number.isFinite(updatedScore)) {
        return updatedScore;
    }

    if (index < PLANNER_BASE_OPERATOR_COUNT) {
        return mission.scores[index] || 0;
    }

    return EXTRA_OPERATOR_SCORES[operator]?.[mission.key] || 55;
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
        .sort((a, b) => b.score - a.score || a.item.slot - b.item.slot || a.operator.localeCompare(b.operator))
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
        plannerEls.importMessage.textContent = "Não encontrei missões válidas no texto colado.";
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
    plannerEls.importMessage.textContent = `${parsed.length} missões importadas. Marque como concluídas as missões finalizadas.`;
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
            .sort((a, b) => b.score - a.score || a.item.slot - b.item.slot)[0];

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
    plannerEls.assignment.innerHTML = '<p class="mission-empty">Escolha pelo menos uma missão para gerar a locação.</p>';
    plannerEls.ranking.innerHTML = '<li class="mission-empty">Aguardando missões.</li>';
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
                <span>Missão ${item.slot}</span>
                <strong>${item.mission.name}</strong>
                <small>${item.points} pontos | ${item.reward}</small>
            </div>
            <div>
                <span>${missionSendLabel(item)}</span>
                <strong>${item.chosen.length ? `${item.chosen.length} enviados` : "Não envia"}</strong>
                <small>${item.chosen.length ? `${formatScore(item.chosen.reduce((sum, entry) => sum + entry.score, 0))} pontos somados` : "Sem locação nesta missão"}</small>
            </div>
            <p>${item.chosen.length ? item.chosen.map((entry) => `${entry.operator} (${formatScore(entry.score)})`).join(", ") : "Missão ignorada no envio de operadores."}</p>
            <p>Alternativas: ${item.alternatives.length ? item.alternatives.map((alt) => `${alt.operator} (${formatScore(alt.score)})`).join(", ") : "sem operadores disponíveis"}</p>
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
        "🚨 MISSÕES DISPONÍVEIS🚨",
        "",
        `🕙 Início: ${missionTime}`,
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

    lines.push("⚠️🚨 COLOCAR OS OPERADORES NAS MISSÕES E ASSISTIR OS VÍDEOS DA LOJA! ⚠️🚨");

    return lines.join("\n");
}

function buildRelocationText(relocation) {
    const lines = [
        "🚨🚨🚨🚨⚠️ ATENÇÃO ⚠️🚨🚨🚨🚨",
        "",
        "MOVIMENTAÇÃO ESTRATÉGICA IMEDIATA!",
        "",
        "ALOQUEM OS OPERADORES CONFORME AS INSTRUÇÕES ABAIXO:",
        "",
        relocation.sourceItems.length > 1 ? "REMOVAM OS OPERADORES DAS MISSÕES" : "REMOVAM OS OPERADORES DA MISSÃO",
        ""
    ];

    relocation.sourceItems.forEach((item) => {
        lines.push(`> ⏳✅ [ ${item.slot} ]: *${missionTextName(item.mission)}.*`);
    });

    lines.push("", "ALOQUEM DE IMEDIATO NAS MISSÕES:", "");

    if (relocation.targetItems.length) {
        relocation.targetItems.forEach((item) => {
            lines.push(`> [ ${item.slot} ] ${missionTextName(item.mission)}: ${item.chosen.map((entry) => entry.operator).join(", ")}.`);
        });
    } else {
        lines.push("> Nenhuma missão pendente disponível para realocar.");
    }

    lines.push("", "⚠️🚨 COLOCAR OS OPERADORES NAS MISSÕES E ASSISTIR OS VÍDEOS DA LOJA! ⚠️🚨");

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
    button.textContent = isDone ? "Pendente" : "Concluído";
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
        plannerEls.message.textContent = "A senha deve conter apenas números.";
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

    createMissionTimes();
    createMissionRows();
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

    renderEmptyState();
}

document.addEventListener("DOMContentLoaded", initOperatorPlanner);
