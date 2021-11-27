const reducer = (state, action) => { // State contains the state params set up during useReducer

    switch (action.type) {
        case 'ADD_ITEM':
            {  // Action is the value of type passed through ('TESTING'). Both are objects
                const newPeople = [...state.people, action.payload]
                return { // Always need to return state
                    ...state,
                    people: newPeople,
                    isModalOpen: true,
                    modalContent: 'Item Added',
                }
            }
        case 'NO_VALUE':
            return {...state, isModalOpen: true, modalContent: 'Please enter value'} // Always need to return state
        case 'CLOSE_MODAL':
            return {...state, isModalOpen: false}
        case 'REMOVE_PERSON':
            return {
                ...state,
                people: state.people.filter(
                    (person) => person.id !== action.payload // Means only RETURN the person if they dont match the ID passed in
                )
            }
        default:
            throw new Error('No matching action type');
    }
};

export default reducer;
