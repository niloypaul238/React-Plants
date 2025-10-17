import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Sprout } from 'lucide-react';
import Card from './Card';

const Home = () => {

    let [plants , setPlats] = useState([])

    useEffect(()=>{
        fetch('http://openapi.programming-hero.com/api/plants').then(res => res.json()).then(data => setPlats(data.plants
))
    },[])
   


    return (
        <>
            <div className='w-11/12 mx-auto my-6'>
                <Header></Header>
                
                <div className='mx-auto w-11/12'>
                    <p className='flex justify-center items-center gap-3 text-3xl inportFont2 text-green-900 '>Tranding Plants <Sprout /></p>  

                    <div className='sm:grid grid-cols-3 gap-4 mt-5'>
                        {
                            plants.slice(0,6).map(plant => <Card key={plant.id} plant={plant}></Card>)
                        }    
                    </div>          
                </div>
            </div>
            
        </>
    );
};

export default Home;