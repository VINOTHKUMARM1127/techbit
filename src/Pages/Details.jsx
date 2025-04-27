import React from 'react'
import { useParams } from 'react-router-dom'
import blog  from '../data'

const Details = () => {

  const id = useParams();
  
  const num = blog.find((e)=> e.id == id.id)
  

  return (
        <div className='text-center my-20 mx-2'>
          <div className='flex justify-center'>
            <img className='w-[300px]' src={num.image} alt={num.name}/>
          </div>
          <div className='text-[1.3em] font-bold mt-3 mb-2'>{num.name}</div>
          <div className='text-[1.2em] mt-3 mb-2 mx-6 text-justify'>{num.Description}</div>
          <div className='text[1.1em] opacity-80'><span className='font-bold'>Author:</span>{num.author}</div>
        </div>
      
    
  )
}

export default Details