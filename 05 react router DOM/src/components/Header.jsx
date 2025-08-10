import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-7 px-20 bg-emerald-600 text-white flex items-center justify-center'>
        <h2 className='text-2xl'>Niladri Sekhar Maji </h2>
        <div className='flex gap-10'>
            <Link to="/"> Home </Link>
            <Link to="/about"> about </Link>
            <Link to="/product"> product </Link>
            <Link to="/contact"> contact </Link>
        </div>
    </div>

  )
}

export default Header