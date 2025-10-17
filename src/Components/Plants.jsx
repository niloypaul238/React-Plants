import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const Plants = () => {
    let {plants} = useLoaderData()
    console.log(plants)
    return (
        <div className='mx-auto w-11/12'>
                    <p className='mt-4 gap-3 text-xl inportFont2 text-green-900 '>Total Trees : - {plants.length}</p>  

                    <div className='sm:grid grid-cols-3 gap-4 mt-5'>
                        {
                            plants.map(plant => <Card key={plant.id} plant={plant}></Card>)
                        }    
                    </div>
        </div>
    );
};

export default Plants;