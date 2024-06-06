import { formatDate } from 'date-fns'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageSlider from './ImageSlider'
const Homepage = () => {
    const[input,setInput]=useState('')
    const navigate = useNavigate()
    const submit = () => {  
        navigate(`/video/${input}`)
    }

    const time = formatDate(new Date(), 'HH:mm')
    const date =  formatDate(new Date(), 'EEE, d MMM ')

    const slides = [
      { url:"/public/connect1.jpg", title: "connect", desc: "<span style='color: black;font-weight: bold'>Connect</span> for premium video conferencing, ensuring seamless collaboration and communication." },
      { url: "/public/collab.jpg", title: "collaboration", desc:'MuseSphere simplifies online meetings, aiding <span style="color: black;font-weight: bold">businesses</span> in discussing diverse topics smoothly.' },
      { url: "/public/celeb1.jpg", title: "celebration", desc:'Join us for seamless <span style="color: black;font-weight: bold">celebration</span>, perfect for sharing special moments with friends and family.' }    
    ];
    const containerStyles = {
      width: "350px",
      height: "250px",
      margin: "0 auto",
    };

  return (
    <div className='max-w-screen-xl  px-14  pt-5  mx-auto'>
      <nav className='flex items-center justify-between'>
        <img src="/public/vite.svg" alt="" />
        <div className='flex items-center gap-5'>
        <div className='flex text-zinc-500 text-[18px] gap-2'>
        <p>{time}</p>
        <i className="ri-circle-fill text-[5px] mt-[7%]"></i>
        <p>{date}</p>
        </div>
        <div className='flex items-center gap-3 mr-10'>
        <i className="ri-question-line text-[23px] text-zinc-500 hover:bg-zinc-100 px-[6%] rounded-full"></i>
        <i className="ri-questionnaire-line text-[23px] text-zinc-500 hover:bg-zinc-100 px-[6%] rounded-full"></i>
        <i className="ri-settings-4-line text-[23px] text-zinc-500 hover:bg-zinc-100 px-[6%] rounded-full"></i>
        </div>
        <div className='rounded-full overflow-hidden'>
          <img className='w-[40px]' src="/public/user_icon.png" alt="" />
        </div>
        </div>
        
        </nav>

        <div className='flex items-center'>
            <div className='left-cont w-[50%] p-2'>
              <h1 className='mt-12 text-[44px] font-[550] text-[#1c1f2e] leading-[49px]'>Gather seamlessly with inclusive video calls and meetings!</h1>
              <p className='mt-4 text-zinc-500 w-[75%] text-[19px] font-[450]'>Join, collaborate, and rejoice from any corner of the globe with MuseSphere!</p>
              <div className='flex items-center mt-14 border-b-[1.2px] border-zinc-300 pb-12'>
              <div className=' border-[1.2px] border-zinc-600 text-zinc-500 p-2 rounded-md w-[50%] outline-none'>
              <i className="ri-keyboard-fill"></i>
              <input value={input} onChange={(e)=>setInput(e.target.value)} className='outline-none ml-2'  type="text" placeholder ='Enter your name...'  />
              </div>
              <button onClick={submit} className='text-zinc-500 font-[450] text-[16px] ml-5 hover: p-2  px-6 rounded-md    hover:bg-zinc-100 outline-none hover:text-blue-400   '>Join</button>
              </div> 

              <p className='mt-5 text-[17px] font-[400]'>Learn more about <span className='text-blue-400 font-[450]'>MuseSphere</span> </p>
            </div>

            <div className='right-cont w-[50%]  '>
            <div className='ml-24 mb-24'>
                {/* <img className='w-[400px] object-cover' src="/public/animation.jpg" alt="" /> */}
                <div className='' style={containerStyles}>
                 <ImageSlider slides={slides} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage

// <div className='bg-[#242736] w-[58%] h-[95.5%] rounded-xl absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%]'>
// <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
// <input value={input} onChange={(e)=>setInput(e.target.value)} className='border-2 border-black rounded-md py-1 px-2' type="text" placeholder='Enter your name...' />
// <button onClick={submit} className='ml-5 text-white text-sm py-1 px-4 bg-blue-400 rounded-md'>Join</button>
// </div> 
// </div>





//  <CCarousel controls transition="crossfade">
//  <CCarouselItem>
//    <CImage className="d-block w-100" src="/public/animation.jpg" alt="slide 1" />
//  </CCarouselItem>
//  <CCarouselItem>
//    <CImage className="d-block w-100" src="/public/animation.jpg" alt="slide 2" />
//  </CCarouselItem>
//  <CCarouselItem>
//    <CImage className="d-block w-100" src="/public/animation.jpg" alt="slide 3" />
//  </CCarouselItem>
// </CCarousel>