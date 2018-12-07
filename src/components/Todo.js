import React, { useState } from 'react';
import IconButton from './ui/IconButton';

import editIcon from '../img/edit-regular.svg';
import confirmIcon from '../img/check-circle-regular.svg';
import completedIcon from '../img/check-square-regular.svg';
import unCompletedIcon from '../img/square-regular.svg';

import './Todo.scss';

const Todo = ({ todoItem, onCompleteTodo, onEdit }) => {
  const [isEditMode, setEditMode] = useState(false);
  let todoInputRef;

  const getTodoForRead = () => {
    return (
      <div className="Todo">
        <span className={ todoItem.completed ? 'completed' : '' }>
          {todoItem.value}
        </span>
        <div className="TodoActions">
          { 
            !todoItem.completed ?
              <IconButton
                iconSrc={editIcon}
                iconAltText="Edit"
                onClick={ onClickEdit }
                textContent="Edit"
              /> : ''
          }
          <IconButton
            iconSrc={ todoItem.completed ? completedIcon : unCompletedIcon }
            iconAltText={ todoItem.completed ? "Uncomplete" : "Complete" }
            onClick={() => onCompleteTodo(todoItem)}
            textContent={ todoItem.completed ? "Uncomplete" : "Complete" }
          />
        </div>
      </div>
    );
  };

  const getTodoForEdit = () =>  {
    return (
      <div className="Todo">
        <form onSubmit={ onClickConfirm }>
          <input
            type="text"
            name="todoValue"
            defaultValue={todoItem.value}
            ref={todoRef => (todoInputRef = todoRef)}
          />
          <IconButton
            type="submit"
            iconSrc={confirmIcon}
            iconAltText="Confirm"
            onClick={ onClickConfirm }
            textContent="Confirm"
          />
        </form>
      </div>
    );
  }

  const onClickEdit = () => {
    setEditMode(true);
  };

  const onClickConfirm = () => {
    setEditMode(false);
    onEdit(todoItem, todoInputRef.value);
  };

  return (isEditMode ? getTodoForEdit() : getTodoForRead());
}

export default Todo;
