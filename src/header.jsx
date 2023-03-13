import React,{Component} from "react"
import urLogo from  './/ur-logo.jpg'
function Header(){
    return(
     <div className="bg-white text-black flex pl-6">
      
      <div>
        <img className='w-52' src={urLogo} alt="ur-logo" />
      </div>
<div className='flex-col'>
      <div className="bg-white text-black flex pl-10">
      <div className="flex space-x-3 bg-firstHeader h-11 font-headerFontWeight font-headerFont text-white text-headerFontSize">
        <div>UR COLLEGES</div>
        <div>STAFF</div>
      </div>
       <div className="flex space-x-5 pl-5 font-headerFontWeight font-headerFont text-headerFontSize">
        <h1>UR CENTRES</h1>
        <h1>ADMISSIONS</h1>
        <h1>LIBRARY</h1>
        <h1>JOURNALS</h1>
        <h1>SWEDEN COOPEARTION</h1>
        <h1>MAIL</h1>
        <h1>CONTACT US</h1>
       </div>
     </div>
     <div className='flex space-x-20 bg-headerColor h-10 min-w-max ml-10 font-headerFontWeight font-headerFont text-white '>
      <h1>About UR</h1>
      <h1>Study at UR</h1>
      <h1>Students</h1>
      <h1>Research</h1>
      <h1>Almni</h1>
      <h1>Media Center</h1>
     </div>
     </div>
     </div>
    )
   }
   export default Header