import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);

    this.state={
      auth: false,
      role: null,
      userID: null
    }
  
  this.handleLogin = this.handleLogin.bind(this);
  
  }
  render() {
    return (
      <div className="App">
        {this.state.auth ? <Home /> : <LogIn />}
      </div>
    )
  }
}

