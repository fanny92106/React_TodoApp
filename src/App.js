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

  getDataFromHeader = (dataObj) => {
    const {todos} = this.state
    this.setState({todos: [dataObj, ...todos]})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="MyTodoApp">
            {/* pass getDataFromHeader() to <Header /> */}
            <Header getDataFromHeader={this.getDataFromHeader}/>
            <List todos={todos}/>
            <Footer />

          </div>
        </header>
      </div>
    );
  }
}
