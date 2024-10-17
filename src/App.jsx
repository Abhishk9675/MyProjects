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
    </>
  )
}

export default App
