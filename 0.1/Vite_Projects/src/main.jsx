import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Topic_1 from './topic_1.jsx'

/*function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}


const reactElement = {
    type: 'a', //tag
    props:{//properties
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click here to visit Google. '
}


const secondElement = (
    <a href="https://google.com" target='_blank'>Google</a>
)

//making with react
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank' },
    'Google site here'
)

*/
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    //MyApp//
    //secondElement
    //reactElemet//
    
)

//StrictMode is optional to write 