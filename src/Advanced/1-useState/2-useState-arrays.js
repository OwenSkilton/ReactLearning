import React, {useState} from 'react';
import {data} from '../data'
const UseStateArrays = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
    }

    return (
        <div className={'container'}>
            <h1>UseState Arrays</h1><br/><br/>
            {people.map((person) => {
                const {id, name} = person;
                return(
                    <div key={id} className={'item'}>
                        <h4>{name}</h4>
                        <button className={'btn'} onClick={() => removeItem(id)}>Remove Item</button>
                    </div>
                )
            })}
            <button className={'btn'} onClick={() => setPeople(data)}>Set Items</button>
            <button className={'btn'} onClick={() => setPeople([])}>Clear Items</button>
        </div>
    );
};

export default UseStateArrays;
