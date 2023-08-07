
import slide2 from '../../../assets/gabriel-vasiliu-qHvYb5xlQVY-unsplash.jpg'
import slide4 from '../../../assets/close-up-toy-car-with-easter-eggs.jpg'
import slide3 from '../../../assets/child-having-fun-during-playtime.jpg'
import slide1 from '../../../assets/closeup-shot-small-toy-car-wooden-train-track.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";


const Slider = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div style={{ height: '600px', width: '100%' }} className="carousel mb-0 mt-0  mx-auto slider" >

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full object-cover object-center relative opacity-70" data-aos="fade-left"
                        data-aos-delay="550"
                        data-aos-easing="ease-in-sine" />
                    <div className=' absolute top-60 left-1/4 text-white z-50 w-1/2' >
                        <p className=' text-center pb-6 font-bold text-3xl md:text-6xl' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">Pick the best toy</p>
                        <p className=' text-lg md:text-xl text-center' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">We offer premium products, whether you are shopping at one of our actual stores or via our website! </p>
                        <div className=' text-center pt-8'>
                            <button className="  bg-teal-500 hover:bg-teal-700 text-white font-thin text-xl py-4 px-8 rounded-full" data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="2000">
                                Discover Now
                            </button>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full object-cover" />
                    <div className=' absolute top-60 left-1/4 text-white z-50 w-1/2' >
                        <p className=' text-center pb-6 font-bold text-3xl md:text-6xl' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">Pick the best toy</p>
                        <p className=' text-lg md:text-xl text-center' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">We offer premium products, whether you are shopping at one of our actual stores or via our website! </p>
                        <div className=' text-center pt-8'>
                            <button className="  bg-teal-500 hover:bg-teal-700 text-white font-thin text-xl py-4 px-8 rounded-full" data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="2000">
                                Discover Now
                            </button>
                        </div>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-transparent text-5xl border-none hover:text-teal-600 hover:bg-transparent">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full object-cover" />
                    <div className=' absolute top-60 left-1/4 text-white z-50 w-1/2' >
                        <p className=' text-center pb-6 font-bold text-3xl md:text-6xl' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">Pick the best toy</p>
                        <p className=' text-lg md:text-xl text-center' data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">We offer premium products, whether you are shopping at one of our actual stores or via our website! </p>
                        <div className=' text-center pt-8'>
                            <button className="  bg-teal-500 hover:bg-teal-700 text-white font-thin text-xl py-4 px-8 rounded-full" data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="2000">
                                Discover Now
                            </button>
                        </div>

                    </div>
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