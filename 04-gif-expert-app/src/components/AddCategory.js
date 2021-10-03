import React from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((prevCategories) => [ inputValue,...prevCategories]);
      setInputValue("");
    }
  };

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

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
