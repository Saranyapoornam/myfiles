import React,{Component} from 'react'
import { UserConsumer } from './Context';

class ContextComponentF extends Component{
    render(){ return (
        <UserConsumer>
            {
                UserName =>{
                   return <h1>Hello {UserName}</h1>
                }
            }
           
        </UserConsumer>
    )
    }
}

export default ContextComponentF