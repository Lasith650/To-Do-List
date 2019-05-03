import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Dinner out with friends',
        completed: false
      },
      {
        id: 2,
        title: 'Meeting with the Clients',
        completed: false
      },
      {
        id: 3,
        title: 'Finishing the assigned tasks',
        completed: false
      }
    ]
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  //Delete Todo
  delToDo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render(){
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
    </div>
  );
}
}

export default App;
