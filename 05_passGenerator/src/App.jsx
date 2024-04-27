import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

const generatePassword = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(number){
    str += "1234567890"
  }
  if(char){
    str += "!@#$%^&*"
  }
  for (let i = 0; i < length; i++){
    let c = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(c)
  }
  setPassword(pass)
}, [length,char,number]);

const passRef = useRef(null)

const copyPassword = useCallback(()=>{
  passRef.current?.select()
  passRef.current?.setSelectionRange(0,3)
  window.navigator.clipboard.writeText(password)
  
},[password])

useEffect(()=>{generatePassword()},[length,number,char,generatePassword])
  
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-full max-w-md rounded-lg px-5 py-5 bg-slate-500'>
        <div className='flex shadow mb-4 rounded-md '>
          <input type="text" ref = {passRef} value = {password} className=' w-full py-1 px-2 read-only:' placeholder='Password'/>
          <button className=' p-2 bg-green-600 hover:bg-green-700' onClick={()=>copyPassword()}>Copy</button>
        </div>
        <div className='flex gap-x-2'>
          <div className=' flex items-center gap-x-3'>
          <label>Length: {length}</label>
          <input type="range" value = {length} max = "15" min = "5" className=' cursor-pointer' onChange={(e)=>setLength(e.target.value)}/>
          <div className='flex items-center gap-x-1'>
            <label>Number</label>
            <input type="checkbox" onChange={()=>{
              setNumber((prev)=>!prev)
            }}/>
          </div>
          <div className='flex items-center gap-x-1'>
            <label>Character</label>
            <input type="checkbox" onChange={()=>{
              setCharacter((prev)=>!prev)
            }}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
