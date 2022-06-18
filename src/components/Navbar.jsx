import React, { useState } from 'react'
import styles from "../styles/Navbar.module.scss"
 import {FaBars,FaTimes} from "react-icons/fa"
 const Navbar = () => {
    // mobile state
    const[navOpen, settNavOpen]=useState(false)
  return (
    <nav className={styles.nav}>
        <div className={styles.logoContainer}>
            <span className={styles.logo}>Food</span>
        </div>
        <div className={styles.mobileBars} onClick={()=>settNavOpen(true)}>
        <FaBars/>
        </div>
        <ul className={`${navOpen?styles.menuMobileActive:undefined} ${styles.menu}`}>
    <li className={styles.mobileFaTimes} onClick={()=>settNavOpen(false)}>
        <FaTimes/>
    </li>
    <li>Home</li>
    <li>Our Menu</li>
    <li>Reservation</li>
    <li>News</li>
    <li>More</li>
        </ul>
       
    </nav>
  )
}

export default Navbar;