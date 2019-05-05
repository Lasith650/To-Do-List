import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {

  getStyle = () => {
    if(this.props.todo.completed){
      return{
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: 'line-through'
      }
    }else{
      return{
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: 'none'
      }
    }
  }
  render() {
    //Structuring has been done
    const {id,title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
        {title}
        <button onClick={this.props.delToDo.bind(this,id)}style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}
//Prop Types
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
  }
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}
export default Todoitem
