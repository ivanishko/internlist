import React, {Component} from 'react';
import Intern from "../Intern/Intern";
import "./InternList.css"

class InternList extends Component {


    getAllInternList =(internList) => {
        return internList.map((intern, index) => (
            <li className="list-group-item InternList-li"
                key={index}>
                <Intern
                    id={intern.id}
                    internName={intern.intern}
                />

            </li>
        ))

    };

    render() {
        return (
            <div className="InternList">
                <ul>
                    {this.getAllInternList(this.props.internList)}
                </ul>


            </div>
        );
    }
}

export default InternList;