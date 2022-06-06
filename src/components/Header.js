import React from 'react'
import {Navbar , FormControl , Container, Nav, Form } from "react-bootstrap"
import ReactStars from 'react-rating-stars-component'


function Header({setText, setRate}) {
  return (
    <div >

<Navbar bg="light" expand="lg" >
  <Container fluid >
    <Navbar.Brand href="#">Movie App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Contact</Nav.Link>
        
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e)=>setText(e.target.value)}
        />
        
        <ReactStars style={{margin:"20px"}}
    count={5}
     onChange={(newRating)=>setRate(newRating)}
    size={24}
    activeColor="#ffd700"

  />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
    </div>
  )
}

export default Header