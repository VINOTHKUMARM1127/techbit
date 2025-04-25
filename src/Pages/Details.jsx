import React from 'react'
import { useParams } from 'react-router-dom'
import blog  from '../data'

const Details = () => {

  const id = useParams();
  console.log(id)
  return (
    {blog.map(num =>{
      if(num.id.toString() == id)
      {
       return(
        <div>{num.name}</div>
      )}
    })}
  )
}

export default Details