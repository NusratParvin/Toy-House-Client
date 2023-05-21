import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import { BsArrowDown } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddNewToy = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        try{
            fetch('http://localhost:5000/addCar',
            {
                method:'POST',
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
               
                if(data.insertedId){
                    toast.success('Successfully added new car !', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            })
        }
        catch{err=>{
            console.log(err);
        }}
        // form.reset()
    }

    return (
        <div className='text-black w-1/2 mx-auto mt-6 border p-6'>
            <form onSubmit={handleSubmit(onSubmit)} class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-0 ">
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            Toy Name
                        </label>
                        <input class="appearance-none block w-full text-sm bg-gray-200 text-gray-700 py-3 px-4 mb-1 leading-tight " type="text" placeholder="Name of the toy" {...register("name", { required: true })} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase    mt-0 pt-0 text-gray-700 text-xs font-bold mb-1" for="grid-last-name">
                            Sub-Category
                        </label>
                        {/* <input class="appearance-none block w-full bg-gray-200 text-gray-700  py-3 px-4 leading-tight " type="text" placeholder="Category" {...register("category")}/> */}
                        <select className="text-input appearance-none block w-full bg-gray-200 text-gray-700  py-1 px-4 leading-tight" {...register("category", { required: true })}>
                            <option value="Sports Car">Sports Car</option>
                            <option value="Fire Truck">Fire Truck</option>
                            <option value="Regular Car">Regular Car</option>
                        </select>
                    </div>
                </div>







                <div class="flex flex-wrap -mx-3 mb-0 ">
                    <div class="w-full px-3 ">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mt-3 mb-1" {...register("picture_url")} >
                            Photo URL
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-sm text-gray-700 py-3 px-4 mb-1 leading-tight " type='text'
                            placeholder="Photo url of toy" {...register("picture_url")} />
                    </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-0 mt-3 ">
                    <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            Seller Name
                        </label>
                        <input class="appearance-none block w-full text-sm bg-gray-200 text-gray-700 py-3 px-4 mb-1 leading-tight "
                            type="text" defaultValue={user?.displayName} {...register("seller_name")} />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase    mt-0 pt-0 text-gray-700 text-xs font-bold mb-1">
                            SEller Email
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 text-sm py-3 px-4 leading-tight " type="email"
                            defaultValue={user?.email} {...register("seller_email")} />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-0 ">
                    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mb-1 mt-3">
                            Price
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 py-3 px-4 text-sm" type="number" placeholder="Price" {...register("price", { required: true })} />

                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mb-1  mt-3">
                            Quantity
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 py-3 px-4 text-sm" type="number" placeholder="Available Stock" {...register("quantity", { required: true })} />
                        {/* <div class="relative ">
                                <select class="block appearance-none  w-full bg-gray-200 text-gray-700 py-3 px-4 pr-8  leading-tight" id="grid-state">
                                    <option>New Mexico</option>
                                    <option>Missouri</option>
                                    <option>Texas</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div> */}
                    </div>
                    <div class="w-full md:w-1/3 px-3 mb-1 md:mb-0">
                        <label class="block uppercase   text-gray-700 text-xs font-bold mb-1 mt-3">
                            Rating
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 py-3 text-sm px-4 leading-tight " type="number" placeholder="Rating" {...register("rating")} />
                    </div>
                </div>

                <input className='mt-6 bg-teal-600 text-white font-semibold' type="submit" />
            </form>
        </div>
    );
};

export default AddNewToy;