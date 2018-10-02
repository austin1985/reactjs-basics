import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi im a react app!</h1>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi iam a react App!!!'));
  }
}

export default App;
