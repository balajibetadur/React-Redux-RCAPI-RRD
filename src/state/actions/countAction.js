export const increment = (count) => {
    return (dispatch) => {
        dispatch ({
            type: 'increment',
            value: count
        })
    }
}

export const decrement = (count) => {
    return (dispatch) => {
        dispatch ({
            type: 'decrement',
            payload: count
        })
    }
}