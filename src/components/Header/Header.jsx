import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Header/Header.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../store/shopping-cart-context";
import { useContext } from "react";

export default function Header() {
  const { shoppingCart, sum } = useContext(CartContext);

  return (
    <Navbar expand="lg" className={styles.navBar}>
      <Container>
        <Navbar.Brand className={styles.logo}>#1519</Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className={styles.LinkNavBar} to="/">
                HOME
              </Link>

              <Link className={styles.LinkNavBar} to="/shop">
                SHOP
              </Link>
              <Link className={styles.LinkNavBar} to="/contatti">
                CONTACT
              </Link>
              <div className={styles.containerCart}>
                <Link to="/cart">
                  <FontAwesomeIcon
                    className={styles.iconCart}
                    icon={faCartShopping}
                  />
                </Link>
                <div className={styles.numberItems}>
                  {sum > 0 && <p>{sum}</p>}
                </div>
              </div>

              {/*<NavDropdown
                title={<span className={styles.LinkNavBar}>SHOP</span>}
                id="basic-nav-dropdown"
              >
               <NavDropdown.Item
                  className={styles.itemDropDown}
                  href="#action/3.1"
                >
                  ABBIGLIAMENTO
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">GADGET</NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
