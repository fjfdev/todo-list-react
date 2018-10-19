import React from 'react';
import Todo from './Todo';
import IconButton from './IconButton';

import './TodoList.scss';
import deleteIcon from '../img/times-circle-regular.svg';


class TodoList extends React.Component {

    getTodoElement(todoValue, todoKey) {
        return (
            <div className="Todo-container" key={todoKey}>
                <IconButton className="remove-todo" icon={ deleteIcon } iconAltText="Delete" onClick={ this.deleteTodo }/>
                <Todo value={ todoValue }/>
            </div>
        );
    }

    getTodoList() {
        return this.props.items.map( (todo, index) => this.getTodoElement(todo, index));
    }

    deleteTodo(event) {
        console.log("Delete todo " , event.target.parentElement)
    }

    render() {
        return this.getTodoList();
    }
}

export default TodoList;