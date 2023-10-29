import React, { useState } from 'react'
import services from '../data.json'
import { BsArrowRight } from 'react-icons/bs'


export const Services = () => {
    const [cards] = useState(services)

    return (
        <section className='px-4 lg:px-20 py-8'>
            <div className='lg:flex items-center justify-between'>
                <div className='flex flex-col gap-4'>
                    <span className='uppercase font-semibold light-blue-text'>• services •</span>
                    <h3 className='text-5xl font-semibold text-white'>Services We Offer</h3>
                    <p className='text-slate-300 lg:text-lg max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto dolorum inventore totam adipisci</p>
                </div>

                <div className='py-5'>
                    <button className='px-12 py-3 md:py-4 light-blue-bg rounded-tr-2xl rounded-bl-2xl text-white font-semibold tracking-wide'>See All Services</button>
                </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 text-white gap-6 mt-16">
                {cards.services.map((card) => {
                    const { id, content, tagline, image, CTA } = card

                    return (
                        <div className='flex flex-col gap-4 p-6 border light-blue-border rounded-lg px-12 services' key={id}>
                            <div className='p-4'>
                                <img src={image} alt='' className='w-12'></img>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">{tagline}</h3>
                            </div>
                            <div className=''>
                                <p className=" text-slate-300">{content}</p>
                            </div>
                            <div className="flex items-center gap-2 light-blue-text font-semibold">
                                <button >{CTA}</button>
                                <BsArrowRight className='w-4' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
