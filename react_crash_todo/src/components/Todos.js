import React, {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';
class Todos extends Component{

  markComplete = () => {
    console.log('Now you are directing inside the Todos.js')
  }

  render(){
    return this.props.todos.map((todo) => (
       <Todoitem key={todo.id} todo={todo} markComplete={this.markComplete}/>
    ));
}
}

//Prop Types
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
