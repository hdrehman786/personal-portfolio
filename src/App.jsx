import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import "./index.css";
import Navbar from './components/Navbar';
import MpbileMenue from './components/MpbileMenue';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="min-h-screen transition-opacity duration-700 opacity-100 flex flex-col justify-center items-center
        overflow-x-hidden
        ">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MpbileMenue menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default App;
