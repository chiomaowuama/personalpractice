import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='border-2 border-green-700 bg-yellow-300'>hello tailwind and vite</h1>
    </>
  )
}

export default App
