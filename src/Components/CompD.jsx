import React from 'react'
import { useContext } from 'react'
import myContext from './AppContext'

function CompD() {
const contextData=useContext(myContext);


  return (
    <div>
      <hr/>
       This is Component D
        <p style={{color:"red"}}>{contextData}</p>
      
    </div>
  )
}

export default CompD