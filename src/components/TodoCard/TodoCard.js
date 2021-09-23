import React from "react";

const TodoCard = ({ title, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className="todo-item">
        <div className={todo.completed ? "completed-title" : "title"}>
          {title}
        </div>
        <button className="complete" onClick={completeHandler}>
          Complete
        </button>
        <button className="remove" onClick={deleteHandler}>
          Remove
        </button>
      </li>
    </div>
  );
};

export default TodoCard;
