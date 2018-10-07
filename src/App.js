import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {

    persons: [
      { name: 'Max', age:28 },
      { name: 'Mike',age:33 },
      { name: 'Stephanie', age:26 }
    ],
    otherState:'Other value',
    showPersons: false

  }

  //handling the button press
  switchNameHandler = (newName) => {
    //console.log("Was clicked!");
    this.setState({ 
    
      persons: [
        { name: newName, age:28 },
        { name: 'Mike',age:33 },
        { name: 'Stephanie', age:30 }
      ]
  
    
    });
  }

  nameChangeHandler = (event) => {

    this.setState({ 
    
      persons: [
        { name: 'Max', age:28 },
        { name: event.target.value, age:33 },
        { name: 'Stephanie', age:30 }
      ]
  
    
    });

  }


  togglePersonsHandler = () => {

      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});

  }

  render() {

    const style= {

      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <div>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max')}
          changed={this.nameChangeHandler}>Hobbies: writing, learning.</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>  
      </div>);

    }

    return (
      <div className="App">
        <h1>Hi im a react app!</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle names</button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi iam a react App!!!'));
  }
}

export default App;
