/* eslint-disable */
import React from 'react';
import Input from "./Components/UI/Input/Input";
import Button from "./Components/UI/Button/Button"
import Select from "./Components/UI/Select/Select";
import InternList from "./Components/InternList/InternList";
import './App.css';

class App extends React.Component {

    state = {
        taskList : {},
        internItem: '',
        internList: []
    };

    onChangeInputIntern = (event) => {
    this.setState(
    {internItem:event.target.value})
  };


  onClickButtonAdd = () => {
      const internId =  Math.round(Math.random()*1000);
      const internItem = {
          id:internId,
          intern:this.state.internItem,
      };

    this.setState(
        (prevState) => {
            return {
                internList: [...prevState.internList, internItem],
                internItem: ''
            }
        },
        () => localStorage.setItem('internList',JSON.stringify(this.state.internList))
  )};

    componentDidMount() {
        const internList = JSON.parse(localStorage.getItem('internList')) || [];
        const taskList = JSON.parse(localStorage.getItem('taskList')) || {};

        console.log('componentDidMount',this.state);
        this.setState({
                internList,
                taskList
        }
        )
    }
    createTask = (id,task) => {
        this.setState(
            (prevState) => {

                const taskList = prevState.taskList[id] ? [...prevState.taskList[id], task] : [task];
                const taskListObject = {};
                taskListObject[id] = taskList;

                return {
                    taskList: {
                        ...prevState.taskList,
                        ...taskListObject
                    }
                }
            },
            () => {localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
            }
        );
    };

    deleteIntern = (id) => {
        console.log('delete±');
        this.setState(
            prevState => ({
                internList: prevState.internList.filter(el => el.id !== parseInt(id))
            }),
        () => {localStorage.setItem('internList', JSON.stringify(this.state.internList))
            }
        );

    };
    checkTask = (internID,taskID) => {
       // const taskList = this.state.taskList[internID];
       // let task = taskList.find(task => task.id === taskID);
       // task.done = !task.done;

        this.setState(
            prevState => ({
                taskList: {
                    ...prevState.taskList,
                    [internID]:prevState.taskList[internID].map(task => {
                        if (task.id === taskID) {
                        task.done = !task.done
                        }
                        return task
                    })

                }
            }),
            () => {
                localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
                }
        );

    };

    deleteTask = (internID,taskID) => {

        this.setState(
            prevState => ({
                taskList: {
                    ...prevState.taskList,
                    [internID]:prevState.taskList[internID].filter(task => task.id !== taskID)
                }
            }),
            () => {
                localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
                console.log(this.state.taskList);
            }
        );

    };

    options = [
        "a",
        "b",
        "c"
    ]




  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1>Intern List</h1>
          </header>
            <div className="App-intern-add input-group ">
                <Input
                type="text"
                class="form-control"
                placeholder="Insert Intern name"
                ariaDescribedby="button-addon2"
                onChange={this.onChangeInputIntern}
                value={this.state.internItem}
            />
                <div className="input-group-append">
                <Button
                    disabled ={!this.state.internItem}
                    className="btn btn-outline-secondary"
                    onClick={this.onClickButtonAdd}
                    text="Add intern"
                    type="button"
                    id="button-addon2"
                />
                </div>

            </div>

          <section>

            <InternList
                internList={this.state.internList}
                getAllInternList = {this.getAllInternList}
                deleteIntern = {this.deleteIntern}
                createTask = {this.createTask}
                taskList = {this.state.taskList}
                checkTask={this.checkTask}
                deleteTask={this.deleteTask}
            />
          </section>


                <div className="inserttask">
                    <Input
                        type="text"
                        class="form-control"
                        placeholder="Insert task"
                        ariaDescribedby="button-addon2"
                    />
                    <Select
                        className="custom-select"
                        options={this.options}
                        id="inputGroupSelect04"
                        aria-label="select intern"
                    />
                    <div class="input-group-append">
                        <Button
                            className="btn btn-outline-secondary"
                            text="Add!"
                            type="button"
                            id="button-addon3"
                        />
                    </div>

                </div>

        </div>
    );
  }
}

export default App;
