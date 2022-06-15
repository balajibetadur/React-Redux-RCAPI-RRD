import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../state/actions'
import { increment } from '../../state/actions/countAction'
import Test2 from './Test2'

function Test() {
   const dispatch =  useDispatch()
  const count = useSelector(state => state.count)

// const [test, setTest] = useState(0)
// setTest(5)

  return (
    <div>
        <div className="counter">
      <button onClick = {() => {dispatch(actions.decrement(5))}} className='button'>-</button>
      Count: {count}
      <button onClick = {() => {dispatch(actions.increment(10))}} className='button'>+</button>
    
      </div>
      <Test2/>
    </div>
  )
}

export default Test