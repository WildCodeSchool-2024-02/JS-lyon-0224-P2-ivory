import {Link} from "react-router-dom"
import styles from "./NavbarStyle.module.css"
import Html from "../../assets/logos/HTML.png"
import Css from "../../assets/logos/CSS.png"
import Js from "../../assets/logos/JS.png"
import React from "../../assets/logos/REACT.png"
import Git from "../../assets/logos/GIT.png"


function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.element}><Link className={styles.link} to="/html"><img className={styles.logo} src={Html} alt="logo html" />Html</Link></li>
        <li className={styles.element}><Link className={styles.link} to="/css"><img className={styles.logo} src={Css} alt="logo css"/>Css</Link></li>
        <li className={styles.element}><Link className={styles.link} to="/javascript"><img className={styles.logo} src={Js} alt="logo Javascript"/>JS</Link></li>
        <li className={styles.element}><Link className={styles.link} to="/react"><img className={styles.logo}src={React} alt="logo react"/>React</Link></li>
        <li className={styles.element}><Link className={styles.link} to="/git"><img className={styles.logo}src={Git} alt="logo git"/>Git</Link></li>

      </ul>
    </nav>
  );
}


export default NavBar;
