import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
function ExperienceForm({ onNext, onBack }) {
  return (
    <>
      <h2>Experience Details</h2>
      <Form style={{ marginTop: '25px' }} onSubmit={(e) => e.preventDefault()}>
        <Form.Row>
          <Form.Group as={Col} md={6} controlId="resumeExperienceCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Enter Company" />
          </Form.Group>

          <Form.Group as={Col} md={6} controlId="resumeExperienceDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Designation" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={12} controlId="resumeExperienceLocation">
            <Form.Label>Company Location</Form.Label>
            <Form.Control type="text" placeholder="Enter Location" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={6} controlId="resumeExperienceFrom">
            <Form.Label>From</Form.Label>
            <Form.Control type="date" placeholder="Enter From Date" />
          </Form.Group>

          <Form.Group as={Col} md={6} controlId="resumeExperienceTo">
            <Form.Label>To</Form.Label>
            <Form.Control
              max="2021-02-21"
              type="date"
              placeholder="Enter To Date"
            />
          </Form.Group>
        </Form.Row>
        <Row>
          <Col md={2} className="mb-2 mb-md-0">
            <Button onClick={onBack} variant="dark" block>
              Back
            </Button>
          </Col>
          <Col md={{ span: 3, offset: 7 }} className="mb-4">
            <Button onClick={onNext} variant="info" type="submit" block>
              Next: Skills
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ExperienceForm;
