//UseEffect will work instead of componentDidMount,componentWillUpdate,componentWillUnMount
// It minimize the repetition of codes in componentDidMount,componentWillUpdate,componentWillUnMount instead we write all code in useEffect()function.
// we can conditionally use useEffect by setting array with variable in second parameter. 
import React,{useState,useEffect} from 'react'

const UseEffectHook = () =>{
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(
        ()=>{
            console.log('useEffect updating document title when clicking button ')
            document.title = `clicked ${count} times`
        },[count]
        // useEffect with [count] will watch the value count and trigger it once there is any changes.
    )
    return(
        <div>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            clicked {count} times
            <button onClick={()=>setCount(count + 1)}>Click count</button>
        </div>
        
    )
   
} 

export default UseEffectHook