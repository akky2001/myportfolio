export const Home = () => {
    return (
       <section id="Home" className="min-h-screen flex items-center justify-center">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-800 bg-clip-text text-transparent leading-right "> I'm Akhil Raveendran.</h1>

                <p className="w-245 text-gray-100 text-lg mb-8 mx-w-lg mx-auto "> 
                    A <span className="text-yellow-500">software engineer</span> with experience in application development, and testing. Proficient in React, JavaScript, HTML5, CSS3, Node.js, Java and Python,
                    Skilled in UI design, Figma, and front-end concepts like client-side/server-side rendering. Holds a degree in Computer Science with expertise in object-oriented design, algorithms, and data structures.
                </p>
                <div className="flex justify-center space-x-20">

                    <a href="#projects" className="text-lg bg-blue-500 text-white  px-10 py-5 rounded font-medium transition relative overflow-hidden  bg-gradient-to-r from-blue-500 to-cyan-800 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)}">View Projects</a>

                    <a href="#contact" className="text-lg border border-blue-500 text-white-500  px-15 py-5 rounded font-medium transition-all duration-200  
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)} hover:bg-gradient-to-r from-blue-500/30 to-cyan-800/30">Contact</a>

                </div>
                 </div>
        </section>
    );
}