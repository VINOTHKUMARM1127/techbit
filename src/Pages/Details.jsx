import React from 'react'
import { useParams } from 'react-router-dom'
import blog  from '../data'

const Details = () => {

  const id = useParams();
  console.log(id)
  const num = blog.find((e)=> e.id == id.id)
  console.log(num)

  return (
        <div className='text-center my-20'>
          <div className='flex justify-center'>
            <img className='w-[300px]' src={num.image} alt={num.name}/>
          </div>
          <div>{num.name}</div>
        </div>
      
    
  )
}

export default Details