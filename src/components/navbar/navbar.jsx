//React
import { Link } from "react-router-dom";
//Styles
import "./navbarstyle.css";
//Assets
import ImgLogo from "../../assets/img/logo.svg";
//Components
import CartWidget from "./CartWidget/CartWidget";
import HamburguerMenu from "./HamburguerMenu/HamburgerMenu";

function Navbar() {
  return (
    <div>
      <nav className="container_nav">
        <img className="img_navResponsive" src={ImgLogo} alt="Seven" />
        <ul className="nav_items">
          <img className="img_nav" src={ImgLogo} alt="Seven" />
          <Link className="li" to="/reactproyect-coder/">
            Inicio
          </Link>

          <Link className="li" to="/reactproyect-coder/prendas">
            Prendas
          </Link>

          <Link className="li" to="/reactproyect-coder/nosotros">
            Sobre Nosotros
          </Link>

          <Link className="li" to="/reactproyect-coder/ayuda">
            Ayuda
          </Link>
        </ul>
        <ul className="nav_icons">
          <CartWidget></CartWidget>
          <div className="responsiveButton">
            <HamburguerMenu />
          </div>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Navbar;
