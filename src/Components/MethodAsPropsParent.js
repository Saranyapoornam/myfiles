import React,{Component} from 'react'
import Methodchild from './MethodAsPropsChildren';

class MethodAsParent extends Component {
    constructor(){
        super()
        this.state = {
            parentName : 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childval){
        alert(`Hello ${this.state.parentName} triggered by ${childval}`)
    }
    render(){
        return(
            <div>
                <Methodchild greetHandler = {this.greetParent}/>
            </div>
        )
    }

}


export default MethodAsParent