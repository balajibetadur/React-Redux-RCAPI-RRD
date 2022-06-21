import React from 'react'
import TestState from './context/TestState'
import Child from './components/ContextAPI/Child'
import Parent from './NewComps/Parent'

function App() {

  return (
    <TestState>
      <div><Parent/></div>
    </TestState>
  )
}

export default App