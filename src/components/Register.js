import { Container, Form, Button, Nav } from "react-bootstrap";
import NavigationBar from "./Navbar.js";
import "../style/Register.css";
import { Link } from "react-router-dom";
import OverflowHidden from "../wrapper/OverflowHidden";

const Register = () => {
  OverflowHidden();
  return (
    <>
      <div className="registerbg">
        <NavigationBar />
        <main className="register-container">
          <Container className="d-grid h-100">
            <Form className="register-form text-white text-left w-100 m-auto">
              <Form.Group controlId="register-firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" size="lg" placeholder="First name" className="position-relative"></Form.Control>
              </Form.Group>
              <div className="mb-2"></div>
              <Form.Group controlId="register-lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="email" size="lg" placeholder="Last name" className="position-relative"></Form.Control>
              </Form.Group>
              <div className="mb-2"></div>
              <Form.Group controlId="register-email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" size="lg" placeholder="Email address" className="position-relative"></Form.Control>
              </Form.Group>
              <div className="mb-2"></div>
              <Form.Group controlId="register-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" size="lg" placeholder="Password" className="position-relative"></Form.Control>
              </Form.Group>
              <div className="mb-2"></div>
              <div className="d-grid mb-3">
                <Button variant="secondary" size="lg">
                  Create account
                </Button>
              </div>
              <div className="text-center">
                Already a Member?{" "}
                <Link>
                  {" "}
                  <Nav.Item className="d-inline-flex">Sign in</Nav.Item>
                </Link>
              </div>
            </Form>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Register;
