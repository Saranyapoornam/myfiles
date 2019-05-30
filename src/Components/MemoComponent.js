import React from 'react'

const MemoComponent = (props) =>{
    // console.log("Memo Components")
    return (
        <h1>hello {props.message}</h1>
        
    )
}
export default React.memo(MemoComponent)