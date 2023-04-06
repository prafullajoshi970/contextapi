import { useState } from 'react'
import CompB from './CompB'
import myContext from './AppContext'
const CompA=()=>{

  const [data,setData]=useState("current Name");
  const [newData,setNewData]=useState("")

 console.log(setData);
  return (
    <div>
      <p style={{color:'green'}}>Comp A: {newData}</p>
      <button onClick={()=>setData("New Name")}>click to change Data in D comp</button>
      <br></br>
      <hr/>
     <p style={{color:"red"}}>{data}</p> 
    <myContext.Provider value={[data,setNewData] }>
    <CompB/>
    </myContext.Provider>
    
            
       
        
    </div>
  )
}

export default CompA;
