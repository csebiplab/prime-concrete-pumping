import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const OurServices = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
                <div className='order-2 md:col-span-1'>
                    <Image src="/assets/best_concrete_pumping_services/ourServices.png" alt='our services image' width={919} height={593}/>
                </div>
                <div className='order-1 md:col-span-1'>
                    <div>
                        <HeadingIcon text={headingIconText.ourServices__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center md:text-left '>Our Concrete Pumping Services <br/> <span className='text-primary'>in Barrie</span> 
                    </h2>
                    <p className='text-lg text-primary-50 font-medium leading-[40px] text-center md:text-left mt-[10px]'>Experience top-notch concrete pumping services in Barrie with our professional team. We specialize in delivering high-quality ground line pumps and boom pump solutions for projects of all sizes, ensuring efficiency and precision. Ground line pumps are essential equipment used in various industries for transferring liquids such as water, oil, or chemicals. Boom pumps are specialized construction equipment used in concrete pouring. They consist of a remote-controlled robotic arm (the boom) mounted on a truck chassis, capable of precisely placing concrete in high or hard-to-reach areas. Ideal for large-scale projects. Our state-of-the-art equipment and skilled operators guarantee smooth and accurate concrete placement, saving you time and labor costs. Whether it's residential, commercial, or industrial projects, we are committed to exceeding your expectations with reliable service and exceptional results.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;