import React, { useState } from 'react'

function State() {
    const[data, setdata]= useState('sonam')
    function updatedata() {
        setdata('raj')
    }
    console.log('hello state')
  return (
    <>
    <h1>hello {data}</h1>
    <button onClick={updatedata}>click</button>
    </>
  )
}

export default State