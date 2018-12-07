import React, { Fragment } from 'react';

import Todo from './Todo';
import IconButton from '../ui/IconButton';

import './TodoList.scss';
import deleteIcon from '../../img/times-circle-regular.svg';
import addButton from '../../img/plus-square-regular.svg';


const TodoList = ({ todoItems, onClickAdd, onEditTodo, onToggleTodo, onDeleteTodo }) => {
  return (
    <Fragment>
        <IconButton
          className='add-todo'
          iconSrc={addButton}
          iconAltText="Add new"
          onClick={ () => onClickAdd() }
          textContent="Add new"
        />
        {
          todoItems.map(todo => {
            return (<div className="Todo-container" key={todo.id}>
              <IconButton
                className="remove-todo"
                iconSrc={deleteIcon}
                iconAltText="Delete"
                onClick={() => onDeleteTodo(todo)}
              />
              <Todo todoItem={todo} 
                    onEdit={(todo, newValue) => onEditTodo(todo, newValue)} 
                    onCompleteTodo={ (todo) => onToggleTodo(todo) }/>
            </div>)
          })
        }
      </Fragment>
  );
}

export default TodoList;
