import React from "react";
import { Card, CardGroup, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/BookList.css";

const BookList = () => {
  return (
    <>
      <Container className="booklist-container">
        <div>
          <CardGroup className="dflex justify-content-center">
            <div className="m-3">
              <Card className="bg-dark text-white" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/28/d3/ac/28d3ac91ea5b71d7c354b360d9662c75.jpg" />
                <Card.Body>
                  <Card.Title>
                    <Link to={"/bookview"} className="book-title text-primary">
                      Book Title
                    </Link>
                  </Card.Title>
                  <Card.Text className="card-text-book">Synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  <ListGroup className="list-group-book">
                    <ListGroup.Item>Author Name</ListGroup.Item>
                    <ListGroup.Item>Publisher / Years</ListGroup.Item>
                    <ListGroup.Item>Genre</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card className="bg-dark text-white" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/8b/ae/1a/8bae1a37c088f06ce19b89f10a5b0707.jpg" />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link to={"/bookview"} className="book-title text-primary">
                      Book Title
                    </Link>
                  </Card.Title>
                  <Card.Text className="card-text-book">Synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  <ListGroup className="list-group-book">
                    <ListGroup.Item>Author Name</ListGroup.Item>
                    <ListGroup.Item>Publisher / Years</ListGroup.Item>
                    <ListGroup.Item>Genre</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card className="bg-dark text-white" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/ac/5d/79/ac5d796d2302245dbe078ca174728a9c.jpg" />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link to={"/bookview"} className="book-title text-primary">
                      Book Title
                    </Link>
                  </Card.Title>
                  <Card.Text className="card-text-book">Synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  <ListGroup className="list-group-book">
                    <ListGroup.Item>Author Name</ListGroup.Item>
                    <ListGroup.Item>Publisher / Years</ListGroup.Item>
                    <ListGroup.Item>Genre</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card className="bg-dark text-white" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/dd/31/0d/dd310d4423564ad90684e6718379bb23.jpg" />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link to={"/bookview"} className="book-title text-primary">
                      Book Title
                    </Link>
                  </Card.Title>
                  <Card.Text className="card-text-book">Synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  <ListGroup className="list-group-book">
                    <ListGroup.Item>Author Name</ListGroup.Item>
                    <ListGroup.Item>Publisher / Years</ListGroup.Item>
                    <ListGroup.Item>Genre</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card className="bg-dark text-white" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/c2/9e/5c/c29e5c46bad6a15ac8367453436aec66.jpg" />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link to={"/bookview"} className="book-title text-primary">
                      Book Title
                    </Link>
                  </Card.Title>
                  <Card.Text className="card-text-book">Synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  <ListGroup className="list-group-book">
                    <ListGroup.Item>Author Name</ListGroup.Item>
                    <ListGroup.Item>Publisher / Years</ListGroup.Item>
                    <ListGroup.Item>Genre</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card className="bg-dark text-white" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/5d/48/b9/5d48b9033ea230d20892901327b7fff5.jpg" />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link to={"/bookview"} className="book-title text-primary">
                      Book Title
                    </Link>
                  </Card.Title>
                  <Card.Text className="card-text-book">Synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  <ListGroup className="list-group-book">
                    <ListGroup.Item>Author Name</ListGroup.Item>
                    <ListGroup.Item>Publisher / Years</ListGroup.Item>
                    <ListGroup.Item>Genre</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>

            <div className="m-3">
              <Card className="bg-dark text-white" style={{ width: "15rem" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/0e/9b/3e/0e9b3e6dc776235228cd5fd2a57e469c.jpg" />
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <Link to={"/bookview"} className="book-title text-primary">
                      Book Title
                    </Link>
                  </Card.Title>
                  <Card.Text className="card-text-book">Synopsis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                  <ListGroup className="list-group-book">
                    <ListGroup.Item>Author Name</ListGroup.Item>
                    <ListGroup.Item>Publisher / Years</ListGroup.Item>
                    <ListGroup.Item>Genre</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </CardGroup>
        </div>
      </Container>
    </>
  );
};

export default BookList;
