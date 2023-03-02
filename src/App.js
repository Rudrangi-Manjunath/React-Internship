import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [{id: 1, description: 'Learn React', assigned: 'User 1'},
   {id: 2, description: 'Learn Spring', assigned: 'User 2'},
   {id: 3, description: 'Learn Java', assigned: 'User 3'},
   {id: 4, description: 'Learn SQL', assigned: 'User 4'}]

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
            <TodoTable todos = {todos}/>
       </div>
      </div>
    </div>
  );
}

export default App;
