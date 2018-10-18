import React, { Component } from 'react';

import TodoList from './components/TodoList';
import IconButton from './components/IconButton';

import './App.scss';
import addButton from './img/plus-square-regular.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ["One", "Two"]
    }
  }

  onClickAdd = () => {
    this.setState( (state, props) => ({
      todoList: [...state.todoList, "New TODO"]
    }));
  }

  render() {
    return (
      <div className='TodoList-container'>
        <h2>The TODO list</h2>
        <span> 
          Add new  <IconButton icon={ addButton } iconAltText="Add new" onClick={ this.onClickAdd }></IconButton> 
          </span>
        <TodoList items={ this.state.todoList }/>
      </div>
    );
  }

}

export default App;
