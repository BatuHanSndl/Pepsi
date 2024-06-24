import React from 'react'
import { Container, Row, Col, Image, Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom'


function Footer() {


    return (
        <Container fluid>
            <Row className='text-center p-3 text-uppercase'>

                <Col md='12' lg xl xxl className='mb-4 mb-xl-0 mb-xxl-0 mt-4 justify-content-center align-items-center d-flex'>
                    <Image src="https://pepsi.com.tr/uploads/assets/media/logo.png" alt='pepsi' width={60} height={60} />
                    <Image src="https://pepsi.com.tr/uploads/assets/media/retro_logo.png" alt='pepsi' width={120} height={60} />
                </Col>
                <Col md='12' lg xl xxl className='p-0'>
                    <Nav className='flex-column h-100 justify-content-center align-items-center'>
                        <Nav.Link as={Link} to="" className='text-white w-50'>@pepsico, inc.</Nav.Link>
                        <Nav.Link as={Link} to="" className='text-white w-50'>gizlilik politikası</Nav.Link>
                        <Nav.Link as={Link} to="" className='text-white w-50'>çerez politikası</Nav.Link>
                    </Nav>
                </Col>
                <Col md='12' lg xl xxl className='p-0'>
                    <Nav className='flex-column h-100 justify-content-center align-items-center'>
                        <Nav.Link as={Link} to="/products" className='text-white w-50'>ürünler</Nav.Link>
                        <Nav.Link as={Link} to="/campaigns" className='text-white w-50'>kampanyalar</Nav.Link>
                        <Nav.Link as={Link} to="" className='text-white w-50'>duyurular</Nav.Link>
                    </Nav>
                </Col>
                <Col md='12' lg xl xxl className='p-0'>
                    <Nav className='flex-column h-100 justify-content-center align-items-center'>
                        <Nav.Link as={Link} to="" className='text-white w-50'>kişisel verilerin korunması</Nav.Link>
                        <Nav.Link as={Link} to="" className='text-white w-50'>bilgi toplum hizmetleri</Nav.Link>
                        <Nav.Link as={Link} to="" className='text-white w-50'>kazandırio</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer