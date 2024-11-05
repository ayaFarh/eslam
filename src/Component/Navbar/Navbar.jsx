import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  const location = useLocation()
  const handleVisibility = () => {
    setVisible(!visible);
  };

  const handelLi = (e)=>{
    const screenWidth = window.innerWidth;
    if( screenWidth < 768 && (e.target.tagName === 'LI' || e.target.closest("a"))){
      setVisible(!visible);
    }
  }


 
  const ul = [
    { li: "Home", link: "home" },
    { li: "About me", link: "about" },
    { li: "Skills", link: "skills" },
    { li: "Projects", link: "projects" },
    { li: "Contact me", link: "contact" },
  ];

  return (
    <>
    <section className='py-3 shadow-xl bg-black fixed top-0 right-0 left-0 z-[999]'>
        <div className='md:flex justify-between items-center containerA'>
          <div className='py-2 flex justify-between items-center text-white'>
            <Link to="home" smooth={true} duration={500} className='text-3xl font-bold'>Eslam</Link>
            <FaBars onClick={handleVisibility}  className='text-2xl cursor-pointer md:hidden' />
          </div>

          {visible ? (
            <div className='md:flex gap-5 items-center justify-center'>
              {ul.map((item, index) => (
                <li  key={index} className='cursor-pointer list-none  m-auto text-center mb-6 md:mb-0' >
                  <Link to={item.link} smooth={true} duration={700}  offset={-60}  activeClass="active"  spy={true} className= "text-black text-white  hover:bg-gray-500 hover:text-black max-w-[160px] py-2  px-2   rounded transition-all duration-300 text-center font-bold inline-block min-w-[100px] " onClick={handelLi}>
                    {item.li}
                  </Link>
                </li>
              ))}
            </div>
          ) : ""}
        </div>
      </section>
    </>
  );
}
