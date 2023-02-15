import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

export default function ItemCard( props ) {
    <div className={styles.cardContainer}>
        <h1>{props.title}</h1>
        <Image src={props.image} alt={props.title} width={100} height={100} />
        <p>{props.description}</p>
        <p>{props.location}</p>
        <p>{props.item}</p>
        <p>{props.code}</p>
    </div>
}
