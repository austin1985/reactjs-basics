import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {

    persons: [
      { name: 'Max', age:28 },
      { name: 'Mike',age:33 },
      { name: 'Stephanie', age:26 }
    ]

  }

  render() {
    return (
      <div className="App">
        <h1>Hi im a react app!</h1>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: writing, learning.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi iam a react App!!!'));
  }
}

export default App;
