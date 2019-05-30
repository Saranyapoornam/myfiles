import React,{Component} from 'react'
import updatedComponent from './HOC';

class HocWithHover extends Component{
    render(){ 
        const {count,IncrementCount} = this.props
        return <h1 onMouseOver={IncrementCount}> Hoc Hovered {count} times </h1>
    }
}

export default updatedComponent(HocWithHover,10)