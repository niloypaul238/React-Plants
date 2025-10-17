import React, { useEffect, useState } from 'react';
import { GetData } from './CustomHooks';
import { useLoaderData } from 'react-router';
import CardAdd from './CardAdd';

const AddCard = () => {
    let {plants} = useLoaderData()
    let [chart , setChart] = useState([])
    useEffect(()=>{
       let getLocal = GetData()
       setChart(getLocal);
    },[])

    let filterable = plants.filter(singleTree => chart.includes(singleTree.id))
    
    return (
        <div className='w-11/12 mx-auto my-4 space-y-5'>
            <p>Add to card Trees : {filterable.length}</p>
            <div className={`shadow bg-[#f7f0f0] p-4 rounded-2xl grid gap-y-4`}>
                {
                   filterable.length > 0 ? filterable.map(singleTree => <CardAdd setChart={setChart} key={singleTree.id} singleTree={singleTree}></CardAdd>) : <p>No Tress Bye</p>
                }
            </div>
        </div>
    );
};

export default AddCard;