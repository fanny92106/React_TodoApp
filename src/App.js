import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';
import logo from './logo.svg';

export default class App extends Component{
  // init state
  state = {todos:[
      {id: '001', name:'eat', done:true},
      {id: '002', name:'sleep', done:true},
      {id: '003', name:'code', done:false}
    ]}

  addTodo = (dataObj) => {
    const {todos} = this.state
    this.setState({todos: [dataObj, ...todos]})
  }

  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return  {...todoObj, done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="MyTodoApp">
            {/* pass getDataFromHeader() to <Header /> */}
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo = {this.updateTodo}/>
            <Footer />

          </div>
        </header>
      </div>
    );
  }
}
