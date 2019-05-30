//Forwading Ref with class component
//this is parent component
//we going to access children element by creating ref to it and forwarding it to children component and by triggering it's own method.
//it avoid assigning ref to element in the children component and declaring method in children component.


import React,{Component} from 'react'
import ForwardingRefWithChildren from './ForwadingRefChildren';

class ForwardingRefWithParent extends Component{
    constructor(){
        super()

        // first approach 
        //creating ref to children 
        this.ChildInputRef = React.createRef()

    }
    ParentClickHandler = () =>{
        //access children element by triggering children's method.
        this.ChildInputRef.current.focus()
    }
    render(){
        return(
            <div>
                
                <ForwardingRefWithChildren ref={this.ChildInputRef}/>
                <button onClick={this.ParentClickHandler}>click to focus child input</button>
            </div>
        )
    }
} 

export default ForwardingRefWithParent