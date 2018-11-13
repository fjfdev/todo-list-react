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
                <span>{ this.props.value }</span>      
                <IconButton icon={ editIcon } iconAltText="Edit" onClick={ () => this.onClickEdit() }></IconButton>      
            </div>
        );
    }

    getTodoForEdit() {
        return (
            <div className='Todo'>
                <input type='text' defaultValue={ this.props.value } ref={ todoRef => this.todoInputRef = todoRef }/>
                <IconButton icon={ confirmIcon } iconAltText="Confirm" onClick={ () => this.onClickConfirm() }></IconButton>
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
        this.props.onEdit(this.props.value, this.todoInputRef.value);
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