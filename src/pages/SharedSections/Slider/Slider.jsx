
import slide2 from '../../../assets/gabriel-vasiliu-qHvYb5xlQVY-unsplash.jpg'
import slide4 from '../../../assets/close-up-toy-car-with-easter-eggs.jpg'
import slide3 from '../../../assets/child-having-fun-during-playtime.jpg'
import slide1 from '../../../assets/closeup-shot-small-toy-car-wooden-train-track.jpg'
import React from 'react';


const Slider = () => {


    return (
        <>
            <div style={{ height: '460px', width: '90%' }} className="carousel mb-16 mt-0 -z-50 mx-auto slider" >

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full object-cover relative opacity-95" data-aos="zoom-in"
                        data-aos-delay="150"
                        data-aos-easing="ease-in-sine" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide4} className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent ">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❯</a>
                    </div>
                </div>

            </div>


        </>


    );
};

export default Slider;