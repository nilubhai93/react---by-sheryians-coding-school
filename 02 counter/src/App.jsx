import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [name, setName] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("subitted")
    console.log(name)
    setName("")
  }


  return (
    <>
     <form 
        className='flex gap-x-10' 
        onSubmit={(e)=>{
          submitHandler(e)
        }}>
        <input  
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
         
            className='px-2 py-3 text-black ' 
            type="text" 
            placeholder='Type your name'/>
        <button className='px-4 py-3 text-xl font-semibold bg-white rounded'> Submit </button>
     </form>
    </>
  )
}



export default App
