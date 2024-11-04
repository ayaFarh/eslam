import React from 'react'
import { Link } from 'react-router-dom';



export default function projects() {
    const projects = [
        { name: "yalla super app",img:"https://i.ytimg.com/vi/CnW4ksdurhM/maxresdefault.jpg",url:"https://www.yalla.online/" },
        { name: "yalla super app",img:"https://i.ytimg.com/vi/CnW4ksdurhM/maxresdefault.jpg",url:"https://www.yalla.online/" },
        { name: "yalla super app",img:"https://i.ytimg.com/vi/CnW4ksdurhM/maxresdefault.jpg",url:"https://www.yalla.online/" },
        { name: "yalla super app",img:"https://i.ytimg.com/vi/CnW4ksdurhM/maxresdefault.jpg",url:"https://www.yalla.online/" },
        
      
    ];
  return (
    <>
    <section className='py-10 bg-gray-200'>
        <div className='containerA'>
            <h3 className='text-3xl border-black font-bold mb-10 text-center H3A'>My Projects</h3>
           <div className='grid grid-cols-12 gap-4'>
            {projects.map((project, index) => (
               <div key={index} className='col-span-12 md:col-span-6 lg:col-span-4 relative rounded-xl overflow-hidden group bg-black'>
               <img src={project.img} alt={project.name} className='w-full h-full object-contain '/>'
               <div className='absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='flex flex-col items-center justify-center h-full text-white'>
                    <h3 className='font-bold'>{project.name}</h3>
                    <Link to={project.url} className='btn-primary bg-gray-400 text-black mt-4'>View Project</Link>
                  </div>
               </div>
               </div>
            ))}

           </div>
        </div>
    </section>
    </>
  );
}
