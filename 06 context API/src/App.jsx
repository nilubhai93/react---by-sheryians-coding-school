import React, { useContext } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer'
import { dataContext } from './context/UserContext'

const App = () => {

  const data = useContext(dataContext)
  console.log(data)
  return (
    <div>
      <div> This is App {data}</div>
      <Header />
      <Section />
      <Footer />
    </div>

  )
}

export default App
