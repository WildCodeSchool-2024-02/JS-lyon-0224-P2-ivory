import Html from "../../assets/logos/HTML.png"
import Css from "../../assets/logos/CSS.png"
import Js from "../../assets/logos/JS.png"
import React from "../../assets/logos/REACT.png"
import Git from "../../assets/logos/GIT.png"


function NavBar() {
    
  return (
    <nav>
      <ul>
        <li><a href="/">Html<img src={Html} alt="logo html"/></a></li>
        <li><a href="/">Css<img src={Css} alt="logo css"/></a></li>
        <li><a href="/">JavaScript<img src={Js} alt="logo Javascript"/></a></li>
        <li><a href="/">React<img src={React} alt="logo react"/></a></li>
        <li><a href="/">Git<img src={Git} alt="logo git"/></a></li>

      </ul>
    </nav>
  ); 
}


export default NavBar;