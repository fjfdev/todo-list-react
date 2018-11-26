import React, { Component } from 'react';

import './App.scss';
import TodoList from './components/TodoList';

class App extends Component {
  
  render() {
    return (
      <div className='App-container'>
          <h2>The TODO list</h2>
          <TodoList></TodoList>
      </div>
    );
  }

}

export default App;
