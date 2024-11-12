import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/best_concrete_pumping_services/aboutUs.png" alt='about us image' width={585} height={670}/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center md:text-left '>About Our <br/> <span className='text-primary'>Barrie Concrete Pumping Contractors</span> 
                    </h2>
                    <p className='text-lg text-primary-50 font-medium leading-[40px] text-center md:text-left mt-[10px]'>Our Barrie concrete pumping contractors excel in delivering top-notch concrete pumping services tailored to meet diverse construction needs. With years of expertise, we ensure precise, efficient, and timely concrete placement for projects of all sizes. Our skilled team utilizes advanced equipment and techniques to guarantee smooth concrete flow, minimizing wastage and maximizing productivity. Whether it's residential, commercial, or industrial projects, we prioritize safety, quality, and client satisfaction. Trust us for seamless pumping solutions in Barrie and beyond, where reliability meets excellence.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;