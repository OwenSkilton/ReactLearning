import React from 'react'
const Book = ({img, author, title, children}) => {
    //Dont need to specify props object as params due to ..., names need to match within object. Breaks children

    // Events:
    // Need attribute and eventHandler (onClick, onMouseOver etc)
    // If function invoked within eventHandler has an argument, it will run automatically on page load
    // To prevent this, ensure it is an arrow function so only executes on the event

    const clickHandler = (e) =>{ // e = the event object.
        console.log(e)
        console.log(e.target)
        console.log(e.target.innerText)
    }

    return (
        <article className='book'>
            <img src={img} alt=""/>
            <h3 onClick={(e) => {
                console.log(title)
                console.log(e.target.innerText)
            }}>{title}</h3>
            <h4>{author}</h4>
            <button className='bookButton' type="button" onClick={clickHandler}>click</button>
        </article>
    )
}

export default Book