import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class TodoForm extends React.Component {
    state = {taskInput: ''}

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.taskInput)
        this.setState({taskInput: ''})
    }

 render() {
     return (
         <div>
             <form onSubmit={this.handleSubmit}>
                 <input 
                 type="text"
                 placeholder="add new task..."
                 name="taskInput"
                 value={this.state.taskInput}
                 onChange={this.changeHandler}
                 />
                 <button type="submit">Add Task</button>
             </form>
         </div>
     )
 }

}

export default connect(null, {addTodo})(TodoForm);