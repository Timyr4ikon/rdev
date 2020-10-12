import React from 'react'
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navLogo}></div>
            <NavLink to="/rdev/" exact className={ styles.home} activeClassName={styles.active}>HOME</NavLink>
            <NavLink to="/rdev/about" className={styles.about} activeClassName={styles.active}>ABOUT US</NavLink>
        </header>
    )
}
