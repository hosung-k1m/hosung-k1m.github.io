import { useEffect, useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio, About} from "./components";

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <div className='wrapper' ref={wrapperRef}>
          <div id="hero" className='z-10'>
            <Hero scrollContainer={wrapperRef} />
          </div>
          <div id="aboutMe" className='relative z-30 bg-gradient-to-b from-primary to-blue-900 mt-[-2px]'>
            <About />
          </div>
          <div id="projects" className='relative z-30 bg-blue-900'>
            <Portfolio />
          </div>
          <div id="experience" className='relative z-30 bg-blue-900'>
            <Experience />
          </div>
          <div id="contact" className='relative z-30 bg-blue-900'>
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
