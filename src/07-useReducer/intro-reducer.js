const initialState = [
  {
    id: 1,
    todo: 'Learn deeper about Reducer',
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'addTodo':
      return [...state, action.payload];

    default:
      return state;
  }

  // if (action.type === 'addTodo') {
  //   return [...state, action.payload];
  // }

  // return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Go to gym',
  done: true,
};

const addTodoAction = {
  type: 'addTodo',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

// console.log({ state: todos });
