import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import newsImages from "../../../../assets/news/NewsImages";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Newscards() {
  return (
  
      <Row className='news__cards row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1'  >
        {newsImages.map((card) => (
          <Col className="mb-3">
            <Card className='' >
              <Card.Img variant="top" src={card.src} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
  )
}

export default Newscards

