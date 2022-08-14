import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/categories/categories.module.scss'
import React, { Fragment,useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BooksContext } from '../api/booksContext'
import { authors } from '../api/authorsContext'
export default function Categories() {
    const {books} =useContext(BooksContext);
    const {category} = useContext(BooksContext);
    const {addToCart} = useContext(BooksContext);
    const {clickFavorite} = useContext(BooksContext);
    const filterdBooks= books.filter(book=> 
        { 

            return(book.category == category)
        
        });
        const filterdBooksMap = filterdBooks.map((book,i) => {
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
    const allBooks = books.map((book,i) => {
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

    const {selectCategory} = useContext(BooksContext);
    const allAuthors = authors.map((author,i)=>{
        return(
            <li key={i}>
                <Image src={author.img} alt={author.name} width={100} height={100} />
                <h3>{author.name}</h3>
            </li>
        )
    });
    const filterdAuthors= authors.filter(author=> 
        { 

            return(author.category == category)
        
        });
        const filterdAuthorsMap = filterdAuthors.map((author,i) => {
            return(
                <li key={i}>
                    <Image src={author.img} alt={author.name} width={100} height={100} />
                    <h3>{author.name}</h3>
                </li>
            )
        });
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
                    {category=="All"?allBooks: filterdBooksMap}
                </ul >
                <ul className={styles.categoriesAuthors}>
                {category=="All"?allAuthors:filterdAuthorsMap}
                </ul>
                </div>               
            </div>
        </Fragment>
    )
}
