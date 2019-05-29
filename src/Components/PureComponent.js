import React,{PureComponent} from 'react'

class PureComponentContent extends PureComponent{
    render(){
       // console.log("Pure components")
        return(
            <div>This is a PureComponent {this.props.message}</div>
        )
    }
}

export default PureComponentContent