import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todos = ({ todos, markComplete, delTodo }) => {
  return todos.map((todo) => (

    // console.log("From Insde Todos", "here is a single todo", todo, "here is the id", todo.id, "here is the array", todos),

    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={markComplete}
      delTodo={delTodo}
    />
  ));
};

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
