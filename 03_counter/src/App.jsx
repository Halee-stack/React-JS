import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  let [counter, setCounter ] = useState(10)

  //let counter = 10

  const addValue = () => {
    setCounter(counter + 1)
    console.log("clicked", counter);
  }

  const deleteValue = () => {
    setCounter(counter - 1)
    console.log("clicked", counter);
  }

  return (
    <>
      <h1>Part 3 of React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={deleteValue}>Delete {counter}</button>
    </>
  )
}

export default App
