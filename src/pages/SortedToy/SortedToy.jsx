import React from 'react';

const SortedToy = ({ singleCar }) => {
    const { name, picture_url, category, rating, price } = singleCar
    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl  ">
                <figure className='p-4 h-44'>
                    <img data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-easing="ease-in" src={picture_url} alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto text-lg" data-aos="fade-up"
                        data-aos-delay="50"
                        data-aos-easing="linear">{name}</h2>
                    <p  data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-sine">{category}</p>
                    <p  data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-easing="ease-in-sine">Price: $ {price}</p>
                    <p  data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-sine">Ratings: {rating}</p>
                    <div className="card-actions justify-center">
                        <button className="btn tracking-tighter w-1/2 my-3 bg-teal-600 border-none hover:bg-orange-500 ">View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SortedToy;