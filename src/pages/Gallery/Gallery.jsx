import img1 from '../../assets/22.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';

const Gallery = () => {
    return (
        <div>
            <div className="w-full mx-auto px-5 py-16 mb-10 lg:px-32 lg:pt-24">
               <h1 className='text-4xl text-zinc-600  tracking-tighter py-4 mb-6 text-center font-bold'>What We Have In Stock</h1>
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-1/2 p-1 md:p-1">
                            <img
                                className="block h-full w-full  object-cover object-center animate-pulse duration-900"
                                src={img1}/>
                        </div>
                        <div className="w-1/2 p-1 md:p-1">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img2}/>
                        </div>
                        <div className="w-full p-1 md:p-1">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img4} />
                        </div>
                    </div>
                    <div className="flex w-1/2 flex-wrap">
                        <div className="w-full p-1 md:p-1">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img3}/>
                        </div>
                        <div className="w-1/2 p-1 md:p-1">
                            <img
                                className="block h-full w-full object-cover object-center"
                                src={img5} />
                        </div>
                        <div className="w-1/2 p-1 md:p-1">
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