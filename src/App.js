import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/Todolist";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  //Run once only

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  // Setting title value

  const takeTitleValue = (e) => {
    setTitle(e.target.value);
  };

  // SubmitHandling

  const submitHandle = (e) => {
    e.preventDefault();
    if (title !== "") {
      setTodos([
        ...todos,
        {
          id: Math.random() * 1000,
          title: title,
          completed: false,
        },
      ]);
    }

    //Setting title input to empty
    setTitle("");
  };

  // Save to localstorage

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoFromLocal);
    }
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
