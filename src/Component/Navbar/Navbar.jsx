import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [visable, setVisable] = useState(true) 
const handelVisablity = ()=>{
  setVisable(!visable)
}
const ul = [
  {li:"Home",link:"/"},
  {li:"About me",link:"/about"},
  {li:"Skills",link:"/skills"},
  {li:"Projects",link:"/projects"},
  {li:"Contact me",link:"/contact"}]

  return (
    <>
  <section className='py-2 shadow-xl bg-black  fixed top-0 right-0 left-0 z-[999]'> 
  <div className=' md:flex justify-between items-center containerA'>
  <div className='py-2  flex justify-between items-center text-white'>
       <NavLink to="/" className='text-3xl font-bold'>Eslam</NavLink>
       <FaBars onClick={handelVisablity} className='text-2xl cursor-pointer md:hidden'/>
       </div>
 
 {visable ? (<div className=' md:flex  gap-10  items-center justify-center '>
    {ul.map((item,index)=><li key={index}  className='list-none mb-4 hover:bg-gray-300 hover:text-black py-2 px-2 min-w-[80px] rounded transition-all duration-300 text-center'><NavLink to={item.link} className={({isActive})=>(isActive ? "font-bold text-gray-500 " : "text-white hover:text-black font-bold ")}>{item.li}</NavLink></li>)}

    </div>): ""}
  </div>
  </section>
    
    </>
  )
}
