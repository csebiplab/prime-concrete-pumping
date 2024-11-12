import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const ReadyToStart = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/best_concrete_pumping_services/readyToStart.png" alt='ready to start image' width={862} height={473}/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingIconText.readyToStartProject__headingIconText}/>
                    </div>
                    <h5 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary font-bold leading-normal text-center md:text-left '>Ready to Start Your 
                     <br/> <span className='text-primary-50'>Barrie Concrete Pumping Project</span> 
                    </h5>
                    <p className='text-lg text-primary-50 font-medium leading-[40px] text-center md:text-left mt-[10px]'>Get ready to elevate your construction project with our Barrie concrete pumping services! Our experienced team utilizes state-of-the-art equipment to efficiently and precisely deliver concrete wherever you need it, whether it's high-rise buildings, intricate structures, or remote locations. We understand the importance of timely and accurate concrete placement, ensuring a seamless workflow and superior results for your project. With a commitment to safety, reliability, and professionalism, we provide tailored solutions to meet your specific needs, no matter the scale or complexity. Trust Prime Concrete Pumping for unparalleled expertise and exceptional service, driving your project to success with ease and efficiency.</p>
                </div>
            </div>
        </div>
    );
};

export default ReadyToStart;