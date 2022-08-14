import React, { Fragment } from 'react'
import styles from '../../styles/main/contact.module.scss'

export default function Contact() {
  return (
    <Fragment>
    <div className={styles.contact}>
      <input placeholder='From'/>
      <input placeholder='Topic'/>
      <textarea placeholder='Message'/>
      <button>Send</button>
    </div>
    </Fragment>  
  )
}
