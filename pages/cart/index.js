import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight, faCirclePlus , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/cart/cart.module.scss'
import React, { Fragment,useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { BooksContext } from '../api/booksContext'
import { authors } from '../api/authorsContext'
import Link from 'next/link'
export default function Cart() {
    const {
        inCartBooks,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        endPrice,
        done
    } = useContext(BooksContext);     
    const booksList = inCartBooks.map((book,i) => {
        return(
            <li key={i}>
                <Image src={book.img} alt={book.name} width={200} height={100} />
                <div className={styles.bookFooter}>
                    <div className={styles.bookIntro}>
                        <h2>{book.name}</h2>
                        <span>Category: {book.category}</span>
                    </div>
                    <div className={styles.bookPrice}>

                        <h3>{book.price*book.quantity}$</h3>
                        <div className={styles.quantity}>
                        {
                        book.quantity == 1 ? <button onClick={()=>{addToCart(book)}}>X</button> 
                        :<button onClick={()=>{decreaseQuantity(book)}}>-</button>
                        } 
                        <h5>{book.quantity}</h5>
                        <button onClick={()=>{increaseQuantity(book)}}>+</button>
                        </div>                     
                        
                    </div>
                </div>
            </li>
        )
    });
    return (
        <Fragment>
            <div className={styles.cart}>
                <span className={styles.cartTitle}>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteLeft} />
                    <h2>Cart</h2>
                    <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
                </span>
                <div className={styles.checkOut}>
                    
                <ul className={styles.cartBooks}>
                    {booksList}
                </ul >
                <ul className={styles.bill}>
                <div className={styles.voucher}>
                    <h4>Have Voucher Code?</h4>
                    <input type='text'/>
                    <button>APPLY</button>
                </div>
                
                    <Link href="/">
                    <div className={styles.moreBooks}>
                        <FontAwesomeIcon className={styles.circlePlusIcon} icon={faCirclePlus}/>
                        <h3>Add More Books</h3> 
                        <FontAwesomeIcon className={styles.angleRightIcon} icon={faAngleRight}/>
                    </div>
                    </Link>
                <div className={styles.totalPrice}>
                    <h4>Total</h4>
                    <h4>{endPrice}$</h4>
                </div>
                <button className={styles.buy} onClick={()=>{done()}}>CHECK OUT</button>
                </ul>
                </div>
                
            </div>
        </Fragment>
    )
}
