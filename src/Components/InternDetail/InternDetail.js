/* eslint-disable */
import React, {Component} from 'react';
import Button from "../UI/Button/Button";
import "./InternDetail.css"
import Input from "../UI/Input/Input";
import TaskList from "../TaskList/TaskList";

class InternDetail extends Component {
    state = {
        task : '',
        taskList : ''
    };

    deleteIntern = () => {
        const isDeleteConfirm = confirm("Delete intern?");

        if (isDeleteConfirm) {
            this.props.deleteIntern(this.props.id)
        }
    };
    onChangeTaskInput = (event) => {
      const task =  event.target.value;
        this.setState({
            task
        });
        console.log('task',this.state.task);
    };

    createTask = () => {
        const index = Math.round(Math.random()* 1000);
        const taskItem = {
            id:index,
            task:this.state.task,
            idIntern: this.props.id
        };
        this.props.createTask(this.props.id, taskItem);
        this.setState({
            task: ''
        })
    };


    render() {
        console.log('taskList',this.props.taskList);
        return (
            <div className="InternDetail">
                <h3>{this.props.id} - {this.props.internName}</h3>
                    <Button

                        className="del-button"
                        onClick={this.deleteIntern}
                        text="X"
                    />

                <div className="App-intern-add input-group ">
                    <Input
                        type="text"
                        class="form-control"
                        placeholder="Insert task"
                        ariaDescribedby="button-addon2"
                        onChange={this.onChangeTaskInput}
                        value={this.state.task}
                    />
                    <div className="input-group-append">
                        <Button
                            disabled ={!this.state.task}
                            className="btn btn-outline-secondary"
                            onClick={this.createTask}
                            text="Add intern"
                            type="button"
                            id="button-addon2"


                        />
                    </div>

                </div>
                <TaskList
                    taskList={this.props.taskList}
                />
            </div>
        );
    }
}

export default InternDetail;