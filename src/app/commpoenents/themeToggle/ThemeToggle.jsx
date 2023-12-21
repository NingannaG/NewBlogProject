"use client"
import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image';
import {ThemeContext} from '@/context/ThemeContext';
const ThemeToggle = () => {
  
  const {theme,toggle}=useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container} onClick={toggle} style={theme=="dark"?{backgroundColor:"white"}:{backgroundColor:"black"}}>
      <Image src="/1.png" height={14} width={15}/>
      <div className={styles.ball} style={theme=="dark"?{backgroundColor:'black',left:1}:{backgroundColor:"white",right:1}}>
        </div>

      <Image src='/2.png' height={15} width={15}/>
    </div>
  )
}

export default ThemeToggle