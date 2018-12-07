import { addTodo, editTodo, deleteTodo, toggleTodo } from './actions';
import { connect } from 'react-redux';
import TodoList from './TodoList';

const mapStateToProps = ({todoItems}) => {
  return {
    todoItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: () => dispatch(addTodo()),
    onEditTodo: (todoItem, newValue) => dispatch(editTodo(todoItem, newValue)),
    onToggleTodo: (todoItem) => dispatch(toggleTodo(todoItem)),
    onDeleteTodo: (todoItem) => dispatch(deleteTodo(todoItem)),
  }
};

const TodoContainerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoContainerList;