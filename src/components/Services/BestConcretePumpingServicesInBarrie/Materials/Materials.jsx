import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";
import "./Materials.css";

const Materials = () => {
  return (
    <div className="full__section_r_p pl-3 md:pl-0 padding__top">
      <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="md:col-span-2">
          <Image
            src="/assets/best_concrete_pumping_services/materials.png"
            alt="materials"
            width={807}
            height={715}
            className="w-full"
          />
        </div>
        <div className="md:col-span-3 z-30">
          <div className="flex flex-col items-center md:items-start justify-start join_cart_bg py-[10px] md:py-[20px] 5xl:py-[37px] px-[12px] md:px-[20px] 5xl:px-[33px] mt-[10px] 2xl:mt-[23px] -ml-0 md:-ml-[80px] -mt-[25px] md:mt-0">
          <div>
                        <HeadingIcon text={headingIconText.materials__headingIconText}/>
                    </div>
                    <h2 className='text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center md:text-left '>Heaving the Right <span className='text-primary'>Pumping Materials</span> 
                    </h2>
                    <p className='text-lg text-primary-50 font-medium leading-normal text-center md:text-left mt-[10px]'>Ensuring the use of the right concrete pumping materials is paramount for efficient and reliable operations across various industries and we have the right pumping materials. From agriculture to oil and gas, selecting appropriate materials such as pumps, pipes, and fittings is crucial for optimal performance and longevity of the pumping system. Factors like fluid type, temperature, pressure, and corrosiveness must be carefully considered when choosing materials. High-quality materials resistant to wear, corrosion, and chemical degradation help minimize downtime, maintenance costs, and environmental risks. Additionally, utilizing the right pumping materials enhances safety and ensures compliance with industry standards and regulations. By investing in suitable materials, businesses can maximize productivity, minimize risks, and prolong the lifespan of their pumping systems, ultimately leading to improved overall performance and cost-effectiveness.</p>
            
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Materials;
