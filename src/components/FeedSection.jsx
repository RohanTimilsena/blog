import { Import } from "lucide-react";
import React from "react";
import MyBallimage from "../assets/ball.webp";
import MyCarimage from "../assets/car.webp"
import MySkitingimage from "../assets/skiting.webp"
import MyHelmetimage from "../assets/helmet.webp"
import MyHatimage from "../assets/hat.webp"

export default function FeedSection() {
  return (
    <div className=" w-11/12 lg:w-10/12  mx-auto mt-12 space-y-12">
      {/* card */}


      {/* 1st card */}

      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 border-l-6 border-l-amber-400   ">
        <div className=" md:flex space-y-4 gap-6 ">
          <img
            src={MyBallimage}
            className="h-40 md:w-40 w-full object-cover   rounded-2xl hover:scale-105 duration-500 cursor-pointer  "
            alt=" this-is-cricket-ball-image"
          />
          <div>
            <h1 className=" font-semibold text-2xl opacity-90 mb-3 hover:text-pink-600    duration-500  border-b-3 border-white hover:border-b-pink-600 cursor-pointer ">
              The Benefits Of Traveling With A Second Language
            </h1>
            <span className=" text-sm font-semibold  opacity-60 ">
              By  <span className="hover:underline duration-700 cursor-pointer  "> Jessica Smith     </span >  6 Comments
            </span>
            <p className=" text-lg  opacity-60 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form,
              by...{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-4 border-t border-dashed mt-4 border-gray-300">
          <p>
            {" "}
            <span className="text-orange-500">#</span>Lifestyle{" "}
            <span className="text-pink-500">#</span> Treading
          </p>
          <div> 301 Views 3 Min Read</div>
        </div>
      </div> 




      {/* 2nd card */}

      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 border-l-6 border-l-purple-400  ">
        <div className=" md:flex space-y-4 gap-6">
          <img src={MyCarimage}
           className="h-40 md:w-40 w-full object-cover  rounded-2xl hover:scale-105 duration-500 cursor-pointer "
          alt="this-is-car-image" />
          <div>
            <h1 className=" font-semibold text-2xl opacity-90 mb-3 hover:text-pink-600    duration-500  border-b-3 border-white hover:border-b-pink-600 cursor-pointer ">
            Healthy Cooking Made Easy With Nutritious Recipes
            </h1>
            <span className=" text-sm font-semibold  opacity-60 ">
              By  <span className="hover:underline duration-700 cursor-pointer "> Jessica Smith </span > No Comments
            </span>
            <p className=" text-lg  opacity-60 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form,
              by...{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-4 border-t border-dashed mt-4 border-gray-300">
          <p>
            {" "}
            <span className="text-orange-500">#</span>Entertainment
            {" "}
            <span className="text-pink-500">#</span> Travel
          </p>
          <div>  406 Views 3 Min Read</div>
        </div>
      </div>

      {/* 3rd card */}

      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 border-l-6 border-l-blue-400  ">
        <div className=" md:flex space-y-4 gap-6">
          <img src={MySkitingimage} 
           className="h-40 md:w-40 w-full object-cover rounded-2xl hover:scale-105 duration-500 cursor-pointer "
          alt="this-is-skiting-image" />
          <div>
            <h1 className=" font-semibold text-2xl opacity-90 mb-3 hover:text-pink-600    duration-500  border-b-3 border-white hover:border-b-pink-600 cursor-pointer ">
            Shaping Tomorrow’s Landscape Of Intelligent Machines
            </h1>
            <span className=" text-sm font-semibold  opacity-60 ">
              By  <span className="hover:underline duration-700 cursor-pointer "> Jessica Smith </span > 6 Comments
            </span>
            <p className=" text-lg  opacity-60 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form,
              by...{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-4 border-t border-dashed mt-4 border-gray-300">
          <p>
            {" "}
            <span className="text-orange-500">#</span>Inspiration{" "}
            <span className="text-pink-500">#</span> Music
          </p>
          <div> Trending 291 Views 3 Min Read</div>
        </div>
      </div>

      {/* 4th card */}
      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 border-l-6 border-l-orange-300  ">
        <div className=" md:flex space-y-4 gap-6">
          <img src={MyHelmetimage}
           className="h-40 md:w-40 w-full object-cover rounded-2xl hover:scale-105 duration-500 cursor-pointer "
          alt="this-is-helmet-image" />
          <div>
            <h1 className=" font-semibold text-2xl opacity-90 mb-3 hover:text-pink-600    duration-500  border-b-3 border-white hover:border-b-pink-600 cursor-pointer ">
            Hidden Ways To Save Money That You Might Be Missing
            </h1>
            <span className=" text-sm font-semibold  opacity-60 ">
              By  <span className="hover:underline duration-700 cursor-pointer "> Jessica Smith </span > No Comments
            </span>
            <p className=" text-lg  opacity-60 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form,
              by...{" "}
            </p>
          </div>
        </div>
               

            
        <div className="flex justify-between pt-4 border-t border-dashed mt-4 border-gray-300">
          <p>
            {" "}
            <span className="text-orange-500">#</span>Gadget
            <span className="text-pink-500">#</span> Treading
          </p>
          <div> Trending 291 Views 3 Min Read</div>
        </div>
      </div>



        {/* 5th card */}

      <div className="bg-white shadow-md border border-gray-50 rounded-2xl p-4 border-l-6 border-l-pink-400  ">
        <div className="md:flex space-y-4 gap-6">
         <img src={MyHatimage}
           className="h-40 md:w-40 w-full object-cover rounded-2xl hover:scale-105 duration-500 cursor-pointer "
          alt="this-is-helmet-image" />
          <div>
            <h1 className=" font-semibold text-2xl opacity-90 mb-3 hover:text-pink-600    duration-500  border-b-3 border-white hover:border-b-pink-600 cursor-pointer ">
            Time Management Secrets Of An Efficient Engineer
            </h1>
            <span className=" text-sm font-semibold  opacity-60 ">
              By  <span className="hover:underline duration-700 cursor-pointer "> Jessica Smith </span > No Comments
            </span>
            <p className=" text-lg  opacity-60 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form,
              by...{" "}
            </p>
          </div>
        </div>

        <div className="flex justify-between pt-4 border-t border-dashed mt-4 border-gray-300">
          <p>
            {" "}
            <span className="text-orange-500">#</span>Travel
          </p>
          <div> Trending 291 Views 3 Min Read</div>
        </div>
      </div>
    </div>
  );
}
