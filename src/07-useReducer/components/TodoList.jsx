import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], handleRemoveTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))}
      </ul>
    </>
  );
};
