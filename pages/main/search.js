import React, { Fragment } from 'react';
import styles from "../../styles/main/search.module.scss"
import Logo from '../../components/Logo';
export default function Search() {
    return (
        <Fragment>
        <div className={styles.search}>  
        <Logo/>
        <div className={styles.searchBox}>
        <select>
            <option>All</option>
            <option>Autors</option>
            <option>Books</option>
        </select>
        <input type="search"/>  
        </div>
        </div>
        </Fragment>
    )
}
