import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'

export default function ProductBox({image,name,price}) {
  return (
    <div className='flex flex-col group gap-2 w-full bg-gray-100 relative p-5 rounded-md'>
    
    <div className="absolute text-xl top-4 right-6 text-slate-600">
      <FaRegHeart/>
    </div>
    <div className='flex justify-center place-items-center'>
      <img className=' transition-all duration-500 group-hover:rotate-6 ' src={image} alt="" />
    </div>
    <div className='flex justify-between place-items-center'>
     <div>
     <h1 className='font-medium'>{name}</h1>
     <span className='font-bold'>${price}</span>
     </div>
     <button className='text-3xl text-blue-500'>
      <CiCirclePlus/>
     </button>
    </div>
  </div>
  )
}
