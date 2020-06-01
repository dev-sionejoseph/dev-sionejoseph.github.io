import React, { Component } from 'react';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import SellerExhibit from './components/SellerExhibit';
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LogIn from './components/LogIn';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
            <Switch>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/exhibit">
                <SellerExhibit />
              </Route>
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/">
                <Gallery/>
              </Route>
            </Switch>
        </div>
      </Router> 
    )
  }
}


