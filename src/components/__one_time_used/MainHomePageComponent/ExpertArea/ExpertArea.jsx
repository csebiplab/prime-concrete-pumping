import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

import "./ExpertArea.css";

const ExpertArea = () => {
  return (
    <div className="full__section_r_p">
      <div className="relative flex flex-col lg:flex-row items-center">
        <div className="mb-5 lg:mb-0 lg:mr-5 lg:w-[50%]">
          <Image
            alt="Is Concrete Pumping Costly"
            src="/assets/images/expert-area.png"
            width={807}
            height={715}
            className="w-full h-auto lg:w-[807px] lg:h-[715px]"
          />
        </div>
        <div className="card__onImg border py-7 px-3 border-red-500 w-full lg:max-w-[60%] lg:absolute lg:right-0">
          <HeadingIcon text={headingIconText.expertArea__IconText} />
          <h3 className="text-black text-lg md:text-3xl lg:text-4xl mb-5 lg:mb-6 font-medium">
            Expert
            <span className="text-primary"> Concrete Line Pump Toronto</span>
          </h3>
          <p className="text-sm lg:text-base 2xl:text-lg font-medium leading-[194%]">
            Looking for expert concrete line pumping services in Toronto? Look
            no further than Prime Concrete Pumping. With years of experience and
            a commitment to excellence, our company is your go-to partner for
            all your pumping needs. Our team of skilled professionals utilizes
            top-of-the-line equipment to deliver precise and efficient concrete
            pumping solutions for projects of any size or complexity. With a
            dedication to precision, efficiency, and top-notch customer service,
            we deliver unparalleled results for projects of all sizes. Our
            cutting-edge equipment and highly skilled operators ensure smooth
            and accurate concrete placement, saving you time and money while
            maximizing quality. Whether it's residential, commercial, or
            industrial projects, our company is committed to exceeding
            expectations every time. Trust us to elevate your pumping experience
            to new heights in Toronto and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertArea;
