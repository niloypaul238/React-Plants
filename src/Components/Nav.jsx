import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
    return (
       <div className='rounded-box shadow-base-300/20 shadow-sm'>
            <nav class="navbar w-11/12 mx-auto text-black ">
            <div class="w-full md:flex md:items-center md:gap-2">
                <div class="flex items-center justify-between">
                <div class="navbar-start items-center justify-between max-md:w-full">
                    <a class="link text link-neutral text-xl font-bold no-underline" href="#">Plants </a>
                    <div class="md:hidden">
                    <button type="button" class="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#dropdown-navbar-collapse" aria-controls="dropdown-navbar-collapse" aria-label="Toggle navigation" >
                        <span class="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                        <span class="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                    </button>
                    </div>
                </div>
                </div>
                <div id="dropdown-navbar-collapse" class="md:navbar-end collapse grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
                <ul class="flex  items-center  gap-6 p-0  max-md:mt-2">
                    <Link to="/">Home</Link>
                    <Link to="/Plants">Plants</Link>
                    <Link to="/card" className='border rounded-md flex p-2 bg-pink-900 text-white'>Add to Cart <ShoppingCart /></Link>
                </ul>
                </div>
            </div>
        </nav>
       </div>
    );
};

export default Nav;