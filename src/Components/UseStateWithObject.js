import React,{useState} from 'react'

const UseStateWithObject = () =>{
    const [name,setName] = useState({firstName : '',lasttName : ''})
    return(
        <div>
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type="text" vallue={name.lasttName} onChange={e=>setName({...name,lasttName:e.target.value})}/>
            <h1>First Name - {name.firstName}</h1>
            <h1>Last Name -{name.lasttName}</h1>
            <h1>{JSON.stringify(name)}</h1>
            
        </div>
        
    )
   
} 

export default UseStateWithObject