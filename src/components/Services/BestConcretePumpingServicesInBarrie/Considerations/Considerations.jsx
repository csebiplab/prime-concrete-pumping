import React from "react";

import "./Considerations.css";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from '@/utils/heading-text';

const howWeDesginData = [
    {
        id : 1, 
        title : "Reputation and Track Record",
    },
    {
        id : 2, 
        title : "Experience and Expertise",
    },
    {
        id : 3, 
        title : "Range of Services Offered",
    },
    {
        id : 4, 
        title : "Quality of Equipment & Technology",
    },
    {
        id : 5, 
        title : "Compliance with Industry Standards & Regulations",
    },
    {
        id : 6, 
        title : "Availability of Emergency Response Services",
    },
    {
        id : 7, 
        title : "Geographic Coverage & Accessibility",
    },
    {
        id : 8, 
        title : "Customer Reviews and Testimonials",
    },
    {
        id : 9, 
        title : "Cost-effectiveness and Value for Money",
    },
    {
        id : 10, 
        title : "Flexibility in Scheduling & Operations",
    },
    {
        id : 11, 
        title : "Commitment to Safety and Environmental Protection",
    },
    {
        id : 12, 
        title : "Training and Certification of Personnel",
    },
    {
        id : 13, 
        title : "Communication & Customer Support",
    },
    {
        id : 14, 
        title : "Warranty and Maintenance Support",
    },
    {
        id : 15, 
        title : "Sustainable Practices and Green Initiatives",
    },
    {
        id : 16, 
        title : "Transparency in Pricing & Contracts",
    },
    {
        id : 17, 
        title : "Compatibility with Specific Project Requirements",
    },
    {
        id : 18, 
        title : "Referrals & Recommendations from Peers",
    },
    {
        id : 19, 
        title : "Longevity and Stability in the Market",
    },
    {
        id : 20, 
        title : "Financial Stability and Insurance Coverage.",
    },
]

const Considerations = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
        <HeadingIcon text={headingIconText.considerations__headingIconText}/>
          <h4 className="text-[25px] md:text-[26px] lg:text-[28px] xl:text-[30px] 2xl:text-[31px] 3xl:text-[33px] 4xl:text-[35px] 5xl:text-[36px] text-primary-50 font-bold leading-normal text-center">
          Considerations to Choose the <span className="text-primary">Best Pumping Company</span>
          </h4>
          <p className="text-lg text-primary-50 font-medium leading-[40px] text-center mt-[10px]">
          Choosing the best concrete pumping company involves several considerations to ensure efficiency, reliability, and cost-effectiveness. Here are key factors to weigh:  By carefully considering these factors, you can select a pumping company that meets your specific needs and delivers reliable, efficient service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[35px] mt-[25px]">
            {
                howWeDesginData?.map((data)=>{
                    return <div key={data.id} className="how_we_cart___bg py-[14px] 5xl:py-[20px] px-[12px]">
                        <p className="text-[20px] text-center font-bold text-primary-50 leading-[40px]">{data.title}</p>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Considerations;
