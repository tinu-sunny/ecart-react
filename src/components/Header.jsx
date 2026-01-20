import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top" className="shadow-sm">
      <Container>
        {/* Logo / Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          🛒 E-Cart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/prouduct">
              Products
            </Nav.Link>

            <Nav.Link as={NavLink} to="/wishlist">
              Wishlist <FaHeart className="text-danger"/>
            </Nav.Link>
          </Nav>

          {/* Right Side Actions */}
          <Nav className="align-items-center gap-3">
            {/* Cart */}
            <Nav.Link as={NavLink} to="/cart" className="position-relative">
              <FaShoppingCart size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2
              </span>
            </Nav.Link>

            {/* CTA Button */}
            <Button as={Link} to="/prouduct" variant="dark">
              Shop Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
