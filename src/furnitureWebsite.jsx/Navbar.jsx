import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";



function Navbar() {
  const imageArray = [
    "https://wallpaperbuddy.com/app/uploads/2021/10/pasted-image-0-800x500.jpg",
    "https://th.bing.com/th/id/OIP.plkVAg7rn0z2gBQU_9iuAQHaDt?w=800&h=400&rs=1&pid=ImgDetMain",
    "https://obsessionoutlet.com/wp-content/uploads/Wooden-Furniture-Design-Trends.jpg"
  ];

  const [counter, setCounter] = useState(0);

  const handleForwardClick = () => {
    setCounter((prevCounter) => (prevCounter + 1) % imageArray.length);
  };

  const handleBackwardClick = () => {
    setCounter((prevCounter) => (prevCounter - 1 + imageArray.length) % imageArray.length);
  };

  return (
    <div className="pt-[3%] bg-cover bg-center h-[90vh] ">
     
      <div className="flex justify-between items-center mx-[5%]">
        <a href="/" className="font-Lato font-bold text-[24px] mb-[3px]">Funiro.</a>
        
        <div className="flex items-center">
          <a href="/" className="inline-block font-Lato">Product</a>
          <IoIosArrowDown className="inline-block m-[5px]" />
        </div>
        
        <div className="flex items-center">
          <a href="/" className="inline-block font-Lato">Rooms</a>
          <IoIosArrowDown className="inline-block m-[5px]" />
        </div>

        <a href="/" className="font-Lato">Inspirations</a>
        
        <input type="text" className="w-[28%] h-[4vh] shadow-md transform duration-500 hover:scale-105 rounded" placeholder="   search for minimalist chair" />
        
        <div className="flex justify-between w-[17%] items-center">
          <FaRegHeart />
          <FiShoppingCart />
          <img src="https://conteudo.imguol.com.br/c/entretenimento/d1/2021/06/22/mia-malkova-e-uma-das-mais-bem-sucedidas-modelos-do-only-fans-1624386974184_v2_600x600.jpg.webp" alt="User profile" className="w-[30px] h-[30px] rounded-full bg-gray-400" />
        </div>
      </div>

      <div className="relative ">
        <button className="absolute mt-[2%] ml-[90%] bg-gray-300 px-3 py-3 rounded-full left-3" onClick={handleBackwardClick}><MdKeyboardArrowLeft />
</button>
        <button className="absolute bg-gray-300 mt-[2%] px-3 py-3 rounded-full right-3 mr-[2%]" onClick={handleForwardClick}><MdKeyboardArrowRight />

</button>
        <div className="flex justify-center ">
        <img src={imageArray[counter]} alt="Slider Image" className="w-[95%] h-[70vh]  object-cover rounded-lg hover:shadow-lg mt-[12vh]"  />
        </div>
    
      </div>
    </div>
  );
}

export default Navbar;
