import React, { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";
// import { v4 as uuid } from 'uuid';

import axios from "axios";

const Form = ({
  input,
  setInput,
  todos,
  setTodos,
  setCategory,
  category,
  catinput,
  setCatinput,
  editTodos,
  setEditTodos,
}) => {
  console.log(catinput);
  const handleChange = (e) => {
    setCatinput(e.target.value);
  };

  let getCategory = async () => {
    await axios
      .get(`http://localhost:9292/category`)
      .then((response) => setCategory(response.data));
  };

  let getTasks = async () => {
    await axios.get(`http://localhost:9292/todos`).then((response) => {
      console.log(response);
      setTodos(response.data);
    });
  };
  let updateTodo = ({ task, category_id, id }) => {
    const newTodo = todos.map((todo) =>
      todo.id !== id ? { task, category_id } : todo
    );
    setTodos(newTodo);
    setEditTodos("");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodos) {
      setTodos([
        ...todos,
        { id: uuidV4(), task: input, category_id: catinput },
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodos.id);
    }
  };
  useEffect(() => {
    getCategory();
    getTasks();
    if (editTodos) {
      setInput(editTodos.task, editTodos.category_id);
    } else {
      setInput("");
    }
  }, [setInput, editTodos]);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter new task"
          className="form__task"
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          className="form__task_select"
          names="category"
          id="category"
          onChange={handleChange}
        >
          {category?.map((category) => (
            <option key={category.id} value={category.id}>
              {" "}
              {category.name}
            </option>
          ))}
        </select>
        <button className="buuton__add" type="submit">
          {editTodos ? "OK" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
