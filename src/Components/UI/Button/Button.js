import React, {Component} from 'react';
import "./Button.css"

class Button extends Component {
    render() {
        return (
                <button
                    disabled={this.props.disabled}
                    className={this.props.className}
                    type={this.props.type}
                    id={this.props.id}
                    onKeyUp={this.props.onKeyUp}
                    onClick={this.props.onClick}
                >
                    {this.props.text}
                </button>
        );
    }
}

export default Button;