import React from 'react'
import TodoState from './context/todos/TodoState' 
import Todo from './components/ContextAPI/Todo';

function App() {
    return (
    <TodoState>
        <div><Todo/></div>
    </TodoState>
  )
}

export default App