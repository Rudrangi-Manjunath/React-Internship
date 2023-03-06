import React from "react";
import {TodoRowItem} from "./TodoRowItem";

export const TodoTable:React.FC<{
  todos:TodoModel[],
  deleteTodo:Function
}> = (props) => {
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
