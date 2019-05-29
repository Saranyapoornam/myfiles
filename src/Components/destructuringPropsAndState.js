import React from 'react'

//usual props
/*const DestructuringpropsFunctional = (props) =>{
    return(
        <div>
            <p>{props.technology} is a {props.type}</p>
        </div>
    )
}*/

// Destructuring props as argument
/*const DestructuringpropsFunctional = ({technology,type,children}) =>{
    console.log(children)
    const {creator} = children.props
    return(
        <div>
            <p>{technology} is a {type} {children} {creator}</p>
            
        </div>
    )2
}*/
// Destructuring props as assignment
const Destructuringprops = (props) =>{
    const {technology,type,children} = props   //we can destructure the state like same inside render().
    const {creator} = children.props  // accesing children property.
    return(
        <div>
            <p>{technology} is a {type} {children} {creator}</p>
            
        </div>
    )
}
export default Destructuringprops


