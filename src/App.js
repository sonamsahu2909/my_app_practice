// import React, { useState } from "react";
import Header from "./Component/layout/Header";
// import Footer from "./Component/layout/Footer";
// import Home from "./Component/Home";
import "./App.css";
import "./Component/css/style.css";

// import { Route, Routes } from "react-router-dom";
// import About from "./Component/About";
// import Team from "./Component/Team";
// import Contact from "./Component/Contact";
// import PageNotFound from "./Component/PageNotFound";
// import Click from "./Component/Click";
// import State from "./Component/layout/State";
// import StateOne from "./Component/StateOne";
// import Props from "./Component/Props";
// import HideShowToggle from "./Component/HideShowToggle";
// import Condition from "./Component/Condition";
// import Form from "./Component/Form";
// import User from "./Component/User";
// import CState from "./Component/CState";
// import Constructor from "./Component/lifecyclemethod/Constructor";
// import Render1 from "./Component/lifecyclemethod/Render1";
// import ComponentDidMound from "./Component/lifecyclemethod/ComponentDidMound";
// import UseState from "./Component/hooks/UseState";
// import UseEffect from "./Component/hooks/UseEffect";
// import UseEffect1 from "./Component/hooks/UseEffect1";
// import UseEffectAPI from "./Component/hooks/UseEffectAPI";
// import NextedList from "./Component/hooks/NextedList";
// import ApiDisplay from "./Component/hooks/ApiDisplay";
// import CertificateDisplay from "./Component/hooks/CertificateDisplay";
// import Bootstrap from "./Component/hooks/Bootstrap";
// import ReUseComponentInUse from "./Component/hooks/ReUseComponentInUse";
import SendDataChild from "./Component/hooks/SendDataChild";
import UseMemo from "./Component/hooks/UseMemo";
import UseRef from "./Component/hooks/UseRef";
import ForwardRef from "./Component/hooks/ForwardRef";

function App() {

  // const [data,setdata] = useState('sonam sahu')
  let name = 'sonam'

  // const user=[
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   },
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   },
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   }
  //  ]

  function parent(data){
    alert(data.name)
  }
  
  return (
    <>
      {/* <Header /> */}
      {/* <Click/> */}
      {/* <State/> */}
      {/* <StateOne/> */}
      {/* <Props name={data}/>
      <button onClick={()=>setdata('ram')}>clickme</button> */}
      {/* <HideShowToggle/> */}
      {/* <Condition/> */}
      {/* <Form/> */}
      {/* <User n = {name}/> */}
      {/* <CState/> */}
      {/* <Constructor/> */}
      {/* <Render1/> */}
      {/* <ComponentDidMound/>     */}
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      {/* <UseEffect1/> */}
      {/* <UseEffectAPI/> */}
      {/* <NextedList/> */}
      {/* <ApiDisplay/> */}
      {/* <CertificateDisplay/> */} 
      {/* <Bootstrap/> */}
      
      {/* {
        user.map((item,i)=>
        <ReUseComponentInUse data={item}/>
        // <h1>{item.name}</h1>
        )  
      } */}



      {/* <SendDataChild alert={parent}/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      <ForwardRef/>


      
      {/* <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/contact" element={<Contact/>} /> */}
        {/* page not found always write in down */}
        {/* <Route path="*" element={<PageNotFound/>} />
      </Routes> */}
      {/* <Footer /> */}
    
    </>
  );
}

export default App;
