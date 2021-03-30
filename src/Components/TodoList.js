import Todo from './Todo'
import { useEffect } from 'react'
import { connect } from 'react-redux';
const TodoList = ( {todos })=>{
   
    useEffect(()=>{console.log('hell')},[todos])
    return (
           todos.length!==0 ? (todos.map((el,idx)=>{
           return <Todo key={idx} data={el}/>  
           })):null
           
        )
    
}
const mapStateToProps = (state)=> ({
    todos : state.todos.data,
})

export default connect(mapStateToProps)(TodoList);