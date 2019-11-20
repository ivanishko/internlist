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
    console.log("input change");
    this.setState(
    {internItem:event.target.value})
  };


  onClickButtonAdd = (event) => {
      console.log("button click");
      const internId =  Math.round(Math.random()*1000);
      const internItem = {
          id:internId,
          intern:this.state.internItem,


      }

    this.setState(
        (prevState) => {
            return {
                internList: [...prevState.internList, internItem],
                internItem: ''

            }
        },
        () => localStorage.setItem('internList',JSON.stringify(this.state.internList))
  )};


  render() {
    console.log(this.state);
    return (
        <div className="App">
          <header className="App-header">
            <h1>Intern List</h1>
          </header>
          <Input
              type="text"
              label="Create intern"
              onChange={this.onChangeHandler}
              value={this.state.internItem}
          >

          </Input>
          <Button
              onClick={this.onClickButtonAdd}
              text="Add intern"

          />
          <section>
            <InternList />
          </section>


        </div>
    );
  }
}

export default App;
