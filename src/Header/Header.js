import React from 'react'
import styles from './Header.module.css'
import img from '../Assets/netflix_logo.png'
import { IoMdArrowDropdown } from "react-icons/io"
import { IoSearch } from "react-icons/io5"
import { FaBell } from "react-icons/fa"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={img} alt="logo netflix"/>
                <nav className={styles.navigation}>
                Navegar <IoMdArrowDropdown />
                </nav>
            </div>
            <nav className={styles.utilidades}>
                <div className={styles.buscar}>
                    <IoSearch />
                </div>
                <div className={styles.notificacoes}>
                    <FaBell />
                </div>
                <div className={styles.perfil}>
                    Meu perfil
                </div>
            </nav>
        </header>
    )
}

export default Header
