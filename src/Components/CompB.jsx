import React ,{useContext}from 'react'
import CompC from './CompC'
import myContext from './AppContext'

function CompB() {
const myData=useContext(myContext)
  return (
    <div>
      <hr/>
  
       Comp B: <CompC>{myData}</CompC>
        
        </div>
  )
}

export default CompB