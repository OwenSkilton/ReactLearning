import React, {useState, useEffect} from 'react';

// Event listener can cause a huge issue with memory leaks
// Why we use a cleanup function

const UseEffectCleanup = () => {
    const [size, setSize]= useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize)
        // Event listener that takes 2 arguments.
        // First is the type of event
        // 2nd is the function that runs everytime the event is triggered
        // In this case the checkSize function is run everytime the window size is adjusted

        return () => { // THIS RETURN IS OUT CLEAN UP FUNCTION
            window.removeEventListener('resize', checkSize)
            // By removing the event listener after every execution,
            // it prevents 100s being present for every slight window adjustment thus saving on memory
        }
    })
    return (
        <div className={'container'}>
            <h1>UseEffect Cleanup</h1><br/><br/>
            <h1>Window Size: </h1>
            <h2>{size} px</h2>
        </div>
    );
};

export default UseEffectCleanup;
