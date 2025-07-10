import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "HTML5",
    "TailwindCSS",
    "CSS3",
    "React",
    "Figma",
    "SAP UI5"
  ];

  const backendSkills = ["Node.js", "Python", "Java"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 md:px-10 bg-transparent"
    >
      <RevealOnScroll>
        <div className="w-full max-w-26xl mx-auto">
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
    
          {/* Description and Skills Section */}
          
          <div className="bg-yellow-500/20 rounded-2xl p-3 border border-white/80 transition-all">
            <h3 className="ml-5 text-3xl font-semibold mb-4 text-white">Skills</h3>

            <div className="ml-8 grid grid-cols-1 md:grid-cols-2 gap-2">
              
              <div className="p-0 ">
                <h3 className="text-2xl font-semibold mb-4 text-white">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-yellow-400 py-2 px-10 rounded-full text-base hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <p>{}</p>
              
              <div className="p-1">
                <h3 className="text-2xl font-semibold mb-4 text-white">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-yellow-400 py-2 px-10 rounded-full text-base hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* WE*/} 

          <div className="mt-10">
            <div className="bg-yellow-500/20 p-8 rounded-2xl border border-white/80 transition-all">
              <h3 className="text-3xl font-semibold mb-4 text-white">Work Experience</h3>
              <div className="text-gray-300 text-base md:text-lg space-y-3">
                <div>
                  <h4 className="font-semibold text-white">
                    App Development Associate – Accenture (2024 - Present)
                  </h4>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Familiarity with the Software Development Lifecycle and Agile methodologies.</li>
                    <li>Exceptional problem-solving and analytical thinking skills.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
           
            <div className="bg-yellow-500/20 p-8 rounded-2xl border border-white/80 transition-all">
              <h3 className="text-3xl font-semibold mb-4 text-white">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-base md:text-lg">
                <li>
                  <strong>B.S. in Computer Science</strong> – Calicut University (2020–2023)
                </li>
                <li>Relevant Coursework: Data Structures, Web Development, ...</li>
              </ul>
            </div>

            
            <div className="bg-yellow-500/20 p-8 rounded-2xl border border-white/80 transition-all">
              <h3 className="text-3xl font-semibold mb-4 text-white">Internship</h3>
              <div className="text-gray-300 text-base md:text-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-white">
                    React Intern – SkyNiche (2023)
                  </h4>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Built responsive interfaces using React.js.</li>
                    <li>Integrated frontend components with REST APIs.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Web Development – Bolt IoT (2023)
                  </h4>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Developed dynamic web applications using HTML, CSS, and JavaScript.</li>
                    <li>Gained exposure to full-stack development concepts.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
