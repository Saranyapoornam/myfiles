//useState is used to add state to the functional component 
//In class component state will be a object,but here it can be string,number,Boolean,array and object
//useState() will return an array with 2 elements,first is current element and second is setter function.
//use spread operator in array and object useState

import React,{useState} from 'react'

const UseStateHook = () =>{
    const [count,setCount] = useState(0)
    return(
        <div>
            count {count}
            <button onClick={()=>setCount(count + 1)}>Increment Count by useState</button>
        </div>
        
    )
   
} 

export default UseStateHook