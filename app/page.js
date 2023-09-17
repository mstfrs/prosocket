import MoreButton from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Slider from "@/components/Slider";
import Image from "next/image";
import { FaAward, FaShippingFast } from "react-icons/fa";
import {TbTruckDelivery} from "react-icons/tb"


export default function Home() {
  return (
    <div className=" ">
      <Header />
      <Navbar/>
      <Slider/>
      
      {/* ------------Our Products section  start---------- */}
      <h2 className="text-center text-4xl font-bold my-20">Our Products</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md-lg:grid-cols-3 lg:grid-col-4 place-content-between place-items-center gap-x-14 gap-y-28">
      <ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/><ProductCard/>
      </div>
      {/* ------------Our Products section  end---------- */}



      {/* ------------About section  start---------- */}
      <div className="mt-48 flex md:flex-row flex-col h-[50rem] md:h-[30rem] object-cover">
        <div className="bg-background1 text-white flex-1 flex flex-col justify-evenly items-stretch place-items-center px-10 py-4">
          <h2 className="text-3xl font-semibold">We Provide Best For You</h2>
          <p>
          Totam architecto rem beatae veniam, cum officiis adipisci soluta perspiciatis ipsa, expedita maiores quae accusantium. Animi veniam aperiam, necessitatibus mollitia ipsum id optio ipsa odio ab facilis sit labore officia! Repellat expedita, deserunt eum soluta rem culpa. Aut, necessitatibus cumque. Voluptas consequuntur vitae aperiam animi sint earum, ex unde cupiditate, molestias dolore quos quas possimus eveniet facilis magnam? Vero, dicta.
          </p>
          <MoreButton/>

        </div>
        <div className="relative flex-1">
          <Image alt="about" src="/assets/Images/about1.jpg" fill objectFit="cover"/>
        </div>

      </div>
      {/* ------------About section  end---------- */}


      {/* ------------Why us section  start---------- */}
      <div className="container mx-auto">
      <h2 className="text-center text-4xl font-bold my-20">Why Choose Us</h2>

      <div className="grid grid-cols-1 gap-6  md:grid-cols-3">
        <div>
        <div className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-400 shadow-lg">
        <TbTruckDelivery className="" size={80}/>
        <h3 className="font-extrabold text-lg">FAST DELIVERY</h3>
        <p className="text-center">variations of passages of Lorem Ipsum available</p>
        </div>
        </div>
        <div>
        <div className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-400 shadow-lg">
        <FaShippingFast className="" size={80}/>
        <h3 className="font-extrabold text-lg">FREE SHIPING</h3>
        <p className="text-center">variations of passages of Lorem Ipsum available</p>
        </div>
        </div>
        <div>
        <div className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-400 shadow-lg">
        <FaAward className="" size={80}/>
        <h3 className="font-extrabold text-lg">BEST QUALITY</h3>
        <p className="text-center">variations of passages of Lorem Ipsum available</p>
        </div>
        </div>
        
      </div>

      </div>
      {/* ------------Why us section  end---------- */}     

<Footer/>
     
    </div>

  );
}
