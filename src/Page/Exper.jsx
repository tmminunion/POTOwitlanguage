import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../components";
import MyCarousel from "../components/Carasel/index"
const Exper = () => {
  return (
  
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Experience />
        <Tech />
            
        </div>
       
        
      
      </div>
    
  );
}

export default Exper;
