import React, { useState } from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { Link } from 'react-router-dom'



export default function Home() {


  return  (
    <>
    <section className='h-screen bg-gray-300 pt-10 relative overflow-hidden'>
    
   
      <div className='w-[150%] md:w-[40%] absolute top-1/2 left-[-120px] md:top-0 md:left-0 md:rotate-[0deg] rotate-[20deg] md:z-0 z-10  flex flex-col  items-center justify-center md:h-full h-[70%] bg-gray-300 opacity-50 md:opacity-100'>
    <div className='text-white font-bold text-center md-rotate-[0deg] rotate-[-20deg] md:rotate-[0deg]'>
    <h2 className='text-2xl text-black'>Hi👋</h2>
    <h1 className='my-2 text-3xl text-flicker-in-glow text-black' >I am Eslam </h1>
    <p>Fullstack web developer <span className='text-black'>.Net</span></p>
    <div className='flex justify-center items-center text-black text-2xl gap-4 mt-4 '>
   <Link to="" className='hover:text-gray-200 transition-all duration-300'> <FaFacebook /></Link>
   <Link to=""  className='hover:text-gray-200 transition-all duration-300'> <FaLinkedin /></Link>
   <Link to="" className='hover:text-gray-200 transition-all duration-300'> <IoLogoGithub /></Link>
    
    
    </div>
    </div>
      </div>

      <div className='w-[100%] md:w-[60%] bg-black   h-[820px] md:rotate-12 absolute md:right-[-74px] top-0 flex items-center justify-center '>
      <div className="w-full h-full rotate-[-12deg] absolute top-[-100px] bg-[url('../assets/WhatsApp_Image_2024-10-31_at_5.51.40_PM-removebg-preview.png')] bg-cover bg-center">

      </div>
      </div>
      
  
    </section>
    
    </>
  )
}
