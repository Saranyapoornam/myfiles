import React,{Component} from 'react'

class CRUDOperation extends Component{
     constructor(){
        super()
        this.state = {
            datas: [],
            act : 0,
            index : '' ,
            name : '',
            address : ""
        }
    }
    setValue = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    edit = (i)=>{
        console.log(i);
       //  let data = this.state.datas[i]
    
       //  this.refs.name.value = data.name
       //  this.refs.address.value = data.address
        this.setState({
            act: 1,
            index:i
        })
        this.refs.name.focus()
    }
    delete = (i)=>{
        console.log(i);
        this.state.datas.splice(i,1)
        this.setState({
            datas:this.state.datas
        })
       //  this.refs.myForm.reset()
        this.refs.name.focus()
        
    }
    SubmitForm = (e) =>{
        e.preventDefault()
        let name = this.state.name
        let address = this.state.address
        let data ={name,address}
        this.state.datas.push(data)
        this.setState({
            datas:this.state.datas
        })
        console.log(this.state.datas)
    }
    render(){
        let datas = this.state.datas
        console.log("alldata"+this.state.datas)
        return(
            <div>
                 <form onSubmit={(e)=>this.SubmitForm(e)}>
                <input type="text" value={this.state.name}  onChange={(e) => this.setValue(e)} />
                <input type="text" address = "address" value={this.state.address}  onChange={(e)=>this.setValue(e)}/>
                <button>Submit</button>
                </form>
                <pre>
                    {
                       datas.map((data,i)=>
                       <li key={i}>{i+1}{data.name}-{data.address}<button onClick={()=>this.edit(i)}>edit</button><button onClick={()=>this.delete(i)}>delete</button>
                       </li>
                       )
                    }
             </pre>
            </div>
           
        )
        

    }
}

export default CRUDOperation