import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/categories/categories.module.scss'
import React, { Fragment,useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BooksContext } from '../api/booksContext'
import { authors } from '../api/authorsContext'
import BooksList from '../../components/BooksList'
import Rights from '../../components/Rights'
export default function Categories() {
    const {books,category} =useContext(BooksContext);
    const filterdBooks= books.filter(book=> 
        { 

            return(book.category == category)
        
        });
    const {selectCategory} = useContext(BooksContext);
    return (
        <Fragment>
            <div className={styles.categories}>
                <select onChange={(e)=>{selectCategory(e)}}>
                    <option value='All'>All</option>
                    <option value='Financial'>Financial</option>
                    <option value='Political'>Political</option>
                    <option value='Self Improvment'>Self Improvment</option>
                    <option value='Novel'>Novel</option>
                </select> 
                <div className={styles.content}>
                <ul className={styles.categoriesBooks}>
                <span className={styles.categoriesTitle}>
                    
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteLeft} />
                    <h2>Books</h2>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
                </span>
                    {category=="All"?<BooksList filterdBooks={books}/>: <BooksList filterdBooks={filterdBooks}/>}
                </ul >
                </div>               
            </div>
        </Fragment>
    )
}
