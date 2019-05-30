import React,{Component} from 'react'

class RenderPropsWithClick extends Component{
    render(){ 
        const {count,IncrementCount} = this.props
        return <button onClick={IncrementCount}> Render props clicked {count} times {this.props.name}</button>
    }
}

export default RenderPropsWithClick