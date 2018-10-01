import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './comps/HomeComponent';
import ProductComponent from './comps/ProductComponent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="ui three item menu">
            <a href="/" className="item">Home</a>
            <a href="/product" className="item">Products</a>
            <a className="item">Clients</a>
          </div>
        </div>
        <div className="ui container wrapper">
          <Router>
            <div>
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/product" component={ProductComponent} />
            </div>
          </Router>
        </div>

      </div>



    );
  }
}

export default App;
