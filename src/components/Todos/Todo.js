import React from 'react';
import IconButton from '../ui/IconButton';

import editIcon from '../../img/edit-regular.svg';
import confirmIcon from '../../img/check-circle-regular.svg';
import completedIcon from '../../img/check-square-regular.svg';
import unCompletedIcon from '../../img/square-regular.svg';


import './Todo.scss';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
    };
  }

  getTodoForRead() {
    const { todoItem, onCompleteTodo } = this.props;

    return (
      <div className="Todo">
        <span className={ todoItem.completed ? 'completed' : '' }>{todoItem.value}</span>
        <div className="TodoActions">
          { !todoItem.completed ?
            <IconButton
              iconSrc={editIcon}
              iconAltText="Edit"
              onClick={() => this.onClickEdit()}
              textContent="Edit"
            /> : ''
          }
          <IconButton
            iconSrc={ todoItem.completed ? completedIcon : unCompletedIcon}
            iconAltText={ todoItem.completed ? "Uncomplete" : "Complete" }
            onClick={() => onCompleteTodo(todoItem)}
            textContent={ todoItem.completed ? "Uncomplete" : "Complete" }
          />
        </div>
      </div>
    );
  }

  getTodoForEdit() {
    const { todoItem } = this.props;
    return (
      <div className="Todo">
        <form onSubmit={() => this.onClickConfirm()}>
          <input
            type="text"
            name="todoValue"
            defaultValue={todoItem.value}
            ref={todoRef => (this.todoInputRef = todoRef)}
          />
          <IconButton
            type="submit"
            iconSrc={confirmIcon}
            iconAltText="Confirm"
            onClick={() => this.onClickConfirm()}
            textContent="Confirm"
          />
        </form>
      </div>
    );
  }

  onClickEdit = () => {
    this.setState(() => ({
      isEditMode: true,
    }));
  };

  onClickConfirm = () => {
    const { onEdit, todoItem } = this.props;
    this.setState(() => ({
      isEditMode: false,
    }));
    onEdit(todoItem, this.todoInputRef.value);
  };

  render() {
    if (this.state.isEditMode) {
      return this.getTodoForEdit();
    } else {
      return this.getTodoForRead();
    }
  }
}

export default Todo;
