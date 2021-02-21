import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthContainer from '../layout/AuthContainer';
import { loginSchema } from '../../utils/validations/authYupSchemas';

function Login({ login, isAuthenticated }) {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <AuthContainer>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          login(values);
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
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
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
      <span>
        Not a user? <Link to="/register">Sign up</Link>
      </span>
    </AuthContainer>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
