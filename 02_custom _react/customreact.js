function customRender(reactElement, container){  
    /*

    2 ways to do:
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */
   const domElement = document.createElement
   (reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    if (prop == 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
    
   }

   container.appendChild(domElement)

}

// second way

const reactElement = {
    type: 'a', //tag
    props:{//properties
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google. '
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)// what to inject, where to inject in the method