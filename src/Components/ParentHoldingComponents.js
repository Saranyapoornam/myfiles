import React,{Component} from 'react'
import WithoutPure from './WithoutPureComponent';
import PureComponentContent from './PureComponent';

class ParentHoldingComponents extends Component{
    constructor(){
        super()
        this.state={
            message : "xxxxx"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                message: "xxxx"
            })
        }, 1000);
    }
    render(){

        //console.log("Parent holding components")
       // console.log(this.state.message)
        return(
            <div>
                 <WithoutPure message={this.state.message}/>
            <PureComponentContent message={this.state.message}/>
            </div>
           
        )
    }
}

export default ParentHoldingComponents