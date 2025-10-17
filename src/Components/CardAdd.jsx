import { Delete } from 'lucide-react';
import React from 'react';
import { dleteFunGet, GetData } from './CustomHooks';

const CardAdd = ({singleTree ,setChart}) => {
    let deleteFun =(id)=>{
        
       dleteFunGet(id)
       let daa =  GetData()
        setChart(daa)
    }
    return (
        <div className='flex justify-between items-center text-xl'>
            <img className='h-20 w-40 object-cover rounded-md' src={singleTree.image} alt="" />
            <p>Category : {singleTree.category}</p>
            <p>{singleTree.name}</p>
            <p>{singleTree.price} TK</p>
            <button onClick={()=>{deleteFun(singleTree.id)}} className='bg-red-700 text-white rounded py-1 px-5'>Delete</button>
        </div>
    );
};

export default CardAdd;