import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import useUserContext from "../hooks/useUserContext";

const Navigation = () => {
  const { isLoggedIn } = useUserContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Tech Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Blogs</Nav.Link>
            {isLoggedIn && <Nav.Link href="/my-blogs">My Blogs</Nav.Link>}
          </Nav>
          <Nav>
            {!isLoggedIn && (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/sign-up">Sign Up</Nav.Link>
              </>
            )}
            {isLoggedIn && (
              <Button variant="link" className="nav-link">
                Logout
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
