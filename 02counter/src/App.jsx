import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter == 20) return;
    counter++;
    console.log("value Added", Math.random(), counter);
    setCounter(counter);
  }

  const removeValue = () => {
    if(counter == 0) return;
    counter--;
    console.log("value removed", Math.random(), counter);
    setCounter(counter);
  }

  const doubleValue = () => {
    counter*= 2;
    console.log("value doubled", Math.random(), counter);
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur coffi</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <button onClick={doubleValue}>double value: {counter}</button>
    </>
  )
}

export default App
