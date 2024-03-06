import React, { useState } from "react";
import axios from "axios";

const App =() =>{
  //Get requst
  const getDataFromBackend =async ()=>{
   const resp=    await axios.get("http://localhost:8080/call");
   console.log(resp.data);
   document.getElementById("para").innerHTML=resp.data;
  }

//Post requst
  const data="Hello";
  const postDataFromFranted =async ()=>{
   const resp=    await axios.post("http://localhost:8080/testpost",{data});
   console.log(resp.data);
   document.getElementById("para").innerHTML=resp.data;
  }
//Post requst for form

const [formData ,setFormData]=useState("");
  const postDataFromFrantedForm =async ()=>{
    const resp=    await axios.post("http://localhost:8080/testform",{formData});
    console.log(resp.data);
    document.getElementById("para").innerHTML=resp.data;
   }


return (
  <div className="App">
  
  <button onClick={getDataFromBackend}>Get Data</button>
  <p id="para"></p>
 <br></br>
 
<button onClick={postDataFromFranted}>post Data</button>
  <p id="para"></p> 

  <br></br>
 
  <form onClick={postDataFromFrantedForm}>
     <input type="text" name="formData" value={formData} onChange={(e) => setFormData (e.target.value)}></input>
 <br></br>
 <br></br>
    <input type="submit" value="TestForm"></input>
 </form>
  </div>
 );
 }

 export default App;

