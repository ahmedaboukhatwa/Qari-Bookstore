import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/main/recommended.module.scss'
import React, { Fragment,useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BooksContext } from '../api/booksContext'
import { authors } from '../api/authors'
export default function Recommended(props) {
    const {books} =useContext(BooksContext);
    const {favoritedBooks} = useContext(BooksContext);
    const {addToCart} = useContext(BooksContext);
    const {clickFavorite} = useContext(BooksContext);
    const booksList = books.map((book,i) => {
        return(
            <li key={i}>
                <div onClick={()=>{clickFavorite(book)}} className={styles.bookmark}>
                    <FontAwesomeIcon className={styles.heartIcon} style ={{color:book.isFavorited? "red" :""}} icon={faHeart} />
                    <FontAwesomeIcon icon={faBookmark} />
                </div>
                <Image src={book.img} alt={book.name} width={300} height={300} />
                <div className={styles.bookFooter}>
                    <div className={styles.bookIntro}>
                        <h2>{book.name}</h2>
                        <span>Category: {book.category}</span>
                    </div>
                    <div className={styles.bookPrice}>
                        <h3>{book.price}$</h3>
                        <button onClick={()=>{addToCart(book)}}>
                            {book.inCart?"Added":" Add"}        
                        </button>
                    </div>
                </div>
            </li>
        );
    });

    const authorsList = authors.map((author,i)=>{
        return(
            <li key={i}>
                <Image src={author.img} alt={author.name} width={100} height={100} />
                <h3>{author.name}</h3>
            </li>
        )
    })
    return (
        <Fragment>
            <div className={styles.recommended}>
                <span className={styles.recommendedTitle}>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteLeft} />
                    <h2>Recommended</h2>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
                </span>
                <ul className={styles.recommendedBooks}>
                    {booksList}
                </ul >
                <ul className={styles.recommendedAuthors}>
                {authorsList}
                </ul>
            </div>
        </Fragment>
    )
}

