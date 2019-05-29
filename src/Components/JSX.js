import React from 'react'

const Hello = () =>{

    // with jsx
    /*return(
        <div className="mainDiv">
            <h1>This is jsx</h1>
        </div>
    )*/

    //without jsx

    return React.createElement('div',{id:"divid",className : "divClass"},
    React.createElement('h1',{id:"textid",className : "textClass"},'Hello User using createElement')
    )
}
export default Hello