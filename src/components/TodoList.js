import React, { Fragment, useState } from 'react';
import Todo from './Todo';
import IconButton from './ui/IconButton';

import './TodoList.scss';
import deleteIcon from '../img/times-circle-regular.svg';
import addButton from '../img/plus-square-regular.svg';

let nextTodoIndex = 0;

const TodoList = () => {
  const [todoItems, setTodos] = useState([]);

  const deleteTodo = (todoItem) => {
    setTodos(todoItems.filter(todo => todo.id !== todoItem.id));
  };

  const onCompleteTodo = (todoItem) => {
    const newItems = todoItems.map(todo => {
      if (todo.id === todoItem.id) {
        todo.completed = !todo.completed;
      }
      return { ...todo };
    });
    setTodos(newItems);
  };

  const onEditTodo = (todoItem, newValue) => {
    const newItems = todoItems.map(todo => {
      if (todo.id === todoItem.id) {
        todo.value = newValue;
      }
      return { ...todo };
    });
    setTodos(newItems);
  };

  const onClickAdd = () => {
    const newTodo = {
      value: 'New TODO',
      completed: false,
      id: nextTodoIndex++,
    };
    setTodos([...todoItems, newTodo]);
  };

  const getTodoElement = (todo) => {
    return (
      <div className="Todo-container" key={todo.id}>
        <IconButton
          className="remove-todo"
          iconSrc={deleteIcon}
          iconAltText="Delete"
          onClick={() => deleteTodo(todo)}
        />
        <Todo todoItem={todo} onEdit={onEditTodo} onCompleteTodo={onCompleteTodo}/>
      </div>
    );
  };

  const getTodoList = () => {
    return todoItems.map(todo => getTodoElement(todo));
  };

  return (
    <Fragment>
      <IconButton
        className='add-todo'
        iconSrc={addButton}
        iconAltText="Add new"
        onClick={onClickAdd}
        textContent="Add new"
      />
      {getTodoList()}
    </Fragment>
  );
};

export default TodoList;
