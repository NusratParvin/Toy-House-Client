import React from 'react';
import img from '../../assets/8603-profile.gif'
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex md:flex-row flex-col gap-4 w-2/3 mx-auto items-center' >
            <div className="mt-4 mb-8 w-2/3">
                <div className="w-full mx-auto py-8">
                    <div className=" w-11/12 mx-auto rounded shadow">

                        <div className="mx-16 pt-8 pb-2 px-8 text-zinc-600 text-2xl text-center font-semibold border-b border-zinc-300 uppercase tracking-tight">join us now
                        </div>

                        <form className='mx-auto px-8'>
                            <div className="pb-4  px-8">

                                <div className="mb-4">
                                    <label className="block text-zinc-700 tracking-tighter text-sm font-bold mb-2 uppercase">NAme</label>

                                    <input className
                                    =" border w-full 
                                     bg-purple-100 py-4 px-3 text-sm text-zinc-700" type="text"
                                    name="name" placeholder="Enter Your Name" required/>

                                </div>


                                <div class="mb-4">
                                    <label className="block text-zinc-700 tracking-tighter text-sm font-bold mb-2 uppercase">Photo Url</label>
                                   
                                    <input className
                                    =" border w-full 
                                     bg-purple-100 py-4 px-3 text-sm text-zinc-700" type="text"
                                    name="photo" placeholder="Enter Your Photo Url" />

                                </div>

                                <div class="mb-4 ">
                                    <label className="block text-zinc-700 tracking-tighter text-sm font-bold mb-2 uppercase ">Email Address</label>
                                    <input className
                                    =" border w-full 
                                     bg-purple-100 py-4 px-3 text-sm text-zinc-700" type="text"
                                        name="email" placeholder="Enter Your Email Address" required/>
                                    {/* <p id=error_creater_id></p> */}
                                </div>


                                <div class="mb-10">
                                    <label className="block text-zinc-700 tracking-tighter text-sm font-bold mb-2 uppercase">Password</label>
                                    <input className
                                    =" border w-full 
                                     bg-purple-100 py-4 px-3 text-sm text-zinc-700" type='password' required
                                        name="password"/>
                                    {/* <p id=error_intake_year></p> */}
                                </div>
                                <div class="mb-4 mx-auto">
                                    <button
                                        class="mb-2 mx-16  py-2 px-24 uppercase
                                        text-base font-semibold  text-zinc-100 
                                         bg-gradient-to-tr from-teal-700 to-teal-400

                                       ">
                                        Register
                                    </button>
                                </div>
                                <p className='text-sm font-semibold text-center mb-6'>Already have an Account?  
                                <span className='px-2 underline text-teal-800'>
                                    <NavLink to='/login'>Login here</NavLink> 
                                </span>
                                
                                </p>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
            {/* </div> */}
           
<div className='w-1/3'>
    <img className=' mx-auto w-48 text-teal-700 ' src={img} alt="" />
</div>

        </div>
        
    );
};

export default Register;