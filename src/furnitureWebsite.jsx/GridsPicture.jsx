import React from "react";

function GridsPicture() {
  const Array = [
    {
      image: "https://images8.alphacoders.com/602/602299.jpg",
      name: "Syltherine",
      style: "stylish cafe chair",
      price: "2,500,000",
      removedPrice: "3,500,000",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.i7S0JC0A0gBch-mkuA1FwAHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
      name: "Leviasa",
      style: "stylish cafe chair",
      price: "2,500,000",
      removedPrice: "3,500,000",
    },
    {
      image: "https://wallpapercave.com/wp/wp9625935.jpg",
      name: "lolita",
      style: "Luxury big sofa",
      price: "7,000,000",
      removedPrice: "14,000,000",
    },
    {
      image: "https://images2.alphacoders.com/266/thumb-1920-266800.jpg",
      name: "Respira",
      style: "Minnalist fan",
      price: "500,000",
      removedPrice: "5000,000",
    },
    {
      image:
        "https://i.pinimg.com/originals/82/fb/3f/82fb3f548724360b5a083d22a1adc7dc.jpg",
      name: "Grifa",
      style: "Night lamp",
      price: "1,500,000",
      removedPrice: "500,000",
    },
    {
      image: "https://pratapprojects.com/wp-content/uploads/2020/01/1-1.jpg",
      name: "Muggo",
      style: "small mug",
      price: "150,000",
      removedPrice: "50,000",
    },
    {
      image:
        "https://i.pinimg.com/736x/a8/31/7f/a8317fa2e5468733af9f0e66a02d2dd5--ideas-para-change-.jpg",
      name: "Pingky",
      style: "Cute bed set",
      price: "7,000,000",
      removedPrice: "50,000",
    },
    {
      image:
        "https://th.bing.com/th/id/R.d76850e68425d66df3dae03d5aaffe4b?rik=T9mSiWpNsr1OPQ&riu=http%3a%2f%2fwww.soho.gi%2fimages%2flounge%2fjes22.jpg&ehk=NHe0%2b2L5styxXKRBq7VwYN2S3vFlvUEfoZd6elWbSqA%3d&risl=&pid=ImgRaw&r=0",
      name: "Potty",
      style: "Minialist flower post",
      price: "500,000",
      removedPrice: "50,000",
    },
  ];
  return (
    <>
      <div className="flex justify-center mb-[3vh]  ">
        <h1 className="font-Lato text-4xl ">Our Products</h1>
      </div>
      <div className="grid grid-cols-4 gap-3 mx-[2vw]">
        {Array.map((item) => {
          return (
            <div className="bg-gray-100 flex  flex-col h-[50vh] overflow-hidden">
                    <img
                src={`${item.image}`}
                alt=""
                className="w-[34vw] h-[70%] object-cover  "
                
              />
              <div className="mt-2 mx-4 ">
                    <h1 className=" text-3xl font-semibold ">{item.name}</h1>
                    <p className="mt-3">{item.style}</p>
                    <h1 className=" text-[120%] mt-3">{item.price}</h1>
                    </div>
                    </div>
                    
             
                   
             
         
          
          );
        })}
        
      </div>
      <div className=" flex justify-center text-orange-400  mt-9">
          <button className="border border-orange-400 px-[3%] py-2">Show More</button>
        </div>
    </>
  );
}

export default GridsPicture;
