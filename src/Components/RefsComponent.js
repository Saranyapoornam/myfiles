// ref is used to creating reference to our element based on this we can access dom element
//Two types of ref
// 1.creating ref using createRef() method
// 2.creating ref using callback ref method

import React,{Component} from 'react'

class RefComponent extends Component{
    constructor(){
        super()

        // first approach 
        this.InputRef = React.createRef()

        // second approach
        this.callbackRef = null
        this.setCallBack = element =>{
        this.callbackRef = element
        }
    }
    componentDidMount(){

        // by using second approach ,no need to use cuurent to access element
        this.callbackRef.focus()

        // by using first approach ,we need to use cuurent to access element
        //this.InputRef.current.focus()
    }
    ClickHandler = () =>{
        alert(`Full name ${this.InputRef.current.value} ${this.callbackRef.value} `)
    }
    render(){
        return(
            <div>
                <label>First Name</label>
                <input type="text" ref={this.InputRef} />
                <label>Last Name</label>
                <input type="text" ref={this.setCallBack} />
                <button onClick={this.ClickHandler}>click to get value</button>
            </div>
        )
    }
} 

export default RefComponent