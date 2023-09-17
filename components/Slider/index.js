'use client'
import React, { useRef } from 'react'
import { Button, Carousel } from 'antd';
import SliderItem from '../SliderItem';
import {BiSolidChevronRightCircle,BiSolidChevronLeftCircle} from "react-icons/bi"
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };



const Slider = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
     
      const ref=useRef()
  return (
    <>
    
    <Carousel  afterChange={onChange} draggable={true} autoplay={true}  effect="scrollx" dots={false}  ref={ref}>
      
        <SliderItem style={contentStyle}/>
        <SliderItem style={contentStyle}/>
        <SliderItem style={contentStyle}/>
        <SliderItem style={contentStyle}/>
       
    
    </Carousel>
    <div className='flex gap-4 ml-6'>

   <BiSolidChevronLeftCircle onClick={()=>ref.current.prev()} className='text-5xl cursor-pointer text-background2 hover:text-background3 '/> 
    <BiSolidChevronRightCircle onClick={()=>ref.current.next()} className='text-5xl cursor-pointer text-background2 hover:text-background3 '/> 
    </div>

    </>
  )
}

export default Slider