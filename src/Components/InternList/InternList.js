import React, {Component} from 'react';
import InternDetail from "../InternDetail/InternDetail";
import "./InternList.css";

class InternList extends Component {


    getAllInternList =(internList) => {
        return internList.map((intern, index) => (

            //const taskList

            <li className="list-group-item InternList-li"
                key={index}>

                <InternDetail
                    id={intern.id}
                    internName={intern.intern}
                    deleteIntern={this.props.deleteIntern}
                    createTask = {this.props.createTask}
                    taskList = {this.props.taskList[intern.id]}
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