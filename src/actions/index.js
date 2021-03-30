const ADD_TODO = 'ADD_TODO';
export const addTodo = (message)=>({
    type: ADD_TODO,
    message,
})

const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = (message)=>({
    type: DELETE_TODO,
    message,
})

const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = (message)=>({
    type: UPDATE_TODO,
    message,
})

const GET_TODO = 'GET_TODO';
export const getTodo = (message)=>({
    type: GET_TODO,
    message,
})