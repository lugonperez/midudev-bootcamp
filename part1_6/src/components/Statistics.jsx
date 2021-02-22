import React, {Fragment} from 'react'

const Statistics = ({title, children, all}) =>{
    return(
        all>0?
            <table>
                <thead>{title}</thead>
                <tbody>{children}</tbody>
            </table>
        :<p>No feedback given</p>
    )
}

export default Statistics