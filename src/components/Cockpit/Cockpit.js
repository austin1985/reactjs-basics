import React from 'react';
import classes from './Cockpit.css'



const cockpit = (props) => {

    const style= {

        backgroundColor: 'green',
        color:'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
    
      };

    const assignClasses = [];
    let btnClass = ''

    if(props.showPersons){

        btnClass = classes.red;
    }

    if (props.persons.length <= 2) {

        assignClasses.push('red');

    }

    if(props.persons.length <= 1){

        assignClasses.push('bold');

    }

    return(
        <div>
        <h1>Hi im a react app!</h1>
        <p className={assignClasses.join(' ')}>This is working</p>
        <button 
          style={style}
          onClick={props.clicked}>Toggle names</button>
        </div>  
    );

}

export default cockpit;