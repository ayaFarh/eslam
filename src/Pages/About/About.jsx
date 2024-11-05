import React from 'react'
import { CiHeadphones, CiSaveDown2 } from 'react-icons/ci'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function About() {



  return<>
   <section className='bg-gray-100 py-10 '>
    <div className='containerA'>
     
   <div className='grid grid-cols-12 gap-4'>
   <div className='containerA  col-span-12 md:col-span-4 text-center m-auto relative z-10 before:w-full before:h-full before:absolute before:border-4 before:border-black before:rounded before:top-[-20px]  before:left-[-20px] before:z-[-1]  '>
  <img src='../assets/WhatsApp Image 2024-10-27 at 8.43.23 PM.jpeg' alt='' className='w-full min-h-full object-cover'/>
    </div>

   <div className='col-span-12 md:col-span-8    '>
   <h2 className='text-3xl font-bold my-4'>HELLO</h2>
    <p className='mb-4 pb-4 border-b-2 border-gray-400 border-opacity-50 border-dotted'>
    I am Eslam Tarek, born at 1992, graduated from Ain Shams University faculty of Arts- Now I am a full-stack
Developer at Paysky
I am trying to accomplish higher levels of experience in every job I work at.
I have a very good knowledge of Microsoft Framework Tech (.Net)
    </p>
    

    <div className='my-2 md:flex justify-between items-center w-full md:w-[75%]'>
    <h3 className='text-lg font-bold'>Name :<span className='text-gray-500'> Eslam Tarek </span></h3>
    <h3 className='text-lg font-bold'>Jop title :<span className='text-gray-500'> Fullstack .NET Software Engineer. </span></h3>  
    </div>

    <div>
      <h4 className='text-lg font-bold mb-2'>Education :</h4>
      <p className='text-gray-500 font-bold'><span className='text-black'>1-</span> ministry of defence information systems institute 2015</p>
      <p className='text-gray-500 font-bold'><span className='text-black'>2-</span> Web Developing Diploma from Russian Cultural Center 2016</p>
    </div>

    <div className='my-4 block md:flex  items-center w-full md:w-[75%]'>
    <a href="../assets/Eslam Tarek.pdf" download="Eslam_Tarek_CV.pdf" className='btn-primary  min-w-[150px] hover:bg-black hover:text-white transition-all duration-300 block w-fit'>Downlaod cv <CiSaveDown2 className='inline' /></a>
    <a href=""  className='btn-primary min-w-[150px] md:mx-4 block w-fit hover:bg-black hover:text-white transition-all duration-300'>Contact Me <CiHeadphones className='inline' /></a>
    </div>
    </div>

   
   </div>
    </div>
   </section>
  </>
}
