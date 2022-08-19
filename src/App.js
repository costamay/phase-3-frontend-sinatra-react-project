import userEvent from "@testing-library/user-event";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState([]);
  const [catinput, setCatinput] = useState([]);
  const [editTodos, setEditTodos] = useState(null);

  return (
    <>
      <div className="container">
        <div className="container__wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              category={category}
              setCategory={setCategory}
              catinput={catinput}
              setCatinput={setCatinput}
              editTodos={editTodos}
              setEditTodos={setEditTodos}
            />
          </div>
          <div>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              editTodos={editTodos}
              setEditTodos={setEditTodos}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
