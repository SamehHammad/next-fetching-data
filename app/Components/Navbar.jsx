import React from 'react'
import styles from "../Navbar.module.css"
import Link from 'next/link'
const Navbar = () => {
  return (
      <div className={styles.nav}>
          <Link href="/" className={styles.li}>Home</Link>
          <Link href="/todo" className={styles.li}>Todo</Link>
          <Link href="/posts" className={styles.li}>Posts</Link>
    </div>
  )
}

export default Navbar