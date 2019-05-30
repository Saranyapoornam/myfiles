import React,{Component} from 'react'
import ContextComponentF from './ContextComponentF';
import UserContext from './Context';

class ContextComponentE extends Component{
    static contextType = UserContext
    render(){ return(
        <div>
            Component E {this.context}
            <ContextComponentF/>
        </div>
        
    ) }
}
// ContextComponentE.contextType = UserContext
export default ContextComponentE