import React from 'react'
import Card from './Card'
import styles from './Cards.module.css'

const Cards = (props) => {
    return (
        <div className={styles.cards}>
            <Card src={props.src}/>
            <Card src={props.src}/>
            <Card src={props.src}/>
            <Card src={props.src}/>
            <Card src={props.src}/>
        </div>
    )
}

export default Cards
