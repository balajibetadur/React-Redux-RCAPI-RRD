export const addTodo = (userText) => {
        return (dispatch) => {
            dispatch ({
                type: 'addTodo',
                value: userText
            })
        }
    }
    
export const deleteTodo = (index) => {
    return (dispatch) => {
        dispatch ({
            type: 'deleteTodo',
            value: index
        })
    }
}

export const resetTodo = () => {
    return (dispatch) => {
        dispatch ({
            type: 'resetTodo',
        })
    }
}
    

// export const increment = (count) => {
//     return (dispatch) => {
//         dispatch ({
//             type: 'increment',
//             value: count
//         })
//     }
// }


// export const decrement = (count) => {
//     return (dispatch) => {
//         dispatch ({
//             type: 'decrement',
//             payload: count
//         })
//     }
// }