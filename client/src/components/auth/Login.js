import React from 'react';
import Link from 'react-router-dom/Link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthContainer from '../layout/AuthContainer';

export default function Login() {
  return (
    <AuthContainer>
      <Form>
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button block variant="primary" type="submit" className="mt-4 mb-2">
          Sign In
        </Button>
      </Form>
      <span>
        Not a user? <Link to="/register">Sign up</Link>
      </span>
    </AuthContainer>
  );
}
