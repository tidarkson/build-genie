import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {CiLight} from 'react-icons/ci'

export const Header = () => {
  return (
    <section className='px-5 lg:px-20 py-8 light-blue-bg text-white sticky top-0'>
        <header className='flex justify-between items-center justify-between'>
            <div>
                <h3 className='font-semibold text-xl'>BUILD GENIE</h3>
            </div>
            <div className='hidden xl:block'>
                <ul className='flex items-center justify-center gap-8 font-semibold'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Pages</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex gap-6'>
                <button><BsSearch className='text-2xl'/></button>
                <button className='border rounded p-1 bg-white text-black'><CiLight className='text-xl'/></button>
            </div>
        </header>
    </section>
  )
}
