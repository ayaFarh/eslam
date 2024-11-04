
import React from 'react'

export default function Skills() {
const skills =[
  {name:"c#" ,img:"../assets/Csharp_Logo.png"},
  {name:"LINQ",img:"https://unity3d.college/wp-content/uploads/2017/07/Featured-1.jpg"},
  {name:" ASP.NET Core",img:"https://www.keenesystems.com/hubfs/250300p1323EDNmainDotNetCore2.png"},
  {name:"OOP",img:"https://www.shutterstock.com/image-vector/flat-design-people-oop-object-260nw-2028086048.jpg"},
  {name:"vb.net",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtDB2snCI__zxHEP1S7i8emt3sJTbxPYRyg&s"},
  {name:"Micro Services",img:"https://miro.medium.com/v2/resize:fit:1200/1*1hBwhZ--xEVY35z5owT1Qw.jpeg"},
  {name:"ocelot api gateway",img:"https://api.nuget.org/v3-flatcontainer/ocelot/23.3.3/icon"},
  {name:"rabbitmq",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mJszsyVmqZyBgG5uGayWawB992p4KfLTZg&s"},
  {name:"Docker",img:"https://images.ctfassets.net/o7xu9whrs0u9/4sYuVlC3grWV9xqiALyYr2/a52875856c016db3eb86c1d8adced886/Docker.logo2_.png"},
  {name:"MS Sql",img:"https://datawarehouse.io/wp-content/uploads/2020/04/MSSQL-1.png"},
  {name:"MySQL",img:"https://cdn.intuji.com/2023/10/MySQL.png"},
  {name:"JavaScript",img:"../assets/javaseript.webp"},
  {name:"html5",img:"../assets/html.jpg"},
  {name:"css3",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kh4jlda56h8apektuRIxuOkpdOQ5GpAEGg&s"},
  {name:"bootstrap",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjBk613yaZ_qm31ZcS9e5zYf2JFcLXPkOZQ&s"},
  {name:"AngularJs",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkHgan2Q8Xx5VBIFH6VoCczkUXKiJaTNLng&s"},
  {name:"agile scrum",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJc-w1iZH9Hw3v6_MM88ag8sdTFvzoOD77QQ&s"},
]

  return (
    <section className='bg-black relative z-10  py-10'>
      <div className='containerA '>
      <h3 className='text-3xl text-white font-bold mb-10 text-center H3A'>My Skills</h3>
      <div className="grid grid-cols-12 gap-4">
  {skills.map((skill, index) => (
    <div key={index} className="col-span-6 md:col-span-4 lg:col-span-2 rounded-xl overflow-hidden text-center shadow-2xl shadow-gray-400 hover:rotate-6 transition-all duration-300">
      <div className='bg-white'>
        <img src={skill.img} alt="" className="w-full h-[150px]  object-contain" />
      </div>
    </div>
  ))}
</div>
    </div>
    </section>
  )
}
