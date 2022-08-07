import React, { Fragment } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'
import styles from '../styles/navbar/navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
    const router = useRouter();
    return (
        <Fragment>
            <div className={styles.navbar}>
                <Logo />
                <nav>
                    <Link href='/'>
                        <a className={router.asPath === '/' ? styles.active : ''}>Home</a>
                    </Link>
                    <Link href='authors'>
                        <a className={router.asPath === '/authors' ? styles.active : ''}>Authors</a>
                    </Link>
                    <Link href='/categories'>
                        <a className={router.asPath === '/categories' ? styles.active : ''}>Categories</a>
                    </Link>
                </nav>
                <ul>
                    <Link href='/'>
                        <div>
                            <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                            <span>
                                1
                            </span>
                        </div>
                    </Link>
                    <Link href='/'>
                        <div>
                            <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
                            <span>1</span>
                        </div>
                    </Link>
                </ul>
            </div>
        </Fragment>
    )
}
