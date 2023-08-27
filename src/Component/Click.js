import React from 'react'

function Click() {
    let name = 'sonam'
    function hello(a){
        name = a
        alert(name)
    }
    console.log('hello gwalior')
  return (
   <>
    <h1>hello {name}</h1>
    <button onClick={hello}>update</button>
    <button onClick={()=>alert('raj')}>click me</button>
   </>
  )
}

export default Click