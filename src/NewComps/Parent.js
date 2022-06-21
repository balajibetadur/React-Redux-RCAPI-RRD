import React from 'react'
import { useContext } from 'react'
import TestContext from '../context/testContext'
import Child from './Child'

function Parent() {
    
    const {text,setText, count, setCount} = useContext(TestContext)
    
  return (
    <div>Count: {count}
    <button>{count}</button>
    <button onClick={() => {setCount(10)}}>10</button>
    <button onClick={() => {setCount(20)}}>20</button>
    <Child/>
    </div>
  )
}

export default Parent