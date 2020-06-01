import React from 'react';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import SellerExhibit from './components/SellerExhibit';
import './App.css'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import LogIn from './components/LogIn';
import { useSelector } from 'react-redux';

export default function App(){
  const signedin= useSelector(state => state.auth.auth)

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
                {signedin? <Redirect to="/gallery"/> : <LogIn />}
              </Route>
              <Route path="/">
                <Gallery/>
              </Route>
            </Switch>
        </div>
      </Router> 
    )
}


