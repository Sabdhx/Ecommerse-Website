import React from "react";
import { GoTrophy } from "react-icons/go";
import { MdOutlineVerified } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbPhoneCalling } from "react-icons/tb";

function AfterNavbar() {
  const Array = [
    {
      icon: <GoTrophy />,
      h1: "High Quality",
      para: "crafted from top material",
    },
    {
      icon: <MdOutlineVerified />,
      h1: "Warrany Protection",
      para: "Over 2 years",
    },
    {
      icon: <LiaShippingFastSolid />,
      h1: "Free Shipping",
      para: "Order over 150 $",
    },
    {
      icon: <TbPhoneCalling />,
      h1: "24 / 7 Support",
      para: "Dedicated Support",
    },
  ];
  return (
  <div className="  h-[30vh] flex justify-around  ">
    {
      Array.map((item)=>{
        return(
        <div className="flex mt-[7%]">
          <div className="mx-3">
           <h1 className="text-[50px]"> {item.icon} </h1>
          </div>
          <div>
            <h1 className="font-bold">{item.h1}</h1>
            <p>{item.para}</p>
          </div>
        </div>
        )
      })
    }
  </div>
  )
}


export default AfterNavbar;
