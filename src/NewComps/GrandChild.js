import React from 'react'

import { useContext } from 'react'
import TestContext from '../context/testContext'

function GrandChild() {
    const {text,setText, count, setCount, nullCount} = useContext(TestContext)
  return (
    <div><button onClick={() => {nullCount()}}>Reset Count (Grand Child)</button></div>
  )
}

export default GrandChild