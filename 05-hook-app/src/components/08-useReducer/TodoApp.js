import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim() <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };

  const handleRemove = (todoId) => {
    const action = {
      type: "remove",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <div>
      <h1>Cosas por hacer morchis : ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-6 me-5">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleRemove={handleRemove}
          />
        </div>
        <div className="col-4">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="description"
              placeholder="Add new TODO"
              autoComplete="off"
              onChange={handleInputChange}
              value={description}
            />
            <button
              className="btn btn-outline-primary mt-1 w-100 "
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
