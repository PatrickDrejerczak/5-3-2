import React from "react";
import { Card, Button } from "react-bootstrap";

const SingleNews = ({ singleData }) => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={singleData.urlToImage} />
        <Card.Body>
          <Card.Title>{singleData.title}</Card.Title>
          <Card.Text>{singleData.description}</Card.Text>
          <Button variant="success">{singleData.author}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleNews;
