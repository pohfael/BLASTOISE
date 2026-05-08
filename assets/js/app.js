const TIERS = [
    { key: "white", name: "Branco", color: "#E8E8D0", base: 1 },
    { key: "blue", name: "Azul", color: "#3BA9FF", base: 6 },
    { key: "purple", name: "Roxo", color: "#9B4DFF", base: 30 },
    { key: "orange", name: "Laranja", color: "#FF9F1C", base: 120 },
    { key: "yellow", name: "Amarelo", color: "#FFD93D", base: 360 }
];

const STEP_RATIOS = {
    coins: 2000,
    white: 6,
    blue: 5,
    purple: 4,
    orange: 3
};

const COIN_SOURCE = { key: "coins", name: "Prata", color: "#DFF4F0" };

const ANNOUNCEMENT_TEXT = [
    "\u{1F6A8} VOC\u00CA EST\u00C1 PERDENDO RECURSOS TODO DIA \u{1F6A8}",
    "",
    "Enquanto muita gente ignora os v\u00EDdeos, quem assiste est\u00E1 acumulando MUITO mais recursos sem jogar mais partidas.",
    "",
    "\u{1F4FA} Assista aos v\u00EDdeos e receba diariamente:",
    "\u26AA 16.500 moedas",
    "\u{2B50} 1.100 cr\u00E9ditos",
    "\u{1F4C1} 22 mods brancos",
    "",
    "\u{1F4C5} Em apenas 1 m\u00EAs assistindo diariamente isso vira:",
    "\u26AA 495.000 moedas",
    "\u{2B50} 33.000 cr\u00E9ditos",
    "\u{1F4C1} 660 mods brancos",
    "",
    "Clique em ASSISTIR na conta e comece a farmar recursos gr\u00E1tis agora."
].join("\n");

const ANNOUNCEMENT_SAFE_TEXT = [
    "ATENCAO: VOCE ESTA PERDENDO RECURSOS TODO DIA",
    "",
    "Enquanto muita gente ignora os videos, quem assiste esta acumulando MUITO mais recursos sem jogar mais partidas.",
    "",
    "Assista aos videos e receba diariamente:",
    "- 16.500 moedas",
    "- 1.100 creditos",
    "- 22 mods brancos",
    "",
    "Em apenas 1 mes assistindo diariamente isso vira:",
    "- 495.000 moedas",
    "- 33.000 creditos",
    "- 660 mods brancos",
    "",
    "Clique em ASSISTIR na conta e comece a farmar recursos gratis agora."
].join("\n");

const OPERATORS = [
    {
        name: "Moses",
        base: "assets/img/operators/quem-e-esse-pokemon-base.jpg",
        mystery: "assets/img/operators/moses-misterio.jpg",
        revealed: "assets/img/operators/moses-revelado.jpg"
    },
    {
        name: "Didi",
        base: "assets/img/operators/quem-e-esse-pokemon-base.jpg",
        mystery: "assets/img/operators/didi-misterio.jpg",
        revealed: "assets/img/operators/didi-revelado.jpg"
    },
    {
        name: "McMean",
        base: "assets/img/operators/quem-e-esse-pokemon-base.jpg",
        mystery: "assets/img/operators/mcmean-misterio.jpg",
        revealed: "assets/img/operators/mcmean-revelado.jpg"
    },
    {
        name: "Panzer",
        base: "assets/img/operators/quem-e-esse-pokemon-base.jpg",
        mystery: "assets/img/operators/panzer-misterio.jpg",
        revealed: "assets/img/operators/panzer-revelado.jpg"
    },
    {
        name: "Valera",
        base: "assets/img/operators/quem-e-esse-pokemon-base.jpg",
        mystery: "assets/img/operators/valera-misterio.jpg",
        revealed: "assets/img/operators/valera-revelado.jpg"
    },
    {
        name: "Jo\u00E3ozytos",
        base: "assets/img/operators/quem-e-esse-pokemon-base.jpg",
        mystery: "assets/img/operators/joaozytos-misterio.jpg",
        revealed: "assets/img/operators/joaozytos-revelado.jpg"
    }
];

