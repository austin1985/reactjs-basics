import React , {Component} from 'react';
import './Person.css';
import Radium from 'radium';
import PropTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    // componentDidMount () {


    // }

    focusInput(){
       
            this.inputElement.current.focus();
        
    }

    render() {

        return (<div className="Person" >
        <AuthContext.Consumer>
            {auth => auth ? <p>Authenticated</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input 
        //only in stateful you can use ref
            ref={this.inputElement} 
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}/>
        </div>
        )
    }

}

Person.propTypes = {

    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

}

export default Radium(Person);