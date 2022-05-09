import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h2>{todo.sno}</h2>
      <h2>{todo.title}</h2>
      <p>{todo.desc}</p>

      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
