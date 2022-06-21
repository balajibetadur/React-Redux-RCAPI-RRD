import React from 'react'
import { useContext } from 'react'
import TodoContext from '../../context/todos/TodoContext';

function Todo() {
    
    const todoList = useContext(TodoContext);
    console.log(todoList)
  return (
    <div>Todo</div>
  )
}

export default Todo