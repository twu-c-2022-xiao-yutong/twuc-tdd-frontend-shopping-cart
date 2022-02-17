import React from 'react';
import './button.css';

class Button extends React.Component {
    render() {
        return (
            <button
                className={`button ${this.props.disabled ? 'disabled' : ''}`}
                disabled={this.props.disabled}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
