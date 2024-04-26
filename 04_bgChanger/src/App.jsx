import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'

function App() {
  const [color, setColor] = useState("white")
  

  return (
    <div className=' flex space-x-6 flex-wrap bottom-11 '>
    <Button color = 'Green'/> 
    <Button color = 'Yellow'/>
    <Button color = 'Black'/>v
    <Button color = 'Orange'/>
    <Button color = 'Blue'/>
    <Button color = 'Pink'/>
    </div>
  )
}

export default App
