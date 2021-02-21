import React, {Fragment} from 'react'

const Statistic = ({title, text}) =>{
    return(
        <Fragment>
            <strong>{title}</strong>
            <p>{text}</p>
        </Fragment>
    )
}

export default Statistic