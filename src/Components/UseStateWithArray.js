import React,{useState} from 'react'

const UseStateWithArray = () =>{
    const [items,setItem] = useState([])
    const addItem = () =>{
        setItem([...items,{
        id: items.length,
        number: Math.floor(Math.random() *10) + 1
    }])
        
    }
    return(
        <div>
            <button onClick = {addItem}>Click to add random number</button>
           <ul>
               {
                   items.map(item=>(
                   <li key = {item.id}>{item.number}</li>
                   ))
               }
           </ul>
            
        </div>
        
    )
   
} 

export default UseStateWithArray 