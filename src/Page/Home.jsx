import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../components";
import MyCarousel from "../components/Carasel/index"
const Home = () => {
  return (
  
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>   
              <MyCarousel />             
        </div>
        <About />

      </div>
    
  );
}

export default Home;
