import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { LuPencilLine } from "react-icons/lu";
import { SiWindows11 } from "react-icons/si";
import { BsBoxSeam } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
export default function NavBar() {
  return (
    <>
    <div>
    <div className='w-full py-2 bg-gray-950'>
        <div className=" mx-auto bg-gray-950 font-semibold container text-sm text-white flex justify-between place-items-center">
            <div className='flex justify-between overflow-hidden place-items-center gap-8'>
            <div className='flex gap-3 bg-slate-700 rounded-md'>
                <button className='px-4 py-1 bg-white rounded-md text-gray-950'>Delivary</button>
                <button className='px-4 py-1 '>Pickup</button>
            </div>
            <div className='flex place-items-center gap-2'>
                select the delivary <span className='text-lg'><LuPencilLine/></span>
            </div>
            <div className='flex gap-2'>
                <span className='text-slate-400'>Nearest delivary</span>
                <span>today is 13:00-14:00</span>
            </div>
            </div>
          
            <div className='flex gap-2'>
                <span>+880 88434 344</span>
                <span className='text-slate-400'>Around the clock</span>
            </div>
        </div>
    </div>
    <div className=' border-y py-4  '>
        <div className='w-full mx-auto container flex justify-between place-items-center'>

        
            <div className='flex place-items-center gap-5 w-[20%] '>
                <img className='w-14' src="https://attachments.developer.intuit.com/appcard-8ddcc012-8ac5-42a5-a6c9-ee9211006d6e.png" alt="" />
                <button className='flex px-6 text-sm py-4 rounded-md place-items-center gap-2 text-white bg-blue-500'>
                    <SiWindows11/>
                    Catalog
                </button>
            </div>
            <div className='w-[60%] flex place-items-center p-1 bg-blue-500 rounded-md'>
                <select name="" id="" className='py-3 px-3 rounded-tl-md rounded-bl-md bg-white'>
                    <option value="">All Catagories</option>
                </select>
                <input className='px-3 py-[0.65656567rem] rounded-tr-md rounded-br-md focus:outline-none w-full' type="text" placeholder='Search in the market' />
                <button className='px-4 text-xl text-white'><FaSearch/></button>
            </div>
            <div className='w-[20%] pl-5 flex justify-between place-items-center text-xl'>
                <button className='p-3 border rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300'>
                    <BsBoxSeam/>
                </button>
                <button className='p-3 border rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300'>
                    <CiHeart/>
                </button>
                <button className='p-3 border rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300'>
                    <FiShoppingCart/>
                </button>
                <button className='p-3 border rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300'>
                    <FiUser/>
                </button>
            </div>
      
    </div>
    </div>
    </div>
    </>
  )
}
