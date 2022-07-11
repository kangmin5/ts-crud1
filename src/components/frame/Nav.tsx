import Link from 'next/link'
import React, { FC } from 'react'
import styles from 'styles/Nav.module.css'

const Nav:FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <Link href='/'><h1 className={styles.logo}>LOGO</h1></Link>
            <ul className={styles.ul1}>
                <Link href="/user"><li className={styles.li}>User</li></Link>
                <Link href='/post'><li className={styles.li}>Post</li></Link>
                <li className={styles.li}>About</li>
                <li className={styles.li}>FAQ</li>
            </ul>
            <ul className={styles.ul2}>
                <li className={styles.li}>Login</li>
                <li className={styles.li}>Regiter</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav