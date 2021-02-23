import React from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import Select from 'react-select';
import { Formik } from 'formik';
import { resumePrimarySchema } from '../../utils/validations/authYupSchemas';
import ScrollToTopOnMount from '../layout/ScrollToTopOnMount';
const options = [
  { value: 'PHP', label: 'PHP' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'Javascript', label: 'Javascript' }
];
function PrimaryForm({ onNext }) {
  return (
    <>
      <ScrollToTopOnMount />
      <h2>Primary Details</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: '',
          telephone: '',
          skills: [],
          summary: ''
        }}
        validationSchema={resumePrimarySchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          onNext(values);
        }}
      >
        {(formik) => (
          <Form style={{ marginTop: '25px' }} onSubmit={formik.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md={6} controlId="resumeName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  {...formik.getFieldProps('name')}
                  isValid={formik.touched.name && !formik.errors.name}
                  isInvalid={formik.touched.name && formik.errors.name}
                />
              </Form.Group>

              <Form.Group as={Col} md={6} controlId="resumeEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  {...formik.getFieldProps('email')}
                  isValid={formik.touched.email && !formik.errors.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={8} controlId="resumeAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  {...formik.getFieldProps('address')}
                  isValid={formik.touched.address && !formik.errors.address}
                  isInvalid={formik.touched.address && formik.errors.address}
                />
              </Form.Group>
              <Form.Group as={Col} md={4} controlId="resumeTelephone">
                <Form.Label>Telephone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter telephone"
                  {...formik.getFieldProps('telephone')}
                  isValid={formik.touched.telephone && !formik.errors.telephone}
                  isInvalid={
                    formik.touched.telephone && formik.errors.telephone
                  }
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={12} controlId="resumeSkills">
                <Form.Label>Skills</Form.Label>
                <Select
                  options={options}
                  isMulti
                  onChange={(selectedOptions) =>
                    formik.setFieldValue(
                      'skills',
                      selectedOptions.map((option) => option.value)
                    )
                  }
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md={12} controlId="resumeSummary">
                <Form.Label>Summary</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="summary"
                  {...formik.getFieldProps('summary')}
                  isValid={formik.touched.summary && !formik.errors.summary}
                  isInvalid={formik.touched.summary && formik.errors.summary}
                />
              </Form.Group>
            </Form.Row>

            <Row>
              <Col md={{ span: 3, offset: 9 }} className="mb-4">
                <Button variant="info" type="submit" block>
                  Next: Experience
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PrimaryForm;
