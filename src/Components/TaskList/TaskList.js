/* eslint-disable */
import React, {Component} from 'react';
import Button from "../UI/Button/Button";

import "./TaskList.css"

class TaskList extends Component {

    state = {
        taskList: ''
    };

    checkTask = (id) => () => {
        this.props.checkTask(this.props.id,id)
    };

    deleteTask = (id) => () => {
        this.props.deleteTask(this.props.id,id)

    };


    getAllTaskList = (taskList) => {
        return taskList && taskList.map((task, index)=> (
            <tr key={index}>
                <th scope="row">{index  + 1 }.</th>
                <td  className={task.done ? "strike": ''} >{task.task}</td>
                <td><Button className="btn btn-success" onClick={ this.checkTask(task.id)} text="V"/></td>
                <td><Button className="btn btn-danger" onClick={ this.deleteTask(task.id)} text="X"/></td>
            </tr>
        ))
    };

    render() {


        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" className="table-width">Task</th>
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