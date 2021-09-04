import React from 'react'
import { useState } from 'react'
// const [color,setColor]=useState("bgcolor");
const Bar=(props)=> {
   const{receiveColor}=props

   
   
   const getColor=(dynamicColor)=>{
        setColor(dynamicColor)

        
        
    }
    const [color,setColor]=useState("white");
    return (
        <div className="container">
        <button class="btn" id="btn1" value= "yellow" onClick={(e)=>getColor(e.target.value)}>Yellow</button>
        <button class="btn" id="btn2" value="red" onClick={(e)=>getColor(e.target.value)}>Red</button>
        <button class="btn" id="btn3" value="green" onClick={(e) => getColor(e.target.value)}>Green</button>
        <button class="btn" id="btn4" value="Blue"  onClick={(e) => getColor(e.target.value)} >Blue</button>
        {/* {console.log(color)} */}
        {receiveColor(color)}    
</div>
        

    )
}

export default Bar