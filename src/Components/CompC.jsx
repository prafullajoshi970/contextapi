import React from 'react'
import CompD from './CompD'
import { useContext } from 'react'
import myContext from './AppContext'
const CompC =()=>{
  const contextData = useContext(myContext);

  return (
    <div>
      <hr/>
      <button onClick={()=>contextData[1]("mumbai")}>click!!!</button>
      send Data to comp A
      <CompD/></div>
  )
}

export default CompC