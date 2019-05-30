//Lifecycle is only for class components not for functional components.
//Life cycles are below
// * Mounting - constructor,static getDerivedStateFromProps,render,componetDidMount
// * Updating -static getDerivedStateFromProps,shouldComponentUpdate,render,getSnapshotBeforeUpdate,componentDidUpdate
// * UnMounting - componentWillUnmount
// * Error Handling - static getDErivedStateFromError and componentDidCatch

import React,{Component} from 'react'

class ChildrenLifeCycle extends Component{
    constructor(){
        super()
        this.state ={
            message : "My Message"
        }
        console.log("Children Constructor in  lifecycle")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Children getDerivedStateFromProps in  lifecycle")
        return null
        
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Children shouldComponentUpdate in  lifecycle")
         return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Children getSnapshotBeforeUpdate in  lifecycle")
        return null

    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("Children componentDidUpdate in  lifecycle")
        return null
    }
    componentDidMount(){
        console.log("Children componentDidMount in  lifecycle")
    }

    render(){
        console.log("Children render in  lifecycle")
        return(
            <div>
                <h1>Mounting Children</h1>
            </div>
        )
    }
    
}

export default ChildrenLifeCycle