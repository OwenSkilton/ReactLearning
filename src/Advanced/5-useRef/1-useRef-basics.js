import React, {useState, useRef, useEffect} from 'react';

// useRef similar to useState that it preserves the values
// however does NOT trigger re-render
// used to target DOM elements and preserve directly without the use of a function
const UseRefBasics = () => {
    const refContainer = useRef(null)
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true)
    }

    useEffect(() => {
        refContainer.current.focus() // Brings mouse cursor to the input field
    })

    const renderData = () => {
        return(
            <div className={'item'}>
                <h4>{refContainer.current.value}</h4>
            </div>
        )
    }
    return (
        <div className={'container'}>
            <h1>UseRef Basics</h1><br/><br/>
            <form className={'form'} onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}/>
                    <button type={'submit'}> submit button</button>
                </div>
            </form>

            {show && renderData()}
        </div>
    );
};

export default UseRefBasics;
