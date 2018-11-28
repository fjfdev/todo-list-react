import React, { Fragment } from 'react';
import Todo from './Todo';
import IconButton from './IconButton';

import './TodoList.scss';
import deleteIcon from '../img/times-circle-regular.svg';
import addButton from '../img/plus-square-regular.svg';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [],
      nextIndex: 0,
    };
  }

  onClickAdd = () => {
    const newTodo = {
      value: 'New TODO',
      id: this.state.nextIndex,
    };
    this.setState((state, props) => ({
      todoItems: [...state.todoItems, newTodo],
      nextIndex: state.nextIndex + 1,
    }));
  };

  onEditTodo = (todoItem, newValue) => {
    const newItems = this.state.todoItems.map(todo => {
      if (todo.id === todoItem.id) {
        todo.value = newValue;
      }
      return { ...todo };
    });
    this.setState({
      todoItems: newItems,
    });
  };

  deleteTodo(todoItem) {
    this.setState((state, props) => ({
      todoItems: state.todoItems.filter(todo => todo.id !== todoItem.id),
    }));
  }

  getTodoElement(todo) {
    return (
      <div className="Todo-container" key={todo.id}>
        <IconButton
          className="remove-todo"
          iconSrc={deleteIcon}
          iconAltText="Delete"
          onClick={() => this.deleteTodo(todo)}
        />
        <Todo todoItem={todo} onEdit={this.onEditTodo} />
      </div>
    );
  }

  getTodoList() {
    return this.state.todoItems.map(todo => this.getTodoElement(todo));
  }

  render() {
    return (
      <Fragment>
        <IconButton
          iconSrc={addButton}
          iconAltText="Add new"
          onClick={this.onClickAdd}
          textContent="Add new"
        />
        {this.getTodoList()}
      </Fragment>
    );
  }
}

export default TodoList;
