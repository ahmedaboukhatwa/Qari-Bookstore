import React, { useState, useContext, Fragment } from 'react'
import { BooksContext } from '../api/booksContext'
export default function Categories() {
    const {favoritedBooks} = useContext(BooksContext);
    const edit = () => {
        console.log("favoritedBooks",favoritedBooks);
    } 
    return (
        <Fragment>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={() => { edit() }}>btn</button>
        </Fragment>
    );
}