const els = {
    coins: document.getElementById("coinsInput"),
    resourceInputs: [...document.querySelectorAll(".resource-input")],
    sourceSelect: document.getElementById("sourceSelect"),
    targetSelect: document.getElementById("targetSelect"),
    sourceSelectedLabel: document.getElementById("sourceSelectedLabel"),
    targetSelectedLabel: document.getElementById("targetSelectedLabel"),
    ratioLabel: document.getElementById("ratioLabel"),
    maxLabel: document.getElementById("maxLabel"),
    manualAmount: document.getElementById("manualAmount"),
    manualSlider: document.getElementById("manualSlider"),
    decrease: document.getElementById("decreaseButton"),
    increase: document.getElementById("increaseButton"),
    manualPreview: document.getElementById("manualPreview"),
    exchangeFeedback: document.getElementById("exchangeFeedback"),
    sourceSlot: document.getElementById("sourceSlot"),
    targetSlot: document.getElementById("targetSlot"),
    manualConvert: document.getElementById("manualConvertButton"),
    closeManual: document.getElementById("closeManualButton"),
    maxManual: document.getElementById("maxManualButton"),
    clear: document.getElementById("clearButton"),
    operatorCard: document.getElementById("operatorCard"),
    operatorImage: document.getElementById("operatorImage"),
    operatorName: document.getElementById("operatorName"),
    operatorHint: document.getElementById("operatorHint"),
    operatorInstruction: document.getElementById("operatorInstruction"),
    operatorAudio: document.getElementById("operatorAudio"),
    nextOperator: document.getElementById("nextOperatorButton"),
    announcementText: document.getElementById("announcementText"),
    shareAnnouncement: document.getElementById("shareAnnouncementButton"),
    announcementStatus: document.getElementById("announcementStatus")
};

const operatorState = {
    index: -1,
    phase: "base",
    deck: []
};

function tierIndex(key) {
    return TIERS.findIndex((tier) => tier.key === key);
}

function tierByKey(key) {
    return TIERS[tierIndex(key)];
}

function sourceByKey(key) {
    return key === "coins" ? COIN_SOURCE : tierByKey(key);
}

function toNumber(value) {
    const number = Number.parseInt(value, 10);
    return Number.isFinite(number) && number > 0 ? number : 0;
}

function formatNumber(value) {
    return new Intl.NumberFormat("pt-BR").format(Math.floor(value));
}

function iconMarkup(item) {
    if (item.key === "coins") {
        return '<i class="coin-icon" aria-hidden="true"></i>';
    }

    return `<span class="mod-icon" style="--icon-color:${item.color}" aria-hidden="true"><span></span></span>`;
}

function sanitizeInput(input) {
    if (input.value === "") {
        return;
    }

    input.value = toNumber(input.value);
}

function getInventory() {
    const inventory = Object.fromEntries(TIERS.map((tier) => [tier.key, 0]));
    els.resourceInputs.forEach((input) => {
        inventory[input.dataset.tier] = toNumber(input.value);
    });
    return inventory;
}

function setTierAmount(key, amount) {
    const input = els.resourceInputs.find((item) => item.dataset.tier === key);
    const cleanAmount = Math.max(0, Math.floor(amount));
    input.value = cleanAmount > 0 ? cleanAmount : "";
}

function nextTierKey(key) {
    if (key === "coins") {
        return "white";
    }

    const index = tierIndex(key);
    return TIERS[index + 1]?.key || null;
}

function conversionRatio(sourceKey, targetKey) {
    if (sourceKey === "coins" && targetKey === "white") {
        return STEP_RATIOS.coins;
    }

    const source = tierByKey(sourceKey);
    const target = tierByKey(targetKey);
    return Math.floor(target.base / source.base);
}

function canConvertStep(sourceKey, targetKey) {
    if (sourceKey === "coins") {
        return targetKey === "white";
    }

    return tierIndex(targetKey) === tierIndex(sourceKey) + 1;
}

function updateTotals() {
    updateManualPreview();
}

function populateManualSelects() {
    const modOptions = TIERS.slice(0, -1).map((tier) => `<option value="${tier.key}">${tier.name}</option>`).join("");
    els.sourceSelect.innerHTML = `<option value="coins">Prata</option>${modOptions}`;
    updateTargetOptions();
    updateSelectLabels();
}

