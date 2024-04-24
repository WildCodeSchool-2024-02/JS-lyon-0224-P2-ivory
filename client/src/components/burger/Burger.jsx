import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "./BurgerStyle.module.css";
import Html from "../../assets/logos/HTML.png";
import Css from "../../assets/logos/CSS.png";
import Js from "../../assets/logos/JS.png";
import Reactimg from "../../assets/logos/REACT.png";
import Git from "../../assets/logos/GIT.png";

function Burger() {
  const [burger, setBurger] = useState(false);

  const changeBurger = () => setBurger(!burger);

  return (
    <div className={styles.hamburger}>
      <div className="containerButtonBurger">
        <button
          className={styles.buttonBurger}
          type="button"
          onClick={changeBurger}
        >
          {burger === true ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {burger === true && (
        <nav className={styles.navbar}>
          <ul className={styles.list}>
            <li className={styles.element}>
              <Link className={styles.link} to="/html">
                <img className={styles.logo} src={Html} alt="logo html" />
                Html
              </Link>
            </li>
            <li className={styles.element}>
              <Link className={styles.link} to="/css">
                <img className={styles.logo} src={Css} alt="logo css" />
                Css
              </Link>
            </li>
            <li className={styles.element}>
              <Link className={styles.link} to="/javascript">
                <img className={styles.logo} src={Js} alt="logo Javascript" />
                JS
              </Link>
            </li>
            <li className={styles.element}>
              <Link className={styles.link} to="/react">
                <img className={styles.logo} src={Reactimg} alt="logo react" />
                React
              </Link>
            </li>
            <li className={styles.element}>
              <Link className={styles.link} to="/git">
                <img className={styles.logo} src={Git} alt="logo git" />
                Git
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Burger;
