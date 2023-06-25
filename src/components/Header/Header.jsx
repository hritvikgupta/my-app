import React from 'react'
import {Navbar, Nav,Col,  Form, FormControl, Button} from 'react-bootstrap'
import {Search, search} from 'react-bootstrap-icons'
const Header = () => {
  return (
    <Navbar className="d-flex align-items-center" bg="info" expand="1g">
        <Col xs={2}>
        <Navbar.Brand className='d-flex align-items-center' href="#">
        <h1 className=" mb-0 ms-2">Travel</h1>
        </Navbar.Brand>
        </Col>
        {/* <Navbar.Toogle aria-controls="basic-navbar-nav"/> */}
        <Col className="d-flex align-items-center justify-content-end" xs={10}>
        <p className="text-light bold mb-0 me-3"> Explore new places</p >
        <Form inine className="d-flex ml-auto ms-2">
            <FormControl type="text" placeholder='Search' className='mr-sm-2'/>
            <Button bg="light" variant='light'>
                <Search/>
            </Button>
        </Form>
        </Col>
    </Navbar>
  )
}

export default Header