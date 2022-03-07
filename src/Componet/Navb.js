import React from "react";
import { Navbar,Container,Nav } from 'react-bootstrap';
function Navt(){
    return (
        
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Portfol</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">blog</Nav.Link>
          <Nav.Link href="#pricing">about us</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
    )
}
 export default(Navt)
