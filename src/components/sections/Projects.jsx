import RevealOnScrll from "../RevealOnScrll"


const Projects = () => {
  return (
    <section id="projects" className=" flex justify-center items-center py-6 min-h-screen">
      <RevealOnScrll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all
         hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)]
          ">
              <h3 className=" text-xl mb-3 font-bold">E-Comerace Website</h3>
              <p className=" text-gray-400 mb-3">Architected a cutting-edge MERN e-commerce solution with microservices-inspired backend and dynamic frontend experiences. Implemented secure payment gateways, CI/CD deployment pipelines, and performant database queries using Mongoose. Transformed complex business requirements into an intuitive digital marketplace with 99% uptime reliability.</p>
              <div className=" flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/ mr-1 text-blue-500 px-3 py-1 rounded-full text-sm  
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=" flex justify-between underline items-center mt-4">
                <a href="https://cart-cove-e-comerace.vercel.app/" className="text-blue-500 hover:text-blue-800 transition-colors">View Project</a>
              </div>
            </div>
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all
         hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)]
          ">
              <h3 className=" text-xl mb-3 font-bold">Full-Stack Authentication</h3>
              <p className=" text-gray-400 mb-3">A full-stack Authentication application that allows users to register, login, email verify, and forget password features.</p>
              <div className=" flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose", "bcrypt", "jwt", "mailer.js"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/ mr-1 text-blue-500 px-3 py-1 rounded-full text-sm  
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=" flex justify-between underline items-center mt-4">
                <a href="https://authentication-6sfr.vercel.app/" className="text-blue-500 hover:text-blue-800 transition-colors">View Project</a>
              </div>
            </div>
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all
         hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)]
          ">
              <h3 className=" text-xl mb-3 font-bold">Habit Tracker</h3>
              <p className=" text-gray-400 mb-3">A Habit Tracker application that allows users to add, update, remove the habits.</p>
              <div className=" flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Redux Toolkit"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/ mr-1 text-blue-500 px-3 py-1 rounded-full text-sm  
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=" flex justify-between underline items-center mt-4">
                <a href="https://habitstracker-ruddy.vercel.app/" className="text-blue-500 hover:text-blue-800 transition-colors">View Project</a>
              </div>
            </div>
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all
         hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)]
          ">
              <h3 className=" text-xl mb-3 font-bold">Landing Page</h3>
              <p className=" text-gray-400 mb-3">A atractive landing page by video playing quality and full responsive on every device</p>
              <div className=" flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "CSS", "Other Google Resource"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/ mr-1 text-blue-500 px-3 py-1 rounded-full text-sm  
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=" flex justify-between underline items-center mt-4">
                <a href="https://landingpage-silk-iota.vercel.app/" className="text-blue-500 hover:text-blue-800 transition-colors">View Project</a>
              </div>
            </div>
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all
         hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)]
          ">
              <h3 className=" text-xl mb-3 font-bold">Todo List App</h3>
              <p className=" text-gray-400 mb-3">A full-stack task management application that allows users to add, update, delete, and mark tasks as completed.</p>
              <div className=" flex flex-wrap gap-2">
                {["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Mongoose"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/ mr-1 text-blue-500 px-3 py-1 rounded-full text-sm  
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=" flex justify-between underline items-center mt-4">
                <a href="https://todo-frontend-brown-xi.vercel.app/" className="text-blue-500 hover:text-blue-800 transition-colors">View Project</a>
              </div>
            </div>
            <div className=" p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all
         hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(50,130,246,0.1)]
          ">
              <h3 className=" text-xl mb-3 font-bold">All Assignment</h3>
              <p className=" text-gray-400 mb-3">A small list of my litle strugle from which i had started</p>
              <div className=" flex flex-wrap gap-2">
                {["React", "CSS", "Featch Api"].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/ mr-1 text-blue-500 px-3 py-1 rounded-full text-sm  
                      hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(50,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className=" flex justify-between underline items-center mt-4">
                <a href="https://all-assignment-javascript-2.vercel.app/" className="text-blue-500 hover:text-blue-800 transition-colors">View Project</a>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScrll>
    </section>
  )
}

export default Projects