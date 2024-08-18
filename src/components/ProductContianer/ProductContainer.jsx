import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import ProductBox from './ProductBox';
export default function ProductContainer() {
  const arr = [{
    image:"https://cdn3d.iconscout.com/3d/premium/thumb/construction-tools-11734376-9555926.png",
    name:"Hammer",
    price:2.00
  },
  {
    image:"https://th.bing.com/th/id/R.5dbf5bdc6d1f5dbea86e191e1452040b?rik=R4vJ6q6mdMOaSA&pid=ImgRaw&r=0",
    name:"Book",
    price:3.00
  },
  {
    image:"https://cdn3d.iconscout.com/3d/premium/thumb/personal-computer-10384808-8447571.png",
    name:"Computer",
    price:2.30
  },
  {
    image:"https://cdn3d.iconscout.com/3d/premium/thumb/sdhc-card-9577768-7809500.png",
    name:"Diskette",
    price:3.00
  },
  {
    image:"https://static.vecteezy.com/system/resources/previews/028/213/306/non_2x/phone-3d-icon-illustration-free-png.png",
    name:"Smart Phone",
    price:5.00
  },
  {
    image:"https://static.vecteezy.com/system/resources/previews/022/187/302/original/shopping-cart-3d-icon-illustration-png.png",
    name:"Cart",
    price:50.00
  },


]

const products = arr.map(item=>{
  return <ProductBox
  image={item.image}
  name={item.name}
  price={item.price}
  key={Math.random()}
  />
})
  
  return (
    <div className='container mx-auto pt-3'>
      <div className='flex justify-between place-items-center'>
        <h1 className='text-4xl font-semibold'>Populer</h1>
        <span className='text-blue-500'>See All</span>
      </div>
  <div className='lg:flex grid md:grid-cols-3  grid-cols-2 gap-5 justify-between py-5'> 
    {products}
  </div>
    </div>
  )
}
