import React from 'react';
import './button.css';

class Button extends React.Component {
    render() {
        return (
            <button
                className={`button ${this.props.disabled ? 'disabled' : ''}`}
                disabled={this.props.disabled}
            >
                {this.props.text}
            </button>
        );
    }
}

export default Button;
