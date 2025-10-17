import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { SetLocal } from './CustomHooks';

const PlantsDtls = () => {
    let idGet = useParams()
    let [dtls , setDtls] = useState({})

    let handleBye = (id) =>{
        SetLocal(id)
        
    }


    let {category,description,image,name,price,id} = dtls;
     useEffect(()=>{
            fetch(`http://openapi.programming-hero.com/api/plant/${idGet.id}`).then(res => res.json()).then(data =>setDtls(data.plants))},[])
    //console.log(idGet.id);
    return (
        <div className='w-11/12 mx-auto my-3 p-3 shadow'>
            <div className='h-70'>
                <img src={image} className='h-full object-cover w-full rounded-t-2xl' alt="" />
            </div>
            <div className='flex justify-between items-end border-b pb-4 border-gray-300'>
                <p className='text-4xl inportFont'>{name}</p>
                <p className='text-gray-600'>Category :  {category}</p>
            </div>
            <div className='sm:flex  gap-x-19 items-center justify-end py-3 '>
                <p className='text-lg font-semibold'>Price - {price} TK</p> <button onClick={()=>handleBye(id)} className='btn'>Bye Now</button>
            </div>
            
            <p>{description}</p>
        </div>
    );
};

export default PlantsDtls;