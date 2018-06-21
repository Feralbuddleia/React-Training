import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Practice</h1>
        </header>
        <section className="App-flex">
            <NavBar />
            <Main />
        </section>
      </div>
    );
  }
}

export default App;
