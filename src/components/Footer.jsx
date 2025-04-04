import React from "react";
import { Send } from "lucide-react";
import MyLogo from "../assets/logo.svg"
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";

import { SquareM } from "lucide-react";

export default function Footer() {
  return (
    <div  >
      {/* footer */}

      <div className="w-11/12 md:w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start justify-between space-y-15 mt-5 py-16 "> 


        <div className="space-y-5">
          <p className="  w-30 items-center  "> <img src={MyLogo} alt="good-logo" /></p>
          <p className=" opacity-70  ">
            This is a great space to write text <span className="font-medium  ">about your <br /> company </span>
            and your services. You can use this <br /> space to go into a little more <span className="font-medium border-b-1     ">details </span> about <br />
            your company.
          </p>
        </div>

        <div className="space-y-5 font-semibold md:text-center" >
          <h1 className=" text-lg  " >  Links</h1>
          <p className=" opacity-70  cursor-pointer hover:text-pink-600  duration-500 " >About Us</p>
          <p className=" opacity-70  cursor-pointer hover:text-pink-600  duration-500" >Our Story</p>
          <p className=" opacity-70  cursor-pointer hover:text-pink-600  duration-500" >Projects</p>
        </div>

        <div className="space-y-5 font-semibold ">

        <h1 className=" text-lg  " > Categories</h1>
        <div className=" space-x-4     ">
        <span className=" opacity-70  cursor-pointer border-b-1 border-b-white hover:text-indigo-800 hover:border-b-indigo-800" > <span className="   text-indigo-800">#</span> Entertainment</span>
        <span className=" opacity-70  cursor-pointer border-b-1 border-b-white hover:text-orange-600     hover:border-b-orange-600  " > <span className=" text-orange-600">#</span> Gadget</span>
        <span className=" opacity-70  cursor-pointer border-b-1 border-b-white hover:text-blue-500     hover:border-b-blue-500  " > <span className=" text-blue-500">#</span> Ideas </span> <br />
        <span className=" opacity-70  cursor-pointer border-b-1 border-b-white hover:text-cyan-600     hover:border-b-cyan-600  " > <span className=" text-cyan-600">#</span> Inspiration</span>
        <span className=" opacity-70  cursor-pointer border-b-1 border-b-white hover:text-yellow-600     hover:border-b-yellow-600  " > <span className=" text-yellow-600">#</span> Lifestyle</span>
        <span className=" opacity-70  cursor-pointer border-b-1 border-b-white hover:text-red-600     hover:border-b-red-600  " > <span className=" text-red-600">#</span> Music</span> <br />
        <span className=" opacity-70  cursor-pointer border-b-1 border-b-white hover:text-neutral-700     hover:border-b-neutral-700  " > <span className=" text-neutral-700">#</span> Travel</span>
        <span className=" opacity-70  cursor-pointer border-b-1 border-b-white hover:text-pink-600     hover:border-b-pink-600  " > <span className=" text-pink-600">#</span> Trending</span>
        </div>

        </div>




        <div  className="space-y-5 ">
          <h1 className=" text-lg  font-semibold "> Newsletter</h1>
          <p className=" opacity-70" > subscribe newsletter to get latest articles</p>
          <div className=" py-1 px-5 w-sm rounded-full   border-1 border-gray-300 flex justify-between  ">
              <input
                type="email"            
                className="outline-none"   
                placeholder="Email Address*"
              />
               <button className="flex items-center  -mx-4  gap-3 bg-pink-500 text-white  py-2 px-6 rounded-full  hover:bg-black cursor-pointer duration-500  ">
            <Send size={16} className="" />
            Join 
          </button>
          
            </div>


        </div>

      </div>


          {/* borderline */}
          <div className="w-10/12 mx-auto grid grid-cols-4 mb-12 opacity-65 ">
            <div className="border-b-2 border-b-amber-500"></div>
            <div className="border-b-2 border-b-purple-600"></div>
            <div className="border-b-2 border-b-yellow-500"></div>
            <div className="border-b-2 border-b-blue-500"></div>
          </div>

      {/* 2nd footer */}

      <div className="w-10/12 mx-auto   mb-5  lg:flex  justify-between space-y-8 ">
        <div className=" space-y-7">
          <p className="text-sm  text-gray-500">
            This website may collect data about you, use cookies, embed
            additional third-party tracking, and <br /> monitor your interaction
            with that embedded content
          </p>
          <p className="flex gap-8">
            <h1 className="text-sm opacity-65">Privacy Policy</h1>
            <span className="text-sm  opacity-65">Terms and Conditions</span>
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold lg:text-right bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent ">Follow Us On Socials</p>
          <div className=" flex items-center lg:justify-end gap-4 text-gray-500 ">
            <SquareM className="cursor-pointer " />
            <Twitter className="cursor-pointer " />
            <Instagram className="cursor-pointer " />
            <Send className="cursor-pointer " />
          </div>
          <p className="text-sm opacity-65">
            Copyright & Design By @Rivaxstudio - 2025
          </p>
        </div>
      </div>
        
        
    </div>
  );
}
