import { useState } from "react";

// const users = [
//     {name: "zaki", age:25},
//     {name: "zeshan", age:35},
//     {name: "Lal", age:45},
//     {name: "Mak", age:145},
// ];                               ye tha no hook ka use niche hoga State ka use


export const DriveState = () => {

    const [users, setUsers] = useState([
        { name: "zaki", age: 25 },
        { name: "zeshan", age: 35 },
        { name: "Lal", age: 45 },
       
    ])
   
       // console.log(users  );

       const userCount =users.length;

        const averageAge = users.reduce((accum, curElem)=> accum + curElem.age, 0)/userCount;
        
    return (
        <div className="main-div">
            <h1>users List</h1>
            <ul>
                {
                    users.map((curElem, index) => {
                        return (
                            <>
                                <li key={index}>
                                    {curElem.name} - {curElem.age}  year old
                                </li>

                                                              
                            </>
                        )

                    })
                }
            </ul>
            <p>Total User: {userCount}</p>
            <p>Averege Age:{averageAge}</p>
        </div>
        
    );
};