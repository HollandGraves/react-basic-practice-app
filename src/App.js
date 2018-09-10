import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
  // state is all the data of the app that can be dynamic
  state = {
    persons: [
        { name: 'Matt', gender: 'male' },
        { name: 'Legolas', gender: 'male' },
        { name: 'Dustin', gender: 'male' },
        { name: 'Kat', gender: 'female' }
    ]
  }

  switchNameHandler = (newName) => {
    // this is the method built into React that changes the state and causes the component to refresh and update
    this.setState(
      {
        persons: [
          { name: newName, gender: 'male' },
          { name: newName, gender: 'male' },
          { name: newName, gender: 'male' },
          { name: newName, gender: 'female' }
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Yo yo yo yo embryooo</h1>
        {// this type of event below (onClick, a reserved keyword) calls the Reducer function (aka handler) and changes the state with this.setState and the argument passed
        }
        <button onClick={this.switchNameHandler.bind(this, 'New Names HAVE BEEN INSERTED')}>     
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name}         // this type of passing data hardcodes data into the component through props, and is accessed through, in this case, e.g. props.name
          gender={this.state.persons[0].gender}
        />
        <Person 
          click={() => this.switchNameHandler('Leg the LAS, the FaRTchurrdr')}          // this line passes the reducer function (handler) into the props of the Person component
          name={this.state.persons[1].name} 
          gender={this.state.persons[1].gender}
        />
        <Person 
          click={() => this.switchNameHandler('Leg the LAS, the FaRTchurrdr')} 
          name={this.state.persons[2].name} 
          gender={this.state.persons[2].gender}
        />
        <Person 
          click={() => this.switchNameHandler('Leg the LAS, the FaRTchurrdr')} 
          name={this.state.persons[3].name} 
          gender={this.state.persons[3].gender}       // below, inbetween the <Person></Person> tag is hardcoded information that is passed into the component, and acessed through props.children, within the component
        > 
          This is the text that is passed in through props.children or this.props.children
          <br/>
          (this props used depends on if the JSX-html tag comes from a stateless Component or a stateful Component, respectively)
          <br/>
          note: you can put html in this space that is passed into the props.children or this.props.children javascript call
        </Person>
      </div>
    );
    // this, directly below, is what the JSX compiles to
    // return React.createElement('div, {classname: App}, React.createElement('h1', 'Yo yo yo yo embryooo'));
    // effectively, the JSX compiles to a bunch of nested .createElement() methods on the React object
  }
}

export default App;
