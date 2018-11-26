import React from 'react';
import './IconButton.scss';

class IconButton extends React.Component {

    render() {
        return (
            <button className={'IconButton ' + this.props.className} onClick={ this.props.onClick }>
                <img className='icon' src={ this.props.icon } alt={ this.props.iconAltText }/>
                <span className='textContent'>{ this.props.children }</span>
            </button>
        )
    }
}

export default IconButton;