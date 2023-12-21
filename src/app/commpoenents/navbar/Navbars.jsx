import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle';

const Navbars = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/1.png' width={20} height={20} />
        <Image src='/2.png' width={20} height={20} />
        <Image src='/3.png' width={20} height={20} />
      </div>
      <div className={styles.logo}>
        My blog

      </div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href='/' className={styles.link}>HomePage</Link>
        <Link href='/' className={styles.link}>Contcat</Link>
        <Link href='/' className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbars