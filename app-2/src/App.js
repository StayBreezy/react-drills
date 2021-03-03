import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: ['yum1','yum2','yum3','yum4','yum5','yum6','yum7','yum8','yum9','yum10']
    }
  }

  render(){
    let yumsToDisplay = this.state.data.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    });

    return <div className='App'>{yumsToDisplay}</div>
  }
}

export default App;


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
