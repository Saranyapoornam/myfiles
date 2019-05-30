import React,{Component} from 'react'
import updatedComponent from './HOC';

class HocWithClick extends Component{
    render(){ 
        const {count,IncrementCount} = this.props
        return <button onClick={IncrementCount}> Hoc clicked {count} times {this.props.name}</button>
    }
}

export default updatedComponent(HocWithClick,5)