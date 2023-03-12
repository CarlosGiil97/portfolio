import React from 'react';
import { Navbar, Container,Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar  expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto justify-content-center ">
          <Nav.Link href="#formacion" className='hover:underline text-color-third-color underline-offset-8'>Formación</Nav.Link>
          <Nav.Link href="#experiencia" className='hover:underline text-color-third-color underline-offset-8'>Experiencia</Nav.Link>
          <Nav.Link href="#skills" className='hover:underline text-color-third-color underline-offset-8'>Skills</Nav.Link>
          <Nav.Link href="#proyectos" className='hover:underline text-color-third-color underline-offset-8'>Mis proyectos</Nav.Link>
          <Nav.Link href="#contacto" className='hover:underline text-color-third-color underline-offset-8'>Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;