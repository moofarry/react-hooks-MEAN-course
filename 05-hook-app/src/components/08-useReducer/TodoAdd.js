import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
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
    handleAddTodo(newTodo);
    reset();
  };
  return (
    <>
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
        <button className="btn btn-outline-primary mt-1 w-100 " type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};
