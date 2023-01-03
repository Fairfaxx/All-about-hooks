import { useEffect, useReducer } from 'react';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log({ todo });
    dispatch({
      type: 'ADD_TODO',
      payload: todo,
    });
  };

  const handleRemoveTodo = (id) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: id,
    });
  };

  const onToggleTodo = (id) => {
    dispatch({
      type: 'UPDATE_TODO',
      payload: id,
    });
  };

  return (
    <>
      <h1>
        Todo App --{'>'} <small>Pendant: {todos.length}</small>
      </h1>

      <hr />

      <div className="row">
        <h4>Click on the ToDo you already done</h4>
        <div className="col-7">
          <TodoList
            todos={todos}
            handleRemoveTodo={handleRemoveTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Add todo</h4>
          <hr />

          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
