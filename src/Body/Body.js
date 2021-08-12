import React from 'react'
import styles from './Body.module.css'
import { IoMdArrowDropright } from "react-icons/io"
import { AiOutlineInfoCircle } from "react-icons/ai"

const Body = () => {
    return (
        <div className={styles.body}>
            <h1>Título</h1>
            <p className={styles.descricao}>Um simples chef de San Francisco é o mais novo entre os inúmeros assassinos escolhidos para evitar que os poderes místicos de Wu caiam em mãos erradas.</p>
            <div className={styles.buttons}>
                <button className={styles.button1}><IoMdArrowDropright />Assistir</button>
                <button className={styles.button2}><AiOutlineInfoCircle />Mais informações</button>
            </div>
            <p className={styles.populares}>Populares na Netflix</p>
        </div>
    )
}

export default Body
