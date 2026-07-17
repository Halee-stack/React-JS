import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "kate",
    age: 25
  }

  let newArr = [1, 2, 3]

  return (
    <>
    <h1 className='bg-blue-300 text-black p-4 rounded-xl mb-4'>Tulip</h1>
    <Card username="Kate"/>
    <Card username="Jack" btnText="Click"/>
  
  
    </>
  )
}

export default App
