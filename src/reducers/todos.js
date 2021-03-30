const initialState = {
    data: []
}
const todos = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        message: action.message
                    },
                ]
            }
        case "DELETE_TODO":
            return {
                ...state,
                data:
                    state.data.filter((el,idx)=> el.message.id !== action.message)
            }
        case "UPDATE_TODO":
            return {
                ...state,
                data:
                    state.data.map((el, idx) => {
                        if (el.message.id === action.message) {
                            return {
                                message: {
                                    ...(el.message),
                                    completed: !el.message.completed
                                }
                            }
                        }
                        return el
                    })
            }
        case "GET_TODO":
            return {
                ...state,
                data: action.message

            }
        default:
            return state
    }

}

export default todos