import { Sprout } from 'lucide-react';
import React from 'react';

const Card = ({plant}) => {
    return (
        <div className='bg-white px-3 py-1 rounded'>
            <img src={plant.image} className='h-30 w-full object-cover rounded' alt="" />
            <p>{plant.name}</p>
        </div>
    );
};

export default Card;