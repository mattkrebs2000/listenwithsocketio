import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
import axios from "axios";

import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
//  console.log("State of todos", todos);
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setTodos(res.data))

      //  console.log("State of todos", todos);
    
     
  }, []);

  // useEffect(() => {

  //  if (todos.length > 0) {
  //   console.log("after the change", todos)
  //  }

  
  // }, [todos]);


  const markComplete = (id) => {
     // console.log("this is what is passed through the markComplete function", id)
    setTodos(
      todos.map((to) => {

        //  console.log("This is what 'to' is", to)

        if (to.id === id) {
          to.completed = !to.completed;
        }
        return to;
      })
    );
  };

  // Delete Todo
  const delTodo = (id) => {

    // console.log("this is what is passed through the delTodo function", id)
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodos([...todos.filter((todo) => todo.id !== id)]));
  };


  // Add Todo
  const addTodo = (title) => {

    //  console.log("this is what is passed through the addTodo function", title)

    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => {
        res.data.id = uuid.v4();
        setTodos([...todos, res.data]);
      });
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
