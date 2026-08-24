class Card extends HTMLElement {
    // aqui nunca se renderea el contenido, solo se renderiza el contenido del shadow dom
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    // aqui se renderiza el contenido del shadow dom
    connectedCallback() {
        console.log("Componente Montado");
        this.render();
    }

    // aqui se desmonta el componente
    disconnectedCallback() {
        console.log("Componente Desmontado");
    }

    // aqui se inicializa el template
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: sans-serif;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    max-width: 300px;
                    background: #f9f9f9;
                }
                :host(:hover),:host(:hover) p {
                    background: #272822;
                    color: #f9f9f9;
                    cursor: pointer;
                }
                h3 { color: #272822; margin: 0 0 8px 0; }
                p { color: #666; font-size: 14px; }
            </style>
            <div>
                <h1>Perfil Gakusei</h1>
                <p>Curso: Aprendiendo Web Components Nativos</p>
            </div>
        `;
    }

}

window.customElements.define("wc-card", Card);
