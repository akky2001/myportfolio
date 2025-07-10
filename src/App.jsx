import React, { useState } from 'react'
import './App.css'
import './index.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu.jsx'
import { Home } from './components/section/Home.jsx'
import { About } from './components/section/About.jsx'
import { Projects } from './components/section/Project.jsx'
import { Contact } from './components/section/Contact.jsx'



function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div className={`min-h-screen transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`} >
         <Navbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
         <MobileMenu menuOpen ={menuOpen} setMenuOpen={setMenuOpen} />
         <Home/>
         
         <About/>
         <Projects />
         <Contact />


      </div>
    </>
  );
}

export default App
