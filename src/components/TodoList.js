import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {

    getTodoElement(todoValue, todoKey) {
        return <Todo key={todoKey} value={ todoValue }/>
    }

    getTodoList() {
        return this.props.items.map( (todo, index) => this.getTodoElement(todo, index));
    }

    render() {
        return this.getTodoList();
    }
}

export default TodoList;