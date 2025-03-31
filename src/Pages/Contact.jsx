import React from "react";

export default function Contact() {
  return (
    <div className="  bg-gray-100 ">
      <div className="w-10/12 mx-auto mt-10 py-20   ">
        <div className=" font-semibold  flex justify-between  ">
          <div>
            <div className="flex  bg-white w-75 space-x-2 p-1 rounded-full items-center  ">
              <p className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-1  rounded-full  text-white opacity-90">
                Success{" "}
              </p>
              <p className="  opacity-60  "> Our success in numbers </p>
            </div>
            <p className="text-3xl mt-4">
              Have a project in mind? <br />
              Let's talk!
            </p>
            <p className="opacity-50 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut
              elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar
              dapibus leo.
            </p>
          </div>

          <div className="space-y-6">

            <div className="flex items-center  space-x-4 ">
                <button>
              <input
                type="text"
                className="bg-white py-3 px-5 w-78 outline-none rounded-md "
                placeholder="First Name"
              />
            </button>
            <button>
              <input
                type="text"
                className="bg-white py-3 px-5 w-78  outline-none rounded-md "
                placeholder="Last Name"
              /></button>
            </div>

            <div>
              <input
                type="email"
                className="bg-white py-3 px-5 w-full outline-none rounded-md "
                placeholder="Email"
              />
            </div>
             

            <div>
              <textarea
                type="text"
                className="bg-white px-5 py-3  w-full h-60 outline-none rounded-md "
                placeholder="Your Massage"
              />
            </div>

            <button className="bg-pink-500 text-white px-5 py-3 hover:bg-black cursor-pointer duration-500  rounded-md "> Submit Form</button>
           


          </div>
        </div>
      </div>
    </div>
  );
}
