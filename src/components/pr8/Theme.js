const GlobalTheme = new CSSStyleSheet();

GlobalTheme.replaceSync(`
    :host {
        margin: 1000px auto;
        padding: 20px;
        background-color: #f2ccff;
    }
    :host button {
        padding: 10px;
        border-radius: 50px;
        width: 200px;
        background-color: #AB09C8;
        color:white;
        font-weight: bold;
        font-size: 20px;
    }

`);


export default GlobalTheme;
