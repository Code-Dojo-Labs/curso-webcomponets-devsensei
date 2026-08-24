/* Mixin */
const WebComponents = (fields = {}) => SuperClass => class extends SuperClass {
    #FIELDS = fields;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(fields);
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }


    getProps() {
        const props = {};
        for (const [key, defaultValue] of Object.entries(this.#FIELDS)) {
            if (typeof defaultValue === "boolean") {
                props[key] = this.hasAttribute(key);
            } else {
                props[key] = this.getAttribute(key) || defaultValue;
            }
        }
        return props;
    }
}

export default WebComponents;
