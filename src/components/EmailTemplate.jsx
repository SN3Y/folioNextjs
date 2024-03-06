'use client'
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function EmailTemplate() {

  const [message, setMessage] = useState()
  const form = useRef(undefined)

  const handleChange = (e) => {
    setMessage({...message, [e.currentTarget.name]: e.currentTarget.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
      if (message) await fetch("/api/send", {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
          'content-type' : 'application/json'
        }
      }).then(data => data.json()).then(data => console.log(data))
      form.current.submit()
  }






return(
    <div className="grid bg-slate-200 w-[50vw] max-sm:w-[90vw] p-4 text-center justify-center rounded-md max-sm:overflow-hidden">
      <div className="justify-center">
        <h1 className="text-slate-700 font-mono text-4xl font-semibold">Sneyder Santos</h1>
          <div className="group flex justify-center items-center gap-2 border border-green-700  hover:bg-green-700 rounded-md m-2">
            <FaWhatsapp className="text-green-700 group-hover:text-white" />
            <a href="https://wa.me/573223667651" className="group-hover:text-white text-green-700 font-semibold" target="_blank">
            Chat on WhatsApp
            </a>
          </div>
      </div>
      
        <form ref={form} onSubmit={handleSubmit} action="/" className="flex not-scroll-bar text-slate-50 flex-col font-bold gap-2 p-4 bg-slate-700 my-4">
        <h1 className="text-center my-4">Send an email</h1>
          <input onChange={handleChange} type="email" name="email" placeholder="email" className="p-2 text-black" required/>
          
          <textarea onChange={handleChange} type="text" rows="10" name="message" cols="30" className="h-16 px-2 resize-none  text-black" placeholder="message" required/>
          <div className="flex w-full justify-center">
          <button type="submit" className="border rounded-md hover:bg-slate-500 active:bg-slate-500 w-fit px-6">Send</button>
          </div>
        </form>
    </div>
    
  )
};
