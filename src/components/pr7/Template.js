import Styles from './Styles.js';

const Template = (attributes) => {
    const $HTML = document.createElement('template');
    $HTML.innerHTML = `
        ${Styles}
        <form id="form-${attributes.id}">
            <label for="${attributes.id}">${attributes.label}</label>
            <input type="${attributes.type}" id="${attributes.id}" name="${attributes.name}" placeholder="${attributes.placeholder}" />
            <button type="submit">${attributes.buttonText}</button>
        </form>
    `;
    return $HTML;
};

export default Template;
