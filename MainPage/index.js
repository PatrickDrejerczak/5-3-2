import React from "react";
import SideMenu from "../SideMenu/index.js";
import PaginationBar from "../Pagination/index.js";
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
import NewList from "../NewList/index.js";

const MainPage = ({ data, category, handleCategory }) => {
  return (
    <Row>
      <Col xs={12} md={3} lg={3}>
        <SideMenu handleCategory={handleCategory} />
      </Col>
      <Col xs={12} md={7} lg={7}>
        <NewList data={data} category={category} />
        <PaginationBar />
      </Col>
    </Row>
  );
};

export default MainPage;
