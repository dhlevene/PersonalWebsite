import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import './App.css';
import HomeScreen from './HomeScreen';
import SecondPage from './SecondPage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header text="we successfully passed some text" /> 
          <HomeScreen/>
          <SecondPage />
      </div>
    );
  }
}

export default App;
