import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/main/recommended.module.scss'
import React, { Fragment } from 'react'
import Image from 'next/image'

export default function Recommended() {
    return (
        <Fragment>
            <div className={styles.recommended}>
                <span className={styles.recommendedTitle}>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteLeft} />
                    <h2>Recommended</h2>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
                </span>

                <ul className={styles.recommendedBooks}>
                    <li>
                        <div className={styles.bookmark}>
                            <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <Image src='/images/books/rich dad.png' alt='rich dad' width={300} height={300} />
                        <div className={styles.bookFooter}>
                            <div className={styles.bookIntro}>
                                <h2>Rich Dad</h2>
                                <span>Category: Financial</span>
                            </div>
                            <div className={styles.bookPrice}>
                                <h3>300$</h3>
                                <button>Add</button>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className={styles.bookmark}>
                            <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <Image src='/images/books/48 laws of power.png' alt='rich dad' width={300} height={300} />
                        <div className={styles.bookFooter}>
                            <div className={styles.bookIntro}>
                                <h2>48 Laws of Power</h2>
                                <span>Category: Political</span>
                            </div>
                            <div className={styles.bookPrice}>
                                <h3>300$</h3>
                                <button>Add</button>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className={styles.bookmark}>
                            <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <Image src='/images/books/atomic habits.jpg' alt='rich dad' width={300} height={300} />
                        <div className={styles.bookFooter}>
                            <div className={styles.bookIntro}>
                                <h2>Atomic Habits</h2>
                                <span>Category: Self Improvment</span>
                            </div>
                            <div className={styles.bookPrice}>
                                <h3>300$</h3>
                                <button>Add</button>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className={styles.bookmark}>
                            <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <Image src='/images/books/animal farm.jpg' alt='animal farm' width={300} height={300} />
                        <div className={styles.bookFooter}>
                            <div className={styles.bookIntro}>
                                <h2>Animal Farm</h2>
                                <span>Category: Novel</span>
                            </div>
                            <div className={styles.bookPrice}>
                                <h3>300$</h3>
                                <button>Add</button>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className={styles.bookmark}>
                            <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <Image src='/images/books/1984.jpg' alt='rich dad' width={300} height={300} />
                        <div className={styles.bookFooter}>
                            <div className={styles.bookIntro}>
                                <h2>1984</h2>
                                <span>Category: Novel</span>
                            </div>
                            <div className={styles.bookPrice}>
                                <h3>300$</h3>
                                <button>Add</button>
                            </div>

                        </div>
                    </li>
                    <li>
                        <div className={styles.bookmark}>
                            <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                        <Image src='/images/books/tools of titans.jpg' alt='tools of titans' width={300} height={300} />
                        <div className={styles.bookFooter}>
                            <div className={styles.bookIntro}>
                                <h2>Tools of Titans</h2>
                                <span>Category: Self Improvment</span>
                            </div>
                            <div className={styles.bookPrice}>
                                <h3>300$</h3>
                                <button>Add</button>
                            </div>

                        </div>
                    </li>
                </ul >
                <ul className={styles.recommendedAuthors}>
                    <li>
                        <Image src='/images/authors/robert t kiyosaki.jpg' alt='rich dad' width={100} height={100} />
                        <h3>Robert t Kiyosaki</h3>
                    </li>
                    <li>
                        <Image src='/images/authors/Robert Greene.jpg' alt='rich dad' width={100} height={100} />
                        <h3>Robert Greene</h3>
                    </li>
                    <li>
                        <Image src='/images/authors/james clear.webp' alt='rich dad' width={100} height={100} />
                        <h3>James Clear</h3>
                    </li>
                    <li>
                        <Image src='/images/authors/george orwell.webp' alt='rich dad' width={100} height={100} />
                        <h3>George Orwell</h3>
                    </li>
                    <li>
                        <Image src='/images/authors/tim ferriss.jpg' alt='rich dad' width={100} height={100} />
                        <h3>Tim Ferriss</h3>
                    </li>
                </ul>
            </div>
        </Fragment>
    )
}

