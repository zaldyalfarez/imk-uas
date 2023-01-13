import { Button, Container, Form, Nav } from "react-bootstrap";
import NavigationBar from "./Navbar.js";
import "../style/Login.css";
import { Link } from "react-router-dom";
import OverflowHidden from "../wrapper/OverflowHidden";

const Login = () => {
  OverflowHidden();
  return (
    <>
      <div className="loginbg">
        <NavigationBar />
        <main className="login-container">
          <Container className="d-grid h-100">
            <Form className="login-form text-white text-left w-100 m-auto">
              <h1 className="text-center fw-normal">Hello</h1>
              <div className="mb-2 text-center">
                Sign In to E-Library or{" "}
                <Link to={"/register"}>
                  {" "}
                  <Nav.Item className="d-inline">register</Nav.Item>{" "}
                </Link>
              </div>
              <Form.Group controlId="login-email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" size="lg" placeholder="Email address" className="position-relative"></Form.Control>
              </Form.Group>
              <div className="mb-2"></div>
              <Form.Group controlId="login-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" size="lg" placeholder="Password" className="position-relative"></Form.Control>
              </Form.Group>
              <div className="mb-3"></div>
              <div className="d-grid">
                <Button variant="secondary" size="lg">
                  Log In
                </Button>
              </div>
            </Form>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Login;
