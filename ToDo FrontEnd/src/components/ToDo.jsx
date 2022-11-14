import React ,{useState,useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom"; 
function ToDo(props){
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const[index,setIndex]=useState("");
  const[flag,setFlag]=useState("");
  const reference=useRef("")
  const navigate=useNavigate();

  function update(event) {
    const newval = event.target.value;
    setInput(newval);
  }
  // Add Items
  const add=async()=> {
    const request={
      method:"POST",
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({text:input})
    }
    await fetch("http://localhost:8080/element/add",request).then(response=>response.json());
   
  }
  // Remove Items
function remove(id){
  const request={
    method:"DELETE",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({text:id})
  }
  fetch("http://localhost:8080/element/remove",request).then(response=>response.json());
  
}

function Logout(){
    
    props.setFlag(false)
    navigate(`/`)
    
}

//Edit items
function edit(entry,id){  
  reference.current.value=entry;
  setIndex(id);
  setFlag(true);
}
function change(){
  const item=reference.current.value;
  setFlag(false);
  const request={
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({text:item,id:index})
  }
   fetch("http://localhost:8080/element/edit",request).then(response=>response.json());
 


}
    
useEffect(()=>{
  fetch("http://localhost:8080/element/item").then(res=>{
    if(res.ok){
      return res.json();
    }
  }).then(item=>setItems(item.data))
  },[items])

    
  
    return(<>
       <div className="logout" > <button onClick={()=>Logout()} >LogOut</button></div>
        <div className="container">
        <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={update} ref={reference} value={input} type="text" />
        <button onClick={add}>
            Add
        </button>
        {flag &&  <button onClick={change}>
            Change
        </button>}
       

        
      </div>
      <div>
        <ul>
        
          {items.map((ele) => {
            return <li >{ele.entry}  <button onClick={()=>remove(ele.id)}>
              Remove
            </button>
            <button onClick={()=>edit(ele.entry,ele.id)} >Edit</button></li>;
          })}
        </ul>
      </div>
    </div>
    </>)
}
export default ToDo;