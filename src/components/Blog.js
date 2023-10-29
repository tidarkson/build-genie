import React, { useState } from 'react'
import blog from '../data.json'
import { BsArrowRight } from 'react-icons/bs'


export const Blog = () => {
    const [cards] = useState(blog)

    return (
        <section className='px-5 xl:px-20 py-16'>
            <div className='lg:flex items-center justify-between'>
                <div className='flex flex-col gap-4 py-4'>
                    <span className='uppercase font-semibold light-blue-text'>• Blog •</span>
                    <h3 className='text-5xl font-semibold text-white'>Latest News</h3>
                </div>

                <div>
                    <button className='px-12 py-4 light-blue-bg rounded-tr-2xl rounded-bl-2xl text-white font-semibold tracking-wide'>See All Posts</button>
                </div>
            </div>

            <div className="flex flex-col lg:grid grid-cols-3 text-white gap-8 mt-16">
                {cards.blog.map((card) => {
                    const { id, title, image, tag, author, content, CTA, Date } = card

                    return (
                        <div className='' key={id}>
                            <div >
                                <img src={image} alt="" className="rounded w-full" />
                            </div>

                            <div className="flex flex-col gap-4 py-8 px-6 justify-start blog">
                                <div className="flex items-center justify-start gap-8">
                                    <div>
                                        {/* icon */}
                                        <p>{tag}</p>
                                    </div>
                                    <div>
                                        {/* icon */}
                                        <p>{author}</p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold">{title}</h3>
                                    <p className="text-slate-300">{content}</p>
                                </div>

                                <div className='flex items-center justify-start gap-2 light-blue-text'>
                                    <button className='font-semibold'>{CTA}</button>
                                    <BsArrowRight className='text-2xl' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
