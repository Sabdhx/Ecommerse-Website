import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function RoomsInspiration() {
  const [counter , setCounter] = useState(0)
  const handleForwardClick = () => {
    setCounter((prevCounter) => (prevCounter + 1) % Array.length);
  };

  const handleBackwardClick = () => {
    setCounter((prevCounter) => (prevCounter - 1 + Array.length) % Array.length);
  };

  const Array = [
    { url: "https://wallpaperaccess.com/full/1700233.jpg" },
    { url: "https://wallpaperaccess.com/full/5089528.jpg" },
    { url: "https://wallpaperaccess.com/full/5726387.jpg" },
    { url: "https://images7.alphacoders.com/341/341714.jpg" },
    { url: "https://wallpaperaccess.com/full/5544150.jpg" },
  ];
  return (
    <div className="flex h-[50vh]  mt-[4%] ">
      <div className="h-[100%] w-[35%] py-[6%]  pl-9">
        <h1 className=" my-10 font-bold text-4xl">
          50+ Beautiful rooms inpiration
        </h1>
        <h1 className="my-10">
          Our design already made a lot of beautiful protoipe of rooms that
          inspires you{" "}
        </h1>
        <button className="  px-[4%] py-2 text-white bg-orange-400 text-[13px]">
          Explore More
        </button>
      </div>
      

      
      <div className="h-[100%] flex-1 ">
  <div className="absolute mt-[25vh] w-[57vw] ml-[6.4vw]">
  <button
    className="bg-gray-100 z-10 py-2 px-3 absolute left-0 rounded-full bg-gray-200"
    onClick={handleBackwardClick} // Call the function by adding ()
  >
    <MdKeyboardArrowLeft />
  </button>
  <button
    className="bg-gray-100 z-10 py-2 px-3 absolute rounded-full right-0 bg-gray-200"
    onClick={handleForwardClick} // Call the function by adding ()
  >
    <MdKeyboardArrowRight />
  </button>
</div>

            <div className="flex justify-center">
              <img src={`${Array[counter].url}`} alt="" 
              className="ml-20 w-[79%] h-[50vh] object-cover"
              />
            </div>
        
      </div>
    </div>
  );
}

export default RoomsInspiration;
