import React from 'react'
import { assets } from '../assets/assets.js'

function Hero() {
    return (
        <div className='w-full py-40  '>
            <div className='container  mx-auto '>
                <div className='flex items-center justify-center gap-6 mx-auto w-full  rounded-full py-1 mb-12 bg-amber-300 md:w-[30%]'>
                    <div className='flex items-center -space-x-3'>
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile1Img} alt="" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile2Img} alt="" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile3Img} alt="" />
                        <img className='w-8 h-8 rounded-full object-cover object-center' src={assets.profile4Img} alt="" />
                    </div>
                    <span>Trusted by 10k+ Clients</span>
                </div>
                 <h1 className='text-center text-4xl text-black/45 sm:text-5xl md:text-6xl lg:text-7xl'>
                    We Grow brands with 
                    <br />
                    <span className='text-amber-400'>Professional</span> Strategy
                 </h1>

                <p className='text-center font-semibold text-xl mx-w-xl mx-auto px-2 m-10'>AT our Agency, we take pride that deliver the projects that have ceativity, strategy, and technology</p>

                <div className='flex items-center justify-center gap-8'>
                    <button className='font-semibold bg-amber-400 px-4 py-3 rounded-full hover:scale-100 duration-150'>Contact us</button>
                    <button className='font-semibold bg-cyan-950 text-white px-4 py-3 rounded-full '>Feedback</button>
                </div>

                <div className='mt-12 mx-auto mx-w-xl '>
                    <img className='w-full h-full object-center' src={assets.heroImg} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Hero