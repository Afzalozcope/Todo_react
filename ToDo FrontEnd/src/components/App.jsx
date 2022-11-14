import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import ToDo from "./ToDo";
import Notfound from "./NotFound";

const Protectedroute=({children,flag})=>{
  if(flag===true)
  {return children}  
  return "NO ACCESS"
}
function App() {
  const[flag,setFlag]=useState(false)

 
  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setFlag={setFlag}></Login>}></Route>
      <Route path="/ToDo" element={<Protectedroute flag={flag}><ToDo setFlag={setFlag}></ToDo></Protectedroute>}></Route>
      <Route path="/*" element={<Notfound setFlag={setFlag}></Notfound>}></Route>
    </Routes>
  </BrowserRouter>

  
</>)
}
    

export default App;
