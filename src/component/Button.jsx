import React from 'react'

function Button(props) {

    const { onButtonClick, color } = props

    return (
        <button style={{ color: color }} onClick={onButtonClick}>Click Me!</button>
    )

}

export default Button