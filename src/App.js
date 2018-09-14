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

  switchTypedHandler = (event) => {
    this.setState(
      {
        persons: [
            { name: event.target.value, gender: 'male' },
            { name: 'Legolas', gender: 'male' },
            { name: 'Dustin', gender: 'male' },
            { name: 'Kat', gender: 'female' }
        ]
      }
    )
  }

  resetNameHandler = () => {
    this.setState(
      {
        persons: [
            { name: 'Matt', gender: 'male' },
            { name: 'Legolas', gender: 'male' },
            { name: 'Dustin', gender: 'male' },
            { name: 'Kat', gender: 'female' }
        ]
      }
    )
  }




  render() {



    

    const style = {                   // this is an example of how to write inline styles. It uses jS camelCase notation to address the style object properties to an actual style
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }





    return (
      <div className="App">
        <h1>Yo yo yo yo embryooo</h1>
        {// this type of event below (onClick, a reserved keyword) calls the Reducer function (aka handler) and changes the state with this.setState and the argument passed
        }

        <button 
            className="appButton"
            style={style}           
            onClick={this.switchNameHandler.bind(this, 'The names have been changed with the click of a button!')}      // because of the text being bound to the method switchNameHandler the text will be passed into the method
            >           
          Switch Name
        </button>

        <button
            className="appButton"
            style={style}
            onClick={() => this.resetNameHandler()}>
          Reset Name
        </button>

        <Person 
          name={this.state.persons[0].name}         // this type of passing data hardcodes data into the component through props, and is accessed through, in this case, e.g. props.name
          gender={this.state.persons[0].gender}
          click={() => this.switchNameHandler('The names have been changed with the click of an element!')}          // this line passes the function into the props of the Person component
          changed={this.switchTypedHandler}         // this will pass the second event handler function into props so, inevitabely, it will change the name based up the name typed into the input bar in the Person component
        />
        <Person 
          name={this.state.persons[1].name} 
          gender={this.state.persons[1].gender}
          click={() => this.switchNameHandler('The names have been changed with the click of an element!')}
        />
        <Person 
          name={this.state.persons[2].name} 
          gender={this.state.persons[2].gender}
          click={() => this.switchNameHandler('The names have been changed with the click of an element!')}
        />
        <Person 
          name={this.state.persons[3].name} 
          gender={this.state.persons[3].gender}       
          click={() => this.switchNameHandler('The names have been changed with the click of an element!')}
          // below, inbetween the <Person></Person> tag is hardcoded information that is passed into the component, and acessed through props.children, within the component
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
