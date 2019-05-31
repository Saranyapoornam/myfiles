import React,{Component} from 'react'
import axios from 'axios'

class GetAjax extends Component{
    constructor(){
        super()
        this.state={
            lists : []
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response.data)
            this.setState({
                lists : response.data
            })
        })
        .catch(error =>{
            console.log('Error')
        })
    }
    render(){ 
        const {lists} = this.state
        return(
       
        <div>
            <h1>Working</h1>
            {
                
                lists.length?
                lists.map(list =><p key={list.id}>{list.id}</p> ) : null
            }
        </div>
    )
    }
}

export default GetAjax