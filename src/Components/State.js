import React,{Component} from 'react'

class State extends Component{
    constructor(){
        super()
        this.state ={
            content : "Hello im state "
        }
    }
    Subscribe = () =>{
        this.setState({
            content : "Thanks for subscribing !"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.content}</h1>
                <button onClick={this.Subscribe}>Subscribe</button>
            </div>
        )
    }
}
export default State 