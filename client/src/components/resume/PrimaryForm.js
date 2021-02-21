import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
function PrimaryForm({ onNext }) {
  return (
    <>
      <h2>Primary Details</h2>
      <Form style={{ marginTop: '25px' }} onSubmit={(e) => e.preventDefault()}>
        <Form.Row>
          <Form.Group as={Col} md={6} controlId="resumeName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col} md={6} controlId="resumeEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={8} controlId="resumeAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="address" />
          </Form.Group>
          <Form.Group as={Col} md={4} controlId="resumeTelephone">
            <Form.Label>Telephone</Form.Label>
            <Form.Control type="text" placeholder="telephone" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={12} controlId="resumeSkills">
            <Form.Label>Skills</Form.Label>
            <Select options={options} isMulti />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={12} controlId="resumeSummary">
            <Form.Label>Summary</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="summary" />
          </Form.Group>
        </Form.Row>

        <Row>
          <Col md={{ span: 3, offset: 9 }} className="mb-4">
            <Button onClick={onNext} variant="info" type="submit" block>
              Next: Experience
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default PrimaryForm;
