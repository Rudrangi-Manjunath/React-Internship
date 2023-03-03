import TodoRowItem from "./TodoRowItem";

function TodoTable(props){
    return(
        <table className = "table table-hover">
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
          </thead>
          <tbody>
            {/* <TodoRowItem 
            rowNumber = {props.todos[0].id}   // Sending props to TodoRowItem component
            rowDescription ={props.todos[0].description} 
            rowAssigned = {props.todos[0].assigned}
            />
            <TodoRowItem 
            rowNumber = {props.todos[1].id}
            rowDescription ={props.todos[1].description}
            rowAssigned = {props.todos[1].assigned}
            />
            <TodoRowItem 
            rowNumber = {props.todos[2].id}
            rowDescription ={props.todos[2].description}
            rowAssigned = {props.todos[2].assigned}
            /> */}
            {props.todos.map(todo =>      
              <TodoRowItem 
              key = {todo.id}
              rowNumber = {todo.id} 
              rowDescription = {todo.description} 
              rowAssigned = {todo.assigned}
              deleteTodo = {props.deleteTodo}
              />)
            }
          </tbody>
        </table>
    )
}

export default TodoTable