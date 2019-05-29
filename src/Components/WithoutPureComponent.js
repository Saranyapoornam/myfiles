import React,{Component} from 'react'

class WithoutPure extends Component{
    
    render(){
        console.log("Regular components" + this.props.message)
        return(
            <p>This is Regular Component {this.props.message}</p>
        )
    }
}

export default WithoutPure