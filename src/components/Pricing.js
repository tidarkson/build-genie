import React, { useState } from 'react'
import pricing from '../data.json'

export const Pricing = () => {

    const [cards] = useState(pricing)

    return (
        <section className='px-5 lg:px-20'>
            <div className='lg:flex items-center justify-between'>
                <div className='flex flex-col gap-4 py-4'>
                    <span className='uppercase font-semibold light-blue-text'>• pricing plans •</span>
                    <h3 className='text-5xl lg:font-semibold text-white'>Affordable Pricing Plans</h3>
                    <p className='text-slate-300 text-lg font-semibold max-w-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto dolorum inventore totam adipisci</p>
                </div>

                <div>
                    <button className='px-12 py-4 light-blue-bg rounded-tr-2xl rounded-bl-2xl text-white font-semibold tracking-wide'>See All Plans</button>
                </div>
            </div>


            <div className="flex flex-col md:grid grid-cols-2 xl:flex xl:flex-row items-center justify-center gap-6 text-white py-20">
                {cards.pricing.map((card) => {
                    const { id, title, price, image, CTA } = card

                    return (
                        <div className='flex flex-col gap-4 items-center justify-center border light-blue-border p-8 rounded w-full' key={id}>
                            <div>
                                <img src={image} alt='' className=''></img>
                                <h3 className="text-2xl font-semibold">{title}</h3>
                            </div>
                            <div className='flex'>
                                <span className='text-2xl light-blue-text font-semibold'>$</span>
                                <p className="text-6xl font-bold">{price}</p>
                            </div>
                            <div className='border-b-4 light-blue-border pb-4'>
                                <p className='italic font-semibold text-slate-300 px-6'>Per Project</p>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-6'>
                                <p>150 Lorem, Ipsum Dolor.</p>
                                <p>20 Lorem Ipsum Dolor Sit .</p>
                                <p>Lorem Ipsum Dolor Sit.</p>
                                <p>Lorem Ipsum Dolor Sit.</p>
                                <p>Added Lorem Ipsum Dolor.
                                </p>
                            </div>
                            <div className="pt-4">
                            </div>
                            <button className='px-12 py-4 border-2 light-blue-border rounded-tr-2xl rounded-bl-2xl light-blue-text font-semibold tracking-wide w-full'>{CTA}</button>

                        </div>
                    )
                })}
            </div>

        </section>
    )
}
