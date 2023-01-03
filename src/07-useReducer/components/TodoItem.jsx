import React from 'react';

export const TodoItem = ({ todo, handleRemoveTodo, onToggleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          onClick={() => onToggleTodo(todo.id)}
          className={`align-self-center 
          ${todo.done ? 'text-decoration-line-through' : ''}`}
        >
          {todo.description}
        </span>
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
