import { Rate } from 'antd'
import Image from 'next/image'
import React from 'react'
import "./style.css"

const ProductCard = () => {
  return (
    <div className={`cardContainer w-72 h-72 mb-20 relative`}>
    <div className='bg-background2 bg-opacity-10 w-full h-full items-center justify-center flex rounded-lg'>
    <div className=' w-60 h-60 relative'>
        <Image alt='product1' src="/assets/Images/product1.jpg" fill sizes='80%' ></Image>

    </div>
    </div>
    <div className='flex justify-between  mx-2'>
        <div><h3>Product Name</h3>
        <h3>$ 300</h3></div>
        <div className=''>
        <Rate className='align-bottom' defaultValue={5} />
        </div>        
    </div>
    <div id='add-cart-button' className=' bg-background2 rounded-2xl  absolute top-0 w-full h-full opacity-60 z-40 hidden justify-center items-center'>
      <button className=' bg-background1 px-4 py-2 rounded-lg text-white border border-1 border-white z-50'>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductCard