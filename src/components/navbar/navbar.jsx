import "./navbarstyle.css";
import ImgLogo from "../../assets/img/logo.svg";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./cartWidget/CartWidget";
import HamburguerMenu from "./HamburguerMenu/HamburgerMenu";

function Navbar() {
  return (
    <div>
      <nav className="container_nav">
      <img className="img_navResponsive" src={ImgLogo} alt="Seven" />
        <ul className="nav_items">
          <img className="img_nav" src={ImgLogo} alt="Seven" />
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="">Nuevo</a>
          </li>

          <NavDropdown title="Prendas" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Hooides</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
          </NavDropdown>
          <li>
            <a href="#">Ayuda</a>
          </li>
        </ul>
        <ul className="nav_icons">
          <CartWidget />
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
