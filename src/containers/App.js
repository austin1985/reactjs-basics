import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props){

    super(props);
    console.log('[App.js] Inside constructor',props)

    this.state = {

      persons: [
        { id: 'x123',name: 'Max', age:28 },
        { id: 'x124',name: 'Mike',age:33 },
        { id: 'x125',name: 'Stephanie', age:26 }
      ],
      authenticated: false,
      otherState:'Other value',
      showPersons: false,
      toggleClicked: 0
    }
  }

  

  componentWillmount(){

    console.log('[App.js] Inside componentWillmount')

  }

  //should use instead of componentWillReceiveProps componentWillUpdate
  static getDerivedStateFromProps(props,state) {

    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', props,state);
    return state;

  }
  
  //gets a snapshot of the current dom, before it changes
  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate');

  }



  componentDidMount(){

    console.log('[App.js] Inside componentDidMount')


  }

  componentWillReceiveProps(nextProps){

    console.log('[UPDATE App.js] Inside componentWillReceiveProps', nextProps);
}

// shouldComponentUpdate(nextProps,nextState) {

//     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
//     return nextState.persons !== this.state.persons ||
//       nextState.showPersons !== this.state.showPersons;
// }

componentWillUpdate(nextProps,nextState){

    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);

}

componentDidUpdate(){

    console.log('[UPDATE App.js] Inside componentDidUpdate');

}


  // state = {

  //   persons: [
  //     { id: 'x123',name: 'Max', age:28 },
  //     { id: 'x124',name: 'Mike',age:33 },
  //     { id: 'x125',name: 'Stephanie', age:26 }
  //   ],
  //   otherState:'Other value',
  //   showPersons: false

  // }

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

  loginHandler = () => {

    this.setState({authenticated : true});

  }
  // state changes async
  togglePersonsHandler = () => {

      const doesShow = this.state.showPersons;
      this.setState((prevState, props)=>{
        return {
          showPersons: !doesShow,
          toggleClicked: prevState.toggleClicked+1
        }

      });

  }

  render() {
    console.log('[App.js] Inside render')


    let persons = null;
    

    if (this.state.showPersons) {

      persons = (
        <div>

        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      </div>
      );

      
    }

    return (
      <div className='App'>
        <button onClick={()=>{this.setState({showPersons: true})}}>Show persons</button>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
        

      
      </div>
     
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi iam a react App!!!'));
  }
}

export default App;
