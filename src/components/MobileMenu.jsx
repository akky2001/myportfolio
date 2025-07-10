import { useEffect } from 'react';
export const MobileMenu = ({menuOpen, setMenuOpen}) => {


    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black/95 z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out
         ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
         }`}>

        <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setMenuOpen(false)} aria-label='Close Menu'>
            &times;
        </button>
        <div className=" flex flex-col items-center space-y-6 text-white text-lg">
            <a href="#home" className="hover:text-blue-500 transition-colors duration-300 " onClick={()=> setMenuOpen(false)}>home</a>
            <a href="#about" className="hover:text-blue-500 transition-colors duration-300" onClick={()=> setMenuOpen(false)}>about</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors duration-300" onClick={()=> setMenuOpen(false)}>projects</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors duration-300" onClick={()=> setMenuOpen(false)}>contact</a>
        </div>


        </div>
    );
}
