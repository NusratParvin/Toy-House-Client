import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import useTitle from '../../hook/useTitle';



const MyToys = () => {
    useTitle('My Toys')
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])


    useEffect(() => {
        try {
            fetch(`http://localhost:5000/myToys?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyToys(data)
                })
        }
        catch {
            err => console.log(err)
        }
    }, [user])



    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    fetch(`http://localhost:5000/allCars/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                                const remaining = myToys.filter(toy => toy._id !== id)
                                setMyToys(remaining)
                            }
                        })

                }
                catch {
                    err => console.log(err)
                }
            }

        })}

        const handleSort=(e)=>{
            
            const order = e.target.value;
            console.log(order);

            try {
                fetch(`http://localhost:5000/myToys?email=${user.email}&order=${order}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setMyToys(data)
                    })
            }
            catch {
                err => console.log(err)
            }
        }

    return (
            <div className=' bg-teal-50 pb-24'>

                <h1 className='text-2xl font-bold text-zinc-700 text-center py-6 uppercase'>My Toys</h1>
                <div className='pt-0 pb-4 ml-auto mr-32 flex md:justify-end justify-center gap-2 '>
                {/* <input
                    className='w-56 text-sm py-4 px-2 text-zinc-700 bg-gray-300' type="search" placeholder='Search by name ' />
                <button  className='btn btn-accent btn-sm px-6 rounded-none text-zinc-700 hover:text-white'>Search</button> */}
                <p className='font-semibold text-sm'>Sort By Price</p>
                <select className='text-xs py-1 px-2 '  onChange={handleSort} >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
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


                                        {myToys?.map((singleToyData, index) => (
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

                                                        <div class="w-4 mr-2 transform hover:text-orange-500 hover:scale-110">
                                                            <NavLink to={`/updateToy/${singleToyData._id}`}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                </svg>
                                                            </NavLink>







                                                        </div>

                                                        <div onClick={() => handleDelete(singleToyData._id)} class="w-4 mr-2 transform hover:text-orange-500 hover:scale-110">

                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>

                                                        </div>

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

    export default MyToys;