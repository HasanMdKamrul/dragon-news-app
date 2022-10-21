import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOutHandle = () => {
    logOut()
      .then(() => console.log("user logged out"))
      .catch((e) => console.error(e.message));
  };

  return (
    <Navbar
      className="mb-3"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Link to="/">Dragon-News</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {user?.uid ? user?.displayName : ""}
            </Nav.Link>
            {user?.uid ? (
              <Button
                className="me-2"
                onClick={signOutHandle}
                variant="outline-secondary"
              >
                SignOut
              </Button>
            ) : (
              <>
                <Link to="/login">LogIn</Link>
                <Link to="/register">Register</Link>
              </>
            )}

            {user?.photoURL ? (
              <Link to="/profile">
                <Image
                  style={{ height: "30px" }}
                  roundedCircle
                  src={user?.photoURL}
                />
              </Link>
            ) : (
              <Link to="/profile">
                <FaUser />
              </Link>
            )}

            <div className="d-block d-lg-none">
              <LeftSideNav />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
