import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const[input,setInput]=useState('')
    const navigate = useNavigate()
    const submit = () => {
        navigate(`/video/${input}`)
    }
  return (
    <div className='bg-[#1c1f2e] w-screen h-screen'>
      <div className='bg-[#242736] w-[58%] h-[95.5%] rounded-xl absolute top-[50%] left-[30%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
        <input value={input} onChange={(e)=>setInput(e.target.value)} className='border-2 border-black rounded-md py-1 px-2' type="text" placeholder='Enter your name...' />
        <button onClick={submit} className='ml-5 text-white text-sm py-1 px-4 bg-blue-400 rounded-md'>Join</button>
    </div> 
      </div>
    </div>
  )
}

export default Homepage





