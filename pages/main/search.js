import React, { Fragment, useContext, useState } from 'react'
import styles from '../../styles/main/search.module.scss'
import Logo from '../../components/Logo'
import { BooksContext } from '../api/booksContext'
import Recommended from './recommended'
export default function Search({ query, onSearch }) {
    const [localQuery, setLocalQuery] = useState('');
    const { searchBooks } = useContext(BooksContext);
    const activeQuery = query ?? localQuery;
    const updateQuery = (value) => {
        if (onSearch) onSearch(value);
        else setLocalQuery(value);
    };
    return (
        <Fragment>
            <div className={styles.search}>
                <Logo />
                <div className={styles.searchBox}>
                    {/* <select>
                        <option>All</option>
                        <option>Autors</option>
                        <option>Books</option>
                    </select> */}
                    <input
                        type='search'
                        value={activeQuery}
                        onChange={(event) => updateQuery(event.target.value)}
                        placeholder='Search books, authors, or categories'
                        aria-label='Search books, authors, or categories'
                    />
                </div>
            </div>
            {!onSearch && <Recommended books={searchBooks(activeQuery)} isSearching={Boolean(activeQuery.trim())}/>}
        </Fragment>
    )
}
