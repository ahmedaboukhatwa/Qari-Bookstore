import Image from 'next/image'
import { Fragment } from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.scss'
import Main from './main'

export default function Home() {
  return (
    <Fragment>
      <Main/>
    </Fragment>
  )
}
