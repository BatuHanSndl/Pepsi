import React from 'react'
import { Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'



function ProductCard({ id, img }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product-details/${id}`);
    };

    return (

        <Col xs='12' sm='6' md='4' lg='3' xl xxl className='p-0 mb-4 mt-2 mb-lg-0 mt-lg-0'>
            <Image id='productImg' onClick={() => handleClick()} src={img} alt='pepsi' width={230} height={370} />
        </Col>

    )
}

export default ProductCard