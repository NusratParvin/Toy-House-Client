import React from 'react';
import Slider from '../SharedSections/Slider/Slider';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitle from '../../hook/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;