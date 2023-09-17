import { Button, Image } from 'antd'
import React from 'react'
import MoreButton from '../Button'


const SliderItem = () => {
  return (
   <div className='flex w-[60%] items-center flex-col md:flex-row justify-center mx-auto md:gap-20 gap-10 py-6'>
     <div className='flex flex-col md:gap-10 gap-6'>
        <h1 className='text-5xl font-bold text-background1'>Welcome to our shop</h1>
        <p className='text-xl text-gray-700'>Lorem ipsum dolor sit amet.
        Quis enim ipsam ea eaque!
        Ex, rem iure. Perspiciatis, dignissimos.
        Debitis sed nemo quisquam et.</p>
        <MoreButton/>
    </div>
    <div className='relative md:w-full md:h-full w-72 h-72'>
    <Image alt='sliderImage' fill src="/assets/Images/sliderImg1.jpg"></Image>
    </div>
   
   </div>
  )
}

export default SliderItem