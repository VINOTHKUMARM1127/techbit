import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between px-6 md:px-12 py-5 bg-blue-900 text-white'>
      <Link to="/"><div className='font-[1.2em] px-5'>TECHBIT</div></Link>
      <div className=' hidden md:block'>
        <li className='inline mx-[3em]'>Home</li>
        <li className='inline mx-[3em]'>Blog</li>
        <Link to={`/Contactus`}><li className='inline mx-[3em]'>Contact Us</li></Link>
      </div>
    </div>
    
  )
}

export default Header