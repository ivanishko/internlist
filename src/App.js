/* eslint-disable */
import React from 'react';
import Input from "./Components/UI/Input/Input";
import Button from "./Components/UI/Button/Button"
import InternList from "./Components/InternList/InternList";
import './App.css';
import AddingTasks from "./Components/AddingTasks/AddingTasks";


class App extends React.Component {

    state = {
        taskSelect : '',
        taskList : {},
        selectIntern: '',
        internItem: '',
        internList: []
    };

    onChangeInputIntern = (event) => {
    this.setState(
    {
        internItem:event.target.value,
    })

  };

    onChangeInputTask = (event) => {
        this.setState(
            {taskSelect:event.target.value})
    };

    changeSelectIntern = (event) => {
        console.log("select change!",event.target.value);
        this.setState(
            {
                selectIntern: event.target.value
            }
    )
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

        this.setState({
                internList,
                taskList
        }
        )
    }

    onClickButtonSelect = () => {

        const index = Math.round(Math.random()* 1000);
        const taskItem = {
            id:index,
            task:this.state.taskSelect,
            idIntern: this.props.id,
            done: false
        };
        this.createTask(this.state.selectIntern,taskItem);
        this.setState({
                taskSelect:'',
                selectIntern: ''
        }
        )
    };

    createTask = (id,task) => {
        console.log(id,task);
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
        this.setState(
            prevState => ({
                internList: prevState.internList.filter(el => el.id !== parseInt(id))
            }),
        () => {localStorage.setItem('internList', JSON.stringify(this.state.internList))
            }
        );

    };
    checkTask = (internID,taskID) => {
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



    // addingTask = () => {
    //     if (this.state.internList.length > 0 ) {
    //
    //             return <AddingTasks
    //                 taskSelect={this.state.taskSelect}
    //                 onChangeInputTask={this.onChangeInputTask}
    //                 options={this.state.internList}
    //                 changeSelectIntern={this.changeSelectIntern}
    //                 onClickButtonSelect={this.onClickButtonSelect}
    //                 selectIntern={this.state.selectIntern}
    //             />
    //         }
    //     }





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
            

            {this.state.internList.length  > 0 &&
            <AddingTasks
                         taskSelect={this.state.taskSelect}
                         onChangeInputTask={this.onChangeInputTask}
                         options={this.state.internList}
                         changeSelectIntern={this.changeSelectIntern}
                         onClickButtonSelect={this.onClickButtonSelect}
                         selectIntern={this.state.selectIntern}
                     />
            }


        </div>



    );
  }
}

export default App;
