import React from "react";
import urLogo from ".//ur-logoooo.png";
import twitter from ".//twitterpng.png";
import facebook from ".//facebookpng.png";
import inst from ".//insttt.jpg";
//import urLogo from  './/ur-logoooo.png'

function Footer() {
  return (
    <div className=" mt-8 grid grid-cols-4">
      <div className="bg-white text-blue-800  font-whystudyurfontweight font-headerFont  pl-10 space-y-10 ">
        <h1 className="text-black">ABOUT US</h1>
        <p>
          UR Facts and Figures<br></br>
          UR Statement and Concept<br></br>
          Vision and Mission<br></br>
          The Chancellor<br></br>
          Vice Chancellor's Office<br></br>
          Board of Governors<br></br>
          Administrative offices<br></br>
          Key Documents & Policies<br></br>
          Partnerships
        </p>
      </div>
      <div className="bg-white text-blue-800  font-whystudyurfontweight font-headerFont  pl-10 space-y-10">
        <h1 className="text-black">ACADEMIC</h1>
        Students<br></br>
        Colleges and Campuses Schools<br></br>
        Schools<br></br>
        Admission<br></br>
        International Students<br></br>
        Fee Structure<br></br>
        UR Bank accounts<br></br>
        Academic Calendar<br></br>
        Academic Regulations & Policies<br></br>
        Centres of excellence<br></br>
        E-Learning<br></br>
      </div>
      <div className="bg-white text-blue-800  font-whystudyurfontweight font-headerFont  pl-10 space-y-10">
        <h1 className="text-black">KEY LINKS</h1>
        UR brand guidelines<br></br>
        Our partner universities/institutions<br></br>
        Government Smart Admin System<br></br>
        E-mboni<br></br>
        MIFOTRA self-service portal<br></br>
        Class Representative Report Form<br></br>
        Students Evaluation of Module Teaching and Learning Form<br></br>
        UR weekly reporting form<br></br>
        DTLE<br></br>
      </div>
      <div className="bg-white text-blue-800  font-whystudyurfontweight font-headerFont  pl-10 space-y-10">
        <h1 className="text-black">ADDRESS</h1>
        KK 737 Street, Gikondo, Kigali PO BOX 4285 Kigali-Rwanda<br></br>
        info@ur.ac.rw<br></br>
      </div>
      <div className="flex pt-32 pl-10 border border-solid border-t-blue-300 border-x-blue-300 w-screen">
        <div>
          <img width={170} src={urLogo} alt="" />
        </div>
        <div className="flex flex-row ml-24 space-x-5 ">
          <img className="w-10 h-10" src={twitter} alt="" />
          <img className="w-10 h-10" src={facebook} alt="" />
          <img className="w-10 h-10" src={inst} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
