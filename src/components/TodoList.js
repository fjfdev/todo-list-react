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
            todoItems: []
        };
    }

    getTodoElement(todo, todoKey) {
        return (
            <div className="Todo-container" key={todoKey}>
                <IconButton className="remove-todo" icon={ deleteIcon } iconAltText="Delete" onClick={ () => this.deleteTodo(todoKey) }/>
                <Todo value={ todo.value } onEdit={ this.onEditTodo }/>
            </div>
        );
    }

    getTodoList() {
        return this.state.todoItems.map( (todo, index) => this.getTodoElement(todo, index));
    }

    onClickAdd = () => {
        const newTodo = {
            value: "New TODO",
        };

        if (this.doesTodoExists(newTodo.value)) {
            alert(`'${newTodo.value}' already exists, rename it and try again`)
        }
        else {
            this.setState( (state, props) => ({
                todoItems: [...state.todoItems, newTodo]
            }));
        }
    }

    onEditTodo = (oldValue, newValue) => {
        if (this.doesTodoExists(newValue)) {
            alert(`'${newValue}' already exists, rename it and try again`)
        }
        else {
            const newItems =  [...this.state.todoItems].map( (todo) => {
                if (todo.value === oldValue) {
                    todo.value = newValue;
                }
                return todo;
            })
            this.setState({
                todoItems: newItems
            });
        }
    }

    deleteTodo(todoIndex) {
        const copyItems = [...this.state.todoItems];
        copyItems.splice(todoIndex, 1);
        this.setState({
            todoItems: copyItems
        });
    }

    doesTodoExists(todoValueForCheck) {
        return [...this.state.todoItems]
            .map( (todo) => todo.value === todoValueForCheck )
            .reduce( (a, b) => a || b, false);
    }

    render() {
        return (
            <Fragment>
                <span>
                Add new  <IconButton icon={ addButton } iconAltText="Add new" onClick={ this.onClickAdd }></IconButton> 
                </span>
                { this.getTodoList() }
            </Fragment>
        );
    }
}

export default TodoList;