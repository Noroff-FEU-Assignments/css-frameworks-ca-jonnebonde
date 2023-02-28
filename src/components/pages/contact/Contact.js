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
        <Row className=" form__container flex-lg-row-reverse">
          <Col className="col-12 col-lg-6 order-lg-1">
            <ContactDetails />
          </Col>
          <Col className="col-12 order-lg-0">
            <PageHeading>Submit Your Details</PageHeading>
          </Col>
          <Col className=" col-12 col-lg-6 order-lg-1">
            <DetailsForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
