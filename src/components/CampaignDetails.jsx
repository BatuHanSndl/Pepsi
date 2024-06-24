import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CampaignCardDetails from './CampaignCardDetails';

function CampaignDetails() {

    const { id } = useParams();
    const adverts = useSelector(store => store.duyurular.adverts);

    return (
        <Container style={{ height: "890px" }}>
            {
                adverts.map(item => {
                    if (item.id == id) {
                        return <CampaignCardDetails key={item.id} img={item.img} title={item.title} date={item.date} details={item.details} />
                    }
                })
            }


        </Container>
    )
}

export default CampaignDetails