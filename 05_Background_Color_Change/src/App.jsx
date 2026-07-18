import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-sm
        bg-black px-4 py-2 rounded-2xl">

          <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 px-1 rounded-full 
          text-black shadow-md"
          style={{backgroundColor: "yellow"}}>yellow
          </button>

          <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 px-1 rounded-full 
          text-black shadow-md"
          style={{backgroundColor: "pink"}}>pink
          </button>

          <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 px-1 rounded-full 
          text-black shadow-md"
          style={{backgroundColor: "purple"}}>purple
          </button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 px-1 rounded-full 
          text-black shadow-md"
          style={{backgroundColor: "blue"}}>blue
          </button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 px-1 rounded-full 
          text-black shadow-md"
          style={{backgroundColor: "green"}}>green
          </button>

          <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 px-1 rounded-full 
          text-black shadow-md"
          style={{backgroundColor: "orange"}}>orange
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
