import React from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

const Header = () => {
  return (
    <div className="w-full  bg-background2 text-white flex md:flex-row flex-col items-center justify-between px-6 py-3">
      <div className="lg:flex gap-4 items-center hidden">
        <p className="inline-flex items-center gap-2"> <BiSolidPhoneCall  className="text-background3" size={20}/>Call: +01 1234567</p>
        <p className="inline-flex items-center gap-2"> <GrMail className="text-background3" size={20}/> Email: prosocket@gmail.com</p>
      </div>
      <div className="relative flex p-2">
        <input type="text" placeholder="Search here... " className="px-3 h-10 text-gray-800 rounded-tl-lg rounded-bl-lg" />
        <div className="bg-background3 flex p-3 rounded-tr-lg rounded-br-lg items-center justify-center text-center">
          <FaSearch />
        </div>
      </div>
      <ul className="flex gap-4">
        <li className="flex items-center gap-2 text-sm cursor-pointer"><FaUserCircle size={20} className="text-background3 "/> MY ACCOUNT</li>
        <li className="flex items-center gap-2 text-sm cursor-pointer"><FaShoppingCart size={20} className="text-background3 "/>CART</li>
        
      </ul>
    </div>
  );
};

export default Header;
