import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {

    persons: [
      { id: 'x123',name: 'Max', age:28 },
      { id: 'x124',name: 'Mike',age:33 },
      { id: 'x125',name: 'Stephanie', age:26 }
    ],
    otherState:'Other value',
    showPersons: false

  }

  //handling the button press
  deletePersonHandler = (personIndex) => {
    //copy the array
    //const persons = this.state.persons.slice();
    //or
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});

  }

  nameChangeHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(p =>{

      return p.id === id;

    });

    const person = { ...this.state.persons[personIndex] }

    person.name= event.target.value;

    const persons =[...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });

  }


  togglePersonsHandler = () => {

      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});

  }

  render() {



    let persons = null;
    

    if (this.state.showPersons) {

      persons = (
        <div>

        <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}/>
      </div>
      );

      
    }

    return (

      <div className="App">
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
     
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi iam a react App!!!'));
  }
}

export default App;
