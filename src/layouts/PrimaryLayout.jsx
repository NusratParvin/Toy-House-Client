import React from 'react';
import Header from '../pages/SharedSections/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedSections/Footer/Footer';
import ShopByCategory from '../pages/ShopByCategory/ShopByCategory';
import Navbar from '../pages/Navbar/Navbar';

const PrimaryLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PrimaryLayout;