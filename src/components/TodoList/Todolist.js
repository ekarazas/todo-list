import React from "react";

import TodoCard from "../TodoCard/TodoCard";

const TodoList = ({ todos, setTodos }) => {
  if (todos.length === 0) {
    return (
      <>
        <h2 className="no-task">There is no tasks in this list yet</h2>
      </>
    );
  }

  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              title={todo.title}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
