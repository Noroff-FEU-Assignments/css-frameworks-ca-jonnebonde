import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <footer>
      <Container>
        <Row >
          <Col sm={12} md={4} className='text-center text-md-start footer__icons'>
            <a href='/'><i className="fa-brands fa-vimeo-v"></i></a>
            <a href='/'><i className="fa-brands fa-youtube"></i></a></Col>
          <Col xs={6} md={4} className='text-md-center'>
            <a href="mailto:hello@yay.com">hello@yay.com</a></Col>
          <Col xs={6} md={4} className='text-end'>
            <span>Copyright 2023</span></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer