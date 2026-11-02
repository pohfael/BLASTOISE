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

const MISSION_5K_START_MINUTES = (19 * 60) + 30;

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

const SPIDER_AXES = [
    "Zona",
    "Anti-avanço",
    "Cobertura",
    "Equipe",
    "Counters",
    "Mapa"
];

const SPIDER_AXIS_META = [
    { key: "controle", strong: "Controla zona", weak: "Pouco controle de zona" },
    { key: "area", strong: "Segura avanço", weak: "Pouco anti-avanço" },
    { key: "seguranca", strong: "Cria cobertura", weak: "Pouca cobertura" },
    { key: "anti", strong: "Seguro para equipe", weak: "Risco para aliados" },
    { key: "dano", strong: "Responde counters", weak: "Muito counterável" },
    { key: "dependencia", strong: "Pouco dependente", weak: "Depende do mapa" }
];

const MOLOTOV_ADVANTAGES = [
    {
        label: "Queimadura no inimigo",
        text: "Coloca fogo no operador adversário e pressiona a saída da posição.",
        icon: "assets/img/spider/coquetel-molotov.png"
    },
    {
        label: "Chamas seletivas",
        text: "O fogo não queima aliados, então ajuda a controlar espaço sem punir o time.",
        icon: "assets/img/spider/mistura-spark.png"
    },
    {
        label: "Dano contínuo",
        text: "Enquanto o corpo do inimigo estiver em chamas, ele sofre dano aos poucos.",
        iconType: "burn"
    }
];

const MOLOTOV_DISADVANTAGES = [
    {
        label: "Granada de fumaça",
        text: "Apaga o fogo do corpo do operador e também remove chamas no cenário.",
        icon: "assets/img/spider/granada-fumaca.png"
    },
    {
        label: "Granada de gás",
        text: "Pode apagar o fogo criando uma combustão, com risco de causar ainda mais dano na área.",
        icon: "assets/img/spider/granada-gas.png"
    },
    {
        label: "Água",
        text: "Entrar na água remove a queimadura do corpo e impede o fogo de permanecer.",
        iconType: "water"
    },
    {
        label: "Fumaça do mapa",
        text: "Fumaça própria do cenário também pode apagar o fogo do operador.",
        iconType: "smoke"
    }
];

