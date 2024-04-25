import { useState } from 'react'

import './App.css'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    <button onClick = {()=>{
        if (count < 20){
        setCount(count+1)
      }
    }}>Increase Count: {count}</button><br />
    <button onClick={()=>count>0?setCount(count-1):setCount(count)}>Decrease Count: {count}</button>
    </>
  )
}

export default App
