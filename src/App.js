import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    const style= {

      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null;

    if (this.state.showPersons) {

      persons = (
        <div>
          {this.state.persons.map((person,index) =>{

              return <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>this.nameChangeHandler(event, person.id)}/>

          })}

      </div>
      );
      style.backgroundColor = 'red';
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
