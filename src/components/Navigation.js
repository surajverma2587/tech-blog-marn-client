import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { useUserContext } from "../contexts/UserProvider";

const Navigation = () => {
  const { state, dispatch } = useUserContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Tech Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Blogs</Nav.Link>
            {state.user && <Nav.Link href="/my-blogs">My Blogs</Nav.Link>}
          </Nav>
          <Nav>
            {!state.user && (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/sign-up">Sign Up</Nav.Link>
              </>
            )}
            {state.user && (
              <Button
                variant="link"
                className="nav-link"
                onClick={handleLogout}
              >
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
