import React from 'react'
import { useContext } from 'react'
import TestContext from '../context/testContext'
import GrandChild from './GrandChild'

function Child() {
    const {text,setText, count, setCount} = useContext(TestContext)
  return (
    <div><button onClick={() => {setCount(count + 10)}}>Increment Count (Child)</button>
    <GrandChild/></div>
  )
}

export default Child