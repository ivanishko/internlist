import React from 'react';
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button"
import InternList from "./Components/InternList/InternList";
import './App.css';

class App extends React.Component {

    state = {
      internItem: '',
      internList: []
    };

  onChangeHandler = (event) => {
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
        console.log('componentDidMount',this.state);
        this.setState({
            internList
        }

        )
    }


  render() {
    console.log(this.state);
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
                label="CreateIntern"
                ariaLabel="Recipient's username"
                ariaDescribedby="button-addon2"
                onChange={this.onChangeHandler}
                value={this.state.internItem}
            />
                <div className="input-group-append">
                <Button
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
            />
          </section>


        </div>
    );
  }
}

export default App;
