import React,{Component} from 'react'
import axios from 'axios'

class PostService extends Component{
    constructor(){
        super()
        this.state={
            userId :'',
            title : '',
            body : ''
        }
    }
 
    formValues = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    SubmitForm = (e) =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response.data)
            
        })
        .catch(error =>{
            console.log('Error')
        }) 
        
    }
    render(){ 
        const {userId,title,body} = this.state
        return(
       
        <div>
           <form>
               <input type="text" name="userId" value={userId} onChange={this.formValues}/>
               <input type="text" name="title" value={title} onChange={this.formValues}/>
               <input type="text" name="body" value={body} onChange={this.formValues}/>
               <button type="submit" onClick={this.SubmitForm}>Submit</button>
           </form>
        </div>
    )
    }
}

export default PostService