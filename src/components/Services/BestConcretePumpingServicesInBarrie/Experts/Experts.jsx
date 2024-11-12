import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Experts = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/best_concrete_pumping_services/expert.png" alt='experts image' width={763} height={815}/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingIconText.expertInBarrie__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center md:text-left '>#1 Concrete Pumping Experts <br/> <span className='text-primary'> in Barrie</span> 
                    </h2>
                    <p className='text-lg text-primary-50 font-medium leading-[40px] text-center md:text-left mt-[10px]'>Are you looking for top-tier pumping services in Barrie? Look no further! Our team of experienced professionals is dedicated to delivering exceptional concrete pumping solutions tailored to your project's needs. With a reputation for reliability, efficiency, and precision, we pride ourselves on being the go-to experts for all your pumping requirements in the Barrie area. Whether you're working on residential, commercial, or industrial projects, we have the expertise and state-of-the-art equipment to handle any job, big or small. From foundation pours to high-rise construction, we ensure smooth and efficient concrete placement, saving you time and labor costs. Trust Prime Concrete Pumping in Barrie to elevate your project to new heights. Contact us today to discuss your concrete pumping needs and experience the difference between working with true professionals.</p>
                </div>
            </div>
        </div>
    );
};

export default Experts;