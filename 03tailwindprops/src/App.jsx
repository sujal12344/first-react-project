import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let myObj = {
  name: "Sujal",
  id: 24
}
let Arr = [1, 2, 3];

function App() {

  return (
  <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="chai" btnTxt="click"/>
    <Card username="chaiaur" btnTxt="click me" />
    <Card username="chaiaurpani"/>
  </>
  )
}

export default App
