import React from 'react';
import Slider from '../SharedSections/Slider/Slider';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitle from '../../hook/useTitle';
import Feautures from '../Extra/Feautures';
import NewsLetter from '../Extra/NewsLetter';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <ShopByCategory></ShopByCategory>
            
            <Feautures></Feautures>
            <Gallery></Gallery>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;