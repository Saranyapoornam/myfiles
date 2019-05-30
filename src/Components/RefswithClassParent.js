//Ref with class component
//this is parent component
//we going to access children element by creating ref for it and by triggering children's method.

import React,{Component} from 'react'
import RefWithClassChildren from './RefswithClassChildren';

class RefWithClassParent extends Component{
    constructor(){
        super()

        // first approach 
        //creating ref to children 
        this.ChildInputRef = React.createRef()

    }
    ParentClickHandler = () =>{
        //access children element by triggering children's method.
        this.ChildInputRef.current.FocusChildren()
    }
    render(){
        return(
            <div>
                
                <RefWithClassChildren ref={this.ChildInputRef}/>
                <button onClick={this.ParentClickHandler}>click to focus child input</button>
            </div>
        )
    }
} 

export default RefWithClassParent