import React,{Component} from 'react'


class RenderPropsWithHover extends Component{
    render(){ 
        const {count,IncrementCount} = this.props
        return <h1 onMouseOver={IncrementCount}> Render Props Hovered {count} times </h1>
    }
}

export default RenderPropsWithHover