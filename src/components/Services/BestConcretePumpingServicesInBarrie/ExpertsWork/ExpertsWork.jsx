import React from "react";

import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from '@/utils/heading-text';

const servicesData = [
  {
    id: 1,
    img: "/assets/best_concrete_pumping_services/expert_work/expert1.png",
    title: "Initial Consultation",
    desc: "We start by understanding your pumping needs. Whether it's for a construction project, a residential upgrade, or any other purpose, we gather all the necessary information to tailor our services to your requirements."
  },
  {
    id: 2,
    img: "/assets/best_concrete_pumping_services/expert_work/expert2.png",
    title: "Site Assessment",
    desc: "Our team conducts a thorough assessment of the site where concrete pumping is needed. We consider factors such as accessibility, terrain, and any potential obstacles to developing the best pumping strategy."
  },
  {
    id: 3,
    img: "/assets/best_concrete_pumping_services/expert_work/expert3.png",
    title: "Planning and Preparation",
    desc: "Based on the site assessment, we created a detailed plan for the pumping process. This includes selecting the appropriate equipment, determining the optimal placement of the pump, and ensuring safety measures are in place."
  },
  {
    id: 4,
    img: "/assets/best_concrete_pumping_services/expert_work/expert4.png",
    title: "Continuous Monitoring",
    desc: "Throughout the pumping process, our team continuously monitors the equipment and the concrete flow to maintain optimal performance. Any issues or adjustments needed are addressed promptly to minimize disruptions."
  },
  {
    id: 5,
    img: "/assets/best_concrete_pumping_services/expert_work/expert5.png",
    title: "Cleanup and Maintenance",
    desc: "Once the pumping is complete, we thoroughly clean up the site, removing any excess concrete or debris. We also conduct routine maintenance on our equipment to keep it in top condition for future projects."
  },
  {
    id: 6,
    img: "/assets/best_concrete_pumping_services/expert_work/expert6.png",
    title: "Assurance & Client Satisfy",
    desc: "We maintain strict quality control measures to ensure that the concrete meets your specifications. Our goal is to deliver a smooth, uniform pour that meets the highest standards of quality and durability."
  },
];

const ExpertsWork = () => {
  return (
    <div>
      <div className="container padding__top">
      <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingIconText.expertWork__headingIconText}/>
          <h2 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center">
          How Do Our Barrie Concrete Pumping <span className="text-primary">Experts Work?</span>
          </h2>
          <p className="text-lg text-primary-50 font-medium leading-[40px] text-center mt-[10px]">
          Our Barrie concrete pumping experts work closely with clients to ensure a smooth and efficient process. Here's a breakdown of how we operate: By following these steps and working closely with our clients, our Barrie concrete pumping experts deliver exceptional results, meeting deadlines and exceeding expectations with every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] 5xl:gap-[75px] mt-[25px]">
          {servicesData?.map((data) => {
            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.img}
                  alt="working image"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className="font-family-secondary text-[22px] 5xl:text-[25px] font-bold text-primary-50 text-center leading-9 pt-[12px] pb-[5px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-lg font-light text-primary-5- text-center pb-[25px]">
                  {data.desc}
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-100" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ExpertsWork;
