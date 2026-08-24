class Dynamic extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        console.log("Componente Desmontado");
    }

    // se declaran los atributos
    static get observedAttributes() {
        return [
            "role",
            "active",
        ];
    }

    // Detecta el cambio de los atributos
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
            this.render();
        }
    }

    render() {
        const role = this.getAttribute("role") || "Default role";
        const active = this.hasAttribute("active") || false;
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                border: 1px solid #ccc;
                width: fit-content;
                height: auto;
                margin: 50px auto;
                padding: 10px;
                text-align: center;
                border-radius: 10px;
            }
            :host * {
                padding: 0;
                margin: 0;
            }
            :host([active]) {
                background-color: #8600b3;
                color:#f2ccff;
            }
            :host(:not([active])) {
                background-color: #f2ccff;
                color:#8600b3;
            }
        </style>
        <div>
            <p>Role: ${role}</p>
        </div>
        `;
    }

}

window.customElements.define("wc-dynamic", Dynamic);
