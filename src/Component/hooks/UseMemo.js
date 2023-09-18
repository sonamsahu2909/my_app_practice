// value return k use krte h usememo
// memoisevalue ko store kr raha h
// usememo return a memoized value
// usememo hook only runwhen one of its dependencies update
import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setcount] = useState(0);
  const [item, setitem] = useState(10);

  // function multicount(){
  //     console.log('multicount')
  //     return count*5
  // }
  const multicountmemo = useMemo(
    function multicount() {
      console.log("multicount");
      return count * 5;
    },
    [count]
  );
  return (
    <>
      <h1>use memo hooks</h1>
      <h1>hooks in react: {count} </h1>
      <h1>hooks in item : {item}</h1>
      {/* <h2>{multicount()}</h2> */}
      <h1>{multicountmemo}</h1>
      <button onClick={() => setcount(count + 1)}>update count</button>
      <button onClick={() => setitem(item * 10)}>update item</button>
    </>
  );
}

export default UseMemo;
