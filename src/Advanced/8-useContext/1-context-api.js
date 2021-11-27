import React, {useState, useContext} from 'react';
import {data} from '../data'

// able to pass functions / data down through an infinite amount of components without using arguments

const PersonContext = React.createContext();
// two components - Provider, Consumer
// Provider is the return aspect of the root component that handles the main functionality - Line 19

const ContextApi = () => {
    const [people, setPeople] = useState(data)

    const removePerson = (id) => {
        setPeople((people)=>{ // People is our entire data array
            return people.filter((person) => person.id !== id) // Return if the persons id does not match the ID passed in
        })
    }
    return (
        <PersonContext.Provider value={{removePerson, people}}> { /* wrapping the div with the provider context */ }
            <div className={'container'}>
                <h1>Context API / useContext</h1><br/><br/>
                <List/>
            </div>
        </PersonContext.Provider>
    );
};

const List = () =>{
    const {people} = useContext(PersonContext); // Accessing people from the object PersonContext - contains: removePerson(), people
    return(
        <div className={'container'}>
            {people.map((person)=>{
                return <SinglePerson {...person} key={person.id} />
            })}
        </div>
    )
}

const SinglePerson = ({id, name}) => {
    const {removePerson} = useContext(PersonContext);
    return(
        <div className={'item'}>
            <h4>{name}</h4>
            <button className={'button'} onClick={() => removePerson(id)}>Remove</button>
        </div>
    )
}

export default ContextApi;
