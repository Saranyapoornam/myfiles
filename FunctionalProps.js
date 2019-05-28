import React from 'react'

const FunctionalProps = (props) =>{
    return(
        <div>
            <h1> Hi {props.name} alias name {props.aliasName}</h1>
            {props.children}
        </div>
        
    )
   
} 



export default FunctionalProps