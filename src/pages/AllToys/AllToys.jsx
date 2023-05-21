import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../hook/useTitle';


const AllToys = () => {
    useTitle('All Toys')
    const [allToyData, setAllToyData] = useState([])
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/'


    useEffect(() => {

        try {
            fetch('http://localhost:5000/allCars')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
                    setAllToyData(data)
                })
        }
        catch {
            err => { console.log(err); }
        }

    }, [])

    const handleSearch = () => {
        console.log(searchText);
        console.log(user);
        try {
            fetch(`http://localhost:5000/cars/${searchText}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success('Search Complete !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    setAllToyData(data)
                })
        }
        catch {
            err => { console.log(err); }
        }
    }


    const handleView = (id) => {
        navigate(`/toyDetails/${id}`)
    }


    return (
        <div className=' bg-teal-50 pb-24'>
            <div className='pt-8 pb-4 ml-auto mr-32 flex md:justify-end justify-center gap-2'>
                <input onChange={(event) => setSearchText(event.target.value)}
                    className='w-56 text-sm py-4 px-2 text-zinc-700 bg-gray-300' type="search" placeholder='Search by name ' />
                <button onClick={handleSearch} className='btn btn-accent btn-sm px-6 rounded-none text-zinc-700 hover:text-white'>Search</button>
            </div>

            <div class="overflow-x-auto mt-0 pt-0">

                <div class="min-w-screen flex items-center justify-center overflow-hidden">
                    <div class="w-full lg:w-5/6">
                        <div class="bg-white shadow-md rounded my-">
                            <table class="min-w-max w-full table-auto">
                                <thead>
                                    <tr class="bg-orange-100 text-teal-600 uppercase text-sm leading-normal">
                                        <th class="py-3 px-6 text-left">NAME</th>
                                        <th class="py-3 px-6 text-left">Category</th>
                                        <th class="py-3 px-6 text-center">Price</th>
                                        <th class="py-3 px-6 text-center">Rating</th>
                                        <th class="py-3 px-6 text-center">Seller Name</th>
                                        <th class="py-3 px-6 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light">


                                    {allToyData?.map((singleToyData, index) => (
                                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="mr-2 font-bold">
                                                        {index + 1}.
                                                    </div>
                                                    <span class="font-medium">{singleToyData.name}</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-left">

                                                <span>{singleToyData.category}</span>

                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <p>$ {singleToyData.price}</p>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <span class="bg-orange-100 text-teal-800 py-1 px-3 rounded-full text-xs font-semibold">{singleToyData.rating}</span>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <p>{singleToyData.seller_name}</p>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <div class="flex item-center justify-center">
                                                    <div onClick={() => handleView(singleToyData._id)} class="w-4 mr-2 transform hover:text-orange-500 hover:scale-110">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </div>
                                                    {/* <div class="w-4 mr-2 transform hover:text-orange-500 hover:scale-110">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg>
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-orange-500 hover:scale-110">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                    </div> */}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllToys;