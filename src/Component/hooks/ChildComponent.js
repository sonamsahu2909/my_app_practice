import React,{memo} from "react";

function ChildComponent({ increment }) {
  console.log("child rendered");
  return (
    <>
      <h1>ChildComponent</h1>
      <button onClick={increment}>increment</button>
    </>
  );
}

export default memo(ChildComponent);
