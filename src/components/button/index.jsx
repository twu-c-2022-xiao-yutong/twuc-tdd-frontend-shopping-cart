import React from 'react';
import './index.css';

class Button extends React.Component {
    render() {
        return (
            <button
                className={`button ${this.props.disabled ? 'disabled' : ''}`}
                disabled={this.props.disabled}
                onClick={this.props.onClick}
            >
                {this.props.children}
            </button>
        );
    }
}

export default Button;
