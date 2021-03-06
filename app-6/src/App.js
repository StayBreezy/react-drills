import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo";

 export default class App extends Component {
    constructor(){
      super();
      this.state = {
        list: [],
        input: ""
      };

      this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleInputChange(val){
      this.setState({input: val});
    }

    handleAddTask(){
      this.setState({
        list: [...this.state.list, this.state.input],
        input: ''
      });
    }

    render(){
      let list = this.state.list.map((e, i) => {
        return <Todo key={i} task= {e} />
      })
      return (
        <div className="App">
          <h1>Changg's Todo List:</h1>
          <div>
            <input
            value={this.state.input}
            placeholder="Enter new TASKS"
            onChange={e => this.handleInputChange(e.target.value)}
            />
            <button onClick={this.handleAddTask}>Add</button>

          </div>
          {list}

        </div>
      )
    }
 }
