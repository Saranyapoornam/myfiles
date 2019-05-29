import React,{Component} from 'react'

class ConditionalRender extends Component{
    constructor(){
        super()
        this.state = {
            IsLoggedIn : true
        }
    }
    render(){
        // if/else condition
            /*if(this.state.IsLoggedIn){
                return <div>Hello React user</div>
            }else{
                return <div>Unknown user</div>
            }*/

        //Element Variable

        /*let text
        if(this.state.IsLoggedIn){
            text = <div>Hello React User</div>
        }else{
            text = <div>Unknown user</div>
        }
        return text
       */

      //Ternary condition
      return(
        this.state.IsLoggedIn? <div>Hello React User</div> : 
         <div>Unknown user</div>
      )

      // short circuit operator
      /*return(
        this.state.IsLoggedIn && <div>Hello React User</div>
      )*/
    }
}

export default ConditionalRender