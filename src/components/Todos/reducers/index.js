import { combineReducers } from 'redux';
import todoItems from './todoItems';

const todoApp = combineReducers({
  todoItems
});

export default todoApp;
