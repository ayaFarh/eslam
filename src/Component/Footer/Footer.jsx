import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <>
  <section className='bg-black text-white py-10'>
 <div className='containerA flex flex-col justify-between items-center '>
 <Link to="" className='flex flex-col justify-center items-center '>
 <MdKeyboardDoubleArrowUp className='text-2xl arrow'/>
 <p className='my-2'>BACK TO TOP</p>
 </Link>
  <div className='my-2 text-2xl'>
  <Link to="" className='hover:text-gray-400 transition-all duration-300'> <FaFacebook className='inline '/></Link>
   <Link to=""  className='hover:text-gray-400 transition-all duration-300 mx-4'> <FaLinkedin  className='inline'/></Link>
   <Link to="" className='hover:text-gray-400 transition-all duration-300'> <IoLogoGithub  className='inline' /></Link>
  </div>
  <div>
    <p className='text-center'>@ 2024 Eslam Tarek <span className='text-gray-400'>all rights reserved</span></p>
  </div>
 </div>
  </section>
  
  </>
}
