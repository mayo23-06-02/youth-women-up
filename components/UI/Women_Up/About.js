import Image from 'next/image'
import React from 'react'
import Item from '../../../assets/images/image-1.png'
import Item2 from '../../../assets/images/Item3.jpg'
import Interviews from './Interviews'
import Item3 from '../../../assets/images/Item4.jpg'
import Item4 from '../../../assets/images/Item5.jpg'



export default function Women_Up_AboutComponent() {
    return (
        <div className='px-4 lg:px-0 space-y-12'>
            <div className='flex lg:justify-between flex-col lg:flex-row '>
                <div>
                    <p className='flex text-2xl lg:text-5xl font-bold pb-6'>WOMEN UP</p>
                </div>
                <div className=' lg:max-w-[600px] flex items-center justify-center flex-col    rounded-lg'>
                    <p className='opacity-80'>Established in 2021 in Mbabane, Eswatini, Woman Up is a grassroots, youth-led organization on the verge of transitioning into a cooperative. </p>

                </div>
            </div>
            <div>
                <Image src={Item2} width={1200} height={200} className='rounded' alt='pic2' />

            </div>
            <div className='h-0.5  bg-gray2 w-full' />
            <div className='lg:grid grid-cols-5 grid-flow-row'>
                <div className='text-2xl lg:text-4xl font-bold flex items-center pb-6  lg:items-start space-x-3 lg:-space-y-2 col-span-2 lg:flex-col lg:space-x-0' >
                    <p>Play, Learn  </p>
                    <p>Grow </p>
                    <div className='p-6 pl-0 hidden lg:inline'>
                        <Image src={Item3} width={350} alt='' />
                    </div>
                </div>

                <div className=' opacity-80 lg:text-base space-y-4 col-span-3'>
                    <p>Our primary mission is to foster the personal and economic growth of the country&#39;s youth, with a particular emphasis on young women. We are dedicated to creating a supportive and secure environment where young women can thrive in various facets of their lives.</p>
                    <p>At Woman Up, our central goal is to address the distinctive needs of young women and adolescent girls in Eswatini. We tackle critical topics such as mental health and self-confidence, economic empowerment, career guidance and entrepreneurship, as well as sexual and reproductive health rights. Our focus on these essential areas aims to equip the next generation of women with the tools to lead fulfilling lives and make positive contributions to their communities.</p>
                    <div className='p-6 pl-0  lg:hidden'>
                        <Image src={Item4} width={600} alt='' />
                    </div>
                    <p>Currently, we are actively engaging with a dynamic group of young women aged 16 to 26 through interactive workshops, mentorship partnerships, lectures, and the establishment of a cooperative to promote economic empowerment and nurture their business interests. Each of these young women underwent a rigorous selection process, demonstrating their dedication to personal growth and their eagerness to build a supportive network. Woman Up emerged in response to the challenges young women faced in seeking opportunities for social development, especially during the challenging years of 2021-2023.</p>
                    <p>Our organization serves as a potent platform for the holistic development of our current members and, indeed, all young women and adolescent girls in Eswatini. Through fostering connections, facilitating storytelling, providing networking opportunities, and imparting life-affirming knowledge and skills, we aspire to spark positive change and pave the way for a brighter future.</p>
                    <p>At Woman Up, we firmly believe that empowering young women and adolescent girls is essential for the advancement of society as a whole. By supplying the necessary tools, resources, and a nurturing environment, we are devoted to empowering Eswatini&#39;s youth, inspiring them to dream big and realize their full potential. Together, we can create a transformative impact, one woman at a time.</p>

                </div>

            </div>
            <div className='h-0.5  bg-gray2 w-full' />
            <div className='rounded-lg bg-gray2 w-full space-y-4 p-6'>

                <div className='text-2xl lg:text-4xl font-bold -space-y-2 col-span-2 ' >
                    <p>Meet Our 20 women</p>
                    <p>Cooperative Parners </p>

                </div>
                <div>

                </div>
            </div>
            <div className='h-0.5  bg-gray2 w-full' />
        </div>
    )
}
