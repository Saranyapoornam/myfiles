import React,{Component} from 'react'

class BindingEvent extends Component{
    constructor(){
        super()
        this.state = {
            message : "Hello User"
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }
     clickHandler = () =>{
        this.setState({
            message:"Bye bye User!"
        })
    }
    render(){
        return(
            <div>
               <p>{this.state.message}</p> 
                {/*<button onClick = {this.clickHandler.bind(this)}>Click me</button>*/ /*Bind click Event in render method*/} 
                {/*<button onClick = {()=>this.clickHandler()}>Click me</button>*/ /*Bind click Event in arrow function method*/}
                {/*<button onClick = {this.clickHandler}>Click me</button>*/ /*Bind click Event in constructor bind(see above constructor() method*/}
                <button onClick = {this.clickHandler}>Click me</button> {/*Bind click Event in arrow function declaration method*/}

            </div>
        )
    }
}

export default BindingEvent