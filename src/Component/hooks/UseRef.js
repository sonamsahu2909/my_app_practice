import React,{useRef} from 'react'


function UseRef() {
    let inputRef = useRef(null)
    function controlInput(){
        inputRef.current.value = 'sonam sahu'
        inputRef.current.focus()
        inputRef.current.style.color = 'red'
        inputRef.current.style.backgroundColor = 'blue'
    }
  return (
    <>
    <h1>use Ref</h1>
    <input type='text' ref={inputRef} />
    <button onClick={controlInput}>handle input</button>
    </>
  )
}

export default UseRef