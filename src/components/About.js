import React from 'react'
import illustration from '../images/illustration2.webp'
import illustration2 from '../images/illustrations3.webp'
import section from '../images/section-bg.webp'



export const About = () => {

    return (
        <section>
            <section className='flex flex-col-reverse xl:grid grid-cols-2 px-5 lg:px-20 py-20'>
                <div className='py-8'>
                    <div className='flex flex-col gap-4'>
                        <span className='uppercase font-semibold light-blue-text'>• ABOUT US •</span>
                        <h3 className='text-3xl lg:text-5xl lg:font-semibold text-white'>Trusted By Worldwide Clients Since <span className='light-blue-text'>1980</span>.</h3>
                        <p className='text-slate-300 text-lg xl:max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
                    </div>

                    <div className='flex flex-col lg:grid grid-cols-2 gap-8 text-white my-8'>
                        <div className='flex items-center justify-center gap-4'>
                            <div>
                                <img src='' alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className='text-2xl font-semibold'>First On Field</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-4'>
                            <div>
                                <img src='' alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className='text-2xl font-semibold'>Easy To Reach</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-4'>
                            <div>
                                <img src='' alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className='text-2xl font-semibold'>Worldwide Services</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-4'>
                            <div>
                                <img src='' alt="" />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h4 className='text-2xl font-semibold'>24/7 Support</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</p>
                            </div>
                        </div>

                        <button className=' py-4 w-3/6 md:w-2/6 xl:w-4/6 light-blue-bg rounded-tr-2xl rounded-bl-2xl text-white font-semibold tracking-wide'>Get In Touch</button>

                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <img src={illustration} alt="" className='w-5/6 ' />
                </div>
            </section>

            <section>
                <section className='flex flex-col xl:grid grid-cols-2 p-5 lg:p-20 items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <img src={illustration2} alt="" className='w-5/6' />
                    </div>

                    <div className='py-8'>
                        <div className='flex flex-col gap-4'>
                            <span className='uppercase font-semibold light-blue-text'>• why choose US •</span>
                            <h3 className='text-3xl lg:text-5xl lg:font-semibold text-white'>Why Our Customers Choose <span className='light-blue-text'>Working</span> With Us </h3>
                            <p className='text-slate-300 text-lg xl:max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
                        </div>

                        <div className='flex flex-col gap-10 text-white my-8'>
                            <div className='flex gap-4'>
                                <div>
                                    <h3 className='text-5xl font-bold light-blue-text'>01.</h3>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-2xl font-semibold'>Latest Texhnologies</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div>
                                    <h3 className='text-5xl font-bold light-blue-text'>02.</h3>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-2xl font-semibold'>Unique Solutions</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div>
                                    <h3 className='text-5xl font-bold light-blue-text'>03.</h3>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h4 className='text-2xl font-semibold'>Powerful Strategies</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</p>
                                </div>
                            </div>

                            <button className=' py-4 w-3/6 md:w-2/6 xl:w-4/6 light-blue-bg rounded-tr-2xl rounded-bl-2xl text-white font-semibold tracking-wide'>Get In Touch</button>

                        </div>
                    </div>
                </section>
            </section>

            <section style={{ backgroundImage: `url(${section})` }} className='text-white '>
                <div className='flex flex-col xl:flex-row justify-center items-center gap-4 backdrop-brightness-50 py-20'>
                    <div className='gap-4 border-t-4 light-blue-border'>
                        <div className='flex flex-col items-center justify-center border light-blue-border rounded-bl-lg rounded-br-lg w-64 h-56'>
                        <img src="" alt="" />
                        <h2 className='text-6xl font-bold'>750+</h2>
                        <p className='font-semibold text-lg'>Finished Projects</p>
                        </div>
                    </div>

                    <div className='gap-4 border-t-4 light-blue-border'>
                        <div className='flex flex-col items-center justify-center border light-blue-border rounded-bl-lg rounded-br-lg w-64 h-56 '>
                        <img src="" alt="" />
                        <h2 className='text-6xl font-bold'>23+</h2>
                        <p className='font-semibold text-lg'>Created Jobs</p>
                        </div>
                    </div>

                    <div className='gap-4 border-t-4 light-blue-border'>
                        <div className='flex flex-col items-center justify-center border light-blue-border rounded-bl-lg rounded-br-lg w-64 h-56 '>
                        <img src="" alt="" />
                        <h2 className='text-6xl font-bold'>200+</h2>
                        <p className='font-semibold text-lg'>Years Of Experience</p>
                        </div>
                    </div>

                    <div className='gap-4 border-t-4 light-blue-border card'>
                        <div className='flex flex-col items-center justify-center border light-blue-border rounded-bl-lg rounded-br-lg w-64 h-56 '>
                        <img src="" alt="" />
                        <h2 className='text-6xl font-bold'>28+</h2>
                        <p className='font-semibold text-lg'>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
