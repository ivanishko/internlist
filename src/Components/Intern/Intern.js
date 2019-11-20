import React, {Component} from 'react';

class Intern extends Component {
    state = {

    };
    render() {
        return (
            <div className="Intern">
                <h3>{this.props.id} - {this.props.internName}</h3>

            </div>
        );
    }
}

export default Intern;