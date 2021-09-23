import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/Todolist";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  // Setting title value

  const takeTitleValue = (e) => {
    setTitle(e.target.value);
  };

  // SubmitHandling

  const submitHandle = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        title: title,
        completed: false,
      },
    ]);

    //Setting title input to empty
    setTitle("");
  };

  return (
    <>
      <Header />
      <Form
        submitHandle={submitHandle}
        takeTitleValue={takeTitleValue}
        title={title}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default App;
