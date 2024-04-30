import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const LeadingCompany = () => {
  return (
    <div className="container ">
      <div className="mx-auto">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="">
            <Image
              alt="Is Concrete Pumping Costly"
              src="/assets/images/leading-company.png"
              width={650}
              height={545}
              className="w-auto h-auto lg:w-[650px] lg:h-[545px]"
            />
          </div>

          <div>
            <div>
              <div className="flex flex-col  ">
                <HeadingIcon text={headingIconText.leadingCompany__IconText} />

                <div>
                  <h3 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4  text-black text-lg md:text-3xl lg:text-4xl font-medium">
                    <span className="text-primary"> Leading the Toronto </span>
                    Concrete Pumping Industry
                  </h3>
                  <p className="text-lg font-medium leading-[194%]">
                    Welcome to Prime Concrete Pumping, the premier choice for
                    all your pumping needs in Toronto and beyond. With a
                    commitment to excellence and innovation, we lead the
                    industry with our state-of-the-art equipment and highly
                    skilled operators. Whether it's a small residential project
                    or a large-scale commercial development, our team delivers
                    precision and efficiency, ensuring your project is completed
                    on time and within budget. From high-rise buildings to
                    intricate architectural designs, we specialize in navigating
                    challenging environments with ease, providing seamless
                    concrete placement every time. At our company, we don't just
                    meet expectations – we exceed them, setting the standard for
                    quality and reliability in the industry. Choose us for
                    unparalleled expertise and service that's second to none.
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

export default LeadingCompany;
