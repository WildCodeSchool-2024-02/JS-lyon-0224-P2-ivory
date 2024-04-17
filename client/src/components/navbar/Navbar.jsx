import styles from "./Navbar-style.module.css"
import Html from "../../assets/logos/HTML.png"
import Css from "../../assets/logos/CSS.png"
import Js from "../../assets/logos/JS.png"
import React from "../../assets/logos/REACT.png"
import Git from "../../assets/logos/GIT.png"


function NavBar() {
    
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.element}><img className={styles.logo} src={Html} alt="logo html"/><a className={styles.link} href="/">Html</a></li>
        <li className={styles.element}><img className={styles.logo} src={Css} alt="logo css"/><a  className={styles.link} href="/">Css</a></li>
        <li className={styles.element}><img className={styles.logo} src={Js} alt="logo Javascript"/><a className={styles.link} href="/">JS</a></li>
        <li className={styles.element}><img className={styles.logo}src={React} alt="logo react"/><a className={styles.link} href="/">React</a></li>
        <li className={styles.element}><img className={styles.logo}src={Git} alt="logo git"/><a className={styles.link} href="/">Git</a></li>

      </ul>
    </nav>
  ); 
}


export default NavBar;