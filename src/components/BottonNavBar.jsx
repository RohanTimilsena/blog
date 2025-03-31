import React from "react";
import { ChevronDown } from "lucide-react";
import { Send } from "lucide-react";
import { Search } from "lucide-react";
import { AlignJustify } from "lucide-react";
import { NavLink } from "react-router";
import MyLogo from "../assets/logo.svg"

export default function BottonNavBar() {
  return (
    <div className=" bg-white shadow-xl ">
      <div className=" w-11/12 md:w-10/12   mx-auto  flex items-center justify-between py-5 opacity-95   ">
        <div className="text-2xl  items-center font-semibold">
        <p className="  w-30 items-center  "> <img src={MyLogo} alt="good-logo" /></p>
        </div>


<div className="hidden lg:block" >


        <div className="  flex gap-4 items-center opacity-80 font-semibold ">
          
          <NavLink to={"/"} className="flex items-center  gap-1 px-2 py-1 rounded-sm  hover:bg-gray-200 cursor-pointer duration-700  ">
            Home
            <ChevronDown size={16} className=" opacity-65" />
          </NavLink>
          <NavLink to={"/lifestyle"} className="  px-2 py-1 rounded-sm  hover:bg-gray-200 cursor-pointer ">
            Lifestyle
          </NavLink>
          <NavLink to={"/Features"} className="flex items-center  gap-1 px-2 py-1 rounded-sm  hover:bg-gray-200 cursor-pointer duration-700  ">
            Features
            <ChevronDown size={16} className=" opacity-65" />
          </NavLink>
          <NavLink to={"/login"} className="flex items-center  gap-1 px-2 py-1 rounded-sm  hover:bg-gray-200 cursor-pointer  duration-700 ">
            Login
            <ChevronDown size={16} className=" opacity-65" />
          </NavLink>
          <NavLink to={"/register"} className="flex items-center  gap-1 px-2 py-1 rounded-sm  hover:bg-gray-200 cursor-pointer  duration-700 ">
            Register
          </NavLink>
          <NavLink to={"/Contact"} className=" px-2 py-1 rounded-sm  hover:bg-gray-200 cursor-pointer duration-700  ">
            Contact
          </NavLink>
        

        <NavLink to={"/joinus"}>


          <button className="flex items-center  gap-3 bg-pink-500 text-white  px-5  py-1.5 rounded-lg  hover:bg-black cursor-pointer duration-500 ">
            <Send size={16} className="" />
            Join Us
          </button>
          
        </NavLink>

          <Search size={28} className=" opacity-100 stroke-1 " />
          <div >
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <AlignJustify size={28} className=" " />
        </div>
        </div>
      </div>
    </div>
  );
}
