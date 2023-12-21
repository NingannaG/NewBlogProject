import React from 'react'
import styles from '@/app/commpoenents/authLinks/authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
  const status = "true"
  return <>
    {status === "False" ? (
    <Link href='/login'>Login</Link>
    ) : (
      <>
        <Link href="/write">Write</Link>
        <span className={styles.link}>Logout</span>
      </>
    )
    }
    </>
}


    export default AuthLinks