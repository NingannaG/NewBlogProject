import Link from 'next/link'
import React from 'react'
import styles from 'homepage.module.css';
import Featured from '@/app/commpoenents/feature/Featured'
import CategoryList from '@/app/commpoenents/categoryList/CategoryList';
import CardList from '@/app/commpoenents/cardList/CardList';
import Menu from '@/app/commpoenents/menu/Menu';

const page = () => {
  return (
    <div>
      <div className="styles.container">
        <Featured />
        <CategoryList />
        <div className="content">
          <CardList />
          <Menu />

        </div>
      </div>
    </div>
  )
}

export default page