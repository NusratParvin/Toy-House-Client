import React, { useContext, useState } from 'react';
import './Login.css'
import { FaEye, FaGoogle, FaKey, FaUserCircle } from 'react-icons/fa';
import { Form, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn, setLoggedIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setErrorMessage('')
        setSuccessMessage('')


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setLoggedIn(true)
                setSuccessMessage("You are successfully logged in!")
                setErrorMessage('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setErrorMessage(error)

            })
        console.log(errorMessage);
    }

    const handleGoogleLogin = () => {
        setErrorMessage('')
        setSuccessMessage('')

        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setLoggedIn(true)
                setSuccessMessage("You are successfully logged in!")
                setErrorMessage('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
    }


    const handleGithubLogin = () => {
        setErrorMessage('')
        setSuccessMessage('')

        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setLoggedIn(true)
                setSuccessMessage("You are successfully logged in!")
                setErrorMessage('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setErrorMessage(error.message)
            })
    }
    return (

        <div className="page py-16">
            <div className="container ">
                <div className="left py-6 bg-orange-100 ">
                    <div className="login top-20 text-2xl text-center font-semibold uppercase tracking-tight text-gray-600">Welcome back</div>
                    <div className="eula">

                        <div className=" px-6 pt-3 pb-7">
                            <div className="text-center mb-4">
                                <h6 className="text-gray-700 text-sm uppercase font-semibold">
                                    Sign in with
                                </h6>
                            </div>
                            <div className=" flex flex-row btn-wrapper text-center justify-center">
                                <button onClick={handleGithubLogin} className="bg-white hover:bg-orange-300
                                    hover:text-white text-gray-600  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                    <BsGithub className=' text-lg me-2'
                                    ></BsGithub>

                                    Github</button>
                                <button onClick={handleGoogleLogin} className=" bg-white hover:bg-orange-300 hover:text-white text-gray-600  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow   hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                                    <FcGoogle className=' text-lg me-2'></FcGoogle>
                                    Google </button>

                            </div>
                        </div>


                    </div>
                </div>

                <div className=" right  flex  flex-col min-w-0 w-full mb-6 shadow-lg border-0">

                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-teal-800 text-center mt-9 uppercase mb-3 tracking-tight text-sm  font-bold">
                            Or sign in with credentials
                        </div> <hr />
                        
                        <form onSubmit={handleLogin}>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase  text-teal-900 tracking-tight text-xs font-bold mb-2" for="grid-password">Email</label>
                                <input type="email" name='email' className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Your Email " />
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-teal-900 tracking-tight text-xs font-bold mb-2" for="grid-password">Password</label>
                                <input type="password" name='password' className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Your Password" />
                            </div>
                            <div>

                            </div>

                            {
                            errorMessage &&
                            <p className='text-red-600 pt-2'>Email and Password does not match !</p>
                           
                        }
                        {
                            successMessage &&
                            <p className='text-green-700 pt-2'>
                                {successMessage}</p>
                           
                        }

                            <div className="text-center mt-8">
                                <button type='submit'  className=" bg-slate-200 text-teal-800 hover:text-white
                                    hover:bg-teal-600 text-sm font-bold uppercase px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-250"> Sign In </button>
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