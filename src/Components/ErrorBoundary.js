//Error Boundary catch the error and throw fall back UI.

import React,{Component} from 'react'

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }
    static getDerivedStateFromError (error){

        // return true when it have any error
        return {
            hasError :true
        }
    }
    componentDidCatch(error,info){
        //throws error and info in the console
        console.log(error)
        console.log(info)

    }
    render(){
        
            if(this.state.hasError){
               return <h1>Some error is occured</h1> 
            }
            else{
                return this.props.children
            
            }
    
    }
}

export default ErrorBoundary