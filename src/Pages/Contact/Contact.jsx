import React from 'react'

export default function Contact() {
  return <>
  <section className='py-12 bg-gray-200'>
    <div className='containerA text-center'>
<h3 className='text-3xl border-black font-bold mb-6 text-center H3A'>get in touch</h3>
<p className='mb-6 text-lg w-full md:w-1/2 m-auto border-b-2'>I'm thrilled to be in touch with you and genuinely appreciate this opportunity to connect. Looking forward to a productive and enjoyable collaboration ahead!</p>
<form className='w-full md:w-1/2  m-auto '>
<div>
    <input type='text' placeholder='Name' className='w-full border-l-4  border-b-4 border-black p-3 bg-transparent mb-4 outline-none'/>
</div>
<div>
    <input type='email' placeholder='Your Email'  className='w-full border-l-4 border-b-4 border-black p-3 bg-transparent mb-4 outline-none'/>
</div>
<div>
    <input type='phone' placeholder='Your Phone' className='w-full border-l-4 border-b-4 border-black p-3 bg-transparent mb-4 outline-none'/>
</div>
<div>
    <textarea type='' placeholder='Your Message'  className='w-full border-l-4 border-b-4 border-black p-3 bg-transparent mb-4 outline-none'/>
</div>
<div className='text-center w-1/2 mt-4 m-auto'>
<button type='button' className='border-l-4 border-r-4 border-black py-1 px-6 font-bold ' >submit</button>
</div>
</form>
    </div>
  </section>

  </>
}
