import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { useForm } from "../../hooks/useForm";

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
      <h1>TodoApp : ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-6 me-5">
          {/* */}
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              //TodoListItem, todo, index, handleDeleted, handleToggle
              <li key={todo.id} className="list-group-item">
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {i + 1}. {todo.description}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemove(todo.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
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
