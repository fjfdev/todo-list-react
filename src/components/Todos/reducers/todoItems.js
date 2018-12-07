const initialState = [];

const todoItems = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.todoItem];
    case 'EDIT_TODO':
      return state.map(todo => {
        if (todo.id === action.todoItem.id) {
          todo.value = action.newValue;
        }
        return todo;
      });
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.todoItem.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.todoItem.id);
    default:
      return state;
  }
};

export default todoItems;