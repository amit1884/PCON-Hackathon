import React from 'react'
import logo from '../assets/images/logo.png'
import {Navbar,Form,FormControl,Button} from 'react-bootstrap'
function NavbarSection() {
    return (
        <React.Fragment>
      <Navbar bg="light" variant="dark" style={{borderBottom:'1px solid black'}}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="200"
            height="50"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Form inline className="ml-auto">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </React.Fragment>
    )
}

export default NavbarSection
