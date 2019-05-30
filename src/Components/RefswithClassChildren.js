//Ref with class component
//this is children component


import React,{Component} from 'react'

class RefWithClassChildren extends Component{
    constructor(){
        super() 
        this.InputRef = React.createRef()

    }

    FocusChildren(){
        this.InputRef.current.focus()
    }
    render(){
        return(
            <div>
                <label>Name</label>
                <input type="text" ref={this.InputRef} />
               
                
            </div>
        )
    }
} 

export default RefWithClassChildren