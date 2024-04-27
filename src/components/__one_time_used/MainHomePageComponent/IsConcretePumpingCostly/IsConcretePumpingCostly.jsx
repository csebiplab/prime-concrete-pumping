import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const IsConcretePumpingCostly = () => {
  return (
    <div className="container ">
      <div className="mx-auto">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="">
            <Image
              alt="Is Concrete Pumping Costly"
              src="/assets/images/concrete-is-not-costly.png"
              width={650}
              height={580}
              className="w-auto h-auto lg:w-[650px] lg:h-[580px]"
            />
          </div>

          <div>
            <div>
              <div className="flex flex-col  ">
                <HeadingIcon
                  text={headingIconText.IsConcreteCostly__IconText}
                />

                <div>
                  <h3 className="text-black text-lg md:text-3xl lg:text-4xl mb-5 lg:mb-6 font-medium">
                    Concrete Pumping Cost
                    <span className="text-primary"> Is Not Very High</span>
                  </h3>
                  <p className="text-lg font-medium leading-[194%]">
                    Concrete pumping cost is often perceived as prohibitive, but
                    in reality, it's a cost-effective solution for many
                    construction projects. While initial estimates may seem
                    high, the efficiency and speed of concrete pumping can
                    significantly reduce overall expenses. By eliminating the
                    need for manual labor-intensive methods like wheelbarrows or
                    cranes, pumping saves time and manpower, translating to
                    lower labor costs. Additionally, its precise delivery
                    minimizes material waste, optimizing resource utilization
                    and reducing overall project expenses. Moreover, the
                    versatility of concrete pumps allows for reaching difficult
                    or elevated areas with ease, further streamlining the
                    construction process. When considering the long-term
                    benefits of faster project completion and reduced labor and
                    material expenses, the cost of concrete pumping proves to be
                    a worthwhile investment for any construction endeavor.
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

export default IsConcretePumpingCostly;
