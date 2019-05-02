import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Lasith',
        compleated: false
      },
      {
        id: 2,
        title: 'Manaram',
        compleated: false
      },
      {
        id: 3,
        title: 'Jayalath',
        compleated: false
      }
    ]
  }
  render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
  );
}
}

export default App;
