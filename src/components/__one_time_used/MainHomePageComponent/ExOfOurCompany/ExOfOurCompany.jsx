import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const ExOfOurCompany = () => {
  return (
    <div className="container">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="">
            <Image
              alt="Experience Of Our Company"
              src="/assets/images/exp.png"
              width={648}
              height={437}
              className="w-auto h-auto lg:w-[650px] lg:h-[545px]"
            />
          </div>

          <div>
            <div>
              <div className="flex flex-col  ">
                <HeadingIcon text={headingIconText.exOfOurCompany__IconText} />

                <div>
                  <h3 className="text-black text-lg md:text-3xl lg:text-4xl mb-5 lg:mb-6 font-medium">
                    Experienced{" "}
                    <span className="text-primary">
                      {" "}
                      Concrete Pumping Toronto{" "}
                    </span>
                  </h3>
                  <p className="text-lg font-medium leading-[194%]">
                    Prime Concrete Pumping is Toronto's premier choice for
                    expert concrete pumping services. With years of experience
                    in the industry, we specialize in delivering high-quality
                    pumping solutions for projects of all sizes. Our team of
                    skilled professionals is committed to providing exceptional
                    service, utilizing state-of-the-art equipment to ensure
                    precise and efficient concrete placement. Whether it's a
                    residential, commercial, or industrial project, we have the
                    expertise and resources to meet your needs with reliability
                    and professionalism. From foundation pours to intricate
                    architectural designs, our pumping company delivers results
                    that exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExOfOurCompany;
