import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
  state = {
    persons: [
        { name: 'Matt', gender: 'male' },
        { name: 'Legolas', gender: 'male' },
        { name: 'Dustin', gender: 'male' },
        { name: 'Kat', gender: 'female' }
    ]
  }

  switchNameHandler = () => {
      console.log('Was Clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>Yo yo yo yo embryooo</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} gender={this.state.persons[0].gender}/>
        <Person name={this.state.persons[1].name} gender={this.state.persons[1].gender}/>
        <Person name={this.state.persons[2].name} gender={this.state.persons[2].gender}/>
        <Person>
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
