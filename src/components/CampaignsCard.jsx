import React from 'react'
import { Col, Card, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function CampaignsCard({ id, title, content, img }) {

    const navigate = useNavigate();

    return (
        <Col xs='12' sm='10' md='9' lg='6' xl='5' xxl='4' className='p-5'>
            <Card className='bg-primary rounded border-0'>
                <Card.Body className='p-0'>
                    <Image className='rounded-top' src={img} alt='reklam' width={'100%'} height={430} />
                </Card.Body>
                <Card.Body className='justify-content-center align-items-center d-flex flex-column text-capitalize text-white bg-dark bg-opacity-50 text-center' style={{ height: "150px", overflow: "auto" }}>
                    <p>{title}</p>
                    <p>{content}</p>
                </Card.Body>
                <Card.Footer className='p-0 border-0'>
                    <Button onClick={() => navigate("/campaign-details/" + id)} type='button' variant='light' size='lg' className='form-control text-uppercase rounded-0 rounded-bottom text-danger opacity-75'>detaylar</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default CampaignsCard