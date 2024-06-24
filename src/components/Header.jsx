import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <Navbar expand="lg" variant='dark'>
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <Image id='logoImg' src='https://pepsi.com.tr/uploads/assets/media/logo.png' alt='pepsi' width={50} />
                    <Image className='mx-2' src='https://pepsi.com.tr/uploads/assets/media/retro_logo.png' alt='pepsi' width={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarToggle" />
                <Navbar.Collapse id="navbarToggle">
                    <Nav className='mx-auto text-uppercase'>
                        <Nav.Link as={Link} to="/products" className='text-white'>ürünler</Nav.Link>
                        <Nav.Link as={Link} to="/campaigns" className='text-white'>kampanyalar</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="" className='text-white'>icon</Nav.Link>
                        <Nav.Link as={Link} to="" className='text-white'>icon</Nav.Link>
                        <Nav.Link as={Link} to="" className='text-white'>icon</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header