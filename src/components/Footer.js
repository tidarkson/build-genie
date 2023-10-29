import React from 'react'
import footer from '../images/footer-bg-1.jpg'

export const Footer = () => {
    return (
        <section style={{ backgroundImage: `url(${footer})` }} className='bg-cover bg-no-repeat bg-center'>
            <div className='flex flex-col xl:grid grid-cols-3 px-5 lg:px-20 py-28 text-white gap-8 backdrop-brightness-50 '>
                <div className='flex flex-col gap-5 xl:px-6'>
                    <div>
                        <h3 className='font-semibold text-xl light-blue-text'>BUILD GENIE</h3>
                    </div>
                    <div>
                        <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus facere modi possimus dignissimos, aliquam nobis eaque? Voluptatem magnam quisquam rem.</p>
                    </div>

                    <div className='flex'>
                        <input type="text" placeholder='Email Address' className='w-4/6 px-4 rounded-tl rounded-bl bg-slate-600 text-white py-2' />
                        <button className='light-blue-bg px-5 rounded-tr rounded-br h-10'>Subscribe</button>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div>
                        <p className='font-semibold text-xl'>Useful Links</p>

                        <ul className='flex flex-col gap-5 pt-6'>
                            <li className='text-sm'>Google</li>
                            <li className='text-sm'>Dribble</li>
                            <li className='text-sm'>LinkedIn</li>
                            <li className='text-sm'>Wikepedia</li>
                        </ul>
                    </div>

                    <div>
                        <p className='font-semibold text-xl'>Resources</p>

                        <ul className='flex flex-col gap-5 pt-6'>
                            <li className='text-sm'>Support</li>
                            <li className='text-sm'>Dashboard</li>
                            <li className='text-sm'>Drivers</li>
                            <li className='text-sm'>Project</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-6'>
                    <p className='font-semibold text-xl'>Contact Information</p>
                    <p className='text-sm'>example@support.com</p>
                    <p className='text-sm'>5 xyz st., abc, alexandria, egypt.</p>
                    <p className='text-sm'>+20123456789</p>
                </div>
            </div>
        </section>
    )
}
