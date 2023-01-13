import React from "react";
import NavigationBar from "./Navbar";
import "../style/BookView.css";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import ScrollToTop from "../wrapper/ScrollToTop";
import OverflowHidden from "../wrapper/OverflowHidden";

const BookView = () => {
  ScrollToTop();
  OverflowHidden();
  return (
    <>
      <div className="bookview-bg">
        <NavigationBar />
        <main className="bookview-container">
          <Container className="bookview-form d-grid">
            <div className="bookview-mid">
              <Row>
                <Col className="d-flex justify-content-center">
                  <Card.Img className="bookview-img" src="https://i.pinimg.com/564x/28/d3/ac/28d3ac91ea5b71d7c354b360d9662c75.jpg" />
                </Col>

                <Col className="bookview-details">
                  <div className="bookview-text">
                    <div className="bookview-title mb-2">Book Title</div>
                    <div className="mb-2">
                      Synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate dignissim suspendisse in est ante in nibh. Congue quisque egestas diam in
                      arcu cursus euismod quis. Diam maecenas ultricies mi eget mauris. Sem et tortor consequat id. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Nibh nisl condimentum id venenatis a condimentum. Ut tristique et
                      egestas quis ipsum suspendisse ultrices gravida dictum. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet justo donec enim diam. Habitant morbi tristique senectus et. Malesuada fames ac
                      turpis egestas sed. Suspendisse ultrices gravida dictum fusce ut placerat orci. Neque viverra justo nec ultrices. Sem integer vitae justo eget magna fermentum iaculis eu non. Tempor id eu nisl nunc. Ut tristique et
                      egestas quis ipsum suspendisse ultrices. Dui sapien eget mi proin.
                    </div>
                    <Row>
                      <Col>
                        <div className="mb-2">Author:</div>
                        <div className="mb-2">Publisher:</div>
                        <div className="mb-2">Release:</div>
                        <div className="mb-2">Genre:</div>
                      </Col>
                      <Col>
                        <div className="mb-2">Author name</div>
                        <div className="mb-2">Publisher name</div>
                        <div className="mb-2">Release date</div>
                        <div className="mb-2">Genre list</div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Button variant="primary" className="mb-2 mt-3 ms-5" size="sm">
                  Read Online
                </Button>
                <Button variant="danger" className="ms-5" size="sm">
                  Download
                </Button>
              </Row>
            </div>
          </Container>
        </main>
      </div>
    </>
  );
};

export default BookView;
