import React from 'react';

import editIcon from '../img/edit-regular.svg';
import confirmIcon from '../img/check-circle-regular.svg';
import IconButton from './IconButton';

import './Todo.scss';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoValue: props.value,
            action: 'read'
        }
    }

    getTodoForRead() {
        return (
            <div className='Todo'>
                <span>{ this.state.todoValue }</span>
                <IconButton icon={ editIcon } iconAltText="Edit" onClick={ this.onClickEdit }></IconButton>
            </div>
        );
    }

    getTodoForEdit() {
        return (
            <div className='Todo'>
                <input type='text' value={ this.state.todoValue } onChange={ this.onChangeTodoValue }/>
                <IconButton icon={ confirmIcon } iconAltText="Confirm" onClick={ this.onClickConfirm }></IconButton>
            </div>
        );
    }

    onClickEdit = () => {
        this.setState(() => ({
            action: 'edit'
        }));
    }

    onClickConfirm = () => {
        this.setState(() => ({
            action: 'read'
        }));
    }

    onChangeTodoValue = (event) => {
        this.setState({
            todoValue: event.target.value
        });
    }

    render() {
        switch (this.state.action) {
            case 'read':
                return this.getTodoForRead();
            case 'edit':
                return this.getTodoForEdit();
            default:
                return <span>TODO ERROR</span>
        }
    }
}

export default Todo;