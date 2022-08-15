import React from 'react';
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
      <div className = "container">
        <h3>Todos List1</h3>
        {/*{props.todos*/}
        <TodoItem todo={props.todos[0]}/>;
    </div>
         )
  }