import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function DetailsForm() {
  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control id="name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control id="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="website">Website</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3" className="d-none">https://</InputGroup.Text>
            <Form.Control id="website basic-addon3" />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control as="message" style={{ height: "100px" }} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="FieldsetCheck"
            label="Allow us to sell your personal details to whomever we want"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default DetailsForm;
