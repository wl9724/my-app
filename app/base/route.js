import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from '../pages/base/index/index'
import Login from '../pages/base/login/login'
import NotFound from '../pages/base/notfound/notfound';

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
)
