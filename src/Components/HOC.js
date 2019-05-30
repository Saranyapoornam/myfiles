// HOC is used to share the common functionalities between the components
//A pattern where function takes as an argument and return new component
// const NewComponent  = HOC(originalComponent)
// const EnhancedComponent  = HOC(originalComponent)
// we cannot pass props directly from the component.need to use ... operator that is spread operator to pass the props.

import React from 'react'

const updatedComponent = (OriginalComponent,valtoincrement) =>{
    class NewComponent extends React.Component{
        constructor(){
            super()
            this.state ={
                count : 0
            }
        }
        IncrementCount = () =>{
            this.setState({
                count : this.state.count + valtoincrement
            }      
            )
        }
        render(){
            return <OriginalComponent count={this.state.count} IncrementCount={this.IncrementCount} {...this.props}/>
        
        }
    }
    return NewComponent
}
export default updatedComponent