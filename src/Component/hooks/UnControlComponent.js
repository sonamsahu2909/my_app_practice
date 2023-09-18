import React, { useRef } from 'react'

function UnControlComponent() {
    let inputRef = useRef(null)
    let inputRef2 = useRef(null)

    function submitform(e){
        e.preventDefault()
        console.log('first Input value :',inputRef.current.value)
        console.log('Second Input Value :',inputRef2.current.value)
        let input3 =document.getElementById("input3").value; 
        console.log("input value : ",input3)
    }

  return (
    <>
    <h1>Un-Control Component</h1>
    <form onSubmit={submitform}>
        <input type='text' ref={inputRef} />
        <input type='text' ref={inputRef2}/>
        <input type='text' id='input3'/>
        <button>submit</button>
    </form>
    </>
  )
}

export default UnControlComponent