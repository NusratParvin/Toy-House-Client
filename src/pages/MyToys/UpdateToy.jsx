import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateToy = () => {
    const id = useParams()
    const { user } = useContext(AuthContext)
    // console.log(id.id);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [dataToUpdate, setDataToUpdate] = useState([])
    useEffect(() => {
        try {
            fetch(`http://localhost:5000/carDetails/${id.id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setDataToUpdate(data)
                })
        }
        catch {
            err => console.log(err)
        }
    }, [])

    const onSubmit = data => { console.log(data);
        try {
            fetch(`http://localhost:5000/updateToy/${id.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.modifiedCount > 0) {
                        toast.success('Successfully added new car !', {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }
                    console.log(result);
                });

        }
        catch {
            err => {
                console.log(err);
            }
        }
    }


    return (


        <div className='text-black w-1/2 mx-auto mt-6 border p-6'>
            <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-0 ">
                
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                        
                        <label class="block uppercase   mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            Toy Name
                        </label>
                        <input class="appearance-none block w-full text-sm bg-gray-200 text-gray-700 py-3 px-4 mb-1 leading-tight " type="text" placeholder="Name of the toy" defaultValue={dataToUpdate.name} {...register("name", { required: true })} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase    mt-0 pt-0 text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
                            Sub-Category
                        </label>
                        {/* <input class="appearance-none block w-full bg-gray-200 text-gray-700  py-3 px-4 leading-tight " type="text" placeholder="Category" {...register("category")}/> */}
                        <select className="text-input appearance-none block w-full bg-gray-200 text-gray-700  py-1 px-4 leading-tight" defaultValue={dataToUpdate.category} {...register("category", { required: true })}>
                            <option value="Sports Car">Sports Car</option>
                            <option value="Fire Truck">Fire Truck</option>
                            <option value="Regular Car">Regular Car</option>
                        </select>
                    </div>
                </div>
                
                <div class="flex flex-wrap -mx-3 mb-0 ">
                    <div class="w-full px-3 ">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mt-3 mb-1" >
                            Id
                        </label>
                        <input class="appearance-none block w-full bg-gray-100 text-sm text-gray-500 py-3 px-4 mb-1 leading-tight " disabled type='text'
                         defaultValue={dataToUpdate._id} {...register("_id")} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-0 ">
                    <div class="w-full px-3 ">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mt-3 mb-1" >
                            Photo URL
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 py-3 px-4 mb-1 leading-tight " type='text'
                            placeholder="Photo url of toy" defaultValue={dataToUpdate.picture_url} {...register("picture_url")} />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-0 mt-3 ">
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            Seller Name
                        </label>
                        <input class="appearance-none block w-full text-sm bg-gray-200 text-gray-700 py-3 px-4 mb-1 leading-tight " disabled
                            type="text" defaultValue={dataToUpdate.seller_name} {...register("seller_name")} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase    mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            SEller Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 text-sm py-3 px-4 leading-tight " type="email" disabled
                            defaultValue={dataToUpdate.seller_email} {...register("seller_email")} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-0 ">
                    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mb-1 mt-3">
                            Price
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 py-3 px-4 text-sm" type="number" placeholder="Price" defaultValue={dataToUpdate.price} {...register("price", { required: true })} />

                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mb-1  mt-3">
                            Quantity
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 py-3 px-4 text-sm" type="number" placeholder="Available Stock" defaultValue={dataToUpdate.quantity} {...register("quantity", { required: true })} />

                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mb-1 mt-3">
                            Rating
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 py-3 text-sm px-4 leading-tight " type="number" placeholder="Rating" {...register("rating")} defaultValue={dataToUpdate.rating} />
                    </div>
                </div>

                <input className='mt-6 bg-teal-600 text-white font-semibold' type="submit" />
            </form>
        </div>
    );
};

export default UpdateToy;