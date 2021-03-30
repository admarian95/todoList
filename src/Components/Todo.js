import {updateTodo , deleteTodo } from '../actions/index'
import { connect, useDispatch } from 'react-redux';

const Todo = ({data}) => {
    const dispatch = useDispatch();

    const changeStatus = (e) => {
        dispatch(updateTodo(e.target.id));
    }
    const deletetodo =(e)=>{  
        dispatch(deleteTodo(e.target.id));
    }
    return (
        <div style={{marginBottom: '1rem'}}>
        <li onClick={changeStatus} style={
            {
                listStyle: 'none',
                textDecoration: data.message.completed ? 'line-through' : null,
                width: '20%',
                float: 'left',
                height: '38px'
            }
        }
            id={data.message.id}
        >{data.message.value}
        </li>
        <button className="btn btn-danger" id={data.message.id} onClick={deletetodo}> Done with this one!</button>
        </div>
    )
}

export default connect()(Todo);