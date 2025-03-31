import React from "react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Send } from "lucide-react";
import { SquareM } from "lucide-react";
import { NavLink } from "react-router";

export default function TopNavBar() {
  return (
    <div  className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full" >


      <div  className="w-11/12 md:w-10/12 mx-auto text-white flex justify-between py-2 ">

      <div className="  hidden md:block">
        <div className="flex items-center gap-4">
          <SquareM   className="cursor-pointer "  />
          <Twitter   className="cursor-pointer " />
          <Instagram className="cursor-pointer " />
          <Send      className="cursor-pointer "  />
        </div>
        </div>

        <div className="flex items-center gap-4 font-semibold">
            <NavLink to="/lifestyle" className="cursor-pointer ">About Us</NavLink>
            <p>-</p>
            <NavLink to="/login" className="cursor-pointer ">Login</NavLink>
            <p>-</p>
            <NavLink to="/contact" className="cursor-pointer ">Contact</NavLink>
        </div>
      </div>


    </div>
  );
}
