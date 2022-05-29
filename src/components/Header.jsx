import React from 'react'
import { Navbar, Container, FormControl, Nav, Dropdown, Badge } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search anything"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize="25px" />
              <Badge>{ 5}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{padding:10}}>Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header