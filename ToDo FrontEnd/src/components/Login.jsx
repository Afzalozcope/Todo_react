import React from "react";
import {useNavigate} from "react-router-dom";


function Login(props)
{  
    const navigate=useNavigate()

    function submitform(){
        console.log("hi")
        props.setFlag(true)
        navigate(`/ToDo`)
}
 return(<>
    <label>Enter Name:</label>
    <input type="text"></input>
    <label>Enter Password:</label>
    <input type="password"></input>
    
    <button  onClick={()=>submitform()}>
        Submit
    </button>
 </>)

}
export default Login;