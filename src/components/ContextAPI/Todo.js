import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import TodoContext from '../../context/todos/TodoContext';

function Todo() {
    
    const {todoList, addTodo, deleteTodo} = useContext(TodoContext);
    
    
    console.log(todoList)
    return (
        <>
        <button onClick={() => {addTodo('testing')}}>Add</button>
        <button onClick={() => {deleteTodo(0)}}>Delete</button>
        </>
  )
}

export default Todo