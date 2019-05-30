//Forwarding Ref with class component
//this is children component
//React.forwardRef  method hold children component elements

import React  from 'react'

const ForwardingRefWithChildren = React.forwardRef( (props,ref) =>{
    return(
        <div>
            <label>Your Name</label>
            <input type="text" ref={ref} /> 
        </div>
    )
}
)

export default ForwardingRefWithChildren