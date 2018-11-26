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

    getTodoElement(todo, todoKey) {
        return (
            <div className="Todo-container" key={todoKey}>
                <IconButton className="remove-todo" icon={ deleteIcon } iconAltText="Delete" onClick={ () => this.deleteTodo(todo) }/>
                <Todo todoItem={ todo } onEdit={ this.onEditTodo }/>
            </div>
        );
    }

    getTodoList() {
        return this.state.todoItems.map( (todo, index) => this.getTodoElement(todo, index));
    }

    onClickAdd = () => {
        const newTodo = {
            value: "New TODO",
            id: this.state.nextIndex
        };

        if (this.isValidValueForTodo(newTodo, newTodo.value)) {
            alert(`'${newTodo.value}' already exists, rename it and try again`)
        }
        else {
            this.setState( (state, props) => ({
                todoItems: [...state.todoItems, newTodo],
                nextIndex: state.nextIndex + 1 
            }));
        }
    }

    onEditTodo = (todoItem, newValue) => {
        if (this.isValidValueForTodo(todoItem, newValue)) {
            alert(`'${newValue}' already exists, rename it and try again`)
        }
        else {
            const newItems =  [...this.state.todoItems].map( (todo) => {
                if (todo.id === todoItem.id) {
                    todo.value = newValue;
                }
                return todo;
            })
            this.setState({
                todoItems: newItems
            });
        }
    }

    deleteTodo(todoItem) {
        const copyItems = [...this.state.todoItems]
            .filter( (todo) => todo.id !== todoItem.id);
        this.setState({
            todoItems: copyItems
        });
    }

    isValidValueForTodo(todoItem, valueForCheck) {
        return [...this.state.todoItems]
            .filter( (todo) => todo.id !== todoItem.id)
            .map( (todo) => todo.value === valueForCheck )
            .reduce( (a, b) => a || b, false);
    }

    render() {
        return (
            <Fragment>
                <IconButton icon={ addButton } iconAltText="Add new" onClick={ this.onClickAdd }>Add new</IconButton>
                { this.getTodoList() }
            </Fragment>
        );
    }
}

export default TodoList;