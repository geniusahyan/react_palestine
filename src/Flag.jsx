import React from 'react'
import { Typewriter , Cursor } from 'react-simple-typewriter'

function Flag() {
  const text = Typewriter({
    words: ['From the river' , 'To the sea'],
    loop:{},
  })
  return (
    <div className='container'>
      <div className='flag' >
      </div>
      <h1>Free Palestine</h1>
      <h2>{text}</h2>
      <span ><Cursor /></span>
    </div>

  )
}

export default Flag
