import React from 'react'
import data from "../data.js"
import { Link } from 'react-router-dom'

const Display = () => {

  return (
    <section>
      <div className='text-[2.2em] text-center mt-3'>BLOGS</div>
      <div className='flex flex-wrap gap-6 justify-center text-center py-10 px-2'>

        {data.map((val,key) => (
          <Link key={key} to={`/blog/${val.id}`}>
          <div className='w-[200px] border border-black'>
            <img src={val.image} alt="" />
            <div key={val.id}>{val.name}</div>
            <div>Author:{val.author}</div>
          </div>
          </Link>
        )
        )}
      </div>
    </section>
  )
}

export default Display