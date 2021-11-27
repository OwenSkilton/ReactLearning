import React, {useState} from 'react';

// Useful for some string manipulation when checking values or defaulting if nothing entered

const ShortCircuit = () => {
    const [text,setText] = useState('')

    const firstValue = text || 'hello world';
    // || operator, if text is falsy it will automatically return the 2nd value providing true and vice versa
    // if truthful automatically returns first value

    const secondValue = text && 'hello world';
    // && operator, if text is truthful will automatically return 2nd value
    // if falsy, returns nothing

    const changeText = () => {
        !text ? setText('Wagwan') : setText('')
    }

    return (
        <div className={'container'}>
            <h1>Short circuit</h1><br/><br/>

            <h1>firstValue: {firstValue}</h1>
            <h1>secondValue: {secondValue}</h1>
            <button className={'btn'} onClick={changeText}>Change text to Wagwan</button>
        </div>
    );
};

export default ShortCircuit;
