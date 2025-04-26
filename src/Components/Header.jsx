import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between px-12 py-5 bg-blue-900 '>
      <div>TechBit</div>
      <div className=' hidden md:block'>
        <li className='inline mx-[3em]'>Blog</li>
        <li className='inline mx-[3em]'>Reviews</li>
        <Link to={`/Contactus`}><li className='inline mx-[3em]'>Contact</li></Link>
      </div>
    </div>
    
  )
}

export default Header