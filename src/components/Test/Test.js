import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../state/actions'

function Test() {

   const dispatch =  useDispatch()
  const count = useSelector(state => state.count)

const [todo, setTodo] = useState('')

function handleClick(){
  dispatch(actions.addTodo(todo))
}
  return (
    <div>
    <input type="text" value = {todo} onChange={(event) => {setTodo(event.target.value)}} />
    <button onClick={handleClick}>Add</button>


        {/* <div className="counter">
      <button onClick = {() => {dispatch(actions.decrement(5))}} className='button'>-</button>
      Count: {count}
      <button onClick = {() => {dispatch(actions.increment(10))}} className='button'>+</button>
    
      </div>
      <Test2/> */}
    </div>
  )
}

export default Test