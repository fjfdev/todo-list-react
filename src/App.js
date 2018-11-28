import React, { Component } from 'react';

import './App.scss';
import TodoList from './components/TodoList';
import HeaderTitle from './components/HeaderTitle'

class App extends Component {
  
  render() {
    return (
      <div className='App-container'>
        <HeaderTitle/>
        <TodoList></TodoList>
      </div>
    );
  }

}

export default App;
