import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Filter from "./Filter";
import "../style/Intro.css";

const Intro = () => {
  return (
    <div className="intro-intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">E-Library</div>
            <div className="subtitle">Have You Forgotten How Good Book Tastes?</div>
          </Col>
          <div>
            <Form className="d-flex">
              <Form.Control className="rounded-0" type="search" placeholder="Search for title" aria-label="Search" />
              <Button className="rounded-0" variant="secondary">
                Search
              </Button>
            </Form>
            <Filter />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
