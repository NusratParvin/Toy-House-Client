import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../assets/1.jpg'
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';



const Footer = () => {
    return (
        <div >
            {/* <button onClick={() => toast("Wow so easy!")}>Notify!</button> */}

            <footer className=" border footer  text-black">


                <div className=' w-11/12 mx-auto flex md:justify-between justify-center md:flex-row flex-col px-16 items-center my-4 md:my-0'>
                    <div>
                        <Link to='/'>
                            <img src={logo} className=" py-3" width={150} />
                        </Link>

                    </div>


                    <div className="grid md:grid-flow-col grid-flow-row my-8 gap-8">
                        <NavLink to='/' className=" text-teal-600 font-semibold text-base tracking-wide hover:text-orange-500 ">About us</NavLink>
                        <NavLink to='/allToys' className=" text-teal-600 font-semibold text-base tracking-wide hover:text-orange-500 ">All Toys</NavLink>
                        <NavLink to='/login' className=" text-teal-600 font-semibold text-base tracking-wide hover:text-orange-500 ">Login</NavLink>
                        <NavLink to='/register' className=" text-teal-600 font-semibold text-base tracking-wide hover:text-orange-500 ">Register</NavLink>
                    </div>


                    <div className='pe-10'>
                        <span className="footer-title text-lg">Our Social Links</span>
                        <div className="grid grid-flow-col gap-6 pt-4">
                            <NavLink to='/'><BsTwitter className=' text-2xl text-teal-500 hover:text-orange-400'></BsTwitter> </NavLink>
                            <NavLink to='/'><BsYoutube className=' text-2xl text-teal-500 hover:text-orange-400'></BsYoutube></NavLink>
                            <NavLink to='/'><FaFacebookF className=' text-2xl text-teal-500 hover:text-orange-400'></FaFacebookF></NavLink>

                        </div>
                    </div>
                </div>
            </footer>


            <div className="footer items-center p-16 bg-teal-600 text-white">
                <p className=' mx-auto'>Copyright © 2023 - All right reserved</p>

            </div>
        </div>
    );
};

export default Footer;