import React from 'react'

import { useEffect } from 'react'
import { useContext } from 'react'
import TestContext from '../../context/testContext'
function GrandChild() {
      
    const {text, setText} = useContext(TestContext)
   
  return (
    <div>
<button onClick = {() => {setText('GrandChild')}}>Change to Grand Child</button>

    </div>
  )
}

export default GrandChild