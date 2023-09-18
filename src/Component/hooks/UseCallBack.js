// usecallback function return krta h
// UseCallBack return a memoized function
// rerendering ko stop krnek liye use memo
import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

function UseCallBack() {
    const [count,setCount] = useState(0)
    console.log('Parent Re-Render')

    // Example to
    const [count1,setCount1] = useState(0)

    const IncrementCount = useCallback(()=>{
        // setCount1((PrevCount)=>PrevCount+1)
        console.log('usecall back hook')
    },[])

      //  const IncrementCount = ()=>{
      //   console.log('hello')
      //  }
    
  return (
    <>
    <h1>Use CallBack</h1>
    <h2>count:{count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment count</button>
    <br></br><br/>
    <h2>count1:{count1}</h2>
    <ChildComponent Increment ={IncrementCount}/>
    </>
  )
}

export default UseCallBack