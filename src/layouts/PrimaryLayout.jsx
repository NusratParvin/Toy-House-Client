import React from 'react';
import Header from '../pages/SharedSections/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedSections/Footer/Footer';
import ShopByCategory from '../pages/ShopByCategory/ShopByCategory';

const PrimaryLayout = () => {
    return (
        <div >
            <Header></Header>
            <ShopByCategory></ShopByCategory>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PrimaryLayout;