import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
  return (
    <div className="container">
      <h1>Todo List </h1>
      <TodoForm />
      <hr></hr>
      <h2>Todos: </h2>
      <TodoList />
    </div>
  )
}

export default App;
