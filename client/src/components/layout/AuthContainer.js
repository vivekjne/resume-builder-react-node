import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function AuthContainer({ children }) {
  return (
    <Container fluid="sm" className="fill-height">
      <Row className="align-items-center justify-content-center fill-height">
        <Col sm={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default AuthContainer;
