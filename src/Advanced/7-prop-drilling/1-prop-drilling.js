import React, {useState} from 'react';
import {data} from '../data'

// How to pass functionality down through components

// A more usefully example is the useContext on the next section

const PropDrilling = () => {
    const [people, setPeople] = useState(data)

    const removePerson = (id) => {
        setPeople((people)=>{ // People is our entire data array
            return people.filter((person) => person.id !== id) // Return if the persons id does not match the ID passed in
        })
    }
    return (
        <div className={'container'}>
            <h1>Prop Drilling </h1><br/><br/>
            <List people={people} removePerson={removePerson}/>
        </div>
    );
};

// List does not access removePerson and simply passes it through to singlePerson. This is known as PROP DRILLING

const List = ({people, removePerson}) =>{
    return(
        <div className={'container'}>
            {people.map((person)=>{
                return <SinglePerson removePerson={removePerson} {...person} key={person.id} />
                // Can pass entire person object through using {...person}
                // The singlePerson function is able to work out what values we wish to access from the object using the arguments
            })}
        </div>
    )
}

const SinglePerson = ({id, name, removePerson}) => {
    return(
        <div className={'item'}>
            <h4>{name}</h4>
            <button className={'button'} onClick={() => removePerson(id)}>Remove</button>
            {/* Need the anonymous function so the removePerson function is called continuously */}
        </div>
    )
}
export default PropDrilling;
