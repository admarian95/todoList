import { useState, useEffect } from "react"
import { connect } from 'react-redux';
import { addTodo , getTodo } from '../actions/index'
import { v4 as uuid } from "uuid";
const TodoForm = (props) => {
    const [todo, createTodo] = useState({
        id: '',
        value: '',
        completed: false
    })

    useEffect(() => {
        fetch('http://localhost:3001/getTodos').then(res => res.json()).then(data => {
           props.dispatch(getTodo(data.payload));
        });

    }, [])
    const submitTodo = (e) => {
        e.preventDefault();
        props.dispatch(addTodo({ ...todo, id: uuid() }))
    }
    return (
        <form onSubmit={submitTodo}>
            <input
                name="todoVal"
                type="text"
                value={todo.value}
                onChange={(e) => createTodo({ ...todo, value: e.target.value })}
            />

        </form>
    )
}

export default connect()(TodoForm)