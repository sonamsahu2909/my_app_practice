import React, { useState } from 'react'

function ControlComponent() {
    const [InputValue,SetInputvalue] = useState()
    const handleChange =(event)=>{
        SetInputvalue(event.target.value)
        console.log(InputValue)
    }
  return (
    <>
    <h1>Control Components</h1>
    <input type='text' value={InputValue} onChange={handleChange}/>
    <h2>current value: {InputValue}</h2>
    </>
  )
}

export default ControlComponent