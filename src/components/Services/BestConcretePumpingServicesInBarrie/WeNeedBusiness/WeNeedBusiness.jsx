import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WeNeedBusiness = () => {
    return (
        <div className='container padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/best_concrete_pumping_services/weLeedBusiness.png" alt='we need business image' width={660} height={506}/>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingIconText.weLeadBusiness__headingIconText}/>
                    </div>
                    <h3 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center md:text-left '>We Lead  <br/> <span className='text-primary'> the Barrie Concrete Pumping Business</span> 
                    </h3>
                    <p className='text-lg text-primary-50 font-medium leading-[40px] text-center md:text-left mt-[10px]'>Prime Concrete Pumping leads the industry in delivering efficient and reliable pumping solutions in Barrie. With a dedicated team of skilled professionals and state-of-the-art equipment, we excel in meeting the diverse needs of construction projects throughout Barrie and surrounding areas. Whether it's residential, commercial, or <Link href="https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Industrial" rel='nofollow' target='_blank'>industrial projects,</Link> we provide innovative pumping services tailored to each client's specifications. From small-scale renovations to large-scale developments, we ensure precise and timely concrete placement, maximizing productivity and minimizing downtime. Trust us for unparalleled expertise and unmatched results in the Barrie concrete pumping business.</p>
                </div>
            </div>
        </div>
    );
};

export default WeNeedBusiness;