function updateTargetOptions() {
    const sourceKey = els.sourceSelect.value || "coins";
    const target = sourceKey === "coins" ? tierByKey("white") : TIERS[tierIndex(sourceKey) + 1];
    els.targetSelect.innerHTML = `<option value="${target.key}">${target.name}</option>`;
    updateSelectLabels();
}

function updateSelectLabels() {
    const source = sourceByKey(els.sourceSelect.value || "coins");
    const target = tierByKey(els.targetSelect.value || "white");

    els.sourceSelectedLabel.innerHTML = `${iconMarkup(source)}${source.name}`;
    els.targetSelectedLabel.innerHTML = `${iconMarkup(target)}${target.name}`;
}

function getManualPlan() {
    const inventory = getInventory();
    const sourceKey = els.sourceSelect.value;
    const targetKey = els.targetSelect.value;
    const ratio = conversionRatio(sourceKey, targetKey);
    const available = sourceKey === "coins" ? toNumber(els.coins.value) : inventory[sourceKey];
    const max = Math.floor(available / ratio);
    const amount = Math.min(toNumber(els.manualAmount.value), max);
    const consumed = amount * ratio;

    return {
        inventory,
        source: sourceByKey(sourceKey),
        target: tierByKey(targetKey),
        ratio,
        max,
        amount,
        consumed,
        available,
        leftover: available - consumed
    };
}

function syncManualAmount(value) {
    const sourceKey = els.sourceSelect.value;
    const targetKey = els.targetSelect.value;
    const ratio = conversionRatio(sourceKey, targetKey);
    const inventory = getInventory();
    const available = sourceKey === "coins" ? toNumber(els.coins.value) : inventory[sourceKey];
    const max = Math.floor(available / ratio);
    const cleanValue = Math.min(Math.max(0, toNumber(value)), max);

    els.manualAmount.value = cleanValue;
    els.manualSlider.max = max;
    els.manualSlider.value = cleanValue;
}

function updateManualPreview() {
    if (!els.sourceSelect.value || !els.targetSelect.value) {
        return;
    }

    const plan = getManualPlan();
    syncManualAmount(plan.amount);

    els.ratioLabel.textContent = `Para troca: ${formatNumber(plan.ratio)} ${plan.source.name}`;
    els.maxLabel.textContent = `Máximo: ${formatNumber(plan.max)} ${plan.target.name}`;
    els.sourceSlot.style.setProperty("--slot-color", plan.source.color);
    els.targetSlot.style.setProperty("--slot-color", plan.target.color);
    els.sourceSlot.innerHTML = `
        <span>Para troca</span>
        <strong>${iconMarkup(plan.source)}${formatNumber(plan.consumed)}</strong>
        <small>${plan.source.name}</small>
        <small>Disponível: ${formatNumber(plan.available)}</small>
    `;
    els.targetSlot.innerHTML = `
        <span>Obtenha</span>
        <strong>${iconMarkup(plan.target)}${formatNumber(plan.amount)}</strong>
        <small>${plan.target.name}</small>
        <small>Máximo: ${formatNumber(plan.max)}</small>
    `;
    els.manualPreview.innerHTML = `
        <article class="preview-item" style="border-color:${plan.source.color};">
            <span>Consumo agora</span>
            <strong>${iconMarkup(plan.source)}${formatNumber(plan.consumed)} ${plan.source.name}</strong>
        </article>
        <article class="preview-item" style="border-color:${plan.target.color};">
            <span>Resultado agora</span>
            <strong>${iconMarkup(plan.target)}${formatNumber(plan.amount)} ${plan.target.name}</strong>
        </article>
        <article class="preview-item">
            <span>Sobra na origem</span>
            <strong>${iconMarkup(plan.source)}${formatNumber(plan.leftover)} ${plan.source.name}</strong>
        </article>
    `;
}

function applyManualConversion() {
    const plan = getManualPlan();

    if (!canConvertStep(plan.source.key, plan.target.key) || plan.amount <= 0) {
        animate(els.manualPreview);
        showFeedback("Sem quantidade suficiente para trocar.", false);
        return;
    }

    if (plan.source.key === "coins") {
        els.coins.value = plan.leftover > 0 ? plan.leftover : "";
    } else {
        setTierAmount(plan.source.key, plan.inventory[plan.source.key] - plan.consumed);
    }

    setTierAmount(plan.target.key, plan.inventory[plan.target.key] + plan.amount);

    syncManualAmount(0);
    animate(els.manualPreview);
    showFeedback(`Troca realizada: +${formatNumber(plan.amount)} ${plan.target.name}`, true);
    updateTotals();
}

