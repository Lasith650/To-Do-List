import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Lasith',
        completed: true
      },
      {
        id: 2,
        title: 'Manaram',
        completed: true
      },
      {
        id: 3,
        title: 'Jayalath',
        completed: false
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
