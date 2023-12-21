"use client"
import React, { useState } from 'react'
import styles from '@/app/commpoenents/authLinks/authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
  const status = "true"
  const [open, setopen] = useState(false);
  return <>
    {status === "False" ? (
      <Link href='/login' className={styles.link}>Login</Link>
    ) : (
      <>
        <Link href="/write" className={styles.link}>Write</Link>
        <span className={styles.link}>Logout</span>
      </>
    )
    }
    <div className={styles.burger} onClick={() => { setopen(!open) }}>
      <div className={styles.lines}></div>
      <div className={styles.lines}></div>
      <div className={styles.lines}></div>
    </div>
    {open &&
      <div className={styles.responsiveMenu}>
        <Link href='/HomePage'>HomePage
        </Link>
        <Link href='/about'>About</Link>
        <Link href='/'>Contact</Link>
        {status === "False" ? (
          <Link href='/login'>Login</Link>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
          </>
        )
        }
      </div>
    }




  </>
}


export default AuthLinks