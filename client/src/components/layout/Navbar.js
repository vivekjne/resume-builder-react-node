import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
const AppNavbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  const renderRight = () => {
    switch (location.pathname) {
      case '/':
        return (
          <Link to="/resume/new">
            <Button variant="light" className="text-success">
              + Create New Resume
            </Button>
          </Link>
        );
    }
  };

  return (
    <Navbar fixed="top" bg="primary" variant="dark">
      <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      {renderRight()}
    </Navbar>
  );
};

export default AppNavbar;
