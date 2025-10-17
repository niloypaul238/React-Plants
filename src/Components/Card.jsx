import { Sprout } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

//     category: "Fruit Tree"
// description: "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals."
// id: 1
// image: "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg"
// name: "Mango Tree"
// price: 500
const Card = ({plant}) => {
    return (
        <div className='bg-white px-3 py-3 shadow rounded'>
            <img src={plant.image} className='h-40 overflow-hidden  w-full object-cover rounded' alt="" />
            <div className='flex justify-between mt-2'>
                <p className='text-lg text-green-500'>{plant.name}</p><p className='text-red-800'>{plant.price} TK</p>
                
            </div>
            <Link to={`/detals/${plant.id}`} className='bg-green-700 text-center w-full block text-white p-1'>View Details</Link>
        </div>
    );
};

export default Card;