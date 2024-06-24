import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ProductCardDetails from './ProductCardDetails';

function ProductDetails() {

    const { id } = useParams();

    const products = useSelector(store => store.urunler.products);

    return (
        <Container fluid className='bg-dark justify-content-center align-items-center d-flex flex-column' style={{ minHeight: '890px' }}>
            <Row className='h-100 p-2 m-0 text-white'>
                <Col sm='12' md='8' lg='8' xl='8' xxl className='text-center text-xl-center text-xxl-start order-1 order-xxl-first p-3 justify-content-center d-flex flex-column'>
                    <h1 className='mx-xxl-4'>ENERJİ VE<br />BESİN ÖĞELERİ</h1>
                    <p className='mx-xxl-4'>100ml için</p>
                    {
                        products.map(item => {
                            if (item.id == id) {
                                return <ProductCardDetails key={item.id} energy={item.energy} oil={item.oil} saturatedFat={item.saturatedFat} carbohydrate={item.carbohydrate} sugar={item.sugar} elevator={item.elevator} protein={item.protein} salt={item.salt} />
                            }
                        })
                    }

                </Col>

                <Col sm md='4' lg='4' xl='4' xxl='3' className='order-0 justify-content-center align-items-center d-flex p-0'>
                    {
                        products.map(item => {
                            if (item.id == id) {
                                return <Image key={item.key} src={item.product_img} alt='pepsi' width={380} height={650} />
                            }
                        })
                    }
                </Col>


                <Col sm md lg xl xxl className='text-center text-xl-center text-xxl-start order-2 justify-content-center d-flex flex-column p-3'>
                    {
                        products.map(item => {
                            if (item.id == id) {
                                return <p key={item.id}>{item.descreption}</p>
                            }
                        })
                    }
                    <h2 className='text-uppercase'>içindekiler</h2>
                    {
                        products.map(item => {
                            if (item.id == id) {
                                return <p key={item.id}>{item.contents}</p>
                            }
                        })
                    }
                    <p>*KULLANILAN ŞEKER VEYA FRUKTOZ-GLUKOZ ŞURUBU PAKET ÜZERİNDE KODLANMIŞTIR.</p>
                </Col>
            </Row>
        </Container >
    )
}

export default ProductDetails