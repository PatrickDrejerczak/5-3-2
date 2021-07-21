import React from "react";
import {
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import "./index.css";

const SearchBox = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Row className="search_box justify-content-between">
            <Col xs={12} md={8} lg={6}>
              <Navbar.Brand href="#home">CoderNews</Navbar.Brand>
            </Col>
            <Col xs={8} md={6} lg={6}>
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  size="sm"
                />
                <Button variant="outline-success" id="button-addon1">
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default SearchBox;
