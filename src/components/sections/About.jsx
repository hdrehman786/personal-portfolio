import React from "react";
import RevealOnScrll from "../RevealOnScrll";

const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Redux",
    "shadcn",
    "GitHub",
    "Bootstrap",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API",
    "JWT (JSON Web Token)",
    "Bcrypt.js",
    "Firebase Authentication",
    "Postman (API Testing)",
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
            I'm a passionate and dedicated individual with a strong desire to learn and grow. I'm
            always looking for new challenges and opportunities to improve my skills and knowledge.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
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
              <h3 className="text-xl font-bold mb-4">Backend</h3>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="flex flex-wrap gap-2">
                <p className="text-lg text-gray-300 mb-6">
                  <span className="font-semibold">Full-Stack Web Development</span>
                  <br />
                  (LinkedIn Learning)
                  <br />
                  <span className="text-gray-400">2024 - 2025</span>
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  <span className="font-semibold">Diploma of Associate Engineering (DAE) - Electronics</span>
                  <br />
                  (SBTE Karachi)
                  <br />
                  <span className="text-gray-400">2021 - 2024</span>
                </p>
              </div>
            </div>


            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="flex flex-wrap gap-2">
                <p className=" text-small text-gray-300">
                  I have worked on various full-stack projects, gaining hands-on experience in both frontend and backend development. These projects were developed and deployed online using different platforms.
                </p>
                <ul className="list-disc list-inside  text-gray-400 px-3 py-2 rounded-lg text-sm">
                  <li>Authentication System (MERN) – User authentication with JWT, bcrypt, and MongoDB.</li>
                  <li>To-Do App (MERN) – CRUD operations with user-specific task management.</li>
                  <li>Weather App (React) – Real-time weather updates using an API.</li>
                  <li>E-commerce Website (React-based) – Product listing, cart, and checkout system.</li>
                  <li>Habit Tracker App – Helps users build and maintain habits with progress tracking.</li>
                </ul>
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
