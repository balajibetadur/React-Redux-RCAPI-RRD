import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../state/actions'

function Test() {
   const dispatch =  useDispatch()
  const count = useSelector(state => state.count)
  return (
    <div>
        <div className="counter">
      <button onClick = {() => {dispatch(actions.decrement(1))}} className='button'>-</button>
      Count: {count}
      <button onClick = {() => {dispatch(actions.increment(1))}} className='button'>+</button>
    
      </div>
    </div>
  )
}

export default Test