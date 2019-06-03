import React,{Component} from 'react'

class CRUDOperation extends Component{
     constructor(props){
        super(props)
        this.state = {
            title :"CRUD Operations",
            act : 0,
            index : '' ,
            datas: []
        }
    }
    componentDidMount(){
        this.refs.name.focus()
    }
    edit = (i)=>{
        console.log(i);
        let data = this.state.datas[i]
        this.refs.name.value = data.name
        this.refs.address.value = data.address
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
        this.refs.myForm.reset()
        this.refs.name.focus()
        
    }
    SubmitForm = (e) =>{
        e.preventDefault()
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;
       
        if(this.state.act === 0){
            let data ={
                name,address
            }
            datas.push(data)
        }else{
            let index = this.state.index;
            datas[index].name= this.refs.name.value
            datas[index].address= this.refs.address.value
        }
       
        this.setState({
            datas : datas,
            act: 0
        })
         this.refs.myForm.reset()
        this.refs.name.focus()
        console.log(this.state.datas)
    }
     
    render(){
        let datas = this.state.datas;
        return(
            <div>
                <h1>{this.state.title}</h1>
                 <form ref="myForm" >
                <input type="text" ref="name"  />
                <input type="text" ref="address"/>
                <button type="submit" onClick={(e)=>this.SubmitForm(e)}>Submit</button>
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