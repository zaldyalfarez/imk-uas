import { Nav, Offcanvas, Form } from "react-bootstrap";
import { useState } from "react";
import "../style/Filter.css";

function Filter() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Item className="filter py-1">
        <Nav.Link onClick={handleShow}>Advanced Search</Nav.Link>
      </Nav.Item>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="offheader text-white">
          <Offcanvas.Title>Advanced Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offbody text-white">
          <Form>
            <Form.Group controlId="filter-years">
              <Form.Label>Publication Years</Form.Label>
              <Form.Select defaultValue="Any">
                <option>Any</option>
                <option>1990</option>
                <option>1991</option>
                <option>1992</option>
                <option>1993</option>
                <option>1994</option>
                <option>1995</option>
                <option>1996</option>
                <option>1997</option>
                <option>1998</option>
                <option>1999</option>
                <option>2000</option>
                <option>2001</option>
                <option>2002</option>
                <option>2003</option>
                <option>2004</option>
                <option>2005</option>
                <option>2006</option>
                <option>2007</option>
                <option>2008</option>
                <option>2009</option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="mt-3">Subjects</Form.Label>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`}>
                  <Form.Check label="All" name="group1" type={type} id={`inline-${type}-0`} />
                  <Form.Check label="Adventure" name="group1" type={type} id={`inline-${type}-1`} />
                  <Form.Check label="Autobiography" name="group1" type={type} id={`inline-${type}-2`} />
                  <Form.Check label="Biography" name="group1" type={type} id={`inline-${type}-3`} />
                  <Form.Check label="Children's" name="group1" type={type} id={`inline-${type}-4`} />
                  <Form.Check label="Comedy" name="group1" type={type} id={`inline-${type}-5`} />
                  <Form.Check label="Drama" name="group1" type={type} id={`inline-${type}-6`} />
                  <Form.Check label="Fantasy" name="group1" type={type} id={`inline-${type}-7`} />
                  <Form.Check label="Fiction" name="group1" type={type} id={`inline-${type}-8`} />
                  <Form.Check label="Horror" name="group1" type={type} id={`inline-${type}-9`} />
                  <Form.Check label="Memoir" name="group1" type={type} id={`inline-${type}-10`} />
                  <Form.Check label="Mystery" name="group1" type={type} id={`inline-${type}-11`} />
                  <Form.Check label="Nonfiction" name="group1" type={type} id={`inline-${type}-12`} />
                  <Form.Check label="Philosophy" name="group1" type={type} id={`inline-${type}-13`} />
                  <Form.Check label="Poetry" name="group1" type={type} id={`inline-${type}-14`} />
                  <Form.Check label="Science Fiction" name="group1" type={type} id={`inline-${type}-15`} />
                  <Form.Check label="Shorts" name="group1" type={type} id={`inline-${type}-16`} />
                  <Form.Check label="Spirituality" name="group1" type={type} id={`inline-${type}-17`} />
                  <Form.Check label="Travel" name="group1" type={type} id={`inline-${type}-18`} />
                </div>
              ))}
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Filter;
