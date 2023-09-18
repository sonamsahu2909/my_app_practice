import React from 'react'
import C from './C'

function B(props) {
  return (
    <>
    <h1>B Component</h1>
    <C data = {props.data}/>
    
    </>
  )
}

export default B