import React, {useState, useReducer} from 'react';
import Modal from './Modal'
import reducer from './reducer'

// useReducer is another way of using state similar to use state except is much better at dealing with complicated state logic
// So if there are many instances of state manipulation on numerous conditions or state update depends on the previous values

const defaultState = { // State value to be passed into use reducer
    people: [],
    isModalOpen: false,
    modalContent: '',
};

const UseReducerBasics = () => {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState); // Default state sets the state values
                                                                 // Reducer is a function that handles these values that can be called anytime

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = { id: new Date().getTime().toString(), name };
            dispatch({ type: 'ADD_ITEM', payload: newItem }); // Dispatch is the reducer function.
            setName('');
        } else {
            dispatch({ type: 'NO_VALUE' });
        }
    };

    const closeModal = () => {
        dispatch({type: "CLOSE_MODAL" })
    }

    return (
        <div className={'container'}>
            <h1>UseReducer</h1><br/><br/>

            { state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modalContent} />)} {/* Need to preface state value with the 'state keyword */}
            <form onSubmit={handleSubmit} className={'form'}>
                <div>
                    <h3>Add person to List</h3><br/>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <button className={'btn'} type={'submit'}> Add Person</button>
            </form>

            {state.people.map((person) => {
                return(
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        <button type={'button'} onClick={()=>dispatch({type:"REMOVE_PERSON", payload:person.id})}>Remove person</button>
                    </div>
                )
            })}
        </div>
    );
};

export default UseReducerBasics;
