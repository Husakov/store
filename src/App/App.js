import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http.service.js';
import Product from '../product/product';
import VideoView from '../components/videoview/Videoview';


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
      <div className="App-main">
          <Product/>
          <VideoView/>
      </div>

      </div>
    );
  }
}

export default App;
