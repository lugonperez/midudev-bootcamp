import React, {Fragment} from 'react'

const Texts = ({title, text}) =>{
    return(
        <Fragment>
            <strong>{title}</strong>
            <p>{text}</p>
        </Fragment>
    )
}

export default Texts