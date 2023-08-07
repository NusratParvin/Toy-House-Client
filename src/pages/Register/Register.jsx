import React, { useContext, useState } from 'react';
import img from '../../assets/8603-profile.gif'
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import useTitle from '../../hook/useTitle';

const Register = () => {
    useTitle('Register')
    const { createNewUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const [errorMessage,setErrorMessage]=useState('')
    const [successMessage, setSuccessMessage] = useState('')


    const updateUserData = (user, name,photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL:photo
        })
            .then(() => {
                console.log(user.displayName,user.photoURL,'uset inof set')
            })
            .catch(error => {
                console.log(error.message,'update error');
            })
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setErrorMessage('')
        setSuccessMessage('')

        if (password.length < 6) {
            setErrorMessage('Your password must be 6 characters long');
            return
        }

        createNewUser(email, password)
            .then(result => {
                const createdNewUser = result.user;
                console.log(createdNewUser,'createdNewUser');

                updateUserData(createdNewUser, name,photo)

                setSuccessMessage("Your registration is successful")
                setErrorMessage('')
                logOut()
                navigate('/login')
            })
            .catch(error => {           

                setErrorMessage(error)
            }) 
            console.log(errorMessage);
    }

    return (
        <div className='flex md:flex-row flex-col gap-4 md:w-2/3 w-full mx-auto items-center' >
            <div className="mt-4 mb-8 md:w-2/3 w-full">
                <div className="w-full mx-auto py-8">
                    <div className=" w-11/12 mx-auto rounded shadow">

                        <div className="mx-16 pt-8 pb-2 px-8 text-zinc-600 text-2xl text-center font-semibold border-b border-zinc-300 uppercase tracking-tight">join us now
                        </div>

                        <form onSubmit={handleRegister} className='mx-auto px-8'>
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
                                    

                                    {
                            errorMessage &&
                            <p className='text-red-600 pt-2'>{errorMessage}</p>
                           
                        }
                        {
                            successMessage &&
                            <p className='text-green-600 pt-2'>
                                {successMessage}</p>
                           
                        }

                                </div>
                                <div class="mb-4 mx-auto text-center">
                                    <button
                                        class="mb-2 md:mx-16 py-2 md:px-24 px-8 uppercase
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