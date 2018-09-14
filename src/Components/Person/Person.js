import React from 'react'
import Person from './Person.css'



// This is a stateless component, or a component that exports a handbuilt function, versus a class, and does not change state
const person = (props) => {
    return (
        // The onClick function calls the click prop this contains a reducer that changes state, all this is passed down from the root component
        <div className='Person'>
            <p>  
                {props.name}
            </p>
            <p className="pChange" onClick={props.click}>
                Click me to change the names of everyone!
            </p>
            <p>and is the gender: {props.gender}</p>
            <p>{props.children}</p> 
            <br />
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;