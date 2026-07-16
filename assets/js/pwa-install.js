(function () {
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches || navigator.maxTouchPoints > 0;
    const isMobileViewport = window.matchMedia("(max-width: 1024px)").matches;
    const isAppleMobile = /iphone|ipad|ipod/i.test(navigator.userAgent)
        || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isInstallTarget = (isAppleMobile || (isTouchDevice && isMobileViewport)) && !isStandalone;
    let deferredPrompt = null;
    let banner = null;

    if ("serviceWorker" in navigator && location.protocol !== "file:") {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js").catch(() => {});
        });
    }

    if (!isInstallTarget) {
        return;
    }

    function wasDismissedThisSession() {
        return sessionStorage.getItem("blastoisePwaDismissed") === "1";
    }

    function dismissBanner() {
        sessionStorage.setItem("blastoisePwaDismissed", "1");
        if (banner) {
            banner.classList.remove("is-visible");
            setTimeout(() => banner.remove(), 220);
        }
    }

    function setGuideMode() {
        if (!banner) {
            return;
        }

        banner.classList.add("is-guide");
        const text = banner.querySelector(".pwa-install-text");
        const action = banner.querySelector(".pwa-install-action");
        if (text) {
            text.textContent = isAppleMobile
                ? "No iPhone/iPad, abra no Safari, toque em Compartilhar e escolha Adicionar a Tela de Inicio."
                : "Abra o menu do navegador e escolha Instalar app ou Adicionar a tela inicial.";
        }
        if (action) {
            action.textContent = "Entendi";
        }
    }

    async function installApp() {
        if (!deferredPrompt) {
            if (banner && banner.classList.contains("is-guide")) {
                dismissBanner();
                return;
            }
            setGuideMode();
            return;
        }

        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        deferredPrompt = null;
        if (result.outcome === "accepted") {
            dismissBanner();
        }
    }

    function createBanner() {
        if (banner || wasDismissedThisSession()) {
            return;
        }

        banner = document.createElement("div");
        banner.className = "pwa-install-banner";
        banner.setAttribute("role", "dialog");
        banner.setAttribute("aria-label", "Instalar BLASTOISE no dispositivo");
        banner.innerHTML = `
            <img class="pwa-install-icon" src="assets/icons/blastoise-icon-192.png" alt="">
            <div class="pwa-install-copy">
                <strong>Instale o BLASTOISE</strong>
                <span class="pwa-install-text">${isAppleMobile ? "No iPhone/iPad, instale pelo botao Compartilhar do Safari." : "Crie um atalho no dispositivo para abrir o painel mais rapido."}</span>
            </div>
            <button class="pwa-install-action" type="button">${isAppleMobile ? "Ver passo" : "Instalar"}</button>
            <button class="pwa-install-close" type="button" aria-label="Fechar aviso">x</button>
        `;

        document.body.appendChild(banner);
        banner.querySelector(".pwa-install-action").addEventListener("click", installApp);
        banner.querySelector(".pwa-install-close").addEventListener("click", dismissBanner);
        requestAnimationFrame(() => banner.classList.add("is-visible"));
    }

    window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        deferredPrompt = event;
        createBanner();
    });

    window.addEventListener("appinstalled", dismissBanner);

    window.addEventListener("load", () => {
        setTimeout(() => {
            if (!deferredPrompt) {
                createBanner();
                if (isAppleMobile) {
                    setGuideMode();
                }
            }
        }, 900);
    });
})();
