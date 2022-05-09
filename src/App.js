import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";

import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const onDelete = (todo) => {
    console.log("I'm ondelete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Im adding this todo ", title, desc);
    let sno = 0;

    if (todos.length == 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header title="My Todos List" searchbar={false} />

      <AddTodo addTodo={addTodo} />
      <hr />

      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}
export default App;
