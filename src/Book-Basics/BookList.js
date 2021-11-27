import React from 'react';
import './index.css'
import {books} from './books'
import Book from './Book'

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => <Book key={book.id} {...book}/>)}
            {/*  ... = Spread operator. Dont need to specify an object name. Can just pass entire thing through   */}
        </section>
    )
}

export default BookList
