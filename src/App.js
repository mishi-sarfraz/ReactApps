
import './App.css';
import Bar from "./Components/Bar"
import Area from "./Components/Area"
import { useState } from 'react';
import React from 'react'

function App() {
  //var {labcolor,setLabcolor}= useState("white")
  let newcolor = ""
  const receiveColorHere=(item)=>{
//  console.log(item)
 newcolor=item;

  // setLabcolor(newcolor)
  // console.log(newcolor) 
}
  
  return (
    <>
    
    <Bar receiveColor={receiveColorHere}/>
    <Area c={newcolor}/>
    
    </>
  )
}



export default App;
