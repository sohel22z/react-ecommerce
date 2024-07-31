import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/homePage'));

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;