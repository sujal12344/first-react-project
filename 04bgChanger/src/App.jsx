import {useState} from "react"

export default function App() {

  const [color, setColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  return (

    <div className="w-full h-screen duration-700" style={{backgroundColor: color, color: textColor}}>Don is Don

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-center ">

        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-full">

          <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "red"}} onClick={() => {setColor("red"), setTextColor("green")}}>Red</button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "green"}} onClick={() => {setColor("green"), setTextColor("red")}}>Green</button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "blue"}} onClick={() => {setColor("blue"), setTextColor("magenta")}}>Blue</button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "magenta"}} onClick={() => {setColor("magenta"), setTextColor("yellow")}}>Magenta</button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "black"}} onClick={() => {setColor("black"), setTextColor("yellow")}} >Black</button>

          <button className="outline-none px-4 rounded-full text-white shadow-lg" style={{background: "yellow"}} onClick={() => {setColor("yellow"), setTextColor("black")}}>Yellow</button>

        </div>

      </div>

    </div>
  )
}