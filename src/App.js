import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Yo yo yo yo embryooo</h1>
        <Person name='Matt' gender='male' />
        <Person name='Dustin' gender='male' />
        <Person name='Kat' gender='female' />
      </div>
    );
    // this, directly below, is what the JSX compiles to
    // return React.createElement('div, {classname: App}, React.createElement('h1', 'Yo yo yo yo embryooo'));
    // effectively, the JSX compiles to a bunch of nested .createElement() methods on the React object
  }
}

export default App;
