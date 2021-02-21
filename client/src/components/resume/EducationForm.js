import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
function EducationForm({ onNext, onBack }) {
  return (
    <>
      <h2>Education Details</h2>
      <Form style={{ marginTop: '25px' }} onSubmit={(e) => e.preventDefault()}>
        <Form.Row>
          <Form.Group as={Col} md={6} controlId="resumeEducationInstitute">
            <Form.Label>Institute</Form.Label>
            <Form.Control type="text" placeholder="Enter Institute" />
          </Form.Group>

          <Form.Group as={Col} md={6} controlId="resumeEducationDegree">
            <Form.Label>Degree</Form.Label>
            <Form.Control type="text" placeholder="Enter Degree" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={12} controlId="resumeEducationLocation">
            <Form.Label>Institute Location</Form.Label>
            <Form.Control type="text" placeholder="Enter Institute Location" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={12} controlId="resumeEducationPassingDate">
            <Form.Label>Passing Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Passing Date"
              max={Date.now()}
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
              Next: Preview
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default EducationForm;
