import React from 'react'
import ListVal from './ListValues';

 const ListArray = () =>{

    const names = ['user1','user2','user3']
    const nameList =  names.map(name => <h1 key= {name}>{name}</h1>)
    const persons =[
        {id:1,name:'x',age:'24',skill:'Angular'},
        {id:2,name:'y',age:'25',skill:'React'},
        {id:3,name:'z',age:'26',skill:'Ext'}
    ]
    const personList =  persons.map(person =><ListVal key ={person.id} person={person} />)
    return(
        <div>
            { nameList }
            {personList}
        </div>
        
    )
}

export default ListArray


