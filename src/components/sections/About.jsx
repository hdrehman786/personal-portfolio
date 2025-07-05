import React from "react";
import RevealOnScrll from "../RevealOnScrll";

const About = () => {
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "shadcn/ui",
    "Git Version Control",
    "Bootstrap 5",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose ODM",
    "RESTful APIs",
    "JWT Authentication",
    "Bcrypt.js Hashing",
    "Firebase Auth",
    "Postman",
    "Git & GitHub",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScrll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-lg text-gray-300 mb-6">
              Full-stack developer specializing in MERN stack applications with a passion for building scalable, performant web solutions. Currently enhancing my expertise through hands-on development and continuous learning in cutting-edge technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm  
                    hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend Proficiency</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm  
                    hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Section - Now at the top */}
            <div className="mt-6 rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300">BS Computer Science</p>
                  <p className="text-gray-300">New Ports Institute of Communication and Economics</p>
                  <p className="text-gray-400 text-sm">Started 2025</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300">DAE - Electronics Engineering</p>
                  <p className="text-gray-300">SBTE Karachi</p>
                  <p className="text-gray-400 text-sm">2021 - 2024</p>
                </div>
              </div>
            </div>

            {/* Experience Section - Now below Education */}
            <div className="mt-6 rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Professional Experience</h3>
              <div className="space-y-6">
                {/* Internship */}
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold text-green-300">MERN Stack Intern</p>
                  <p className="text-gray-300">Appverse Technologies</p>
                  <p className="text-gray-400 text-sm mb-2">May 2025 - July 2025</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Developed customer-facing features using React hooks and modern ES6+ syntax</li>
                    <li>Built RESTful APIs with Express.js handling 500+ daily requests</li>
                    <li>Implemented Redux Toolkit for efficient application state management</li>
                    <li>Optimized MongoDB queries to reduce API response times by 40%</li>
                  </ul>
                </div>

                {/* Independent Projects */}
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold text-purple-300">Independent Development</p>
                  <p className="text-gray-400 text-sm mb-2">February 2025 - Present</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Developed full-stack MERN applications with end-to-end functionality</li>
                    <li>Created secure authentication systems using JWT and Bcrypt.js</li>
                    <li>Integrated Stripe payment processing for e-commerce applications</li>
                    <li>Implemented performance optimizations including code-splitting</li>
                  </ul>
                </div>

                {/* Projects Highlights */}
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="font-semibold text-blue-300">Technical Projects</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    <div>
                      <p className="font-medium text-cyan-300">E-commerce Platform</p>
                      <ul className="list-[square] list-inside text-gray-300 text-xs space-y-1">
                        <li>Stripe integration for payment processing</li>
                        <li>Product management dashboard</li>
                        <li>Persistent shopping cart functionality</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-cyan-300">Authentication System</p>
                      <ul className="list-[square] list-inside text-gray-300 text-xs space-y-1">
                        <li>JWT token authentication flow</li>
                        <li>Password hashing with Bcrypt</li>
                        <li>Protected routes implementation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScrll>
    </section>
  );
};

export default About;