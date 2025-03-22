import React, { useState } from 'react'
import RevealOnScrll from '../RevealOnScrll'
import emailjs from "emailjs-com";
import { toast } from 'react-toastify';
const Contact = () => {
    const [formData, setFormData] =useState({
        name: "",
        email: "",
        message: ""
    });
    const handleSubmit = (e) => {
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                toast.success("Message Sent Successfully");
                setFormData({ name: "", email: "", message: "" });
            }, (error) => {
                toast.error("Something went wrong");
            });
    }


  return (
    <section id='contact' className='min-h-screen flex items-center justify-center py-2'>
    <RevealOnScrll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r
         from-blue-700 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
        </h2>
        <form className=" space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
            <input type="text"
             value={formData.name} 
             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            id='name' name='name' required placeholder='Name...' className=' w-full bg-white/5 border border-white/10 
            rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ' />
            </div>
            <div className="relative">
            <input type="email"
             value={formData.email} 
             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            id='email' name='email' required placeholder='example@gmail.com' className=' w-full bg-white/5 border border-white/10 
            rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ' />
            </div>
            <div className="relative">
            <textarea  id='message'
             value={formData.message} 
             onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            name='message' required placeholder='Your Message' rows={5} className=' w-full bg-white/5 border border-white/10 
            rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 ' />
            </div>
            <button type='submit' className='bg-blue-500 w-full text-white py-3 px-6 rounded font-mediumt transition
            relative overflow-hidden hover:translate-y-0.5 cursor-pointer hover:shadow[0_0_15px_rgba(59,130,246,0.40)]'>Send Message</button>
        </form>
        </div>
    </RevealOnScrll>
    </section>
  )
}

export default Contact