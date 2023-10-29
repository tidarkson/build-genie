import { React, useState } from 'react'
import data from '../../src/services.json'


export const Portfolio = () => {
    const [tabs] = useState(data)
    const [value, setValue] = useState(0)
    const details = tabs.data[value].details


    return (
        <section className='py-20 px-5 lg:px-20'>
            <div className='py-4'>
                <div>
                    <span className='uppercase lg:font-semibold light-blue-text'>• portfolio •</span>
                </div>
                <div className='lg:flex items-center justify-between'>
                    <div className='flex flex-col gap-4 py-4'>
                        <h3 className='text-5xl font-semibold text-white'>Awesome Portfolio</h3>
                    </div>

                    <div>
                        <button className='px-12 py-4 light-blue-bg rounded-tr-2xl rounded-bl-2xl text-white font-semibold tracking-wide'>See More</button>
                    </div>
                </div>
            </div>

            <div className='text-white pt-20'>
                <ul className='flex flex-wrap items-center justify-center md:justify-start gap-6'>
                    {tabs.data.map((tab, index) => {
                        const { id, button } = tab

                        return (
                            <>
                                <li key={id} className={`${index === value && "light-blue-text "} hover:light-blue-text`}><button className=' text-lg text-center py-2' onClick={() => setValue(index)}>{button}</button></li>
                            </>
                        )
                    })}
                </ul>

                <div className='md:grid grid-cols-2 xl:grid-cols-3 justify-center items-center gap-6 py-12'>
                    {details.map((detail) => {
                        const { id, image, name } = detail

                        return (
                            <div key={id} className=''>
                                <div className=''>
                                    <div className="">
                                        <img src={image} alt="" className='rounded-lg'/>
                                    </div>
                                    <div>
                                        <p className=''>{name}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
