const stylize = (styles) => {
    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(styles));
    document.head.appendChild(styleElement);
}

export { stylize };