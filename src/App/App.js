import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http.service.js';

const http = new HttpService();

class App extends Component {

    constructor (props) {
        super(props);
        this.load=this.load.bind(this);
        this.load();
        }

        load = () =>{
        http.getProducts().then(products=>{
            console.log(products);
        },err=>{

            }

        )};

  render() {
    return (
      <div className="container cd App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
