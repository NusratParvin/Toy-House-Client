import React, { useContext } from 'react';
// import cloud from '../../../assets/pattern.png'
import logo from '../../assets/1.jpg'
import { NavLink } from 'react-router-dom';
import { BsArrowDown } from 'react-icons/bs';
import { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const { user, logOut, loggedIn, setLoggedIn } = useContext(AuthContext);


    if (user) {
        setLoggedIn(true)
        console.log(user, loggedIn);
    }


    const handleLogOut = () => {
        logOut()
            .then(() => {
                setLoggedIn(false)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };



    return (
        <div>
            <div className=' z-50 bg-white'>

                <div className='h-4 bg-teal-500 '></div>
                <div className=' pt-1 md:my-3 px-12 w-11/12 mx-auto'>
                    <div className="navbar h-24 flex md:flex-row flex-col justify-between gap-6">

                        <NavLink to='/'><img src={logo} className=" w-56 py-1" /></NavLink>


                        <div className="navbar w-full mt-8 md:mt-0 ">
                            <nav className=" mx-auto w-10/12 flex md:flex-row flex-col md:justify-evenly justify-center">
                                <NavLink
                                    to="/"
                                    className="text-teal-600 font-semibold text-lg mx-2 hover:text-black-300 relative border-teal-600 hover:text-orange-500 hover:border-dashed hover:border-y-2 px-3 py-1 hover:duration-200  "
                                    activeClassName="border-y-2 border-teal-600 "
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/allToys"
                                    className="text-teal-600 text-center font-semibold text-lg mx-2 hover:text-black-300 relative border-teal-600 hover:text-orange-500 hover:border-dashed hover:border-y-2 px-3 py-1 hover:duration-200 "
                                    activeClassName="font-bold border-y-2 border-teal-600 "
                                >
                                    All Toys
                                </NavLink>
                                <NavLink  to="/"
                                    className="bg-white text-teal-600 text-lg font-semibold  mx-2 hover:text-black-300 relative border-teal-600 hover:text-orange-500 hover:border-dashed hover:border-y-2 px-3 py-1 hover:duration-200 flex items-center justify-center"
                                    activeClassName="font-bold border-y-2 border-teal-600 text-orange-500"
                                    onMouseEnter={toggleSubmenu}
                                    onMouseLeave={toggleSubmenu}
                                >
                                    My Toys
                                    <BsArrowDown className='ms-1'></BsArrowDown>
                                    {submenuOpen && (
                                        <div className="bg-teal-50 w-full z-40 absolute md:pt-3 top-full  left-0 text-teal-600 py-2 text-center md:px-1  ">
                                            <NavLink
                                                to="/myToys"
                                                className="block text-sm border-teal-600 hover:text-orange-500 hover:border-dashed hover:border-y-2 mx-0 px-4 py-1 hover:duration-200 mb-2"
                                                activeClassName="font-bold"
                                            >
                                                My Toys
                                            </NavLink>
                                            <NavLink
                                                to="/addNew"
                                                className=" block text-sm border-teal-600 hover:text-orange-500 hover:border-dashed hover:border-y-2 mx-0 py-1 px-4 hover:duration-200"
                                                activeClassName="font-bold"
                                            >
                                                Add New
                                            </NavLink>
                                        </div>
                                    )}
                                </NavLink>
                                <NavLink
                                    to="/blog"
                                    className="text-teal-600 font-semibold text-lg mx-2 hover:text-black-300 relative border-teal-600 hover:text-orange-500 hover:border-dashed hover:border-y-2 px-3 py-1 hover:duration-200 "
                                    activeClassName="font-bold border-t-2 border-y-2 border-teal-600 "
                                >
                                    Blog
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="text-teal-600 font-semibold text-lg mx-2 hover:text-black-300 relative border-teal-600 hover:text-orange-500 hover:border-dashed hover:border-y-2 px-3 py-1 hover:duration-200 "
                                    activeClassName="font-bold border-t-2 border-y-2 border-teal-600 "
                                >
                                    About Us
                                </NavLink>
                            </nav>
                        </div>


                        <div className=" mt-12 md:mt-0">
                            <div className="flex items-center">
                                <div className="dropdown dropdown-end ">
                                    <NavLink to='/register' className="btn btn-outline btn-xs border-none underline rounded-none hover:bg-white my-3 mx-2 me-4">
                                        <div className="indicator text-teal-600 text-sm  uppercase tracking-tighter hover:text-orange-500 ">
                                            New here ?
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle border-4 avatar">
                                        <div className="w-10 rounded-full  transition duration-150 ease-in-out ">
                                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" data-te-toggle="tooltip"
                                    title={user?.displayName} src={user?.photoURL} /> */}

                                            {user && (
                                                user?.photoURL ?

                                                    <img data-te-toggle="tooltip" title={user?.displayName} src={user?.photoURL} />

                                                    :
                                                    <FaUserCircle data-te-toggle="tooltip" title={user?.displayName} style={{ fontSize: '2.5rem' }}></FaUserCircle>)

                                            }

                                        </div>




                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact bg-white dropdown-content mt-1 p-2 shadow text-teal-600 font-semibold w-52">
                                        {/* <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li> */}
                                        {/* <li><a>Settings</a></li> */}
                                        <button onClick={handleLogOut}><a>Logout</a></button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-2 bg-teal-500 '></div>

            </div>
        </div>
    );
};

export default Navbar;