function showFeedback(message, success) {
    els.exchangeFeedback.textContent = message;
    els.exchangeFeedback.classList.toggle("is-success", success);
    els.exchangeFeedback.classList.toggle("is-error", !success);
    els.exchangeFeedback.classList.remove("is-visible");
    void els.exchangeFeedback.offsetWidth;
    els.exchangeFeedback.classList.add("is-visible");
}

function animate(element) {
    element.classList.remove("pulse");
    void element.offsetWidth;
    element.classList.add("pulse");
}

function clearAll() {
    els.coins.value = "";
    els.resourceInputs.forEach((input) => {
        input.value = "";
    });
    syncManualAmount(0);
    els.exchangeFeedback.classList.remove("is-visible", "is-success", "is-error");
    els.exchangeFeedback.textContent = "";
    updateTotals();
}

function currentOperator() {
    return OPERATORS[operatorState.index];
}

function randomInt(max) {
    if (window.crypto?.getRandomValues) {
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        return randomBuffer[0] % max;
    }

    return Math.floor(Math.random() * max);
}

function shuffledOperatorIndexes(excludedIndex = -1) {
    const indexes = OPERATORS
        .map((_, index) => index)
        .filter((index) => OPERATORS.length <= 1 || index !== excludedIndex);

    for (let index = indexes.length - 1; index > 0; index -= 1) {
        const swapIndex = randomInt(index + 1);
        [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
    }

    return indexes;
}

function nextOperatorIndex() {
    if (!operatorState.deck.length) {
        operatorState.deck = shuffledOperatorIndexes(operatorState.index);
    }

    return operatorState.deck.shift() ?? 0;
}

function getOperatorDisplayName(operator) {
    if (operator.name) {
        return operator.name;
    }

    const filename = decodeURIComponent(operator.revealed.split("/").pop() || "");
    const match = filename.match(/pok[eé]mon\s*-\s*(.*?)\s*REVELADO/i);
    const rawName = match ? match[1] : filename.replace(/\.[^.]+$/, "");

    return rawName
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase()
        .replace(/\b\p{L}/gu, (letter) => letter.toUpperCase());
}

function loadOperator(index) {
    operatorState.index = ((index % OPERATORS.length) + OPERATORS.length) % OPERATORS.length;
    operatorState.phase = "base";

    const operator = currentOperator();
    els.operatorAudio.pause();
    els.operatorAudio.currentTime = 0;
    els.operatorImage.src = operator.base;
    els.operatorImage.alt = "Imagem base sem operador";
    els.operatorName.textContent = "";
    els.operatorCard.classList.remove("is-revealed", "is-mystery");
    els.operatorHint.textContent = "Clique para começar";
    els.operatorInstruction.textContent = "Clique no card para iniciar o desafio.";
}

function loadRandomOperator() {
    loadOperator(nextOperatorIndex());
}

function handleOperatorClick() {
    if (operatorState.phase === "revealed") {
        return;
    }

    const operator = currentOperator();

    if (operatorState.phase === "base") {
        operatorState.phase = "mystery";
        els.operatorImage.src = operator.mystery;
        els.operatorImage.alt = `${operator.name} em mistério`;
        els.operatorCard.classList.add("is-mystery");
        els.operatorAudio.currentTime = 0;
        els.operatorAudio.play().catch(() => {
            els.operatorInstruction.textContent = "Clique novamente para revelar.";
        });
        els.operatorHint.textContent = "Clique para revelar";
        els.operatorInstruction.textContent = "Agora clique novamente para revelar.";
        return;
    }

    operatorState.phase = "revealed";
    els.operatorImage.src = operator.revealed;
    const displayName = getOperatorDisplayName(operator);
    els.operatorImage.alt = displayName;
    els.operatorName.textContent = displayName;
    els.operatorCard.classList.remove("is-mystery");
    els.operatorCard.classList.add("is-revealed");
    els.operatorHint.textContent = "Operador revelado";
    els.operatorInstruction.textContent = displayName;
}

function openWhatsAppText(text) {
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encodedText}`, "_blank", "noopener,noreferrer");
}

async function getAnnouncementImageFile() {
    const image = document.querySelector(".announcement-art img");
    if (!image) {
        return null;
    }

    const response = await fetch(image.currentSrc || image.src);
    const imageBlob = await response.blob();
    return new File([imageBlob], "kit-recompensa-video.png", { type: imageBlob.type || "image/png" });
}

async function copyAnnouncementImage(file) {
    if (!navigator.clipboard || !window.ClipboardItem) {
        return false;
    }

    await navigator.clipboard.write([
        new ClipboardItem({
            [file.type || "image/png"]: file
        })
    ]);
    return true;
}

async function shareAnnouncementText() {
    if (!els.announcementText) {
        return;
    }

    const text = ANNOUNCEMENT_TEXT.trim();
    if (!text) {
        return;
    }

    let imageFile = null;

    try {
        imageFile = await getAnnouncementImageFile();
    } catch (error) {
        imageFile = null;
    }

    try {
        const canNativeShareFile = imageFile
            && navigator.share
            && (!navigator.canShare || navigator.canShare({ files: [imageFile] }));

        if (canNativeShareFile) {
            await navigator.share({
                title: "Kit de recompensa de vídeo",
                text,
                files: [imageFile]
            });
            els.announcementStatus.textContent = "Escolha o WhatsApp para enviar";
            return;
        }
    } catch (error) {
        if (error?.name === "AbortError") {
            els.announcementStatus.textContent = "Compartilhamento cancelado antes do envio";
            return;
        }
    }

    let imageCopied = false;
    if (imageFile) {
        try {
            imageCopied = await copyAnnouncementImage(imageFile);
        } catch (error) {
            imageCopied = false;
        }
    }

    openWhatsAppText(ANNOUNCEMENT_SAFE_TEXT);
    els.announcementStatus.textContent = imageCopied
        ? "Texto aberto no WhatsApp. A imagem foi copiada: cole no chat."
        : "Texto aberto no WhatsApp sem caracteres quebrados. No Chrome do PC, anexe a imagem manualmente.";

    setTimeout(() => {
        els.announcementStatus.textContent = "";
    }, 4200);
}

function bindEvents() {
    [els.coins, ...els.resourceInputs].forEach((input) => {
        input.addEventListener("input", () => {
            sanitizeInput(input);
            updateTotals();
        });
    });

    els.sourceSelect.addEventListener("change", () => {
        updateTargetOptions();
        syncManualAmount(0);
        updateManualPreview();
    });

    els.manualAmount.addEventListener("input", () => {
        syncManualAmount(els.manualAmount.value);
        updateManualPreview();
    });

    els.manualSlider.addEventListener("input", () => {
        syncManualAmount(els.manualSlider.value);
        updateManualPreview();
    });

    els.decrease.addEventListener("click", () => {
        syncManualAmount(toNumber(els.manualAmount.value) - 1);
        updateManualPreview();
    });

    els.increase.addEventListener("click", () => {
        syncManualAmount(toNumber(els.manualAmount.value) + 1);
        updateManualPreview();
    });

    els.maxManual.addEventListener("click", () => {
        syncManualAmount(getManualPlan().max);
        updateManualPreview();
    });

    els.manualConvert.addEventListener("click", applyManualConversion);
    els.closeManual.addEventListener("click", clearAll);
    els.clear.addEventListener("click", clearAll);
    if (els.operatorCard && els.nextOperator) {
        els.operatorCard.addEventListener("click", handleOperatorClick);
        els.nextOperator.addEventListener("click", () => {
            loadRandomOperator();
        });
    }

    if (els.shareAnnouncement) {
        els.shareAnnouncement.addEventListener("click", shareAnnouncementText);
    }
}

function init() {
    populateManualSelects();
    if (els.announcementText) {
        els.announcementText.value = ANNOUNCEMENT_TEXT;
    }
    bindEvents();
    syncManualAmount(0);
    updateTotals();
    if (els.operatorCard) {
        loadRandomOperator();
    }
}

init();
