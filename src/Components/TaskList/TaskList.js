import React, {Component} from 'react';
import Button from "../UI/Button/Button";

import "./TaskList.css"

class TaskList extends Component {

    state = {
        taskList: ''
    };

    getAllTaskList = (taskList) => {
        console.log(taskList);
        return taskList && taskList.map((task, index)=> (
            <tr key={index}>
                <th scope="row">{index  + 1 }.</th>
                <td> {task.task}</td>
                <td><Button text="V"/></td>
                <td><Button text="X"/></td>
            </tr>
        ))
    };

    render() {


        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col table-width">Task</th>
                    <th scope="col">ch</th>
                    <th scope="col">del</th>
                </tr>
                </thead>
               {this.getAllTaskList(this.props.taskList)}
            </table>
        );
    }
}

export default TaskList;