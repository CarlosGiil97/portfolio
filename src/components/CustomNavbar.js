import React from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';
import avatarPC from '../../src/assets/avatarPC.png';

function CustomNavbar() {
  return (
    <Navbar  expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto justify-content-center ">
          <Nav.Link href="#experiencia" >Experiencia</Nav.Link>
          <Nav.Link href="#proyectos" className='text-color-third-color'>Mis proyectos</Nav.Link>
          <Nav.Link href="#contacto" className='text-color-third-color'>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;