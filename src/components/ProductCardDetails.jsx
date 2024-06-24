import React from 'react'
import { Row, Col } from 'react-bootstrap'

function ProductCardDetails({ energy, oil, saturatedFat, carbohydrate, sugar, elevator, protein, salt }) {
    return (
        <>
            <Row className='text-center m-0 p-2'>
                <Col>
                    <div className='border border-4 rounded-4 h-100 p-3'>
                        <p className='m-0'>Enerji</p>
                        <hr className='mt-2 mb-2' />
                        <p className='m-0'>{energy}</p>
                    </div>
                </Col>
                <Col>
                    <div className='border border-4 rounded-4 h-100 p-3'>
                        <p className='m-0'>Yağ</p>
                        <hr className='mt-2 mb-2' />
                        <p className='m-0'>{oil}</p>
                    </div>
                </Col>
                <Col>
                    <div className='border border-4 rounded-4 h-100 p-3'>
                        <p className='m-0'>Doymuş Yağ</p>
                        <hr className='mt-2 mb-2' />
                        <p className='m-0'>{saturatedFat}</p>
                    </div>
                </Col>
            </Row>

            <Row className='text-center m-0 p-2'>
                <Col>
                    <div className='border border-4 rounded-4 h-100 p-3'>
                        <p className='m-0'>Karbonhidrat</p>
                        <hr className='mt-2 mb-2' />
                        <p className='m-0'>{carbohydrate}</p>
                    </div>
                </Col>
                <Col>
                    <div className='border border-4 rounded-4 h-100 p-3'>
                        <p className='m-0'>Şeker</p>
                        <hr className='mt-2 mb-2' />
                        <p className='m-0'>{sugar}</p>
                    </div>
                </Col>
                <Col>
                    <div className='border border-4 rounded-4 h-100 p-3'>
                        <p className='m-0'>Lif</p>
                        <hr className='mt-2 mb-2' />
                        <p className='m-0'>{elevator}</p>
                    </div>
                </Col>
            </Row>

            <Row className='text-center m-0 p-2'>
                <Col>
                    <div className='border border-4 rounded-4 h-100 p-3'>
                        <p className='m-0'>Protein</p>
                        <hr className='mt-2 mb-2' />
                        <p className='m-0'>{protein}</p>
                    </div>
                </Col>
                <Col>
                    <div className='border border-4 rounded-4 h-100 p-3'>
                        <p className='m-0'>Tuz</p>
                        <hr className='mt-2 mb-2' />
                        <p className='m-0'>{salt}</p>
                    </div>
                </Col>
            </Row>

        </>

    )
}

export default ProductCardDetails