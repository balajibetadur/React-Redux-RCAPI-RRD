import React from 'react'
import { useSelector } from 'react-redux'

function Test2() {
    
    const count = useSelector(state => state.count)
  return (
    <div>Test2: {count}</div>
  )
}

export default Test2