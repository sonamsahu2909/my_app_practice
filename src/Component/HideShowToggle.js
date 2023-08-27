import React, { useState } from 'react'

function HideShowToggle() {
    const [status,setstatus] = useState(true)
  return (
    <>
    <h1>hello</h1>
      {
        status? <h1>sonam sahu</h1>:null
      }
      <button onClick={()=>setstatus(false)} className='btn btn-primary'>Hide</button>
      <button onClick={()=>setstatus(true)} className='btn btn-secondary'>Show</button>
      <button onClick={()=>setstatus(!status) } className='btn btn-danger'>Toggle</button>
    </>
  )
}

export default HideShowToggle