import React from 'react';
import Link from 'react-router-dom/Link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthContainer from '../layout/AuthContainer';
import { registerSchema } from '../../utils/validations/authYupSchemas';

export default function Register() {
  return (
    <AuthContainer>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                {...formik.getFieldProps('name')}
                isValid={formik.touched.name && !formik.errors.name}
                isInvalid={formik.touched.name && formik.errors.name}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...formik.getFieldProps('email')}
                isValid={formik.touched.email && !formik.errors.email}
                isInvalid={formik.touched.email && formik.errors.email}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...formik.getFieldProps('password')}
                isValid={formik.touched.password && !formik.errors.password}
                isInvalid={formik.touched.password && formik.errors.password}
              />
            </Form.Group>
            <Button block variant="primary" type="submit" className="mt-4 mb-2">
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
      <Link to="/login">Back to Login</Link>
    </AuthContainer>
  );
}
