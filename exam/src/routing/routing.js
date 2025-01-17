import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'


import Category from '../pages/category'
import ProductList from '../pages/productlist'
import ProductDetails from '../pages/productdetails'
const Routing = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Category />}></Route>
                    <Route path='/products/:category' element={<ProductList/>}></Route>
                    <Route path='/products/:category/details/:id'  element={<ProductDetails />}></Route>
                </Routes>
            </Router>
        </div>
    )
}
// hello

export default Routing