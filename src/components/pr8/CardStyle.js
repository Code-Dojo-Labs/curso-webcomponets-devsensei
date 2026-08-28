import GlobalTheme from './Theme.js';

const buttonStyles = new CSSStyleSheet();
buttonStyles.replaceSync(`
    :host button {
        background-color: #AB09;
    }
`);


class CardStyle extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [GlobalTheme, buttonStyles];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <button>Click Me</button>
        `;
    }
}

window.customElements.define('wc-card-style', CardStyle);
