import React, { useState, useRef } from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoInput = useRef(null);

  const addTodo = () => {
    const newTodo = todoInput.current.value;
    if (newTodo !== '') {
      setTodos([...todos, newTodo]);
      todoInput.current.value = ''; // Clear the input field
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="todo-container">
        <h1>Todo List</h1>
        <div className="input-container">
          <input type="text" ref={todoInput} onChange={(e) => console.log(e.target.value)} />
          <button onClick={addTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
              {todo}
              <button onClick={() => removeTodo(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
