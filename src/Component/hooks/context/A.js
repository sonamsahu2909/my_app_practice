import React from 'react'
import B from './B'

function A() {
    const data = 'sonam sahu'
  return (
    <>
    <h1>A Component</h1>
    <B data ={data}/>
    </>
  )
}

export default A