import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.scss';
import TodoContainerList from './components/Todos/TodoListContainer';
import HeaderTitle from './components/ui/HeaderTitle'
import reducers from './components/Todos/reducers';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <div className='App-container'>
      <HeaderTitle/>
      <TodoContainerList></TodoContainerList>
    </div>
  </Provider>
);

export default App;
