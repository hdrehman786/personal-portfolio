// import React, { useState } from 'react'
// import RevealOnScrll from '../RevealOnScrll'
// import emailjs from "emailjs-com";
// import { toast } from 'react-toastify';
// const Contact = () => {
//     const [formData, setFormData] =useState({
//         name: "",
//         email: "",
//         message: ""
//     });
//     const handleSubmit = (e) => {
//         const SERVICE_ID = "service_b2r5pjj";
//         const TEMPLATE_ID = "template_rcmzslk";
//         const PUBLIC_KEY = "nO8kbcpVlZWULfL9z";

//         e.preventDefault();
//         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
//             .then((result) => {
//                 toast.success("Message Sent Successfully");
//                 setFormData({ name: "", email: "", message: "" });
//             }, (error) => {
//                 toast.error("Something went wrong");
//             });
//     }


//   return (
//     <section id='contact' className='min-h-screen flex items-center justify-center py-2'>
//     <RevealOnScrll>
//         <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
//         <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r
//          from-blue-700 to-cyan-400 bg-clip-text text-transparent">
//             Get In Touch
//         </h2>
//         <form className=" space-y-6" onSubmit={handleSubmit}>
//             <div className="relative">
//             <input type="text"
//              value={formData.name} 
//              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             id='name' name='name' required placeholder='Name...' className=' w-full bg-white/5 border border-white/10 
//             rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ' />
//             </div>
//             <div className="relative">
//             <input type="email"
//              value={formData.email} 
//              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             id='email' name='email' required placeholder='example@gmail.com' className=' w-full bg-white/5 border border-white/10 
//             rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ' />
//             </div>
//             <div className="relative">
//             <textarea  id='message'
//              value={formData.message} 
//              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//             name='message' required placeholder='Your Message' rows={5} className=' w-full bg-white/5 border border-white/10 
//             rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ' />
//             </div>
//             <button type='submit' className='bg-blue-500 w-full text-white py-3 px-6 rounded font-mediumt transition
//             relative overflow-hidden hover:translate-y-0.5 cursor-pointer hover:shadow[0_0_15px_rgba(59,130,246,0.40)]'>Send Message</button>
//         </form>
//         </div>
//     </RevealOnScrll>
//     </section>
//   )
// }

// export default Contact


import { useState } from "react";

import emailjs from "emailjs-com";
import RevealOnScrll from "../RevealOnScrll";
import { toast } from "react-toastify";
 const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = { ...formData, access_key: "3502800c-ade9-46ca-a09c-4faffa9968b0" };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
 
        toast.success("Message Sent Successfully");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Error! Please try again.");
        toast.error(status);
      }
    } catch (error) {
      setStatus("Network error! Please try again.");
      
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScrll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScrll>
    </section>
  );
};

export default Contact

