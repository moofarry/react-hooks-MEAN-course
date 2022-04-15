import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";
import { TodooAdd } from "./TodooAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const handleAddTodo = (newTodo) => {
    dispatch({ type: "add", payload: newTodo });
  };

  return (
    <div>
      <h1>TodoApp: ({todos.length})</h1>
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
          <TodooAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
