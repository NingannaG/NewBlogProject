import Image from 'next/image'
import React from 'react'
import styles from './featured.module.css';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b style={{"fontWeight":"bold"}}>Hey its me!</b>
Descover new things
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/1.jpg' alt='Post image' width={400} height={400} className={styles.image}>

          </Image>

        </div>
        <div className={styles.textCOntainer}>
          <h1 className={styles.Posttitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sint sed placeat, sunt ex nemo laborum? Maiores tenetur accusantium cumque?</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, iste quaerat nobis non consequuntur error est, eaque magni hic libero, quos assumenda aut accusantium officiis cum odit perferendis quis provident? Corrupti illo minima doloremque maiores ea nobis, in facere aperiam id veniam cum eum aliquam fugiat, ad quos expedita! Voluptatum!
          </p>
          <button className={styles.button}>Read more</button>
          </div>

      </div>
    </div>
  )
}

export default Featured