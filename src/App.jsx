import React from "react";
import "./App.css";
import Navbar from "./furnitureWebsite.jsx/Navbar";

import GridsPicture from "./furnitureWebsite.jsx/GridsPicture";
import AfterNavbar from "./furnitureWebsite.jsx/AfterNavbar";
import RoomsInspiration from "./furnitureWebsite.jsx/RoomsInspiration";

function App() {
  return (
    <div>
      <Navbar />
      <AfterNavbar/>
   
      <GridsPicture/>
      <RoomsInspiration/>
    </div>
  );
}

export default App;



// git remote add origin https://github.com/Sabdhx/Ecommerse-Website.git
// git branch -M main
// git push -u origin main