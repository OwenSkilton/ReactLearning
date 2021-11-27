import React, {useState, useEffect} from 'react';

const ShowHide = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={'container'}>
            <h1>Show Hide</h1><br/><br/>

            <button className={'btn'} onClick={() => setShow(!show)}>Show / Hide</button>
            {
                show && <Item/>
                // If show is true, display item component
            }

        </div>
    );
};

const Item = () => {
    const [size, setSize] = useState(window.innerWidth)
    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => window.removeEventListener('resize', checkSize)
    }, [])
    return(
        <div className={'container'}>
            <h1>window</h1>
            <h2>Size: {size}</h2>
        </div>
    )
}

export default ShowHide;
