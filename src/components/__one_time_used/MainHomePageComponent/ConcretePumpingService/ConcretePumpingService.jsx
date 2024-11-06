import Image from "next/image";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

import "./ConcretePumpingService.css";

const ConcretePumpingService = () => {
  return (
    <div className="">
      <div className="custom-container px-4 md:px-0 mb-[60px] grid grid-cols-1 md:grid-cols-8 md:gap-4">
        <div
          className="order-1 md:order-2 md:col-span-4 card__onImg  border-2 shadow-md md:rounded-xl xs:rounded-t-xl z-10 5xl:ml-[285px] 4xl:ml-[200px] 3xl:ml-[180px] 2xl:ml-[130px] xl:ml-[90px] lg:ml-[50px]
          md:w-[520px] lg:w-[700px] xl:w-[750px] 2xl:w-[780px] 3xl:w-[800px] 4xl:w-[900px] 5xl:w-[925px] my-0 md:my-12 lg:my-16 3xl:my-20 px-6 py-7"
        >
          <div className="flex flex-col">
            <HeadingIcon
              text={headingIconText.concretePumpingService__IconText}
            />

            <h3 className="mb-[15px] md:mb-[25px] !mt-[10px] md:mt-4 text-black text-lg md:text-3xl lg:text-4xl font-medium">
              Best Concrete Pumping Service Provider in
              <span className="text-primary"> Toronto</span>
            </h3>
            <p className="text-sm lg:text-base 2xl:text-lg font-medium leading-[194%]">
              Prime Concrete Pumping stands out as the premier choice for
              concrete pumping services in Toronto. With a reputation built on
              reliability, efficiency, and exceptional customer service, our
              pumping company offers a range of solutions to meet the diverse
              needs of construction projects of any scale. Their
              state-of-the-art equipment and highly skilled operators ensure
              precision and accuracy in every job, whether it's residential,
              commercial, or industrial. From foundation pours to high-rise
              constructions, our concrete company delivers seamless and timely
              concrete placement, maximizing productivity and minimizing
              downtime. Their commitment to safety is unparalleled, adhering to
              strict industry standards and protocols to ensure the well-being
              of both their team and clients. With a dedication to excellence
              and a proven track record of success, our company is the trusted
              partner for all pumping needs in Toronto.
            </p>
          </div>
        </div>

        <div className="w-full md:col-span-4 md:order-2">
          <Image
            src="/assets/images/pmpng-srvc.png"
            alt="Trusted general contractor"
            width={807}
            height={715}
            loading="lazy"
            className="w-full h-full xs:rounded-b-xl md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ConcretePumpingService;
