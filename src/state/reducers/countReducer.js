// const countReducer = (state = 0, action) => {
//     if (action.type === 'increment'){
//         return state + action.value
//     }else if (action.type === 'decrement'){
//         return state - action.payload
//     }else{
//         return state
//     }
// }

const todoReducer = (state = [], action) => {
    if (action.type === 'addTodo'){
        return [...state, action.value]
    }else if (action.type === 'deleteTodo'){
        let temp = [...state]
        temp.splice(action.value, 1)
        return temp
    }else if (action.type === 'resetTodo'){
        return []
    }else{
        return state
    }
}

export default todoReducer