import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import newsImages from "../../../../assets/news/NewsImages";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Newscards() {
  return (
  
      <Row className='news__cards' lg={4} l={3}>
        {newsImages.map((card) => (
          <Col /* lg={3} md={6} sm={12} */>
            <Card style={{ width: '18rem' }}>
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