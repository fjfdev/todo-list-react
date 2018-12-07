let todoItemNextIndex = 0;

export const addTodo = () => {
  return {
    type: 'ADD_TODO',
    todoItem : {
      value: 'New TODO',
      completed: false,
      id: todoItemNextIndex++
    }
  };
}

export const editTodo = (todoItem, newValue) => {
  return {
    type: 'EDIT_TODO',
    todoItem,
    newValue
  };
}

export const toggleTodo = (todoItem) => {
  return {
    type: 'TOGGLE_TODO',
    todoItem,
  };
}

export const deleteTodo = (todoItem) => {
  return {
    type: 'DELETE_TODO',
    todoItem
  }
}
