//Lifecycle is only for class components not for functional components.
//Life cycles are below
// * Mounting - constructor,static getDerivedStateFromProps,render,componetDidMount
// * Updating -static getDerivedStateFromProps,shouldComponentUpdate,render,getSnapshotBeforeUpdate,componentDidUpdate
// * UnMounting - componentWillUnmount
// * Error Handling - static getDErivedStateFromError and componentDidCatch

import React,{Component} from 'react'
import ChildrenLifeCycle from './ChildrenLifeCycleComponent';

class LifeCycleComponent extends Component{
    constructor(){
        super()
        this.state ={
            message : "My Message"
        }
        console.log("Parent Constructor in  lifecycle")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Parent getDerivedStateFromProps in  lifecycle")
        return null
        
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Parent shouldComponentUpdate in lifecycle")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Parent getSnapshotBeforeUpdate in lifecycle")
        return null

    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Parent componentDidUpdate in lifecycle")
        return null
    }
    componentDidMount(){
        console.log("Parent componentDidMount in lifecycle")
    }
    ChangeState = () =>{
        this.setState({
            message: "New Message"
        })
    }
    render(){
        console.log("Parent render in lifecycle")
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.ChangeState}>click to change state</button>
                <ChildrenLifeCycle/>
            </div>
        )
    }
    
}

export default LifeCycleComponent