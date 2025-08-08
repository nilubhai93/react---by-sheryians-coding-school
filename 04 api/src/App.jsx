import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list")

    setData(response.data)
  }
  

  useEffect(() => {
    getData()
  }, [])
  



  return (
    <>
      <div className=' p-10'>
        <button
          className='bg-white text-black px-5 py-2 rounded-2xl border-amber-300 '> get data
        </button>

        <div className='p-5 mt-5 bg-gray-950'>

          {data.map(function (elem, idx) {
            return <div key={idx} className=" bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3">
                <img className='h-40' src={elem.download_url}/>
                <h1> {elem.author}</h1>
            </div>
          })}

        </div>

      </div>
    </>
  )
}

export default App
