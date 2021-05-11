import React from "react";
import {
  Container,
  Nav,
  NavbarBrand,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UsersContext";
import { useContext } from "react";
import { FiPower, FiUser } from "react-icons/all";

function Header() {
  const { logout, user } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar className="bg-primary navbar-expand">
      <Container>
        <Link to="/">
          <NavbarBrand>SHEA-SHOP</NavbarBrand>
        </Link>
        <Nav>
          <Nav.Link>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/products" className="nav-link">
              PRODUCTS
            </Link>
          </Nav.Link>
         

          {user.token ? (
            <>
              <Nav.Link>
                <Link to="/addproduct" className="nav-link">
                  ADD
                </Link>
              </Nav.Link>
              <NavDropdown
                title={
                  <FiUser
                    size={25}
                    style={{
                      border: "2px solid #000",
                      borderRadius: 20,
                      padding: 1,
                    }}
                  />
                }
              >
                <NavDropdown.Item>{user.name}</NavDropdown.Item>
                <NavDropdown.Item>{user.email}</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/logout"
                    className="nav-link"
                    onClick={handleLogout}
                  >
                    <FiPower size={30} />
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <Nav.Link>
                <Link to="/login" className="nav-link">
                  SIGN IN
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register" className="nav-link">
                  SIGN UP
                </Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
