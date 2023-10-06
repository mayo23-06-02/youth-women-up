import Image from 'next/image'
import React from 'react'
import Item2 from '../../../assets/images/youth.jpg'



export default function Youth_Up_AboutComponent() {
    return (
        <div className='px-4 space-y-12'>
            <div className='flex lg:justify-between flex-col lg:flex-row '>
                <div>
                    <p className='flex text-2xl lg:text-5xl font-bold pb-6'>YOUTH UP</p>
                </div>
                <div className=' lg:max-w-[600px] flex items-center justify-center flex-col    rounded-lg'>
                    <p className='opacity-80'>Youth Up&#39;s primary focus on nurturing self-belief, a growth mindset, and confidence in the country's youth.  </p>
                </div>
            </div>
            <div>
                <Image src={Item2} width={1200} height={200} className='rounded' alt='pic2' />
            </div>
            <div className='h-0.5  bg-gray2 w-full' />
            <div className='lg:grid grid-cols-5 grid-flow-row'>
                <div className='text-2xl lg:text-4xl font-bold flex items-center pb-6  lg:items-start space-x-3 lg:-space-y-2 col-span-2 lg:flex-col lg:space-x-0' >
                    <p>Unlocking Eswatini  </p>
                    <p>Full Potential </p>
                </div>
                <div className=' opacity-80 lg:text-base space-y-4 col-span-3'>
                    <p>Founded to empower and uplift young individuals, &quot;Youth Up&quot; is committed to providing essential tools and resources to help young people in eSwatini unlock their full potential.</p>
                    <p>Through a range of innovative programs, workshops, and initiatives, &quot;Youth Up&quot; aims to instill a positive and resilient mindset in the youth, equipping them with the self-confidence and belief in themselves necessary to overcome challenges and seize opportunities. By addressing issues related to self-esteem, self-image, and personal development, the organization seeks to empower the next generation with the self-belief needed to thrive in various aspects of life..</p>
                    <p>&quot;Youth Up&quot; recognizes that fostering self-belief and confidence in young people not only benefits them individually but also contributes to the broader development of eSwatini&#39;s society. By encouraging the youth to dream big, embrace self-worth, and cultivate a mindset of growth and resilience, &quot;Youth Up&quot; plays a pivotal role in nurturing a generation of confident, capable, and empowered individuals who are poised to make a positive impact on their communities and beyond.</p>
                </div>
            </div>
            <div className='h-0.5  bg-gray2 w-full' />
        </div>
    )
}
