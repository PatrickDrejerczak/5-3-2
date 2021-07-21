import React from "react";
import {
  Navbar,
  Container,
  InputGroup,
  FormControl,
  Button,
  Col,
  Row,
  Nav,
} from "react-bootstrap";
import "./style.css";

const SideMenu = ({ handleCategory }) => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container
          className="side-menu"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Nav
            className="me-auto"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Nav.Link eventKey="business" onSelect={handleCategory}>
              Business
            </Nav.Link>
            <Nav.Link eventKey="entertainment" onSelect={handleCategory}>
              Entertainment
            </Nav.Link>
            <Nav.Link eventKey="technology" onSelect={handleCategory}>
              Technology
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default SideMenu;
