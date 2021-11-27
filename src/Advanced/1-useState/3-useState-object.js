import React, {useState} from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState(
        {
            name: 'Peter',
            age: 24,
            message: 'random message'
        })

    const changeMessage = () => {
        setPerson({...person, message: 'Hello World'})
        // Spread operator means that any number of arguments are re used form the original object
        // After the comma is what we're changing
    }

    return (
        <div className={'container'}>
            <h1>UseState Objects</h1><br/><br/>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className={'btn'} onClick={changeMessage}>Change Message</button>
        </div>
    );
};

export default UseStateObject;
