import React,{useState} from 'react'

const UseStateWithPrevState = () =>{
    const intialVal = 0
    const [count,setCount] = useState(intialVal)
    const Increment5 = ()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return(
        <div>
            count {count}
            <button onClick={()=>setCount(intialVal)}>Reset Count by useState</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment Count by useState</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement Count by useState</button>
            <button onClick={Increment5}>Increment Count 5 by useState</button>
        </div>
        
    )
   
} 

export default UseStateWithPrevState