import { useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) => {
    
    const [todoList, setTodoList] = useState([])

    const addTodo = (note) => {
        console.log('Add Function')
        setTodoList([...todoList, note])
    } 
    
    const deleteTodo = (id) => {
        console.log('Delete Function')
        let temp = [...todoList]
        temp.splice(id, 1)
        setTodoList(temp)
    } 


    return(
        <TodoContext.Provider value = {{todoList, addTodo, deleteTodo}}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState;