import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const handleVisibility = () => {
    setVisible(!visible);
  };

  const ul = [
    { li: "Home", link: "home" },
    { li: "About me", link: "about" },
    { li: "Skills", link: "skills" },
    { li: "Projects", link: "projects" },
    { li: "Contact me", link: "contact" },
  ];

  return (
    <>
      <section className='py-2 shadow-xl bg-black fixed top-0 right-0 left-0 z-[999]'>
        <div className='md:flex justify-between items-center containerA'>
          <div className='py-2 flex justify-between items-center text-white'>
            <Link to="home" smooth={true} duration={500} className='text-3xl font-bold'>Eslam</Link>
            <FaBars onClick={handleVisibility} className='text-2xl cursor-pointer md:hidden' />
          </div>

          {visible ? (
            <div className='md:flex gap-10 items-center justify-center'>
              {ul.map((item, index) => (
                <li key={index} className='list-none mb-4 hover:bg-gray-300 hover:text-black py-2 px-2 min-w-[80px] rounded transition-all duration-300 text-center'>
                  <Link to={item.link} smooth={true} duration={700}  offset={-60} className='text-white hover:text-black font-bold'>
                    {item.li}
                  </Link>
                </li>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
