import { useEffect } from 'react';
export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';

    },[menuOpen]);

    return (
        <nav className="relative top-0 w- z-40 border-b border-white/1 shadow-lg ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-25 ">   
                    <a href="#home" className="font-Press Start 2P text-xl font-bold text-white hover:text-blue-500 transition-colors duration-300 ">
                        MyPortfolio
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev)=> !prev)}> 
                      &#9776;
                    </div>
 
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-blue-500 transition-colors duration-300 ">{""}HOME{""}</a>
                        <a href="#about" className="text-white hover:text-blue-500 transition-colors duration-300">{""}ABOUT{""}</a>
                        <a href="#projects" className="text-white hover:text-blue-500 transition-colors duration-300">{""}PROJECT{""}</a>
                        <a href="#contact" className="text-white hover:text-blue-500 transition-colors duration-300">{""}CONTACT{""}</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
