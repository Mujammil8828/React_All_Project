import { useState } from "react";

export const State = () =>{
    let value = 0;      

    // const handleButtonClick =()=>{
    //     value++;
    //     console.log(value);
        
    // };

        const [count, setCount] = useState(12);
        const handleButtonClick = ()=>{
            setCount(()=>count+1)
        }

    return(
        <>
        
        <h1>{count}</h1> 
        <button onClick={handleButtonClick}>Increment</button>
        </>
    );
};