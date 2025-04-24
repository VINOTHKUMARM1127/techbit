import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-center py-4">

        <h1 className='text-[1.4em]'>TECH<span className=''>BIT</span></h1>

      <div className="py-2">
        <div className='w-[60%] mx-auto my-2'>Welcome to TechBit, your ultimate destination for endless Blog adventures. Explore a vast library of Blogs and dive into a world of entertainment curated just for you. With personalized recommendations and a sleek, user-friendly interface, TechBit makes every viewing experience unforgettable.</div>
      </div>

      <div className="">
        <a className='px-4' href="#">Privacy Policy</a>
        <a className='px-4' href="#">FAQ</a>
        <a className='px-4' href="#">About</a>
        <a className='px-4' href="#">Contact Us</a>
      </div>

    </footer>
  )
}

export default Footer