import React from 'react'

const ErrorHoldingComponent = ({technology}) =>{
    if(technology === 'Angular'){
        throw new Error('Its not an library')
    }
    return(
        <div>
            <h1> {technology} is a library</h1>
        </div>
        
    )
   
} 



export default ErrorHoldingComponent