const SPIDER_ITEMS = [
    {
        id: "coquetel-molotov",
        name: "Coquetel Molotov",
        type: "Granada de controle",
        category: "granada",
        tags: ["controle"],
        image: "assets/img/spider/coquetel-molotov.png",
        intent: "Serve para incendiar inimigos, travar passagem e defender uma zona sem queimar aliados.",
        scores: [55, 88, 82, 92, 15, 35],
        advantages: MOLOTOV_ADVANTAGES,
        disadvantages: MOLOTOV_DISADVANTAGES,
        mechanics: [
            "Incendeia operadores inimigos e cria área incendiada.",
            "Não causa dano em aliados.",
            "Água, fumaça e Granada de Fumaça apagam o fogo.",
            "Granada de Gás em contato com fogo causa combustão e extingue as chamas."
        ],
        tactical: [
            "Excelente para cortar passagem e forçar recuo.",
            "Boa ferramenta defensiva para proteger entrada, objetivo ou corredor.",
            "Perde valor em mapas com muita água ou muito recurso de fumaça."
        ]
    },
    {
        id: "mistura-spark",
        name: "Mistura Spark",
        type: "Granada incendiaria",
        category: "granada",
        tags: ["controle"],
        image: "assets/img/spider/mistura-spark.png",
        intent: "Serve como versão incendiária superior ao Molotov, mantendo a mesma função defensiva.",
        scores: [60, 92, 86, 92, 15, 35],
        advantages: MOLOTOV_ADVANTAGES.map((entry) => ({
            ...entry,
            icon: entry.icon && entry.icon.includes("coquetel-molotov") ? "assets/img/spider/mistura-spark.png" : entry.icon
        })),
        disadvantages: MOLOTOV_DISADVANTAGES,
        mechanics: [
            "Incendeia inimigos e cria área incendiada.",
            "Não causa dano em aliados.",
            "Fumaça apaga completamente o fogo.",
            "Gás provoca combustão ao tocar o fogo e extingue as chamas."
        ],
        tactical: [
            "Melhor escolha quando a ideia for controlar corredor ou objetivo.",
            "Mais forte que Molotov, mas com a mesma finalidade tática.",
            "Evite depender dela em áreas com água."
        ]
    },
    {
        id: "granada-fumaca",
        name: "Granada de Fumaca",
        type: "Granada de cobertura",
        category: "granada",
        tags: ["controle"],
        image: "assets/img/spider/granada-fumaca.png",
        intent: "Bloqueia completamente a visao para criar cobertura e movimentacao segura.",
        scores: [0, 96, 88, 94, 20, 30],
        mechanics: [
            "Bloqueia linha de visao.",
            "Apaga fogo do cenario.",
            "Apaga fogo em operadores incendiados.",
            "Counter direto de Molotov e Mistura Spark."
        ],
        tactical: [
            "Ferramenta forte para avancar, reviver ou reposicionar.",
            "Pode salvar aliados incendiados.",
            "Tem valor mesmo sem causar dano."
        ]
    },
    {
        id: "granada-gas",
        name: "Granada de Gas",
        type: "Granada toxica",
        category: "granada",
        tags: ["controle", "dano"],
        image: "assets/img/spider/granada-gas.png",
        intent: "Cria uma area toxica que causa dano continuo aos inimigos.",
        scores: [62, 82, 84, 92, 25, 35],
        mechanics: [
            "Causa dano apenas em inimigos.",
            "Nao causa dano em aliados.",
            "Em contato com fogo provoca combustao.",
            "A combustao causa dano em area e apaga o fogo."
        ],
        tactical: [
            "Boa para travar rota e segurar objetivo.",
            "Combina com fogo para dano explosivo curto.",
            "Use com cuidado para nao apagar fogo importante cedo demais."
        ]
    },
    {
        id: "granada-flash",
        name: "Granada Flash",
        type: "Granada de cegueira",
        category: "granada",
        tags: ["controle"],
        image: "assets/img/spider/granada-flash.png",
        intent: "Cega operadores para facilitar o avancar da equipe.",
        scores: [10, 78, 72, 55, 45, 28],
        mechanics: [
            "Cega inimigos.",
            "Tambem afeta aliados.",
            "Aliados sofrem aproximadamente 60% menos efeito.",
            "Neutraliza Fumaca, Gas, Molotov e Mistura Spark."
        ],
        tactical: [
            "Boa para abrir entrada em troca direta.",
            "Exige comunicacao para nao atrapalhar aliados.",
            "Tambem funciona como resposta contra utilitarios de controle."
        ]
    },
    {
        id: "suspicious-package",
        name: "Suspicious Package",
        type: "Granada de cegueira",
        category: "granada",
        tags: ["controle"],
        image: "assets/img/spider/suspicious-package.png",
        intent: "Possui a mesma finalidade da Flash, com desempenho ligeiramente superior.",
        scores: [12, 84, 76, 55, 50, 28],
        mechanics: [
            "Cega inimigos.",
            "Tambem afeta aliados com efeito reduzido.",
            "Aliados recebem aproximadamente 60% menos efeito.",
            "Neutraliza Fumaca, Gas, Molotov e Mistura Spark."
        ],
        tactical: [
            "Versao mais forte para entrada e limpeza de posicao.",
            "Continua exigindo cuidado com aliados proximos.",
            "Boa opcao para quebrar defesa com varias granadas de controle."
        ]
    },
    {
        id: "granada-impacto",
        name: "Granada de Impacto",
        type: "Granada explosiva",
        category: "granada",
        tags: ["dano"],
        image: "assets/img/spider/granada-impacto.png",
        intent: "Elimina operadores atraves de explosao imediata ao atingir o alvo.",
        scores: [92, 35, 78, 25, 10, 20],
        mechanics: [
            "Explode imediatamente ao impacto.",
            "Causa dano em area.",
            "Causa dano em inimigos e aliados.",
            "Pode eliminar qualquer operador proximo."
        ],
        tactical: [
            "Forte para finalizacao rapida.",
            "Perigosa em combate embolado com aliados.",
            "Melhor quando o alvo esta agrupado ou sem rota de fuga."
        ]
    },
    {
        id: "granada-fragmentacao",
        name: "Granada de Fragmentacao",
        type: "Granada explosiva",
        category: "granada",
        tags: ["dano"],
        image: "assets/img/spider/granada-fragmentacao.png",
        intent: "Elimina operadores atraves de explosao em area.",
        scores: [95, 34, 88, 20, 10, 28],
        mechanics: [
            "Explode causando dano em area.",
            "Causa dano em inimigos e aliados.",
            "Pode eliminar qualquer operador proximo.",
            "Exige controle de tempo e posicionamento."
        ],
        tactical: [
            "Muito forte contra grupo parado.",
            "Risco alto de friendly fire.",
            "Funciona melhor quando o inimigo nao tem tempo de reagir."
        ]
    },
    {
        id: "pryanik",
        name: "Pryanik",
        type: "Explosivo curto",
        category: "granada",
        tags: ["dano"],
        image: "assets/img/spider/pryanik.png",
        intent: "Explosivo de curto alcance com pequeno raio de explosao.",
        scores: [76, 28, 42, 24, 10, 18],
        mechanics: [
            "Causa dano ao atingir o alvo.",
            "Possui pequeno raio de explosao.",
            "Causa dano em inimigos e aliados.",
            "Pode eliminar qualquer operador."
        ],
        tactical: [
            "Melhor para alvo proximo ou corredor apertado.",
            "Menos area, mais controle do ponto de impacto.",
            "Risco de dano aliado continua alto."
        ]
    },
    {
        id: "granada-emp",
        name: "Granada EMP",
        type: "Anti-dispositivo",
        category: "granada",
        tags: ["controle"],
        image: "assets/img/spider/granada-emp.png",
        intent: "Neutraliza explosivos e dispositivos.",
        scores: [8, 74, 65, 90, 98, 55],
        mechanics: [
            "Desarma explosivos.",
            "Desativa dispositivos.",
            "Interacao com Landau Grenade ainda em validacao.",
            "Valor principal esta em negar armadilhas."
        ],
        tactical: [
            "Essencial contra time que joga com setup.",
            "Nao e ferramenta de dano direto.",
            "Use antes de avancar em area armadilhada."
        ]
    },
    {
        id: "landau-grenade",
        name: "Landau Grenade",
        type: "Controle fisico",
        category: "granada",
        tags: ["controle", "dano"],
        image: "assets/img/spider/landau-grenade.png",
        intent: "Utiliza objetos fisicos do cenario como arma.",
        scores: [82, 62, 78, 18, 20, 96],
        mechanics: [
            "Atrai e lanca objetos do mapa.",
            "Objetos podem causar dano.",
            "Pode atingir inimigos, aliados e o proprio jogador.",
            "Dano depende dos objetos presentes no cenario."
        ],
        tactical: [
            "Muito forte em mapas com objetos perigosos.",
            "Muito dependente do mapa.",
            "Pode virar contra a propria equipe se mal posicionada."
        ]
    },
    {
        id: "mina",
        name: "Mina",
        type: "Explosivo de area",
        category: "explosivo",
        tags: ["dano", "controle"],
        image: "assets/img/spider/mina.png",
        intent: "Controla passagem e pune inimigos que avancam sem checar rota.",
        scores: [86, 76, 58, 40, 35, 72],
        mechanics: [
            "Dados detalhados ainda serao refinados.",
            "Funciona como controle de rota.",
            "Valor aumenta quando o inimigo precisa passar por corredor.",
            "Pode ser neutralizada por leitura e anti-dispositivo."
        ],
        tactical: [
            "Boa para travar flanco.",
            "Melhor quando posicionada fora da visao imediata.",
            "Depende muito do mapa e do comportamento inimigo."
        ]
    },
    {
        id: "bomb-bunny",
        name: "Bomb Bunny",
        type: "Explosivo especial",
        category: "explosivo",
        tags: ["dano"],
        image: "assets/img/spider/bomb-bunny.png",
        intent: "Explosivo especial para pressionar area e surpreender movimentacao inimiga.",
        scores: [84, 68, 62, 34, 30, 70],
        mechanics: [
            "Dados detalhados ainda serao refinados.",
            "Usado para pressao e punicao de posicionamento.",
            "Pode forcar deslocamento inimigo.",
            "Valor depende do momento de uso."
        ],
        tactical: [
            "Bom para tirar inimigo de cobertura.",
            "Nao deve ser usado sem leitura da rota.",
            "Pode abrir janela para entrada da equipe."
        ]
    },
    {
        id: "c4",
        name: "C4",
        type: "Explosivo remoto",
        category: "explosivo",
        tags: ["dano"],
        image: "assets/img/spider/c4.png",
        intent: "Explosivo de alto dano para controle de ponto e eliminacao em area.",
        scores: [98, 58, 86, 32, 45, 76],
        mechanics: [
            "Dados detalhados ainda serao refinados.",
            "Alto potencial de dano em area.",
            "Forte para defender ponto ou punir agrupamento.",
            "Exige posicionamento e timing."
        ],
        tactical: [
            "Excelente para armadilha em objetivo.",
            "Muito forte quando o inimigo agrupa.",
            "Perde valor se for descoberto antes da ativacao."
        ]
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
    announcementStatus: document.getElementById("announcementStatus"),
    mission5kTime: document.getElementById("mission5kTimeInput"),
    mission5kText: document.getElementById("mission5kText"),
    copyMission5k: document.getElementById("copyMission5kButton"),
    shareMission5k: document.getElementById("shareMission5kButton"),
    mission5kStatus: document.getElementById("mission5kStatus")
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

function formatTimeValue(date = new Date()) {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
}

function timeValueToMinutes(value) {
    const match = /^(\d{1,2}):(\d{2})$/.exec(value || "");
    if (!match) {
        return null;
    }

    const hours = Number.parseInt(match[1], 10);
    const minutes = Number.parseInt(match[2], 10);
    if (hours > 23 || minutes > 59) {
        return null;
    }

    return (hours * 60) + minutes;
}

function getMission5kMinutesLeft() {
    const currentMinutes = timeValueToMinutes(els.mission5kTime?.value);
    if (currentMinutes === null) {
        return 0;
    }

    return Math.max(0, MISSION_5K_START_MINUTES - currentMinutes);
}

function hasMission5kStarted() {
    const currentMinutes = timeValueToMinutes(els.mission5kTime?.value);
    return currentMinutes !== null && currentMinutes >= MISSION_5K_START_MINUTES;
}

function createMission5kText(minutesLeft = getMission5kMinutesLeft()) {
    if (hasMission5kStarted()) {
        return [
            "\u26A0\uFE0F Aten\u00E7\u00E3o, time!",
            "",
            "A miss\u00E3o 5K j\u00E1 iniciou. Quem ainda n\u00E3o ajustou suas miss\u00F5es, por favor fa\u00E7a isso agora e entre organizado o quanto antes.",
            "",
            "Evitem confus\u00F5es e constrangimentos para que ningu\u00E9m fique sem pontuar. Vamos manter o time sincronizado. \u{1F4AA}"
        ].join("\n");
    }

    return [
        "\u26A0\uFE0F Aten\u00E7\u00E3o, time!",
        "",
        `Faltam apenas ${minutesLeft} minutos para o in\u00EDcio da miss\u00E3o 5K. Quem ainda n\u00E3o ajustou suas miss\u00F5es, por favor fa\u00E7a isso agora e evite deixar para a \u00FAltima hora.`,
        "",
        "Al\u00E9m de evitar confus\u00F5es e constrangimentos, isso garante que ningu\u00E9m fique sem pontuar na miss\u00E3o. Vamos entrar organizados e sincronizados. \u{1F4AA}"
    ].join("\n");
}

function updateMission5kText() {
    if (!els.mission5kText) {
        return;
    }

    els.mission5kText.value = createMission5kText();
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

async function getMission5kImageFile() {
    const image = document.querySelector(".mission5k-art img");
    if (!image) {
        return null;
    }

    const response = await fetch(image.currentSrc || image.src);
    const imageBlob = await response.blob();
    return new File([imageBlob], "missao-5k.png", { type: imageBlob.type || "image/png" });
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

async function shareMission5kText() {
    if (!els.mission5kText) {
        return;
    }

    updateMission5kText();
    const text = els.mission5kText.value.trim();
    if (!text) {
        return;
    }

    let imageFile = null;

    try {
        imageFile = await getMission5kImageFile();
    } catch (error) {
        imageFile = null;
    }

    try {
        const canNativeShareFile = imageFile
            && navigator.share
            && (!navigator.canShare || navigator.canShare({ files: [imageFile] }));

        if (canNativeShareFile) {
            await navigator.share({
                title: "Miss\u00E3o 5K",
                text,
                files: [imageFile]
            });
            els.mission5kStatus.textContent = "Escolha o WhatsApp para enviar";
            return;
        }
    } catch (error) {
        if (error?.name === "AbortError") {
            els.mission5kStatus.textContent = "Compartilhamento cancelado antes do envio";
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

    openWhatsAppText(text);
    els.mission5kStatus.textContent = imageCopied
        ? "Texto aberto no WhatsApp. A imagem foi copiada: cole no chat."
        : "Texto aberto no WhatsApp. No Chrome do PC, anexe a imagem manualmente.";

    setTimeout(() => {
        els.mission5kStatus.textContent = "";
    }, 4200);
}

async function copyMission5kText() {
    if (!els.mission5kText) {
        return;
    }

    updateMission5kText();
    const text = els.mission5kText.value.trim();
    if (!text) {
        return;
    }

    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        els.mission5kText.focus();
        els.mission5kText.select();
        document.execCommand("copy");
        els.mission5kText.setSelectionRange(0, 0);
    }

    if (els.mission5kStatus) {
        els.mission5kStatus.textContent = "Texto copiado";
        setTimeout(() => {
            els.mission5kStatus.textContent = "";
        }, 2600);
    }
}

function setCollapsibleSectionState(divider, content, collapsed) {
    const button = divider.querySelector(".section-toggle");

    content.hidden = collapsed;
    divider.classList.toggle("is-collapsed", collapsed);
    divider.classList.toggle("is-open", !collapsed);

    if (button) {
        button.setAttribute("aria-expanded", String(!collapsed));
        button.querySelector("span").textContent = collapsed ? "Abrir" : "Fechar";
    }
}

function openCollapsibleContent(content) {
    const divider = document.querySelector(`.section-divider[data-collapsible-controls="${content.id}"]`);
    if (!divider) {
        return;
    }

    setCollapsibleSectionState(divider, content, false);
}

function setupCollapsibleSections() {
    const dividers = [...document.querySelectorAll(".section-divider")];

    dividers.forEach((divider, index) => {
        const content = divider.nextElementSibling;
        if (!content || content.classList.contains("clan-banner")) {
            return;
        }

        const contentId = content.id || `collapsibleSection${index + 1}`;
        content.id = contentId;
        content.dataset.collapsibleContent = "true";
        content.classList.add("collapsible-section-content");
        divider.classList.add("is-collapsible");
        divider.dataset.collapsibleControls = contentId;

        if (!divider.querySelector(".section-toggle")) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "section-toggle";
            button.setAttribute("aria-controls", contentId);
            button.innerHTML = '<span>Abrir</span><i aria-hidden="true"></i>';
            divider.appendChild(button);
        }

        const button = divider.querySelector(".section-toggle");
        const toggle = () => setCollapsibleSectionState(divider, content, !content.hidden);

        button.addEventListener("click", (event) => {
            event.stopPropagation();
            toggle();
        });

        divider.addEventListener("click", (event) => {
            if (event.target.closest("button")) {
                return;
            }
            toggle();
        });

        setCollapsibleSectionState(divider, content, true);
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const id = link.getAttribute("href").slice(1);
            const target = document.getElementById(id);
            const content = target?.closest("[data-collapsible-content]");

            if (!target || !content) {
                return;
            }

            event.preventDefault();
            openCollapsibleContent(content);
            requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
        });
    });

    if (window.location.hash) {
        const target = document.getElementById(window.location.hash.slice(1));
        const content = target?.closest("[data-collapsible-content]");
        if (content) {
            openCollapsibleContent(content);
        }
    }
}

function getSpiderEls() {
    return {
        list: document.getElementById("spiderItemList"),
        filters: [...document.querySelectorAll(".spider-filter")],
        image: document.getElementById("spiderItemImage"),
        type: document.getElementById("spiderItemType"),
        name: document.getElementById("spiderItemName"),
        intent: document.getElementById("spiderItemIntent"),
        metrics: document.getElementById("spiderMetrics"),
        mechanics: document.getElementById("spiderMechanics"),
        tactical: document.getElementById("spiderTactical"),
        highlights: document.getElementById("spiderHighlights"),
        polygon: document.getElementById("spiderRadarPolygon")
    };
}

function spiderRadarPoints(scores) {
    const center = 120;
    const radius = 90;
    const step = 360 / scores.length;

    return scores.map((score, index) => {
        const safeScore = Math.max(0, Math.min(100, Number(score) || 0));
        const angle = (-90 + (step * index)) * (Math.PI / 180);
        const pointRadius = radius * (safeScore / 100);
        const x = center + (Math.cos(angle) * pointRadius);
        const y = center + (Math.sin(angle) * pointRadius);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
}

function renderSpiderList(items, selectedId, spiderEls) {
    if (!spiderEls.list) {
        return;
    }

    spiderEls.list.innerHTML = items.map((item) => `
        <button class="spider-item-card${item.id === selectedId ? " is-active" : ""}" type="button" data-spider-id="${item.id}">
            <img class="spider-item-thumb" src="${item.image}" alt="">
            <span>
                <strong>${item.name}</strong>
                <span>${item.type}</span>
            </span>
        </button>
    `).join("");
}

function renderSpiderDetail(item, spiderEls) {
    if (!item || !spiderEls.name) {
        return;
    }

    spiderEls.image.src = item.image;
    spiderEls.image.alt = item.name;
    spiderEls.type.textContent = item.type;
    spiderEls.name.textContent = item.name;
    spiderEls.intent.textContent = item.intent;
    spiderEls.polygon.setAttribute("points", spiderRadarPoints(item.scores));

    spiderEls.metrics.innerHTML = SPIDER_AXES.map((axis) => `
        <div class="spider-metric spider-metric-label">
            <span>${axis}</span>
            <strong>Defesa</strong>
        </div>
    `).join("");

    if (spiderEls.highlights) {
        spiderEls.highlights.innerHTML = renderSpiderHighlights(item);
    }
    spiderEls.mechanics.innerHTML = item.mechanics.map((text) => `<li>${text}</li>`).join("");
    spiderEls.tactical.innerHTML = item.tactical.map((text) => `<li>${text}</li>`).join("");
}

function getSpiderHighlights(item) {
    const positiveIndexes = [0, 1, 2, 3, 4];
    const strongPositive = positiveIndexes
        .map((index) => ({ index, score: item.scores[index] }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    let weakPositive = positiveIndexes
        .map((index) => ({ index, score: item.scores[index] }))
        .sort((a, b) => a.score - b.score)
        .filter((entry) => entry.score <= 45)
        .slice(0, 2);

    if (!weakPositive.length) {
        weakPositive = positiveIndexes
            .map((index) => ({ index, score: item.scores[index] }))
            .sort((a, b) => a.score - b.score)
            .slice(0, 2);
    }

    const strengths = strongPositive.map(({ index, score }) => ({
        kind: "strength",
        iconType: SPIDER_AXIS_META[index].key,
        label: SPIDER_AXIS_META[index].strong,
        text: "Ponto tático favorável no uso defensivo."
    }));

    if (item.scores[5] <= 35) {
        strengths.push({
            kind: "strength",
            iconType: SPIDER_AXIS_META[5].key,
            label: SPIDER_AXIS_META[5].strong,
            text: "Funciona bem sem depender tanto de condição externa."
        });
    }

    const weaknesses = weakPositive.map(({ index, score }) => ({
        kind: "weakness",
        iconType: SPIDER_AXIS_META[index].key,
        label: SPIDER_AXIS_META[index].weak,
        text: "Ponto de atenção ao escolher esse arsenal."
    }));

    if (item.scores[5] >= 55) {
        weaknesses.unshift({
            kind: "weakness",
            iconType: SPIDER_AXIS_META[5].key,
            label: SPIDER_AXIS_META[5].weak,
            text: "O desempenho pode variar bastante conforme o mapa."
        });
    }

    return {
        strengths: strengths.slice(0, 3),
        weaknesses: weaknesses.slice(0, 3)
    };
}

function renderSpiderHighlightMedia(entry) {
    if (entry.icon) {
        return `
            <span class="spider-highlight-media">
                <img src="${entry.icon}" alt="">
            </span>
        `;
    }

    return `
        <span class="spider-highlight-media">
            <span class="spider-highlight-symbol symbol-${entry.iconType || entry.icon || "generic"}" aria-hidden="true"></span>
        </span>
    `;
}

function renderSpiderHighlightCard(entry) {
    return `
        <span class="spider-highlight-card is-${entry.kind}">
            ${renderSpiderHighlightMedia(entry)}
            <span>
                <strong>${entry.label}</strong>
                <small>${entry.text}</small>
            </span>
        </span>
    `;
}

function renderSpiderHighlights(item) {
    const highlights = item.advantages || item.disadvantages
        ? {
            strengths: (item.advantages || []).map((entry) => ({ ...entry, kind: "strength" })),
            weaknesses: (item.disadvantages || []).map((entry) => ({ ...entry, kind: "weakness" }))
        }
        : getSpiderHighlights(item);

    return `
        <div class="spider-highlight-group">
            <strong>Vantagens</strong>
            <div>${highlights.strengths.map(renderSpiderHighlightCard).join("")}</div>
        </div>
        <div class="spider-highlight-group">
            <strong>Counters e desvantagens</strong>
            <div>${highlights.weaknesses.map(renderSpiderHighlightCard).join("")}</div>
        </div>
    `;
}

function setupSpiderChart() {
    const spiderEls = getSpiderEls();
    if (!spiderEls.list || !spiderEls.filters.length) {
        return;
    }

    let currentFilter = "all";
    let selectedId = SPIDER_ITEMS[0].id;

    const getFilteredItems = () => SPIDER_ITEMS.filter((item) => {
        if (currentFilter === "all") {
            return true;
        }
        return item.category === currentFilter || item.tags.includes(currentFilter);
    });

    const refresh = () => {
        const filteredItems = getFilteredItems();
        if (!filteredItems.some((item) => item.id === selectedId)) {
            selectedId = filteredItems[0]?.id || SPIDER_ITEMS[0].id;
        }

        renderSpiderList(filteredItems, selectedId, spiderEls);
        renderSpiderDetail(SPIDER_ITEMS.find((item) => item.id === selectedId), spiderEls);
    };

    spiderEls.filters.forEach((button) => {
        button.addEventListener("click", () => {
            currentFilter = button.dataset.spiderFilter || "all";
            spiderEls.filters.forEach((filterButton) => {
                filterButton.classList.toggle("is-active", filterButton === button);
            });
            refresh();
        });
    });

    spiderEls.list.addEventListener("click", (event) => {
        const card = event.target.closest(".spider-item-card");
        if (!card) {
            return;
        }
        selectedId = card.dataset.spiderId;
        refresh();
    });

    refresh();
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

    if (els.mission5kTime) {
        els.mission5kTime.addEventListener("input", updateMission5kText);
    }

    if (els.shareMission5k) {
        els.shareMission5k.addEventListener("click", shareMission5kText);
    }

    if (els.copyMission5k) {
        els.copyMission5k.addEventListener("click", copyMission5kText);
    }
}

function init() {
    setupCollapsibleSections();
    setupSpiderChart();
    populateManualSelects();
    if (els.announcementText) {
        els.announcementText.value = ANNOUNCEMENT_TEXT;
    }
    if (els.mission5kTime) {
        els.mission5kTime.value = formatTimeValue();
        updateMission5kText();
    }
    bindEvents();
    syncManualAmount(0);
    updateTotals();
    if (els.operatorCard) {
        loadRandomOperator();
    }
}

init();
