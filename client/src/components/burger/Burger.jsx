import {useState} from "react"
import { FaTimes, FaBars } from "react-icons/fa"
import styles from "./Burger-style.module.css"
import Html from "../../assets/logos/HTML.png"
import Css from "../../assets/logos/CSS.png"
import Js from "../../assets/logos/JS.png"
import Reactimg from "../../assets/logos/REACT.png"
import Git from "../../assets/logos/GIT.png"

function Burguer () {
    const [burger, setBurger] =useState(false)

    const changeBurger = () =>
    setBurger(!burger)


return (
  
    <div className={styles.hamburger}>
      <div>
         <button className={styles.buttonBurger} type="button" onClick={changeBurger}>
            {burger ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
    
      {burger === true && (
      <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.element}><img className={styles.logo} src={Html} alt="logo html"/><a className={styles.link} href="/">Html</a></li>
        <li className={styles.element}><img className={styles.logo} src={Css} alt="logo css"/><a  className={styles.link} href="/">Css</a></li>
        <li className={styles.element}><img className={styles.logo} src={Js} alt="logo Javascript"/><a className={styles.link} href="/">JS</a></li>
        <li className={styles.element}><img className={styles.logo}src={Reactimg} alt="logo react"/><a className={styles.link} href="/">React</a></li>
        <li className={styles.element}><img className={styles.logo}src={Git} alt="logo git"/><a className={styles.link} href="/">Git</a></li>

      </ul>
    </nav>)}
    </div>
)


}

export default Burguer; 