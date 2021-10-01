import React from "react";
import { useState } from "react/cjs/react.development";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      setCategories((prevCategories) => [...prevCategories, inputValue]);
      setInputValue("");
    },
    [inputValue, setCategories]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        type="text"
        onChange={handleInputChange}
      ></input>
    </form>
  );
};
