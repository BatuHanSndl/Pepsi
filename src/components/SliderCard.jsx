import React, { lazy } from 'react'
import { Carousel, Image, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function SliderCard({ fcn }) {

    const getColor = (text) => {
        switch (text.toUpperCase()) {
            case "MANGO":
                return { color: "#FFBF34" };
            case "TWIST":
                return { color: "#B2E619" };
            case "MAX":
                return { color: "#FF0000" };
            case "RASPBERRY":
                return { color: "#E30B5D" };
            default:
                return {};
        }

    };

    const getBgColor = (text) => {
        switch (text.toUpperCase()) {
            case "MANGO":
                return { backgroundColor: "#80601d" };
            case "TWIST":
                return { backgroundColor: "#4e6117" };
            case "MAX":
                return { backgroundColor: "#0f0f0f" };
            case "RASPBERRY":
                return { backgroundColor: "#810c39" };
            default:
                return { backgroundColor: "#153db8" };
        }
    };


    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/product-details/${id}`);
    };


    return (
        <Carousel id='Slider'>
            {
                fcn.map(item => (
                    <Carousel.Item key={item.id}>
                        <Row className='h-100 m-0'>
                            <Col xs="12" sm="12" md="7" lg="7" xxl="8" className='p-0'>
                                <Image className='d-block w-100' src={item.productBg_img} alt='pepsi' height={890} />
                            </Col>
                            <Col xs sm md lg xxl className='p-0' style={getBgColor(item.title)}>
                                <Row className='h-100 m-0 justify-content-center align-items-center'>
                                    <div className='resim text-uppercase'>
                                        <h1 className='text-white mt-5 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>{item.brand}</h1>
                                        <h1 style={getColor(item.title)}>{item.title}</h1>
                                        <Image id='sliderProductImg' onClick={() => handleClick(item.id)} className='mb-5 mb-sm-0 mb-md-0 mb-lg-0 mb-xl-0 mb-xxl-0' src={item.product_img} alt='pepsi' height={350} />
                                    </div>
                                </Row>
                            </Col>
                        </Row>

                    </Carousel.Item>
                ))
            }
        </Carousel >
    );
};

export default SliderCard