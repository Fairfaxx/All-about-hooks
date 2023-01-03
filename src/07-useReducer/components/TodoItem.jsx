import React from 'react';

export const TodoItem = ({ todo, handleRemoveTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{todo.description}</span>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleRemoveTodo(todo.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};
