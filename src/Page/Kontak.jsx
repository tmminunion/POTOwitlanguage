import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../components";
import MyCarousel from "../components/Carasel/index"
const Kontak = () => {
  return (
  
      <div className='relative z-0 bg-primary'>

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    
  );
}

export default Kontak;
