import './App.css';
import React,{useState} from 'react';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

   const [showTodo,setShowTodo] = useState(false);

   const [todos,setTodos]=useState([
   {id: 1, description: 'Learn React', assigned: 'User 1'},
   {id: 2, description: 'Learn Spring', assigned: 'User 2'},
   {id: 3, description: 'Learn Java', assigned: 'User 3'},
   {id: 4, description: 'Learn SQL', assigned: 'User 4'}
  ]);

   const addtodo = (description,assigned) => {
    let rowNumber = 0;
      if(todos.length > 0){
        rowNumber = todos[todos.length - 1].id+1;
      }
      else {
        rowNumber = 1;
      }
      const newTodo = {
        id: rowNumber, 
        description: description, 
        assigned: assigned
      };
        setTodos(todos => [...todos, newTodo]);
    }

    const deleteTodo = (rowNumber) => {
      setTodos(todos.filter(todo => todo.id !== rowNumber));
    }
     
  return (
    <div className = "mt-5 container">
      <div className = "card">
      <div className = "card-header">
        Your Todo's
        </div>
       <div className = "card-body">
            {/* <TodoRowItem 
            rowNumber = {todos[0].id}   
            rowDescription ={todos[0].description} 
            rowAssigned = {todos[0].assigned}
            />
            <TodoRowItem 
            rowNumber = {todos[1].id}
            rowDescription ={todos[1].description}
            rowAssigned = {todos[1].assigned}
            />
            <TodoRowItem 
            rowNumber = {todos[2].id}
            rowDescription ={todos[2].description}
            rowAssigned = {todos[2].assigned}
            /> */} 

            <TodoTable 
            todos = {todos}
            deleteTodo = {deleteTodo}
            />

            <button className='btn btn-primary' onClick={() => setShowTodo(!showTodo)}>
              {showTodo ? 'Hide' : 'Add Todo'}
            </button>
            {
              showTodo && <NewTodoForm addtodo={addtodo}/>
            }
       </div>
      </div>
    </div>
  );
}

export default App;
