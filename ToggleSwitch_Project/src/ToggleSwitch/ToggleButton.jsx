 import { useState } from "react"
import "./ToggleButton.css"

import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () =>{

    const[isOn, setIsOn] = useState(true)

    const handleToggleSwitch = () =>{
        setIsOn(!isOn)
    };

    const checkIsOn = isOn ? "on" : "off";
    const toggleBGColor ={backgroundColor:isOn ? "#4caf50" : "red"}
    
    return (
       <>
                <h1 style={{color:"#000",textAlign:"center"}}>Troggle </h1>
                <IoIosSwitch  style={{color:"red",textAlign:"center", fontSize:"82px"}}/>
                
        <div className="toggle-switch" style={toggleBGColor} 
         onClick={handleToggleSwitch}>
        
        
             <div className={`switch ${checkIsOn}`}>
                
                <span className="switch-state">{checkIsOn} </span>

             </div>
        </div>    
       </>
    )
}
