import React,{Component} from 'react'

class RenderProps extends Component{

    constructor(){
        super()
        this.state ={
            count : 0
        }
    }
    IncrementCount = () =>{
            this.setState({
                         count : this.state.count + 1
                    }      
            )
        }

    render(){ 
        return( 
                <div>
                    {this.props.render(this.state.count,this.IncrementCount)}
                </div>
        )
}
}

export default RenderProps