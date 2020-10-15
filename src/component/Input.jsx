import React from 'react'

function Input(props) {

    const { onInputChange } = props

    return(
        <input type="text" onChange={onInputChange}></input>
    )
    
}

export default Input