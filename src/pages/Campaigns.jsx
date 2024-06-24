import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getAllAdverts } from '../redux/advertSlice';
import CampaignsCard from '../components/CampaignsCard';

function Campaigns() {

    const adverts = useSelector(store => store.duyurular.adverts);
    console.log(adverts)
    const fcn = useDispatch();

    useEffect(() => {
        fcn(getAllAdverts())
    }, [])

    return (
        <Container fluid className='bg-dark'>
            <Row className='m-0 justify-content-center p-2'>
                {
                    adverts.map(item => (
                        <CampaignsCard key={item.id} id={item.id} title={item.title} content={item.content} img={item.img} />
                    ))
                }

            </Row>
        </Container>
    )
}

export default Campaigns