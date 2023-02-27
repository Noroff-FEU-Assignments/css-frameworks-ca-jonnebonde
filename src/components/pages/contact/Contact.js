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
      <Container className="">
        <Row className=" form__container row-cols-2 gap-4">
          <Col className="col-12 d-md-block d-none">
            <PageHeading>Submit Your Details</PageHeading>
          </Col>
          <Col className=" col-12 col-md-5">
            <DetailsForm />
          </Col>
          <Col className="col-12 d-md-none">
            <PageHeading>Submit Your Details</PageHeading>
          </Col>
          <Col className="col-12 col-md-5">
            <ContactDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
