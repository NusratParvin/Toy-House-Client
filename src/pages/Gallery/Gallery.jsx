import img1 from '../../assets/22.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className="w-full mx-auto px-5 py-12 mb-10 lg:px-32 lg:pt-24">
                <h1 className='text-3xl text-zinc-600  tracking-tighter py-4 mb-6 text-center font-bold'>What We Have In Stock</h1>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-1" data-aos='fade-right'
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine">
                            <img
                                className="block h-full w-full  object-cover object-center"
                                src={img1} />
                        </div>
                        <div className="w-1/2 p-1 md:p-1" data-aos='fade-up' data-aos-offset="200"
                            data-aos-easing="ease">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img2} />
                        </div>
                        <div className="w-full p-1 md:p-1" data-aos="fade-right"
                            data-aos-offset="250"
                            data-aos-easing="ease-in-sine">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img4} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-1 " data-aos="fade-left"
                            data-aos-offset="350"
                            data-aos-easing="ease-in">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img3} />
                        </div>
                        <div className="w-1/2 p-1 md:p-1" data-aos="zoom-in-up"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img5} />
                        </div>
                        <div className="w-1/2 p-1 md:p-1" data-aos="fade-up-left"
                            data-aos-offset="100"
                            data-aos-easing="ease-in-sine">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img6} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;