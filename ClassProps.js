import React,{Component} from 'react'

class ClassProps extends Component{
    render(){
        return(
            <div>
               <h1>Hi {this.props.name} alias  {this.props.aliasName}</h1> 
               {this.props.children}
            </div>
        )
    }
}

export default ClassProps