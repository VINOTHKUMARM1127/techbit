import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-12 py-5 bg-blue-900 '>
      <div>TechBit</div>
      <div className=''>
        <li className='inline mx-[3em]'>Blog</li>
        <li className='inline mx-[3em]'>Reviews</li>
        <li className='inline mx-[3em]'>Contact</li>
      </div>
    </div>
    
  )
}

export default Header