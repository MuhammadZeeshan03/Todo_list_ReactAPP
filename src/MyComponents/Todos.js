import React from "react";
import { TodoItem } from "./TodoItem";
export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "15px auto"

  }
  return (
    <div className="container " style={myStyle}>
      <h3> Todos List</h3>

      {props.todos.length == 0
        ? "No todo to display "
        : props.todos.map((todo) => {
            return  (
            <>
            <TodoItem todo={todo} onDelete={props.onDelete} /> <hr/>
            </>)
          })}
    </div>
  );
};

export default Todos;
