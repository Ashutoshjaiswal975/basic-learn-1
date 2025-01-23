function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    
    // Set text content instead of innerHTML
    domElement.textContent = reactElement.children;

    // Set attributes safely
    if (reactElement.props) {
        Object.keys(reactElement.props).forEach(key => {
            domElement.setAttribute(key, reactElement.props[key]);
        });
    }

    // Append the element to the container
    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

// Ensure container exists before rendering
if (mainContainer) {
    customRender(reactElement, mainContainer);
}
