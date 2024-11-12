"use client";
import HeadingIcon from "@/components/ui/HeadingIcon";
import "./HireUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    id : 1,
    title: "Unreliable equipment.",
  },
  {
    id : 2,
    title: "Poor customer service.",
  },
  {
    id : 3,
    title: "Inefficient scheduling.",
  },
  {
    id : 4,
    title: "Lack of transparency in pricing.",
  },
  {
    id : 5,
    title: "Frequent breakdowns.",
  },
  {
    id : 6,
    title: "Inexperienced or untrained staff.",
  },
  {
    id : 7,
    title: "Limited availability during emergencies.",
  },
  {
    id : 8,
    title: "Neglect of safety protocols.",
  },
  {
    id : 9,
    title: "Subpar maintenance of equipment.",
  },
  {
    id : 10,
    title: "Disregard for environmental regulations.",
  }
];
const easyPool = [
  {
    id : 1,
    title: "Reliable & timely pump maintenance & repair",
  },
  {
    id : 2,
    title: "Experienced team ensuring smooth operation",
  },
  {
    id : 3,
    title: "Quality equipment for optimal performance.",
  },
  {
    id : 4,
    title: "Tailored solutions to meet specific needs.",
  },
  {
    id : 5,
    title: "Dedicated customer support for quick assist",
  },
  {
    id : 6,
    title: "Proven track record of client satisfaction.",
  },
  {
    id : 7,
    title: "Efficient & cost-effective pumping solutions",
  },
  {
    id : 8,
    title: "Committed to safety and compliance standard",
  },
  {
    id : 9,
    title: "Flexible scheduling for convenience.",
  },
  {
    id : 10,
    title: "Trusted partner for all pumping needs.",
  } 
];

const HireUs = () => {
  return (
    <div className="">
      <div className="bg_vinylPool container padding__top">
        <div className="shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            
          <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon
                text={headingIconText.hireUs__headingIconText}
              />
              </div>

              <div>
                <h5 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary font-bold leading-normal text-center md:text-left">
                Hire <span className="text-primary-50">the Perfect Pumping Service Provider</span>
                </h5>
              </div>

              <div>
                <p className="text-lg text-primary-50 font-medium leading-[40px] text-center md:text-left mt-[10px]">
                Finding the perfect concrete pumping service provider involves more than just selecting a company at random. It requires careful consideration of factors like reliability, expertise, and efficiency. Look for a provider with a proven track record in the industry, equipped with modern equipment and skilled professionals. By choosing a pumping service provider that ticks all these boxes, you can rest assured that your pumping needs will be handled with precision and professionalism.
                </p>
              </div>
            </div>
            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="font-family-secondary title-bg text-center 2xl:py-[15px] py-[14px] text-dark-500 text-base md:text-lg font-bold">
              Usual pumping service provider
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[20px] px-[10px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool?.map((usual) => (
                  <div key={usual?.id}>
                  <div
                  
                    className="flex gap-2 items-center leading-none"
                  >
                    <Image
                      src="/assets/best_concrete_pumping_services/icons/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="font-family-secondary text-xs 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </div>
                  
                  
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className="font-family-secondary flex justify-center items-center gap-[5px] 5xl:gap-[10px] title-bg2 text-center 2xl:py-[15px] py-[14px] text-dark-500 text-base md:text-lg font-bold">
              {/* <Image className="pl-[3px] 5xl:pl-[5px]" src="/assets/glitz/logo/why_chose_us_logo.png" alt="bland logo" width={80} height={80}/> */}
              Our pumping service providers:
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[25px] px-[10px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {easyPool.map((usual) => (
                  <div key={usual?.id}>
                  <div
                    
                    className="flex gap-2 items-center leading-none  "
                  >
                    <Image
                      src="/assets/best_concrete_pumping_services/icons/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="font-family-secondary text-xs 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </div>
                  
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
