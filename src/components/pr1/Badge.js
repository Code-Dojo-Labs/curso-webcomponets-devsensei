class Badge extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.textContent = "Gakusei en entrenamiento";
    }
}

window.customElements.define('wc-badge', Badge);
