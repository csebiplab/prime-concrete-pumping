import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const DepandableConcretePumpTruck = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-[50px]">
        <div className="order-2 md:order-1">
          <div className="">
            <div className="flex md:justify-normal justify-center md:items-start items-center">
              <HeadingIcon
                text={headingIconText.DepandableConcrete__IconText}
              />
            </div>
            <h3 className="mb-[25px] text-2xl md:text-3xl lg:text-4xl text-dark leading-normal text-center md:text-start">
              <span className="text-primary">Dependable </span>
              Concrete Pump Trucks Toronto
            </h3>
            <p className="text-lg font-medium leading-[194%]">
              Prime Concrete Pumping offers dependable concrete pump trucks in
              Toronto and surrounding areas. With years of experience in the
              industry, we specialize in providing efficient and reliable
              concrete pumping services for residential, commercial, and
              industrial projects. Our fleet of state-of-the-art pump trucks and
              experienced operators ensure precise and timely concrete
              placement, saving you time and labor costs. Whether you need
              concrete pumped for foundations, slabs, columns, or any other
              construction needs, we have the expertise and equipment to get the
              job done safely and efficiently.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="grid grid-cols-7 gap-x-4">
            <div className="col-span-4 border border-red-600">
              <div>
                <div className="mb-6 w-full h-[132px] flex justify-center">
                  <Image
                    src="/assets/images/dp1.png"
                    alt="About us"
                    width={352}
                    height={147}
                    className="!max-h-[147px] w-full"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/images/dp2.png"
                    alt="About us"
                    width={352}
                    height={288}
                    className="!max-h-[288px] w-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3 border border-red-600">
              <Image
                src="/assets/images/dp3.png"
                alt="About us"
                width={292}
                height={716}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepandableConcretePumpTruck;
