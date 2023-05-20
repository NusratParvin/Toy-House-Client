import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toyDetails = useLoaderData()
    console.log(toyDetails);
    return (
        <div>

            <section class="pt-4 pb-12 overflow-hidden bg-white ">
                <div class="max-w-4xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full px-4 md:w-1/2 ">
                            <div class="sticky top-10 z-50 overflow-hidden ">
                                <div class=" h-96 relative mb-6 lg:mb-10 " >
                                    <img src={toyDetails.picture_url}
                                        alt="" class="object-contain w-full h-full " />
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 ">
                            <div class="lg:pl-20">
                                <div class="pb-6 ">
                                    <span class="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                                    <h2 class="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                                        {toyDetails.name}
                                    </h2>
                                    <p class="max-w-md  text-gray-700">
                                        {toyDetails.description}
                                    </p>

                                    <p class="text-xl font-semibold text-gray-700 pt-8">
                                        Price : ${toyDetails.price}
                                    </p>
                                    <p class=" text-xl font-semibold text-orange-700 dark:text-gray-400 ">
                                        Available Stock : {toyDetails.quantity}
                                    </p>
                                </div>
                                <p className='text-xl pb-2'>Rating : {toyDetails.rating}</p>
                                <p className='text-md pb-2'>Seller Name : {toyDetails.seller_name}</p>
                                <p className='text-md pb-2'>Seller Email : {toyDetails.seller_email}</p>

                                <div class="flex flex-wrap items-center pt-6">

                                    <div class="mb-4 mr-4 lg:mb-0">
                                        <button
                                            class="w-full h-10 p-2 mr-4 bg-teal-500  text-gray-50 hover:bg-teal-600">
                                            Buy Now</button>
                                    </div>
                                    <div class="mb-4 mr-4 lg:mb-0">
                                        <button
                                            class="flex items-center justify-center w-full h-10 p-2 text-zinc-700 border border-zinc-300 lg:w-11 hover:text-white  hover:bg-teal-600 hover:border-cyan-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="bi bi-cart" viewBox="0 0 16 16">
                                                <path
                                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="mb-4 lg:mb-0">
                                        <button
                                            class="flex items-center justify-center w-full h-10 p-2 text-zinc-700 border border-zinc-300 lg:w-11 hover:text-white  hover:bg-teal-600 hover:border-cyan-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class=" bi bi-heart" viewBox="0 0 16 16">
                                                <path
                                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default ToyDetails;