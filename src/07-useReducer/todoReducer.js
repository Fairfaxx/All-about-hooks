export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('ABC is not done yet');

    default:
      return initialState;
  }
};
