import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const users = [
    {
      "name": "Aarav Sharma",
      "photo": "https://randomuser.me/api/portraits/men/75.jpg",
      "age": 28,
      "profession": "Software Engineer",
      "city": "Bangalore"
    },
    {
      "name": "Sneha Patel",
      "photo": "https://randomuser.me/api/portraits/women/65.jpg",
      "age": 25,
      "profession": "Graphic Designer",
      "city": "Mumbai"
    },
    {
      "name": "Raj Verma",
      "photo": "https://randomuser.me/api/portraits/men/32.jpg",
      "age": 35,
      "profession": "Architect",
      "city": "Delhi"
    },
    {
      "name": "Pooja Reddy",
      "photo": "https://randomuser.me/api/portraits/women/45.jpg",
      "age": 30,
      "profession": "Marketing Manager",
      "city": "Hyderabad"
    },
    {
      "name": "Karan Mehta",
      "photo": "https://randomuser.me/api/portraits/men/22.jpg",
      "age": 27,
      "profession": "Data Analyst",
      "city": "Pune"
    }
  ]


  return (
    <>
      <div className='p-10'>
        {users.map(function (element, idx) {
          return <Card key={idx}
            userName={element.name}
            prof={element.profession}
            age={element.age}
            city={element.city}
            photo={element.photo}
            profession={element.profession} />
        })}
      </div>
    </>
  )
}

export default App
