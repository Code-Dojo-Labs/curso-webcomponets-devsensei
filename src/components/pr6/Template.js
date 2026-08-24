const TEMPLATE = document.createElement('template');

TEMPLATE.innerHTML = `
    <style>
        :host {
            display: block;
            background-color: rgb(39, 40, 34, .8);
            backdrop-filter: blur(5px);
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
        }
        :host * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host > section {
            background-color: #fff;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            width: 50%;
            height: auto;
            margin: 10% auto;
        }
        .header {
            background-color: rgb(39, 40, 34);
            padding: 10px;
            color: #fff;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background-color: #FFF;
            padding: 10px;
            color:rgb(39, 40, 34);
            font-weight: 600;
        }
        .footer {
            background-color: rgb(39, 40, 34);
            padding: 10px;
            border-radius: 0 0 10px 10px;
            color: #fff;
            font-size: 10px;
            text-align: left;
        }
    </style>
    <section>
        <header>
            <h2 class="header">
                <slot name="header">Header</slot>
            </h2>
        </header>
        <article>
            <p class="content">
                <slot></slot>
            </p>
        </article>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </section>
`;



class Template extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
    }
}

window.customElements.define('wc-template', Template);
