const countReducer = (state = 0, action) => {
    if (action.type === 'increment'){
        return state + action.value
    }else if (action.type === 'decrement'){
        return state - action.payload
    }else{
        return state
    }
}
export default countReducer