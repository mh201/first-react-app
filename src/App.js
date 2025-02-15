// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {Component} from "react";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "Mike",
      todoItems: [{action: "Buy Flowers", done: false },
                  {action: "Get Shoes", done: false },
                  {action: "Collect Tickets", done: true },
                  {action: "Call Joe", done: false }],
      newItemText: ""
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value })
  }

  createNewTodo = () => {
    if (!this.state.todoItems
              .find(item => item.action === this.state.newItemText)) {
                this.setState({
                  todoItems: [...this.state.todoItems,
                              { action:this.state.newItemText, done : false}],
                  newItemText : ""
                })
              }
  }

  // changeStateData = () => {
  //   this.setState({
  //     userName: this.state.userName === "Mike" ? "Frank" : "Mike"
  //   })
  // }

  render = () => 
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          { this.state.userName }'s To Do List
          ({ this.state.todoItems.filter(t => !t.done).length } items to do)
        </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control"
                  value={ this.state.newItemText }
                  onChange={ this.updateNewTextValue } />
            <button className="btn btn-primary mt-1"
                  onClick={ this.createNewTodo }>Add</button>
          </div>
        </div>
      </div>
    
}