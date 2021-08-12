import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.src} alt="la casa de papel" />
        </div>
    )
}

export default Card
