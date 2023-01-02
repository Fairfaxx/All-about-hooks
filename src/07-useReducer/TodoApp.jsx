import { useReducer } from 'react';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Go to gym',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Buy groceries',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    console.log({ todo });
    dispatch({
      type: 'ADD_TODO',
      payload: todo,
    });
  };

  return (
    <>
      <h1>
        Todo App: 10 <small>Pendant: 2</small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
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
