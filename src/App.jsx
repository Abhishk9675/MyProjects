<<<<<<< HEAD
import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('')
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [length, setLength] = useState(8)
  const passowrdRef = useRef(null)

  let passwordGenerator;

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

  passwordGenerator = useCallback(() => { 
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += '0123456789'
    if (char) str += '!@#$%^&*(){}[]"'
    for (let i = 0; i < length; i++) {
      const Char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(Char)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])

  const passwordSelect = useCallback(() => {
    passowrdRef.current.select();
    window.navigator.clipboard.writeText(password)
  }, [password])



  return (
    <>
      <div className='bg-gray-600 text-lg px-4 py-8 max-w-md shadow-md rounded-lg mx-auto text-orange-400 w-full'>
        <h3>Password Generator</h3>
        <div className='flex rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            placeholder='Password'
            className='outline-none rounded-lg w-full py-1 px-3'
            readOnly
            ref={passowrdRef}

          />
          <button onClick={passwordSelect} className='bg-blue-600 text-white px-3 py-1 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer'
            />
            <label>Length : {length}</label>
          </div>
          <div>
            <input type="checkbox"
              onChange={() => { setNumber((prev) => !prev) }}
            />
            <label> Number</label>
          </div>
          <div>
            <input type="checkbox"
              onChange={() => { setChar((prev) => !prev) }}
            />
            <label> Character</label>
          </div>
        </div>
      </div>
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChangeBg from './component/changeBg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChangeBg />
>>>>>>> f8a4ab709ce2dd5c893257fdbf60c199dce4194a
    </>
  )
}

export default App
