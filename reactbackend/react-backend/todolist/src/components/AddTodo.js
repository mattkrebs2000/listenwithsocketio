import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  // console.log("This is the new title1", title)


  const onSubmit = (e) => {

    // console.log("This is the new title2", title)

    e.preventDefault();
    addTodo(title);
    setTitle("");

    //  console.log("This is the new title3", title)
  };

 useEffect(() => {
    setTimeout(console.log("This is the title after a second4",title),3000)
  }, [title]);




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
