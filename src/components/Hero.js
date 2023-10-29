import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi'
import {  AiOutlineInstagram } from 'react-icons/ai'
import { BsPlayCircleFill } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { BsYoutube } from 'react-icons/bs'
import illustration from '../images/illustration-1.webp'

export const Hero = () => {
    return (
        <section className='py-16 lg:grid grid-cols-2 px-4 lg:px-20 text-white'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-8 py-2'>
                    <BiLogoFacebook  className='text-xl'/>
                    <BsYoutube  className='text-xl'/>
                    <AiOutlineInstagram className='text-xl' />
                    <FaSquareXTwitter  className='text-xl'/>
                </div>
                <div>
                    <span className='uppercase font-bold light-blue-text'>• it Solutions •</span>
                </div>
                <div className='flex flex-wrap lg:flex-col gap-2 lg:gap-8'>
                    <h3 className='text-3xl lg:text-6xl font-bold'>Providing The Best</h3>
                    <h3 className='text-3xl lg:text-6xl font-bold'>Services & IT</h3>
                    <h3 className='text-3xl lg:text-6xl font-bold light-blue-text'>Solutions</h3>
                    <p className='text-slate-300 lg:text-lg max-w-lg py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto dolorum inventore totam adipisci</p>
                </div>

                <div className='flex items-center gap-6'>
                    <button className='px-8 lg:px-12 py-4 border-2 light-blue-border rounded-tr-2xl rounded-bl-2xl light-blue-text font-semibold tracking-wide'>Start Now</button>
                    <button className='bg-white rounded-full'>
                        <BsPlayCircleFill className='text-6xl light-blue-text outline-none ripple '/>
                    </button>
                </div>
            </div>

            <div className='flex items-center justify-center'>
                <img src={illustration} alt="" className='w-5/6'/>
            </div>
        </section>
    )
}
