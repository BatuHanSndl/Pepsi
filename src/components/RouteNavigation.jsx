import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import Campaigns from '../pages/Campaigns'
import NotFoundPage from '../pages/NotFoundPage'
import ProductDetails from './ProductDetails'
import CampaignDetails from './CampaignDetails'


function RouteNavigation() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/campaigns' element={<Campaigns />} />
            <Route path='/campaign-details/:id' element={<CampaignDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default RouteNavigation