import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const ActiveWindow = (path) => {
    if (window.location.pathname === path) return "text-white nav-link";
    return "nav-link";
  };

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" fixed="static-top" expand="lg">
        <Container>
          <Navbar.Brand href="/imk-uas/">E-Library</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/imk-uas/"} className={ActiveWindow("/imk-uas/")}>
                <Nav.Item>Home</Nav.Item>
              </Link>
              <Link to={"/login"} className={ActiveWindow("/login")}>
                <Nav.Item>Sign In</Nav.Item>
              </Link>
              <Link to={"/register"} className={ActiveWindow("/register")}>
                <Nav.Item>Register</Nav.Item>
              </Link>
              <Link to={"/addbook"} className={ActiveWindow("/addbook")}>
                <Nav.Item>Add Book</Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
