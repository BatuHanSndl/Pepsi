import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../redux/productSlice'
import SliderCard from '../components/SliderCard';
import { Container } from 'react-bootstrap'


function Main() {

    const products = useSelector(store => store.urunler.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])



    return (
        <Container fluid className='text-center p-0'>
            <SliderCard fcn={products} />

        </Container>
    )
}

export default Main