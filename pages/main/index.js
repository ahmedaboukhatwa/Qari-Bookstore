import React, { Fragment, useContext, useState } from 'react';
import Search from './search';
import Recommended from './recommended';
import { BooksContext } from '../api/booksContext';
export default function Main() {
  const [query, setQuery] = useState('');
  const { searchBooks } = useContext(BooksContext);
  const filteredBooks = searchBooks(query);
  return (
    <Fragment>
        <Search query={query} onSearch={setQuery}/>
        <Recommended books={filteredBooks} isSearching={Boolean(query.trim())}/>
    </Fragment>
  )
}

