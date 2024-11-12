import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const TrustyCompany = () => {
    return (
        <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/best_concrete_pumping_services/trustyCompany.png" alt='trustyCompany image' width={919} height={513}/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className='flex justify-center md:justify-start items-center'>
                        <HeadingIcon text={headingIconText.trustyCompany__headingIconText}/>
                    </div>
                    <h3 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center md:text-left '>Experienced Pumping Company <br/> <span className='text-primary'>You Can Trust</span> 
                    </h3>
                    <p className='text-lg text-primary-50 font-medium leading-[40px] text-center md:text-left mt-[10px]'>Trust in the reliable expertise of our pumping company for all your fluid handling needs. With years of experience under our belt, we deliver unparalleled service and top-quality solutions for various industries. From sewage to industrial fluids, we have the equipment and know-how to handle it all efficiently and safely. Our team of skilled professionals is dedicated to providing personalized solutions tailored to your specific requirements, ensuring maximum efficiency and cost-effectiveness. Whether you require installation, maintenance, or emergency repairs, you can rely on us to deliver prompt and reliable service, every time. Choose peace of mind and unmatched reliability - choose our pumping company for all your fluid management needs.</p>
                </div>
            </div>
        </div>
    );
};

export default TrustyCompany;