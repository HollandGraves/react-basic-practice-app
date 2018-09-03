import React from 'react'


// This is a stateless component, or a component that exports a handbuilt function, versus a class, and does not change state
const person = (props) => {
    return (
        <div>
            <p>Welcome to my new life! I am {Math.floor(Math.random() * 30)} years old!</p>
            <p> {props.name} is awesome!</p>
            <p>and is the gender: {props.gender}</p>
            <br />
        </div>
    );
}

export default person;