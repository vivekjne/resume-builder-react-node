import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function AuthContainer({ children }) {
  return (
    <Row className="align-items-center justify-content-center fill-height">
      <Col sm={12} md={6}>
        {children}
      </Col>
    </Row>
  );
}

export default AuthContainer;
