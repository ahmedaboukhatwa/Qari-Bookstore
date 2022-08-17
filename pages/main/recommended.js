import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/main/recommended.module.scss'
import React, { Fragment,useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BooksContext } from '../api/booksContext'
import { authors } from '../api/authorsContext'
import BooksList from '../../components/BooksList'
export default function Recommended() {
    const {books} = useContext(BooksContext);
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
                    <BooksList filterdBooks={books}/>
                </ul >
                {/* <ul className={styles.recommendedAuthors}>
                {authorsList}
                </ul> */}
            </div>
        </Fragment>
    )
}

