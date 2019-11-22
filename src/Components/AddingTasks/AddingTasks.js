import React, {Component} from 'react';
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";

class AddingTasks extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <Input
                            type="text"
                            value={this.props.taskSelect}
                            class="form-control"
                            placeholder="Insert task"
                            ariaDescribedby="button-addon2"
                            onChange={this.props.onChangeInputTask}
                        />
                    </div>
                    <div className="col-sm-4">
                        <div className="input-group">
                            <Select
                                className="custom-select"
                                options={this.props.options}
                                id="inputGroupSelect04"
                                ariaLabel="select intern"
                                onChange={this.props.changeSelectIntern}
                                value={this.props.selectIntern}
                            />
                            <div className="input-group-append">
                                <Button
                                    disabled={!this.props.selectIntern || !this.props.taskSelect}
                                    onClick={this.props.onClickButtonSelect}
                                    className="btn btn-outline-secondary"
                                    text="Add!"
                                    type="button"
                                    id="button-addon3"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default AddingTasks;