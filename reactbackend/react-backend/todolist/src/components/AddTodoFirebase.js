import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const onChange = (e) => setTitle(e.target.value);

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Add Todo ..."
        value={title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
};

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;

