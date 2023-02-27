import React from "react";
import { Helmet } from "react-helmet";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageHeading from "../../shared/pageheading/PageHeading";
import DetailsForm from "./details-form/DetailsForm";
import ContactDetails from "./contact-details/ContactDetails";

function Contact() {
  return (
    <>
      <Helmet>
        <title>The YAY Company | Contact</title>
      </Helmet>
      <Container>
        <Row className="row-cols-2">
          <Col className="col-12">
            <PageHeading>Submit Your Details</PageHeading></Col>
          <Col>
            <DetailsForm />
          </Col>
          <Col>
            <ContactDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
