import { Container, Form, Button, Row, Col } from "react-bootstrap";
import NavigationBar from "./Navbar.js";
import "../style/AddBook.css";
import OverflowHidden from "../wrapper/OverflowHidden";

const AddBook = () => {
  OverflowHidden();
  return (
    <>
      <div className="addbookbg">
        <NavigationBar />
        <Container className="addbook-container">
          <Form className="addbook-form text-white text-left w-100 m-auto">
            <h1 className="fw-normal mb-3">Add Book</h1>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="addbook-title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="email" placeholder="Book Title" />
              </Form.Group>
              <Form.Group as={Col} controlId="addbook-author">
                <Form.Label>Author</Form.Label>
                <Form.Control type="password" placeholder="Author name" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="addbook-publisher">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="email" placeholder="Publisher" />
              </Form.Group>
              <Form.Group as={Col} controlId="addbook-years">
                <Form.Label>Publication Years</Form.Label>
                <Form.Control type="password" placeholder="Years" />
              </Form.Group>
            </Row>
            <Form.Group controlId="addbook-years">
              <Form.Label>Synopsis</Form.Label>
              <Form.Control as="textarea" size="lg" placeholder="Synopsis" className="position-relative" rows={2}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Subjects</Form.Label>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`}>
                  <Form.Check inline label="Adventure" name="group1" type={type} id={`inline-${type}-1`} />
                  <Form.Check inline label="Autobiography" name="group1" type={type} id={`inline-${type}-2`} />
                  <Form.Check inline label="Biography" name="group1" type={type} id={`inline-${type}-3`} />
                  <Form.Check inline label="Children's" name="group1" type={type} id={`inline-${type}-4`} />
                  <Form.Check inline label="Comedy" name="group1" type={type} id={`inline-${type}-5`} />
                  <Form.Check inline label="Drama" name="group1" type={type} id={`inline-${type}-6`} />
                  <Form.Check inline label="Fantasy" name="group1" type={type} id={`inline-${type}-7`} />
                  <Form.Check inline label="Fiction" name="group1" type={type} id={`inline-${type}-8`} />
                  <Form.Check inline label="Horror" name="group1" type={type} id={`inline-${type}-9`} />
                  <Form.Check inline label="Memoir" name="group1" type={type} id={`inline-${type}-10`} />
                  <Form.Check inline label="Mystery" name="group1" type={type} id={`inline-${type}-11`} />
                  <Form.Check inline label="Nonfiction" name="group1" type={type} id={`inline-${type}-12`} />
                  <Form.Check inline label="Philosophy" name="group1" type={type} id={`inline-${type}-13`} />
                  <Form.Check inline label="Poetry" name="group1" type={type} id={`inline-${type}-14`} />
                  <Form.Check inline label="Science Fiction" name="group1" type={type} id={`inline-${type}-15`} />
                  <Form.Check inline label="Shorts" name="group1" type={type} id={`inline-${type}-16`} />
                  <Form.Check inline label="Spirituality" name="group1" type={type} id={`inline-${type}-17`} />
                  <Form.Check inline label="Travel" name="group1" type={type} id={`inline-${type}-18`} />
                </div>
              ))}
            </Form.Group>
            <Row>
              <Form.Group as={Col} controlId="addbook-bookcoverpng" className="mt-3">
                <Form.Label>Upload Book Cover {"(.png)"} </Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group as={Col} controlId="addbook-bookpdf" className="mt-3">
                <Form.Label>Upload Book File {"(.pdf)"}</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <div className="d-grid mt-3">
                <Button variant="secondary" size="lg">
                  Submit
                </Button>
              </div>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default AddBook;
