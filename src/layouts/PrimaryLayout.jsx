import React from 'react';
import Header from '../pages/SharedSections/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedSections/Footer/Footer';

const PrimaryLayout = () => {
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default PrimaryLayout;