import React from 'react';

const Header = () => {
    return (
        <header className='w-full p-20'>
            <div className='sm:grid grid-cols-2 gap-5'>
                <div className='space-y-3'>
                    <p className='text-5xl inportFont2 font-bold mb-8 text-green-800'>Refresh Your Home</p>
                    <p className='inportFont text-gray-500'>Start Planting !</p>
                    <p className='text-gray-700'>Plants are the eukaryotes that comprise the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight, using chloroplasts derived from endosymbiosis with cyanobacteria to produce sugars from carbon dioxide and water, using the green pigment chlorophyll</p>
                </div>
                <div className='relative  flex w-[100%] gap-x-6'>

                    <img src="/public/pngtree-a-potted-plant-png-image_13590090.png" className=' rounded-tr-2xl rounded-bl-2xl left-0 top-0 border h-[100%] w-[50%] mt-[-20px]' alt="" />
                    <img src="/public/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8zMl9waG90b19vZl9hX3BsYW50X2luX2hvbWVfaXNvbGF0ZWRfb25fd2hpdGVfYl83YmViOTc1.webp" className=' rounded-tr-2xl rounded-bl-2xl right-0 bottom-0 border h-[100%] w-[50%] mt-[20px]' alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;