import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Welcome to Ralphs Auto!',
      newTodo: '',
      todos: [{
        title: 'Learn Redux',
        done: false
      }, {
        title: 'Learn Python',
        done: false
      }, {
        title: 'Learn C++',
        done: false
      }]
    }
  }

  newTodoChanged(e) {
    console.log(e.target.value)
    this.setState({
      newTodo: e.target.value
    })
  }

  formSubmitted(e) {
    e.preventDefault()
    console.log(this.state.newTodo)
    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  toggleTodoDone(e, index) {
    console.log(e.target.checked)
    const todos = [...this.state.todos]
    todos[index] = { ...todos[index] }
    todos[index].done = e.target.checked
    this.setState({
      todos
    })
  }

  removeTodo(index) {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      }
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My Todo App 0.3</h2>
        <h3>{this.state.message}</h3>
        <form onSubmit={(e) => this.formSubmitted(e)}>
          {/* <label htmlFor="newTodo">New Todo</label> */}
          <br />
          <br />
          <input
            onChange={(e) => this.newTodoChanged(e)}
            id="newTodo"
            name="newTodo"
            value={this.state.newTodo}
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={() => this.allDone()}>All Done</button>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <li key={todo.title}>
                <input
                  onChange={(e) => this.toggleTodoDone(e, index)}
                  type="checkbox"
                  checked={todo.done}
                />
                <span style={{ textDecoration: todo.done ? 'line-through' : 'inherit' }}>{todo.title}</span>
                <button onClick={() => this.removeTodo(index)}>Remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default App;
