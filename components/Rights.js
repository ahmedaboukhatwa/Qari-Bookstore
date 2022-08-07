import React from 'react';
import Link from "next/Link";
import styles from "../styles/rights/rights.module.scss";
export default function Rights() {
    return (
    <div className={styles.rights}>
        <span>
            Coded By 
            <Link href="https://ahmed-abou-khatwa-cv.vercel.app/">
                <a target="blank">Ahmed Abou Khatwa</a> 
            </Link>
        </span>
    </div>
    )
}
