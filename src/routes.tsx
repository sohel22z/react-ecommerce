import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/homePage'));
const ProductPage = lazy(() => import('./pages/productPage'));
const CartPage = lazy(() => import('./pages/cartPage'));

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/product-details' element={<ProductPage/>} />
                <Route path='/cart' element={<CartPage/>} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;