import { useState, useCallback, useEffect, useRef } from 'react'

export default function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  let rand;
  let x = document.querySelector('.x');

  // useRef Hook
  const passwordRef = useRef(null)
  const copyPasswordToClipborad = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, {length});
    // x.style.font = 600; 
    // console.log(x.style.font);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*~_`";
    
    for(let i=0; i < length; i++){
      let rand = Math.round((Math.random() * str.length) + 1);
      pass += str[rand];
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()

  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-auto max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">

        <h1 className="text-white text-center my-3 text-2xl font-semibold uppercase">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" className="outline-none w-full py-1 px-3 x" value={password} placeholder='password' readOnly ref={passwordRef}/>
          <button className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 hover:opacity-80" onClick={copyPasswordToClipborad}>COPY</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={16} value={length} className='cursor-poiter w-32' onChange={(e) => {setLength(e.target.value)}} id='rangeInput'/>
            <label htmlFor='rangeInput'>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id='numberInput' onChange={() => {setNumAllowed((prev) => !prev)}} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {setCharAllowed((prev) => !prev)}} />
            <label htmlFor='charInput'>Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}