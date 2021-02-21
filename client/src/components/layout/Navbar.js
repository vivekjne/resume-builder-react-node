import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
    </Navbar>
  );
};

export default AppNavbar;
