import React from 'react'


// This is a stateless component, or a component that exports a handbuilt function, versus a class, and does not change state
const person = (props) => {
    return (
        <div>
            <p> {props.name} is awesome!</p>
            <p>and is the gender: {props.gender}</p>
            <p>{props.children}</p>
            <br />
        </div>
    );
}

export default person;