import React,{Component} from 'react'

class SetState extends Component{
    constructor(){
        super()
        this.state = {
            count : 0,
            count5 : 0
        }
    }
    Increment = () =>{
        this.setState({
             count : this.state.count +1
         },()=>{
             console.log(`Inside setState ${this.state.count}`)
         })
         console.log(`Outside setState ${this.state.count}`)
     }
    IncrementBy1 = () =>{
       this.setState(prevState =>({
            count5 : prevState.count5 + 1
        }),()=>{
            console.log(`Inside setState ${this.state.count5}`)
        })
        console.log(`Outside setState ${this.state.count5}`)
    }
    
    IncrementBy5 =() =>{
        this.IncrementBy1()
        this.IncrementBy1()
        this.IncrementBy1()
        this.IncrementBy1()
        this.IncrementBy1()
        
    } 
    render(){
        return(
            <div>
               <h1>count value {this.state.count}</h1> 
               <button onClick={this.Increment}>click me to increment by 1</button>
               <h1>multiples of five {this.state.count5}</h1> 
               <button onClick={this.IncrementBy5}>click me to increment by 1</button>
            </div>
        )
    }
}

export default SetState