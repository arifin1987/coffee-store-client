import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const updatedCoffee= {name, quantity, supplier, taste, category, details, photo}
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            console.log(data);
        })
    }
    
    return (
        <div className='p-24'>
        <h2>Update Coffee</h2>
        <form onSubmit={handleUpdateCoffee} >
            <div className='md:flex'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='name' defaultValue={name} placeholder="Coffee Name" className="input input-bordered md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered md:w-full" />
                    </label>
                </div>

            </div>
            <div className='md:flex'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='supplier' defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='taste' defaultValue={taste} placeholder="Taste" className="input input-bordered md:w-full" />
                    </label>
                </div>

            </div>
            <div className='md:flex'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='category' defaultValue={category} placeholder="Category" className="input input-bordered md:w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='details' defaultValue={details} placeholder="Details" className="input input-bordered md:w-full" />
                    </label>
                </div>

            </div>
            <div className='md:flex'>
                <div className="form-control md:w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name='photo' defaultValue={photo}placeholder="Photo URL" className="input input-bordered md:w-full" />
                    </label>
                </div>
                

            </div>
            <input type="submit" value="Add Coffee" className='btn btn-block' />
        </form>
    </div>
    );
};

export default UpdateCoffee;