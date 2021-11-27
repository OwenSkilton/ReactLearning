import React, {useState} from 'react';

const UseStateBasics = () => {
    const [text, setText] = useState('Random Title')
    // Hooks baby!
    // 'text', 'setText' is the naming convention for hooks.
    // Lets you use state without constructing a class.
    // 'setText' is actually a function that overwrites the state value for 'text'
    // Hooks used to manipulate display logic to the screen. Not great for rendering components.
    const handleClick = () => {
        text === 'Random Title' ? setText('Hello World') : setText('Random Title')
    }
    return (
        <div className={'container'}>
            <h1>UseState Basics</h1><br/><br/>
            <h2>{text}</h2>
            <button type={'button'} className={'btn'} onClick={handleClick}>Change Title</button>
        </div>
    );
};

export default UseStateBasics; // Export Default allows the import of the componet without the need for curly brackets such as useState
