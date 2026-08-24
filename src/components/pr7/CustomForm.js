import Templates from "./Template.js";
import fields from "./Fields.js";
import WebComponents from "./WebComponents.js";

class CustomForm extends WebComponents(fields)(HTMLElement) {

    connectedCallback() {
        this.render();
        const form = this.shadowRoot.querySelector("form");
        const input = this.shadowRoot.querySelector("input[type='text']");
        form.addEventListener('submit', (event) => {
        // 1. Evita la recarga nativa de la página
        event.preventDefault();

        // 2. Obtiene el valor ingresado
        const usernameValue = input.value;

        // 3. Crea el evento personalizado con la configuración solicitada
        const customEvent = new CustomEvent('form-submitted', {
            detail: { username: usernameValue },
            bubbles: true,   // Permite que el evento suba por el árbol del DOM
            composed: true   // Permite que el evento atraviese la frontera del Shadow DOM
        });

        // 4. Emite el evento desde el propio componente
        this.dispatchEvent(customEvent);
        });
    }

    render() {
        const props = this.getProps();
        const template = Templates(props);
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("wc-form", CustomForm);

document.addEventListener('form-submitted', (e) => {
    console.log('Datos recibidos del componente:', e.detail.username);
});
