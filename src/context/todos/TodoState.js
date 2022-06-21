import { useState } from "react";
import TodoContext from "./TodoContext";

const TodoState = (props) => {
    
    const [todoList, setTodoList] = useState([])

    return(
        <TodoContext.Provider value = {todoList}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoState;