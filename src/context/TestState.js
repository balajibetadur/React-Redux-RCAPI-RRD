import { useState } from "react";
import TestContext from "./testContext";


const TestState = (props) => {

    const [text, setText] = useState('Context')
    const [count, setCount] = useState()

    function nullCount(){
        setCount(0)
    }

    return (
        <TestContext.Provider value = {{text,setText, count, setCount, nullCount}}>
            {props.children}
        </TestContext.Provider>
    )
}


export default TestState;