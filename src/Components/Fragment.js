import React from 'react'
import ChildFragment from './ChildFragment';

const Fragment = () =>{
    return(
        <React.Fragment>
            <h3>This is text inside Fragment</h3>
            <p>This is another text inside Fragment</p>
            <table>
                <tbody>
                    <tr>
                        <ChildFragment/>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
        
    )
}

export default Fragment