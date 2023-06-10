import Image from 'next/image'
import React from 'react'
import styles from "../styles/guitar.module.css"
import Link from 'next/link'

const Guitar = ({guitar}) => {

  const {name, image, url, description, price} = guitar

  return (
    <Link href={`/guitars/${url}`}>
    <div className={styles.card}>
      
      <Image src={image.data.attributes.formats.medium.url} width={200} height={300} alt={`Guitar brand ${name}`} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{name}</h2>
        <p className={styles.cardPrice}>$ {price}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      
    </div>
    </Link>
  )
}

export default Guitar