import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" text-center py-4 bg-blue-950 text-white">

        <h1 className='text-[1.4em]'>TECH<span className=''>BIT</span></h1>

      <div className="py-2">
        <div className='w-[60%] mx-auto my-2'>Welcome to TechBit, your ultimate destination for endless Blog adventures. Explore a vast library of Blogs and dive into a world of entertainment curated just for you. With personalized recommendations and a sleek, user-friendly interface, TechBit makes every viewing experience unforgettable.</div>
      </div>

      <div className="">
        <Link  to={`/Policies`}><span className='px-4' href="#">Privacy Policy</span></Link>
        <Link  to={`/Faq`}><span className='px-4' href="#">FAQ</span></Link>
        <Link  to={`/About`}><span className='px-4' href="#">About</span></Link>
        <Link  to={`/Contactus`}><span className='px-4'>Contact Us</span></Link>
      </div>

    </footer>
  )
}

export default Footer