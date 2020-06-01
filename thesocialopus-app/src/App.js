import React from 'react';
import Gallery from './components/Gallery';
import NavBar from './components/NavBar';
import './App.css'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import LogIn from './components/LogIn';
import { useSelector } from 'react-redux';
import Profile from './components/Profile';

export default function App(){
  const signedin= useSelector(state => state.auth.auth)

    return (
      <Router>
        <div className="App">
          <NavBar />
            <Switch>
              <Route path="/profile">
                <Profile/>
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


