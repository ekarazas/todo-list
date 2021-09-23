import React from "react";

const Form = ({ submitHandle, takeTitleValue, title }) => {
  return (
    <div className="wrapper">
      <form onSubmit={submitHandle}>
        <input
          value={title}
          onChange={takeTitleValue}
          type="text"
          name="title"
          className="todo-input"
          placeholder="Task title..."
          minLength="1"
          maxLength="15"
        />
        <div className="button-position">
          <button type="submit" className="add-button">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
