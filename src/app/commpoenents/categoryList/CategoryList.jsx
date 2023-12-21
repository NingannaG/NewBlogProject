import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className={StyleSheet.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categeories}>
        <div className={styles.category}>
          <Link href='/blog?cat=style'>
          <Image src='/style.png' alt='' height={32} width={32} className={styles.image}></Image>

          </Link>
        </div>
        </div>
        </div>
  )
}

export default CategoryList