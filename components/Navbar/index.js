'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className={`${isMenuOpen&&"flex-col justify-center items-center"} bg-background1 relative text-white flex md:flex-row justify-between pl-6 pr-10 py-4`}>
        <h2 className='font-bold text-2xl text-left float-left '>PROSOCKET</h2>
        <GiHamburgerMenu size={40} className={`${isMenuOpen&&"hidden"} md:hidden cursor-pointer`} onClick={()=>setIsMenuOpen(true)}/>
        <ul className={`hidden md:flex-row md:flex gap-8`}>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'>Home</li>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'>About</li>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'> Products</li>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'> Why Us</li>
            <Link href="/upload" ><li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'>Upload</li></Link>
            
        </ul>
        <ul className={`${isMenuOpen?"flex flex-col items-center justify-center text-center gap-8 mt-5 bg-opacity-50":"hidden"} md:hidden `} >
          <FaTimes size={30} className='text-right absolute right-5 top-5 cursor-pointer' onClick={()=>setIsMenuOpen(false)}/>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'>Home</li>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'>About</li>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'> Products</li>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'> Why Us</li>
            <li className='hover:text-background3 hover:scale-110 transition-all cursor-pointer'>Testimonial</li>
        </ul>

    </nav>
  )
}

export default Navbar