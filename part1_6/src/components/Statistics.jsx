import React, {Fragment} from 'react'

const Statistics = ({title, children, all}) =>{
    return(
        <Fragment>
            <h3>{title}</h3>
            {all > 0 ? children:'No feedback given'}
        </Fragment>
    )
}

export default Statistics