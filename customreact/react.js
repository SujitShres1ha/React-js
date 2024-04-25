const container = document.querySelector('#root')

const element = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank'},
    children: 'Click here'
    }


 
function customRender(element, container) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props[prop]);
    }
    container.appendChild(domElement);
}

customRender(element, container);
