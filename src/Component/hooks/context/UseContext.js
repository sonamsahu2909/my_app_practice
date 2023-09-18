import React, { createContext } from "react";
import Child1 from "./Child1";

const myContext = createContext();

function UseContext() {
  const data = "sonam sahu";
  return (
    <>
      <h1>Use Context</h1>
      <myContext.Provider value={data}>
        <Child1 />
      </myContext.Provider>
    </>
  );
}

export default UseContext;
export {myContext}
