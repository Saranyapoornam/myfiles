import React from 'react'

const Methodchild = (props) =>{
    return(
        <button onClick = {()=>props.greetHandler('children')}>click me to trigger parent method</button>
    )
}

export default Methodchild