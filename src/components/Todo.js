import React from 'react';
import IconButton from './IconButton';

import editIcon from '../img/edit-regular.svg';
import confirmIcon from '../img/check-circle-regular.svg';

import './Todo.scss';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditMode: false
        }
    }

    getTodoForRead() {
        return (
            <div className='Todo'>
                <span>{ this.props.todoItem.value }</span>      
                <IconButton icon={ editIcon } iconAltText="Edit" onClick={ () => this.onClickEdit() }>Edit</IconButton>      
            </div>
        );
    }

    getTodoForEdit() {
        return (
            <div className='Todo'>
                <form id="myFOrm" onSubmit={ () => this.onClickConfirm() }>
                    <input type='text' name="todoValue" defaultValue={ this.props.todoItem.value } ref={ todoRef => this.todoInputRef = todoRef }/>
                    <IconButton type="submit" icon={ confirmIcon } iconAltText="Confirm" onClick={ () => this.onClickConfirm() }>Confirm</IconButton>
                </form>
            </div>
        );
    }

    onClickEdit = () => {
        this.setState(() => ({
            isEditMode: true
        }));
    }

    onClickConfirm = () => {
        this.setState(() => ({
            isEditMode: false
        }));
        this.props.onEdit(this.props.todoItem, this.todoInputRef.value);
    }

    render() {
        if (this.state.isEditMode) {
            return this.getTodoForEdit();
        }
        else {
            return this.getTodoForRead();
        }
    }
}

export default Todo;