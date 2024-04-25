import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const obj = {
    type: 'Card'
  }
  const arr = [1,2,3]
  return (
    <>
      <h1 className="bg-yellow-300 rounded-2xl p-4 text-green-500 text-3xl">Tailwind CSS</h1>
      <Card about = "About MacBook Air" btn = "View details"/>

      <Card about = "About Acer" btn = "Read More"/>
    </>
  )
}

export default App
