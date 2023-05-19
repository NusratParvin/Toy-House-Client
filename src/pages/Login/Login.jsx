import React from 'react';
import './Login.css'
import { FaEye, FaGoogle, FaKey, FaUserCircle } from 'react-icons/fa';
import { Form, NavLink } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const handleLogin = () => {

    }
    return (

        <div class="page py-16">
            <div class="container ">
                <div className="left py-6 bg-orange-100 ">
                    <div className="login top-20 text-2xl text-center font-semibold uppercase tracking-tight text-gray-600">Welcome back</div>
                    <div class="eula">

                        <div class=" px-6 pt-3 pb-7">
                            <div class="text-center mb-4">
                                <h6 class="text-gray-700 text-sm uppercase font-semibold">
                                    Sign in with
                                </h6>
                            </div>
                            <div class=" flex flex-row btn-wrapper text-center justify-center">
                                <button class="bg-white hover:bg-orange-300
                                    hover:text-white text-gray-600  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                    <BsGithub className=' text-lg me-2'
                                    ></BsGithub>

                                    Github</button>
                                <button class=" bg-white hover:bg-orange-300 hover:text-white text-gray-600  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow   hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                    <FcGoogle className=' text-lg me-2'></FcGoogle>
                                    Google </button>

                            </div>
                        </div>


                    </div>
                </div>

                <div className=" right  flex  flex-col min-w-0 w-full mb-6 shadow-lg border-0">

                    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div class="text-teal-800 text-center mt-9 uppercase mb-3 tracking-tight text-sm  font-bold">
                            Or sign in with credentials
                        </div> <hr />
                        <form onSubmit={handleLogin}>
                            <div class="relative w-full mb-3">
                                <label class="block uppercase  text-teal-900 tracking-tight text-xs font-bold mb-2" for="grid-password">Email</label><input type="email" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Your Email " />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-teal-900 tracking-tight text-xs font-bold mb-2" for="grid-password">Password</label>
                                <input type="password" className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Your Password" />
                            </div>
                            <div>

                            </div>
                            <div class="text-center mt-8">
                                <button class=" bg-slate-200 text-teal-800 hover:text-white
                                    hover:bg-teal-600 text-sm font-bold uppercase px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-250" type="button"> Sign In </button>
                            </div>



                        </form>

                        <div className="mx-0 my-3 flex justify-between text-sm  text-teal-900 font-semibold">
                            <div><h1>New to this Site?</h1></div>
                            <NavLink to='/register'>
                                <h1 className="underline underline-offset-3 hover:text-orange-700">Register Here</h1>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>

    );
};

export default Login;