import React, { Fragment, useContext, useState ,useEffect} from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import styles from '../styles/navbar/navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { BooksContext } from '../pages/api/booksContext'
export default function Navbar() {
    const router = useRouter();
    const {books} = useContext(BooksContext);
    const {inCartCount} = useContext(BooksContext);
    const {favoritedCount} = useContext(BooksContext);
    // const navClick=()=>{
    //     console.log(books); 
    //     console.log(favoritedBooks);
    //     console.log(favoritedCount);
    // }
    return (
        <Fragment>
            <div className={styles.navbar}>
                <Logo />
                <nav>
                    <Link href='/'>
                        <a className={router.asPath === '/' ? styles.active : ''}>Home</a>
                    </Link>
                    
                    <Link href='/categories'>
                        <a className={router.asPath === '/categories' ? styles.active : ''}>Categories</a>
                    </Link>
                    <Link href='/contact'>
                        <a className={router.asPath === '/contact' ? styles.active : ''}>Contact</a>
                    </Link>
                </nav>
                <ul>
                    <Link href='/favorited'>
                        <div>
                            <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                            <span>
                            {favoritedCount}
                            </span>
                        </div>
                    </Link>
                    <Link href='/cart'>
                        <div>
                            <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
                            <span>{inCartCount}</span>
                        </div>
                    </Link>
                </ul>
            </div>
        </Fragment>
    )
}

