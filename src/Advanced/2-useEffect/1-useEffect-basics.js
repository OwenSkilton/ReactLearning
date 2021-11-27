import React, {useState, useEffect} from 'react';

// useEffect: allows you to do side affects (work outside of component)
// By default runs after every re-render. So what ever method is within the useEffect will execute after every re-render

const UseEffectBasics = () => {
    const [value, setValue] = useState(0)

    useEffect(()=>{
        if (value > 0 ) {
            document.title = `New Messages(${value})`
        }
        // Title updates (tab name) every button press
    }, [value])
    // If this array is left blank, it means that the useEffect will only run on the initial render.
    // With value present in the array it means that rather than running on every re-render,
    // It will only run when the value state is edited.
    // Can have as many use effects as you like as long as a different dependency is added

    const checkTabTitle = () => {
        if (value > 1) {
            return(
                <h3>Psst.... Check the tab title</h3>
            )
        }
    }
    return (
        <div className={'container'}>
            <h1>UseEffect Basics</h1><br/><br/>
            <h1>{value}</h1>
            <button className={'btn'} type={'btn'} onClick={()=> {setValue(value+1)}}>Increase</button>
            <button className={'btn'} type={'btn'} onClick={()=> {setValue(0)}}>Reset</button><br/><br/>

            {checkTabTitle()}
        </div>
    );
};

export default UseEffectBasics;
