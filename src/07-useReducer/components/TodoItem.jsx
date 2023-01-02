import React from 'react';

export const TodoItem = ({ todo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{todo.description}</span>
        <button type="button" className="btn btn-outline-danger">
          Delete
        </button>
      </li>
    </>
  );
};