import React, {useState} from 'react';

const UseStateCounter = () => {
    const[valueBasic, setValueBasic] = useState(0)
    const[valueComplex, setValueComplex] = useState(0)

    const decreaseValue = ()=> valueBasic !== 0 ? setValueBasic(valueBasic-1) : null
    const resetBasicValue = () => setValueBasic(0)
    const increaseValue = () => setValueBasic(valueBasic+1)

    const complexIncrease = () => setTimeout(() =>setValueComplex((prevState)=>{return prevState+1}), 2000)
    // setTimeout executes the handler x amount of time after initialisation
    // The arrow function: '(prevState)=>{return prevState+1}' OR (x) => return x,
    // is a convention that accesses the most up to date state value right before update rather than asynchronous execution
    // prevState access the state value that is accurate as of 2s after click rather than the one correct as of click
    const resetComplexValue = () => setValueComplex(0)

    return (
        <div className={'container'}>
            <h1>UseState Counter</h1><br/><br/>
            <section style={{margin: '4rem 0'}}>
                <h2>Regular Counter</h2>
                <h1>{valueBasic}</h1>
                <button className={'btn'} onClick={decreaseValue}>Decrease</button>
                <button className={'btn'} onClick={resetBasicValue}>Reset</button>
                <button className={'btn'} onClick={increaseValue}>Increase</button>
            </section><section style={{margin: '4rem 0'}}>
                <h2>Complex Counter</h2>
                <h1>{valueComplex}</h1>
                <button className={'btn'} onClick={complexIncrease}>Increase Later</button>
                <button className={'btn'} onClick={resetComplexValue}>Reset</button>
        </section>
        </div>
    );
};

export default UseStateCounter;
