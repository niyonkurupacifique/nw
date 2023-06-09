import React,{Component, useState} from "react"
import Footer from "./footer"
import card1 from './/card1.png'
import card2 from './/card2.png'
import card3 from './/card3.png'
import card11 from './/card11.jpg'
import card22 from './/card22.jpg'
import card33 from './/card33.jpg'
import altoni1 from './/arton1749.jpg'
import altoni2 from './/arton1751.jpg'
import altoni3 from './/arton1760.jpg'
import altoni4 from './/arton1772.jpg'
import ifoto1 from './/ifotooo1.jpg'
import img1 from './/img1.jpg'
import img2 from './/img2.png'
import img3 from './/img3.jpg'
import img4 from './/img4.jpg'
import img5 from './/spic1.jpg'
import img6 from './/spic2.jpg'



import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';



function Body(){
   const[months]=useState("Feb")
   const [day]=useState(12)
   const [showmore,setShowmore]=useState(false)

     function handleshowmore(){
        setShowmore(true)
        console.log(useState)
     }

 return(
  <div className='h-screen'>
  <div className='text-center p-11 bg-white text-blue-800  font-whystudyurfontweight font-headerFont text-whystudyurFontSize'>
  Why Choose UR ?
  </div>
  <div className='flex gap-1   '>
    <div className='bg-headerColor basis-1/12'></div>
    <div className='bg-headerColor basis-4/12 items-center'>
    <img className='pl-6' src={card1} alt="image" />
    <h1 className='pl-2 ml-3  text-cardColor text-cardsFontSize font-headerFontWeight font-headerFont'>WE'RE ON THE RISE</h1>
    <h className='pl-2 text-white'>Ranked in the world's top 100 young<br/><span className='px-16'>Universities</span></h>
    </div>
    <div className='bg-headerColor basis-4/12 '>
    <img className='pl-6' src={card2} alt="image" />
    <h1 className='pl-6 text-cardColor text-cardsFontSize font-headerFontWeight font-headerFont'>BEST COURSES</h1>
    <p className='pl-6 text-white'>UR Courses are ranked by Students as the<br/>best</p>
    </div>
    <div className=' bg-firstHeader basis-4/12'>
    <img src={card3} alt="image" />
    <h1 className='pl-6 text-cardColor text-cardsFontSize font-headerFontWeight font-headerFont'>FACTS&FIGURES</h1>
    <p className='pl-6 text-white capitalize'>the university of rwanda is a public research<br/>University</p>
    </div>
    <div className=' bg-firstHeader basis-1/12'></div>

    
  </div>
  <div className="grid grid-cols-3 pt-10 gap-4">
    <div className=' relative pl-20'>
        <img src={card11} alt="card" />
        <h1 className='absolute bottom-3 w-36 text-center   bg-black text-white rounded-xl'>Programmes</h1>
    </div>
    <div className="relative">
    <img src={card22} alt="card" /> 
    <h1 className='absolute bottom-3 w-36 text-center   bg-black text-white rounded-xl'>tour our campus</h1>
    </div>
    <div className="relative">
    <img className='w-80' src={card33} alt="card" />
    <h1 className='absolute bottom-3 w-36 text-center bg-black text-white rounded-xl'>our community engagment</h1>
    </div>
  </div>
  <div className="grid grid-cols-4 pt-7 pl-20">
    <div className="flex flex-col h-6 text-blue-500">
   <h1 className="bg-white text-blue-800  font-whystudyurfontweight font-headerFont text-whystudyurFontSize pl-8 underline underline-offset-8">Latest News</h1>
   <div className="flex mt-4 space-x-5">
    <div>
        <img src={altoni1} alt="altoni" />
    </div>
    <div>
        
    Nyarugenge Campus men’s team and Busogo women crowned champions
    </div>
   </div>
   <div className="flex mt-4 space-x-5">
    <div>
        <img src={altoni2} alt="altoni" />
    </div>
    <div>
        
    UR and NTU seal partnership to accelerate learning through technology 
    </div>
   </div>
  
  
   <div className='pl-11 text-blue-700'>
    <button onClick={handleshowmore}>{showmore?'less news':'more news'}</button>
    </div>
    </div>
    <div className="bg-white text-blue-800  font-whystudyurfontweight font-headerFont text-whystudyurFontSize pl-10 space-y-10">
        <h1 className='mt-1 underline underline-offset-8'>Upcoming events</h1>
        <div className="flex space-x-4 mt-2">
            <div className='bg-blue-600 text-white h-24'>
         <p> {months}</p>
         <p> {day}</p>
        </div>
            <div className='text-sm'>
            Research Cooperation for Socioeconomic Transformation  Impact of 20 years of Research<br/> Cooperation between Rwanda and Sweden
            
            </div>
        </div>
        <div className="flex space-x-4 mt-40">
            <div className='bg-blue-600 text-white h-24'>
         <p> {months}</p>
         <p> {day}</p>
        </div>
            <div className='text-sm'>
            Research <br/>Cooperation for<br/> Socioeconomic<br/> Transformation <br/>– Impact of 20 years <br/>of Research<br/> Cooperation between Rwanda and Sweden
            
            </div>
        </div>

    </div>
    <div>
            <div className="flex flex-col">
   <h1 className="bg-white text-blue-800  font-whystudyurfontweight font-headerFont text-whystudyurFontSize pl-8 underline underline-offset-8">Announcement</h1>
   <div className="flex mt-6 space-x-5">
    
   
        
    University of rwanda entry <br/>requirements 2023<br/>

   </div>
   <div className="flex mt-6 space-x-5">
   
    
        
    invitation to the oral <br/>interview exam to the successful <br/> candidates for the position of<br/>research nurse under NHR global<br/> research unit along global surgery

   </div>
   <div className="flex mt-6 space-x-5">
   
    
        
   Announcement to Register for Entry Exam in Bachelor of Medicine and Surgery with Honours & Bsc with honors in<br/> Dental Surgery Programs

   </div>
   <div className="flex mt-6 space-x-5">

        
    UR & KSU relations gain momentum with the creation of Kent State University Centre in<br/>Rwanda

    
   </div>
   <div className='pl-11 text-blue-700'>see all news</div>
    </div>
    </div>
    <div className="flex">
        <div>
<img src={ifoto1} alt="" />
        </div>
       
    </div>


  </div>
 <div className='flex  pt-10 pl-3 space-x-2'>
    <div>
        <img src={img1} alt="" />
    </div>
    <div>
    <img src={img2} alt="" /> 
    </div>
    <div>
    <img src={img3} alt="" />  
    </div>
    <div>
    <img src={img4} alt="" />  
    </div>

 </div>
 <div className="flex justify-center pt-4 text-center p-11 bg-white text-blue-800  font-whystudyurfontweight font-headerFont text-whystudyurFontSize">
    <h1>Our Partner Universities<br/>
Connect with UR</h1>
 </div>
 <div className="flex flex-row px-5 space-x-3 bg-black bg-transparent">
    <div>
        <h1 className="text-center underline underline-offset-8 decoration-blue-500 bg-white text-blue-800  font-whystudyurfontweight font-headerFont text-whystudyurFontSize">Featured Researcher</h1>
        <img src={img5} alt="" />
    </div>
    <div>
    <h1 className="text-center underline underline-offset-8 decoration-blue-500 bg-white text-blue-800  font-whystudyurfontweight font-headerFont text-whystudyurFontSize">Women at UR</h1>
        <img src={img6} alt="" />
    </div>
    <div>
    <div className="h-full">
    <h1 className="text-center underline underline-offset-8 decoration-blue-500 bg-white text-blue-800  font-whystudyurfontweight font-headerFont text-whystudyurFontSize">Our videos</h1>
    <iframe width="380" height="340" src="https://www.youtube.com/embed/AScmsMb2Lzs" title="🔴LIVE: UR GRADUATION CEREMONY 18-11-2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>

 </div>
 <div>
    <Footer></Footer>
 </div>
 
  </div>
 )
}
export default Body