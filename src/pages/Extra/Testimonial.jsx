import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <div className=" mt-20 max-w-xl text-center mx-auto mb-16  ">
                <h2 className="font-bold mb-4 text-5xl tracking-tighter">What Our Customers Say !</h2>
            </div>
            <section className="relative py-4 md:py-24 lg:pb-28 bg-teal-100 overflow-hidden ">
                <div className="absolute top-0 left-0  md:w-96 h-full"
                    style={{ background: ' linear-gradient(90deg, #F3F7FA 10.94%, rgba(243, 247, 250, 0) 100%)' }}
                ></div>
                <div className="absolute top-0 right-0  md:w-96 h-full transform rotate-180" style={{ background: " linear-gradient(90deg, #F3F7FA 10.94%, rgba(243, 247, 250, 0) 100%)" }}></div>
                <div className="container md:px-4 mx-auto">
                
                    <div className="max-w-4xl mx-auto">
                        <div className="flex md:flex-nowrap flex-wrap justify-center md:-m-3 mb-3">
                            <div className="flex-shrink-0 w-10/12 md:w-96 md:p-3 ">
                                <div className="p-6 bg-white hover:bg-opacity-80 border border-gray-200 hover:border-gray-300 rounded-xl transition duration-200">
                                    <div className="flex flex-wrap justify-between -m-2 mb-6 ">
                                        <div className="w-auto p-2 ">
                                            <div className="flex flex-wrap items-center -m-1.5">
                                                <div className="w-auto p-1.5">
                                                    <img src="basko-assets/images/testimonials/avatar.png" alt="" />
                                                </div>
                                                <div className="w-auto p-1.5">
                                                    <h3 className="font-semibold tracking-tight">Margie Sutton</h3>
                                                    <span className="text-sm tracking-tight">@andysm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z" fill="#3EAEFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p>
                                        <span>&ldquo;</span>
                                        <span className="text-indigo-500">@Basko </span>
                                        <span> happy to recieve on time</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex-shrink-0 w-10/12  md:w-96 md:p-3 ">
                                <div className="p-6 bg-white hover:bg-opacity-80 border border-gray-200 hover:border-gray-300 rounded-xl transition duration-200">
                                    <div className="flex flex-wrap justify-between -m-2 mb-6 ">
                                        <div className="w-auto p-2 ">
                                            <div className="flex flex-wrap items-center -m-1.5">
                                                <div className="w-auto p-1.5">
                                                    <img src="basko-assets/images/testimonials/avatar.png" alt="" />
                                                </div>
                                                <div className="w-auto p-1.5">
                                                    <h3 className="font-semibold tracking-tight">Margie Sutton</h3>
                                                    <span className="text-sm tracking-tight">@andysm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z" fill="#3EAEFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p>
                                        <span>&ldquo;</span>
                                        <span className="text-indigo-500">@Basko </span>
                                        <span> WellPackaged and fast delivered</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-10/12  md:w-96 md:p-3 ">
                                <div className="p-6 bg-white hover:bg-opacity-80 border border-gray-200 hover:border-gray-300 rounded-xl transition duration-200">
                                    <div className="flex flex-wrap justify-between -m-2 mb-6 ">
                                        <div className="w-auto p-2 ">
                                            <div className="flex flex-wrap items-center -m-1.5">
                                                <div className="w-auto p-1.5">
                                                    <img src="basko-assets/images/testimonials/avatar.png" alt="" />
                                                </div>
                                                <div className="w-auto p-1.5">
                                                    <h3 className="font-semibold tracking-tight">Margie Sutton</h3>
                                                    <span className="text-sm tracking-tight">@andysm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z" fill="#3EAEFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p>
                                        <span>&ldquo;</span>
                                        <span className="text-indigo-500">@Basko </span>
                                        <span> Recommended highly for good quality toys</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-10/12  md:w-96 md:p-3 ">
                                <div className="p-6 bg-white hover:bg-opacity-80 border border-gray-200 hover:border-gray-300 rounded-xl transition duration-200">
                                    <div className="flex flex-wrap justify-between -m-2 mb-6 ">
                                        <div className="w-auto p-2 ">
                                            <div className="flex flex-wrap items-center -m-1.5">
                                                <div className="w-auto p-1.5">
                                                    {/* <img src="basko-assets/images/testimonials/avatar.png" alt="" /> */}
                                                </div>
                                                <div className="w-auto p-1.5">
                                                    <h3 className="font-semibold tracking-tight">Margie Sutton</h3>
                                                    <span className="text-sm tracking-tight">@andysm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z" fill="#3EAEFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p>
                                        <span>&ldquo;</span>
                                        <span className="text-indigo-500">@Basko </span>
                                        <span> Product quality is satisfying</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-10/12  md:w-96 md:p-3 ">
                                <div className="p-6 bg-white hover:bg-opacity-80 border border-gray-200 hover:border-gray-300 rounded-xl transition duration-200">
                                    <div className="flex flex-wrap justify-between -m-2 mb-6 ">
                                        <div className="w-auto p-2 ">
                                            <div className="flex flex-wrap items-center -m-1.5">
                                                <div className="w-auto p-1.5">
                                                    <img src="basko-assets/images/testimonials/avatar.png" alt="" />
                                                </div>
                                                <div className="w-auto p-1.5">
                                                    <h3 className="font-semibold tracking-tight">Margie Sutton</h3>
                                                    <span className="text-sm tracking-tight">@andysm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z" fill="#3EAEFF"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p>
                                        <span>&ldquo;</span>
                                        <span className="text-indigo-500">@Basko </span>
                                        <span> recommen</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;