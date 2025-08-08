import React from 'react'

function Card(props) {

  console.log(props.photo)

  return (
    <div className='bg-white text-black inline-block p-6 m-1 gap-10'>
        <img className='h-32 w-32 rounded-full mb-3' src={props.photo} alt/>
        <h1 className='text-2xl font-semibold mb-4'> {props.userName}</h1>
        <h3 className='text-blue-400 text-xs'> {props.prof}</h3>
        <h2> {props.city},{props.age} </h2>
        <button className='mt-5 bg-red-200 text-black px-2 rounded-2xl '>Submit</button>
    </div>
  )
}


export default Card