import React, { Component } from 'react';
import Gallery from './components/Gallery'
// import NavBar from './components/NavBar'
import './App.css'

export default class App extends Component {
  // constructor(props){
  //   super(props);

  //   this.state={
  //     auth: false,
  //     role: null,
  //     userID: null
  //   }
  
  // this.handleAuth = this.handleAuth.bind(this);
  // }

  // handleAuth = (role, userID) => {
  //   this.setState({
  //     auth: true,
  //     role: role,
  //     userID: userID
  //   })
    
  // }
  render() {
    return (
      <div className="App">
        <Gallery/> 
      </div>
    )
  }
}

