import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    const navigate = useNavigate()
    return (
        <div>
            <img src={coffee.photo} alt="" />
           <h2>Name : {coffee.name}</h2>
           <h2>Price : {coffee.price}</h2>
           <h2>Chef : {coffee.chef}</h2>
           <h2>Details : {coffee.details}</h2>
           <h2>Category : {coffee.category}</h2>
           <h2>taste : {coffee.taste}</h2>
           <button onClick={()=>navigate(-1)} className='btn btn-primary'>Back</button>
        </div>
    );
};

export default CoffeeDetails;