import HeadingIcon from '@/components/ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Cost = () => {
    return (
        <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[24px]'>
                <div className='md:col-span-1'>
                    <Image src="/assets/best_concrete_pumping_services/cost.png" alt='cost image' width={862} height={433}/>
                </div>
                <div className='md:col-span-1'>
                    <div>
                        <HeadingIcon text={headingIconText.cost__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center md:text-left '>How Much Concrete Pump <span className='text-primary'>Cost?</span> 
                    </h2>
                    <p className='text-lg text-primary-50 font-medium leading-[40px] text-center md:text-left mt-[10px]'>The cost of a concrete pump can vary widely depending on factors such as size, brand, and features. Generally, smaller and more basic models may start around <span className='text-primary'>$25,000</span> to <span className='text-primary'>$50,000,</span> while larger and more advanced units can cost upwards of <span className='text-primary'>$200,000</span> or more. Additional expenses may include delivery, setup, and maintenance costs. Used concrete pumps can offer a more affordable option, with prices ranging from <span className='text-primary'>$10,000</span> to <span className='text-primary'>$150,000,</span> depending on the condition and specifications. It's essential to consider your specific project needs and budget constraints when determining the most suitable option. Additionally, factor in long-term operating costs and potential returns on investment when making your decision.</p>
                </div>
            </div>
        </div>
    );
};

export default Cost;