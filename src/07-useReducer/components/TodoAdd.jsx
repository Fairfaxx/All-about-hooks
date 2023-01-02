import React, { useState } from 'react';

export const TodoAdd = ({ handleNewTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') {
      setError(true);
      return;
    }

    handleNewTodo({
      id: new Date().getTime() * 3,
      description: newTodo,
      done: false,
    });
    setNewTodo('');
    setError(false);
  };

  return (
    <>
      {error && <h3>Please add a todo</h3>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          className="form-control"
          name="todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary mt-3">
          Add new Todo
        </button>
      </form>
    </>
  );
};
