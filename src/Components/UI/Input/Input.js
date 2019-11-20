import React, {Component} from 'react';
import './Input.css'
class Input extends Component {
    render() {
        return (
                <input
                    id={this.props.id}
                    className={this.props.class}
                    aria-label={this.props.ariaLabel}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
        );
    }
}

export default Input;