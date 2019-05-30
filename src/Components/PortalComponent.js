// React portal provide a way to render the children in to the DOM node that exist outside the DOM hierarchy of the parent component
//include another div under the div id="root" in index.html
//import ReactDOM and use ReactDOM.createPortal to the jsx and mention id to it render.
//used to render component that is not same styling like app components.For ex:Modal pop up.where app styling should not overwrite modal styling.
import React from 'react'
import ReactDOM from 'react-dom'
const PortalComponent = (props) =>{
    return ReactDOM.createPortal(
        <div>
            <h1>This a portal component</h1>
        </div>
        ,document.getElementById('portal')
    )
   
} 



export default PortalComponent