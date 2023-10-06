import Image from 'next/image'
import React from 'react'
import Item from '../../../assets/images/image-1.png'
import Item2 from '../../../assets/images/About.jpg'
import Team from './Team'


export default function AboutComponent() {
    return (
        <div className='px-4 lg:px-0 space-y-12'>
            <div className='flex lg:justify-between flex-col lg:flex-row '>
                <div>
                    <p className='flex text-2xl lg:text-4xl font-bold '>ABOUT US</p>
                </div>
                <div className=' max-w-[600px] flex items-center justify-center flex-col    rounded-lg'>
                    <p className='opacity-80'>Welcome to the vibrant world of &quot;Youth and Woman Up&quot;, a dynamic non-governmental organization dedicated to advancing the rights and well-being of young people and women by focusing on Mental Health, Economic Empowerment, and Sexual and Reproductive Health Rights. </p>

                </div>
            </div>
            <div>
                <Image src={Item2} width={1200} height={200} alt='' />

            </div>
            <div className='h-0.5  bg-gray2 w-full' />
            <div className='lg:grid grid-cols-5 grid-flow-row'>
                <div className='text-2xl lg:text-4xl font-bold flex items-center  lg:items-start space-x-3 lg:-space-y-2 col-span-2 lg:flex-col lg:space-x-0' >
                    <p>Together we </p>
                    <p>Grow </p>
                </div>

                <div className=' opacity-80 lg:text-base space-y-4 col-span-3'>
                    <p>Our journey began in 2021 with a passionate commitment to foster gender equality, empowerment, and social justice as well as make friends after the isolation of our youth during COVID 19.</p>
                    <p>At our core, we are a youth-led organization with a bold mission: to create an inclusive society where every individual, regardless of gender or age, has the opportunity to reach their full potential. Our approach is rooted in collaboration, co-creation, education, and advocacy, recognizing that sustainable change is born from informed dialogue and comprehensive programs addressing the diverse challenges faced by youth and women.</p>
                    <p>Our track record speaks volumes, having hosted a number of impactful events, all guided by themes suggested by our young members. These events, including healing workshops, discussions on corporate workplace integrity, grief workshops, self-confidence and boundary-setting sessions, and a transformative self-belief retreat in 2023, have received resounding positive feedback.</p>
                    <p>&quot;Youth and Women Up&quot; comprises two distinct segments: our &quot;Women Up&quot; division and our &quot;Youth Up&quot; division.</p>
                    <p>At &quot;Youth and Woman Up&quot;, we believe in the power of youth led collaboration, co-creation, education, and advocacy. We understand that sustainable change requires informed dialogue and comprehensive programs addressing the diverse challenges faced by youth and women. Through partnerships with various stakeholders, we create safe spaces for open discussions, knowledge sharing, and skill development.</p>
                    <p>We take pride in our accomplishments and remain committed to creating meaningful opportunities for empowerment and change. Our success is a testament to the impact achievable through focused programming and dedicated partnerships. Join us in our mission to create a brighter, more inclusive future for all. Together, we can empower youth and women to rise and thrive.
                    </p>
                    <p>
                        We are immensely proud of our accomplishments and unwavering commitment to creating meaningful opportunities for empowerment and change. Join us in our mission to make a difference. Together, we will continue to drive focused programming and collaboration with dedicated partners, shaping a brighter, more inclusive future where youth and women flourish and succeed.
                    </p>
                </div>

            </div>
            <div className='h-0.5  bg-gray2 w-full' />
            <div className='rounded-lg bg-gray2 w-full space-y-4 p-6'>

                <div className='text-2xl lg:text-4xl font-bold -space-y-2 col-span-2 ' >
                    <p>Meet Our </p>
                    <p>Amazing Team </p>

                </div>
                <div>
                    <Team />
                </div>
            </div>
            <div className='h-0.5  bg-gray2 w-full' />
        </div>
    )
}
