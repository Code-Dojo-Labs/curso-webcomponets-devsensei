class Button extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    padding: 5px;
                    transition: all 0.3s ease;
                }
                :host button {
                    padding: 5px;
                    border-radius: 5px;
                    border: 2px solid;
                    cursor: pointer;
                    background-color: var(--bkg-default,#f3f3f1);
                    border-color: vr(--border-default ,#929583);
                    color: var(--color-default,#515346);
                }
                :host([type="primary"]) button {
                    background-color: var(--bkg-primary,#e6f5ff);
                    border-color: vr(--border-primary ,#1aa3ff);
                    color: var(--color-primary,#005c99);
                }
                :host([type="danger"]) button {
                    background-color: var(--bkg-danger,#ffe6e6);
                    border-color: vr(--border-danger ,#ff1a1a);
                    color: var(--color-danger,#990000);
                }
            </style>
            <button>
                <slot></slot>
            </button>
        `;
    }
}

window.customElements.define("wc-button", Button);
