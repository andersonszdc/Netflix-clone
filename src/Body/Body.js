import React from 'react'
import styles from './Body.module.css'
import { IoMdArrowDropright } from "react-icons/io"
import { AiOutlineInfoCircle } from "react-icons/ai"

const Body = () => {
    return (
        <div className={styles.body}>
            <h1>Título</h1>
            <p>Descrição</p>
            <div className={styles.buttons}>
                <button className={styles.button1}><IoMdArrowDropright />Assistir</button>
                <button className={styles.button2}><AiOutlineInfoCircle />Mais informações</button>
            </div>
        </div>
    )
}

export default Body
