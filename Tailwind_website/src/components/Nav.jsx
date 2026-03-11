import React, { useState } from 'react'
import { FaArrowRightLong, FaBars, FaXmark } from 'react-icons/fa6'

function Nav() {

var [showMenu, setMenu] = useState(true);

    return (
       <div className='w-full fixed top-0 z-50 backdrop-blur-2xl'>
           <div className='flex items-center justify-between px-6 py-8 sm:px-12 md:px-24 lg:px-40'>
                 {/* logo */}
                 <div>
                      <span className='text-2xl font-bold '>GEN-Z</span>
                      <div className='w-4 h-4 bg-amber-400 rounded-full border-2'></div>
                 </div>

                 {/* nav section */}
                 <div className='hidden sm:flex items-center justify-between space-x-8 font-semibold'>
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Career">Career</a>
                    <a href="#Support">Support</a>
                 </div>

                 {/* contect  */}
                 <div className='hidden sm:block'>
                    <button className='px-3 py-1 flex items-center gap-3 bg-amber-300 rounded-full'>
                        Contact Us
                        <FaArrowRightLong/>
                    </button>
                 </div>
                 {/* mobile */}
                 { showMenu?
                 <FaBars onClick={()=>{setMenu(!showMenu)}} className='sm:hidden text-3xl font-semibold font-black/50'/>:
                 <FaXmark onClick={()=>{setMenu(!showMenu)}} className='sm:hidden text-3xl font-semibold font-black/50'/>
                 }
           </div>
       </div>
    )
}

export default Nav