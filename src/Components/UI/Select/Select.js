import React, {Component} from 'react';
import "./Select.css"

class Select extends Component {

componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
}

    render() {
        console.log(this.props);
        return (

            <div>
                <select
                    className={this.props.className}
                    name=""
                    aria-label={this.props.ariaLabel}
                    id={this.props.id}
                    onChange={this.props.onChange}
                >
                    <option
                        disabled
                        selected = {!this.props.value}
                    >Choose intern...</option>
                    {this.props.options.map((option) => (
                        <option
                            value={option.id}
                            selected={option.selected}
                        >
                            {option.intern}
                        </option>
                    ))}
                </select>
            </div>
        )
    }

}

export default Select;