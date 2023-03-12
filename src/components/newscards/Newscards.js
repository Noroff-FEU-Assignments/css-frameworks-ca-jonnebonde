import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import newsImages from "../../assets/news/NewsImages";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Newscards() {
  return (
      <Row className="g-4"  xxl={4} xl={3} md={2} sm={1} xs={1}>
        {newsImages.map((card, index) => (
          <Col>
            <Card key={index}>
              <Card.Img variant="top" src={card.src} />
              <Card.Body className="d-flex flex-column justify-content-around">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
  );
}

export default Newscards;
