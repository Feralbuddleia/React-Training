import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Practice</h1>
        </header>
        <section>
          <nav className="nav">
            <NavBar />
          </nav>
          <article className="aritcle">
            <Main />
          </article>
        </section>
      </div>
    );
  }
}

export default App;
