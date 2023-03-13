import React,{Component} from "react"
import Header from "./header"
import Backgound from "./background"
import Body from "./body"
import Footer from "./footer"

function App(){
 return(
  <div className='h-screen'>
  <div>
    <Header/>
  </div>
  <div>
    <Backgound/>
  </div>
  <div>
<Body/>
  </div>
  <div>
   <div>
    
   </div>
  </div>
  <div>
  <Footer/>

  </div>
  
  </div>
 )
}
export default App