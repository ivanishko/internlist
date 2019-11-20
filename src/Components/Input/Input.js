import React, {Component} from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <input
                    type={this.props.type}
                    onChange={this.props.onChange}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default Input;