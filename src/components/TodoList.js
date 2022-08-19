import React from "react";

const TodoList = ({ todos, setTodos, editTodos, setEditTodos }) => {
 
  let handleDeleteTask = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  let handleEditTask = ({ id }) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditTodos(todo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="todo__list" key={todo.id}>
          <input
            type="text"
            value={todo.task}
            className="list__task"
            onChange={(e) => e.preventDefault()}
          />
          <button
            className="button__edit task-button"
            onClick={() => handleEditTask(todo)}
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            className="button__delete task-button"
            onClick={() => handleDeleteTask(todo)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
