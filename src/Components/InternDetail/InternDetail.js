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
    };

    createTask = () => {
        const index = Math.round(Math.random()* 1000);
        const taskItem = {
            id:index,
            task:this.state.task,
            idIntern: this.props.id,
            done: false
        };
        this.props.createTask(this.props.id, taskItem);
        this.setState({
            task: ''
        })
    };


    render() {
        return (
            <div className="InternDetail">
                <h3>Intern - {this.props.internName}</h3>
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
                    checkTask={this.props.checkTask}
                    deleteTask={this.props.deleteTask}
                    id={this.props.id}
                />
            </div>
        );
    }
}

export default InternDetail;