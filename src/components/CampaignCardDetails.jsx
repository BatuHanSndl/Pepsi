import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

function CampaignCardDetails({ img, title, date, details }) {
    return (
        <Row className='p-5 bg-light rounded text-primary justify-content-center h-100'>
            <Col xs='12' sm='12' md='6' lg='6' xxl='5' className='p-0'>
                <Image className='rounded' src={img} alt='reklam' width={'100%'} height={350} />
            </Col>
            <Col xs='12' sm='12' md='6' lg='6' xxl='6' className='justify-content-center d-flex flex-column p-5 text-md-start text-center'>
                <h4 className='text-uppercase'>{title}</h4>
                <h5 className='text-capitalize'>kampanya geçerlilik tarihi</h5>
                <p>{date}</p>
            </Col>
            <Col xs='12' sm='12' md='12' lg='12' xxl='11' className='mt-md-3 text-center text-md-start justify-content-cente d-flex flex-column p-3'>
                <h4 className='text-uppercase'>kampanya detayları</h4>
                <p>{details}</p>
            </Col>
        </Row>
    )
}

export default CampaignCardDetails