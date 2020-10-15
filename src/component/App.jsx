import React, { useState, useEffect } from 'react'
import Button from './Button'
import Input from './Input'

function App() {

    const [inputValue, setInputValue] = useState('')

    function onClickHandler(){
        alert(inputValue)
    }

    function onChangeHandler(param) {
        // console.log(param.target.value)
        setInputValue(param.target.value)
    }

    return(
        <div>
            APP : {inputValue}
            <br />
            <Input onInputChange={onChangeHandler} />
            <Button color='red' onButtonClick={onClickHandler} ></Button>
        </div>
    )
}

export default App