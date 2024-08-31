import { Navbar,Nav,Container} from 'react-bootstrap';
import React from 'react'

const NavHead = () => {
  return (
    <>
     <Navbar bg="black" collapseOnSelect expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" id='todo'>TODO APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" id='link'>
            <Nav.Link href="#home"className='linksnav'>Home</Nav.Link>
            <Nav.Link href="#about" className='linksnav'>About</Nav.Link>
            <Nav.Link href="#view" className='linksnav'>View Task</Nav.Link>
            <Nav.Link href="#pending" className='linksnav'>Pending</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavHead