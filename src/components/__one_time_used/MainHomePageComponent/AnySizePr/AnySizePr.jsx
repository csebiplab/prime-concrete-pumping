import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const AnySizePr = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12">
        <div className="relative">
          <Image
            src="/assets/images/anysize1.png"
            alt="Any size project with us"
            width={469}
            height={425}
            className="w-[262px] h-[238px] lg:w-[300px] lg:h-[280px] 2xl:w-[469px] 2xl:h-[425px]"
          />
          <Image
            src="/assets/images/anysize2.png"
            alt="Any size project with us"
            width={351}
            height={276}
            className="w-[196px] h-[154px] lg:w-[280px] lg:h-[200px] 2xl:w-[351px] 2xl:h-[276px] absolute right-6 top-48"
          />
        </div>
        <div>
          <HeadingIcon text={headingIconText.anySizePr__IconText} />
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

export default AnySizePr;
