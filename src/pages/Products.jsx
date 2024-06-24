
import { Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import { getAllProducts } from '../redux/productSlice'

function Products() {

    const products = useSelector(store => store.urunler.products);
    const fcn = useDispatch();

    useEffect(() => {
        fcn(getAllProducts());
    }, [])

    return (
        <Container fluid className='justify-content-center align-items-center d-flex bg-dark' style={{ minHeight: '890px' }}>
            <Row className='text-center h-100 justify-content-center align-items-center d-flex' >
                {
                    products.map(item => (
                        <ProductCard key={item.id} id={item.id} img={item.product_img} />
                    ))
                }
            </Row>
        </Container >
    )
}

export default Products