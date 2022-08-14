import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/favorited/favorited.module.scss'
import React, { Fragment,useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BooksContext } from '../api/booksContext'
import { authors } from '../api/authorsContext'
export default function Favorited() {
    const {books} = useContext(BooksContext);
    const {favoritedBooks} = useContext(BooksContext);
    const {addToCart} = useContext(BooksContext);
    const {clickFavorite} = useContext(BooksContext);
    const booksList = favoritedBooks.map((book,i) => {
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
        )
    });
    return (
        <Fragment>
            <div className={styles.favorited}>
                <span className={styles.favoritedTitle}>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteLeft} />
                    <h2>Favorited</h2>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
                </span>
                <ul className={styles.favoritedBooks}>
                    {booksList}
                </ul >
            </div>
        </Fragment>
    )
}
