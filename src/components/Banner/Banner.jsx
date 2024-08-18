import React from 'react'

export default function Banner() {
  return (
    <div className='px-3'>
    <div className='container  mx-auto h-52 over my-8 rounded-xl flex justify-center place-items-center bg-blue-500 '>
        <div className="text ">
            <h1 className='lg:text-4xl md:text-2xl text-xl uppercase relative -translate-x-10 skew-x-12 -skew-y-[8deg] z-[1] bg-gray-950 text-white font-black px-4 py-2'>Buy Now</h1>
            <h1 className='lg:text-4xl md:text-2xl text-xl uppercase relative -skew-y-3 z-0 -translate-y-0 bg-white text-blue-500 font-black px-4 py-2'>Pay now</h1>
        </div>
        <div>
            <img src={"https://cdn3d.iconscout.com/3d/premium/thumb/credit-card-4364044-3626528.png"}  className=' md:w-auto w-60 rotate-12' alt="" />
        </div>
    </div>
    </div>
  )
}
